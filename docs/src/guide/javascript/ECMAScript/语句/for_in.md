# for..in

使用 `for..in` 遍历对象时原理和查找 `[[prototype]]` 链类似，任何可以通过原型链访问到并且 `enumerable: true` 的属性都会被枚举。

使用 `in` 操作符来检查属性在对象中是否存在时，同样会查找对象的整条原型链，无论属性是否可枚举。