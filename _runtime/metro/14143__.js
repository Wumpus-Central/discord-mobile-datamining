// === Module 14143: ? ===

// Module 14143
import _mod14082 from "module_14082" /* 14082 */;
import _mod14083 from "module_14083" /* 14083 */;
import _mod14085 from "module_14085" /* 14085 */;
import _mod14086 from "module_14086" /* 14086 */;
import _mod14103 from "module_14103" /* 14103 */;
import _mod14112 from "module_14112" /* 14112 */;
import _mod14132 from "module_14132" /* 14132 */;
import _mod14144 from "module_14144" /* 14144 */;

let closure_4 = _mod14086([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14103(arg0);
    const length = arguments.length;
    const f = _mod14132.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp5 = _mod14085(arguments[num]);
      if (f) {
        let tmp8 = _mod14144(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14144(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14082;
        if (tmp12) {
          tmp12 = !_mod14112(tmp2, tmp5, tmp9);
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