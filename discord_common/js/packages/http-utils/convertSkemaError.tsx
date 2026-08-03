const _errors = "_errors";
const result = require("set").fileFinishedImporting("../discord_common/js/packages/http-utils/convertSkemaError.tsx");

export const convertSkemaError = function convertSkemaError(errors) {
  const obj = {};
  for (const key10007 in arg0) {
    let tmp2 = key10007;
    let tmp3 = arg0[key10007];
    if (null == tmp3) {
      continue;
    } else {
      let tmp = _errors;
      if (key10007 === _errors) {
        let arr = arg0[key10007];
        obj._misc = arr.map((message) => message.message);
      }
      let _Array = Array;
      if (Array.isArray(tmp3)) {
        continue;
      } else {
        let arr2 = tmp3[tmp];
        if (null != arr2) {
          let mapped = arr2.map((message) => message.message);
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