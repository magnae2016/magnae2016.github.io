---
sidebar_position: 3
description: Asynchronous logic
---

# api 요청 함수 작성

```ts title="/src/api/products.ts"
import { dummyjson } from "./instance"

const api = {
  allProducts: "/products"
}

function fetchAllProducts() {
  return dummyjson.get(api.allProducts)
}
```

# Axios 반환 타입 정의하기
Axios는 라이브러리 내부의 index.d.ts에 정의된 AxiosResponse 타입을 Promise로 반환한다.

```ts title="/src/types/products.ts"
export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

export interface ProductsResponse {
  limit: number
  products: Product[]
  skip: number
  total: number
}
```

```ts title="/src/api/products.ts"
import { AxiosPromise } from "axios"
// highlight-next-line
import { ProductsResponse } from "../types/products"
import { dummyjson } from "./instance"

const api = {
  allProducts: "/products"
}

// highlight-next-line
export function fetchAllProducts():AxiosPromise<ProductsResponse> {
  return dummyjson.get(api.allProducts)
}
```