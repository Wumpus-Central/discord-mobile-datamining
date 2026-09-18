// _runtime/14422_CoerceOptionsToObject.js
import _mod14423 from "metro/14423__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14423.ToObject(arg0);
  }
};
