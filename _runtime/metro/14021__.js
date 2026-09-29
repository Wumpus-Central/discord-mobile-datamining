// _runtime/metro/14021__.js
import _mod13960 from "13960__.js";
import _mod13961 from "13961__.js";
import _mod13963 from "13963__.js";
import _mod13964 from "13964__.js";
import _mod13981 from "13981__.js";
import _mod13990 from "13990__.js";
import _mod14010 from "14010__.js";
import _mod14022 from "14022__.js";

let closure_4 = _mod13964([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13981(arg0);
    const f = _mod14010.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13963(arguments[num]);
      if (f) {
        let tmp8 = _mod14022(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14022(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13960;
        if (tmp12) {
          tmp12 = !_mod13990(tmp2, tmp5, tmp9);
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
