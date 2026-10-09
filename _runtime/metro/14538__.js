// _runtime/metro/14538__.js
import _mod14477 from "14477__.js";
import _mod14478 from "14478__.js";
import _mod14480 from "14480__.js";
import _mod14481 from "14481__.js";
import _mod14498 from "14498__.js";
import _mod14507 from "14507__.js";
import _mod14527 from "14527__.js";
import _mod14539 from "14539__.js";

let closure_4 = _mod14481([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14498(arg0);
    const f = _mod14527.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14480(arguments[num]);
      if (f) {
        let tmp8 = _mod14539(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14539(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14477;
        if (tmp12) {
          tmp12 = !_mod14507(tmp2, tmp5, tmp9);
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
