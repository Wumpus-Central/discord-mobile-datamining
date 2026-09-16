// _runtime/metro/14477__.js
import _mod14416 from "14416__.js";
import _mod14417 from "14417__.js";
import _mod14419 from "14419__.js";
import _mod14420 from "14420__.js";
import _mod14437 from "14437__.js";
import _mod14446 from "14446__.js";
import _mod14466 from "14466__.js";
import _mod14478 from "14478__.js";

let closure_4 = _mod14420([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14437(arg0);
    const f = _mod14466.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14419(arguments[num]);
      if (f) {
        let tmp8 = _mod14478(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14478(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14416;
        if (tmp12) {
          tmp12 = !_mod14446(tmp2, tmp5, tmp9);
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
