import{_ as n,c as s,o as a,V as e}from"./chunks/framework.yB9ribBw.js";const m=JSON.parse('{"title":"nextTick是做什么的","description":"","frontmatter":{},"headers":[],"relativePath":"guide/interview/vue/vue/nextTick是做什么的.md","filePath":"guide/interview/vue/vue/nextTick是做什么的.md","lastUpdated":1719242077000}'),p={name:"guide/interview/vue/vue/nextTick是做什么的.md"},i=e(`<h1 id="nexttick是做什么的" tabindex="-1">nextTick是做什么的 <a class="header-anchor" href="#nexttick是做什么的" aria-label="Permalink to &quot;nextTick是做什么的&quot;">​</a></h1><ul><li><p><code>nextTick</code> 指定的回调函数会在DOM节点更新之后执行</p></li><li><p>DOM渲染完毕更新完毕会触发，可以写在任何一个生命周期中</p></li><li><p>当改变数据后，要基于更新后的新DOM进行某些操作时，要在 <code>nextTick</code> 所指定的回调函数中执行。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>created(){</span></span>
<span class="line"><span>	this.$nextTick(()=&gt;{</span></span>
<span class="line"><span>		获取DOM 100%能获取到</span></span>
<span class="line"><span>		一般情况下，不在这里获取DOM</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mounted(){</span></span>
<span class="line"><span>	直接获取DOM，操作</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ul>`,2),t=[i];function l(c,r,d,o,u,_){return a(),s("div",null,t)}const h=n(p,[["render",l]]);export{m as __pageData,h as default};
