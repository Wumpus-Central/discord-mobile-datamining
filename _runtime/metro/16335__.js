// === Module 16335: ? ===

// Module 16335
import _mod16274 from "module_16274" /* 16274 */;
import _mod16275 from "module_16275" /* 16275 */;
import _mod16277 from "module_16277" /* 16277 */;
import _mod16278 from "module_16278" /* 16278 */;
import _mod16295 from "module_16295" /* 16295 */;
import _mod16304 from "module_16304" /* 16304 */;
import _mod16324 from "module_16324" /* 16324 */;
import _mod16336 from "module_16336" /* 16336 */;

let closure_4 = _mod16278([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16295(arg0);
    const f = _mod16324.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16277(arguments[num]);
      if (f) {
        let tmp8 = _mod16336(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16336(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16274;
        if (tmp12) {
          tmp12 = !_mod16304(tmp2, tmp5, tmp9);
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