// === Module 15315: ? ===

// Module 15315
import _mod15254 from "module_15254" /* 15254 */;
import _mod15255 from "module_15255" /* 15255 */;
import _mod15257 from "module_15257" /* 15257 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15275 from "module_15275" /* 15275 */;
import _mod15284 from "module_15284" /* 15284 */;
import _mod15304 from "module_15304" /* 15304 */;
import _mod15316 from "module_15316" /* 15316 */;

let closure_4 = _mod15258([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15275(arg0);
    const f = _mod15304.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15257(arguments[num]);
      if (f) {
        let tmp8 = _mod15316(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15316(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15254;
        if (tmp12) {
          tmp12 = !_mod15284(tmp2, tmp5, tmp9);
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