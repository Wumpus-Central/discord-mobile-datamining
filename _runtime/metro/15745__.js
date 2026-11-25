// === Module 15745: ? ===

// Module 15745
import _mod15684 from "module_15684" /* 15684 */;
import _mod15685 from "module_15685" /* 15685 */;
import _mod15687 from "module_15687" /* 15687 */;
import _mod15688 from "module_15688" /* 15688 */;
import _mod15705 from "module_15705" /* 15705 */;
import _mod15714 from "module_15714" /* 15714 */;
import _mod15734 from "module_15734" /* 15734 */;
import _mod15746 from "module_15746" /* 15746 */;

let closure_4 = _mod15688([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15705(arg0);
    const f = _mod15734.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15687(arguments[num]);
      if (f) {
        let tmp8 = _mod15746(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15746(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15684;
        if (tmp12) {
          tmp12 = !_mod15714(tmp2, tmp5, tmp9);
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