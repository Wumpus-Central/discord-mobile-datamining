// === Module 1337: convertSkemaError ===

// Module 1337 (convertSkemaError)
import size from "module_2" /* 2 */;

const _errors = "_errors";
const result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/convertSkemaError.tsx");

export const convertSkemaError = function convertSkemaError(errors) {
  const obj = {};
  for (const key10007 in errors) {
    let tmp3 = errors[key10007];
    if (null == tmp3) {
      continue;
    } else {
      if (key10007 === _errors) {
        let arr = errors[key10007];
        obj._misc = arr.map((message) => message.message);
      }
      let _Array = Array;
      if (Array.isArray(tmp3)) {
        continue;
      } else {
        let mapped;
        let arr2 = tmp3[_errors];
        if (null != arr2) {
          mapped = arr2.map((message) => message.message);
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