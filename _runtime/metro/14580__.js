// _runtime/metro/14580__.js
import _mod14519 from "14519__.js";
import _mod14520 from "14520__.js";
import _mod14522 from "14522__.js";
import _mod14523 from "14523__.js";
import _mod14540 from "14540__.js";
import _mod14549 from "14549__.js";
import _mod14569 from "14569__.js";
import _mod14581 from "14581__.js";

let closure_4 = _mod14523([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14540(arg0);
    const f = _mod14569.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14522(arguments[num]);
      if (f) {
        let tmp8 = _mod14581(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14581(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14519;
        if (tmp12) {
          tmp12 = !_mod14549(tmp2, tmp5, tmp9);
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
