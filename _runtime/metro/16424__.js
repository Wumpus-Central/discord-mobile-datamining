// === Module 16424: ? ===

// Module 16424
import _mod16363 from "module_16363" /* 16363 */;
import _mod16364 from "module_16364" /* 16364 */;
import _mod16366 from "module_16366" /* 16366 */;
import _mod16367 from "module_16367" /* 16367 */;
import _mod16384 from "module_16384" /* 16384 */;
import _mod16393 from "module_16393" /* 16393 */;
import _mod16413 from "module_16413" /* 16413 */;
import _mod16425 from "module_16425" /* 16425 */;

let closure_4 = _mod16367([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16384(arg0);
    const f = _mod16413.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16366(arguments[num]);
      if (f) {
        let tmp8 = _mod16425(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16425(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16363;
        if (tmp12) {
          tmp12 = !_mod16393(tmp2, tmp5, tmp9);
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