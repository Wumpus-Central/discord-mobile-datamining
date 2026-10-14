// === Module 14974: ? ===

// Module 14974
import _mod14913 from "module_14913" /* 14913 */;
import _mod14914 from "module_14914" /* 14914 */;
import _mod14916 from "module_14916" /* 14916 */;
import _mod14917 from "module_14917" /* 14917 */;
import _mod14934 from "module_14934" /* 14934 */;
import _mod14943 from "module_14943" /* 14943 */;
import _mod14963 from "module_14963" /* 14963 */;
import _mod14975 from "module_14975" /* 14975 */;

let closure_4 = _mod14917([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14934(arg0);
    const f = _mod14963.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14916(arguments[num]);
      if (f) {
        let tmp8 = _mod14975(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14975(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14913;
        if (tmp12) {
          tmp12 = !_mod14943(tmp2, tmp5, tmp9);
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