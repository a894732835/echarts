//各月份服务事件公司内外情况
var InsideOutsideSituationDivChart;
//各月份服务事件各状态情况
var StateSituationDivChart;
//事件来源分析
var EventSourceDivChart;
//事件性质分析
var EventNatureDivChart;
//各月份配置变更情况
var ConfigureChangeSituationDivChart;
//各月份事件优先级情况
var EventPrioritySituationDivChart;


$(function () {
    //初始化图表
    InitChart();
    //绑定统计数据
    BindContractRepor();
});

//初始化报表
function InitChart() {
    InsideOutsideSituationDivChart = echarts.init(document.getElementById('InsideOutsideSituationDiv'));
    StateSituationDivChart = echarts.init(document.getElementById('StateSituationDiv'));
    EventSourceDivChart = echarts.init(document.getElementById('EventSourceDiv'));
    EventNatureDivChart = echarts.init(document.getElementById('EventNatureDiv'));
    ConfigureChangeSituationDivChart = echarts.init(document.getElementById('ConfigureChangeSituationDiv'));
    EventPrioritySituationDivChart = echarts.init(document.getElementById('EventPrioritySituationDiv'));
}

//绑定数据
function BindContractRepor() {
    GetInsideOutsideSituation();
    GetStateSituation();
    GetEventSource();
    GetEventNature();
    GetConfigureChangeSituation();
    GetEventPrioritySituation();
}
//各月份服务事件公司内外情况
function  GetInsideOutsideSituation() {
    $("#InsideOutsideSituationDiv").hide();
    var option1 = GetBarECharts("各月份服务事件公司内外情况");
    $(".loadtestone").hide();
    InsideOutsideSituationDivChart.setOption(option1);
    $("#InsideOutsideSituationDiv").show();

}

//各月份服务事件各状态情况
function  GetStateSituation() {
    $("#StateSituationDiv").hide();
    var option1 = GetLineBarECharts('各月份服务事件各状态情况');
    $(".loadtesttwo").hide();
    StateSituationDivChart.setOption(option1);
    $("#StateSituationDiv").show();
}

//事件来源分析
function  GetEventSource() {
    $("#EventSourceDiv").hide();
    var option1 = GetPieECharts('事件来源分析');
    $(".loadtestthree").hide();
    EventSourceDivChart.setOption(option1);
    $("#EventSourceDiv").show();
}

//事件性质分析
function  GetEventNature() {
    $("#EventNatureDiv").hide();
    var option1 = GetPieECharts('事件性质分析');
    option1.legend.data=['遗留问题处理','内部支持','设备收取与恢复','合同服务','合同外','故障服务','其他'];
    option1.series[0].data=[
                    {value:8, name:'遗留问题处理'},
                    {value:142, name:'内部支持'},
                    {value:0, name:'设备收取与恢复'},
                    {value:1895, name:'合同服务'},
                    {value:45, name:'合同外'},
                    {value:1046, name:'故障服务'},
                    {value:1, name:'其他'}
                ];
    $(".loadtestfour").hide();
    EventNatureDivChart.setOption(option1);
    $("#EventNatureDiv").show();
}

//各月份配置变更情况
function  GetConfigureChangeSituation() {
    $("#ConfigureChangeSituationDiv").hide();
    var option1 = GetBarECharts('各月份配置变更情况');
    option1.legend.data=['新增','维修','卸载','涉及配置'];
    option1.series=[
            {
                name:'新增',
                type:'bar',
                stack:'数量',
                data:[500, 800, 300, 200, 100, 76, 123, 421, 123, 111, 1, 15]
            },
            {
                name:'维修',
                type:'bar',
                stack:'数量',
                data:[2, 3, 4, 5, 6, 7, 6, 18, 48, 18, 6, 2]
            },
            {
                name:'卸载',
                type:'bar',
                stack:'数量',
                data:[2, 5, 9, 26, 28, 70, 17, 12, 47, 18, 0, 3]
            },
            {
                name:'涉及配置',
                type:'line',
                data:[523, 822, 333, 325, 256, 210, 220, 501, 229, 176, 12, 36]
            }
        ];
    $(".loadtestfive").hide();
    ConfigureChangeSituationDivChart.setOption(option1);
    $("#ConfigureChangeSituationDiv").show();
}

//各月份事件优先级情况
function GetEventPrioritySituation() {
    $("#EventPrioritySituationDiv").hide();
    var option1 = GetBarECharts("各月份事件优先级情况");
    option1.legend.data=['P1级','P2级','P3级','P4级'];
    option1.series=[
            {
                name:'P1级',
                type:'bar',
                data:[89, 32, 30, 33, 30, 30, 30]
            },
            {
                name:'P2级',
                type:'bar',
                data:[7, 13, 10, 14, 0, 20, 21]
            }, 
            {
                name:'P3级',
                type:'bar',
                data:[87, 32, 30, 33, 30, 30, 30]
            },
            {
                name:'P4级',
                type:'bar',
                data:[27, 12, 11, 13, 90, 20, 20]
            }  
        ];
    $(".loadtestsix").hide();
    EventPrioritySituationDivChart.setOption(option1);
    $("#EventPrioritySituationDiv").show();
}

$(document).ready(function(){
  $(".box-one").mouseover(function(){
    $(".icon-one").hide();
    $("#beizhu1").show();
  });
  $(".box-one").mouseout(function(){
    $("#beizhu1").hide();
    $(".icon-one").show();
  });
  $(".box-two").mouseover(function(){
    $(".icon-two").hide();
    $("#beizhu2").show();
  });
  $(".box-two").mouseout(function(){
    $("#beizhu2").hide();
    $(".icon-two").show();
  });
  $(".box-three").mouseover(function(){
    $(".icon-three").hide();
    $("#beizhu3").show();
  });
  $(".box-three").mouseout(function(){
    $("#beizhu3").hide();
    $(".icon-three").show();
  });
  $(".box-four").mouseover(function(){
    $(".icon-four").hide();
    $("#beizhu4").show();
  });
  $(".box-four").mouseout(function(){
    $("#beizhu4").hide();
    $(".icon-four").show();
  });
});
