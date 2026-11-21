// === Module 15602: ? ===

// Module 15602
import _mod15541 from "module_15541" /* 15541 */;
import _mod15542 from "module_15542" /* 15542 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15545 from "module_15545" /* 15545 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15591 from "module_15591" /* 15591 */;
import _mod15603 from "module_15603" /* 15603 */;

let closure_4 = _mod15545([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15562(arg0);
    const f = _mod15591.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15544(arguments[num]);
      if (f) {
        let tmp8 = _mod15603(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15603(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15541;
        if (tmp12) {
          tmp12 = !_mod15571(tmp2, tmp5, tmp9);
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