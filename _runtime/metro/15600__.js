// _runtime/metro/15600__.js
import _mod15539 from "15539__.js";
import _mod15540 from "15540__.js";
import _mod15542 from "15542__.js";
import _mod15543 from "15543__.js";
import _mod15560 from "15560__.js";
import _mod15569 from "15569__.js";
import _mod15589 from "15589__.js";
import _mod15601 from "15601__.js";

let closure_4 = _mod15543([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15560(arg0);
    const f = _mod15589.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15542(arguments[num]);
      if (f) {
        let tmp8 = _mod15601(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15601(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15539;
        if (tmp12) {
          tmp12 = !_mod15569(tmp2, tmp5, tmp9);
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
