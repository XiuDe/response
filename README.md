# 微金所项目总结

## 1. CSS 中的结构选择器
  * div a{}
  * div > a{}
  * div + div{}
  * div ~ div{}

#### 1.1 div + div{} 选择目标元素（前一个div）的下一个元素（后面的div）

     <!-- 场景一 -->
     <style type="text/css">
        /* 2 3 4 都变红*/
        div + div{
            color: red;
        }
     </style>
     <div>1</div>
     <div>2</div>
     <div>3</div>
     <div>4</div>

    <!-- 场景二 -->
    <style type="text/css">
        /* 3 变红*/
        .div + div{
            color: red;
        }
     </style>
     <div>1</div>
     <div class="div">2</div>
     <div>3</div>
     <div>4</div>


#### 1.2 div ~ div{} 选择目标元素（前一个div）之后同级的所有元素

     <!-- 场景一 -->
     <style type="text/css">
        /* 2 3 4 都变红*/
        div ~ div{
            color: red;
        }
     </style>
     <div>1</div>
     <div class="div">2</div>
     <div>3</div>
     <div>4</div>

    <!-- 场景二 -->
    <style type="text/css">
        /* 3 4 都变红*/
        .div ~ div{
            color: red;
        }
     </style>
     <div>1</div>
     <div class="div">2</div>
     <div>3</div>
     <div>4</div>


## 2. 字体图标

#### 2.1 引入字体图标

     @font-face{
    font-family: "xxx";
    src:
    url(../fonts/MiFie-Web-Font.eot) format("embedded-opentype"),
    url(../fonts/MiFie-Web-Font.svg) format("svg"),
    url(../fonts/MiFie-Web-Font.ttf) format("truetype"),
    url(../fonts/MiFie-Web-Font.woff) format("woff");
    }

#### 2.2 使用引入的字体图标

    .自定义类名{
      font-family: "xxx";
    }

#### 2.3 字体文件格式

 * eot : embedded-opentype
 * svg : svg
 * ttf : truetype
 * woff : woff

#### 2.4 引入Bootstrap组件 Glyphicons字体图标 [文档链接](http://v3.bootcss.com/components/#glyphicons)

 >HTML的Bootstrap结构搭建好之后，在Glyphicons字体图标找到所需图标复制图标下的类名，在HTML中直接引入。
    
     /*以小箭头为例*/
     <span class="glyphicon glyphicon-menu-down"></span>


## 3. 引用Bootstrap样式 [文档链接](http://v3.bootcss.com/css/)
> 搭建好符合Bootstrap的目录结构，在HTML直接引用。

#### 3.1 引用Bootstrap的按钮样式并自定义修改  [文档链接](http://v3.bootcss.com/css/#buttons)

    <!-- 原样式 -->
    <button type="button" class="btn btn-danger">（危险）Danger</button>
    <button type="button" class="btn btn-link">（链接）Link</button>

    <!-- 修改后 -->
    <a href="#" type="button" class="btn btn-register btn-xs">免费注册</a>
    <a href="#" type="button" class="btn btn-login btn-xs">登录</a>

   * 属性 btn-xs ... 是bootstrap给的属性，设置按钮尺寸大小。
   * 属性 btn-register 和 btn-login是按需求自定义的属性，方便样式的修改。

#### 3.2 引用BootStrap的响应式工具类  [文档链接](http://v3.bootcss.com/css/#responsive-utilities)

> 从 v3.2.0 版本起,不建议使用`visible-*-*` ，我们使用`hidden-*` 。

     <header class="wjs_header hidden-xs hidden-sm">
     ...
     </header>


## 4. 引用Bootstrap组件 [文档链接](http://v3.bootcss.com/components/)

#### 1. 引用Boostrap的导航条组件 collapse.js [文档链接](http://v3.bootcss.com/components/#navbar)

> 按需求修改响应式导航条

    <!-- 导航条 默认样式的导航条 -->
    <nav class="navbar navbar-default">
    <!-- 响应式布局容器 把导航条两边撑满 类改为 container -->
    <div class="container">
      <!-- 这个模块在移动端显示效果比较好 -->
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
       <!-- 在移动端一直显示 汉堡菜单按钮-->
       <!-- 
           包含了collapse的js组件
           data-toggle 和 data-target属性
           1. data-toggle 属性内容就是 组件名称
              当你声明了这个属性的时候，
              就告诉bootstrap这是一个手风琴菜单组件，
              bootstrap就会初始化这个组件，让它有js效果，
              控制一个盒子，让他显示或隐藏。
              怎么样控制这个盒子？
              利用data-target
           2. data-target 内容就是我们指定要控制的那个盒子
              定义我们需要控制哪个盒子
              可以通过class也可以通过id指定我们要控制的盒子
              （当这个按钮是a的时候，那么他还可以通过href来控制，指明id就可以）
           3. aria- 给屏幕阅读器用的
        -->
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <!-- 也是屏幕阅读器用的 screen read only-->
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- 是用来显示logo的 -->
        <a class="navbar-brand" href="#">Brand</a>
      </div>
      <!-- 导航条内容容器 -->
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>

> 1.修改nav原样式，nav中的navbar-default是bootstrap中定义的样式，我们可以找到源代码位置，拷贝到我们的css文件中修改，修改bootstrap中拷贝过来的navbar-default原样式，修改为wjs_nav，以sublime为例 查找快捷键为ctrl+p输入#navbar-default查找到位置，关于[sublime快捷键](https://github.com/XiuDe/apple/blob/master/%E5%89%8D%E7%AB%AF%E6%8E%A2%E7%A9%B6%E5%8F%8A%E4%B9%A6%E5%86%99%E6%96%87%E6%A1%A3%E6%8A%80%E5%B7%A7/%E6%96%87%E6%A1%A3%E7%BC%96%E5%86%99%E6%8A%80%E5%B7%A7.md)。
 
> 2.Sublime在单个文件的替换ctrl+f 选择find all替换比较快捷。



## 5. 引用Bootstrap的JavaScript插件  [文档链接](http://v3.bootcss.com/javascript/)

#### 1. 引用Bootstrap的JavaScript轮播图插件  carousel.js [文档链接](http://v3.bootcss.com/javascript/#carousel)

> 一般Bootstrap中的js插件引用，是自定义属性data-开头的。

       <!-- 轮播图容器 必须声明class为carousel,
       并且它的Bootstrap的js组件为data-ride="carousel"，
       这样Boostrap把这个容器认作轮播图组件，能初始化这个轮播图
       -->
       <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
         <!-- 小圆点的控制  class="carousel-indicators"为小圆点容器-->
         <!-- Indicators -->
         <ol class="carousel-indicators">
         <!-- 
             每个小圆点都应该对应着一个轮播内容容器，大部分为图片（+文字），
             1. data-target是可以控制目标的，指明需要控制的那个容器，
                在这里是控制id为carousel-example-generic的容器也就是最大的div容器  。
             2. data-slide-to是控制小圆点对应的那个具体的内容容器（大部分是大的图片），
         -->
           <li data-target="#carousel-example-generic" data-slide-to="0"   class="active"></li>
           <li data-target="#carousel-example-generic" data-slide-to="1"></li>
           <li data-target="#carousel-example-generic" data-slide-to="2"></li>
         </ol>
      
         <!-- 轮播内容的大容器 -->
         <!-- Wrapper for slides -->
         <div class="carousel-inner" role="listbox">
         <!-- 
             轮播内容为class="item", 
             三个小圆点应该对应三个item，
             包括了图片和文字内容
          -->
           <div class="item active">
             <!-- 图片 -->
             <img src="../wjs/images/slide_01_2000x410.jpg" alt="...">
             <!-- 文字内容 -->
             <div class="carousel-caption">
               ...
             </div>
           </div>
       
           <div class="item">
             <img src="../wjs/images/slide_01_2000x410.jpg" alt="...">
             <div class="carousel-caption">
               ...
             </div>
           </div>
       
           <div class="item">
             <img src="../wjs/images/slide_01_2000x410.jpg" alt="...">
             <div class="carousel-caption">
               ...
             </div>
           </div>
      
         </div>
      
         <!-- 左右两侧的箭头 -->
         <!-- 
          a按钮控制上一张还是下一张，
          我们需要知道控制谁？
          1. 在button标签和li标签中我们用的是data-target
          2. 在a标签中是href控制，href中的内容是轮播图容器的id，
             在这里和上面的data-target中的内容一样
          data-slide用来指明我们按钮的功能 prev 和    next来说明这是一个什么功能的按钮
          -->
         <!-- Controls -->
         <a class="left carousel-control" href="#carousel-example-generic"   role="button" data-slide="prev">
            <!-- 展示箭头图标的，aria开头的都是h5提供给屏幕阅读器的，
               glyphicon glyphicon-chevron-left是Bootstrap提供的字体图标，
            -->
            <span class="glyphicon glyphicon-chevr on-left"   aria-hidden="true"></   span>
            <!-- class="sr-only"是隐藏的 -->
            <span class="sr-only">Previous</span>
         </a>
         <a class="right carousel-control" href="#carousel-example-generic"   role="button" data-slide="next">
             <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"><  /span>
             <span class="sr-only">Next</span>
         </a>
    </div>


> 轮播图会随着屏幕的拉伸等比缩放，如何居中显示轮播图？<br>
> 1. 图片需要设置为背景，而不是引入在在html标签中的`<image>`标签里，在html中用`<a>`标签代替`<image>`，然后设置a的背景。


#### 2. 如何设置移动端轮播图

> 不同于m.jd.com，jd是html的`<image>`标签来做自适应，背景无法做自适应，如果是背景该怎么设置？

      <!-- 静态轮播图，存在弊端 -->
      <!-- 背景在移动端是没法做自适应的，需要图片 -->
        <!-- 
             第一个a标签 适配pc端，hidden-xs在移动端不显示，屏幕大于超小屏幕显示
             第二个a标签适配 移动端,hidden-sm hidden-md hidden-lg设置在小屏幕，中等屏幕，大屏幕隐藏。
             这种方式存在问题，移动端加载会出现卡顿，如何解决？
                 在pc端只加载大图片，移动端只加载小图片
        -->
        <a class="img_box hidden-xs" style="background: url('images/slide_01_2000x410.jpg') no-repeat center" href="#"></a>
        <a class="img_mobble hidden-sm hidden-md hidden-lg" href="#"><img src="images/slide_01_640x340.jpg"></a>

> 上面这段代码是静态的，移动端会出现卡顿，解决方案为：<br>
> &nbsp;&nbsp;&nbsp;&nbsp;利用ajax动态模拟请求图片数据（json格式），利用js根据不同的屏幕大小，加载不同的图片，动态轮播图的形式。


## 3.underscode库使用  [中文文档链接](http://www.css88.com/doc/underscore/)

> Bootstrap下例子演示

     <!DOCTYPE html>
     <html lang="zh-CN">
     <head>
         <meta charset="utf-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
         <title>title</title>
         <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
         <!--自己的css样式-->
         <!-- TODO -->
     </head>
     <body>
     <div id="box"></div>
    
     <!-- TODO -->
     <!--使用了undersocre的each方法
     第一个参数  就当前遍历的对象
     第二个从那时当前遍历的索引
     -->
     <script type="text/template" id="template">
         <div>
             <%_.each(model,function(item,i){%>
                 <p><%-item.name%></p>
             <%});%>
         </div>
     </script>
     <!--说明bootstrap是基于jquery开发的-->
     <!-- jQuery (necessary for Bootstrap's JavaScript plugins) 引用的是jquery-->
     <script src="../lib/jquery/jquery.min.js"></script>
     <!--bootstrap的核心js文件-->
     <script src="../lib/bootstrap/js/bootstrap.min.js"></script>
     <!--自己的js文件  我们基于上面两个框架-->
     <script src="../lib/underscore/underscore-min.js"></script>
     <script>
         $(function(){
             /*
             * - 是直接渲染成字符
             * = 直接填充在html  标签是会被渲染
             * XSS攻击：跨站脚本攻击(Cross Site Scripting)，
             * 为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆
             * 故将跨站脚本攻击缩写为XSS。
             * */
             /* 准备 json  数据*/
             var data = [{name:'<script>alert(0);<\/script>'},{name:'xiaohong'}];
             /* 参数是模板当中的字符串  使用template方法 返回一个模板对象*/
             var template = _.template($('#template').html());
             /*调用模板对象的时候  传入json数据  返回的就是解析过后的字符串*/
             $('#box').html( template({model:data}));
         });
      </script>
      </body>
      </html>

#### 总结underscore库的使用
  1.在html需要的模板放入`<scripe>`标签中作为模板；

     <!-- 需要模板的地方 -->
     <ol class="carousel-indicators">
          <!-- 第一个渲染模板 -->
     </ol>

     <!-- 放入script标签中 -->
    <script type="text/template" id="template_point">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          <li data-target="#carousel-example-generic" data-slide-to="3"></li>
     </script>

 2.在js文件中获取模板对象，渲染成html字符，渲染页面。

     /*获取点的模板对象，利用script中的id，利用underscode库*/
     var templatePoint = _.template($('#template_point').html());
     /*获取图片的模板对象，利用underscode库*/
     var templateImage = _.template($('#template_item').html());
     /*渲染成html字符 解析成html*/
     var pointHtml = templatePoint({});
     /*渲染页面*/
      $('.carousel-indicators').html(pointHtml);
      $('.carousel-inner').html(imageHtml);

> 1，2为静态渲染，如果动态渲染ajax中解析数据，将数据传入2.2{}中。

3.修改2中{}使数据动态添加

     /*渲染成html字符 解析成html*/
     /*{model:data} 传入的数据 名字叫model 数据是data*/
     var pointHtml = templatePoint({model:data});


4.将html中的静态模板内容替换

    <!-- 点盒子内容模板 -->
    <!-- 传入的model是一个数组，模板当中运行的也是js，包裹在<%%>才会被执行 -->
    <script type="text/template" id="template_point">
        <!-- item是对象，i是索引 打印item看看 <%console.log(item);%>-->
        <%_.each(model,function(item,i){%>
          <li data-target="#carousel-example-generic" data-slide-to="<%=i%>" class="<%=i==0?'active':''%>"></li>
        <%});%>
    </script>

5.如何根据不同的屏幕展示出两张不同的图片

5.1 js文件中，把步骤2完善

      /*如何将ajax返回的data和判断屏幕大小的isMobile传递进去*/
      var imageData = {
        list:data,//图片数据
        isMobile:isMobile//bool值判断是不是移动端
      }
      var imageHtml = templateImage({model:imageData});

5.2 html根据不同的屏幕加载不同的轮播图片，还没做到实时监测屏幕大小

> html中图片模板中的model有两个参数

    <!-- 图片内容模板 -->
    <script type="text/template" id="template_item">
           <%_.each(model.list,function(item,i){%>
            <div class="item <%=i==0?'active':''%>">
               <%if(model.isMobile){%>
                  <!-- 通过动态渲染之后 hidden-sm hidden-md hidden-lg这些都没用了，我们已经通过js判断了 -->
                  <a class="img_mobble" href="#"><img src="<%=item.img%>"></a>
               <%}else{%>
                  <a class="img_box" style="background: url('<%=item.bg%>') no-repeat center" href="#"></a>
               <%}%>
            </div>
           <%});%>
    </script>

## 4.js监听页面尺寸的改变

> 在屏幕尺寸改变的时候需要重新渲染页面 监听页面尺寸的改变resize事件

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

> 解决屏幕改变重复请求的问题

        // 判断记录数据是否存在，myData为全局变量
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

## 5.轮播图jQuery实现手动滑动  

#### 5.1引用Bootstrap中JavaScript轮播图插件的参数 [原文链接](http://v3.bootcss.com/javascript/#carousel-options)

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
    
    /*获取结束时，触摸点的位置*/
    $('.wjs_banner').on('touchmove',function(e){
     moveX = e.originalEvent.touches[0].clientX;
     distanceX = moveX - startX;
     isMove = true;
     /*从左往右话是正的，上一张；
       从右往左划是负的，下一张console.log(distanceX);*/
    });
    
    /*根据滑动方向，变换上一张或下一张图片*/
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

## 6.响应式动态轮播图总结

> 1. Bootstrap轮播图结构，及每个标签的用处，静态轮播图；<br>
> 2. 根据pc端和移动端用不同大小的banner图片方式（pc端用的是背景，移动端用的是图片，原因是：①PC上要把banner图显示居中，固定盒子内的图片居中，图片比盒子大，所以用背景；②移动端要做图片的适配父盒子、子盒子、image都要求100%，所以使用图片），这里的弊端是有两张图片，所以要通过bootstrap响应式工具首先设置class类hidden-*，根据不同屏幕显示指定的某一张图片，但是这样还是会加载两张图片，网速不好会影响用户体验。<br> __解决方案：js动态渲染页面，用js判断根据不同的屏幕ajax请求指定的图片__<br>
> 3. js动态渲染轮播图，用到模板引擎，[underscore中文文档链接](http://www.css88.com/doc/underscore/)，异步将图片渲染到页面上，正常的前后交互过程。<br>
> 4. 模拟的后台数据放在index.json下，启动wamp模拟交互，Bootstrap中的Response.js不会在file开头的url地址栏触发，（这里没用到，回想一下）。<br>响应式轮播图的需求步骤为:<br>
> ①获取后台的轮播图 图片数据 （ajax）<br>
> ②需要判断当前的屏幕是移动端还是非移动端 （768px以下都是移动端）<br>
> ③把后台数据渲染成对应的html字符串 （字符串拼接js来做 & 模板引擎 artTemplate native-template与underscore语法类似）<br>
> ④把渲染完成的html填充在对应的盒子里面 也就是完成了页面渲染 （渲染到页面当中 .html()）<br>
> ⑤在屏幕尺寸改变的时候需要重新渲染页面 （监听页面尺寸的改变事件 resize），这个事件后并且用到了jQuery中的即时执行.trigger('resize')；如果没有渲染成功 
> `$('.carousel-indicators').html(pointHtml);`和`$('.carousel-inner').html(imageHtml);`可能出现了问题；<br>
> ⑥在移动端需要 通过手势来控制图片的轮播 左 next 右 prev，通过控制台可以看出jquery e 返回的 originalEvent 就是原声js当中的 touchEvent。<br>
> 
##  7.图片、标题、描述结构和预约栏的响应式

> [Bootstrap组件媒体对象](http://v3.bootcss.com/components/#media)的实际应用

> Bootstrap左浮动class="pull-left" 右浮动class="pull-right"


## 8.标签页[tab用Bootstrap](http://v3.bootcss.com/javascript/#tabs)实现

#### 8.1Bootstrap标签页实现

> 分析结构
    <div>
    <!-- 标签控制区块 -->
    <!-- Nav tabs -->
    <!-- 
        a href 指明当前控制的是哪个内容容器 id class
        data-toggle="tab"是必须声明的
        一定要一一对应
     -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
      <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
      <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
      <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
    </ul>
    
    <!-- 标签页的内容区块 -->
    <!-- Tab panes -->
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="home">...</div>
      <div role="tabpanel" class="tab-pane" id="profile">...</div>
      <div role="tabpanel" class="tab-pane" id="messages">...</div>
      <div role="tabpanel" class="tab-pane" id="settings">...</div>
    </div>
    
    </div>


#### 8.2自定义组件
 
 * 将nav-tabs的bootstrap样式全部拷过来查找， sublime中`ctrl+p`、`#nav-tabs`。
 * 为了避免自定义的组件将原来bootstrap组件覆盖，把css中的`.nav-tabs`修改为`.wjs_product .nav-tabs`。
    - 菜单栏中的查找，查找到所有的然后替换。
 * bootstrap中的点击没有下边框用了`margin-bottom: -1px;`去掉。
 * __修改样式，自定义样式是覆盖掉原来的样式，不是删掉。__
 
#### 8.3tab标签要在移动端能够左右滑动

> 在移动端初始我们的页签页，利用js实现。

> 获取内容宽度
<!--  -->
     /*通过width只获取了内容的宽度，内边距没有获取到-->innerWidth()*/
     /*console.log($(o).width());*/
     /*innerWidth()内容+内边距*/
     /*outerWidth()内容+内边距+边框*/
     /*outerWidth(true)内容+内边距+边框+外边距*/
     console.log($(o).innerWidth());

 > 实现在移动端的滑动，ul外面需要一个盒子包裹`<div class="wjs_product_tabsParent"></div>`。
 
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

#### 8.4不同屏幕实现标签页下不同的显示方式

> 浮动优先，先占位置<br>
> Bootstrap设置盒子中的文字左对齐`text-left`，右对齐`text-right`<br>
> 圆的内阴影设置<br>
>   1.阴影向上偏移```.product_box .box_right::before{top: -6px;box-shadow: 0 -2px 2px #d8d8d8 inset;}```<br>
>   2.阴影向下偏移```.product_box .box_right::after{bottom: -6px;box-shadow: 0 2px 2px #d8d8d8 inset;}```《br》

## 9.Bootstrap的[工具提示](http://v3.bootcss.com/javascript/#tooltips)插件和[进度条](http://v3.bootcss.com/components/#progress)组件

#### 9.1工具提示属性

     <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>

> data-toggle="tooltip"样式<br>
> data-placement="left"控制显示方向<br>
> title="Tooltip on left"提示的信息<br>

#### 9.2`you must initialize them yourself`

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

#### 9.3进度条组件使用
      <!-- 进度条 -->
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
            <span class="sr-only">60% Complete</span>
        </div>
    </div>

## 9.4 标签页出现的问题总结

1. tab页签页的样式重定义覆盖，tab页签页在移动端会掉下来，解决方案把所有子元素的宽度总和算出来给父盒子这个宽度，在移动端设置滑动用到了自己封装的swipe组件。
2. 商品盒子，利用两栏自适应布局，用了右浮动，浮动优先，栅格系统在左边嵌入，半圆阴影的使用，自定义字体标签的浮动。Bootstrap工具提示和滚动条的使用。

## 10.新闻区域响应式制作

#### 10.1栅格系统偏移及列偏移

      <div class="container">
            <div class="row">
                <div class="col-md-2 col-md-offset-2">
                    <div class="wjs_news_title">全部新闻</div>
                </div>
                <div class="col-md-1">2</div>
                <div class="col-md-7">3</div>
            </div>
        </div>

#### 10.2Bootstrap中tab栏的竖直重置

> Bootstrap中[Javascript插件](http://v3.bootcss.com/javascript/#tabs)

> 根据需求将js插件 分别放入我们的两个盒子中

        <div class="col-md-2 col-md-offset-2">
            <div class="wjs_news_title">全部新闻</div>
        </div>
    
        <div class="col-md-1">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
                <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
            </ul>
        </div>
                
        <div class="col-md-7">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="home">1</div>
              <div role="tabpanel" class="tab-pane" id="profile">2</div>
              <div role="tabpanel" class="tab-pane" id="messages">3</div>
              <div role="tabpanel" class="tab-pane" id="settings">4</div>
            </div>
        </div>

#### 10.4重置原样式

> 1.因为之前用到过这个插件所以将`nav-tabs`逐个替换成```wjs_news_tabs```html与css都要替换重置。<br>
> 2.tab鼠标悬浮会出现抖动删除`a`标签下的`border: 1px solid transparent;`防止抖动。<br>
> 3.引入自定义字体。<br>
> 4.Bootstrap中栅格系统的父元素都定为了`position:relative;`。

#### 10.5竖直tab栏的响应式
 1. 小屏幕下竖直tab栏变为水平，左右有间距。
 
        · 超小屏幕下百分比控制间距。
        · 小屏幕下固定间距。
        · 中等屏幕以上没有变化。
        · 大屏幕是竖直的。

 2. 虚线隐藏。
 3. 时间隐藏。

## 11.合作伙伴注意问题

> 使用预定义的字体，引入图标

    <div class="container">
        <h3 class="text-center">合作伙伴</h3>
        <ul>
            <li><a href="#" class="wjs_icon wjs_icon_partner01"></a></li>
            <li><a href="#" class="wjs_icon wjs_icon_partner02"></a></li>
            <li><a href="#" class="wjs_icon wjs_icon_partner03"></a></li>
            <li><a href="#" class="wjs_icon wjs_icon_partner04"></a></li>
            <li><a href="#" class="wjs_icon wjs_icon_partner05"></a></li>
            <li><a href="#" class="wjs_icon wjs_icon_partner06"></a></li>
            <li><a href="#" class="wjs_icon wjs_icon_partner07"></a></li>
            <li><a href="#" class="wjs_icon wjs_icon_partner08"></a></li>
            <li><a href="#" class="wjs_icon wjs_icon_partner09"></a></li>
        </ul>
      </div>

## 12.固定导航条设置引用Bootstrap中的js插件[Affix](http://v3.bootcss.com/javascript/#affix) 

     <div data-spy="affix" data-offset-top="60" data-offset-bottom="200">
       ...
     </div>

## 响应式总结
> 响应式适应各个终端，这里适应了四个终端，看需求，适配几种终端。