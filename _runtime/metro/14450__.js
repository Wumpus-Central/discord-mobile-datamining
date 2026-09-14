// _runtime/metro/14450__.js
import _mod14389 from "14389__.js";
import _mod14390 from "14390__.js";
import _mod14392 from "14392__.js";
import _mod14393 from "14393__.js";
import _mod14410 from "14410__.js";
import _mod14419 from "14419__.js";
import _mod14439 from "14439__.js";
import _mod14451 from "14451__.js";

let closure_4 = _mod14393([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14410(arg0);
    const f = _mod14439.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14392(arguments[num]);
      if (f) {
        let tmp8 = _mod14451(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14451(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14389;
        if (tmp12) {
          tmp12 = !_mod14419(tmp2, tmp5, tmp9);
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
