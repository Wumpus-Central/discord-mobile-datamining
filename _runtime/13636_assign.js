// _runtime/13636_assign.js
import { getOwnPropertyDescriptor } from "13575_getOwnPropertyDescriptor.js";
import { 13578__ } from "metro/13578__.js";
import { 13596__ } from "metro/13596__.js";
import { 13625__ } from "metro/13625__.js";
let closure_4 = require("call")([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = 13596__(arg0);
    const f = 13625__.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = 13578__(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13637)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13637)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13605)(tmp2, tmp5, tmp9);
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