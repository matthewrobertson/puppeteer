"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,y=d["".concat(u,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},s="Request Interception",u={unversionedId:"guides/request-interception",id:"guides/request-interception",title:"Request Interception",description:"Once request interception is enabled, every request will stall unless it's",source:"@site/../docs/guides/request-interception.md",sourceDirName:"guides",slug:"/guides/request-interception",permalink:"/next/guides/request-interception",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Docker",permalink:"/next/guides/docker"},next:{title:"Chrome Extensions",permalink:"/next/guides/chrome-extensions"}},p={},l=[{value:"Multiple Intercept Handlers and Asynchronous Resolutions",id:"multiple-intercept-handlers-and-asynchronous-resolutions",level:2},{value:"Cooperative Intercept Mode",id:"cooperative-intercept-mode",level:2},{value:"Cooperative Request Continuation",id:"cooperative-request-continuation",level:2},{value:"Upgrading to Cooperative Intercept Mode for package maintainers",id:"upgrading-to-cooperative-intercept-mode-for-package-maintainers",level:2}],c={toc:l};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"request-interception"}),"Request Interception"),(0,r.kt)("p",null,"Once request interception is enabled, every request will stall unless it's\ncontinued, responded or aborted."),(0,r.kt)("p",null,"An example of a na\xefve request interceptor that aborts all image requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setRequestInterception(true);\n  page.on('request', interceptedRequest => {\n    if (interceptedRequest.isInterceptResolutionHandled()) return;\n    if (\n      interceptedRequest.url().endsWith('.png') ||\n      interceptedRequest.url().endsWith('.jpg')\n    )\n      interceptedRequest.abort();\n    else interceptedRequest.continue();\n  });\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n")),(0,r.kt)("h2",o({},{id:"multiple-intercept-handlers-and-asynchronous-resolutions"}),"Multiple Intercept Handlers and Asynchronous Resolutions"),(0,r.kt)("p",null,"By default Puppeteer will raise a ",(0,r.kt)("inlineCode",{parentName:"p"},"Request is already handled!")," exception if\n",(0,r.kt)("inlineCode",{parentName:"p"},"request.abort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"request.continue"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"request.respond")," are called after any\nof them have already been called."),(0,r.kt)("p",null,"Always assume that an unknown handler may have already called\n",(0,r.kt)("inlineCode",{parentName:"p"},"abort/continue/respond"),". Even if your handler is the only one you registered,\n3rd party packages may register their own handlers. It is therefore important to\nalways check the resolution status using\n",(0,r.kt)("a",o({parentName:"p"},{href:"#httprequestisinterceptresolutionhandled"}),"request.isInterceptResolutionHandled"),"\nbefore calling ",(0,r.kt)("inlineCode",{parentName:"p"},"abort/continue/respond"),"."),(0,r.kt)("p",null,"Importantly, the intercept resolution may get handled by another listener while\nyour handler is awaiting an asynchronous operation. Therefore, the return value\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"request.isInterceptResolutionHandled")," is only safe in a synchronous code\nblock. Always execute ",(0,r.kt)("inlineCode",{parentName:"p"},"request.isInterceptResolutionHandled")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"abort/continue/respond")," ",(0,r.kt)("strong",{parentName:"p"},"synchronously")," together."),(0,r.kt)("p",null,"This example demonstrates two synchronous handlers working together:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"/*\nThis first handler will succeed in calling request.continue because the request interception has never been resolved.\n*/\npage.on('request', interceptedRequest => {\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n  interceptedRequest.continue();\n});\n\n/*\nThis second handler will return before calling request.abort because request.continue was already\ncalled by the first handler.\n*/\npage.on('request', interceptedRequest => {\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n  interceptedRequest.abort();\n});\n")),(0,r.kt)("p",null,"This example demonstrates asynchronous handlers working together:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"/*\nThis first handler will succeed in calling request.continue because the request interception has never been resolved.\n*/\npage.on('request', interceptedRequest => {\n  // The interception has not been handled yet. Control will pass through this guard.\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n\n  // It is not strictly necessary to return a promise, but doing so will allow Puppeteer to await this handler.\n  return new Promise(resolve => {\n    // Continue after 500ms\n    setTimeout(() => {\n      // Inside, check synchronously to verify that the intercept wasn't handled already.\n      // It might have been handled during the 500ms while the other handler awaited an async op of its own.\n      if (interceptedRequest.isInterceptResolutionHandled()) {\n        resolve();\n        return;\n      }\n      interceptedRequest.continue();\n      resolve();\n    }, 500);\n  });\n});\npage.on('request', async interceptedRequest => {\n  // The interception has not been handled yet. Control will pass through this guard.\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n\n  await someLongAsyncOperation();\n  // The interception *MIGHT* have been handled by the first handler, we can't be sure.\n  // Therefore, we must check again before calling continue() or we risk Puppeteer raising an exception.\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n  interceptedRequest.continue();\n});\n")),(0,r.kt)("p",null,"For finer-grained introspection (see Cooperative Intercept Mode below), you may\nalso call\n",(0,r.kt)("a",o({parentName:"p"},{href:"#httprequestinterceptresolutionstate"}),"request.interceptResolutionState"),"\nsynchronously before using ",(0,r.kt)("inlineCode",{parentName:"p"},"abort/continue/respond"),"."),(0,r.kt)("p",null,"Here is the example above rewritten using ",(0,r.kt)("inlineCode",{parentName:"p"},"request.interceptResolutionState")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"/*\nThis first handler will succeed in calling request.continue because the request interception has never been resolved.\n*/\npage.on('request', interceptedRequest => {\n  // The interception has not been handled yet. Control will pass through this guard.\n  const {action} = interceptedRequest.interceptResolutionState();\n  if (action === InterceptResolutionAction.AlreadyHandled) return;\n\n  // It is not strictly necessary to return a promise, but doing so will allow Puppeteer to await this handler.\n  return new Promise(resolve => {\n    // Continue after 500ms\n    setTimeout(() => {\n      // Inside, check synchronously to verify that the intercept wasn't handled already.\n      // It might have been handled during the 500ms while the other handler awaited an async op of its own.\n      const {action} = interceptedRequest.interceptResolutionState();\n      if (action === InterceptResolutionAction.AlreadyHandled) {\n        resolve();\n        return;\n      }\n      interceptedRequest.continue();\n      resolve();\n    }, 500);\n  });\n});\npage.on('request', async interceptedRequest => {\n  // The interception has not been handled yet. Control will pass through this guard.\n  if (\n    interceptedRequest.interceptResolutionState().action ===\n    InterceptResolutionAction.AlreadyHandled\n  )\n    return;\n\n  await someLongAsyncOperation();\n  // The interception *MIGHT* have been handled by the first handler, we can't be sure.\n  // Therefore, we must check again before calling continue() or we risk Puppeteer raising an exception.\n  if (\n    interceptedRequest.interceptResolutionState().action ===\n    InterceptResolutionAction.AlreadyHandled\n  )\n    return;\n  interceptedRequest.continue();\n});\n")),(0,r.kt)("h2",o({},{id:"cooperative-intercept-mode"}),"Cooperative Intercept Mode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"request.abort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"request.continue"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"request.respond")," can accept an\noptional ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," to work in Cooperative Intercept Mode. When all handlers are\nusing Cooperative Intercept Mode, Puppeteer guarantees that all intercept\nhandlers will run and be awaited in order of registration. The interception is\nresolved to the highest-priority resolution. Here are the rules of Cooperative\nIntercept Mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All resolutions must supply a numeric ",(0,r.kt)("inlineCode",{parentName:"li"},"priority")," argument to\n",(0,r.kt)("inlineCode",{parentName:"li"},"abort/continue/respond"),"."),(0,r.kt)("li",{parentName:"ul"},"If any resolution does not supply a numeric ",(0,r.kt)("inlineCode",{parentName:"li"},"priority"),", Legacy Mode is active\nand Cooperative Intercept Mode is inactive."),(0,r.kt)("li",{parentName:"ul"},"Async handlers finish before intercept resolution is finalized."),(0,r.kt)("li",{parentName:"ul"},'The highest priority interception resolution "wins", i.e. the interception is\nultimately aborted/responded/continued according to which resolution was given\nthe highest priority.'),(0,r.kt)("li",{parentName:"ul"},"In the event of a tie, ",(0,r.kt)("inlineCode",{parentName:"li"},"abort")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"respond")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"continue"),".")),(0,r.kt)("p",null,"For standardization, when specifying a Cooperative Intercept Mode priority use\n",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT_INTERCEPT_RESOLUTION_PRIORITY")," (exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPRequest"),")\nunless you have a clear reason to use a higher priority. This gracefully prefers\n",(0,r.kt)("inlineCode",{parentName:"p"},"respond")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"respond")," and allows other handlers\nto work cooperatively. If you do intentionally want to use a different priority,\nhigher priorities win over lower priorities. Negative priorities are allowed.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"continue({}, 4)")," would win over ",(0,r.kt)("inlineCode",{parentName:"p"},"continue({}, -2)"),"."),(0,r.kt)("p",null,"To preserve backward compatibility, any handler resolving the intercept without\nspecifying ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," (Legacy Mode) causes immediate resolution. For Cooperative\nIntercept Mode to work, all resolutions must use a ",(0,r.kt)("inlineCode",{parentName:"p"},"priority"),". In practice, this\nmeans you must still test for ",(0,r.kt)("inlineCode",{parentName:"p"},"request.isInterceptResolutionHandled")," because a\nhandler beyond your control may have called ",(0,r.kt)("inlineCode",{parentName:"p"},"abort/continue/respond")," without a\npriority (Legacy Mode)."),(0,r.kt)("p",null,"In this example, Legacy Mode prevails and the request is aborted immediately\nbecause at least one handler omits ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," when resolving the intercept:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"// Final outcome: immediate abort()\npage.setRequestInterception(true);\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Legacy Mode: interception is aborted immediately.\n  request.abort('failed');\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n  // Control will never reach this point because the request was already aborted in Legacy Mode\n\n  // Cooperative Intercept Mode: votes for continue at priority 0.\n  request.continue({}, 0);\n});\n")),(0,r.kt)("p",null,"In this example, Legacy Mode prevails and the request is continued because at\nleast one handler does not specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"priority"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"// Final outcome: immediate continue()\npage.setRequestInterception(true);\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to abort at priority 0.\n  request.abort('failed', 0);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Control reaches this point because the request was cooperatively aborted which postpones resolution.\n\n  // { action: InterceptResolutionAction.Abort, priority: 0 }, because abort @ 0 is the current winning resolution\n  console.log(request.interceptResolutionState());\n\n  // Legacy Mode: intercept continues immediately.\n  request.continue({});\n});\npage.on('request', request => {\n  // { action: InterceptResolutionAction.AlreadyHandled }, because continue in Legacy Mode was called\n  console.log(request.interceptResolutionState());\n});\n")),(0,r.kt)("p",null,"In this example, Cooperative Intercept Mode is active because all handlers\nspecify a ",(0,r.kt)("inlineCode",{parentName:"p"},"priority"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"continue()")," wins because it has a higher priority than\n",(0,r.kt)("inlineCode",{parentName:"p"},"abort()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"// Final outcome: cooperative continue() @ 5\npage.setRequestInterception(true);\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to abort at priority 10\n  request.abort('failed', 0);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to continue at priority 5\n  request.continue(request.continueRequestOverrides(), 5);\n});\npage.on('request', request => {\n  // { action: InterceptResolutionAction.Continue, priority: 5 }, because continue @ 5 > abort @ 0\n  console.log(request.interceptResolutionState());\n});\n")),(0,r.kt)("p",null,"In this example, Cooperative Intercept Mode is active because all handlers\nspecify ",(0,r.kt)("inlineCode",{parentName:"p"},"priority"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"respond()")," wins because its priority ties with\n",(0,r.kt)("inlineCode",{parentName:"p"},"continue()"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"respond()")," beats ",(0,r.kt)("inlineCode",{parentName:"p"},"continue()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"// Final outcome: cooperative respond() @ 15\npage.setRequestInterception(true);\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to abort at priority 10\n  request.abort('failed', 10);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to continue at priority 15\n  request.continue(request.continueRequestOverrides(), 15);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to respond at priority 15\n  request.respond(request.responseForRequest(), 15);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to respond at priority 12\n  request.respond(request.responseForRequest(), 12);\n});\npage.on('request', request => {\n  // { action: InterceptResolutionAction.Respond, priority: 15 }, because respond @ 15 > continue @ 15 > respond @ 12 > abort @ 10\n  console.log(request.interceptResolutionState());\n});\n")),(0,r.kt)("h2",o({},{id:"cooperative-request-continuation"}),"Cooperative Request Continuation"),(0,r.kt)("p",null,"Puppeteer requires ",(0,r.kt)("inlineCode",{parentName:"p"},"request.continue()")," to be called explicitly or the request\nwill hang. Even if your handler means to take no special action, or 'opt out',\n",(0,r.kt)("inlineCode",{parentName:"p"},"request.continue()")," must still be called."),(0,r.kt)("p",null,"With the introduction of Cooperative Intercept Mode, two use cases arise for\ncooperative request continuations: Unopinionated and Opinionated."),(0,r.kt)("p",null,"The first case (common) is that your handler means to opt out of doing anything\nspecial the request. It has no opinion on further action and simply intends to\ncontinue by default and/or defer to other handlers that might have an opinion.\nBut in case there are no other handlers, we must call ",(0,r.kt)("inlineCode",{parentName:"p"},"request.continue()")," to\nensure that the request doesn't hang."),(0,r.kt)("p",null,"We call this an ",(0,r.kt)("strong",{parentName:"p"},"Unopinionated continuation")," because the intent is to continue\nthe request if nobody else has a better idea. Use\n",(0,r.kt)("inlineCode",{parentName:"p"},"request.continue({...}, DEFAULT_INTERCEPT_RESOLUTION_PRIORITY)")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),") for\nthis type of continuation."),(0,r.kt)("p",null,"The second case (uncommon) is that your handler actually does have an opinion\nand means to force continuation by overriding a lower-priority ",(0,r.kt)("inlineCode",{parentName:"p"},"abort()")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"respond()")," issued elsewhere. We call this an ",(0,r.kt)("strong",{parentName:"p"},"Opinionated continuation"),". In\nthese rare cases where you mean to specify an overriding continuation priority,\nuse a custom priority."),(0,r.kt)("p",null,"To summarize, reason through whether your use of ",(0,r.kt)("inlineCode",{parentName:"p"},"request.continue")," is just\nmeant to be default/bypass behavior vs falling within the intended use case of\nyour handler. Consider using a custom priority for in-scope use cases, and a\ndefault priority otherwise. Be aware that your handler may have both Opinionated\nand Unopinionated cases."),(0,r.kt)("h2",o({},{id:"upgrading-to-cooperative-intercept-mode-for-package-maintainers"}),"Upgrading to Cooperative Intercept Mode for package maintainers"),(0,r.kt)("p",null,"If you are package maintainer and your package uses intercept handlers, you can\nupdate your intercept handlers to use Cooperative Intercept Mode. Suppose you\nhave the following existing handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"page.on('request', interceptedRequest => {\n  if (request.isInterceptResolutionHandled()) return;\n  if (\n    interceptedRequest.url().endsWith('.png') ||\n    interceptedRequest.url().endsWith('.jpg')\n  )\n    interceptedRequest.abort();\n  else interceptedRequest.continue();\n});\n")),(0,r.kt)("p",null,"To use Cooperative Intercept Mode, upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"continue()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"abort()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"page.on('request', interceptedRequest => {\n  if (request.isInterceptResolutionHandled()) return;\n  if (\n    interceptedRequest.url().endsWith('.png') ||\n    interceptedRequest.url().endsWith('.jpg')\n  )\n    interceptedRequest.abort('failed', 0);\n  else\n    interceptedRequest.continue(\n      interceptedRequest.continueRequestOverrides(),\n      0\n    );\n});\n")),(0,r.kt)("p",null,"With those simple upgrades, your handler now uses Cooperative Intercept Mode\ninstead."),(0,r.kt)("p",null,"However, we recommend a slightly more robust solution because the above\nintroduces several subtle issues:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Backward compatibility.")," If any handler still uses a Legacy Mode\nresolution (ie, does not specify a priority), that handler will resolve the\ninterception immediately even if your handler runs first. This could cause\ndisconcerting behavior for your users because suddenly your handler is not\nresolving the interception and a different handler is taking priority when\nall the user did was upgrade your package."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Hard-coded priority.")," Your package user has no ability to specify the\ndefault resolution priority for your handlers. This can become important when\nthe user wishes to manipulate the priorities based on use case. For example,\none user might want your package to take a high priority while another user\nmight want it to take a low priority.")),(0,r.kt)("p",null,"To resolve both of these issues, our recommended approach is to export a\n",(0,r.kt)("inlineCode",{parentName:"p"},"setInterceptResolutionConfig()")," from your package. The user can then call\n",(0,r.kt)("inlineCode",{parentName:"p"},"setInterceptResolutionConfig()")," to explicitly activate Cooperative Intercept\nMode in your package so they aren't surprised by changes in how the interception\nis resolved. They can also optionally specify a custom priority using\n",(0,r.kt)("inlineCode",{parentName:"p"},"setInterceptResolutionConfig(priority)")," that works for their use case:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"// Defaults to undefined which preserves Legacy Mode behavior\nlet _priority = undefined;\n\n// Export a module configuration function\nexport const setInterceptResolutionConfig = (priority = 0) =>\n  (_priority = priority);\n\n/**\n * Note that this handler uses `DEFAULT_INTERCEPT_RESOLUTION_PRIORITY` to \"pass\" on this request. It is important to use\n * the default priority when your handler has no opinion on the request and the intent is to continue() by default.\n */\npage.on('request', interceptedRequest => {\n  if (request.isInterceptResolutionHandled()) return;\n  if (\n    interceptedRequest.url().endsWith('.png') ||\n    interceptedRequest.url().endsWith('.jpg')\n  )\n    interceptedRequest.abort('failed', _priority);\n  else\n    interceptedRequest.continue(\n      interceptedRequest.continueRequestOverrides(),\n      DEFAULT_INTERCEPT_RESOLUTION_PRIORITY // Unopinionated continuation\n    );\n});\n")),(0,r.kt)("p",null,"If your package calls for more fine-grained control over resolution priorities,\nuse a config pattern like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"interface InterceptResolutionConfig {\n  abortPriority?: number;\n  continuePriority?: number;\n}\n\n// This approach supports multiple priorities based on situational\n// differences. You could, for example, create a config that\n// allowed separate priorities for PNG vs JPG.\nconst DEFAULT_CONFIG: InterceptResolutionConfig = {\n  abortPriority: undefined, // Default to Legacy Mode\n  continuePriority: undefined, // Default to Legacy Mode\n};\n\n// Defaults to undefined which preserves Legacy Mode behavior\nlet _config: Partial<InterceptResolutionConfig> = {};\n\nexport const setInterceptResolutionConfig = (\n  config: InterceptResolutionConfig\n) => (_config = {...DEFAULT_CONFIG, ...config});\n\npage.on('request', interceptedRequest => {\n  if (request.isInterceptResolutionHandled()) return;\n  if (\n    interceptedRequest.url().endsWith('.png') ||\n    interceptedRequest.url().endsWith('.jpg')\n  ) {\n    interceptedRequest.abort('failed', _config.abortPriority);\n  } else {\n    // Here we use a custom-configured priority to allow for Opinionated\n    // continuation.\n    // We would only want to allow this if we had a very clear reason why\n    // some use cases required Opinionated continuation.\n    interceptedRequest.continue(\n      interceptedRequest.continueRequestOverrides(),\n      _config.continuePriority // Why would we ever want priority!==0 here?\n    );\n  }\n});\n")),(0,r.kt)("p",null,"The above solutions ensure backward compatibility while also allowing the user\nto adjust the importance of your package in the resolution chain when\nCooperative Intercept Mode is being used. Your package continues to work as\nexpected until the user has fully upgraded their code and all third party\npackages to use Cooperative Intercept Mode. If any handler or package still uses\nLegacy Mode, your package can still operate in Legacy Mode too."))}d.isMDXComponent=!0}}]);