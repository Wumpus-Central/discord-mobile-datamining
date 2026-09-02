// === Module 14379: validateScope ===

// Module 14379 (validateScope)
import set from "set" /* 2 */;
import RPC_SCOPE_CONFIG2 from "RPC_SCOPE_CONFIG" /* 4380 */;

let RPC_SCOPE_CONFIG = RPC_SCOPE_CONFIG2.RPC_SCOPE_CONFIG;
const result = set.fileFinishedImporting("modules/rpc/helpers/validateScope.tsx");

export default function validateScope(arr, str) {
  RPC_SCOPE_CONFIG = arr;
  if (null == str) {
    return true;
  } else if (typeof str === "string") {
    return arr.includes(str);
  } else if (typeof str !== "object") {
    return false;
  } else {
    const _Array2 = Array;
    const isArray = Array.isArray(obj);
    let tmp = !isArray;
    if (isArray) {
      tmp = !obj.some((arg0) => arr.includes(arg0));
    }
    let tmp2 = !tmp;
    if (tmp) {
      const _Array = Array;
      const isArray1 = Array.isArray(obj2);
      let tmp4 = !isArray1;
      if (isArray1) {
        tmp4 = !obj2.every((arg0) => arr.includes(arg0));
      }
      tmp2 = !tmp4;
    }
    return tmp2;
  }
};