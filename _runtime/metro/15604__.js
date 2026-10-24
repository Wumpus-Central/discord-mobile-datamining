// === Module 15604: ? ===

// Module 15604
import _mod15543 from "module_15543" /* 15543 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15546 from "module_15546" /* 15546 */;
import _mod15547 from "module_15547" /* 15547 */;
import _mod15564 from "module_15564" /* 15564 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15593 from "module_15593" /* 15593 */;
import _mod15605 from "module_15605" /* 15605 */;

let closure_4 = _mod15547([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15564(arg0);
    const f = _mod15593.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15546(arguments[num]);
      if (f) {
        let tmp8 = _mod15605(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15605(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15543;
        if (tmp12) {
          tmp12 = !_mod15573(tmp2, tmp5, tmp9);
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