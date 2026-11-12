// _runtime/metro/16688__.js
import _mod16627 from "16627__.js";
import _mod16628 from "16628__.js";
import _mod16630 from "16630__.js";
import _mod16631 from "16631__.js";
import _mod16648 from "16648__.js";
import _mod16657 from "16657__.js";
import _mod16677 from "16677__.js";
import _mod16689 from "16689__.js";

let closure_4 = _mod16631([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16648(arg0);
    const f = _mod16677.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16630(arguments[num]);
      if (f) {
        let tmp8 = _mod16689(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16689(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16627;
        if (tmp12) {
          tmp12 = !_mod16657(tmp2, tmp5, tmp9);
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
