import{r as s,o as n,c as a,a as e,w as l,b as t,F as i,d as o,e as c}from"./app.d2631633.js";const p={},r=t("h1",{id:"css-frameworks",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#css-frameworks","aria-hidden":"true"},"#"),o(" CSS Frameworks")],-1),u=t("h2",{id:"remove-tailwind-css",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#remove-tailwind-css","aria-hidden":"true"},"#"),o(" Remove Tailwind CSS")],-1),d=t("ol",null,[t("li",null,[o("Remove "),t("code",null,"tailwindcss"),o(" package.")])],-1),b=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),o(" uninstall tailwindcss\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),m=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),o(" remove tailwindcss\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),g=c('<ol start="2"><li>Remove <code>tailwind</code> config.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> src/tailwind.config.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Remove <code>tailwind</code> requires from <code>.config/postcss.config.js</code>.</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span>\n<span class="token operator">-</span>   <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;tailwindcss/nesting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token operator">-</span>   <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;tailwindcss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/tailwind.config.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4"><li>Remove <code>tailwindcss</code> imports from <code>src/css/main.css</code>.</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>- <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;tailwindcss/base&quot;</span><span class="token punctuation">;</span></span>\n- <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;tailwindcss/components&quot;</span><span class="token punctuation">;</span></span>\n\n...\n\n- <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;tailwindcss/utilities&quot;</span><span class="token punctuation">;</span></span>\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="bootstrap-5" tabindex="-1"><a class="header-anchor" href="#bootstrap-5" aria-hidden="true">#</a> Bootstrap 5</h2>',7),h={href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},k=o("Bootstrap"),v=o(" is the world’s most popular framework for building responsive, mobile-first sites."),f=o("Install "),w=o("SASS/SCSS"),x=o(" and update files accordingly."),S=t("li",null,[t("p",null,[o("Install "),t("code",null,"bootstrap"),o(" package.")])],-1),_=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),o(),t("span",{class:"token function"},"install"),o(" bootstrap\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),q=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),o(),t("span",{class:"token function"},"add"),o(" bootstrap\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),y=c('<ol start="3"><li>Import <code>bootstrap</code> into <code>src/css/main.scss</code></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;~bootstrap/scss/bootstrap&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="bulma" tabindex="-1"><a class="header-anchor" href="#bulma" aria-hidden="true">#</a> Bulma</h2>',3),R={href:"https://bulma.io",target:"_blank",rel:"noopener noreferrer"},j=o("Bulma"),I=o(" is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces."),C=o("Install "),N=o("SASS/SCSS"),A=o(" and update files accordingly."),B=t("li",null,[t("p",null,[o("Install "),t("code",null,"bulma"),o(" package.")])],-1),M=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),o(),t("span",{class:"token function"},"install"),o(" bulma\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),P=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),o(),t("span",{class:"token function"},"add"),o(" bulma\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),Y=c('<ol start="3"><li>Import <code>bulma</code> into <code>src/css/main.scss</code></li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;~bulma/bulma&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2);p.render=function(o,c){const p=s("CodeGroupItem"),F=s("CodeGroup"),G=s("OutboundLink"),L=s("RouterLink");return n(),a(i,null,[r,u,d,e(F,null,{default:l((()=>[e(p,{title:"NPM",active:""},{default:l((()=>[b])),_:1}),e(p,{title:"YARN"},{default:l((()=>[m])),_:1})])),_:1}),g,t("p",null,[t("a",h,[k,e(G)]),v]),t("ol",null,[t("li",null,[t("p",null,[f,e(L,{to:"/guide/configuration.html#sass-scss"},{default:l((()=>[w])),_:1}),x])]),S]),e(F,null,{default:l((()=>[e(p,{title:"NPM",active:""},{default:l((()=>[_])),_:1}),e(p,{title:"YARN"},{default:l((()=>[q])),_:1})])),_:1}),y,t("p",null,[t("a",R,[j,e(G)]),I]),t("ol",null,[t("li",null,[t("p",null,[C,e(L,{to:"/guide/configuration.html#sass-scss"},{default:l((()=>[N])),_:1}),A])]),B]),e(F,null,{default:l((()=>[e(p,{title:"NPM",active:""},{default:l((()=>[M])),_:1}),e(p,{title:"YARN"},{default:l((()=>[P])),_:1})])),_:1}),Y],64)};export{p as default};
