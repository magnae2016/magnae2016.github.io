"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(2389);const o={sidebar_position:1,description:"How to install Docusaurus locally, and start a Docusaurus site in no time."},l="\uc124\uce58",i={unversionedId:"tutorial-vuex/installation",id:"tutorial-vuex/installation",title:"\uc124\uce58",description:"How to install Docusaurus locally, and start a Docusaurus site in no time.",source:"@site/docs/tutorial-vuex/installation.md",sourceDirName:"tutorial-vuex",slug:"/tutorial-vuex/installation",permalink:"/docs/tutorial-vuex/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-vuex/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to install Docusaurus locally, and start a Docusaurus site in no time."},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Vuex",permalink:"/docs/category/tutorial---vuex"}},s={},u=[{value:"\uc6f9\uc0ac\uc774\ud2b8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \ubf08\ub300 \ub9cc\ub4e4\uae30",id:"\uc6f9\uc0ac\uc774\ud2b8-\ud504\ub85c\uc81d\ud2b8\ub97c-\uc704\ud55c-\ubf08\ub300-\ub9cc\ub4e4\uae30",level:2},{value:"\uac1c\ubc1c \uc11c\ubc84 \uc2e4\ud589\ud558\uae30",id:"\uac1c\ubc1c-\uc11c\ubc84-\uc2e4\ud589\ud558\uae30",level:2},{value:"Vuex \uc124\uce58\ud558\uae30",id:"vuex-\uc124\uce58\ud558\uae30",level:2},{value:"Axios \uc124\uce58\ud558\uae30",id:"axios-\uc124\uce58\ud558\uae30",level:2},{value:"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc870",id:"\ud504\ub85c\uc81d\ud2b8-\uad6c\uc870",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc124\uce58"},"\uc124\uce58"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vitejs-kr.github.io/guide/"},"Vite"),"\ub294 \ube60\ub974\uace0 \uac04\uacb0\ud55c \ubaa8\ub358 \uc6f9 \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c \uacbd\ud5d8\uc5d0 \ucd08\uc810\uc744 \ub9de\ucdb0 \ud0c4\uc0dd\ud55c \ube4c\ub4dc \ub3c4\uad6c\uc785\ub2c8\ub2e4.  "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Vite\ub294 \ubc84\uc804 14.18+ \ub610\ub294 16+ \uc758 Node.js\ub97c \uc694\uad6c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"  \ub2e4\ub9cc \uc77c\ubd80 \ud15c\ud50c\ub9bf\uc758 \uacbd\uc6b0 \ub354 \ub192\uc740 \ubc84\uc804\uc758 Node.js\ub97c \uc694\uad6c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("a",{parentName:"p",href:"https://jsikim1.tistory.com/158"},"Node.js Upgrade \ubc29\ubc95 - \ub098\ub97c \uc704\ud55c \uac83\ub9cc\uc740 \uc544\ub2cc \uae30\ub85d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g n\nn latest\n"))),(0,r.kt)("h2",{id:"\uc6f9\uc0ac\uc774\ud2b8-\ud504\ub85c\uc81d\ud2b8\ub97c-\uc704\ud55c-\ubf08\ub300-\ub9cc\ub4e4\uae30"},"\uc6f9\uc0ac\uc774\ud2b8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \ubf08\ub300 \ub9cc\ub4e4\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://vitejs-kr.github.io/guide/#scaffolding-your-first-vite-project"},"Vite"))," \uba85\ub839\ud589 \ub3c4\uad6c\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \uae30\ubcf8 \ud30c\uc77c\uc744 \ud3ec\ud568\ud55c \uc0c8\ub85c\uc6b4 \ub514\ub809\ud130\ub9ac\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub530\ub77c\uc11c Vite\ub97c \uc774\uc6a9\ud574 \uc0dd\uc131\ub41c \ud504\ub85c\uc81d\ud2b8\ub97c \uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uace0, \ud544\uc694\uc5d0 \ub530\ub77c \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub9de\uac8c \ubcc0\ud615\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest\n")),(0,r.kt)("p",null,"\uc774\ud6c4\uc5d0\ub294 \ud504\ub86c\ud504\ud2b8 \ucc3d\uc5d0 \ucd9c\ub825\ub41c \uba54\uc2dc\uc9c0\ub97c \ub530\ub77c\uc8fc\uc138\uc694."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Package name: ",(0,r.kt)("strong",{parentName:"li"},"vuex-quick-starts")),(0,r.kt)("li",{parentName:"ul"},"\u2705 Select a framework: ",(0,r.kt)("strong",{parentName:"li"},"Vue")),(0,r.kt)("li",{parentName:"ul"},"\u2705 Select a variant: ",(0,r.kt)("strong",{parentName:"li"},"TypeScript"))),(0,r.kt)("p",null,"Now run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd vuex-quick-starts\nnpm install\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud504\ub85c\uc81d\ud2b8\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest ./\nnpm install\n"))),(0,r.kt)("h2",{id:"\uac1c\ubc1c-\uc11c\ubc84-\uc2e4\ud589\ud558\uae30"},"\uac1c\ubc1c \uc11c\ubc84 \uc2e4\ud589\ud558\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173"),"\uc744 \uc5f4\uace0 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ub530\ub77c\uac00 \ubd05\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"vuex-\uc124\uce58\ud558\uae30"},"Vuex \uc124\uce58\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://vuex.vuejs.org/#what-is-vuex"},"Vuex")),"\ub294 Vue.js \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \uc0c1\ud0dc \uad00\ub9ac \ud328\ud134 + \ub77c\uc774\ube0c\ub7ec\ub9ac \uc785\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub300\ud55c \uc911\uc559 \uc9d1\uc911\uc2dd \uc800\uc7a5\uc18c \uc5ed\ud560\uc744 \ud558\uba70 \uc608\uce21 \uac00\ub2a5\ud55c \ubc29\uc2dd\uc73c\ub85c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vue add vuex\n\n# Converting JavaScript to TypeScript\nmv src/store/index.js src/store/index.ts \n")),(0,r.kt)("h2",{id:"axios-\uc124\uce58\ud558\uae30"},"Axios \uc124\uce58\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://axios-http.com/kr/docs/intro"},"Axios")),"\ub294 node.js\uc640 \ube0c\ub77c\uc6b0\uc800\ub97c \uc704\ud55c Promise \uae30\ubc18 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8 \uc785\ub2c8\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios\n")),(0,r.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8-\uad6c\uc870"},"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc870"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vuex-quick-starts/")," \ub514\ub809\ud130\ub9ac \ubc11\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ud30c\uc77c\uc774 \uc0dd\uc131\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vuex-quick-starts\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2514\u2500\u2500 HelloWorld.vue\n# highlight-start\n\u2502   \u251c\u2500\u2500 store\n\u2502   \u2502   \u2514\u2500\u2500 index.ts\n# highlight-end\n\u2502   \u251c\u2500\u2500 App.vue\n# highlight-next-line\n\u2502   \u2514\u2500\u2500 main.ts\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 vite.config.ts\n")))}c.isMDXComponent=!0}}]);