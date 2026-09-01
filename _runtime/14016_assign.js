// === Module 14016: assign ===

// Module 14016 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13955 */;
import _mod13956 from "module_13956" /* 13956 */;
import _mod13958 from "module_13958" /* 13958 */;
import call from "call" /* 13959 */;
import _mod13976 from "module_13976" /* 13976 */;
import _mod14005 from "module_14005" /* 14005 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13976(arg0);
    const f = _mod14005.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod13958(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(14017)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(14017)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13985)(tmp2, tmp5, tmp9);
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