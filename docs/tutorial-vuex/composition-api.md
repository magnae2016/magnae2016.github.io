---
sidebar_position: 2
description: To access the store within the setup hook, you can call the useStore function. This is the equivalent of retrieving this.$store within a component using the Option API.
---

# 컴포지션 API(Composition API)
Vue 3의 **[Composition API](https://v3.ko.vuejs.org/guide/composition-api-introduction.html)**는 컴포넌트를 작성할 때 함수 기반의 방법을 제시합니다.  
Composition API는 특정 역할에 따른 함수의 분리 등을 통하여 논리적인 관점 단위로 개발하고, 동일한 논리적 관심사와 관련있는 코드를 함께 배치할 수 있게 해줍니다.

## setup 컴포넌트 옵션
Composition API 작업을 시작하려면, 우선 실제로 사용할 수 있는 장소가 필요합니다. Vue 컴포넌트에서는 이 위치를 `setup` 이라고 부릅니다. `setup` 컴포넌트 옵션은 컴포넌트가 생성되기 전에, props가 한번 resolved될 때 실행됩니다.

스토어를 setup 함수에서 사용하기 위해서는 Vuex의 `useStore` 객체를 불러와 사용해야 합니다.
```js
// in a vue component
import { useStore } from 'vuex'

export default defineComponent({
  // highlight-start
  setup () {
    const store = useStore()

    store.state.count
    return {}
  }
  // highlight-end
})
```
:::info

TypeScript에서 Vue component내의 타입을 올바르게 추론하려면, 전역 메서드 `defineComponent`를 통해 component를 정의 해야합니다

:::

## Vuex와 함께 TypeScript를 사용하기
[TypeScript에서 `useStore`내의 타입을 올바르게 추론](https://vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function)하려면,
1. Define the typed `InjectionKey`.
2. Provide the typed `InjectionKey` when installing a store to the Vue app.
3. Pass the typed `InjectionKey` to the useStore method.

### 1. Define the typed InjectionKey.
`store` 타이핑 정의와 함께 Vue의 `InjectionKey` 인터페이스를 사용하여 키를 정의합니다.
```js title="/src/store/index.ts"
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define typings for the store state
// highlight-start
interface State {
  count: number
}
// highlight-end

// define injection key
// highlight-next-line
export const key:InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    // highlight-next-line
    count: 0
  },
  // ...
})
```

### 2. Provide the typed InjectionKey when installing a store to the Vue app.
스토어를 설치할 때 `InjectionKey`를 Vue 앱에 전달합니다.
```ts title="/src/main.ts"
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// highlight-next-line
import { store, key } from './store'

// pass the injection key
// highlight-next-line
createApp(App).use(store, key).mount('#app')
```

:::info 정보
명시적으로 export 하지 않는 한 모듈 외부에서 보이지 않습니다.
export 키워드를 추가하여 모든 선언 (변수, 함수, 클래스, 타입 별칭, 인터페이스)을 export 할 수 있습니다.
```ts
export const key:InjectionKey<Store<State>> = Symbol()
```
:::
### 3. Pass the typed InjectionKey to the useStore method.
useStore 메서드에 키를 전달하여 `store`내의 타입을 올바르게 추론할 수 있습니다.

```ts title="/src/App.vue"
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "./store";

export default defineComponent({
  setup() {
    const store = useStore(key);
    console.log(store.state.count);
    return {};
  },
});
</script>

<style scoped>
</style>
```

:::tip
Visual Studio Code의 Extensions `Vue VSCode Snippets`을 설치하면 Vue.js with TypeScript Snippets을 제공합니다.

Single File component Composition API with Typescript 명령어는 다음과 같습니다.
```
vbase-3-ts
```
:::

## Simplifying useStore usage
Store를 사용하기 위해 InjectionKey를 전달해야 하는 작업은 반복 작업이 될 수 있습니다.
이를 단순화하기 위해 함수를 정의하여 `store`내의 타입을 추론할 수 있습니다.

```ts title="/src/store/index.ts"
import { InjectionKey } from 'vue'
// highlight-next-line
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// ...

// define your own `useStore` composition function
// highlight-start
export function useStore() {
  return baseUseStore(key);
}
// highlight-end
```

```ts title="/src/App.vue"
// ...
<script lang="ts">
import { defineComponent } from "vue";
// import { useStore } from "vuex";
// import { key } from "./store";
// highlight-start
import { useStore } from "./store";
// highlight-end

export default defineComponent({
  setup() {
    // highlight-next-line
    const store = useStore();
    console.log(store.state.count);
    return {};
  },
});
</script>
```