// _runtime/metro/15270__.js
import _mod15209 from "15209__.js";
import _mod15210 from "15210__.js";
import _mod15212 from "15212__.js";
import _mod15213 from "15213__.js";
import _mod15230 from "15230__.js";
import _mod15239 from "15239__.js";
import _mod15259 from "15259__.js";
import _mod15271 from "15271__.js";

let closure_4 = _mod15213([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15230(arg0);
    const f = _mod15259.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15212(arguments[num]);
      if (f) {
        let tmp8 = _mod15271(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15271(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15209;
        if (tmp12) {
          tmp12 = !_mod15239(tmp2, tmp5, tmp9);
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
