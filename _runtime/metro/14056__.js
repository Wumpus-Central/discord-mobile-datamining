// _runtime/metro/14056__.js
import _mod13995 from "13995__.js";
import _mod13996 from "13996__.js";
import _mod13998 from "13998__.js";
import _mod13999 from "13999__.js";
import _mod14016 from "14016__.js";
import _mod14025 from "14025__.js";
import _mod14045 from "14045__.js";
import _mod14057 from "14057__.js";

let closure_4 = _mod13999([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14016(arg0);
    const f = _mod14045.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13998(arguments[num]);
      if (f) {
        let tmp8 = _mod14057(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14057(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13995;
        if (tmp12) {
          tmp12 = !_mod14025(tmp2, tmp5, tmp9);
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
