// === Module 15645: ? ===

// Module 15645
import _mod15584 from "module_15584" /* 15584 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15587 from "module_15587" /* 15587 */;
import _mod15588 from "module_15588" /* 15588 */;
import _mod15605 from "module_15605" /* 15605 */;
import _mod15614 from "module_15614" /* 15614 */;
import _mod15634 from "module_15634" /* 15634 */;
import _mod15646 from "module_15646" /* 15646 */;

let closure_4 = _mod15588([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15605(arg0);
    const f = _mod15634.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15587(arguments[num]);
      if (f) {
        let tmp8 = _mod15646(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15646(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15584;
        if (tmp12) {
          tmp12 = !_mod15614(tmp2, tmp5, tmp9);
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