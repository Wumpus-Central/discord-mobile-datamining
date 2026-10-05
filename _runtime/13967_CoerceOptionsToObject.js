// _runtime/13967_CoerceOptionsToObject.js
import _mod13968 from "metro/13968__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13968.ToObject(arg0);
  }
};
