$(function(){
	/* 动态响应式轮播图*/
	banner();
	/* 初始化页签页*/
	initTabs();
	/* 初始化标签工具提示*/
  $('[data-toggle="tooltip"]').tooltip();
});

/*动态响应式轮播图方法*/
function banner(){
	/*
     1.获取后台的轮播图 图片数据 （ajax）
     2.需要判断当前的屏幕是移动端还是非移动端 （768px以下都是移动端）
     3.把后台数据渲染成对应的html字符串 （字符串拼接js来做 & 模板引擎 artTemplate native-template与underscore语法类似）
       underscore库http://www.css88.com/doc/underscore/
     4.把渲染完成的html填充在对应的盒子里面 也就是完成了页面渲染 （渲染到页面当中 .html()）
     5.在屏幕尺寸改变的时候需要重新渲染页面 （监听页面尺寸的改变 resize）
     6.在移动端需要 通过手势来控制图片的轮播 左 next 右 prev
	*/
     // 声明全局变量，接收数据，缓存在内存当中
     var myData;
	/* 1.获取后台的轮播图 图片数据 （ajax） */
	var getData = function(callback){
		// 判断数据是否存在
		if (myData) {
			callback && callback(myData);
			return false;
		}
		// ajax
		$.ajax({
			/*
              js是被html引用的
              发出请求是相对html
              html相对于 index.json 多了一层js文件夹
              相对路径的话 还需要加目录
			*/
			url:'js/index.json',
			data:{},
			dataType:'json',
			success:function(data){
				/*
                  当我们已经请求成功之后 把数据缓存在内存当中
                  当下次调用这个方法的时候，去判断内存当中有没有记录这个数据
                  如果有记录直接返回内存当中的，
                  如果没有记录，再做请求
                  这个记录，用全局变量myData
				*/
				myData = data;
               callback && callback(myData);

			}
		});
	}

	/*渲染方法 */
	/*
	  2.需要判断当前的屏幕是移动端还是非移动端 （768px以下都是移动端）
      3.把后台数据渲染成对应的html字符串 （字符串拼接js来做 & 模板引擎 artTemplate native-template与underscore语法类似）
      4.把渲染完成的html填充在对应的盒子里面 也就是完成了页面渲染 （渲染到页面当中 .html()）
     */
     var renderHtml = function(){
     	/*获取到返回的数据*/
     	getData(function(data){
           /*请求结束 获取数据 完成 然后执行这个*/
           /*当前屏幕的宽度*/
           var width = $(window).width();
           /*是否是移动端*/
           var isMobile = false;
           if (width<768) {
           	isMobile = true;/*就说明当前的屏幕是移动端*/
           }
           /*准备解析数据*/
           /*
             我们需要两个模板 在html底部定义模板
             一个是点的模板，一个是图片的模板
             然后将模板转换成字符串
           */
           /*获取点的模板对象，利用underscode库*/
           var templatePoint = _.template($('#template_point').html());
           /*获取图片的模板对象，利用underscode库*/
           var templateImage = _.template($('#template_item').html());
           /*渲染成html字符 解析成html*/
           /*传入数据 根据模板解析 返回html字符*/
           /*{model:data} 传入的数据 名字叫model 数据是data*/
           var pointHtml = templatePoint({model:data});

           /*如何将ajax返回的data和判断屏幕大小的isMobile传递进去*/
           var imageData = {
           	 list:data,//图片数据
             isMobile:isMobile//是不是移动端
           }
           var imageHtml = templateImage({model:imageData});
           // console.log(imageHtml);
           /*渲染页面*/
           $('.carousel-indicators').html(pointHtml);
           $('.carousel-inner').html(imageHtml);
     	});
     }
   // renderHtml(); 后面window下的.trigger('resize');
   /*5.在屏幕尺寸改变的时候需要重新渲染页面 （监听页面尺寸的改变 resize）*/
   $(window).on('resize',function(){
   	  /*屏幕改变重新渲染，
   	    但是屏幕每次改变ajax会不断发送请求，
   	    解决方案：页面的数据缓存，
   	              在第一次请求到数据的时候sunccess中设置
   	  */
      renderHtml();
   }).trigger('resize');/*.trigger('resize');即时执行这个事件，触发这个事件*/

   
   /*6.在移动端需要 通过手势来控制图片的轮播 左 next 右 prev*/
   /* 
     移动的如果是 负值下一张 正值上一张
     用jQuery实现
   */
   var startX = 0;
   var moveX = 0;
   var distanceX = 0;
   var isMove = false;
   /*绑定事件*/
   $('.wjs_banner').on('touchstart',function(e){
   	 /*怎么获取到第一个触摸点*/
   	 /*jquery e 返回的 originalEvent 就是原声js当中的 touchEvent*/
   	 // console.log(e.originalEvent.touches[0].clientX);
   	 startX = e.originalEvent.touches[0].clientX;
   });
   $('.wjs_banner').on('touchmove',function(e){
     moveX = e.originalEvent.touches[0].clientX;
     distanceX = moveX - startX;
     isMove = true;
     /*从左往右话是正的，上一张；
       从右往左划是负的，下一张console.log(distanceX);*/
   });
   $('.wjs_banner').on('touchend',function(e){
      /*需要与一定的滑动距离才认为它滑动过 必须移动50的距离才认为滑动过*/
      if (Math.abs(distanceX) >50 && isMove) {
      	/*判断对应的手势 来控制轮播图的滚动*/
        /* 左下右上 左负右正 左向左滑*/
        if (distanceX<0) {
           /*向左滑动 下一张*/
           $('.carousel').carousel('next');//bootstrap提供的方法
        }else{
           /*向右滑动 上一张*/
           $('.carousel').carousel('prev');//bootstrap提供的方法
        }
      }
      
      /*参数重置*/
      startX = 0;
      moveX = 0;
      distanceX = 0;
      isMove = false;

   });

}


/*初始化tabs*/
function initTabs(){
	/* 设置父容器的宽度等于 所有 的子容器的宽度的和*/
	var ul = $('.wjs_product .nav-tabs');
	var lis = ul.find('li');
	// console.log(lis);
	var width = 0;
	$.each(lis,function(i,o){
		/*通过width只获取了内容的宽度，内边距没有获取到-->innerWidth()*/
        /*console.log($(o).width());*/
        /*innerWidth()内容+内边距*/
        /*outerWidth()内容+内边距+边框*/
        /*outerWidth(true)内容+内边距+边框+外边距*/
        /*console.log($(o).innerWidth());*/
        width += $(o).innerWidth();
	});
	/*console.log(width);*/
	ul.width(width);

	/*实现在移动端的滑动，ul外面需要一个盒子包裹，不要包裹tab-content*/
	/*实现滑动,利用插件swipe.js*/
	itcast.iScroll({
		swipeDom:$('.wjs_product_tabsParent').get(0),
		swipeType:'x',
		swipeDistance:50
	});
}