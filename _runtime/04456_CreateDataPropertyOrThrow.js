// === Module 4456: CreateDataPropertyOrThrow ===

// Module 4456 (CreateDataPropertyOrThrow)
import isObject from "isObject" /* 4395 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4442)(arg1)) {
      if (!tmp(4457)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(541)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};