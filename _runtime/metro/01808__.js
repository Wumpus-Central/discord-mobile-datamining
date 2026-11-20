// _runtime/metro/01808__.js
import _mod1759 from "01759__.js";

require = arg1;
const dependencyMap = arg6;
const ERROR_MESSAGES = {
  invalidDashArray(arg0) {
    return "Invalid stroke dash array value: " + JSON.stringify(arg0);
  }
};

export { ERROR_MESSAGES };
export (arg0) => {
  const obj = _mod1759;
  if (obj.isLength(arg0)) {
    items = [arg0];
    let arr2 = items;
  } else {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      const items1 = [];
      HermesBuiltin.arraySpread(arg0, 0);
      arr2 = items1;
    } else if ("none" === arg0) {
      return "none";
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Reanimated] " + obj.invalidDashArray(arg0));
      throw error;
    }
  }
  let combined = arr2;
  if (arr2.length % 2 === 1) {
    combined = arr2.concat(arr2);
  }
  return combined;
}