// _runtime/04824_CreateDataPropertyOrThrow.js
import isObject from "04763_isObject.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4810)(arg1)) {
      if (!tmp(4825)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(538)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(538)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
