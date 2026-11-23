// _runtime/metro/15602__.js
import _mod15541 from "15541__.js";
import _mod15542 from "15542__.js";
import _mod15544 from "15544__.js";
import _mod15545 from "15545__.js";
import _mod15562 from "15562__.js";
import _mod15571 from "15571__.js";
import _mod15591 from "15591__.js";
import _mod15603 from "15603__.js";

let closure_4 = _mod15545([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15562(arg0);
    const f = _mod15591.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15544(arguments[num]);
      if (f) {
        let tmp8 = _mod15603(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15603(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15541;
        if (tmp12) {
          tmp12 = !_mod15571(tmp2, tmp5, tmp9);
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
