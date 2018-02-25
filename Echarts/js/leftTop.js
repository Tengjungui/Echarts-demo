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

function(ecTop){

    var myChartLeftTop=ecTop.init(document.getElementById('leftTop'));

    var dataArr1=[1320, 1132, 601, 234, 120, 500, 20,32,40,1570];

    var option = {
        title : {
            //text: '',
            //subtext:'当前并发数',
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
            data:['并发数'],
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
                name:'并发数',
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
               data:dataArr1

            },


        ]
    };


    //myChartLeftTop.setOption(option);

    //波动图
    setInterval(function(){
          var el=dataArr1.shift();    //删除并返回数组的第一个元素
          dataArr1.push(el);          //向数组的末尾添加删除的元素

          myChartLeftTop.setOption({
              series: [{
                data: dataArr1
              }]
          });

    },2500);




    var leftTop=option;
    myChartLeftTop.showLoading({
        text : 'loading...',
        effect: 'spin',
        itemStyle:{
          fontSize:16
        }
    });
    clearTimeout(loadingLeftTop);
    var loadingLeftTop=setTimeout(function (){
        myChartLeftTop.hideLoading();
        myChartLeftTop.setOption(leftTop);
    }, 2000);

    }
);
