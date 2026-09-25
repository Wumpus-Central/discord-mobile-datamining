// _runtime/metro/13897__.js
import _mod13836 from "13836__.js";
import _mod13837 from "13837__.js";
import _mod13839 from "13839__.js";
import _mod13840 from "13840__.js";
import _mod13857 from "13857__.js";
import _mod13866 from "13866__.js";
import _mod13886 from "13886__.js";
import _mod13898 from "13898__.js";

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
