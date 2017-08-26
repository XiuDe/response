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



