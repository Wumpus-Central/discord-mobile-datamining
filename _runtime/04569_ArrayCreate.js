// _runtime/04569_ArrayCreate.js
import { isInteger } from "04566_isInteger.js";
import { 00541__ } from "metro/00541__.js";
let closure_2 = require("getEvalledConstructor")("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger /* isInteger */(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(4570)) {
        const tmp12 = new tmp(560)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(4571)) {
            tmp(4571)(items, tmp3);
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
  throw new 00541__("Assertion failed: `length` must be an integer Number >= 0");
};