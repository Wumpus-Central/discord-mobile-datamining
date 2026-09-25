// === Module 13897: ? ===

// Module 13897
import _mod13836 from "module_13836" /* 13836 */;
import _mod13837 from "module_13837" /* 13837 */;
import _mod13839 from "module_13839" /* 13839 */;
import _mod13840 from "module_13840" /* 13840 */;
import _mod13857 from "module_13857" /* 13857 */;
import _mod13866 from "module_13866" /* 13866 */;
import _mod13886 from "module_13886" /* 13886 */;
import _mod13898 from "module_13898" /* 13898 */;

let closure_4 = _mod13840([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13857(arg0);
    const f = _mod13886.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13839(arguments[num]);
      if (f) {
        let tmp8 = _mod13898(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod13898(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13836;
        if (tmp12) {
          tmp12 = !_mod13866(tmp2, tmp5, tmp9);
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