// === Module 16495: ? ===

// Module 16495
import _mod16434 from "module_16434" /* 16434 */;
import _mod16435 from "module_16435" /* 16435 */;
import _mod16437 from "module_16437" /* 16437 */;
import _mod16438 from "module_16438" /* 16438 */;
import _mod16455 from "module_16455" /* 16455 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16484 from "module_16484" /* 16484 */;
import _mod16496 from "module_16496" /* 16496 */;

let closure_4 = _mod16438([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16455(arg0);
    const f = _mod16484.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16437(arguments[num]);
      if (f) {
        let tmp8 = _mod16496(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16496(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16434;
        if (tmp12) {
          tmp12 = !_mod16464(tmp2, tmp5, tmp9);
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