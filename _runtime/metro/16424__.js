// _runtime/metro/16424__.js
import _mod16363 from "16363__.js";
import _mod16364 from "16364__.js";
import _mod16366 from "16366__.js";
import _mod16367 from "16367__.js";
import _mod16384 from "16384__.js";
import _mod16393 from "16393__.js";
import _mod16413 from "16413__.js";
import _mod16425 from "16425__.js";

let closure_4 = _mod16367([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16384(arg0);
    const f = _mod16413.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16366(arguments[num]);
      if (f) {
        let tmp8 = _mod16425(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16425(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16363;
        if (tmp12) {
          tmp12 = !_mod16393(tmp2, tmp5, tmp9);
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
