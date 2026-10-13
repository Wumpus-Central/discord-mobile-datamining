// === Module 14936: ? ===

// Module 14936
import _mod14875 from "module_14875" /* 14875 */;
import _mod14876 from "module_14876" /* 14876 */;
import _mod14878 from "module_14878" /* 14878 */;
import _mod14879 from "module_14879" /* 14879 */;
import _mod14896 from "module_14896" /* 14896 */;
import _mod14905 from "module_14905" /* 14905 */;
import _mod14925 from "module_14925" /* 14925 */;
import _mod14937 from "module_14937" /* 14937 */;

let closure_4 = _mod14879([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14896(arg0);
    const f = _mod14925.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14878(arguments[num]);
      if (f) {
        let tmp8 = _mod14937(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14937(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14875;
        if (tmp12) {
          tmp12 = !_mod14905(tmp2, tmp5, tmp9);
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