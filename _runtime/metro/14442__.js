// === Module 14442: ? ===

// Module 14442
import _mod14381 from "module_14381" /* 14381 */;
import _mod14382 from "module_14382" /* 14382 */;
import _mod14384 from "module_14384" /* 14384 */;
import _mod14385 from "module_14385" /* 14385 */;
import _mod14402 from "module_14402" /* 14402 */;
import _mod14411 from "module_14411" /* 14411 */;
import _mod14431 from "module_14431" /* 14431 */;
import _mod14443 from "module_14443" /* 14443 */;

let closure_4 = _mod14385([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14402(arg0);
    const f = _mod14431.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14384(arguments[num]);
      if (f) {
        let tmp8 = _mod14443(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14443(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14381;
        if (tmp12) {
          tmp12 = !_mod14411(tmp2, tmp5, tmp9);
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