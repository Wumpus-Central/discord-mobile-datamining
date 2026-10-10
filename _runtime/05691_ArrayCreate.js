// === Module 5691: ArrayCreate ===

// Module 5691 (ArrayCreate)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod1325 from "module_1325" /* 1325 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod5688 from "module_5688" /* 5688 */;
import _mod5692 from "module_5692" /* 5692 */;
import _mod5693 from "module_5693" /* 5693 */;

let closure_2 = _mod1305("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5688(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5692) {
        const tmp12 = new _mod1325("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5693) {
            _mod5693(items, tmp3);
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