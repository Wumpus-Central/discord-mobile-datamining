// === Module 16192: ? ===

// Module 16192
import _mod16131 from "module_16131" /* 16131 */;
import _mod16132 from "module_16132" /* 16132 */;
import _mod16134 from "module_16134" /* 16134 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16152 from "module_16152" /* 16152 */;
import _mod16161 from "module_16161" /* 16161 */;
import _mod16181 from "module_16181" /* 16181 */;
import _mod16193 from "module_16193" /* 16193 */;

let closure_4 = _mod16135([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16152(arg0);
    const f = _mod16181.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16134(arguments[num]);
      if (f) {
        let tmp8 = _mod16193(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16193(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16131;
        if (tmp12) {
          tmp12 = !_mod16161(tmp2, tmp5, tmp9);
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