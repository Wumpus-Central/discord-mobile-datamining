// _runtime/14206_CoerceOptionsToObject.js
import _mod14207 from "metro/14207__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14207.ToObject(arg0);
  }
};
