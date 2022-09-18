---
id: introduction
sidebar_position: 1
description: Accessing Actions, Mutations, State
---

# Introduction

## REST Endpoints

### Get all products
[https://dummyjson.com/products](https://dummyjson.com/products)
```js
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
```
```json
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "...",
      "images": ["...", "...", "..."]
    },
    {...},
    {...},
    {...}
    // 30 items
  ],

  "total": 100,
  "skip": 0,
  "limit": 30
}
```

### Get a single product
[https://dummyjson.com/products/1](https://dummyjson.com/products/1)
```js
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(console.log);
```
```json
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "...",
  "images": ["...", "...", "..."]
}
```

## Todos
- :white_check_mark: Axios 인스턴스 만들기
- :white_check_mark: Asynchronous logic 작성
- :white_check_mark: accessing actions
- :white_check_mark: accessing mutations
- :white_check_mark: accessing State
- :white_check_mark: display state in Vue components
