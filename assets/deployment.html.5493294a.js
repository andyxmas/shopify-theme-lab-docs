import{r as e,o as n,c as a,a as l,w as s,b as t,F as o,d as i,e as r}from"./app.d2631633.js";const u={},d=t("h1",{id:"deployment",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#deployment","aria-hidden":"true"},"#"),i(" Deployment")],-1),c=t("h2",{id:"shopify-cli",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#shopify-cli","aria-hidden":"true"},"#"),i(" Shopify CLI")],-1),h=t("p",null,[i("Build and deploy a "),t("code",null,"new"),i(" theme to the store that you're connected to.")],-1),p=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),i(" run deploy:new\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),b=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),i(" deploy:new\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),m=t("p",null,[i("Build and deploy to an "),t("code",null,"existing"),i(" theme on the store that you're connected to.")],-1),f=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),i(" run deploy\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),g=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),i(" deploy\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),y=t("h2",{id:"pull",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pull","aria-hidden":"true"},"#"),i(" Pull")],-1),v=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,"The deploy task overrides all files of the remote theme! If any changes were made through the Shopify theme editor you might want to download the theme files before deploying")],-1),w=t("ol",null,[t("li",null,[t("p",null,"Make sure you have a clean git history and committed all files.")]),t("li",null,[t("p",null,[i("Run the "),t("code",null,"shopify:pull"),i(" command.")])])],-1),x=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),i(" run shopify:pull\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),k=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),i(" shopify:pull\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),_=t("ol",{start:"3"},[t("li",null,"Revert any files that were pulled and you don't need e.g. Because you already have a newer version.")],-1),S=t("h2",{id:"github-integration",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#github-integration","aria-hidden":"true"},"#"),i(" GitHub integration")],-1),G=i("Shopify provides a "),N={href:"https://shopify.dev/themes/tools/github",target:"_blank",rel:"noopener noreferrer"},P=i("Shopify GitHub integration"),R=i(", but since Theme Lab uses a custom build-workflow it's not out of the box compatible with the integration."),H=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,"You can only connect branches that match the default Shopify theme folder structure via the Shopify GitHub integration.")],-1),I=t("h3",{id:"repo",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#repo","aria-hidden":"true"},"#"),i(" Repo")],-1),T=t("p",null,"One of the simplest ways to circumvent this limitation is to use a separate repo for your dist files.",-1),M=t("ol",null,[t("li",null,"When you're ready to publish a theme simply run the build task.")],-1),Y=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),i(" run webpack:build\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),A=t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),i(" webpack:build\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])],-1),B=r('<ol start="2"><li>Then move the contents of the <code>shopify</code> directory from the <code>source-code</code> to the <code>dist-code</code> directory and push your changes to GitHub.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>shopify-theme-lab/\n├─ source-code/shopify/  &lt;- move all contents from here\n└─ dist-code/            &lt;- to here\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',2),C={start:"3"},L=i("Follow the Shopify GitHub integration "),O={href:"https://shopify.dev/themes/tools/github/getting-started",target:"_blank",rel:"noopener noreferrer"},F=i("Instructions"),j=i(" and select your main brach from the dist repo for the Shopify GitHub integration."),D=t("h3",{id:"other",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#other","aria-hidden":"true"},"#"),i(" Other")],-1),W=i("The "),q={href:"https://shopify.dev/themes/best-practices/version-control",target:"_blank",rel:"noopener noreferrer"},z=i("Shopify docs"),E=i(" describe several other ways how to set up version control with a custom build-workflow.");u.render=function(i,r){const u=e("CodeGroupItem"),J=e("CodeGroup"),K=e("OutboundLink");return n(),a(o,null,[d,c,h,l(J,null,{default:s((()=>[l(u,{title:"NPM",active:""},{default:s((()=>[p])),_:1}),l(u,{title:"YARN"},{default:s((()=>[b])),_:1})])),_:1}),m,l(J,null,{default:s((()=>[l(u,{title:"NPM",active:""},{default:s((()=>[f])),_:1}),l(u,{title:"YARN"},{default:s((()=>[g])),_:1})])),_:1}),y,v,w,l(J,null,{default:s((()=>[l(u,{title:"NPM",active:""},{default:s((()=>[x])),_:1}),l(u,{title:"YARN"},{default:s((()=>[k])),_:1})])),_:1}),_,S,t("p",null,[G,t("a",N,[P,l(K)]),R]),H,I,T,M,l(J,null,{default:s((()=>[l(u,{title:"NPM",active:""},{default:s((()=>[Y])),_:1}),l(u,{title:"YARN"},{default:s((()=>[A])),_:1})])),_:1}),B,t("ol",C,[t("li",null,[L,t("a",O,[F,l(K)]),j])]),D,t("p",null,[W,t("a",q,[z,l(K)]),E])],64)};export{u as default};
