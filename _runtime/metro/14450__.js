// === Module 14450: ? ===

// Module 14450
import _mod14389 from "module_14389" /* 14389 */;
import _mod14390 from "module_14390" /* 14390 */;
import _mod14392 from "module_14392" /* 14392 */;
import _mod14393 from "module_14393" /* 14393 */;
import _mod14410 from "module_14410" /* 14410 */;
import _mod14419 from "module_14419" /* 14419 */;
import _mod14439 from "module_14439" /* 14439 */;
import _mod14451 from "module_14451" /* 14451 */;

let closure_4 = _mod14393([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14410(arg0);
    const f = _mod14439.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14392(arguments[num]);
      if (f) {
        let tmp8 = _mod14451(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14451(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14389;
        if (tmp12) {
          tmp12 = !_mod14419(tmp2, tmp5, tmp9);
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