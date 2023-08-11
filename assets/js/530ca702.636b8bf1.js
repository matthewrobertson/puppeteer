"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||p;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<p;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},70620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={sidebar_label:"Page.addStyleTag"},i="Page.addStyleTag() method",o={unversionedId:"api/puppeteer.page.addstyletag",id:"version-21.0.3/api/puppeteer.page.addstyletag",title:"Page.addStyleTag() method",description:"Adds a ` tag into the page with the desired URL or a ` tag with the content.",source:"@site/versioned_docs/version-21.0.3/api/puppeteer.page.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.page.addstyletag",permalink:"/api/puppeteer.page.addstyletag",draft:!1,tags:[],version:"21.0.3",frontMatter:{sidebar_label:"Page.addStyleTag"},sidebar:"api",previous:{title:"Page.addScriptTag",permalink:"/api/puppeteer.page.addscripttag"},next:{title:"Page.addStyleTag_1",permalink:"/api/puppeteer.page.addstyletag_1"}},d={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],u={toc:s};function c(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"pageaddstyletag-method"}),"Page.addStyleTag() method"),(0,a.kt)("p",null,"Adds a ",(0,a.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tag into the page with the desired URL or a ",(0,a.kt)("inlineCode",{parentName:"p"},'<style type="text/css">')," tag with the content."),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.frame.addstyletag_1"}),"page.mainFrame().addStyleTag(options)"),"."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  addStyleTag(\n    options: Omit<FrameAddStyleTagOptions, 'url'>\n  ): Promise<ElementHandle<HTMLStyleElement>>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Omit","<",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.frameaddstyletagoptions"}),"FrameAddStyleTagOptions"),", 'url'",">"),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","HTMLStyleElement",">",">"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"element handle")," to the injected ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," element."))}c.isMDXComponent=!0}}]);