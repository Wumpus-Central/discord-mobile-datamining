// _runtime/13890_CoerceOptionsToObject.js
import _mod13891 from "metro/13891__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13891.ToObject(arg0);
  }
};
