# typeof

因为ECMAScript的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型。因此，ECMAScript提供了一个可以返回数据类型的关键字：`typeof`。

对一个值使用 `typeof操作符` 会返回下列字符串之一：

- `undefined`：表示值未定义
- `boolean`：表示值为布尔值
- `string`：表示值为字符串
- `number`：表示值为数值
- `object`：表示值为对象
- `function`：表示值为函数
- `symbol`：表示值为符号

`typeof` 是一个操作符而不是函数，所以它的写法和函数有所不同。它直接跟在你想要检测的变量之前，而不是像函数那样使用括号。

```js
// 简单数据类型
let num = 123;
console.log(typeof num); // number

let str = "Hello";
console.log(typeof str); // string

let bool = true;
console.log(typeof bool); // boolean

let nul = null;
console.log(typeof nul); // object

let und = undefined;
console.log(typeof und); // undefined

let sym = Symbol();
console.log(typeof sym); // symbol

// 复杂数据类型
let obj = {};
console.log(typeof obj); // object

let arr = [];
console.log(typeof arr); // object

let fun = function () {};
console.log(typeof fun); // function
```

需要注意的是，<font color="red">**`typeof` 对于 null 和 数组的检测会返回 `object`**</font>，这是 JavaScript 的一个历史遗留问题。如果你需要更加准确地检测这些类型，可能需要使用其他方法，例如 :

```js
// 使用 Array.isArray() 来检测数组
let arr = [];
console.log(Array.isArray(arr)); // true

// 对于 null 的检测，你可以直接使用 === 来判断
// 这里需要注意的是，如果你使用 == 来比较，那么 null 和 undefined 会被认为是相等的
let nul = null;
console.log(nul === null); // true
```

然而，尽管 `typeof` 不是函数，但你仍然可以在它后面使用括号。这样并不影响结果，这些括号只是用于改变运算优先级或者提高代码可读性。例如：

```js
let num = 123;
console.log(typeof(num)); // number

let str = "Hello";
console.log(typeof(str)); // string
```



