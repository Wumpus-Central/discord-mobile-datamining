// _runtime/metro/15388__.js
import _mod15327 from "15327__.js";
import _mod15328 from "15328__.js";
import _mod15330 from "15330__.js";
import _mod15331 from "15331__.js";
import _mod15348 from "15348__.js";
import _mod15357 from "15357__.js";
import _mod15377 from "15377__.js";
import _mod15389 from "15389__.js";

let closure_4 = _mod15331([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15348(arg0);
    const f = _mod15377.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15330(arguments[num]);
      if (f) {
        let tmp8 = _mod15389(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15389(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15327;
        if (tmp12) {
          tmp12 = !_mod15357(tmp2, tmp5, tmp9);
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
