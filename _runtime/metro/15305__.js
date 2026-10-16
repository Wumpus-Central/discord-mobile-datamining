// === Module 15305: ? ===

// Module 15305
import _mod15244 from "module_15244" /* 15244 */;
import _mod15245 from "module_15245" /* 15245 */;
import _mod15247 from "module_15247" /* 15247 */;
import _mod15248 from "module_15248" /* 15248 */;
import _mod15265 from "module_15265" /* 15265 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15294 from "module_15294" /* 15294 */;
import _mod15306 from "module_15306" /* 15306 */;

let closure_4 = _mod15248([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15265(arg0);
    const f = _mod15294.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15247(arguments[num]);
      if (f) {
        let tmp8 = _mod15306(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15306(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15244;
        if (tmp12) {
          tmp12 = !_mod15274(tmp2, tmp5, tmp9);
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