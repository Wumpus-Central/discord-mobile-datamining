// === Module 15871: ? ===

// Module 15871
import _mod15810 from "module_15810" /* 15810 */;
import _mod15811 from "module_15811" /* 15811 */;
import _mod15813 from "module_15813" /* 15813 */;
import _mod15814 from "module_15814" /* 15814 */;
import _mod15831 from "module_15831" /* 15831 */;
import _mod15840 from "module_15840" /* 15840 */;
import _mod15860 from "module_15860" /* 15860 */;
import _mod15872 from "module_15872" /* 15872 */;

let closure_4 = _mod15814([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15831(arg0);
    const f = _mod15860.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15813(arguments[num]);
      if (f) {
        let tmp8 = _mod15872(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15872(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15810;
        if (tmp12) {
          tmp12 = !_mod15840(tmp2, tmp5, tmp9);
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