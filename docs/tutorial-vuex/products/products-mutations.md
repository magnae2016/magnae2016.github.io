---
id: mutations
sidebar_position: 5
description: Mutations
---

# Mutations

Vuex 저장소에서 실제로 상태를 변경하는 유일한 방법은 변이하는 것입니다.

## Mutations 등록하기

### Mutations 함수 등록하기

```ts title="/src/store/modules/products/mutations.ts"
// highlight-start
import { State } from "."
import { Product } from "../../../types/products"
import { SET_ALL_PRODUCTS } from "./mutation-types"
// highlight-end

export default {
  increment(state: State) {
    state.count += 100
  },
  // highlight-start
  [SET_ALL_PRODUCTS](state: State, payload: Product[]) {
  }
  // highlight-end
}
```

### State에 allProducts 등록하기

```ts title="/src/store/modules/products/index.ts"
import { Module } from "vuex";
// highlight-next-line
import { Product } from "../../../types/products";
import { State as RootState } from "../../index";
import * as actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export interface State {
  all: number[];
  count: number;
  // highlight-next-line
  allProducts: Product[]
}

// initial state
const state: State = {
  all: [1, 2, 3],
  count: 0,
  // highlight-next-line
  allProducts: []
};

// ...
```

### State에 allProducts 등록하기

```ts title="/src/store/modules/products/mutations.ts"
import { State } from "."
import { Product } from "../../../types/products"
import { SET_ALL_PRODUCTS } from "./mutation-types"

export default {
  increment(state: State) {
    state.count += 100
  },
  [SET_ALL_PRODUCTS](state: State, payload: Product[]) {
    // highlight-next-line
    state.allProducts = payload
  }
}
```