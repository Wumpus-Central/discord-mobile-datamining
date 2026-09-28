// _runtime/metro/13852__.js
import _mod13791 from "13791__.js";
import _mod13792 from "13792__.js";
import _mod13794 from "13794__.js";
import _mod13795 from "13795__.js";
import _mod13812 from "13812__.js";
import _mod13821 from "13821__.js";
import _mod13841 from "13841__.js";
import _mod13853 from "13853__.js";

let closure_4 = _mod13795([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13812(arg0);
    const f = _mod13841.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13794(arguments[num]);
      if (f) {
        let tmp8 = _mod13853(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod13853(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13791;
        if (tmp12) {
          tmp12 = !_mod13821(tmp2, tmp5, tmp9);
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
