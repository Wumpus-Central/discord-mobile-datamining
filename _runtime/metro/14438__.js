// _runtime/metro/14438__.js
import _mod14377 from "14377__.js";
import _mod14378 from "14378__.js";
import _mod14380 from "14380__.js";
import _mod14381 from "14381__.js";
import _mod14398 from "14398__.js";
import _mod14407 from "14407__.js";
import _mod14427 from "14427__.js";
import _mod14439 from "14439__.js";

let closure_4 = _mod14381([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14398(arg0);
    const f = _mod14427.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14380(arguments[num]);
      if (f) {
        let tmp8 = _mod14439(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14439(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14377;
        if (tmp12) {
          tmp12 = !_mod14407(tmp2, tmp5, tmp9);
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
