// _runtime/metro/15563__.js
import _mod15502 from "15502__.js";
import _mod15503 from "15503__.js";
import _mod15505 from "15505__.js";
import _mod15506 from "15506__.js";
import _mod15523 from "15523__.js";
import _mod15532 from "15532__.js";
import _mod15552 from "15552__.js";
import _mod15564 from "15564__.js";

let closure_4 = _mod15506([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod15523(arg0);
    const f = _mod15552.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod15505(arguments[num]);
      if (f) {
        let tmp8 = _mod15564(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod15564(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod15502;
        if (tmp12) {
          tmp12 = !_mod15532(tmp2, tmp5, tmp9);
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
