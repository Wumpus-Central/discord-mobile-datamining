// === Module 4915: CreateDataPropertyOrThrow ===

// Module 4915 (CreateDataPropertyOrThrow)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4854 from "module_4854" /* 4854 */;
import _mod4901 from "module_4901" /* 4901 */;
import CreateDataProperty from "CreateDataProperty" /* 4916 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4854(arg0)) {
    if (_mod4901(arg1)) {
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