$(function(){

//缩放
/*
setTimeout(function (){
    window.onresize = function () {
        myChartMain.resize();
        myChartLeftTop.resize();
        myChartLeftCenter.resize();
    }
},1);
*/


//底部滑动
$('.upDown img').click(function(){
  if($('.fixed-content').is(':hidden')){

    $(this).attr('src','img/up-hide.png');
    $('.fixed-content').slideDown();

    $("#autotype").autotype();//打字机效果调用

  }else{
    $(this).attr('src','img/up-show.png');
    $('.fixed-content').slideUp();

  }
});


//滚动表格
setInterval(function(){
  $(".device-table").find("tbody").animate({
    marginTop:"-18px"
  },1000,function(){
    $(this).css({marginTop:"0px"}).find("tr:first").appendTo(this);
  })
},4000);





//打字机效果
$.fn.autotype = function() {
  var _this = $(this);
  var str = _this.html(); //返回被选 元素的内容
  var index = 0;
  var x = _this.html('');

  var timer = setInterval(function() {

      //substr(index, 1) 方法在字符串中抽取从index下标开始的一个的字符
      var current = str.substr(index, 1);

      if (current == '<') {
          //indexOf() 方法返回">"在字符串中首次出现的位置。
          index = str.indexOf('>', index) + 1;
          console.log(index)
      } else {

          index+=10;

      }
      //console.log(["0到index下标下的字符",str.substring(0, index)],["符号",index & 1 ? '_': '']);
      //substring() 方法用于提取字符串中介于两个指定下标之间的字符
      _this.html( str.substring(0, index) + (index & 1 ? '_': '') );


      if (index >= str.length) {
          clearInterval(timer);
      }

  },100);
};



/* 时间年月日*/
fnTime();
setInterval(fnTime,1000);
function fnTime(){
  var nowDate= new Date();
  var iYear=nowDate.getFullYear();
  var iMon=nowDate.getMonth()+1;
  var iDate=nowDate.getDate();
  var iWeek=nowDate.getDay();
  var iHour=nowDate.getHours();
  var iMinu=nowDate.getMinutes();
  var iSec =nowDate.getSeconds();

  /*格式化天*/
  if(iWeek===0) iWeek='星期日';
  if(iWeek===1) iWeek='星期一';
  if(iWeek===2) iWeek='星期二';
  if(iWeek===3) iWeek='星期三';
  if(iWeek===4) iWeek='星期四';
  if(iWeek===5) iWeek='星期五';
  if(iWeek===6) iWeek='星期六';

$('.yearTime').html(iYear+'年'+toTwo(iMon)+'月'+toTwo(iDate)+'日'+iWeek+' '+toTwo(iHour)+':'+toTwo(iMinu)+':'+toTwo(iSec));
};

/*时间为个位数时前面加0*/
function toTwo(n){
  return n<10? '0'+n : ''+n;
};

});


/*****************数字滚动**************************/
$.fn.countTo = function (options) {
  	options = options || {};

  	return $(this).each(function () {
  		// 为当前元素设置选项
  		var settings = $.extend({}, $.fn.countTo.defaults, {
  			from: $(this).data('from'),
  			to: $(this).data('to'),
  			speed: $(this).data('speed'),
  			refreshInterval: $(this).data('refresh-interval'),
  			decimals: $(this).data('decimals')
  		}, options);

  		// 有多少次更新值，以及在每次更新中增加多少值
  		var loops = Math.ceil(settings.speed / settings.refreshInterval);
  		var	increment = (settings.to - settings.from) / loops;


  		// 每个更新都会更改的引用和变量
  		var self = this,
  			$self = $(this),
  			loopCount = 0,
  			value = settings.from,
  			data = $self.data('countTo') || {};


  		$self.data('countTo', data);

  		//找到一个现有的间隔，首先清除它
  		if (data.interval) {
  			clearInterval(data.interval);
  		}
  		data.interval = setInterval(updateTimer, settings.refreshInterval);

  		// 初始值初始化元素
  		render(value);

  		function updateTimer() {
  			value += increment;
  			loopCount++;

  			render(value);

  			if (typeof(settings.onUpdate) == 'function') {
  				settings.onUpdate.call(self, value);
  			}

  			if (loopCount >= loops) {
  				// 删除间隔
  				$self.removeData('countTo');
  				clearInterval(data.interval);
  				value = settings.to;

  				if (typeof(settings.onComplete) == 'function') {
  					settings.onComplete.call(self, value);
  				}
  			}
  		}

  		function render(value) {
  			var formattedValue = settings.formatter.call(self, value, settings);
  			$self.html(formattedValue);
  		}
  	});
  };

  $.fn.countTo.defaults = {
  	from: 0,               // 元素起始位置
  	to: 0,                 // 结束位置
  	speed: 1000,           // 速度
  	refreshInterval: 100,  // 执行速度
  	decimals: 0,           // 要显示的小数位数
  	formatter: formatter,  // 用于在呈现前格式化值的处理程序
  	onUpdate: null,        // 每次更新元素时，都会调用回调方法
  	onComplete: null       // 当元素完成更新时的回调方法
  };

  function formatter(value, settings) {
  	return value.toFixed(settings.decimals);
  }



  // 自定义格式示例
  $('#count-number').data('countToOptions', {
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  }
  });

  // 开始所有的计时器
  $('.timer').each(count);

  function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
  }
