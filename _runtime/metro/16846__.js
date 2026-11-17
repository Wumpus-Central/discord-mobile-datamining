// _runtime/metro/16846__.js
import _mod16785 from "16785__.js";
import _mod16786 from "16786__.js";
import _mod16788 from "16788__.js";
import _mod16789 from "16789__.js";
import _mod16806 from "16806__.js";
import _mod16815 from "16815__.js";
import _mod16835 from "16835__.js";
import _mod16847 from "16847__.js";

let closure_4 = _mod16789([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod16806(arg0);
    const f = _mod16835.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod16788(arguments[num]);
      if (f) {
        let tmp8 = _mod16847(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod16847(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod16785;
        if (tmp12) {
          tmp12 = !_mod16815(tmp2, tmp5, tmp9);
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
