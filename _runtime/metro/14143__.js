// _runtime/metro/14143__.js
import _mod14082 from "14082__.js";
import _mod14083 from "14083__.js";
import _mod14085 from "14085__.js";
import _mod14086 from "14086__.js";
import _mod14103 from "14103__.js";
import _mod14112 from "14112__.js";
import _mod14132 from "14132__.js";
import _mod14144 from "14144__.js";

let closure_4 = _mod14086([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14103(arg0);
    const length = arguments.length;
    const f = _mod14132.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp5 = _mod14085(arguments[num]);
      if (f) {
        let tmp8 = _mod14144(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14144(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14082;
        if (tmp12) {
          tmp12 = !_mod14112(tmp2, tmp5, tmp9);
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
