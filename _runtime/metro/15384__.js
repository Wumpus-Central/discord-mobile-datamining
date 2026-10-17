// _runtime/metro/15384__.js
import _mod15323 from "15323__.js";
import _mod15324 from "15324__.js";
import _mod15326 from "15326__.js";
import _mod15327 from "15327__.js";
import _mod15344 from "15344__.js";
import _mod15353 from "15353__.js";
import _mod15373 from "15373__.js";
import _mod15385 from "15385__.js";

let closure_4 = _mod15327([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15344(arg0);
    const f = _mod15373.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15326(arguments[num]);
      if (f) {
        let tmp8 = _mod15385(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15385(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15323;
        if (tmp12) {
          tmp12 = !_mod15353(tmp2, tmp5, tmp9);
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
