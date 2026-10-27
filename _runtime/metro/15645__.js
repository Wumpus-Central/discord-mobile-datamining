// _runtime/metro/15645__.js
import _mod15584 from "15584__.js";
import _mod15585 from "15585__.js";
import _mod15587 from "15587__.js";
import _mod15588 from "15588__.js";
import _mod15605 from "15605__.js";
import _mod15614 from "15614__.js";
import _mod15634 from "15634__.js";
import _mod15646 from "15646__.js";

let closure_4 = _mod15588([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15605(arg0);
    const f = _mod15634.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15587(arguments[num]);
      if (f) {
        let tmp8 = _mod15646(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15646(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15584;
        if (tmp12) {
          tmp12 = !_mod15614(tmp2, tmp5, tmp9);
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
