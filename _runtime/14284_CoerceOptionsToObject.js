// _runtime/14284_CoerceOptionsToObject.js
import _mod14285 from "metro/14285__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14285.ToObject(arg0);
  }
};
