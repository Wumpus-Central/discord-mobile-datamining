// _runtime/metro/15623__.js
import _mod15562 from "15562__.js";
import _mod15563 from "15563__.js";
import _mod15565 from "15565__.js";
import _mod15566 from "15566__.js";
import _mod15583 from "15583__.js";
import _mod15592 from "15592__.js";
import _mod15612 from "15612__.js";
import _mod15624 from "15624__.js";

let closure_4 = _mod15566([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15583(arg0);
    const f = _mod15612.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15565(arguments[num]);
      if (f) {
        let tmp8 = _mod15624(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15624(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15562;
        if (tmp12) {
          tmp12 = !_mod15592(tmp2, tmp5, tmp9);
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
