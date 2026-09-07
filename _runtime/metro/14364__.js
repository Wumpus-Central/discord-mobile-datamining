// === Module 14364: ? ===

// Module 14364
import _mod14303 from "module_14303" /* 14303 */;
import _mod14304 from "module_14304" /* 14304 */;
import _mod14306 from "module_14306" /* 14306 */;
import _mod14307 from "module_14307" /* 14307 */;
import _mod14324 from "module_14324" /* 14324 */;
import _mod14333 from "module_14333" /* 14333 */;
import _mod14353 from "module_14353" /* 14353 */;
import _mod14365 from "module_14365" /* 14365 */;

let closure_4 = _mod14307([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14324(arg0);
    const f = _mod14353.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14306(arguments[num]);
      if (f) {
        let tmp8 = _mod14365(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14365(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14303;
        if (tmp12) {
          tmp12 = !_mod14333(tmp2, tmp5, tmp9);
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