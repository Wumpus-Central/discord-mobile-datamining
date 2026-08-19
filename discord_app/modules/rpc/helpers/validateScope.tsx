// discord_app/modules/rpc/helpers/validateScope.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import RPC_SCOPE_CONFIG2 from "../Constants.tsx";

let RPC_SCOPE_CONFIG = RPC_SCOPE_CONFIG2.RPC_SCOPE_CONFIG;
const result = obj132.fileFinishedImporting("modules/rpc/helpers/validateScope.tsx");

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
      tmp = !obj.some((item, index) => arr.includes(item));
    }
    let tmp2 = !tmp;
    if (tmp) {
      const _Array = Array;
      const isArray1 = Array.isArray(obj2);
      let tmp4 = !isArray1;
      if (isArray1) {
        tmp4 = !obj2.every((item, index) => arr.includes(item));
      }
      tmp2 = !tmp4;
    }
    return tmp2;
  }
};