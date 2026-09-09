// === Module 4884: CreateDataPropertyOrThrow ===

// Module 4884 (CreateDataPropertyOrThrow)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4823 from "module_4823" /* 4823 */;
import _mod4870 from "module_4870" /* 4870 */;
import CreateDataProperty from "CreateDataProperty" /* 4885 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4823(arg0)) {
    if (_mod4870(arg1)) {
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