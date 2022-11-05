"use strict";(self.webpackChunkkyle_watson_portfolio=self.webpackChunkkyle_watson_portfolio||[]).push([[691],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,a=!1,i=0;i<e.length;i++){var r=e[i];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,a=n,n=!0,i++):n&&a&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,i-1)+"-"+e.slice(i-1),a=n,n=!1,t=!0):(t=r.toLowerCase()===r&&r.toUpperCase()!==r,a=n,n=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},3723:function(e,t,n){n.d(t,{L:function(){return f},M:function(){return x},P:function(){return v},S:function(){return R},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return s}});var a=n(7294),i=(n(72),n(5697)),r=n.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t.indexOf(n=r[a])>=0||(i[n]=e[n]);return i}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,n,a,i){return void 0===i&&(i={}),o({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function d(e,t,n,a,i,r,l,s){var c={};r&&(c.backgroundColor=r,"fixed"===n?(c.width=a,c.height=i,c.backgroundColor=r,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,m=["children"],p=function(e){var t=e.layout,n=e.width,i=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,n=l(e,m);return a.createElement(a.Fragment,null,a.createElement(p,o({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],w=function(e){var t=e.src,n=e.srcSet,i=e.loading,r=e.alt,s=void 0===r?"":r,c=e.shouldLoad,d=l(e,g);return a.createElement("img",o({},d,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:s}))},y=function(e){var t=e.fallback,n=e.sources,i=void 0===n?[]:n,r=e.shouldLoad,s=void 0===r||r,c=l(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=a.createElement(w,o({},c,t,{sizes:d,shouldLoad:s}));return i.length?a.createElement("picture",null,i.map((function(e){var t=e.media,n=e.srcSet,i=e.type;return a.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,sizes:d})})),u):u};w.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},y.displayName="Picture",y.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var b=["fallback"],v=function(e){var t=e.fallback,n=l(e,b);return t?a.createElement(y,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},n))};v.displayName="Placeholder",v.propTypes={fallback:i.string,sources:null==(u=y.propTypes)?void 0:u.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var x=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;var E,k,C=function(e,t,n){for(var a=arguments.length,i=new Array(a>3?a-3:0),o=3;o<a;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?r().string.apply(r(),[e,t,n].concat(i)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:r().object.isRequired,alt:C},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],z=new Set,S=function(e){var t=e.as,i=void 0===t?"div":t,r=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,f=e.onLoad,g=e.onError,h=l(e,I),w=r.width,y=r.height,b=r.layout,v=function(e,t,n){var a={},i="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:a}}(w,y,b),x=v.style,C=v.className,_=l(v,L),S=(0,a.useRef)(),N=(0,a.useMemo)((function(){return JSON.stringify(r.images)}),[r.images]);m&&(u=m);var T=function(e,t,n){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,w,y);return(0,a.useEffect)((function(){E||(E=Promise.all([n.e(774),n.e(217)]).then(n.bind(n,9217)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,a=S.current.querySelector("[data-gatsby-image-ssr]");return a&&s()?(a.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(N)):k&&z.has(N)?void 0:(E.then((function(n){var a=n.renderImageToString,i=n.swapPlaceholderImage;S.current&&(S.current.innerHTML=a(o({isLoading:!0,isLoaded:z.has(N),image:r},h)),z.has(N)||(e=requestAnimationFrame((function(){S.current&&(t=i(S.current,N,z,c,p,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[r]),(0,a.useLayoutEffect)((function(){z.has(N)&&k&&(S.current.innerHTML=k(o({isLoading:z.has(N),isLoaded:z.has(N),image:r},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[r]),(0,a.createElement)(i,o({},_,{style:o({},x,c,{backgroundColor:d}),className:C+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},N=(0,a.memo)((function(e){return e.image?(0,a.createElement)(S,e):null}));N.propTypes=_,N.displayName="GatsbyImage";var T,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),U={src:r().string.isRequired,alt:C,width:j,height:j,sizes:r().string,layout:function(e){if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(T=N,function(e){var t=e.src,n=e.__imageData,i=e.__error,r=l(e,A);return i&&console.warn(i),n?a.createElement(T,o({image:n},r)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=U},2618:function(e,t){t.Z=void 0;var n=function(e,t){void 0===t&&(t="start");var n=document.querySelector(e);return!!n&&(n.scrollIntoView({behavior:"smooth",block:t}),!0)};t.Z=n},9683:function(e,t,n){n.d(t,{DV:function(){return m},Uc:function(){return d},X2:function(){return i},bi:function(){return u},eV:function(){return l},gF:function(){return r},gO:function(){return o},r8:function(){return c},ud:function(){return s}});var a=n(3494),i=a.default.div.withConfig({displayName:"content__Row",componentId:"sc-z7oonf-0"})(["display:flex;padding:3rem 8rem;align-items:center;box-shadow:inset #00000070 0px 8px 8px;@media only screen and (max-width:768px){display:block;padding:1rem 3rem;}"]),r=(0,a.default)(i).withConfig({displayName:"content__InvertedRow",componentId:"sc-z7oonf-1"})(["background-color:#136f63;color:white;flex-direction:row-reverse;"]),o=a.default.div.withConfig({displayName:"content__Block",componentId:"sc-z7oonf-2"})(["padding:0 4rem;width:50%;@media only screen and (max-width:768px){width:100%;padding:1rem 0;}"]),l=(0,a.default)(o).withConfig({displayName:"content__CenteredBlock",componentId:"sc-z7oonf-3"})(["text-align:center;"]),s=(0,a.default)(o).withConfig({displayName:"content__FullBlock",componentId:"sc-z7oonf-4"})(["width:100%;"]),c=(0,a.default)(l).withConfig({displayName:"content__ImageBlock",componentId:"sc-z7oonf-5"})(["img{box-shadow:#00000070 0px 8px 8px;border:solid 8px white;border-radius:16px;max-width:100%;max-height:500px;@media only screen and (max-width:1024px){max-width:300px;max-height:300px;}@media only screen and (max-width:768px){max-width:80%;}}"]),d=a.default.div.withConfig({displayName:"content__TextColumn",componentId:"sc-z7oonf-6"})(["a:link{color:#f3b3a6;}a:visited{color:#f3b3a6;}"]),u=a.default.h2.withConfig({displayName:"content__BlockTitle",componentId:"sc-z7oonf-7"})(["font-size:2.5rem;font-family:sans-serif;@media only screen and (max-width:768px){font-size:1.8rem;}"]),m=a.default.h3.withConfig({displayName:"content__ColumnTitle",componentId:"sc-z7oonf-8"})(["font-size:1.8rem;font-family:sans-serif;@media only screen and (max-width:768px){font-size:1.5rem;}"])},7314:function(e,t,n){n.d(t,{o:function(){return C}});var a=n(7294),i=n(3494),r=n(2618),o=n.p+"static/Resume-00f5f6584862a975e67d618db3d871e2.pdf",l=i.default.div.withConfig({displayName:"footer__StyledFooter",componentId:"sc-31xzn6-0"})(["display:flex;padding:1rem 8rem;font-family:sans-serif;color:white;background-color:#001b2e;font-size:1.2rem;@media only screen and (max-width:768px){padding:1rem;display:block;}"]),s=i.default.div.withConfig({displayName:"footer__Links",componentId:"sc-31xzn6-1"})(["padding:0 4rem;@media only screen and (max-width:768px){padding:0 1rem;}"]),c=i.default.h3.withConfig({displayName:"footer__ListTitle",componentId:"sc-31xzn6-2"})(["font-size:1.3rem;font-weight:bold;"]),d=i.default.ul.withConfig({displayName:"footer__List",componentId:"sc-31xzn6-3"})(["list-style:none;padding:0;"]),u=i.default.a.withConfig({displayName:"footer__Link",componentId:"sc-31xzn6-4"})(["&:link{color:white;}&:visited{color:#f3b3a6;}"]),m=i.default.div.withConfig({displayName:"footer__BackButtonContainer",componentId:"sc-31xzn6-5"})(["flex-grow:1;display:flex;justify-content:flex-end;align-items:center;"]),p=i.default.button.withConfig({displayName:"footer__BackButton",componentId:"sc-31xzn6-6"})(["color:#001b2e;font-weight:bold;font-size:1.2rem;background-color:#f3b3a6;padding:1rem;margin:0;border:none;border-radius:20px;box-shadow:#000000 0px 8px 8px;cursor:pointer;transition:ease 0.3s;:hover{transform:translateY(-5px);}"]),f=[{url:"/",label:"Resume"},{url:"/experience",label:"Experience"},{url:"/contact",label:"Contact"}],g=[{url:"https://github.com/kylejwatson",label:"GitHub"},{url:"https://www.linkedin.com/in/kylejwatsonbsc/",label:"LinkedIn"},{url:"mailto:mail@watsonk.me",label:"Email"},{url:o,label:"Resume PDF"},{url:"tel:+31620747762",label:"Mobile Phone"}],h=function(){return a.createElement(l,null,a.createElement(s,null,a.createElement(c,null,"Kyle Watson - Portfolio"),a.createElement(d,null,f.map((function(e,t){return a.createElement("li",{key:t},a.createElement(u,{href:e.url},e.label))})))),a.createElement(s,null,a.createElement(c,null,"Contact"),a.createElement(d,null,g.map((function(e,t){return a.createElement("li",{key:t},a.createElement(u,{href:e.url},e.label))})))),a.createElement(m,null,a.createElement("div",null,a.createElement(p,{onClick:function(){return(0,r.Z)("body")}},"Back to the top"))))},w=i.default.h1.withConfig({displayName:"header__Title",componentId:"sc-a8rlob-0"})(["font-size:3rem;font-family:Impact;color:#f3b3a6;"]),y=(0,i.createGlobalStyle)(["html{@media only screen and (max-width:1024px){font-size:12px;}}body{margin:0;background-color:#CFE8EF;}"]),b=i.default.div.withConfig({displayName:"header__Nav",componentId:"sc-a8rlob-1"})(['padding:0 4rem;text-transform:lowercase;font-family:sans-serif;display:flex;@media only screen and (max-width:768px){display:block;padding:1rem;}background-color:#001b2e;justify-content:space-between;a{color:white;text-decoration:none;transition:all 0.2s ease-in-out;position:relative;&:before,&:after{content:"";position:absolute;bottom:-10px;width:0px;height:5px;margin:5px 0 0;transition:all 0.2s ease-in-out;transition-duration:0.2s;background-color:#f3b3a6;left:0;}&:hover{cursor:pointer;&:before,&:after{width:100%;opacity:1;}}}']),v=i.default.div.withConfig({displayName:"header__NavList",componentId:"sc-a8rlob-2"})(["display:flex;@media only screen and (max-width:768px){justify-content:space-between;}"]),x=i.default.div.withConfig({displayName:"header__NavLink",componentId:"sc-a8rlob-3"})(["display:flex;justify-content:center;align-items:center;font-size:1.5rem;padding:0 1rem;@media only screen and (max-width:768px){font-size:1rem;padding:0;font-weight:bold;}"]),E=function(){return a.createElement(b,null,a.createElement(y,null),a.createElement("a",{href:"/"},a.createElement(w,null,"Kyle W.")),a.createElement(v,null,a.createElement(x,null,a.createElement("a",{href:"/"},"Resume")),a.createElement(x,null,a.createElement("a",{href:"/experience"},"Experience")),a.createElement(x,null,a.createElement("a",{href:"/blog"},"Blog")),a.createElement(x,null,a.createElement("a",{href:"/contact"},"Contact"))))},k=i.default.main.withConfig({displayName:"main__MainStyle",componentId:"sc-158br8o-0"})(["font-family:serif;color:#001b2e;"]),C=function(e){var t=e.children;return a.createElement(k,null,a.createElement(E,null),t,a.createElement(h,null))}},2737:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7294),i=n(3723),r=n(3494),o=n.p+"static/jet-887bbc6d59551a050ee8a6bef3cd5f2b.png",l=n.p+"static/woodwing-576bf896197ce657ea212ba4313afdc9.png",s=n.p+"static/m2mobi_poster-9787929da3aa6f335120f48341162778.jpg",c=n.p+"static/hvawork-936fc26758ddad3ff10ffd55b6eaf935.jpeg",d=n.p+"static/hvapresent-6853231c57904e8200406b36823352d5.jpg",u=n(7314),m=n(9683),p=r.default.a.withConfig({displayName:"pages__ImageLink",componentId:"sc-7azjzd-0"})(["img{background-color:white;transition:ease 0.3s;:hover{transform:scale(1.2);}}"]),f={border:"solid 8px white",borderRadius:"16px",boxShadow:"#00000070 0px 8px 8px"},g=[{title:"Lead 3D Developer",location:"SamsonVT / Manchester, UK",date:"18-05-2020 – 30-04-2021",description:"Full stack development working on a robust AWS techstack to implement a Virtual Twin platform.",link:"#samsonvt-experience",imgUrl:o,imgAlt:"A screenshot of a jet engine on the SamsonCORE platform"},{title:"Junior Software Engineer",location:"WoodWing / Zaandam, NL",date:"01-02-2019 – 01-06-2019",description:"This was my first fulltime experience in the industry, working on enterprise asset management software. It is where I learnt most of my core skills and technologies, including TDD, paired-programming and Typescript.",link:"#woodwing-experience",imgUrl:l,imgAlt:"A promo image for the Woodwing Elvis/DAM platform"},{title:"Development Intern",location:"M2Mobi / Amsterdam, NL",date:"20-09-2018 – 20-01-2019",description:"We worked as a student team on an in-house native android app for reserving meeting rooms in the office. Integration with GSuite, Google Calendars, Firebase.",link:"#m2mobi-experience",imgUrl:s,imgAlt:"A poster created for the midterm presentation on the group work at M2Mobi"},{title:"Software Engineering Bsc (Hons)",location:"University of Salford / Manchester, UK",date:"2016 – 2020",description:"I graduated with a first class bachelors of science degree in July and during my time at the University I had the opportunity to grow my skills, knowledge and interest in the world of computer science. I also had the opportunity to attended many tech events and competitions as a way to further my abilities.",link:"#uos-experience",imgUrl:c,imgAlt:"A photo of Kyle working on a team project in university"},{title:"Mobile Development",location:"Amsterdam University of Applied Sciences/Hogeschool van Amsterdam",date:"2018 – 2019",description:"While working on my final project, which earned me a 10/10 grade, I grew to love working with Java, Kotlin and the Android platform. This was also the year that I studied abroad, learning a lot about Dutch culture and gaining independence. This was also the time in which I did my placement abroad.",link:"#hva-experience",imgUrl:d,imgAlt:"A photo of Kyle presenting his work to the class"}],h=function(){return a.createElement(u.o,null,a.createElement("title",null,"Kyle Watson - Resume"),a.createElement(m.X2,null,a.createElement(m.gO,null,a.createElement(m.bi,null,"About Me"),a.createElement(m.Uc,null,"I am a software engineer from the UK living in the Netherlands. During my career I have worked with several technologies on a wide range of projects for different companies and events. I am an advocate of ",a.createElement("abbr",{title:"Free Open Source Software"},"FOSS")," and online privacy; I enjoy working with 3D CGI, I dabble in game development and electronic music production.")),a.createElement(m.eV,null,a.createElement(i.S,{height:500,width:300,backgroundColor:"white",src:"../images/profile.png",alt:"A profile photo of Kyle",style:f,__imageData:n(104)}))),g.map((function(e,t){var n=t%2?m.X2:m.gF;return a.createElement(n,{key:t},a.createElement(m.r8,null,a.createElement(p,{href:e.link},a.createElement("img",{src:e.imgUrl,alt:e.imgAlt}))),a.createElement(m.gO,null,a.createElement(m.bi,null,e.title),a.createElement(m.DV,null,e.location,a.createElement("br",null),e.date),a.createElement(m.Uc,null,e.description)))})),a.createElement("svg",{style:{position:"absolute",zIndex:-100}},a.createElement("defs",null,a.createElement("clipPath",{id:"wave",clipPathUnits:"objectBoundingBox"},a.createElement("path",{className:"st0",d:"M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z"})))))}},104:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#686868","images":{"fallback":{"src":"/static/dce0cfa9ba336f8425bdfc65f84672b8/3276f/profile.png","srcSet":"/static/dce0cfa9ba336f8425bdfc65f84672b8/0ab4d/profile.png 75w,\\n/static/dce0cfa9ba336f8425bdfc65f84672b8/46077/profile.png 150w,\\n/static/dce0cfa9ba336f8425bdfc65f84672b8/3276f/profile.png 300w,\\n/static/dce0cfa9ba336f8425bdfc65f84672b8/48c5f/profile.png 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/dce0cfa9ba336f8425bdfc65f84672b8/bbdd1/profile.webp 75w,\\n/static/dce0cfa9ba336f8425bdfc65f84672b8/70513/profile.webp 150w,\\n/static/dce0cfa9ba336f8425bdfc65f84672b8/1cb5e/profile.webp 300w,\\n/static/dce0cfa9ba336f8425bdfc65f84672b8/9cb98/profile.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":500}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-702a8595759b2c1e4588.js.map