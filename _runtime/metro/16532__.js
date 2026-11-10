// === Module 16532: ? ===

// Module 16532
import _mod16471 from "module_16471" /* 16471 */;
import _mod16472 from "module_16472" /* 16472 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16475 from "module_16475" /* 16475 */;
import _mod16492 from "module_16492" /* 16492 */;
import _mod16501 from "module_16501" /* 16501 */;
import _mod16521 from "module_16521" /* 16521 */;
import _mod16533 from "module_16533" /* 16533 */;

let closure_4 = _mod16475([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16492(arg0);
    const f = _mod16521.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16474(arguments[num]);
      if (f) {
        let tmp8 = _mod16533(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16533(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16471;
        if (tmp12) {
          tmp12 = !_mod16501(tmp2, tmp5, tmp9);
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