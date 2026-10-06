// _runtime/metro/06359__createClass.js
import toPropertyKey from "../06360_toPropertyKey.js";

export default function _createClass(arg0, arg1, arg2) {
  const tmp = arg1;
  if (tmp) {
    let num;
    for (let num = 0; num < arg1.length; num = num + 1) {
      let tmp4 = arg1[num];
      let flag2 = tmp4.enumerable;
      if (!flag2) {
        flag2 = false;
      }
      tmp4.enumerable = flag2;
      tmp4.configurable = true;
      if ("value" in tmp4) {
        tmp4.writable = true;
      }
      let _Object = Object;
      let definePropertyResult = Object.defineProperty(tmp2, toPropertyKey(tmp4.key), tmp4);
    }
  }
  const tmp9 = arg2;
  if (tmp9) {
    let num3;
    for (let num3 = 0; num3 < arg2.length; num3 = num3 + 1) {
      let tmp11 = arg2[num3];
      let flag4 = tmp11.enumerable;
      if (!flag4) {
        flag4 = false;
      }
      tmp11.enumerable = flag4;
      tmp11.configurable = true;
      if ("value" in tmp11) {
        tmp11.writable = true;
      }
      let _Object2 = Object;
      let definePropertyResult1 = Object.defineProperty(arg0, toPropertyKey(tmp11.key), tmp11);
    }
  }
  Object.defineProperty(arg0, "prototype", { writable: false });
  return arg0;
}
