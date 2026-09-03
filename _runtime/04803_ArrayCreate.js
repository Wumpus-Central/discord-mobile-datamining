// _runtime/04803_ArrayCreate.js
import getEvalledConstructor from "00537_getEvalledConstructor.js";
import _mod538 from "metro/00538__.js";
import isInteger from "04800_isInteger.js";

let closure_2 = getEvalledConstructor("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(4804)) {
        const tmp12 = new tmp(557)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(4805)) {
            tmp(4805)(items, tmp3);
          } else {
            const tmp7 = new tmp(559)(
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
  throw new _mod538("Assertion failed: `length` must be an integer Number >= 0");
}
