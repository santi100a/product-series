/* eslint-disable @typescript-eslint/no-var-requires */

const product = require('..');

describe('product_function', () => {
    // Tests that the function correctly calculates the product of an array of positive numbers
    it('test_product_positive_numbers', () => {
        expect(product([1, 2, 3])).toBe(6);
    });

    // Tests that the function correctly calculates the product of an array of negative numbers
    it('test_product_negative_numbers', () => {
        expect(product([-1, -2, -3])).toBe(-6);
    });

    // Tests that the function correctly calculates the product of an array of mixed positive and negative numbers
    it('test_product_mixed_numbers', () => {
        expect(product([1, -2, 3])).toBe(-6);
    });

    // Tests that the function correctly calculates the product of an array of decimal numbers
    it('test_product_decimal_numbers', () => {
        expect(product([0.1, 0.2, 0.3])).toBeCloseTo(0.006);
    });

    // Tests that the function returns 1 when given an empty array
    it('test_product_empty_array', () => {
        expect(product([])).toBe(1);
    });

    // Tests that the function returns 1 when start is greater than end and step is positive
    it('test_product_start_greater_than_end_and_step_positive', () => {
        expect(product((n) => n, 5, 1)).toBe(1);
    });

    test('happy path: it can correctly solve Π[1, 5] 1/n', () => {
        const result = 0.008333333333333333;
        const reciprocal = x => 1 / x;
        const output = product(reciprocal, 1, 5);
        expect(output).toBeCloseTo(result);
    });
    test('edge case: start is NaN', () => {
        expect(product(x => x, NaN, 5)).toBe(NaN);
    });
    test('edge case: math function returns NaN', () => {
        expect(product(() => NaN, 1, 5)).toBe(NaN);
    });
    test('edge case: first argument is not a number', () => {
        expect(() => product('not a function or array', 1, 5)).toThrow(TypeError);
    });
    test('edge case: second argument is not a number', () => {
        expect(() => product(Math.sin, 'not a number', 2)).toThrow(TypeError);
    });
    test('edge case: third argument is not a number', () => {
        expect(() => product(Math.sin, 1, 'not a number')).toThrow(TypeError);
    });
    test('edge case: first argument is ±Infinity', () => {
        expect(() => product(Infinity, 1, 5)).toThrow(TypeError);
        expect(() => product(-Infinity, 1, 5)).toThrow(TypeError);
    });
    test('edge case: second argument is ±Infinity', () => {
        expect(() => product(Math.sin, Infinity, 2)).toThrow(TypeError);
        expect(() => product(Math.sin, -Infinity, 2)).toThrow(TypeError);
    });
    test('edge case: third argument is ±Infinity', () => {
        expect(() => product(Math.sin, 1, Infinity)).toThrow(TypeError);
        expect(() => product(Math.sin, 1, -Infinity)).toThrow(TypeError);
    });
});
