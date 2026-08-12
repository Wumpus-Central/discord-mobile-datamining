// _runtime/13701_assign.js
import { getOwnPropertyDescriptor } from "13640_getOwnPropertyDescriptor.js";
import { 13643__ } from "metro/13643__.js";
import { 13661__ } from "metro/13661__.js";
import { 13690__ } from "metro/13690__.js";
let closure_4 = require("call")([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = 13661__(arg0);
    const f = 13690__.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = 13643__(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13702)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13702)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13670)(tmp2, tmp5, tmp9);
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