// === Module 16147: ? ===

// Module 16147
import _mod16086 from "module_16086" /* 16086 */;
import _mod16087 from "module_16087" /* 16087 */;
import _mod16089 from "module_16089" /* 16089 */;
import _mod16090 from "module_16090" /* 16090 */;
import _mod16107 from "module_16107" /* 16107 */;
import _mod16116 from "module_16116" /* 16116 */;
import _mod16136 from "module_16136" /* 16136 */;
import _mod16148 from "module_16148" /* 16148 */;

let closure_4 = _mod16090([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16107(arg0);
    const f = _mod16136.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16089(arguments[num]);
      if (f) {
        let tmp8 = _mod16148(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16148(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16086;
        if (tmp12) {
          tmp12 = !_mod16116(tmp2, tmp5, tmp9);
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