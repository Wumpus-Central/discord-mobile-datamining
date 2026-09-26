// _runtime/metro/13853__.js
import _mod13792 from "13792__.js";
import _mod13793 from "13793__.js";
import _mod13795 from "13795__.js";
import _mod13796 from "13796__.js";
import _mod13813 from "13813__.js";
import _mod13822 from "13822__.js";
import _mod13842 from "13842__.js";
import _mod13854 from "13854__.js";

let closure_4 = _mod13796([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13813(arg0);
    const f = _mod13842.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13795(arguments[num]);
      if (f) {
        let tmp8 = _mod13854(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod13854(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13792;
        if (tmp12) {
          tmp12 = !_mod13822(tmp2, tmp5, tmp9);
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
