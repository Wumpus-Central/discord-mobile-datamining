// === Module 14438: ? ===

// Module 14438
import _mod14377 from "module_14377" /* 14377 */;
import _mod14378 from "module_14378" /* 14378 */;
import _mod14380 from "module_14380" /* 14380 */;
import _mod14381 from "module_14381" /* 14381 */;
import _mod14398 from "module_14398" /* 14398 */;
import _mod14407 from "module_14407" /* 14407 */;
import _mod14427 from "module_14427" /* 14427 */;
import _mod14439 from "module_14439" /* 14439 */;

let closure_4 = _mod14381([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14398(arg0);
    const f = _mod14427.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14380(arguments[num]);
      if (f) {
        let tmp8 = _mod14439(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14439(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14377;
        if (tmp12) {
          tmp12 = !_mod14407(tmp2, tmp5, tmp9);
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