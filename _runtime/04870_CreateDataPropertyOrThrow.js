// === Module 4870: CreateDataPropertyOrThrow ===

// Module 4870 (CreateDataPropertyOrThrow)
import isObject from "isObject" /* 4809 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4856)(arg1)) {
      if (!tmp(4871)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(1283)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};