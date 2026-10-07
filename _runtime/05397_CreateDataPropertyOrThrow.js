// === Module 5397: CreateDataPropertyOrThrow ===

// Module 5397 (CreateDataPropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5336 from "module_5336" /* 5336 */;
import _mod5383 from "module_5383" /* 5383 */;
import CreateDataProperty from "CreateDataProperty" /* 5398 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5336(arg0)) {
    if (_mod5383(arg1)) {
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