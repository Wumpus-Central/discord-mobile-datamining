// === Module 13983: assign ===

// Module 13983 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13922 */;
import _mod13923 from "module_13923" /* 13923 */;
import _mod13925 from "module_13925" /* 13925 */;
import call from "call" /* 13926 */;
import _mod13943 from "module_13943" /* 13943 */;
import _mod13972 from "module_13972" /* 13972 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13943(arg0);
    const f = _mod13972.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod13925(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13984)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13984)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13952)(tmp2, tmp5, tmp9);
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