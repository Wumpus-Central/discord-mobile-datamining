// === Module 15384: ? ===

// Module 15384
import _mod15323 from "module_15323" /* 15323 */;
import _mod15324 from "module_15324" /* 15324 */;
import _mod15326 from "module_15326" /* 15326 */;
import _mod15327 from "module_15327" /* 15327 */;
import _mod15344 from "module_15344" /* 15344 */;
import _mod15353 from "module_15353" /* 15353 */;
import _mod15373 from "module_15373" /* 15373 */;
import _mod15385 from "module_15385" /* 15385 */;

let closure_4 = _mod15327([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15344(arg0);
    const f = _mod15373.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15326(arguments[num]);
      if (f) {
        let tmp8 = _mod15385(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15385(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15323;
        if (tmp12) {
          tmp12 = !_mod15353(tmp2, tmp5, tmp9);
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