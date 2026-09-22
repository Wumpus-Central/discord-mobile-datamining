// === Module 5045: ArrayCreate ===

// Module 5045 (ArrayCreate)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod1301 from "module_1301" /* 1301 */;
import _mod1303 from "module_1303" /* 1303 */;
import _mod5042 from "module_5042" /* 5042 */;
import _mod5046 from "module_5046" /* 5046 */;
import _mod5047 from "module_5047" /* 5047 */;

let closure_2 = _mod1281("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5042(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5046) {
        const tmp12 = new _mod1301("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5047) {
            _mod5047(items, tmp3);
          } else {
            const tmp7 = new _mod1303("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod1282("Assertion failed: `length` must be an integer Number >= 0");
};