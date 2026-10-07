// discord_app/modules/rpc/helpers/validateScope.tsx
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const RPC_SCOPE_CONFIG = Constants.RPC_SCOPE_CONFIG;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateScope.tsx");

export default function validateScope(arr, str) {
  closure_0 = arr;
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
      tmp = !obj.some((item) => closure_0.includes(item));
    }
    let tmp2 = !tmp;
    if (tmp) {
      const _Array = Array;
      const isArray1 = Array.isArray(obj2);
      let tmp4 = !isArray1;
      if (isArray1) {
        tmp4 = !obj2.every((item) => closure_0.includes(item));
      }
      tmp2 = !tmp4;
    }
    return tmp2;
  }
}
