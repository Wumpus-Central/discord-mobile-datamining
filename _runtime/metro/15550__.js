// _runtime/metro/15550__.js
import _mod15489 from "15489__.js";
import _mod15490 from "15490__.js";
import _mod15492 from "15492__.js";
import _mod15493 from "15493__.js";
import _mod15510 from "15510__.js";
import _mod15519 from "15519__.js";
import _mod15539 from "15539__.js";
import _mod15551 from "15551__.js";

let closure_4 = _mod15493([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15510(arg0);
    const f = _mod15539.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15492(arguments[num]);
      if (f) {
        let tmp8 = _mod15551(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15551(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15489;
        if (tmp12) {
          tmp12 = !_mod15519(tmp2, tmp5, tmp9);
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
