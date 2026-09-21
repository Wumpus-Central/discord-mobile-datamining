// _runtime/metro/14641__.js
import _mod14580 from "14580__.js";
import _mod14581 from "14581__.js";
import _mod14583 from "14583__.js";
import _mod14584 from "14584__.js";
import _mod14601 from "14601__.js";
import _mod14610 from "14610__.js";
import _mod14630 from "14630__.js";
import _mod14642 from "14642__.js";

let closure_4 = _mod14584([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14601(arg0);
    const f = _mod14630.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14583(arguments[num]);
      if (f) {
        let tmp8 = _mod14642(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14642(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14580;
        if (tmp12) {
          tmp12 = !_mod14610(tmp2, tmp5, tmp9);
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
