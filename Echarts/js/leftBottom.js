var myChartLeftBottom=echarts.init(document.getElementById('leftBottom'));

var option = {
    title : {
        //text: '标题',
        subtext: '纯属虚构_3',
        subtextStyle:{
          fontSize:16,
          color:'#fff'
        },
        x:'center'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['内容'],
        x:'center',
        y:'bottom',
        textStyle:{
          color:'#fff'
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1','2','3','4','5','6','7'],
            axisLabel : {
              textStyle:{
                color:'#fff'
              }
            },
            axisLine : {    // 轴线
              show: true,
                lineStyle: {
                  color: '#013a45',
                  type: 'solid',
                  width: 0.5
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
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
              textStyle:{
                color:'#fff'
              }
            },
            axisLine : {    // 轴线
            show: true,
              lineStyle: {
                color: '#013a45',
                type: 'solid',
                width: 0.5
              }
          },
          splitLine : {
              show:false
          }
        }
    ],
    grid:{
        width:'70%',
        borderColor:'none',
        borderWidth:0,
        containLabel: true
    },
    series : [
        {
            name:'内容',
            type:'bar',
            itemStyle: {
                normal: {
                  color:'rgba(3,221,231,0.8)',  //柱形图填充颜色
                }
            },
            data:[45, 115, 7.0, 23.2, 25.6, 76.7, 35.6],

        }
    ]
};
//myChartLeftBottom.setOption(option);

var leftBottom=option;
myChartLeftBottom.showLoading({
    text : 'loading...',
    effect: 'spin',
    itemStyle:{
      fontSize:16
    }
});
clearTimeout(loadingLeftBottom);
var loadingLeftBottom=setTimeout(function (){
    myChartLeftBottom.hideLoading();
    myChartLeftBottom.setOption(leftBottom);
}, 2400);
