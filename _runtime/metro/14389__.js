// _runtime/metro/14389__.js
import _mod14328 from "14328__.js";
import _mod14329 from "14329__.js";
import _mod14331 from "14331__.js";
import _mod14332 from "14332__.js";
import _mod14349 from "14349__.js";
import _mod14358 from "14358__.js";
import _mod14378 from "14378__.js";
import _mod14390 from "14390__.js";

let closure_4 = _mod14332([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14349(arg0);
    const f = _mod14378.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14331(arguments[num]);
      if (f) {
        let tmp8 = _mod14390(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14390(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14328;
        if (tmp12) {
          tmp12 = !_mod14358(tmp2, tmp5, tmp9);
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
