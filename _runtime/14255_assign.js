// === Module 14255: assign ===

// Module 14255 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14194 */;
import _mod14195 from "module_14195" /* 14195 */;
import _mod14197 from "module_14197" /* 14197 */;
import call from "call" /* 14198 */;
import _mod14215 from "module_14215" /* 14215 */;
import _mod14244 from "module_14244" /* 14244 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14215(arg0);
    const f = _mod14244.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod14197(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(14256)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(14256)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(14224)(tmp2, tmp5, tmp9);
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