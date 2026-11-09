// _runtime/metro/16505__.js
import _mod16444 from "16444__.js";
import _mod16445 from "16445__.js";
import _mod16447 from "16447__.js";
import _mod16448 from "16448__.js";
import _mod16465 from "16465__.js";
import _mod16474 from "16474__.js";
import _mod16494 from "16494__.js";
import _mod16506 from "16506__.js";

let closure_4 = _mod16448([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16465(arg0);
    const f = _mod16494.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16447(arguments[num]);
      if (f) {
        let tmp8 = _mod16506(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16506(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16444;
        if (tmp12) {
          tmp12 = !_mod16474(tmp2, tmp5, tmp9);
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
