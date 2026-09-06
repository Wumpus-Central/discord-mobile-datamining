// _runtime/metro/14361__.js
import _mod14300 from "14300__.js";
import _mod14301 from "14301__.js";
import _mod14303 from "14303__.js";
import _mod14304 from "14304__.js";
import _mod14321 from "14321__.js";
import _mod14350 from "14350__.js";

let closure_4 = _mod14304([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14321(arg0);
    const f = _mod14350.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14303(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14362)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14362)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14300;
        if (tmp12) {
          tmp12 = !tmp10(14330)(tmp2, tmp5, tmp9);
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
