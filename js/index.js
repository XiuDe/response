$(function(){
	/* 动态响应式轮播图*/
	banner();
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
  
	*/

	/* 1.获取后台的轮播图 图片数据 （ajax） */
	var getData = function(callback){
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
               callback && callback(data);
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
           console.log(imageHtml);
           /*渲染页面*/
           $('.carousel-indicators').html(pointHtml);
           $('.carousel-inner').html(imageHtml);
     	});
     }
   renderHtml();
   /*5.在屏幕尺寸改变的时候需要重新渲染页面 （监听页面尺寸的改变 resize）*/
   $(window).on('resize',function(){
   	  /*屏幕改变重新渲染*/
      renderHtml();
   });
}