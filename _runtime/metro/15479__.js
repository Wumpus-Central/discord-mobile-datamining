// _runtime/metro/15479__.js
import _mod15418 from "15418__.js";
import _mod15419 from "15419__.js";
import _mod15421 from "15421__.js";
import _mod15422 from "15422__.js";
import _mod15439 from "15439__.js";
import _mod15448 from "15448__.js";
import _mod15468 from "15468__.js";
import _mod15480 from "15480__.js";

let closure_4 = _mod15422([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15439(arg0);
    const f = _mod15468.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15421(arguments[num]);
      if (f) {
        let tmp8 = _mod15480(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15480(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15418;
        if (tmp12) {
          tmp12 = !_mod15448(tmp2, tmp5, tmp9);
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
