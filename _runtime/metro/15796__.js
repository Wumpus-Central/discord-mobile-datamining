// === Module 15796: ? ===

// Module 15796
import _mod15735 from "module_15735" /* 15735 */;
import _mod15736 from "module_15736" /* 15736 */;
import _mod15738 from "module_15738" /* 15738 */;
import _mod15739 from "module_15739" /* 15739 */;
import _mod15756 from "module_15756" /* 15756 */;
import _mod15765 from "module_15765" /* 15765 */;
import _mod15785 from "module_15785" /* 15785 */;
import _mod15797 from "module_15797" /* 15797 */;

let closure_4 = _mod15739([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15756(arg0);
    const f = _mod15785.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15738(arguments[num]);
      if (f) {
        let tmp8 = _mod15797(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15797(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15735;
        if (tmp12) {
          tmp12 = !_mod15765(tmp2, tmp5, tmp9);
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