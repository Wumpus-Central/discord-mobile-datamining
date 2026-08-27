// === Module 13930: assign ===

// Module 13930 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13869 */;
import _mod13870 from "module_13870" /* 13870 */;
import _mod13872 from "module_13872" /* 13872 */;
import call from "call" /* 13873 */;
import _mod13890 from "module_13890" /* 13890 */;
import _mod13919 from "module_13919" /* 13919 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13890(arg0);
    const f = _mod13919.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod13872(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13931)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13931)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13899)(tmp2, tmp5, tmp9);
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