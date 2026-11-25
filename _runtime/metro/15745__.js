// _runtime/metro/15745__.js
import _mod15684 from "15684__.js";
import _mod15685 from "15685__.js";
import _mod15687 from "15687__.js";
import _mod15688 from "15688__.js";
import _mod15705 from "15705__.js";
import _mod15714 from "15714__.js";
import _mod15734 from "15734__.js";
import _mod15746 from "15746__.js";

let closure_4 = _mod15688([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15705(arg0);
    const f = _mod15734.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15687(arguments[num]);
      if (f) {
        let tmp8 = _mod15746(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15746(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15684;
        if (tmp12) {
          tmp12 = !_mod15714(tmp2, tmp5, tmp9);
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
