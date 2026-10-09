// === Module 5688: ArrayCreate ===

// Module 5688 (ArrayCreate)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod1325 from "module_1325" /* 1325 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod5685 from "module_5685" /* 5685 */;
import _mod5689 from "module_5689" /* 5689 */;
import _mod5690 from "module_5690" /* 5690 */;

let closure_2 = _mod1305("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5685(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5689) {
        const tmp12 = new _mod1325("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5690) {
            _mod5690(items, tmp3);
          } else {
            const tmp7 = new _mod1327("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod1306("Assertion failed: `length` must be an integer Number >= 0");
};