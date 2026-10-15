// === Module 15270: ? ===

// Module 15270
import _mod15209 from "module_15209" /* 15209 */;
import _mod15210 from "module_15210" /* 15210 */;
import _mod15212 from "module_15212" /* 15212 */;
import _mod15213 from "module_15213" /* 15213 */;
import _mod15230 from "module_15230" /* 15230 */;
import _mod15239 from "module_15239" /* 15239 */;
import _mod15259 from "module_15259" /* 15259 */;
import _mod15271 from "module_15271" /* 15271 */;

let closure_4 = _mod15213([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15230(arg0);
    const f = _mod15259.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15212(arguments[num]);
      if (f) {
        let tmp8 = _mod15271(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15271(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15209;
        if (tmp12) {
          tmp12 = !_mod15239(tmp2, tmp5, tmp9);
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