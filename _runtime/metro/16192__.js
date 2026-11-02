// _runtime/metro/16192__.js
import _mod16131 from "16131__.js";
import _mod16132 from "16132__.js";
import _mod16134 from "16134__.js";
import _mod16135 from "16135__.js";
import _mod16152 from "16152__.js";
import _mod16161 from "16161__.js";
import _mod16181 from "16181__.js";
import _mod16193 from "16193__.js";

let closure_4 = _mod16135([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16152(arg0);
    const f = _mod16181.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16134(arguments[num]);
      if (f) {
        let tmp8 = _mod16193(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16193(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16131;
        if (tmp12) {
          tmp12 = !_mod16161(tmp2, tmp5, tmp9);
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
