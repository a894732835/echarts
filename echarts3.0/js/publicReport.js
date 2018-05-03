//Ajax异常处理函数
function ajaxError(XMLHttpRequest, textStatus, errorThrown) {
    console.log(XMLHttpRequest);
    console.log(textStatus);
    console.log(errorThrown);
}

//获得柱状图
function GetBarCharOption(title,contentToOption) {
    var option = {
        // title:title,
        title: {
            text: title == null ? '柱状图' : title,
            subtext: '',
            x: 'center'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                //dataView: {
                //    optionToContent: barOptionToContent,
                //},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            //formatter: "{b}<br/>{a}:{c}%"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '数量',
                type: 'bar',
                barWidth: '60%',
                data: []
            }
        ]
    };

    return option;
}

//百分比专用柱状图


//堆叠柱状图
function GetStackBarCharOption(title,contentToOption) {
    var option = {
        title: {
            text: title == null ? '堆叠柱状图' : title,
            subtext: '',
            x: 'center'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                //dataView: {
                //    optionToContent: barOptionToContent,
                //},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: [],
            orient: 'vertical',
            left: 0
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: []
    };

    return option;
}

//获得饼状图的配置项
function GetPieChartOption(title) {

    var option = {
        title: {
            text: title == null ? '饼状图' : title,
            subtext: '',
            x: 'center'
        },
        toolbox: {
            // y: 'bottom',
            feature: {

                //dataView: {
                //    optionToContent: optionToContent
                //},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            data: [],
            orient: 'vertical',
            left:0
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [],
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

//获得散点图的配置项
function GetScatterChartOption(title) {

    var option = {
        title: {
            text: title == null ? '饼状图' : title,
            subtext: '',
            x: 'center'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                //dataView: {
                //    optionToContent: barOptionToContent,
                //},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: []
        },
        //grid: {
        //    x: '10%',
        //    x2: 150,
        //    y: '18%',
        //    y2: '10%'
        //},
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
        },
        xAxis: {
            type: 'value',
            name: '次数',
            nameGap: 5,
            max: 30
        },
        yAxis: {
            type: 'value',
            name: '得分',
            nameLocation: 'end',
            nameGap: 1
        },
        series: []
    };

    return option;
}

//折线图
function Discount(arr, count) {

    var option = {
        tooltip: {
            trigger: 'axis'
        },        
        toolbox: {
            // y: 'bottom',
            feature: {
                //dataView: {
                //    optionToContent: barOptionToContent,
                //},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        legend: {
            data: [],
            orient: 'vertical',
            left: 0
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: arr
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                name: '告警趋势',
                type: 'line',
                data: count,
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }
        ]
    };

    return option;
}

//条状图
function GetStripCharOption(title) {
    var option = {
        title: {
            text: title == null ? '堆叠条状图' : title,
            subtext: '',
            x: 'center'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                //dataView: {
                //    optionToContent: barOptionToContent,
                //},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: [],
            orient: 'vertical',
            left:0
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            top:'20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: []
        },
        series: []
    };

    return option;
}