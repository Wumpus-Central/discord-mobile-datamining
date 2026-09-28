// === Module 13852: ? ===

// Module 13852
import _mod13791 from "module_13791" /* 13791 */;
import _mod13792 from "module_13792" /* 13792 */;
import _mod13794 from "module_13794" /* 13794 */;
import _mod13795 from "module_13795" /* 13795 */;
import _mod13812 from "module_13812" /* 13812 */;
import _mod13821 from "module_13821" /* 13821 */;
import _mod13841 from "module_13841" /* 13841 */;
import _mod13853 from "module_13853" /* 13853 */;

let closure_4 = _mod13795([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13812(arg0);
    const f = _mod13841.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13794(arguments[num]);
      if (f) {
        let tmp8 = _mod13853(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod13853(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13791;
        if (tmp12) {
          tmp12 = !_mod13821(tmp2, tmp5, tmp9);
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