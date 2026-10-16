// _runtime/metro/15305__.js
import _mod15244 from "15244__.js";
import _mod15245 from "15245__.js";
import _mod15247 from "15247__.js";
import _mod15248 from "15248__.js";
import _mod15265 from "15265__.js";
import _mod15274 from "15274__.js";
import _mod15294 from "15294__.js";
import _mod15306 from "15306__.js";

let closure_4 = _mod15248([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15265(arg0);
    const f = _mod15294.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15247(arguments[num]);
      if (f) {
        let tmp8 = _mod15306(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15306(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15244;
        if (tmp12) {
          tmp12 = !_mod15274(tmp2, tmp5, tmp9);
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
