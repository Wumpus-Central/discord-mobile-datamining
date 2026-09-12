// === Module 14449: ? ===

// Module 14449
import _mod14388 from "module_14388" /* 14388 */;
import _mod14389 from "module_14389" /* 14389 */;
import _mod14391 from "module_14391" /* 14391 */;
import _mod14392 from "module_14392" /* 14392 */;
import _mod14409 from "module_14409" /* 14409 */;
import _mod14418 from "module_14418" /* 14418 */;
import _mod14438 from "module_14438" /* 14438 */;
import _mod14450 from "module_14450" /* 14450 */;

let closure_4 = _mod14392([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14409(arg0);
    const f = _mod14438.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod14391(arguments[num]);
      if (f) {
        let tmp8 = _mod14450(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = _mod14450(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = _mod14388;
        if (tmp12) {
          tmp12 = !_mod14418(tmp2, tmp5, tmp9);
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