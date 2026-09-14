// === Module 4925: ArrayCreate ===

// Module 4925 (ArrayCreate)
import _mod1280 from "module_1280" /* 1280 */;
import _mod1281 from "module_1281" /* 1281 */;
import _mod1300 from "module_1300" /* 1300 */;
import _mod1302 from "module_1302" /* 1302 */;
import _mod4922 from "module_4922" /* 4922 */;
import _mod4926 from "module_4926" /* 4926 */;
import _mod4927 from "module_4927" /* 4927 */;

let closure_2 = _mod1280("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod4922(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod4926) {
        const tmp12 = new _mod1300("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod4927) {
            _mod4927(items, tmp3);
          } else {
            const tmp7 = new _mod1302("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod1281("Assertion failed: `length` must be an integer Number >= 0");
};