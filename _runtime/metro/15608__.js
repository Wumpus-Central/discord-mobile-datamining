// _runtime/metro/15608__.js
import _mod15547 from "15547__.js";
import _mod15548 from "15548__.js";
import _mod15550 from "15550__.js";
import _mod15551 from "15551__.js";
import _mod15568 from "15568__.js";
import _mod15577 from "15577__.js";
import _mod15597 from "15597__.js";
import _mod15609 from "15609__.js";

let closure_4 = _mod15551([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15568(arg0);
    const f = _mod15597.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15550(arguments[num]);
      if (f) {
        let tmp8 = _mod15609(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15609(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15547;
        if (tmp12) {
          tmp12 = !_mod15577(tmp2, tmp5, tmp9);
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
