// _runtime/13695_CoerceOptionsToObject.js
import _mod13696 from "metro/13696__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13696.ToObject(arg0);
  }
};
