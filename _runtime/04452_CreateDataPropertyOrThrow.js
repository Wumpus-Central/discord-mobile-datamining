// _runtime/04452_CreateDataPropertyOrThrow.js
import _mod541 from "metro/00541__.js";
import isObject from "04391_isObject.js";
import isPropertyKey from "04438_isPropertyKey.js";
import CreateDataProperty from "04453_CreateDataProperty.js";


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod541("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod541("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};