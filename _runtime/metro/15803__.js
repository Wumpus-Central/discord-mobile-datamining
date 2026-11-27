// _runtime/metro/15803__.js
import _mod15742 from "15742__.js";
import _mod15743 from "15743__.js";
import _mod15745 from "15745__.js";
import _mod15746 from "15746__.js";
import _mod15763 from "15763__.js";
import _mod15772 from "15772__.js";
import _mod15792 from "15792__.js";
import _mod15804 from "15804__.js";

let closure_4 = _mod15746([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15763(arg0);
    const f = _mod15792.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15745(arguments[num]);
      if (f) {
        let tmp8 = _mod15804(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15804(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15742;
        if (tmp12) {
          tmp12 = !_mod15772(tmp2, tmp5, tmp9);
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
