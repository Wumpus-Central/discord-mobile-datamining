// _runtime/metro/16693__.js
import _mod16632 from "16632__.js";
import _mod16633 from "16633__.js";
import _mod16635 from "16635__.js";
import _mod16636 from "16636__.js";
import _mod16653 from "16653__.js";
import _mod16662 from "16662__.js";
import _mod16682 from "16682__.js";
import _mod16694 from "16694__.js";

let closure_4 = _mod16636([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16653(arg0);
    const f = _mod16682.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16635(arguments[num]);
      if (f) {
        let tmp8 = _mod16694(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16694(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16632;
        if (tmp12) {
          tmp12 = !_mod16662(tmp2, tmp5, tmp9);
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
