// === Module 5390: CreateDataPropertyOrThrow ===

// Module 5390 (CreateDataPropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5329 from "module_5329" /* 5329 */;
import _mod5376 from "module_5376" /* 5376 */;
import CreateDataProperty from "CreateDataProperty" /* 5391 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5329(arg0)) {
    if (_mod5376(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1293("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};