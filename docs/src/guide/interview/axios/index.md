# axios
## get和post的区别

1. get和post在HTTP中都代表着请求数据，其中get请求相对来说更简单、快速，效率高些 
2. get相对post安全性低 
3. get有缓存，post没有 
4. get体积小，post可以无限大
5. get的url参数可见，post不可见 
6. get只接受ASCII字符的参数数据类型，post没有限制
7. get请求参数会保留历史记录，post中参数不会保留 
8. get会被浏览器主动catch，post不会，需要手动设置 
9. get在浏览器回退时无害，post会再次提交请求

- 什么时候使用post？
  - post一般用于修改服务器上的资源，对所发送的信息没有限制。比如
    1. 无法使用缓存文件（更新服务器上的文件或数据库） 
    2. 向服务器发送大量数据（POST 没有数据量限制） 
    3. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠



## Promise构造函数是同步执行还是异步执行，那么 then 方法呢？

promise构造函数是同步执行的，then方法是异步执行的







## 介绍下 promise 的特性、优缺点（掌握）

- Promise是异步编程的一种解决方案，异步转同步（调用起来像同步一样）
  它的功能：避免了异步回调的多层嵌套，把异步代码改成调用起来像同步代码。
- Promise有三种状态：pending(进行中)、fulfilled(已成功)、rejected(已失败)

- Promise优点
  1. 统一异步 API
     Promise 的一个重要优点是它将逐渐被用作浏览器的异步 API ，统一现在各种各样的 API ，以及不兼容的模式和手法。
  2. Promise 与事件对比
     和事件相比较， Promise 更适合处理一次性的结果。在结果计算出来之前或之后注册回调函数都是可以的，都可以拿到正确的值。Promise 的这个优点很自然。但是，不能使用 Promise 处理多次触发的事件。链式处理是 Promise 的又一优点，但是事件却不能这样链式处理。
  3. Promise 与回调对比
     解决了回调地狱的问题，将异步操作以同步操作的流程表达出来。
  4. Promise 带来的额外好处是包含了更好的错误处理方式（包含了异常处理），并且写起来很轻松（因为可以重用一些同步的工具，比如Array.prototype.map() ）。

- Promise缺点
  1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
  2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
  3. 当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
  4. Promise 真正执行回调的时候，定义 Promise 那部分实际上已经走完了，所以 Promise 的报错堆栈上下文不太友好。





## 预防XSS攻击

```
1）XSS攻击是什么
XSS攻击（跨站脚本攻击）
就是黑客恶意篡改你网页的前端代码；
具体行为就是在里面注入一些恶意的html+javascript的脚本，并在你的浏览器内运行；
目的是获取你的信息，或者进行一些恶意操作。

2）XSS攻击可以干什么坏事？
1.窃取cookie，借用户身份伪造数据请求
2.劫持流量，后导流到他的私域网站上去
3.插入他的广告
4.置入木马
5.获取用户信息，泄漏隐私安全

3）XSS攻击的方式
1.url参数注入
2.输入框注入

一切用户可以输入的地方他都可以无孔不入！
```



|      | 方法       | 具体措施                                                    | 作用                       |
| ---- | ---------- | ----------------------------------------------------------- | -------------------------- |
| 1    | 校验       | 进行格式校验                                                | 比如输入邮箱就校验邮箱格式 |
| 2    | 过滤       | 过滤`<script> <iframe>` 标签，onclick、onerror、onfocus事件 | 防止触发                   |
| 3    | 编码转译   | 对要渲染的内容做编码转译                                    | 防止执行                   |
| 4    | 限制       | 限制输入长度                                                | 恶意代码一般比较长         |
| 5    | cookie设置 | cookie设置成http only                                       | 让它采集不到cookie         |





## GET和POST请求的区别

```
1.GET请求会被缓存，而POST请求不会被缓存
2.GET请求会被保留在浏览器历史记录中，而POST请求则不会
3.GET请求的后退和刷新功能是无害的无副作用的，而POST数据会被重新提交
4.GET的安全性相对于POST较差，因为发送的数据是URL的一部分，而POST不会存放到浏览器历史中
5.GET向URL传递数据，对数据长度有限制，POST则没有限制
6.GET一般用来从指定的资源请求数据，POST用来向指定的资源提交要被处理的数据
```

## AJAX的工作原理以及实现

```
如果需要使用AJAX，可以将XMLHttpRequest对象按照以下步骤进行实现：
1.通过XMLHttpRequest构造函数原生生成XHR对象
2.调用open()方法定义请求的方式、请求的地址以及请求是否异步的布尔值
3.调用send()方法向服务器发起请求
send()方法接收一个参数，是作为请求体发送的具体数据
如果不需要请求体，需要传递一个null
4.监听readystatechange事件，检查readyState属性处在请求/响应的那个阶段
readyState返回5个值，分别是0～4，但是我们一般只关注readyState为4的情况，表示数据已经就绪，可以使用了
在事件中，如果返回状态吗为200，一般我们会使用responseText或者responseXML接收到返回的值
```

## AJAX的优点有哪些

```
1.异步的向服务器请求资源，不阻碍用户的其他操作，具有快速的响应能力
2.页面无刷新或局部更新，极大的提高了用户体验度
3.无需重新加载完整的页面，减轻了服务器和宽带的压力
4.与JSON这种轻量级的存储方式结合，方便了用户对数据的解析
5.另一点就是AJAX拥有众多的库，例如：JQuery AJAX，axios，上手方便
```

## AJAX的缺点

```
1.不支持浏览的后腿功能，破坏了浏览器后退机制
2.浏览器不兼容，在浏览器下需要进行兼容的处理
3.因为数据由后台返回，对搜索引擎优化不友好
4.使用不当，会增大网络的请求数量，需要配合防抖、节流等做性能优化
```

## 什么是浏览器缓存

```
浏览器缓存、通常指HTTP缓存，有时候也称为Web缓存。浏览器缓存存在于服务器和客户端之间，通常是客户端将请求的资源作为副本保存到本地，在下一次访问该资源时优先从副本读取的技术
```

## 为什么使用缓存技术呢

```
因为通过网络获取资源存在速度慢、成本高的问题，假如有些响应需要在客户端和服务器之间进行多次访问通信，还会造成浏览器访问资源的效率变的低下，增加了带宽的消耗。通过缓存技术，将请求的资源作为副本，首先使用资源副本，从而大大减少了获取资源的时间，减少了带宽的消耗、减少了延迟和网络堵塞。同时也降低了服务器处理资源的压力，提高了服务器的性能。
```

## AJAX如何解决浏览器缓存问题

```
1.在请求的地址后面添加一段随机数，每次发起请求时都会产生一个随机数，这样就解决了缓存的问题
'index.js?v=' + Math.random()
2.添加时间戳
'index.js?v=' + new Date().getTime()
3.在AJAX发送之前
xhr.setRequestHeader('If-Modified-Since','0')
4.在AJAX发送之前
xhr.setRequestHeader('Cache-Control','no-cache')
```

## JSONP的原理

```
由于受到浏览器同源策略的限制，只有当端口、域名、协议都一样的情况下浏览器才会向服务器发起请求。
JSONP之所以能够实现跨域的功能，主要利用了script标签的src属性不受同源策略约束，没有跨域的限制，从而实现与另一个域的服务器进行通信
假如a网站向另一台服务器发起跨域请求获取数据资源。这时候需要先在a网站中创建一个script的标签，script的src属性指向服务器的网址，例如：<script src="www.xiaosutongxue.com/api?id=1"></script>，然后还需要创建一个回调函数（例如callback）用来接收b域返回的数据。这个回调函数名称在实际开发中需要与后台进行约定，也可以通过地址传递的方式进行传递。服务器接收到请求后，将数据以json的形式响应返回。例如响应返回的数据格式为：callback({"id":1,"name":"xiaosu"})。这时候a网站就会调用callback函数，同时以参数的方式接收到服务器返回的json数据，在接收到数据以后，即可对数据进行解析渲染，从而完成跨域数据的请求。
```

## 什么事http协议

```
http协议，即超文本传输协议，是一种无状态的协议。在客户端与服务器通信的时候，HTTP客户端会根据业务的需求构建出合适的HTTP请求方法，HTTP服务器则会根据客户端发送过来的不同HTTP请求方法做出不同的响应。
HTTP方法，有时候也被称为请求动作，可以理解为是HTTP协议给提供的命令，用来告诉服务器如何处理客户端请求的资源，服务器在接收到命令后，对资源进行处理，并将其返回给客户端
```

## 常用的HTTP请求方法

```
1.GET请求方法
GET是最常用的HTTP方法，请求指定的页面信息，并返回实体主体。一般情况下，GET方法通常用于请求服务器的某个资源。例如获取商品的列表、个人资料等

2.POST请求方法
POST也是最常用的HTTP方法，设计之初是用来向服务器发送数据的，主要用来向指定资源提交数据，并请求服务器处理，数据被包含在请求体中。POST请求可能会导致新的资源的建立，或者已有资源的修改。例如：登录、注册、表单提交、文件上传等。

3.PUT方法
PUT方法一般用来更新服务器资源，因为PUT方法允许用户对内容进行修改。客户端向服务器进行传递数据，用来取代指定文档的内容。例如：更新用户资料、更改商品详情等

4.DELETE方法
DELETE请求一般用来请求服务器删除URL指定的资源。但是需要注意的是，客户端并不能确保服务器的删除操作一定会执行。因为HTTP规范允许服务器在不通知客户端的情况下撤销删除。例如：删除hiding商品、删除指定用户
```

## 常见的HTTP状态码有哪些

```
根据RFC规范的规定，HTTP的状态码为三位数，由三个十进制数字组成
1.200:表示服务器成功接收到请求，并将请求的资源返回给客户端
2.304:自从上次请求后，请求的页面未修改过，将从缓存中读取资源
3.403:服务器接收到客户端的请求，但是服务器拒绝提供服务
4.404:最常见的状态，表示需要访问的资源不存在或者格式出现了错误
5.500:服务器内部出现了问题，具体什么错，我们并不知道
```

## HTTP请求报文由哪几部分组成

```
HTTP请求报文由4部分组成，分别是：请求行、请求头部、空行以及请求体。
```

## HTTP请求报文有什么含义

```
1.请求行:用来描述请求的类型，要访问的资源以及HTTP协议版本，因此请求行通常由3部分组成，分别是：请求方式、URL以及HTTP协议版本
2.请求头部:通常用来说明服务器需要使用的附加信息
3.空行:在请求头后面的是空行，这个空行是必须的，用来通知服务器请求头部到此已经结束
4.请求体:也被称为请求数据，指的是通过POST请求提交到服务器的数据
```

## 什么是HTTPS

```
HTTP超文本传输协议是一种常见的网络传输协议，被用于在浏览器和服务器之间传递信息数据，但HTTP是明文的方式进行数据的传递，不提供任何方式的数据加密，因为安全性比较差，不适合做一些敏感信息的传输。
为了保证数据传输的安全，产生了HTTPS协议，HTTPS协议是一种以安全为目的的HTTP通道，它通过在HTTP下加入SSL层，从而为数据通讯提供安全支持，简单来讲HTTPS就是HTTP的安全版，HTTPS的安全基础是SSL层。
```

## HTTP和HTTPS区别是什么

```
1.申请HTTPS协议需要到CA申请证书
2.HTTP是超文本传输协议，信息是明文传输，HTTPS则具有安全性的SSL加密传输协议，保证了数据的安全传输。
3.HTTP使用的是两种不同的连接方式，端口也不同，HTTP使用80端口，HTTPS使用的是443端口
4.HTTP连接简单，是一种无状态的协议，而HTTPS则有SSL层和HTTP协议进行构建的加密传输、具体身份认证的网络协议，安全性比HTTP高。
```

## HTTP响应报文是什么样子

```
服务器在接收到客户端的请求后通常会返回一个HTTP的响应消息，这个响应消息，就是我们通常说的HTTP响应报文。
HTTP响应报文也是由4个部分组成，分别是：状态行、响应头部、空行和响应体。
```

## HTTP响应报文的各个组成部分分别代表什么含义

```
1.状态行:主要表示服务器对客户端请求的不同的处理结果和状态，状态行由HTTP协议版本、状态码和状态码的描述文本3个部分组成，它们之间使用空格进行分隔开来
2.响应头部:主要用来描述服务器的基本信息以及返回数据的描述，对数据的描述用来告知客户端如何处理返回的数据。响应头部有多行键值对组成，每行的键和值之间使用英文的冒号进行分隔开来。
3.空行:在最后一个响应头部字段结束以后，会紧跟一个空行，这个空行主要作为内容的分隔，用来通知客户端响应头部到此结束。在HTTP响应报文中的空行，用来分隔响应头部和响应体。
4.响应体:通常是指服务器发送到客户端的实际内容，存放的是服务器返回给客户端的文件、数据等资源内容。
```



## 请描述下TCP的三次握手和四次挥手

```
TCP是一种可连接的、可靠的传输协议
http协议是基于TCP协议的

UDP不可靠。广播/直播

三次握手的目的就是为了确保双方都能够发送和接收消息
1.发送方=>接收方发送数据
2.接收方=>发送方发送数据（此时发送方可以确定接收方能接收和发送消息，但是接收方不能确定发送方能否接收消息）
3.发送方=>接收方发送数据（接收方就确保了发送方能够接收，并且能发送消息）

四次挥手发生在断开连接的时候
1.发送方=>接收方（发送方：我要断开连接了）
2.接收方=>发送方（接收方：我接收到了你要断开连接的消息）
3.接收方=>发送方（接收方要等到确实收不到消息了，发起断开连接的信息）
4.发送方=>接收方（）
等待时间是多久？2msl（1msl一个数据包在传输中不会丢包的最长时间）
```

https://blog.csdn.net/m0_52373742/article/details/120927298





## 平常请求后台接口都什么流程呢？

```

```



## 封装axios，里面的拦截响应怎么拦截？

```
instance.intercaptors.request.use()

```





## 请求失败怎么拦截呢？





## 图片上传了解过么，请求头content-type传什么

```
multipart/form-data
Formdata
```





## promise状态



## 看代码说结果

```js
const promise = new Promise((resolve,reject)=>{
	console.log(1);
	resolve();
	console.log(2);
})
promise.then(()=>{
	console.log(3)
})
console.log(4)
```



## http 304







## 接口封装

1. 单独建一个request.js的文件

2. 在文件内引入axios，并通过axios.create方法创建一个实例，方法参数是请求路径和请求超时时间

3. 然后设置请求拦截器和响应拦截器

4. 最后导出该实例







## Promise的all方法

统一处理多个异步程序，类似 `&&` 的关系（一失败就失败，全成功才成功）

多个异步程序的成功结果会打包成一个数组统一返回

但凡发现一个失败，最快得到失败结果的直接返回

> 扩展 race方法：谁快返回谁，跟成功失败没关系





## 数组存储若干个id，接口根据id获取商品详情，最后一条数据后给个提示，调用成功

在最后一个接口成功的回调里设置一个轻提示

