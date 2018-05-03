// JavaScript Document

//柱状图
function GetBarECharts(title){
	var option = {
	     title: {
	            text: title == null ? '柱状图' : title,
	            subtext: '',
	            x: 'center',
	            textStyle:{
	            	fontSize:24
	            }
	        },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    toolbox: {

	            feature: {
	                saveAsImage: {
	                    pixelRatio: 2
	                }
	            }
	        },
	    legend: {
	        data:['合同内','合同外'],
	        orient: 'horizontal',
	        top: '10%'
	    },
	    grid: {
	        left: '3%',
	        right: '8%',
	        bottom: '3%',
	        top: '20%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            name : '月份',
	            type : 'category',
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
	        {
	            name : '数量',
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'合同内',
	            type:'bar',
	            data:[879, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'合同外',
	            type:'bar',
	            data:[27, 132, 101, 134, 90, 230, 210],
	        }   
	    ]
	};
	    return option;
}


//折柱混合
function GetLineBarECharts(title){
	var option = {
	    title: {
	            text: title == null ? '柱状图' : title,
	            subtext: '',
	            x: 'center',
	            textStyle:{
	            	fontSize:24
	            }
	        },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            crossStyle: {
	                color: '#999'
	            }
	        }
	    },
	    toolbox: {

	            feature: {
	                saveAsImage: {
	                    pixelRatio: 2
	                }
	            }
	        },
	    legend: {
	        data:['处理中','已解决','未解决','时长'],
	        orient: 'horizontal',
	        top: '10%'
	    },
	    grid: {
	        left: '3%',
	        right: '0%',
	        bottom: '3%',
	        top: '20%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	            axisPointer: {
	                type: 'shadow'
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: '数量'
	        },
	        {
	            //show: false,
	            // axisLine:{
	            //     show:false
	            // },
	            type: 'value',
	            name: '时长',
	            splitLine:{show: false   //去除网格线
	                        }
	        }
	    ],
	    series: [
	        {
	            name:'处理中',
	            type:'bar',
	            stack:'数量',
	            data:[500, 800, 300, 200, 100, 76, 123, 421, 123, 111, 1, 15]
	        },
	        {
	            name:'已解决',
	            type:'bar',
	            stack:'数量',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        },
	        {
	            name:'未解决',
	            type:'bar',
	            stack:'数量',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        },
	        {
	            name:'时长',
	            type:'line',
	            yAxisIndex: 1,
	            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
	        }
	    ]
	};
	return option;
}

//饼图
function GetPieECharts(title){
	var option = {
	    title : {
	        text: title == null ? '饼状图' : title,
	        subtext: '',
	        x:'center',
	        textStyle:{
	            	fontSize:24
	            }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    toolbox: {

	            feature: {
	                saveAsImage: {
	                    pixelRatio: 2
	                }
	            }
	        },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['电话','关联事件','内部开单','软件支持','其他']
	    },
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:2290, name:'电话'},
	                {value:566, name:'关联事件'},
	                {value:293, name:'内部开单'},
	                {value:2, name:'软件支持'},
	                {value:170, name:'其他'}
	            ],
	            label: {
                    normal: {
                        formatter: '{b}:{c} ({d}%)',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                        }
                    }
                },
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	return option;
}