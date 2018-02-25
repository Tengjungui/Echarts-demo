// 路径配置
require.config({
	paths: {
		echarts: './echarts/build/dist'
	}
});

// 使用
require(
	[
		'echarts',
		'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
	],

function(ecCenter){

    var myChartLeftCenter=ecCenter.init(document.getElementById('leftCenter'));

    var dataArr2=[1320, 1132, 601, 234, 120, 500, 20,880,201,650];

    var option = {
        title : {
            //text: '',
            //subtext:'当前设备数',
            subtextStyle:{
              fontSize:16,
              color:'#fff'
            },
            x:'center',
            textStyle:{
              color:'#fff'
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['设备数'],
            x:'center',
            y:'top',
            textStyle:{
              color:'#fff'
            }
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['6','8','10','12','14','16','18','20','22','24'],
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
                      width: 0
                    }
                },
                splitLine : {
                    show:false
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
            },

        ],
        grid:{
            width:'70%',
            borderColor:'none',
            borderWidth:0,
            containLabel: true
        },
        series : [
            {
                name:'设备数',
                type:'line',
                smooth:true,
                itemStyle: {
                  normal: {
                    color:'#fff',  //拆线点颜色
                    lineStyle:{  //拆线条颜色
                      color:'#03dde7',
                      type:'solid'
                    },
                    areaStyle: {
                      color:'rgba(1,137,163,0.5)',  //区域填充
                      type: 'default'
                    }
                  }
                },
                data:dataArr2,

            },


        ]
    };


    //myChartLeftCenter.setOption(option);

    //波动图
    setInterval(function(){
      var el=dataArr2.shift();
      dataArr2.push(el);

      myChartLeftCenter.setOption({
          series: [{
            data: dataArr2
          }]
      });

    },3000);


    var leftCenter=option;
    myChartLeftCenter.showLoading({
        text : 'loading...',
        effect: 'spin',
        itemStyle:{
          fontSize:16
        }
    });
    clearTimeout(loadingLeftCenter);
    var loadingLeftCenter=setTimeout(function (){
        myChartLeftCenter.hideLoading();
        myChartLeftCenter.setOption(leftCenter);
    }, 2000);

}
);
