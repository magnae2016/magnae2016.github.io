---
id: axios
sidebar_position: 2
description: Axios 인스턴스
---

# Axios 인스턴스
사용자 지정 config로 새로운 Axios 인스턴스를 만들수 있습니다.

## 인스턴스 만들기
`src/api` 폴더를 생성하고 다음과 같은 파일 구조를 만듭니다.

```bash
vuex-quick-starts
├── src
# highlight-start
│   ├── api
│   │   ├── instance
│   │   │   ├── index.ts
│   │   └── products.ts
# highlight-end
│   └── main.ts
├── index.html
├── package.json
└── vite.config.ts
```

```ts title="/src/api/instance/index.ts"
import axios, { AxiosInstance } from "axios";

const APP_BASE_URI = "https://dummyjson.com/";

function create(url: string, options = {}): AxiosInstance {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

export const dummyjson = create(APP_BASE_URI, {
  timeout: 1000
});
```