// === Module 16693: ? ===

// Module 16693
import _mod16632 from "module_16632" /* 16632 */;
import _mod16633 from "module_16633" /* 16633 */;
import _mod16635 from "module_16635" /* 16635 */;
import _mod16636 from "module_16636" /* 16636 */;
import _mod16653 from "module_16653" /* 16653 */;
import _mod16662 from "module_16662" /* 16662 */;
import _mod16682 from "module_16682" /* 16682 */;
import _mod16694 from "module_16694" /* 16694 */;

let closure_4 = _mod16636([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16653(arg0);
    const f = _mod16682.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16635(arguments[num]);
      if (f) {
        let tmp8 = _mod16694(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16694(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16632;
        if (tmp12) {
          tmp12 = !_mod16662(tmp2, tmp5, tmp9);
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