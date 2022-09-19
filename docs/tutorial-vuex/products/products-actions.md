---
id: actions
sidebar_position: 4
description: Actions
---

# Actions

액션은 변이와 유사합니다. 몇가지 다른 점은,

- 상태를 변이시키는 대신 액션으로 변이에 대한 커밋을 합니다.
- 작업에는 임의의 비동기 작업이 포함될 수 있습니다.

## Actions 등록하기

간단한 액션을 등록합시다.

### API 호출하기

```ts title="/src/store/modules/products/actions.ts"
import { Commit } from "vuex";
import { fetchAllProducts } from "../../../api/products";

export const getAllProducts = async ({
  commit,
}: {
  commit: Commit;
}) => {
  const { data } = await fetchAllProducts();
};
```

### mutation-types.ts 작성하기

```ts title="/src/store/modules/products/mutation-types.ts"
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
```

### commit을 호출하여 변이를 커밋하기

```ts
import { Commit } from "vuex";
import { fetchAllProducts } from "../../../api/products";
// highlight-next-line
import { SET_ALL_PRODUCTS } from "./mutation-types";

export const getAllProducts = async ({
  commit,
}: {
  commit: Commit;
}) => {
  const { data } = await fetchAllProducts();
  // highlight-next-line
  commit(SET_ALL_PRODUCTS, data.products)
};
```

### export default -> export 에러 수정하기

```ts title="/src/store/modules/products/index.ts"
import { Module } from "vuex";
import { State as RootState } from "../../index";
// highlight-next-line
import * as actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
// ...
```