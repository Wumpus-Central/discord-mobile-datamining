// === Module 5864: _createClass ===

// Module 5864 (_createClass)
import toPropertyKey from "toPropertyKey" /* 5865 */;


export default function _createClass(arg0, arg1, arg2) {
  if (arg1) {
    for (let num = 0; num < arg1.length; num = num + 1) {
      let tmp3 = arg1[num];
      let flag2 = tmp3.enumerable;
      let tmp4 = num;
      if (!flag2) {
        flag2 = false;
      }
      tmp3.enumerable = flag2;
      tmp3.configurable = true;
      if ("value" in tmp3) {
        tmp3.writable = true;
      }
      let _Object = Object;
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let definePropertyResult = Object.defineProperty(tmp, toPropertyKey(tmp3.key), tmp3);
    }
  }
  if (arg2) {
    for (let num3 = 0; num3 < arg2.length; num3 = num3 + 1) {
      let tmp9 = arg2[num3];
      let flag4 = tmp9.enumerable;
      let tmp10 = num3;
      if (!flag4) {
        flag4 = false;
      }
      tmp9.enumerable = flag4;
      tmp9.configurable = true;
      if ("value" in tmp9) {
        tmp9.writable = true;
      }
      let _Object2 = Object;
      let tmp11 = require;
      let tmp12 = dependencyMap;
      let definePropertyResult1 = Object.defineProperty(arg0, toPropertyKey(tmp9.key), tmp9);
    }
  }
  Object.defineProperty(arg0, "prototype", { writable: false });
  return arg0;
};