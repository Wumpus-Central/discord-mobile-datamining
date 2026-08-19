// _runtime/04437_Get.js
import _mod541 from "metro/00541__.js";
import addNumericSeparator from "00575_addNumericSeparator.js";
import isObject from "04391_isObject.js";
import isPropertyKey from "04438_isPropertyKey.js";


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = _mod541;
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + addNumericSeparator(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};