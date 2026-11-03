// === Module 6622: ArrayCreate ===

// Module 6622 (ArrayCreate)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import _mod1312 from "module_1312" /* 1312 */;
import _mod1314 from "module_1314" /* 1314 */;
import _mod6619 from "module_6619" /* 6619 */;
import _mod6623 from "module_6623" /* 6623 */;
import _mod6624 from "module_6624" /* 6624 */;

let closure_2 = _mod1292("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod6619(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod6623) {
        const tmp12 = new _mod1312("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        items = [];
        if (tmp3 !== closure_2) {
          if (_mod6624) {
            _mod6624(items, tmp3);
          } else {
            const tmp7 = new _mod1314("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod1293("Assertion failed: `length` must be an integer Number >= 0");
};