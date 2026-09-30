// _runtime/metro/14048__.js
import _mod13987 from "13987__.js";
import _mod13988 from "13988__.js";
import _mod13990 from "13990__.js";
import _mod13991 from "13991__.js";
import _mod14008 from "14008__.js";
import _mod14017 from "14017__.js";
import _mod14037 from "14037__.js";
import _mod14049 from "14049__.js";

let closure_4 = _mod13991([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14008(arg0);
    const f = _mod14037.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13990(arguments[num]);
      if (f) {
        let tmp8 = _mod14049(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14049(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod13987;
        if (tmp12) {
          tmp12 = !_mod14017(tmp2, tmp5, tmp9);
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
