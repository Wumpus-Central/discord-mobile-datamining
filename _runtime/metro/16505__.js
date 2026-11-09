// === Module 16505: ? ===

// Module 16505
import _mod16444 from "module_16444" /* 16444 */;
import _mod16445 from "module_16445" /* 16445 */;
import _mod16447 from "module_16447" /* 16447 */;
import _mod16448 from "module_16448" /* 16448 */;
import _mod16465 from "module_16465" /* 16465 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16506 from "module_16506" /* 16506 */;

let closure_4 = _mod16448([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16465(arg0);
    const f = _mod16494.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16447(arguments[num]);
      if (f) {
        let tmp8 = _mod16506(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16506(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16444;
        if (tmp12) {
          tmp12 = !_mod16474(tmp2, tmp5, tmp9);
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