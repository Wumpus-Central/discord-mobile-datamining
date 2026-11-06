// _runtime/metro/16447__.js
import _mod16386 from "16386__.js";
import _mod16387 from "16387__.js";
import _mod16389 from "16389__.js";
import _mod16390 from "16390__.js";
import _mod16407 from "16407__.js";
import _mod16416 from "16416__.js";
import _mod16436 from "16436__.js";
import _mod16448 from "16448__.js";

let closure_4 = _mod16390([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16407(arg0);
    const f = _mod16436.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16389(arguments[num]);
      if (f) {
        let tmp8 = _mod16448(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16448(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16386;
        if (tmp12) {
          tmp12 = !_mod16416(tmp2, tmp5, tmp9);
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
