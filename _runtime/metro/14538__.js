// === Module 14538: ? ===

// Module 14538
import _mod14477 from "module_14477" /* 14477 */;
import _mod14478 from "module_14478" /* 14478 */;
import _mod14480 from "module_14480" /* 14480 */;
import _mod14481 from "module_14481" /* 14481 */;
import _mod14498 from "module_14498" /* 14498 */;
import _mod14507 from "module_14507" /* 14507 */;
import _mod14527 from "module_14527" /* 14527 */;
import _mod14539 from "module_14539" /* 14539 */;

let closure_4 = _mod14481([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14498(arg0);
    const f = _mod14527.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14480(arguments[num]);
      if (f) {
        let tmp8 = _mod14539(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14539(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14477;
        if (tmp12) {
          tmp12 = !_mod14507(tmp2, tmp5, tmp9);
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