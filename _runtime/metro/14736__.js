// === Module 14736: ? ===

// Module 14736
import _mod14675 from "module_14675" /* 14675 */;
import _mod14676 from "module_14676" /* 14676 */;
import _mod14678 from "module_14678" /* 14678 */;
import _mod14679 from "module_14679" /* 14679 */;
import _mod14696 from "module_14696" /* 14696 */;
import _mod14705 from "module_14705" /* 14705 */;
import _mod14725 from "module_14725" /* 14725 */;
import _mod14737 from "module_14737" /* 14737 */;

let closure_4 = _mod14679([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14696(arg0);
    const f = _mod14725.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14678(arguments[num]);
      if (f) {
        let tmp8 = _mod14737(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14737(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14675;
        if (tmp12) {
          tmp12 = !_mod14705(tmp2, tmp5, tmp9);
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