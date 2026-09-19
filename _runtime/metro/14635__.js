// _runtime/metro/14635__.js
import _mod14574 from "14574__.js";
import _mod14575 from "14575__.js";
import _mod14577 from "14577__.js";
import _mod14578 from "14578__.js";
import _mod14595 from "14595__.js";
import _mod14604 from "14604__.js";
import _mod14624 from "14624__.js";
import _mod14636 from "14636__.js";

let closure_4 = _mod14578([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14595(arg0);
    const f = _mod14624.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14577(arguments[num]);
      if (f) {
        let tmp8 = _mod14636(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14636(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14574;
        if (tmp12) {
          tmp12 = !_mod14604(tmp2, tmp5, tmp9);
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
