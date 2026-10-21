// === Module 15506: ? ===

// Module 15506
import _mod15445 from "module_15445" /* 15445 */;
import _mod15446 from "module_15446" /* 15446 */;
import _mod15448 from "module_15448" /* 15448 */;
import _mod15449 from "module_15449" /* 15449 */;
import _mod15466 from "module_15466" /* 15466 */;
import _mod15475 from "module_15475" /* 15475 */;
import _mod15495 from "module_15495" /* 15495 */;
import _mod15507 from "module_15507" /* 15507 */;

let closure_4 = _mod15449([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15466(arg0);
    const f = _mod15495.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15448(arguments[num]);
      if (f) {
        let tmp8 = _mod15507(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15507(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15445;
        if (tmp12) {
          tmp12 = !_mod15475(tmp2, tmp5, tmp9);
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