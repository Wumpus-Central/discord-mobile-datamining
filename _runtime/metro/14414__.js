// === Module 14414: ? ===

// Module 14414
import _mod14353 from "module_14353" /* 14353 */;
import _mod14354 from "module_14354" /* 14354 */;
import _mod14356 from "module_14356" /* 14356 */;
import _mod14357 from "module_14357" /* 14357 */;
import _mod14374 from "module_14374" /* 14374 */;
import _mod14383 from "module_14383" /* 14383 */;
import _mod14403 from "module_14403" /* 14403 */;
import _mod14415 from "module_14415" /* 14415 */;

let closure_4 = _mod14357([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14374(arg0);
    const f = _mod14403.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14356(arguments[num]);
      if (f) {
        let tmp8 = _mod14415(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14415(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14353;
        if (tmp12) {
          tmp12 = !_mod14383(tmp2, tmp5, tmp9);
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