var myChartLeftTop=echarts.init(document.getElementById('leftTop'));

//app.title = '坐标轴刻度与标签对齐';

var option = {
    title : {
        text: '标题',
        //subtext: '纯属虚构',
        x:'center',
        textStyle:{
          color: '#99CCFF'
        }
    },
    tooltip : {
        trigger: 'splitLine '
    },
    legend: {
        x:'center',
        y:'bottom',
        data:['内容一','内容二'],
        textStyle:{
          color:'#fff'
        }
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日'],
            axisLabel : {
              textStyle:{
                color:'#fff'
              }
            },
            axisLine : {    // 轴线
              show: true,
                lineStyle: {
                  color: 'green',
                  type: 'solid',
                  width: 2
                }
            },
             splitLine : {
                show:true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)',
                    type: 'dashed',
                    width: 1
                }
            }
        },
    ],
    yAxis : [{
        type : 'value',
        axisLabel : {
            formatter: '{value}',
            textStyle:{
              color:'#fff'
            }
        },
        splitLine : {
            show:false,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                type: 'dashed',
                width: 1
            }
        }
    }],
    series : [
        {
            name:'最高',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

myChartLeftTop.setOption(option);
