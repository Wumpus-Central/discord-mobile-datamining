// _runtime/13985_CoerceOptionsToObject.js
import _mod13986 from "metro/13986__.js";

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13986.ToObject(arg0);
  }
};
