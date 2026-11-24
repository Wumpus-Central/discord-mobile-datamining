// === Module 15623: ? ===

// Module 15623
import _mod15562 from "module_15562" /* 15562 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15583 from "module_15583" /* 15583 */;
import _mod15592 from "module_15592" /* 15592 */;
import _mod15612 from "module_15612" /* 15612 */;
import _mod15624 from "module_15624" /* 15624 */;

let closure_4 = _mod15566([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15583(arg0);
    const f = _mod15612.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15565(arguments[num]);
      if (f) {
        let tmp8 = _mod15624(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15624(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15562;
        if (tmp12) {
          tmp12 = !_mod15592(tmp2, tmp5, tmp9);
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