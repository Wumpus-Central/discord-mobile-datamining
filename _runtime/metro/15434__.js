// _runtime/metro/15434__.js
import _mod15373 from "15373__.js";
import _mod15374 from "15374__.js";
import _mod15376 from "15376__.js";
import _mod15377 from "15377__.js";
import _mod15394 from "15394__.js";
import _mod15403 from "15403__.js";
import _mod15423 from "15423__.js";
import _mod15435 from "15435__.js";

let closure_4 = _mod15377([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15394(arg0);
    const f = _mod15423.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15376(arguments[num]);
      if (f) {
        let tmp8 = _mod15435(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15435(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15373;
        if (tmp12) {
          tmp12 = !_mod15403(tmp2, tmp5, tmp9);
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
