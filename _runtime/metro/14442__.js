// _runtime/metro/14442__.js
import _mod14381 from "14381__.js";
import _mod14382 from "14382__.js";
import _mod14384 from "14384__.js";
import _mod14385 from "14385__.js";
import _mod14402 from "14402__.js";
import _mod14411 from "14411__.js";
import _mod14431 from "14431__.js";
import _mod14443 from "14443__.js";

let closure_4 = _mod14385([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14402(arg0);
    const f = _mod14431.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14384(arguments[num]);
      if (f) {
        let tmp8 = _mod14443(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14443(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14381;
        if (tmp12) {
          tmp12 = !_mod14411(tmp2, tmp5, tmp9);
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
