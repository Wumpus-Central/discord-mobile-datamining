// _runtime/metro/14485__.js
import _mod14424 from "14424__.js";
import _mod14425 from "14425__.js";
import _mod14427 from "14427__.js";
import _mod14428 from "14428__.js";
import _mod14445 from "14445__.js";
import _mod14454 from "14454__.js";
import _mod14474 from "14474__.js";
import _mod14486 from "14486__.js";

let closure_4 = _mod14428([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14445(arg0);
    const f = _mod14474.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14427(arguments[num]);
      if (f) {
        let tmp8 = _mod14486(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14486(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14424;
        if (tmp12) {
          tmp12 = !_mod14454(tmp2, tmp5, tmp9);
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
