// _runtime/13737_assign.js
import getOwnPropertyDescriptor from "13676_getOwnPropertyDescriptor.js";
import _mod13677 from "metro/13677__.js";
import _mod13679 from "metro/13679__.js";
import call from "13680_call.js";
import _mod13697 from "metro/13697__.js";
import _mod13726 from "metro/13726__.js";

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod13697(arg0);
    const f = _mod13726.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod13679(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13738)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13738)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13706)(tmp2, tmp5, tmp9);
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