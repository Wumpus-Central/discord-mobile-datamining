// _runtime/metro/15515__.js
import _mod15454 from "15454__.js";
import _mod15455 from "15455__.js";
import _mod15457 from "15457__.js";
import _mod15458 from "15458__.js";
import _mod15475 from "15475__.js";
import _mod15484 from "15484__.js";
import _mod15504 from "15504__.js";
import _mod15516 from "15516__.js";

let closure_4 = _mod15458([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15475(arg0);
    const f = _mod15504.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15457(arguments[num]);
      if (f) {
        let tmp8 = _mod15516(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15516(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15454;
        if (tmp12) {
          tmp12 = !_mod15484(tmp2, tmp5, tmp9);
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
