---
sidebar_position: 1
description: How to install Docusaurus locally, and start a Docusaurus site in no time.
---

# 설치

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

[Vite](https://vitejs-kr.github.io/guide/)는 빠르고 간결한 모던 웹 프로젝트 개발 경험에 초점을 맞춰 탄생한 빌드 도구입니다.  

<details>
  <summary>Vite는 버전 14.18+ 또는 16+ 의 Node.js를 요구합니다.</summary>

  다만 일부 템플릿의 경우 더 높은 버전의 Node.js를 요구할 수 있습니다.  
  [Node.js Upgrade 방법 - 나를 위한 것만은 아닌 기록](https://jsikim1.tistory.com/158)

  ```bash
  npm install -g n
  n latest
  ```
</details>

## 웹사이트 프로젝트를 위한 뼈대 만들기
**[Vite](https://vitejs-kr.github.io/guide/#scaffolding-your-first-vite-project)** 명령행 도구는 프로젝트를 위한 기본 파일을 포함한 새로운 디렉터리를 만듭니다.  
따라서 Vite를 이용해 생성된 프로젝트를 기본적으로 사용하고, 필요에 따라 요구사항에 맞게 변형하겠습니다.

```bash
npm create vite@latest
```
이후에는 프롬프트 창에 출력된 메시지를 따라주세요.
- Package name: __vuex-quick-starts__
- :white_check_mark: Select a framework: __Vue__
- :white_check_mark: Select a variant: __TypeScript__

Now run:
```bash
cd vuex-quick-starts
npm install
```

:::tip

프로젝트의 이름을 지정하지 않고 프로젝트를 만들 수 있습니다.

```bash
npm create vite@latest ./
npm install
```

:::

## 개발 서버 실행하기
```bash
npm run dev
```
[http://localhost:5173](http://localhost:5173)을 열고 튜토리얼을 따라가 봅니다.

## Vuex 설치하기
**[Vuex](https://vuex.vuejs.org/#what-is-vuex)**는 Vue.js 애플리케이션에 대한 상태 관리 패턴 + 라이브러리 입니다. 애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경할 수 있습니다.

```bash
vue add vuex

# Converting JavaScript to TypeScript
mv src/store/index.js src/store/index.ts 
```

## Axios 설치하기
**[Axios](https://axios-http.com/kr/docs/intro)**는 node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트 입니다.  
```bash
npm install axios
```

## 프로젝트 구조
`vuex-quick-starts/` 디렉터리 밑에 아래와 같은 파일이 생성된 것을 확인할 수 있습니다.
```bash
vuex-quick-starts
├── src
│   ├── components
│   │   └── HelloWorld.vue
# highlight-start
│   ├── store
│   │   └── index.ts
# highlight-end
│   ├── App.vue
# highlight-next-line
│   └── main.ts
├── index.html
├── package.json
└── vite.config.ts
```