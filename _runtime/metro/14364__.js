// _runtime/metro/14364__.js
import _mod14303 from "14303__.js";
import _mod14304 from "14304__.js";
import _mod14306 from "14306__.js";
import _mod14307 from "14307__.js";
import _mod14324 from "14324__.js";
import _mod14333 from "14333__.js";
import _mod14353 from "14353__.js";
import _mod14365 from "14365__.js";

let closure_4 = _mod14307([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14324(arg0);
    const f = _mod14353.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14306(arguments[num]);
      if (f) {
        let tmp8 = _mod14365(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14365(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14303;
        if (tmp12) {
          tmp12 = !_mod14333(tmp2, tmp5, tmp9);
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
