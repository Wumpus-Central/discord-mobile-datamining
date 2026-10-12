// === Module 14615: ? ===

// Module 14615
import _mod14554 from "module_14554" /* 14554 */;
import _mod14555 from "module_14555" /* 14555 */;
import _mod14557 from "module_14557" /* 14557 */;
import _mod14558 from "module_14558" /* 14558 */;
import _mod14575 from "module_14575" /* 14575 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14604 from "module_14604" /* 14604 */;
import _mod14616 from "module_14616" /* 14616 */;

let closure_4 = _mod14558([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14575(arg0);
    const f = _mod14604.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14557(arguments[num]);
      if (f) {
        let tmp8 = _mod14616(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14616(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14554;
        if (tmp12) {
          tmp12 = !_mod14584(tmp2, tmp5, tmp9);
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