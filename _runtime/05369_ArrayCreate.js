// === Module 5369: ArrayCreate ===

// Module 5369 (ArrayCreate)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import _mod1312 from "module_1312" /* 1312 */;
import _mod1314 from "module_1314" /* 1314 */;
import _mod5366 from "module_5366" /* 5366 */;
import _mod5370 from "module_5370" /* 5370 */;
import _mod5371 from "module_5371" /* 5371 */;

let closure_2 = _mod1292("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5366(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5370) {
        const tmp12 = new _mod1312("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5371) {
            _mod5371(items, tmp3);
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