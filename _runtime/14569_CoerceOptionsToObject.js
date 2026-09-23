// _runtime/14569_CoerceOptionsToObject.js
import _mod14570 from "metro/14570__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14570.ToObject(arg0);
  }
};
