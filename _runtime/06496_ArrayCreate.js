// === Module 6496: ArrayCreate ===

// Module 6496 (ArrayCreate)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import _mod1313 from "module_1313" /* 1313 */;
import _mod1315 from "module_1315" /* 1315 */;
import _mod6493 from "module_6493" /* 6493 */;
import _mod6497 from "module_6497" /* 6497 */;
import _mod6498 from "module_6498" /* 6498 */;

let closure_2 = _mod1293("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod6493(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod6497) {
        const tmp12 = new _mod1313("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod6498) {
            _mod6498(items, tmp3);
          } else {
            const tmp7 = new _mod1315("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod1294("Assertion failed: `length` must be an integer Number >= 0");
};