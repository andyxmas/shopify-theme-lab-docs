import{e as a}from"./app.d2631633.js";const n={},s=a('<h1 id="modularity-vue" tabindex="-1"><a class="header-anchor" href="#modularity-vue" aria-hidden="true">#</a> Modularity (Vue)</h1><h2 id="unified-approach" tabindex="-1"><a class="header-anchor" href="#unified-approach" aria-hidden="true">#</a> Unified approach</h2><p>By default, the unified approach is used. The Vue instance is initialized only once on each page and wraps around all page content. The advantage is you don&#39;t have to worry about initializing any Vue instances, it&#39;s just set and forget. But this can sometimes lead to some unexpected behavior when used with Shopify plugins. Some plugins may insert script or style tags inside the Vue instance, but Vue removes all regular <code>&lt;script&gt;&lt;/script&gt;</code> or <code>&lt;style&gt;&lt;/style&gt;</code> tags on mount. To use the unified approach add one single element with an <code>app</code> id to your layout template.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="modular-approach" tabindex="-1"><a class="header-anchor" href="#modular-approach" aria-hidden="true">#</a> Modular approach</h2><p>With the modular approach, you can have as many Vue instances on a page as you want. The drawback is you have to add them manually and keep track of where you can use Vue functionality. By default, all instances share the same settings, components, mixins, directives and plugins. To use the modular approach remove all <code>id=&quot;app&quot;</code> attributes from your template(s). Then add the <code>vue</code> attribute without any values to any HTML element to initialize a Vue instance on that element.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">vue</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- vue instance --&gt;</span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- not a vue instance --&gt;</span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">vue</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- vue instance --&gt;</span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The unified approach has a higher priority than the modular approach. This means if you have an element with an <code>app</code> id on your page, all elements with the <code>vue</code> attribute will be ignored and not initialized.</p></div>',8);n.render=function(a,n){return s};export{n as default};
