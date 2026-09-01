// === Module 4802: ArrayCreate ===

// Module 4802 (ArrayCreate)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import _mod541 from "module_541" /* 541 */;
import isInteger from "isInteger" /* 4799 */;

let closure_2 = getEvalledConstructor("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(4803)) {
        const tmp12 = new tmp(560)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(4804)) {
            tmp(4804)(items, tmp3);
          } else {
            const tmp7 = new tmp(562)("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod541("Assertion failed: `length` must be an integer Number >= 0");
};