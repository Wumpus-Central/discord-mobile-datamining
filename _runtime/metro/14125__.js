// _runtime/metro/14125__.js
import _mod14064 from "14064__.js";
import _mod14065 from "14065__.js";
import _mod14067 from "14067__.js";
import _mod14068 from "14068__.js";
import _mod14085 from "14085__.js";
import _mod14094 from "14094__.js";
import _mod14114 from "14114__.js";
import _mod14126 from "14126__.js";

let closure_4 = _mod14068([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14085(arg0);
    const f = _mod14114.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14067(arguments[num]);
      if (f) {
        let tmp8 = _mod14126(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14126(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14064;
        if (tmp12) {
          tmp12 = !_mod14094(tmp2, tmp5, tmp9);
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
