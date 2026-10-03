// === Module 14123: ? ===

// Module 14123
import _mod14062 from "module_14062" /* 14062 */;
import _mod14063 from "module_14063" /* 14063 */;
import _mod14065 from "module_14065" /* 14065 */;
import _mod14066 from "module_14066" /* 14066 */;
import _mod14083 from "module_14083" /* 14083 */;
import _mod14092 from "module_14092" /* 14092 */;
import _mod14112 from "module_14112" /* 14112 */;
import _mod14124 from "module_14124" /* 14124 */;

let closure_4 = _mod14066([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14083(arg0);
    const f = _mod14112.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14065(arguments[num]);
      if (f) {
        let tmp8 = _mod14124(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14124(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14062;
        if (tmp12) {
          tmp12 = !_mod14092(tmp2, tmp5, tmp9);
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