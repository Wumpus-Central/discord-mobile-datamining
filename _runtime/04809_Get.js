// _runtime/04809_Get.js
import isObject from "04763_isObject.js";

export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4810)(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = tmp(538);
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + tmp(572)(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
