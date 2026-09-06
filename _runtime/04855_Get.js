// === Module 4855: Get ===

// Module 4855 (Get)
import isObject from "isObject" /* 4809 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4856)(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = tmp(1283);
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + tmp(1317)(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};