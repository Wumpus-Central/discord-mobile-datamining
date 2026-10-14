// _runtime/metro/14974__.js
import _mod14913 from "14913__.js";
import _mod14914 from "14914__.js";
import _mod14916 from "14916__.js";
import _mod14917 from "14917__.js";
import _mod14934 from "14934__.js";
import _mod14943 from "14943__.js";
import _mod14963 from "14963__.js";
import _mod14975 from "14975__.js";

let closure_4 = _mod14917([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14934(arg0);
    const f = _mod14963.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14916(arguments[num]);
      if (f) {
        let tmp8 = _mod14975(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14975(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14913;
        if (tmp12) {
          tmp12 = !_mod14943(tmp2, tmp5, tmp9);
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
