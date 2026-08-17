// _runtime/04437_Get.js
import isObject from "04391_isObject.js";


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4438)(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = tmp(541);
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + tmp(575)(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};