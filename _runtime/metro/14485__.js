// === Module 14485: ? ===

// Module 14485
import _mod14424 from "module_14424" /* 14424 */;
import _mod14425 from "module_14425" /* 14425 */;
import _mod14427 from "module_14427" /* 14427 */;
import _mod14428 from "module_14428" /* 14428 */;
import _mod14445 from "module_14445" /* 14445 */;
import _mod14454 from "module_14454" /* 14454 */;
import _mod14474 from "module_14474" /* 14474 */;
import _mod14486 from "module_14486" /* 14486 */;

let closure_4 = _mod14428([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14445(arg0);
    const f = _mod14474.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14427(arguments[num]);
      if (f) {
        let tmp8 = _mod14486(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14486(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14424;
        if (tmp12) {
          tmp12 = !_mod14454(tmp2, tmp5, tmp9);
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