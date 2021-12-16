import{r as s,o as n,c as a,a as e,w as p,b as l,F as o,d as t,e as r}from"./app.d2631633.js";const c={},i=l("h1",{id:"js-frameworks",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#js-frameworks","aria-hidden":"true"},"#"),t(" JS Frameworks")],-1),u=l("h2",{id:"remove-vue",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#remove-vue","aria-hidden":"true"},"#"),t(" Remove Vue")],-1),d=l("ol",null,[l("li",null,[t("Remove all "),l("code",null,"Vue"),t(" packages.")])],-1),b=l("div",{class:"language-bash ext-sh line-numbers-mode"},[l("pre",{class:"language-bash"},[l("code",null,[l("span",{class:"token function"},"npm"),t(" uninstall vue vuex vue-loader @vue/compiler-sfc\n")])]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br")])],-1),k=l("div",{class:"language-bash ext-sh line-numbers-mode"},[l("pre",{class:"language-bash"},[l("code",null,[l("span",{class:"token function"},"yarn"),t(" remove vue vuex vue-loader @vue/compiler-sfc\n")])]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br")])],-1),m=r('<ol start="2"><li>Remove <code>src/vue</code> directory.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -r src/vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Remove everything from <code>src/main.js</code> except for <code>import &#39;./css/main.css&#39;</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./css/main.css&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Remove <code>Vue</code> from <code>.eslintrc.js</code>.</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span>\n<span class="token operator">-</span>   <span class="token string">&#39;plugin:vue/vue3-recommended&#39;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n<span class="token operator">-</span>   <span class="token string">&#39;vue&#39;</span>\n  <span class="token punctuation">]</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="5"><li>Remove <code>Vue</code> from <code>webpack.common.js</code>.</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">...</span>\n<span class="token operator">-</span> <span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>\n<span class="token operator">-</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> VueLoaderPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>\n<span class="token operator">...</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n<span class="token operator">-</span>     <span class="token punctuation">{</span>\n<span class="token operator">-</span>       test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n<span class="token operator">-</span>       loader<span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span>\n<span class="token operator">-</span>     <span class="token punctuation">}</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span>\n<span class="token operator">-</span>   <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token operator">-</span>   <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n<span class="token operator">-</span>     _<wbr>_VUE_OPTIONS_API__<span class="token operator">:</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>\n<span class="token operator">-</span>     _<wbr>_VUE_PROD_DEVTOOLS__<span class="token operator">:</span> <span class="token string">&#39;false&#39;</span>\n<span class="token operator">-</span>   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="alpine-js" tabindex="-1"><a class="header-anchor" href="#alpine-js" aria-hidden="true">#</a> Alpine.js</h2>',9),v={href:"https://alpinejs.dev",target:"_blank",rel:"noopener noreferrer"},g=t("Alpine.js"),h=t(" is a rugged, minimal tool for composing behavior directly in your markup."),f=l("ol",null,[l("li",null,[t("Install "),l("code",null,"alpinejs"),t(".")])],-1),j=l("div",{class:"language-bash ext-sh line-numbers-mode"},[l("pre",{class:"language-bash"},[l("code",null,[l("span",{class:"token function"},"npm"),t(),l("span",{class:"token function"},"install"),t(" alpinejs\n")])]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br")])],-1),x=l("div",{class:"language-bash ext-sh line-numbers-mode"},[l("pre",{class:"language-bash"},[l("code",null,[l("span",{class:"token function"},"yarn"),t(),l("span",{class:"token function"},"add"),t(" alpinejs\n")])]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br")])],-1),w=r('<ol start="2"><li>import <code>alpinejs</code> into <code>src/main.js</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Alpine <span class="token keyword">from</span> <span class="token string">&#39;alpinejs&#39;</span>\n\nwindow<span class="token punctuation">.</span>Alpine <span class="token operator">=</span> Alpine\n\nAlpine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',2);c.render=function(t,r){const c=s("CodeGroupItem"),_=s("CodeGroup"),y=s("OutboundLink");return n(),a(o,null,[i,u,d,e(_,null,{default:p((()=>[e(c,{title:"NPM",active:""},{default:p((()=>[b])),_:1}),e(c,{title:"YARN"},{default:p((()=>[k])),_:1})])),_:1}),m,l("p",null,[l("a",v,[g,e(y)]),h]),f,e(_,null,{default:p((()=>[e(c,{title:"NPM",active:""},{default:p((()=>[j])),_:1}),e(c,{title:"YARN"},{default:p((()=>[x])),_:1})])),_:1}),w],64)};export{c as default};