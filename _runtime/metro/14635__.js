// === Module 14635: ? ===

// Module 14635
import _mod14574 from "module_14574" /* 14574 */;
import _mod14575 from "module_14575" /* 14575 */;
import _mod14577 from "module_14577" /* 14577 */;
import _mod14578 from "module_14578" /* 14578 */;
import _mod14595 from "module_14595" /* 14595 */;
import _mod14604 from "module_14604" /* 14604 */;
import _mod14624 from "module_14624" /* 14624 */;
import _mod14636 from "module_14636" /* 14636 */;

let closure_4 = _mod14578([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14595(arg0);
    const f = _mod14624.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14577(arguments[num]);
      if (f) {
        let tmp8 = _mod14636(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14636(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14574;
        if (tmp12) {
          tmp12 = !_mod14604(tmp2, tmp5, tmp9);
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