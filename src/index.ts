/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
	assertExclusiveMax,
	assertExclusiveMin,
	assertTypeOf,
} from '@santi100/assertion-lib';

/**
 * Product of the numbers in an array.
 *
 * @param arr An array of numbers.
 * @returns The product of all numbers in the array.
 */
function product(arr: number[]): number;
/**
 * Product of numbers in [`start`, `end`] (with a step of `step`).
 *
 * @param fn A math function to process every number in the range.
 * @param start Inclusive start of the range.
 * @param end Inclusive end of the range.
 * @param step Optional step between every iteration (defaults to 1).
 * @returns The product of [`start`, `end`] with a step of `step`.
 */
function product(
	fn: (n: number) => number,
	start: number,
	end: number,
	step?: number
): number;

function product(
	arrOrFn: number[] | ((n: number) => number),
	start?: number,
	end?: number
) {
	if (arrOrFn instanceof Array) {
		let product = 1; // Initialize as 1 for multiplication
		for (const n of arrOrFn) {
			assertTypeOf(n, 'number', 'n');
			product *= n; // Multiply each number
		}
		return product;
	} else if (typeof arrOrFn === 'function') {
		let product = 1; // Initialize as 1 for multiplication
		assertTypeOf(end, 'number', 'end');
		assertTypeOf(start, 'number', 'start');

		assertExclusiveMax(start, Infinity, 'start');
		assertExclusiveMin(start, -Infinity, 'start');

		assertExclusiveMax(end, Infinity, 'end');
		assertExclusiveMin(end, -Infinity, 'end');

		if (isNaN(start!) || isNaN(end!)) return NaN;

		for (let i = start!; i <= end!; i++) {
			const result = arrOrFn(i);
			assertTypeOf(result, 'number', 'result');
			if (isNaN(result)) return NaN;
			product *= result; // Multiply each result
		}
		return product;
	} else {
		throw new TypeError(
			`"arrOrFn" must be of type "function" or an instance of Array. Got "${arrOrFn}" of type "${typeof arrOrFn}".`
		);
	}
}

export = product;
