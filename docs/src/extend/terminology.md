# 前端术语



## 回调

解释: 从接口调用的角度看，把一个A接口的URL像参数传递那样，传给B接口，A接口会在某个时刻被调用执行，这就叫做回调。
例子: X平台接入公司的统一登录平台：当登录态失效时，X平台调用统一登录平台界面接口，当用户输入手机号码和验证码，统一登录平台校验通过后，统一登录平台再调用X平台提供的登录回调接口，这时统一登录平台会把用户相关信息回传给X平台，X平台注入登录态，最后X平台跳转到首页

## 透传

解释: “透传”从字面上看是：透明无感知地传输数据的含义。
例子: 发短信功能（利用第三方服务腾讯云的发短信接口)：当用户输入手机号码点击发送验证码时，先调用我们自己后台的发短信接口，然后我们后台调用腾讯云的发短信接口，把用户从前端传过来的手机号码再继续传给腾讯云接口。数据传递的链路是：前端->我们后台->腾讯云。后台没有对数据做任何修改就直接传给腾讯云的这个过程就是透传。

## 回传

解释: 回传”指的是数据输入方把数据传给第三方后，第三方经过一定的规则转换，再返回数据给输入方的过程
例子: 比如一个小程序把用户的订单数据、商品数据上报给一个第三方数据分析工具，数据分析工具对这些数据进行分析，比如用户喜好分析、圈层分析等，最后把这些分析结果数据再返回给小程序后台，就是回传。

## 同步和异步

解释: 后台对前端发来的接口请求按照响应机制可分为同步接口和异步接口。
同步指的是后台必须处理完所有的任务后，前端才能收到返回处理结果。适用于对实时性要求较高的场景。
异步指的是后台优先返回处理结果给前端，然后再自动执行其他任务。适用于实时性要求不高的场景。
例子:
同步:给用户添加权限时，点击新增后，等待后台返回处理结果成功时，用户就实时拥有了被添加的权限。
异步:批量导入表格数据时，数据量比较大，后台处理比较耗时。当点击确定上传后，批量导入的数据还没有真正入库时，后台就优先返回处理结果，提示“请稍后查看数据”。当后台真正处理完所有数据后，将以站内信、短信等反馈形式通知用户。

## 带宽

带宽是指每秒最大能发送或者接收的字节数。指的是网速的大小，比如我们在办理宽带套餐时，有20Mb/s 、100Mb/s等等。

## 流量

流量指的是发送数据和接收数据的大小总和。单位有B,KB,MB,GB。比如我们的手机流量套餐有10块钱100MB，20块钱200MB等

## qps

全名是 Queries Per Second，意思是“每秒查询率”，是一台服务器每秒能够响应的查询次数。是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准。

## 域名和DNS

域名比ip地址更好记忆，假设ip地址是电话号码，域名就是人名，那么DNS就是通讯录，当你想打电话给某个人时，输入人名，DNS就会从通讯录中找出电话号码拨打。

## 控件

众所周知，html是一门标签语言，组成了网页的基本结构。文本框、按钮、下拉框等最小的界面视觉元素就叫做控件。

## 组件

单纯的控件只是展示了简陋的视觉UI和基本行为，在实际开发中需要用到的是经过各种样式装饰和动画还有丰富行为的UI，而且还会被重复利用。所以为了降低代码重复率，提高开发效率，一般开发会把一个或多个控件的结构、样式、行为、联动封装到一个文件中，这样一个组合文件就称为“组件”。

## 组件库

多个组件通过一定的方式封装起来，可以提供给多个项目使用的同一套代码组件，就叫组件库。多个项目使用一套组件库，不仅可以让类似项目保持相同的UI主题，还能避免开发重复造轮子，提高开发效率。
现在市面上比较流行的组件库，有蚂蚁金服ant design，饿了么element ui、iView等。现在很多公司在做网站时，使用的是这几种组件库。当然也有部分公司使用自己研发的组件库。

## 框架

框架是为解决一类问题而产生的产品。它面向的用户是开发者。现在市面上比较流行的前端类框架有：
web端：js框架 --> react、vue、angular
客户端：react native、flutter
微信小程序端：wepy、mpvue
它们的诞生，大多是为了解决js操作界面元素的性能消耗、代码复用性、可维护性、可读性、健壮性等问题。

## 页面适配

页面适配一词一般用于移动端。因为现在的手机机型和手机屏幕种类很多，不同的屏幕大小下，一样的布局可能表现会错乱。不同的机型下，可能因为某个样式不兼容而表现异常。
对手机机型或手机屏幕大小或浏览器大小来对页面样式做兼容匹配，叫做页面适配。

## 渲染

众所周知，一个网页基本是由html、css、js构成的。当前端请求回来html、css、js等静态文件后，浏览器引擎就开始按照规则解析语言，然后测量、排版、绘制页面，最后展现出我们眼前的网页视觉效果。这个过程就叫做渲染。
有时候你可能会看到网页展示有点慢或者是卡顿，那就是渲染比较慢。

## CDN

cdn是一个为了使用户就近获取内容，提高资源访问速度的一种内容分发网络，主要由内容分发技术和内容缓存设备组成。

## SDK

SDK全称是“software development kit”，直译就是软件开发工具集。
说的通俗点，SDK其实就是一个面向开发者的，提供一些功能需求的一份代码程序，它一般会暴露一些方法给开发者去调用;
基于它，开发者就可以快速调用一些功能，
比如微信扫码登录sdk，我们把sdk引入我们的代码中时，就可以快速实现扫码登录功能；
神策埋点SDK，我们引入它，就可以快速实现埋点功能；
腾讯广告SDK，我们引入它，就可以查看投放广告后的分析效果；
前端性能监控SDK，我们引入它，就可以查看我们网站的接口返回速度、前端报错信息等，后面可以更好的优化我们的网站性能。
一般来说，一个标准的SDK，会包含若干API，版本管理和使用说明文档。

## 接口

接口是后端设计的一套供给第三方使用的方法。(第三方指前端/后端)
接口通过网络协议来调用，我们最常用的协议是HTTP协议。
在定义一个接口时，会写好接口路径和接口方法名的映射，然后前端通过接口路径来调用方法。
举个例子：一个获取商品列表的接口，接口路径是：/api/getMerchantList，接口方法名是：getMerchantList。

前端通过请求/api/getMerchantList来调用getMerchantList方法，接着后端会做相关逻辑处理，比如查询数据库，最后返回商品数据。
小结：前端通过请求接口路径来和后端通信。

但是需要注意的是像这种通过一个http请求接口来通信的方式是单向的，比如只能前端主动发起请求和后端通信，后端不能主动发起请求和前端通信。如果后端想主动和前端通信，可以通过双向通信协议websocket来通信，现在很多聊天工具，都是使用该协议来双向通信的。

2.接口的组成
一份规范的接口文档，一般是由以下几部分组成：，假设下面是一个获取商品列表的接口。
接口路径: ‘’
接口描述：获取商品列表
请求类型：get
请求参数：

```js
{
	a:1
}
```

返回结构:
```js
{
	code:0,// 返回码
	data:{
		list:[
			name:'乐事薯片', // 商品名称
			price:13 // 商品价格
		]
	},
	message:'success' //错误信息
}
```

小结：请求类型指的是http协议的请求方法，最常用的是post/get，一般查询数据类的接口使用get类型，操作数据增删改类的接口使用post类型。
请求参数是后台规定好前端需要传的参数结构，比如前端想要第二页的数据，那传一个 page:2 给后端就可以了。
返回结构是后台规定好返回给前端的数据结构，一般的返回结构包括三个部分：返回码、错误信息、正确数据。

通过返回码可以让前端知道后端逻辑是否出现错误，比如返回码为0表示成功，返回码为500表示服务器错误。如果返回码不为0 ，前端就可以直接提示错误信息告知用户接口出错了

## app热更新

### 1.app热更新的方式

app版本更新迭代分为整包更新和热更新。
整包更新是整个app安装包需要重新下载安装，它通过应用市场来更新，整包的体积比较大，下载速度慢。
热更新就是动态下发代码，当用户打开app时，通过网络下载升级包来直接更新，不需要发布新版本到应用市场。升级包的体积比较小，下载速度快。
发布一个app新版本，要上架到应用市场是需要审核的。

ios应用市场审核很严格而且审核需要一定的时间，android市场也一样，遇到一些节假日会往后延期。
热更新的方式可以绕过应用市场的审核，所以对于紧急的bug修复以及实时性较强的功能发布（比如运营活动）比较适合。
那么，app所有功能的更新都可以使用热更新吗？

### 2.热更新的适用条件

因为应用市场比较多，下面就重点讲下苹果app store的热更新条款。
app store禁止滥用热更新机制。
因为当开发者提交代码到app store审核通过后，开发者可能会通过热更新方式修改app 原生代码导致安全隐患，这就违反了苹果的安全隐私政策。
比如2017年2月时，苹果就发现了某种热更新方式，存在安全漏洞，如果黑客发现并利用了这个后门，
他们就能够访问到设备中的照片、麦克风和剪贴板数据以及其他涉及个人隐私的功能。
为了应用生态的安全可控，一般来说，如果涉及到更改了app 原生代码的更新，苹果都要求审核。
app的开发框架非常多，下面举个例子来讲下。
假设开发app使用的是react native框架，如果只是修改了图片资源、js代码，是可以使用热更新机制更新代码的，但是如果更改了native原生的代码，就违反了苹果的审核条款。

## 联调

假设一个需求由前端和后端两名同学一起来完成。后端同学一般会给前端提供接口，接口里面会定义好入参和出参。

但是当前端开始开发页面时，接口还是不可用的，必须要等到后端同学开发好后才能调用，所以一般前端自己去「模拟」接口。

当前后端同学都开发好时，前端就可以真正去调用后端的接口了，这时需要验证接口中，URL是否正确、前端传递的参数和后端返回的数据是否正确、还有前端的一些交互逻辑是否正确。

这个验证的过程就是「联调」啦

## 数据埋点

当用户触发一个事件，产生了一系列的用户行为数据，这时采集用户的行为数据，并上报到后台，就叫做数据埋点。

举个例子：

假设你在逛商城，你把一双鞋子加入了购物车。

这是一个加购事件，这个加购事件，产生了以下的行为数据：在商品详情页下，选择了鞋子的尺码、颜色、外观，并加入了购物车。

采集到触发的事件类型和用户行为数据，并上报到了后台，这就完成了一次数据埋点。

### 前端埋点

#### 1.代码埋点

代码埋点指的是，用户通过浏览、点击等触发的事件，要通过调用sdk的方法上报事件的数据。

优点：

- 精准的定位埋点位置
- 可以采集到更多自定义的数据

缺点：

- 埋点效率低，每次有新页面，都要根据需求埋点

使用场景：

- 适用于精准定位埋点位置、采集更多跟业务相关数据的复杂场景

#### 2.全埋点

全埋点也叫无埋点，全埋点不是说不埋点，而是sdk自动采集所有事件并上报，然后后台通过一定的规则把想要的数据清洗出来。

优点：

- 埋点效率高，不需要每次产品提一次需求，就找所有开发包括前端、后台、数据过一遍埋点需求
- 不容易出错，因为全埋点事直接上报了所有的用户行为事件，避免手工埋点失误。
- 有利于做自定义分析，因为数据比较全，如果用户想要知道某个按钮的点击次数，那只要搜索这个按钮唯一id，后台就可以把按钮的点击次数搜索出来了。

缺点：

- 数据量庞大，全埋点把所有的事件数据都上报，数据量比较庞大，增大了服务器、数据清洗的压力。

使用场景：

- 适用于采集更多的用户行为数据，做自定义分析，以及想提高埋点效率的场景。

#### 3.可视化埋点

指的是通过一个可视化的埋点工具，运营人员圈选好需要埋点的控件和属性，sdk接收到服务器下发的埋点事件列表后，自动上报对应的埋点。

优点：

- 提高埋点效率，运营人员可直接埋点，无需开发介入

缺点：

- 容易受界面控件位置的影响
- 只能上报视觉范围内的属性

使用场景：

- 适用于生命周期比较短页面的埋点，比如运营活动页面。

#### 4.小结

代码埋点：用于埋业务数据复杂的场景

全埋点：用于收集更多的用户数据做自定义分析等数据挖掘场景

可视化埋点：用于运营活动页面等生命周期较短的页面场景

### 后端埋点

对于一些需要十分准确的采集的关键事件，比如支付、登录等事件是在页面关闭之后才发送的（即点击支付、登录页面发生了跳转），有些浏览器可能会取消掉页面关闭时发出的请求，导致后端没收到上报的数据。所以这类事件建议前后端一起统计，提高数据的准确性。

## 云服务器

云服务器指的是远程的计算机，也就是远程的电脑，但是它的性能比我们普通的电脑要好很多。

- 云服务器的使用场景

  - 可以用来部署开发环境

  - 可以部署线上后端服务、数据库

  - 可以快速搭建云上博客

  - 可以快速搭建门户网站

  - 可以创建个人网盘



## 跨端

这个「端」指的是终端，比如：web端、ios、安卓等，说到底就是运行我们的应用程序的平台（操作系统）。

不同的操作系统，都有提供专门的语言来编写应用程序，比如ios，提供objective-c/swift语言；安卓提供Andriod语言；web提供javascript语言。它们之间互不兼容的，比如ios语言开发的app不能在andriod系统运行。

为了降低开发成本，很多跨端解决方案就应运而生了。

跨端就是写一个应用程序，可以运行在多个终端，即一端开发多处运行。

比如：Taro框架，只要写一次，就可以运行在多个终端，包括ios、安卓、web、各种小程序。

## 跨域

我们知道，一个URL它至少由协议、域名、接口这三部分组成的。比如：`https://www.a.com`

### 什么是跨域呢？

当一个请求URL的协议、域名、端口三者之间的任意一个与当前页面URL不同即为跨域。

跨域产生的原因是什么呢？

这是由于浏览器的「同源策略」限制。

什么是同源策略呢？

同源策略（Same Origin Policy）是一种约定，它是浏览器最基本的安全功能，它的出现是为了保护用户信息的安全，防止被恶意网址窃取信息。

不同源的网址会被限制以下行为：

- 不能获取对方的Cookie、localStorage
- 不能给对方发送Ajax异步请求
- 不能获取对方的页面元素

如何解决跨域？

1.反向代理

反向代理利用的是服务端向服务端发起请求不会跨域这个原理，把客户端发起的请求转发到代理服务器，然后代理服务器再把请求转发给目标服务器。

2.跨域资源共享CORS

这是一种HTTP标头机制。服务端控制好允许访问的客户端域名，当服务端收到客户端的请求时，服务端会校验当前客户端的域名是否在白名单内。如果在的话，HTTP响应头里会返回一些标记：`Access-Control-Allow-Origin`、`Access-Control-Allow-Credentials`等，浏览器监测到这些标记后，就会通过，不会拦截报错跨域了。

## 协议

协议，就像合同一样，它会规定双方要遵循一定的规则。

我们工作中经常听到的协议指的是网络协议，它规定了客户端和服务端之间的通信规则，它规定了通信时信息必须要采用的格式和这些格式的意义，常用的协议有HTTP、HTTPS、Socket等。

## 调试

当我们代码有bug时，会抛出一个异常，异常里面包含有错误信息和发生错误的代码行数。

根据报错原因和具体报错的代码行数，一步步找到问题的根源并修复的过程，就是「调试」。



## 单元测试

单元测试是一种比较小型的测试。一般指的是单个函数的测试，使用不同参数的输入来校验函数输出是否符合预期。

比如：一个校验手机号码输入是否正确的函数，需要针对用户输入的各种场景写测试用例。如：手机号码为空、含有别的特殊字符、长度超过限制的测试用例。

单元测试一般是开发在编码阶段自测使用的测试方法。

## token

token是服务端生成的一串字符，当用户第一次登录成功过后，服务端会返回一个唯一的token给到客户端，客户端，客户端以后得每一个请求都会带上这个token，用来作为用户凭证。

为什么会有token这个东西呢？

因为HTTP请求是无状态的，你的上一个请求和下一个请求，服务端没法识别是不是同一个人，所以需要一个凭证来识别用户，token因此产生。

举个例子：

小花请求登录A网站，服务端经过校验后发现小花确实是该网站的用户，服务端就会根据各种参数生成一个唯一的token，然后给客户端成功返回token后，小花登录成功。

下一秒小花请求获取商品列表数据，并带上token来请求，服务端收到请求后，把token解密后，拿到识别用户的信息，经过校验其合法性后，就知道了这个人是小花，于是给她返回了商品数据。

如果判断出token飞马，那个会直接返回未登录状态，提醒用户登录。

那token直接暴露在客户端，如果被恶意盗用伪装登录用户怎么办？

token一般都是会加密的，它会根据请求的URL、时间戳、签名等参数加密，而且在服务端拿到token后，需要密钥才能解密，所以还是比较安全的。

## 丢包

丢包的「包」指的是，在接口请求时的请求数据包或者返回数据包。

丢包就是客户端请求的数据包，服务端没有正常收到；或者服务端返回的数据包，客户端没有收到，即数据包出现丢失。

出现丢包的原因有很多，可能是代码逻辑有bug、网络拥塞、硬件故障等等。

## 脏数据

脏数据一般指的是不符合业务规范要求的数据。如果数据库中因为某些原因存入了脏数据，一般需要开发去人工处理，手动删除或者修改。

## 网关

从一个房间走向另一个房间时，需要经过一扇门，而在网络空间中，从一个网络向另一个网络发送信息时，也必须经过一道关口，这就是网关。

网关有很多种类型，不同的类型起着不同的作用。

一个web服务，如果用户直接就可以访问会存在哪些问题呢？

1.安全与权限问题

如果web服务没有控制好权限，用户可能直接下载web服务的敏感资源

2.访问频次问题

比如被黑客恶意访问，同时并发大量的请求，会拖垮服务器。

所以我们需要在web服务的上一层，引入一层关卡：网关。像过安检一样，要经过审查才能进入内部服务。

当然api网关不仅仅是起到控制访问频率、鉴权等保护作用，它还有很多别的作用。

比如：外部多端统一，不同的终端，对应的网络协议可能都不一样，如果同一个功能，针对多个终端去写多分代码，比较麻烦。

如果引入API网关，就可以针对不同的终端做好协议的转换和适配。满足不同的终端对不同协议的要求，这样就不用写多份代码啦。

## 映射

映射就是一种对应关系，比如每个身份证号会对应一个人名，人名可以更改，但是身份证号是不能更改的，因为已经有很多地方在使用了，更改了身份证号影响比较大。

所以映射的作用其实就是为了唯一识别某个事物。

## 软删除

软删除也叫逻辑删除或者标记删除，它不是真的把一条记录从数据库删除，而是通过某个字段，来标记删除。

比如使用一个state的字段，state等于1表示数据是有效的，state等于0表示数据是无效的。

为什么使用软删除呢？因为很多时候，这些数据对我们来说还有价值。

那什么时候使用真正的删除（物理删除）呢？

一些没用的临时数据、或者存放了很多年已过时的数据，可以使用物理删除。

临时数据：比如临时的验证码。

存放多年的过时数据：比如某个平台。用户的操作日志。

数据存储是比较昂贵的，所以有些真的没用了的数据，建议使用物理删除。

## 重构

我们工作时，经常会听到开发说，把这块功能「重构」一下，把这个项目「重构」了。

「重构」一般指的是，保持原有功能不变，重新梳理代码结构，换一种「技术栈」或者「设计模式」来实现。

「重构」一块功能，可能有以下原因：

1.技术栈老旧，落后于现有团队的技术栈，没法复用公共技术资源。

2.代码耦合度高，或者可读性、扩展性差，维护成本高

## 敏捷开发

敏捷开发是现在最流行的一种软件开发方法。

敏捷开发的意思是把一个软件开发项目这个大任务拆解成多个小任务，按照一定的开发周期，增量迭代开发。

每个迭代都按照需求分析、设计、编码、测试、部署这5个步骤进行，不断地改进产品、增加新功能。

使用敏捷开发有什么好处呢？

1.快速交付

比如微信，微信里面有很多功能。如果按照传统的软件开发方式，一下子要做一个大而全的产品才能上线，那估计要等好多年。

但是使用敏捷开发方法，初期只需要语音聊天功能，后面再慢慢迭代额外的视频聊天、聊天标签动画、朋友圈等功能，开发周期按照2~6周这样，就可以快速交付了。

2.降低风险

我们上线一款产品前，还不了解这款产品是否真的适应市场，吸引用户，如果按照传统的开发方法，一下子就要做一个大而全的产品，开发周期很长，上线后发现没什么用户，想要改进，则成本非常高。

如果使用敏捷开发方法的话，就可以快速试错，当一个迭代上线时，发现不适应市场则可以不断改进，降低风险。

## URL

URL官方含义是：统一资源定位符。一个有效的URL都指向一个唯一的资源。

这里说的资源可以是一个HTML文件、一张图片、一个视频、一个接口等等。我们平时在浏览器输入的网址就是URL，一个网页里面的请求数据的接口也是URL。

一个URL的组成部分：协议、域名、端口、资源路径、请求参数、锚点

## 开发环境、测试环境、生产环境

### 开发环境

「开发环境」是程序员专门用来写代码的环境，一般是自己本地的电脑，也可以是远程的云服务器。

这个阶段，程序员会根据需求单和设计稿写代码，还有前段和后端联调，联调完没问题，就把代码部署到「测试环境」啦

### 测试环境

「测试环境」一般是用来给产品经理和测试同学测试功能的环境。

首先开发需要把本地写好的代码部署到测试服务器，然后准备一个测试域名，为了数据安全，这个测试域名一般是公司内网才能访问。

最后提供测试域名给产品和测试同学访问。

产品和测试验收没问题后，就把代码发布到「生产环境」啦。

### 生产环境

「生产环境」是正式对外的，给客户使用的环境。

开发把测试好的代码部署到生产服务器后，准备一个生产域名，外面用户通过生产域名访问。

为了数据隔离和安全，数据库也会分为这三种环境，不同环境分别对应不同的数据库。

## 解耦

耦合度：模块之间的依赖程度。这里的模块可以小到一个小功能，也可以大到一个系统。

解耦就是解除模块之间的耦合关系。

降低模块之间的依赖程度也可以理解为解耦，模块之间有依赖关系就必然存在耦合，0耦合是基本无可能得，那是最理想的状态。

耦合度越低，模块之间依赖的程度越低，模块的独立性、复用性和可移植性就越强。

那么如何判断2个有关联的模块的耦合程度呢？

1.是否有牵一发而动全身的现象？

一个小改动，会影响到依赖它的所有模块，这是耦合度高的典型表现。

2.看模块的复用性

可复用性越高，说明耦合度越低

3.看模块的可移植性

可移植性越高，说明耦合度越低

## 回滚

当开发同学要上线一个新功能时，需要发布这个新功能的代码到生产环境，而且发布的代码一般都有一个版本号。

这个版本号一般是一个团队约定的格式，可以是日期格式，也可以是semver语义化版本（比如：1.0.0）等。

当然semver是最常用的。版本号的作用是啥呢？版本号既能记录当前在线上运行的代码版本，还能在突发情况下「回滚」版本。

如其名，「回滚」就是把当前线上的代码版本回退到以前的某个版本。这样的话，如果线上出现严重问题，可以快速把代码恢复到之前的安全版本。

## 脚本

在计算机领域，脚本是一份短小的计算机程序，计算机会按照里面的指令一行一行地执行。

常见的脚本语言有：JavaScript、Python。

那么脚本语言和其他编程语言有什么不一样的么？

脚本语言是解释型语言，它不需要编译，计算机就可以直接执行。而其他语言都要先经过编译，计算机才能看懂它，才能执行。

比如我们经常说的跑个脚本，其实就是跑一份计算机可以直接执行的代码程序。

## 封装

某个功能实现之后，把实现细节隐藏起来，只提供一些接口给外部调用，内部怎么实现的我们不需要关心，这就是封装。

## 高并发

高并发指的是web系统在短时间内遇到大量网络请求的情况。

高并发会导致系统在这段时间内执行大量操作，比如对数据库的查询/存储。

高并发可能会导致请求响应过慢，甚至系统崩溃。

解决高并发的问题一般需要通过各个方面进行优化，包括增加服务节点、限制流量、降低非核心功能、算法优化、数据库优化等方式。

## 数据库

数据库是按照一定的数据结构来组织、存储和管理数据的仓库。

那么为什么需要数据库？因为我们需要存储用户数据。当你访问一个页面，你填写表单数据提交后，如果没有把表单数据存储到服务器，页面一刷新，数据就会被刷新重置了，只有把数据存储起来，以后才能继续访问得到。

那我们平时说的mysql、oracle又是啥呢？

它们是数据库管理系统，是专门用来管理和操作数据库的大型软件。

## 抓包

如其名，抓包就是中途拦截抓取接口请求的请求数据包和返回数据包。

抓包一般是想拿到接口的详细信息，但是要实现抓包需要安装抓包工具。

## 私有化部署

指的是把应用部署到自己的服务器上。

私有化部署是saas产品常用的一种对外服务方式。

什么条件下可以使用私有化服务呢？

- 有定制化的场景
- 数据敏感，担心数据泄露
- 担心第三方服务不稳定导致业务异常
- 企业的运维环境能满足私有化部署的条件，比如能轻松维护一个web服务、有mysql数据库、有redis服务等。

## 定时任务

定时任务的含义是：指定每到一个时间点，就执行一个固定任务，这个任务一般是一个计算脚本。

定时任务是后台用来定时处理数据的常用方式，并且是实时性要求不高的数据。

## 登录态

登录态就是登录的状态，用来标识用户的唯一身份。

## 重定向

重新跳转到另一个URL。

## API

API就是给客户提供服务的一种方式，它还需要入参和出参。

API也可以说是接口

## 灰度

灰度发布是指在黑与白之间，能够平滑过渡的一种发布方式。AB test就是一种灰度发布方式，让一部分用户继续用A，一部分用户开始用B，如果用户对B没有什么反对意见，那么逐步扩大范围，把所有用户都迁移到B上面来。灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以发现、调整问题，以保证其影响度。

灰度发布的作用有以下几点：

1.降低发布带来的影响。虽然功能都在测试环境测过，但毕竟没有发布到生产环境，如果先让少部分用户先试用新版本，提前发现bug，或者性能问题，提前做好修复，就可以降低新版本带来的影响。

2.通过对新老版本的对比，观察新版本带来的效果。

灰度发布一般需要满足以下几点：

1.需要一个放量配置，给产品、运营等工作人员配置放量策略。

2.需要做到同一个用户始终访问得是同一个版本的代码，如果同个用户上个请求访问得是A版本，下个请求访问的是B版本，就可能会出问题。

## 爬虫

### 爬虫的概念和方式

爬虫就是使用任何技术手段，批量获取网站信息的一种方式，关键在于批量。说白了其实就是模拟真正用户去请求获取大量数据。

爬虫从网页交互维度，主要分2种方式，分别是常规爬虫和自动化爬虫。

1.常规爬虫

常规爬虫也叫裸写代码爬虫，是最原始的一种爬虫方式。比如想爬取微博热搜榜，需要经过3个步骤：

```
1.确定目标地址
分析页面请求格式，找到微博实时热搜的网页地址
2.目标信息解析
请求到具体页面后，需要解析页面里面的数据，爬取回来的页面实际是一堆前端代码，通过dom api去读取代码里面的数据
3.数据存储
解析出目标信息后，可存入数据库或者写入文件中，已被后续使用。
```

2.自动化爬虫

自动化爬虫框架有好几款，下面介绍比较经典的puppeteer框架。

puppeteer是谷歌浏览器出的无界面（headless）chrome工具，它提供了一个高级的api来控制无头（无界面）的chrome。puppeteer可以模拟大部分用户操作，包括点击、滚动、悬浮、聚焦等大部分交互，所以只要你知道了一个网站的首页地址，就可以通过调用api去模拟用户操作来爬取整个网站的数据。

### 爬虫的应用场景

1.抓取页面数据

2.UI自动化测试

3.生成页面截图和PDF

4.监控网页数据

5.监控网页性能

-----



https://www.xiaohongshu.com/explore/644e72120000000014024f91

## 护城河/壁垒/门槛

指个人或者产品的核心竞争力，即人无我有，人有我优。

## 千人千面

指依靠算法，对不同人进行不同的推荐，最早由淘宝提出

## 权重（加权/降权）

指某一因素或指标相对于某一事物的重要程度，其不同于一般的比重，体现的不仅仅是某一因素或指标所占的百分比