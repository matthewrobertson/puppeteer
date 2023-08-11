"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,y=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_label:"Page.emulateVisionDeficiency"},p="Page.emulateVisionDeficiency() method",l={unversionedId:"api/puppeteer.page.emulatevisiondeficiency",id:"version-21.0.3/api/puppeteer.page.emulatevisiondeficiency",title:"Page.emulateVisionDeficiency() method",description:"Simulates the given vision deficiency on the page.",source:"@site/versioned_docs/version-21.0.3/api/puppeteer.page.emulatevisiondeficiency.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatevisiondeficiency",permalink:"/api/puppeteer.page.emulatevisiondeficiency",draft:!1,tags:[],version:"21.0.3",frontMatter:{sidebar_label:"Page.emulateVisionDeficiency"},sidebar:"api",previous:{title:"Page.emulateTimezone",permalink:"/api/puppeteer.page.emulatetimezone"},next:{title:"Page.evaluate",permalink:"/api/puppeteer.page.evaluate"}},c={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],s={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"pageemulatevisiondeficiency-method"}),"Page.emulateVisionDeficiency() method"),(0,r.kt)("p",null,"Simulates the given vision deficiency on the page."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  emulateVisionDeficiency(\n    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']\n  ): Promise<void>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Protocol.Emulation.SetEmulatedVisionDeficiencyRequest","[","'type'","]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"(Optional)")," the type of deficiency to simulate, or ",(0,r.kt)("code",null,"'none'")," to reset.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",a({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://v8.dev/blog/10-years');\n\n  await page.emulateVisionDeficiency('achromatopsia');\n  await page.screenshot({path: 'achromatopsia.png'});\n\n  await page.emulateVisionDeficiency('deuteranopia');\n  await page.screenshot({path: 'deuteranopia.png'});\n\n  await page.emulateVisionDeficiency('blurredVision');\n  await page.screenshot({path: 'blurred-vision.png'});\n\n  await browser.close();\n})();\n")))}m.isMDXComponent=!0}}]);