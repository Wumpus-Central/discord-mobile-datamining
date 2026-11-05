// === Module 16450: ? ===

// Module 16450
import _mod16389 from "module_16389" /* 16389 */;
import _mod16390 from "module_16390" /* 16390 */;
import _mod16392 from "module_16392" /* 16392 */;
import _mod16393 from "module_16393" /* 16393 */;
import _mod16410 from "module_16410" /* 16410 */;
import _mod16419 from "module_16419" /* 16419 */;
import _mod16439 from "module_16439" /* 16439 */;
import _mod16451 from "module_16451" /* 16451 */;

let closure_4 = _mod16393([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16410(arg0);
    const f = _mod16439.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16392(arguments[num]);
      if (f) {
        let tmp8 = _mod16451(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16451(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16389;
        if (tmp12) {
          tmp12 = !_mod16419(tmp2, tmp5, tmp9);
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