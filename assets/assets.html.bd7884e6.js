import{e as s}from"./app.d2631633.js";const n={},a=s('<h1 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h1><h2 id="static-files" tabindex="-1"><a class="header-anchor" href="#static-files" aria-hidden="true">#</a> Static files</h2><p>Place your static files inside the <code>shopify/assets/</code> directory and add the <code>static</code> keyword to their filename. All files inside this directory are ignored by git except for files with <code>static</code> in their filename. Since this directory is also shared with the files generated by webpack, it&#39;s cleaned on every consecutive build except for <code>static</code> files.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>shopify-theme-lab/\n└─ shopify/\n   └─ assets/\n      └─ my-file.static.jpg\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="local-fonts" tabindex="-1"><a class="header-anchor" href="#local-fonts" aria-hidden="true">#</a> Local fonts</h2><ol><li>Add your fonts to the <code>shopify/assets/</code> directory with the <code>static</code> keyword.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>shopify-theme-lab/\n└─ shopify/\n   └─ assets/\n      ├─ open-sans-regular.static.woff\n      └─ open-sans-regular.static.woff2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>Create a Shopify snippet <code>shopify/snippets/fonts.liquid</code> with the following content:</li></ol><div class="language-liquid ext-liquid line-numbers-mode"><pre class="language-liquid"><code><span class="token liquid language-liquid"><span class="token delimiter punctuation">{%</span> <span class="token keyword">style</span> <span class="token delimiter punctuation">%}</span></span>\n  @font-face {\n    font-family: &#39;Open Sans&#39;;\n    font-style: normal;\n    font-weight: 400;\n    src: url(&#39;<span class="token liquid language-liquid"><span class="token delimiter punctuation">{{</span> <span class="token string">&#39;open-sans-regular.static.woff2&#39;</span> <span class="token operator">|</span> <span class="token function filter">asset_url</span> <span class="token delimiter punctuation">}}</span></span>&#39;) format(&#39;woff2&#39;),\n         url(&#39;<span class="token liquid language-liquid"><span class="token delimiter punctuation">{{</span> <span class="token string">&#39;open-sans-regular.static.woff&#39;</span> <span class="token operator">|</span> <span class="token function filter">asset_url</span> <span class="token delimiter punctuation">}}</span></span>&#39;) format(&#39;woff&#39;);\n  }\n<span class="token liquid language-liquid"><span class="token delimiter punctuation">{%</span> <span class="token keyword">endstyle</span> <span class="token delimiter punctuation">%}</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li>Render the <code>fonts</code> snippet below <code>bundle.css</code>.</li></ol><div class="language-liquid ext-liquid line-numbers-mode"><pre class="language-liquid"><code><span class="token comment">&lt;!-- shopify/layout/theme.liquid --&gt;</span>\n\n...\n<span class="token liquid language-liquid"><span class="token delimiter punctuation">{{</span> <span class="token string">&#39;bundle.css&#39;</span> <span class="token operator">|</span> <span class="token function filter">asset_url</span> <span class="token operator">|</span> <span class="token function filter">stylesheet_tag</span> <span class="token delimiter punctuation">}}</span></span>\n<span class="token liquid language-liquid"><span class="token delimiter punctuation">{%</span> <span class="token keyword">render</span> <span class="token string">&#39;fonts&#39;</span> <span class="token delimiter punctuation">%}</span></span>\n...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="4"><li>Create a CSS file and import it into <code>src/css/main.css</code>.</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Open Sans&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',13);n.render=function(s,n){return a};export{n as default};
