// === Module 14125: ? ===

// Module 14125
import _mod14064 from "module_14064" /* 14064 */;
import _mod14065 from "module_14065" /* 14065 */;
import _mod14067 from "module_14067" /* 14067 */;
import _mod14068 from "module_14068" /* 14068 */;
import _mod14085 from "module_14085" /* 14085 */;
import _mod14094 from "module_14094" /* 14094 */;
import _mod14114 from "module_14114" /* 14114 */;
import _mod14126 from "module_14126" /* 14126 */;

let closure_4 = _mod14068([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14085(arg0);
    const f = _mod14114.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14067(arguments[num]);
      if (f) {
        let tmp8 = _mod14126(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14126(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14064;
        if (tmp12) {
          tmp12 = !_mod14094(tmp2, tmp5, tmp9);
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