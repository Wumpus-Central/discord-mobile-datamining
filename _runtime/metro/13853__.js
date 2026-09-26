// === Module 13853: ? ===

// Module 13853
import _mod13792 from "module_13792" /* 13792 */;
import _mod13793 from "module_13793" /* 13793 */;
import _mod13795 from "module_13795" /* 13795 */;
import _mod13796 from "module_13796" /* 13796 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13822 from "module_13822" /* 13822 */;
import _mod13842 from "module_13842" /* 13842 */;
import _mod13854 from "module_13854" /* 13854 */;

let closure_4 = _mod13796([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13813(arg0);
    const f = _mod13842.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13795(arguments[num]);
      if (f) {
        let tmp8 = _mod13854(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod13854(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13792;
        if (tmp12) {
          tmp12 = !_mod13822(tmp2, tmp5, tmp9);
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