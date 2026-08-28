// === Module 13949: assign ===

// Module 13949 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13888 */;
import _mod13889 from "module_13889" /* 13889 */;
import _mod13891 from "module_13891" /* 13891 */;
import call from "call" /* 13892 */;
import _mod13909 from "module_13909" /* 13909 */;
import _mod13938 from "module_13938" /* 13938 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13909(arg0);
    const f = _mod13938.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod13891(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13950)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13950)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13918)(tmp2, tmp5, tmp9);
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