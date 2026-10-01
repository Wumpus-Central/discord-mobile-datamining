// === Module 14056: ? ===

// Module 14056
import _mod13995 from "module_13995" /* 13995 */;
import _mod13996 from "module_13996" /* 13996 */;
import _mod13998 from "module_13998" /* 13998 */;
import _mod13999 from "module_13999" /* 13999 */;
import _mod14016 from "module_14016" /* 14016 */;
import _mod14025 from "module_14025" /* 14025 */;
import _mod14045 from "module_14045" /* 14045 */;
import _mod14057 from "module_14057" /* 14057 */;

let closure_4 = _mod13999([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14016(arg0);
    const f = _mod14045.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13998(arguments[num]);
      if (f) {
        let tmp8 = _mod14057(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14057(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13995;
        if (tmp12) {
          tmp12 = !_mod14025(tmp2, tmp5, tmp9);
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