// === Module 4946: CreateDataPropertyOrThrow ===

// Module 4946 (CreateDataPropertyOrThrow)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4885 from "module_4885" /* 4885 */;
import _mod4932 from "module_4932" /* 4932 */;
import CreateDataProperty from "CreateDataProperty" /* 4947 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4885(arg0)) {
    if (_mod4932(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1283("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1283("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};