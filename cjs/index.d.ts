/**
 * Product of the numbers in an array.
 *
 * @param arr An array of numbers.
 * @returns The product of all numbers in the array.
 */
declare function product(arr: number[]): number;
/**
 * Product of numbers in [`start`, `end`] (with a step of `step`).
 *
 * @param fn A math function to process every number in the range.
 * @param start Inclusive start of the range.
 * @param end Inclusive end of the range.
 * @param step Optional step between every iteration (defaults to 1).
 * @returns The product of [`start`, `end`] with a step of `step`.
 */
declare function product(fn: (n: number) => number, start: number, end: number, step?: number): number;
export = product;
