// === Module 14361: assign ===

// Module 14361 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14300 */;
import _mod14301 from "module_14301" /* 14301 */;
import _mod14303 from "module_14303" /* 14303 */;
import call from "call" /* 14304 */;
import _mod14321 from "module_14321" /* 14321 */;
import _mod14350 from "module_14350" /* 14350 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14321(arg0);
    const f = _mod14350.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod14303(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(14362)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(14362)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(14330)(tmp2, tmp5, tmp9);
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