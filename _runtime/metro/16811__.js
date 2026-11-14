// _runtime/metro/16811__.js
import _mod16750 from "16750__.js";
import _mod16751 from "16751__.js";
import _mod16753 from "16753__.js";
import _mod16754 from "16754__.js";
import _mod16771 from "16771__.js";
import _mod16780 from "16780__.js";
import _mod16800 from "16800__.js";
import _mod16812 from "16812__.js";

let closure_4 = _mod16754([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16771(arg0);
    const f = _mod16800.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16753(arguments[num]);
      if (f) {
        let tmp8 = _mod16812(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16812(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16750;
        if (tmp12) {
          tmp12 = !_mod16780(tmp2, tmp5, tmp9);
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
