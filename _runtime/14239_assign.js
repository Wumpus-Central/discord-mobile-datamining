// _runtime/14239_assign.js
import getOwnPropertyDescriptor from "14178_getOwnPropertyDescriptor.js";
import _mod14179 from "metro/14179__.js";
import _mod14181 from "metro/14181__.js";
import call from "14182_call.js";
import _mod14199 from "metro/14199__.js";
import _mod14228 from "metro/14228__.js";

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14199(arg0);
    const f = _mod14228.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod14181(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(14240)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(14240)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(14208)(tmp2, tmp5, tmp9);
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
