(function(e){function t(t){for(var r,n,s=t[0],c=t[1],i=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&u.push(l[n][0]),l[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==l[c]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},l={app:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),l={id:"app",class:"relative bg-gray-dark"},o={class:"grid gap-y-96 md:gap-y-192 overflow-x-hidden"};function n(e,t,a,n,s,c){var i=Object(r["resolveComponent"])("SideBar"),p=Object(r["resolveComponent"])("NavBar"),d=Object(r["resolveComponent"])("MainHero"),u=Object(r["resolveComponent"])("Roster"),g=Object(r["resolveComponent"])("Footer");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[Object(r["createVNode"])(i),Object(r["createVNode"])(p),Object(r["createElementVNode"])("main",o,[Object(r["createVNode"])(d),Object(r["createVNode"])(u),Object(r["createVNode"])(g)])])}var s={class:"relative md:absolute overflow-hidden top-0 left-0 z-10 h-40 md:h-full w-full md:w-40",style:{background:"linear-gradient(#f74f90, #b00443)"}},c=Object(r["createStaticVNode"])('<div class="animation-sidebar flex flex-col h-full justify-around items-center"><p class="md:-rotate-90 w-max font-heading text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-main text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-heading text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-main text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-heading text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-main text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-heading text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-main text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-heading text-20 text-gray-dark"> FVF Esport </p><p class="md:-rotate-90 w-max font-main text-20 text-gray-dark"> FVF Esport </p></div>',1),i=[c];function p(e,t,a,l,o,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,i)}var d={name:"SideBar",components:{},data:function(){}};d.render=p;var u=d,g={class:"bg-gray-dark py-40"},f=Object(r["createStaticVNode"])('<nav class="max-w-screen-2xl mx-auto px-24 xs:px-36 sm:px-44 lg:px-52 md:px-60 grid grid-cols-12 gap-x-12 xs:gap-x-16 sm:gap-x-24 lg:gap-x-32 xl:gap-x-40 flex h-auto px-16 justify-between items-center gap-y-32"><div class="col-span-12 xl:col-span-3"><p class="font-main text-30 leading-30 text-gray-light text-center xl:text-left"> FVF ESPORT </p></div><div class="col-span-12 xl:col-span-3 text-center"><a href="https://www.fifa.gg/c/fifae-nations-series-2022" target="_blank" rel="noopener noreferrer" class="font-action text-14 leading-14 text-gray-default underline transition-opacity ease-in duration-200 hover:opacity-80"> FIFA NATIONS SERIES 2002 </a></div><div class="col-span-12 xl:col-span-3 text-center"><a href="http://www.federacionvenezolanadefutbol.org/" target="_blank" rel="noopener noreferrer" class="font-action text-14 leading-14 text-gray-default underline transition-opacity ease-in duration-200 hover:opacity-80"> FEDERACIÓN VENEZOLANA DE FÚTBOL </a></div><div class="col-span-12 xl:col-span-3 text-center xl:text-right mt-16 lg:mt-0"><a href="https://www.instagram.com/fvfesports/" target="_blank" rel="noopener noreferrer" class="group relative font-action text-14 py-12 px-24 leading-30 border-2 border-wine-light transition-colors ease-in duration-200"><span class="absolute block inset-0 w-full scale-x-0 h-full bg-wine-light origin-left group-hover:scale-x-100 transition-transform ease-in duration-500 delay-200"></span><span class="relative text-wine-light group-hover:text-gray-light duration-500 delay-200"> visítanos en instagram </span></a></div></nav>',1),x=[f];function m(e,t,a,l,o,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("header",g,x)}var v={name:"NavBar",components:{},data:function(){var e=[{title:"about",url:"./#about"},{title:"work",url:"./#work"},{title:"skills",url:"./#skills"}];return{navigation_items:e,publicPath:""}}};v.render=m;var b=v,h={class:"relative bg-gray-dark pt-52 pb-60"},y={class:"max-w-screen-2xl mx-auto px-24 xs:px-36 sm:px-44 lg:px-52 md:px-60 grid grid-cols-12 gap-x-12 xs:gap-x-16 sm:gap-x-24 lg:gap-x-32 xl:gap-x-40"},w=Object(r["createStaticVNode"])('<div class="row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-12 md:col-span-5 z-10 flex flex-col justify-start items-start mt-40 md:mt-44 2xl:mt-[104px] -ml-12 md:-ml-32 xl:-ml-64"><div class="relative flex gap-10 items-center py-4"><div class="absolute w-full h-full bg-yellow opacity-30 rounded-full"></div><span class="font-action text-12 font-600 text-gray-dark bg-yellow rounded-full uppercase text-14 py-6 px-8 ml-4"> destacado </span><p class="font-display text-12 text-gray-light pr-10"> Equipo confirmado </p></div></div><div class="row-start-1 col-start-1 md:col-start-2 col-span-12 md:col-span-5 z-10 flex flex-col justify-center lg:-mt-128"><h1 class="title font-heading text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 xl:leading-80 text-gray-light uppercase"> ha llegado la nueva generación </h1><p class="font-display text-16 md:text-14 text-gray-light mt-40 lg:w-1/2"> Apoya a nuestros chamos en este nuevo torneo digital 🎮 </p></div>',2),j={class:"relative row-start-1 col-start-2 md:col-start-4 col-span-10 md:col-span-6"},O=Object(r["createElementVNode"])("div",{class:"relative bg-gray-dark h-[600px] md:h-[900px] w-full md:w-[620px] mx-auto rounded-tr-[150px] md:rounded-tr-[200px] lg:rounded-tr-[250px] xl:rounded-tr-[300px] overflow-hidden opacity-50"},[Object(r["createElementVNode"])("video",{class:"video-plyr absolute inset-0 w-full h-full object-cover",autoplay:"",muted:"",loop:"",playsinline:"",src:"https://res.cloudinary.com/dbyzfcnpg/video/upload/v1653090011/fvf-esport-intro_bzzv7q.mp4",poster:"https://res.cloudinary.com/dbyzfcnpg/image/upload/v1653092926/hero-placeholder-2_ihmryi.jpg"})],-1),k={href:"https://www.youtube.com/watch?v=MaHNemqrbLc",target:"_blank",rel:"noopener noreferrer",class:"group absolute flex items-center justify-center gap-60 left-[-1rem] bottom-0 font-action text-14 p-14 md:p-44 leading-30 transition-colors ease-in duration-200 z-10"},E=Object(r["createElementVNode"])("span",{class:"absolute block inset-0 w-full h-full bg-gray-dark"},null,-1),V=Object(r["createElementVNode"])("span",{class:"absolute block inset-0 w-full scale-x-0 h-full bg-wine-light origin-left group-hover:scale-x-100 transition-transform ease-in duration-500 delay-200"},null,-1),N=Object(r["createElementVNode"])("span",{class:"relative text-gray-light duration-500 delay-200"}," mira los juegos aqui ",-1),_=["src"],F={class:"row-start-3 md:row-start-2 xl:row-start-1 xl:col-start-10 col-span-12 xl:col-span-3 mt-40 md:mt-88"},z=Object(r["createElementVNode"])("p",{class:"flex items-center gap-12 font-display text-gray-default uppercase text-12"},[Object(r["createElementVNode"])("span",{class:"relative flex h-8 w-8"},[Object(r["createElementVNode"])("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"}),Object(r["createElementVNode"])("span",{class:"relative inline-flex m-auto rounded-full h-6 w-6 bg-green"})]),Object(r["createTextVNode"])(" últimas noticias ")],-1),S={class:"flex flex-col mt-16 md:mt-60 gap-y-56 gap-y-40"},P={class:"group",href:"https://www.instagram.com/p/CddtG66u1Uq/?utm_source=ig_web_copy_link",target:"_blank",rel:"noopener noreferrer"},B={class:"flex justify-between gap-32"},q=Object(r["createElementVNode"])("h2",{class:"font-heading text-44 text-gray-light leading-44 font-600 uppercase transition-colors duration-200 group-hover:text-wine-light"}," Charla de identidad ",-1),C=["src"],T=Object(r["createElementVNode"])("p",{class:"font-action text-12 text-gray-light mt-20 uppercase"}," may0 12, 2022 ",-1),M=Object(r["createElementVNode"])("span",{class:"block mt-40 ml-32 origin-left scale-x-50 group-hover:scale-x-100 transition-transform ease-in duration-200 delay-200 border-gray-light border-t-[1px]"},null,-1),A={class:"group",href:"https://www.instagram.com/p/CdYQbDnupi1/?utm_source=ig_web_copy_link",target:"_blank",rel:"noopener noreferrer"},R={class:"flex justify-between gap-32"},D=Object(r["createElementVNode"])("h2",{class:"font-heading text-44 text-gray-light leading-44 font-600 uppercase transition-colors duration-200 group-hover:text-wine-light"}," nuestro dt ",-1),H=["src"],I=Object(r["createElementVNode"])("p",{class:"font-action text-12 text-gray-light mt-20 uppercase"}," mayo 10, 2022 ",-1),L=Object(r["createElementVNode"])("span",{class:"block mt-40 ml-32 origin-left scale-x-50 group-hover:scale-x-100 transition-transform ease-in duration-200 delay-200 border-gray-light border-t-[1px]"},null,-1),J={class:"group",href:"https://www.instagram.com/p/Ccv7K9KOevp/?utm_source=ig_web_copy_link",target:"_blank",rel:"noopener noreferrer"},Y={class:"flex justify-between gap-32"},K=Object(r["createElementVNode"])("h2",{class:"font-heading text-44 text-gray-light leading-44 font-600 uppercase transition-colors duration-200 group-hover:text-wine-light"}," tenemos campeón ",-1),G=["src"],Q=Object(r["createElementVNode"])("p",{class:"font-action text-12 text-gray-light mt-20 uppercase"}," abril 24, 2022 ",-1),U=Object(r["createElementVNode"])("span",{class:"block mt-40 ml-32 origin-left scale-x-50 group-hover:scale-x-100 transition-transform ease-in duration-200 delay-200 border-gray-light border-t-[1px]"},null,-1);function Z(e,t,a,l,o,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("section",h,[Object(r["createElementVNode"])("div",y,[w,Object(r["createElementVNode"])("div",j,[O,Object(r["createElementVNode"])("a",k,[E,V,N,Object(r["createElementVNode"])("img",{class:"self-end transition-transform ease-in duration-200 group-hover:scale-50 scale-50 m-auto",src:"".concat(o.publicPath,"icons/arrow-link.svg"),alt:""},null,8,_)])]),Object(r["createElementVNode"])("div",F,[z,Object(r["createElementVNode"])("div",S,[Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("a",P,[Object(r["createElementVNode"])("div",B,[q,Object(r["createElementVNode"])("img",{class:"self-end transition-transform ease-in duration-200 group-hover:scale-50",src:"".concat(o.publicPath,"icons/arrow-link.svg"),alt:""},null,8,C)]),T,M])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("a",A,[Object(r["createElementVNode"])("div",R,[D,Object(r["createElementVNode"])("img",{class:"self-end transition-transform ease-in duration-200 group-hover:scale-50",src:"".concat(o.publicPath,"icons/arrow-link.svg"),alt:""},null,8,H)]),I,L])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("a",J,[Object(r["createElementVNode"])("div",Y,[K,Object(r["createElementVNode"])("img",{class:"self-end transition-transform ease-in duration-200 group-hover:scale-50",src:"".concat(o.publicPath,"icons/arrow-link.svg"),alt:""},null,8,G)]),Q,U])])])])])])}var W=a("cffa"),X=a("1dac"),$=a("4fb8"),ee=a.n($);a("78f6");W["a"].registerPlugin(X["a"]);var te={name:"MainHero",components:{},data:function(){return{publicPath:"",plyr:null}},mounted:function(){W["a"].to(document.querySelector(".title"),{scrollTrigger:{trigger:".title",start:"top center",end:"bottom center",scrub:2},x:"10%",duration:3}),this.plyr=document.querySelector(".video-plyr"),new ee.a(this.plyr,{autoplay:!0,muted:!0,loop:!0,controls:!1,iconPrefix:"plyr"})},methods:{mobilePlay:function(){document.body.addEventListener("touchstart",(function(){this.plyr.play()}))}}};te.render=Z;var ae=te,re={class:"max-w-screen-2xl mx-auto px-24 xs:px-36 sm:px-44 lg:px-52 md:px-60 grid grid-cols-12 gap-x-12 xs:gap-x-16 sm:gap-x-24 lg:gap-x-32 xl:gap-x-40 gap-y-64"},le=Object(r["createStaticVNode"])('<div class="col-start-1 col-span-12 xl:col-start-2 xl:col-span-3 text-gray-light flex flex-col md:flex-row md:flex-wrap md:justify-center gap-40 order-3 xl:order-1"><div class="flex flex-col xl:flex-row items-center justify-start w-full gap-16"><div class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"><a href="https://www.instagram.com/jose.kazanji/" target="_blank" rel="noopener noreferrer" class="group overflow-hidden"><img class="absolute w-full h-full object-cover group-hover:scale-110 transition-transform ease-in duration-200" src="https://res.cloudinary.com/dbyzfcnpg/image/upload/v1653092219/jose-kazanji_cwvzgs.jpg" alt="jose kazanji"></a></div><div><p class="font-display text-gray-light uppercase"> Jose kazanji 🎮 </p><p class="font-display text-gray-default">24 años</p><p class="font-display text-gray-default">jose.kazanji</p></div></div><div class="flex flex-col xl:flex-row items-center justify-start w-full gap-16"><div class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"><a href="https://www.instagram.com/fabian_pg9/" target="_blank" rel="noopener noreferrer" class="group overflow-hidden"><img class="absolute w-full h-full object-cover group-hover:scale-110 transition-transform ease-in duration-200" src="https://res.cloudinary.com/dbyzfcnpg/image/upload/v1653092499/fabian-penuela_chquoo.jpg" alt="fabian peñuela"></a></div><div><p class="font-display text-gray-light uppercase"> fabian peñuela 🎮 </p><p class="font-display text-gray-default">18 años</p><p class="font-display text-gray-default">fabian_pg9</p></div></div><div class="flex flex-col xl:flex-row items-center justify-start w-full gap-16"><div class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"><a href="https://www.instagram.com/jesc_7_96/" target="_blank" rel="noopener noreferrer" class="group overflow-hidden"><img class="absolute w-full h-full object-cover group-hover:scale-110 transition-transform ease-in duration-200" src="https://res.cloudinary.com/dbyzfcnpg/image/upload/v1653092715/jose-silva_oov4ma.jpg" alt="jose silva"></a></div><div><p class="font-display text-gray-light uppercase"> jose silva 🎮 </p><p class="font-display text-gray-default">26 años</p><p class="font-display text-gray-default">jesc_7_96</p></div></div><div class="flex flex-col xl:flex-row items-center justify-start w-full gap-16"><div class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"><a href="https://www.instagram.com/yeickens/" target="_blank" rel="noopener noreferrer" class="group overflow-hidden"><img class="absolute w-full h-full object-cover group-hover:scale-110 transition-transform ease-in duration-200" src="https://res.cloudinary.com/dbyzfcnpg/image/upload/v1653092874/yeickens_cjvzdp.jpg" alt="Yeickens Orozco"></a></div><div><p class="font-display text-gray-light uppercase"> Yeickens Orozco 🎮 </p><p class="font-display text-gray-default">27 años</p><p class="font-display text-gray-default">yeickens</p></div></div></div>',1),oe={class:"relative col-start-1 col-span-12 xl:col-start-5 xl:col-span-4 text-gray-light flex flex-col text-center items-center self-center order-1 xl:order-2"},ne=["src"],se=Object(r["createStaticVNode"])('<div class="absolute top-0 bottom-0 m-auto flex flex-col justify-center"><span class="font-main opacity-20 text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"> equipo </span><span class="font-main opacity-50 text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"> equipo </span><h2 class="roster font-heading text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"> equipo </h2><span class="font-main opacity-50 text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"> equipo </span><span class="font-main opacity-20 text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"> equipo </span></div>',1),ce=Object(r["createStaticVNode"])('<div class="col-start-1 col-span-12 xl:col-start-9 xl:col-span-3 text-gray-light flex flex-col items-center self-center uppercase order-2 xl:order-3"><div class="flex flex-col xl:flex-row items-center md:justify-start w-full gap-16"><div class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"><a href="https://www.instagram.com/rafaleco425/" target="_blank" rel="noopener noreferrer" class="group overflow-hidden"><img class="absolute w-full h-full object-cover group-hover:scale-110 transition-transform ease-in duration-200" src="https://res.cloudinary.com/dbyzfcnpg/image/upload/v1653093151/rafael-guevara_c7ojxh.jpg" alt=""></a></div><div><p class="font-display text-gray-light uppercase"> rafael guevara DT 🎮 </p><p class="font-display text-gray-default">n/a</p><p class="font-display text-gray-default">rafaleco425</p></div></div></div>',1);function ie(e,t,a,l,o,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("section",null,[Object(r["createElementVNode"])("div",re,[le,Object(r["createElementVNode"])("div",oe,[Object(r["createElementVNode"])("img",{class:"realtive h-auto w-[424px] opacity-50 mix-blend-overlay top-0 bottom-0 my-auto",src:"".concat(o.publicPath,"img/fvf-equipo.svg"),alt:""},null,8,ne),se]),ce])])}W["a"].registerPlugin(X["a"]);var pe={name:"Roster",components:{},data:function(){return{publicPath:""}},mounted:function(){W["a"].to(document.querySelector(".roster"),{scrollTrigger:{trigger:".roster",start:"top center",end:"bottom center",scrub:2},scale:"1.3",duration:4})}};pe.render=ie;var de=pe,ue={class:"bg-gray-dark py-44"},ge=Object(r["createStaticVNode"])('<div class="container max-w-screen-2xl mx-auto px-24 xs:px-36 sm:px-44 lg:px-52 md:px-60 grid grid-cols-12 gap-x-12 xs:gap-x-16 sm:gap-x-24 lg:gap-x-32 xl:gap-x-40 flex h-auto px-16 justify-between items-center"><div class="col-span-6"><p class="font-action text-12 font-400 text-gray-default"> © 2022 FVF ESPORT </p></div><div class="col-span-6"><p class="font-action text-12 font-400 text-gray-default text-right"> creado por <a href="https://carloscaro.me" target="_blank" rel="noopener noreferrer" class="underline hover:text-wine-light transition-colors ease-in duration-100">carloscaro.me</a></p></div></div>',1),fe=[ge];function xe(e,t,a,l,o,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("section",ue,fe)}var me={name:"Footer",data:function(){return{publicPath:""}}};me.render=xe;var ve=me,be={components:{NavBar:b,SideBar:u,MainHero:ae,Roster:de,Footer:ve},mounted:function(){}};be.render=n;var he=be,ye=a("c06f"),we=a.n(ye),je=(a("dfff"),a("c789"),a("a766"),a("db43"),a("784e"),Object(r["createApp"])(he));je.use(we.a).mount("#app")},"784e":function(e,t){},a766:function(e,t,a){},db43:function(e,t,a){}});
//# sourceMappingURL=app.7d03521c.js.map