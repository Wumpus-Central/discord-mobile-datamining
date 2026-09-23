// _runtime/metro/14727__.js
import _mod14666 from "14666__.js";
import _mod14667 from "14667__.js";
import _mod14669 from "14669__.js";
import _mod14670 from "14670__.js";
import _mod14687 from "14687__.js";
import _mod14696 from "14696__.js";
import _mod14716 from "14716__.js";
import _mod14728 from "14728__.js";

let closure_4 = _mod14670([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14687(arg0);
    const f = _mod14716.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14669(arguments[num]);
      if (f) {
        let tmp8 = _mod14728(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14728(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14666;
        if (tmp12) {
          tmp12 = !_mod14696(tmp2, tmp5, tmp9);
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
