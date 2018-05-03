// JavaScript Document
var myAgeChart;
var myTitleChart;
var myCompanyChart;
var myYearChart;

$(function(){
	
	require.config({  
        paths: {  
            echarts: 'js/echarts'  
        }  
    });  
      
    // 使用  
    require(  
        [  
            'echarts',  
            'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载  
            'echarts/chart/pie',
            'echarts/chart/scatter'
        ],  
        function (ec) {  
        	//科技成果库分析
       	var myTechnologyChart = ec.init(document.getElementById('technologyDiv'));
           	var myKnowledgeChart = ec.init(document.getElementById('knowledgeDiv'));
           	var myStageChart = ec.init(document.getElementById('stageDiv'));
           	var technologyOption = GetScatterTechnologyECharts();
           	var knowledgeOption = GetScatterTechnologyECharts();
           	var stageOption = GetScatterTechnologyECharts();
       		myTechnologyChart.setOption(technologyOption);
       		myKnowledgeChart.setOption(knowledgeOption);
       		myStageChart.setOption(stageOption);
       		
       		//科研单位分析
        	myCompanyChart = ec.init(document.getElementById('companyDiv'));
        	GetPieC();
        	myYearChart = ec.init(document.getElementById('yearDiv'));  
        	GetPieY();
			
        	 
			
        	
        	//科技人才分析
        	myAgeChart = ec.init(document.getElementById('ageDiv'));
        	GetBar();
        	myTitleChart = ec.init(document.getElementById('titleDiv'));
        	GetBarT();
      	
        	
        	//应用技术分析
			var mySourceChart = ec.init(document.getElementById('sourceDiv'));
			var myLevelChart = ec.init(document.getElementById('levelDiv'));
			var sourceOption = GetBarSourceECharts();
			var levelOption = GetBarLevelECharts();
			mySourceChart.setOption(sourceOption); 
			myLevelChart.setOption(levelOption); 
        }  
    );
})
function GetBar() {
	var ageOption = GetBarAgeECharts();
	var param={};
	param.type = '1';
	$.ajax({
    	type: "POST",
 		contentType: "application/json",
 		data : JSON.stringify(param),
 		dataType : "json",
 		url: basePath+'member/queryMemberInfo.do',
        success : function(res){
        	
	        if(res.flag=true){
	        	/*option.xAxis[0].data=[];*/
	        	for (var i = 0; i < res.memberInfoList.length; i++) {
	                var ro = res.memberInfoList[i];
	                var name = ro.info; //名称
	                var value = ro.count;
	                
	                ageOption.series[0].data.push(value);
	               
	                ageOption.xAxis[0].data.push(name.toString() + "岁");
	            }
	        }
	        myAgeChart.setOption(ageOption);
        },
        error : function (res){
        	/* alert(2); */
        }
	});
    
}
function GetBarT() {
	var titleOption = GetBarTitleECharts();
	var param={};
	param.type = '2';
	$.ajax({
    	type: "POST",
 		contentType: "application/json",
 		data : JSON.stringify(param),
 		dataType : "json",
 		url: basePath+'member/queryMemberInfo.do',
        success : function(res){
        	
	        if(res.flag=true){
	        	/*option.xAxis[0].data=[];*/
	        	for (var i = 0; i < res.memberInfoList.length; i++) {
	                var ro = res.memberInfoList[i];
	                var name = ro.info; //名称
	                var value = ro.count;
	                
	                titleOption.series[0].data.push(value);
	               
	                titleOption.xAxis[0].data.push(name);
	            }
	        }
	        myTitleChart.setOption(titleOption);
        },
        error : function (res){
        	/* alert(2); */
        }
	});
    
}
function GetPieC() {
	var companyOption = GetPieCompanyECharts();
	var param={};
	param.type = '1';
	$.ajax({
    	type: "POST",
 		contentType: "application/json",
 		data : JSON.stringify(param),
 		dataType : "json",
 		url: basePath+'base/queryBaseInfo.do',
        success : function(res){

        	
	        if(res.flag=true){
	        	/*option.xAxis[0].data=[];*/
	        	for (var i = 0; i < res.baseInfoList.length; i++) {
	                var ro = res.baseInfoList[i];
	                var name = ro.info; //名称
	                var value = ro.count;
	                var item = {
	                        value: value,
	                        name: name
	                    }
	                
	                companyOption.series[0].data.push(item);
	                companyOption.legend.data.push(name);
	               
	            }
	        }
	        myCompanyChart.setOption(companyOption);
        },
        error : function (res){
        	/* alert(2); */
        }
	});
    
}
function GetPieY() {
	var yearOption =GetPieYearECharts();
	var param={};
	param.type = '2';
	$.ajax({
    	type: "POST",
 		contentType: "application/json",
 		data : JSON.stringify(param),
 		dataType : "json",
 		url: basePath+'base/queryBaseInfo.do',
        success : function(res){

        	
	        if(res.flag=true){
	        	/*option.xAxis[0].data=[];*/
	        	for (var i = 0; i < res.baseInfoList.length; i++) {
	                var ro = res.baseInfoList[i];
	                var name = ro.info; //名称
	                var value = ro.count;
	                var item = {
	                        value: value,
	                        name: name
	                    }
	                
	                yearOption.series[0].data.push(item);
	                yearOption.legend.data.push(name);
	               
	            }
	        }
	        myYearChart.setOption(yearOption);
        },
        error : function (res){
        	/* alert(2); */
        }
	});
    
}
//柱状图
function GetBarAgeECharts(){
	
	option = {
			backgroundColor:'#f3f3f3',
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow',
		            /*shadowStyle: {
		                color: '#f1f1f1'
		            }*/
		        }
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            saveAsImage : {show: true}
		        }
		    },
		    grid: {
		    	 x: 25,
		    	 y: 20,
		    	 width: 370,
		    	 height: 245

		    },
		    xAxis : [
		        {
		        	name :'年龄',		            
		            data : [],
		        	type :'category'
		        }
		    ],
		    yAxis : [
		        {
		        	name : '人数',
		            type : 'value'
		        }
		    ],
		    itemStyle: {
		        normal: {
		        	color: 'red'
		        }
		    },
		    series : [
		        {
		            name:'人数',
		            type:'bar',
		            data:[],
		            itemStyle: {
				        normal: {
				        	color: '#36a9ce',
				        	label : {show: true, position: 'insideTop'}
				        }
				    }
		       
		        }
		        
		        
		        
		    ]
		};
	return option;
	
}
function GetBarEducationECharts(){
	option = {
			backgroundColor:'#f3f3f3',
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow',
		            /*shadowStyle: {
		                color: '#f1f1f1'
		            }*/
		        }
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            saveAsImage : {show: true}
		        }
		    },
		    grid: {
		    	 x: 25,
		    	 y: 20,
		    	 width: 370,
		    	 height: 245

		    },
		    xAxis : [
		        {
		        	name : '学历',
		            type : 'category',
		            data : ['小学','初中','高中','大专','大学']
		        }
		    ],
		    yAxis : [
		        {
		        	name : '人数',
		            type : 'value'
		        }
		    ],
		    itemStyle: {
		        normal: {
		        	color: 'red'
		        }
		    },
		    series : [
		        {
		            name:'人数',
		            type:'bar',
		            data:[20, 25, 28, 35, 57],
		            itemStyle: {
				        normal: {
				        	color: '#c0504d',
				        	label : {show: true, position: 'insideTop'}
				        }
				    }
		       
		        }
		        
		        
		        
		    ]
		};
	return option;
}
function GetBarTitleECharts(){
//	url : 'dhcpSysLog/querybeifenLogList.do',
	option = {
			backgroundColor:'#f3f3f3',
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow',
		            /*shadowStyle: {
		                color: '#f1f1f1'
		            }*/
		        }
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            saveAsImage : {show: true}
		        }
		    },
		    grid: {
		    	 x: 25,
		    	 y: 20,
		    	 width: 370,
		    	 height: 245

		    },
		    xAxis : [
		        {
		        	name : '职称',
		            type : 'category',
		            data : []
		        }
		    ],
		    yAxis : [
		        {
		        	name : '人数',
		            type : 'value'
		        }
		    ],
		    itemStyle: {
		        normal: {
		        	color: 'red'
		        }
		    },
		    series : [
		        {
		            name:'人数',
		            type:'bar',
		            data:[],
		            itemStyle: {
				        normal: {
				        	color: '#9bbb59',
				        	label : {show: true, position: 'insideTop'}
				        }
				    }
		       
		        }
		        
		        
		        
		    ]
		};
	return option;
}

//环形图
function GetPieCompanyECharts(){
	option = {
			backgroundColor:'#f3f3f3',
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:[]
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            
		            saveAsImage : {show: true}
		        }
		    },
		    series : [
		        {
		            name:'工作单位',
		            type:'pie',
		            radius : ['50%', '70%'],
		            itemStyle : {
		                normal : {
		                    label : {
		                        show : true
		                    },
		                    labelLine : {
		                        show : true
		                    }
		                },
		                emphasis : {
		                    label : {
		                        show : true,
		                        position : 'center',
		                        textStyle : {
		                            fontSize : '30',
		                            fontWeight : 'bold'
		                        }
		                    }
		                }
		            },
		            data:[
		                /*{value:'', name:'',
		                	itemStyle: {
						        normal: {
						        	color: '#91c7ae'
						        }
						    }},
		                {value:'', name:'',
		                	itemStyle: {
						        normal: {
						        	color: '#91c7ae'
						        }
						    }},
		                {value:'', name:'',
		                	itemStyle: {
						        normal: {
						        	color: '#d48265'
						        }
						    }},
		                {value:'', name:'',
		                	itemStyle: {
						        normal: {
						        	color: '#546570'
						        }
						    }},
		                {value:'', name:'',
		                	itemStyle: {
						        normal: {
						        	color: '#bda29a'
						        }
						    }}*/
		            ]
		        }
		    ]
		};
	return option;
}
//饼图
function GetPieYearECharts(){
	option = {
			backgroundColor:'#f3f3f3',
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:[]
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            saveAsImage : {show: true}
		        }
		    },
		    /*grid: {
		    	 x: 5,
		    	 y: 20

		    },*/
		    series : [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius : '80%',
		            center: ['50%', '45%'],
		            data:[/*{
		            		 value:'', 
		                	 name:'',
		                	 itemStyle: {
						         normal: {
						        	color: '#6ab0b8'
						         }
						     }
		                   },
						   {
			                   value:'', 
						       name:'',
						       itemStyle: {
							        normal: {
							        	color: '#c23531'
							        }
							    }
						   },
		                {
							   value:'', 
							   name:'',
							   itemStyle: {
							        normal: {
							        	color: '#2f4554'
							        }
							    }
		                	},
		                {
		                		value:'', 
		                		name:'',
		                		itemStyle: {
							        normal: {
							        	color: '#ca8622'
							        }
							    }
		                	},
		                {
		                		value:1548, 
		                		name:'2018',
		                		itemStyle: {
							        normal: {
							        	color: '#749f83'
							        }
							    }
		                	}*/
		            ]
		        }
		    ]
		};
	return option;
}
//散点图
function GetScatterTechnologyECharts(){
	function random(){
	    var r = Math.round(Math.random() * 100);
	    return (r * (r % 2 == 0 ? 1 : 1));
	}

	function randomDataArray() {
	    var d = [];
	    var len = 100;
	    while (len--) {
	        d.push([
	            random(),
	            random(),
	            Math.abs(random()),
	        ]);
	    }
	    return d;
	}

	option = {
		backgroundColor:'#f3f3f3',
	    tooltip : {
	        trigger: 'axis',
	        showDelay : 0,
	        axisPointer:{
	            show: true,
	            type : 'cross',
	            lineStyle: {
	                type : 'dashed',
	                width : 1
	            }
	        }
	    },
	    legend: {
	        data:['scatter1','scatter2']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            
	            saveAsImage : {show: true}
	        }
	    },
	    xAxis : [
	        {
	            type : 'value',
	            splitNumber: 4,
	            scale: true
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            splitNumber: 4,
	            scale: true
	        }
	    ],
	    grid: {
	    	 x: 25,
	    	 y: 20,
	    	 width: 370,
	    	 height: 245

	    },
	    series : [
	        {
	            name:'scatter1',
	            type:'scatter',
	            symbolSize: function (value){
	                return Math.round(value[1] / 10);
	            },
	            data: []
	        },
	        {
	            name:'scatter2',
	            type:'scatter',
	            symbolSize: function (value){
	                return Math.round(value[1] / 10);
	            },
	            symbol: 'circle',
	            data: []
	        }
	    ]
	};
	return option;
}
//柱图
function GetBarSourceECharts(){
	option = {
			backgroundColor:'#f3f3f3',
		    tooltip : {
		        trigger: 'axis',
	        	axisPointer: {
		            type: 'shadow',
		            /*shadowStyle: {
		                color: '#f1f1f1'
		            }*/
		        }
		    },
		    
		    toolbox: {
		        show : true,
		        feature : {
		            saveAsImage : {show: true}
		        }
		    },
		    grid: {
		    	 x: 55,
		    	 y: 40,
		    	 width: 340,
		    	 height: 225

		    },
		    xAxis : [
		        {
		            type : 'value',
		            boundaryGap : [0, 0.01]
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            data : ['国家计划','省部计划','计划外']
		        }
		    ],
		    series : [
		        {
		            
		            type:'bar',
		            data:[],
		            itemStyle: {
				        normal: {
				        	color: '#006699',
				        	label : {show: true, position: 'insideRight'}
				        }
				    }
		        }
		    ]
		};
	return option;
}
function GetBarLevelECharts(){
	option = {
			backgroundColor:'#f3f3f3',
		    tooltip : {
		        trigger: 'axis',
	        	axisPointer: {
		            type: 'shadow',
		            /*shadowStyle: {
		                color: '#f1f1f1'
		            }*/
		        }
		    },
		    
		    toolbox: {
		        show : true,
		        feature : {
		            saveAsImage : {show: true}
		        }
		    },
		    grid: {
		    	 x: 55,
		    	 y: 40,
		    	 width: 340,
		    	 height: 225

		    },
		    xAxis : [
		        {
		            type : 'value',
		            boundaryGap : [0, 0.01]
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            data : ['国际领先','国际先进','国内领先','国内先进']
		        }
		    ],
		    series : [
		        {
		            
		            type:'bar',
		            data:[],
		            itemStyle: {
				        normal: {
				        	color: '#006699',
				        	label : {show: true, position: 'insideRight'}
				        }
				    }
		        }
		    ]
		};
	return option;
}