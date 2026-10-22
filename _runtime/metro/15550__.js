// === Module 15550: ? ===

// Module 15550
import _mod15489 from "module_15489" /* 15489 */;
import _mod15490 from "module_15490" /* 15490 */;
import _mod15492 from "module_15492" /* 15492 */;
import _mod15493 from "module_15493" /* 15493 */;
import _mod15510 from "module_15510" /* 15510 */;
import _mod15519 from "module_15519" /* 15519 */;
import _mod15539 from "module_15539" /* 15539 */;
import _mod15551 from "module_15551" /* 15551 */;

let closure_4 = _mod15493([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15510(arg0);
    const f = _mod15539.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15492(arguments[num]);
      if (f) {
        let tmp8 = _mod15551(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15551(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15489;
        if (tmp12) {
          tmp12 = !_mod15519(tmp2, tmp5, tmp9);
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