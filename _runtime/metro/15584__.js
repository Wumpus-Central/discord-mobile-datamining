// === Module 15584: ? ===

// Module 15584
import _mod15523 from "module_15523" /* 15523 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15526 from "module_15526" /* 15526 */;
import _mod15527 from "module_15527" /* 15527 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15585 from "module_15585" /* 15585 */;

let closure_4 = _mod15527([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15544(arg0);
    const f = _mod15573.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15526(arguments[num]);
      if (f) {
        let tmp8 = _mod15585(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15585(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15523;
        if (tmp12) {
          tmp12 = !_mod15553(tmp2, tmp5, tmp9);
        }
        if (!tmp12) {
          tmp[tmp9] = tmp5[tmp9];
        }
      }
    }
    return tmp;
  };
}

export default assign;