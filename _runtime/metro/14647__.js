// _runtime/metro/14647__.js
import _mod14586 from "14586__.js";
import _mod14587 from "14587__.js";
import _mod14589 from "14589__.js";
import _mod14590 from "14590__.js";
import _mod14607 from "14607__.js";
import _mod14616 from "14616__.js";
import _mod14636 from "14636__.js";
import _mod14648 from "14648__.js";

let closure_4 = _mod14590([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14607(arg0);
    const f = _mod14636.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14589(arguments[num]);
      if (f) {
        let tmp8 = _mod14648(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14648(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14586;
        if (tmp12) {
          tmp12 = !_mod14616(tmp2, tmp5, tmp9);
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
