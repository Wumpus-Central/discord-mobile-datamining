// _runtime/metro/15609__.js
import _mod15548 from "15548__.js";
import _mod15549 from "15549__.js";
import _mod15551 from "15551__.js";
import _mod15552 from "15552__.js";
import _mod15569 from "15569__.js";
import _mod15578 from "15578__.js";
import _mod15598 from "15598__.js";
import _mod15610 from "15610__.js";

let closure_4 = _mod15552([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15569(arg0);
    const f = _mod15598.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15551(arguments[num]);
      if (f) {
        let tmp8 = _mod15610(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15610(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15548;
        if (tmp12) {
          tmp12 = !_mod15578(tmp2, tmp5, tmp9);
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
