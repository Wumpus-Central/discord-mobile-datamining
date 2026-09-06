// _runtime/04849_ArrayCreate.js
import getEvalledConstructor from "01282_getEvalledConstructor.js";
import _mod1283 from "metro/01283__.js";
import isInteger from "04846_isInteger.js";

let closure_2 = getEvalledConstructor("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(4850)) {
        const tmp12 = new tmp(1302)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(4851)) {
            tmp(4851)(items, tmp3);
          } else {
            const tmp7 = new tmp(1304)(
              "ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]",
            );
            throw tmp7;
          }
        }
        if (0 !== arg0) {
          items.length = arg0;
        }
        return items;
      }
    }
  }
  throw new _mod1283("Assertion failed: `length` must be an integer Number >= 0");
}
