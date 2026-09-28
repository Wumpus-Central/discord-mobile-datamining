// _runtime/13694_CoerceOptionsToObject.js
import _mod13695 from "metro/13695__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13695.ToObject(arg0);
  }
};
