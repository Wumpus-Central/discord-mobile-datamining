// === Module 16188: ? ===

// Module 16188
import _mod16127 from "module_16127" /* 16127 */;
import _mod16128 from "module_16128" /* 16128 */;
import _mod16130 from "module_16130" /* 16130 */;
import _mod16131 from "module_16131" /* 16131 */;
import _mod16148 from "module_16148" /* 16148 */;
import _mod16157 from "module_16157" /* 16157 */;
import _mod16177 from "module_16177" /* 16177 */;
import _mod16189 from "module_16189" /* 16189 */;

let closure_4 = _mod16131([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16148(arg0);
    const f = _mod16177.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16130(arguments[num]);
      if (f) {
        let tmp8 = _mod16189(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16189(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16127;
        if (tmp12) {
          tmp12 = !_mod16157(tmp2, tmp5, tmp9);
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