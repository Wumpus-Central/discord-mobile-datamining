// _runtime/metro/14592__.js
import _mod14531 from "14531__.js";
import _mod14532 from "14532__.js";
import _mod14534 from "14534__.js";
import _mod14535 from "14535__.js";
import _mod14552 from "14552__.js";
import _mod14561 from "14561__.js";
import _mod14581 from "14581__.js";
import _mod14593 from "14593__.js";

let closure_4 = _mod14535([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14552(arg0);
    const f = _mod14581.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14534(arguments[num]);
      if (f) {
        let tmp8 = _mod14593(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14593(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14531;
        if (tmp12) {
          tmp12 = !_mod14561(tmp2, tmp5, tmp9);
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
