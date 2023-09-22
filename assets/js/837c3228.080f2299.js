"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,m=c["".concat(l,".").concat(y)]||c[y]||u[y]||p;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},47152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"Keyboard.type"},i="Keyboard.type() method",l={unversionedId:"api/puppeteer.keyboard.type",id:"version-21.3.2/api/puppeteer.keyboard.type",title:"Keyboard.type() method",description:"Sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/versioned_docs/version-21.3.2/api/puppeteer.keyboard.type.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.type",permalink:"/api/puppeteer.keyboard.type",draft:!1,tags:[],version:"21.3.2",frontMatter:{sidebar_label:"Keyboard.type"},sidebar:"api",previous:{title:"Keyboard.sendCharacter",permalink:"/api/puppeteer.keyboard.sendcharacter"},next:{title:"Keyboard.up",permalink:"/api/puppeteer.keyboard.up"}},s={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:d};function c(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"keyboardtype-method"}),"Keyboard.type() method"),(0,n.kt)("p",null,"Sends a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Keyboard {\n  type(text: string, options?: Readonly<KeyboardTypeOptions>): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A text to type into a focused element.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Readonly","<",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.keyboardtypeoptions"}),"KeyboardTypeOptions"),">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"(Optional)")," An object of options. Accepts delay which, if specified, is the time to wait between ",(0,n.kt)("code",null,"keydown")," and ",(0,n.kt)("code",null,"keyup")," in milliseconds. Defaults to 0.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"To press a special key, like ",(0,n.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.keyboard.press"}),"Keyboard.press()"),"."),(0,n.kt)("p",null,"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"await page.keyboard.type('Hello'); // Types instantly\nawait page.keyboard.type('World', {delay: 100}); // Types slower, like a user\n")))}c.isMDXComponent=!0}}]);