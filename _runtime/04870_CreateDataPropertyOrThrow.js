// _runtime/04870_CreateDataPropertyOrThrow.js
import _mod4809 from "metro/04809__.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4809(arg0)) {
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
}
