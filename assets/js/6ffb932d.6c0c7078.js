"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:d,groupId:v,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[x,w]=(0,r.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=v){const e=y[v];null!=e&&e!==x&&f.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=j.indexOf(t),n=f[a].value;n!==x&&(O(t),w(n),null!=v&&N(v,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>j.push(e),onKeyDown:E,onFocus:T,onClick:T},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},6986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const l={sidebar_position:1,description:"How to install Docusaurus locally, and start a Docusaurus site in no time."},o="\uc124\uce58",i={unversionedId:"tutorial-vuex/installation",id:"tutorial-vuex/installation",title:"\uc124\uce58",description:"How to install Docusaurus locally, and start a Docusaurus site in no time.",source:"@site/docs/tutorial-vuex/installation.md",sourceDirName:"tutorial-vuex",slug:"/tutorial-vuex/installation",permalink:"/docs/tutorial-vuex/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-vuex/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to install Docusaurus locally, and start a Docusaurus site in no time."},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Vuex",permalink:"/docs/category/tutorial---vuex"},next:{title:"\ucef4\ud3ec\uc9c0\uc158 API(Composition API)",permalink:"/docs/tutorial-vuex/composition-api"}},s={},u=[{value:"\uc6f9\uc0ac\uc774\ud2b8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \ubf08\ub300 \ub9cc\ub4e4\uae30",id:"\uc6f9\uc0ac\uc774\ud2b8-\ud504\ub85c\uc81d\ud2b8\ub97c-\uc704\ud55c-\ubf08\ub300-\ub9cc\ub4e4\uae30",level:2},{value:"\uac1c\ubc1c \uc11c\ubc84 \uc2e4\ud589\ud558\uae30",id:"\uac1c\ubc1c-\uc11c\ubc84-\uc2e4\ud589\ud558\uae30",level:2},{value:"Vuex \uc124\uce58\ud558\uae30",id:"vuex-\uc124\uce58\ud558\uae30",level:2},{value:"Axios \uc124\uce58\ud558\uae30",id:"axios-\uc124\uce58\ud558\uae30",level:2},{value:"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc870",id:"\ud504\ub85c\uc81d\ud2b8-\uad6c\uc870",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc124\uce58"},"\uc124\uce58"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vitejs-kr.github.io/guide/"},"Vite"),"\ub294 \ube60\ub974\uace0 \uac04\uacb0\ud55c \ubaa8\ub358 \uc6f9 \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c \uacbd\ud5d8\uc5d0 \ucd08\uc810\uc744 \ub9de\ucdb0 \ud0c4\uc0dd\ud55c \ube4c\ub4dc \ub3c4\uad6c\uc785\ub2c8\ub2e4.  "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Vite\ub294 \ubc84\uc804 14.18+ \ub610\ub294 16+ \uc758 Node.js\ub97c \uc694\uad6c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"  \ub2e4\ub9cc \uc77c\ubd80 \ud15c\ud50c\ub9bf\uc758 \uacbd\uc6b0 \ub354 \ub192\uc740 \ubc84\uc804\uc758 Node.js\ub97c \uc694\uad6c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("a",{parentName:"p",href:"https://jsikim1.tistory.com/158"},"Node.js Upgrade \ubc29\ubc95 - \ub098\ub97c \uc704\ud55c \uac83\ub9cc\uc740 \uc544\ub2cc \uae30\ub85d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g n\nn latest\n"))),(0,r.kt)("h2",{id:"\uc6f9\uc0ac\uc774\ud2b8-\ud504\ub85c\uc81d\ud2b8\ub97c-\uc704\ud55c-\ubf08\ub300-\ub9cc\ub4e4\uae30"},"\uc6f9\uc0ac\uc774\ud2b8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \ubf08\ub300 \ub9cc\ub4e4\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://vitejs-kr.github.io/guide/#scaffolding-your-first-vite-project"},"Vite"))," \uba85\ub839\ud589 \ub3c4\uad6c\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \uae30\ubcf8 \ud30c\uc77c\uc744 \ud3ec\ud568\ud55c \uc0c8\ub85c\uc6b4 \ub514\ub809\ud130\ub9ac\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub530\ub77c\uc11c Vite\ub97c \uc774\uc6a9\ud574 \uc0dd\uc131\ub41c \ud504\ub85c\uc81d\ud2b8\ub97c \uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uace0, \ud544\uc694\uc5d0 \ub530\ub77c \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub9de\uac8c \ubcc0\ud615\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest\n")),(0,r.kt)("p",null,"\uc774\ud6c4\uc5d0\ub294 \ud504\ub86c\ud504\ud2b8 \ucc3d\uc5d0 \ucd9c\ub825\ub41c \uba54\uc2dc\uc9c0\ub97c \ub530\ub77c\uc8fc\uc138\uc694."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Package name: ",(0,r.kt)("strong",{parentName:"li"},"vuex-quick-starts")),(0,r.kt)("li",{parentName:"ul"},"\u2705 Select a framework: ",(0,r.kt)("strong",{parentName:"li"},"Vue")),(0,r.kt)("li",{parentName:"ul"},"\u2705 Select a variant: ",(0,r.kt)("strong",{parentName:"li"},"TypeScript"))),(0,r.kt)("p",null,"Now run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd vuex-quick-starts\nnpm install\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud504\ub85c\uc81d\ud2b8\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest ./\nnpm install\n"))),(0,r.kt)("h2",{id:"\uac1c\ubc1c-\uc11c\ubc84-\uc2e4\ud589\ud558\uae30"},"\uac1c\ubc1c \uc11c\ubc84 \uc2e4\ud589\ud558\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173"),"\uc744 \uc5f4\uace0 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ub530\ub77c\uac00 \ubd05\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"vuex-\uc124\uce58\ud558\uae30"},"Vuex \uc124\uce58\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://vuex.vuejs.org/#what-is-vuex"},"Vuex")),"\ub294 Vue.js \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \uc0c1\ud0dc \uad00\ub9ac \ud328\ud134 + \ub77c\uc774\ube0c\ub7ec\ub9ac \uc785\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub300\ud55c \uc911\uc559 \uc9d1\uc911\uc2dd \uc800\uc7a5\uc18c \uc5ed\ud560\uc744 \ud558\uba70 \uc608\uce21 \uac00\ub2a5\ud55c \ubc29\uc2dd\uc73c\ub85c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vue add vuex\n\n# Converting JavaScript to TypeScript\nmv src/store/index.js src/store/index.ts \n")),(0,r.kt)("h2",{id:"axios-\uc124\uce58\ud558\uae30"},"Axios \uc124\uce58\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://axios-http.com/kr/docs/intro"},"Axios")),"\ub294 node.js\uc640 \ube0c\ub77c\uc6b0\uc800\ub97c \uc704\ud55c Promise \uae30\ubc18 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8 \uc785\ub2c8\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios\n")),(0,r.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8-\uad6c\uc870"},"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc870"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vuex-quick-starts/")," \ub514\ub809\ud130\ub9ac \ubc11\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ud30c\uc77c\uc774 \uc0dd\uc131\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vuex-quick-starts\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2514\u2500\u2500 HelloWorld.vue\n# highlight-start\n\u2502   \u251c\u2500\u2500 store\n\u2502   \u2502   \u2514\u2500\u2500 index.ts\n# highlight-end\n\u2502   \u251c\u2500\u2500 App.vue\n# highlight-next-line\n\u2502   \u2514\u2500\u2500 main.ts\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 vite.config.ts\n")))}p.isMDXComponent=!0}}]);