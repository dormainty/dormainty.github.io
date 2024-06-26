# font-size 字体大小

::: tip 语法

属性名：`font-size`

```css {2}
.code-better {
  font-size: 40px; /* 字体大小为40px */
}
```

:::

::: warning 注意

1. `font-size` 的默认单位为 `px` 像素，还可以使用 `em`（等于一个字体的大小 相对单位）。

2. Chrome浏览器支持的最小字体为 `12px`，默认的文字大小为 `16px` ，并且 `0px` 会自动消失（默认字号和最小字号支持自定义）。

   <img src="../../../public/images/image-20240211211320046.png" alt="image-20240211211612538" style="width:100%;" />

3. 通常可以给 `body` 设置 `font-size` 属性，这样 `body` 中的其他元素就都可以继承了。

4. 由于字体设计原因，文字最终呈现的大小，并不一定与 `font-size` 的值一致，可能大，也可能小。

5. 通常情况下，文字相对字体设计框，并不是垂直居中的，通常都**靠下**一些。

:::



