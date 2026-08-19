// discord_common/js/packages/http-utils/convertSkemaError.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const _errors = "_errors";
const result = obj132.fileFinishedImporting("../discord_common/js/packages/http-utils/convertSkemaError.tsx");

export const convertSkemaError = function convertSkemaError(errors) {
  const obj = {};
  for (const key10007 in arg0) {
    let tmp3 = arg0[key10007];
    if (null == tmp3) {
      continue;
    } else {
      if (key10007 === _errors) {
        let arr = arg0[key10007];
        obj._misc = arr.map((item, index) => item.message);
      }
      let _Array = Array;
      if (Array.isArray(tmp3)) {
        continue;
      } else {
        let arr2 = tmp3[_errors];
        if (null != arr2) {
          let mapped = arr2.map((item, index) => item.message);
        } else {
          let _Object = Object;
          mapped = [Object.keys(tmp3)[0]];
        }
        obj[key10007] = mapped;
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
};