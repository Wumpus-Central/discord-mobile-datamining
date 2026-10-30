// _runtime/metro/16147__.js
import _mod16086 from "16086__.js";
import _mod16087 from "16087__.js";
import _mod16089 from "16089__.js";
import _mod16090 from "16090__.js";
import _mod16107 from "16107__.js";
import _mod16116 from "16116__.js";
import _mod16136 from "16136__.js";
import _mod16148 from "16148__.js";

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
