# Santi's Small Summation Library

[![Build Status](https://github.com/santi100a/product-series/actions/workflows/ci.yml/badge.svg)](https://github.com/santi100a/product-series/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/product-series)](https://npmjs.org/package/@santi100/product-series)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/product-series.svg)](https://github.com/santi100a/product-series)
[![License](https://img.shields.io/github/license/santi100a/product-series.svg)](https://github.com/santi100a/product-series)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/product-series)](https://bundlephobia.com/package/@santi100/product-series@latest)

- 📘 Comes with built-in TypeScript definitions
- 🚀 Lightweight and fast
- 👴 Compliant with ECMAScript 3

## API

- `function product(arr: number[]): number;`

  Product of the numbers in an array.

  | Name  | Type       | Description           | Optional? |
  | ----- | ---------- | --------------------- | --------- |
  | `arr` | `number[]` | An array of numbers.  | No        |

  Returns the product of all numbers in the array.

- `function product(fn: (n: number) => number, start: number, end: number): number;`

  Product of numbers in [`start`, `end`].

  | Name    | Type                    | Description                                            | Optional? |
  | ------- | ----------------------- | ------------------------------------------------------ | --------- |
  | `fn`    | `(n: number) => number` | A math function to process every number in the range.  | No        |
  | `start` | `number`                | Inclusive start of the range.                          | No        |
  | `end`   | `number`                | Inclusive end of the range.                            | No        |

  Returns the product of [`start`, `end`] with a step of `step`.

## Usage

```typescript
import product from '@santi100/product-series'; // ESM
const product = require('@santi100/product-series'); // CJS

// Example 1: Product of numbers in an array
const arr = [1, 2, 3, 4, 5];
const result1 = product(arr);
console.log(result1); // Output: 120

// Example 2: Product of numbers in a range
const fn = (n: number) => n ** 2;
const start = 1;
const end = 5;
const result2 = product(fn, start, end);
console.log(result2); // Output: 14400

```
