// === Module 5909: ArrayCreate ===

// Module 5909 (ArrayCreate)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod1329 from "module_1329" /* 1329 */;
import _mod5906 from "module_5906" /* 5906 */;
import _mod5910 from "module_5910" /* 5910 */;
import _mod5911 from "module_5911" /* 5911 */;

let closure_2 = _mod1307("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5906(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5910) {
        const tmp12 = new _mod1327("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5911) {
            _mod5911(items, tmp3);
          } else {
            const tmp7 = new _mod1329("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod1308("Assertion failed: `length` must be an integer Number >= 0");
};