// _runtime/metro/15796__.js
import _mod15735 from "15735__.js";
import _mod15736 from "15736__.js";
import _mod15738 from "15738__.js";
import _mod15739 from "15739__.js";
import _mod15756 from "15756__.js";
import _mod15765 from "15765__.js";
import _mod15785 from "15785__.js";
import _mod15797 from "15797__.js";

let closure_4 = _mod15739([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15756(arg0);
    const f = _mod15785.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15738(arguments[num]);
      if (f) {
        let tmp8 = _mod15797(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15797(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15735;
        if (tmp12) {
          tmp12 = !_mod15765(tmp2, tmp5, tmp9);
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
