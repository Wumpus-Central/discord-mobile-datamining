// _runtime/15446_CoerceOptionsToObject.js
import _mod15447 from "metro/15447__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15447.ToObject(arg0);
  }
};
