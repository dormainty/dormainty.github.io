# null

1. null用于定义一个空对象，即如果变量要用来保存引用类型，可以在初始化时将其设置为null。
2. 在控制台输出 **<font color="gray">灰色</font>**。
3. 空值 `null` 在数值类型环境中会被当作 0 来对待，而布尔类型环境中会被当作 `false`。

```js
//null表示值为空
let obj = null

/*
	通常都是在结果中得到的
	如果点取消，就得到null
	如果什么都没输入，点确认，变量里相当于存了空字符串
*/
let age = prompt('请输入年龄：')
```

#### null 和 undefined 区别：

- null表示变量没有值
- undefined表示变量已被声明，但是并未赋值。

#### null开发中的使用场景：

- 官方解释：把null作为尚未创建的对象
- 大白话：看将来有个变量里面存放一个对象，如果还没准备好对象，可以放个null









