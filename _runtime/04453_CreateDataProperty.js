// _runtime/04453_CreateDataProperty.js
import _mod541 from "metro/00541__.js";
import isObject from "04391_isObject.js";
import isPropertyKey from "04438_isPropertyKey.js";
import OrdinaryDefineOwnProperty from "04454_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod541("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};