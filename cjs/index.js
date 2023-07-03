"use strict";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var assertion_lib_1 = require("@santi100/assertion-lib");
function product(arrOrFn, start, end) {
    if (arrOrFn instanceof Array) {
        var product_1 = 1; // Initialize as 1 for multiplication
        for (var _i = 0, arrOrFn_1 = arrOrFn; _i < arrOrFn_1.length; _i++) {
            var n = arrOrFn_1[_i];
            (0, assertion_lib_1.assertTypeOf)(n, 'number', 'n');
            product_1 *= n; // Multiply each number
        }
        return product_1;
    }
    else if (typeof arrOrFn === 'function') {
        var product_2 = 1; // Initialize as 1 for multiplication
        (0, assertion_lib_1.assertTypeOf)(end, 'number', 'end');
        (0, assertion_lib_1.assertTypeOf)(start, 'number', 'start');
        (0, assertion_lib_1.assertExclusiveMax)(start, Infinity, 'start');
        (0, assertion_lib_1.assertExclusiveMin)(start, -Infinity, 'start');
        (0, assertion_lib_1.assertExclusiveMax)(end, Infinity, 'end');
        (0, assertion_lib_1.assertExclusiveMin)(end, -Infinity, 'end');
        if (isNaN(start) || isNaN(end))
            return NaN;
        for (var i = start; i <= end; i++) {
            var result = arrOrFn(i);
            (0, assertion_lib_1.assertTypeOf)(result, 'number', 'result');
            if (isNaN(result))
                return NaN;
            product_2 *= result; // Multiply each result
        }
        return product_2;
    }
    else {
        throw new TypeError("\"arrOrFn\" must be of type \"function\" or an instance of Array. Got \"".concat(arrOrFn, "\" of type \"").concat(typeof arrOrFn, "\"."));
    }
}
module.exports = product;
