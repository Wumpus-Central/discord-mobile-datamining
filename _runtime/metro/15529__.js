// === Module 15529: ? ===

// Module 15529
import _mod15468 from "module_15468" /* 15468 */;
import _mod15469 from "module_15469" /* 15469 */;
import _mod15471 from "module_15471" /* 15471 */;
import _mod15472 from "module_15472" /* 15472 */;
import _mod15489 from "module_15489" /* 15489 */;
import _mod15498 from "module_15498" /* 15498 */;
import _mod15518 from "module_15518" /* 15518 */;
import _mod15530 from "module_15530" /* 15530 */;

let closure_4 = _mod15472([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15489(arg0);
    const f = _mod15518.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15471(arguments[num]);
      if (f) {
        let tmp8 = _mod15530(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15530(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15468;
        if (tmp12) {
          tmp12 = !_mod15498(tmp2, tmp5, tmp9);
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