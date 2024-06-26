# computed和watch的区别

- computed是计算属性需要调用，并且调用时不加()，而watch是监听函数无需调用
- 计算属性是通过它依赖的属性发生变化后得到的值，并且数据结果会被缓存，且函数中必须通过return返回最终的结果
- 监听函数监听的是属性的变化，拿变化后的属性去做后续的操作

- 使用场景：
  - 当一个结果受多个属性影响的时候就需要使用计算属性
  - 当一个数据的变化参与到后续操作的时候需要使用监听函数



- 计算属性需要调用，并且调用书不加()，而监听函数无需调用

- 计算属性是通过它依赖的属性发生变化后得到的值，并且数据结果会被缓存，且函数中必须通过return返回最终的结果，而监听函数监听的是属性的变化，拿变化后的属性去做后续的操作

- 使用场景：
  - 当一个结果受多个属性影响的时候就需要使用计算属性
  - 当一个数据的变化参与到后续操作的时候需要使用监听函数



`Computed`本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。

`Watch`没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开`deep：true`选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用`字符串形式`监听。