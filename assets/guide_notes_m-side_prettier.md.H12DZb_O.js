import{_ as s,c as a,o as n,V as i}from"./chunks/framework.YnO4XY28.js";const b=JSON.parse('{"title":"Prettier","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/m-side/prettier.md","filePath":"guide/notes/m-side/prettier.md","lastUpdated":1733155339000}'),p={name:"guide/notes/m-side/prettier.md"},e=i(`<h1 id="prettier" tabindex="-1">Prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;Prettier&quot;">​</a></h1><p><a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a> 是一款流行的代码格式化工具，旨在通过强制一致的代码风格来提高代码的可读性和可维护性。它支持多种编程语言，包括 JavaScript、TypeScript、HTML、CSS等。</p><blockquote><p>ESLint 保证 JavaScript 代码质量，Prettier 保证代码美观</p></blockquote><hr><p><strong>步骤 1：安装 Prettier</strong></p><p>在项目目录下，运行以下命令安装 Prettier 作为开发依赖：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add --save-dev --save-exact prettier</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><p><strong>步骤 2：创建 Prettier 配置文件</strong></p><p>在项目根目录创建 <code>.prettierrc.json</code> 文件，定义 Prettier 的格式化规则：</p><p><code>.prettierrc.json</code> 配置文件</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;useTabs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tabWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;printWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;singleQuote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;trailingComma&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;semi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr><p><strong>步骤 3：创建 Prettier 忽略文件</strong></p><p>创建 <code>.prettierignore</code> 文件，指定 Prettier 忽略的文件和文件夹：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 忽略构建输出目录</span></span>
<span class="line"><span>dist</span></span>
<span class="line"><span>build</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略 node_modules 目录</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略环境配置文件</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定文件类型</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>*.md</span></span>
<span class="line"><span>*.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定文件夹</span></span>
<span class="line"><span>public</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定配置文件</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>yarn.lock</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><hr><p><strong>步骤 4：配置 npm 脚本</strong></p><p>在 <code>package.json</code> 文件中添加格式化脚本命令：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line has-focus"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier --write </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./**/*.{html,css,ts,js,json,md,vue}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><p><strong>步骤 5：运行格式化命令</strong></p><p>使用以下命令格式化项目中的文件：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,24),l=[e];function t(r,h,c,d,k,o){return n(),a("div",null,l)}const g=s(p,[["render",t]]);export{b as __pageData,g as default};