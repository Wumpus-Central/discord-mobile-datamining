// _runtime/13898_CoerceOptionsToObject.js
import _mod13899 from "metro/13899__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13899.ToObject(arg0);
  }
};
