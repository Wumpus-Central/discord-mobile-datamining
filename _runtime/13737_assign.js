// === Module 13737: assign ===

// Module 13737 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13676 */;
import _mod13677 from "module_13677" /* 13677 */;
import _mod13679 from "module_13679" /* 13679 */;
import call from "call" /* 13680 */;
import _mod13697 from "module_13697" /* 13697 */;
import call2 from "call" /* 13706 */;
import _mod13726 from "module_13726" /* 13726 */;
import items from "items" /* 13738 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13697(arg0);
    const f = _mod13726.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp5 = _mod13679(arguments[num]);
      if (f) {
        let tmp8 = items(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = items(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp12 = getOwnPropertyDescriptor;
        if (tmp12) {
          tmp12 = !call2(tmp2, tmp5, tmp9);
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