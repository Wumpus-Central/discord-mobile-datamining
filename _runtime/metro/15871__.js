// _runtime/metro/15871__.js
import _mod15810 from "15810__.js";
import _mod15811 from "15811__.js";
import _mod15813 from "15813__.js";
import _mod15814 from "15814__.js";
import _mod15831 from "15831__.js";
import _mod15840 from "15840__.js";
import _mod15860 from "15860__.js";
import _mod15872 from "15872__.js";

let closure_4 = _mod15814([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15831(arg0);
    const f = _mod15860.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15813(arguments[num]);
      if (f) {
        let tmp8 = _mod15872(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15872(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15810;
        if (tmp12) {
          tmp12 = !_mod15840(tmp2, tmp5, tmp9);
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
