// _runtime/04450_HasProperty.js
import _mod541 from "metro/00541__.js";
import isObject from "04391_isObject.js";
import isPropertyKey from "04438_isPropertyKey.js";


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod541("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};