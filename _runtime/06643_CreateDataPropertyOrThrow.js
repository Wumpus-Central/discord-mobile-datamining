// === Module 6643: CreateDataPropertyOrThrow ===

// Module 6643 (CreateDataPropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6582 from "module_6582" /* 6582 */;
import _mod6629 from "module_6629" /* 6629 */;
import CreateDataProperty from "CreateDataProperty" /* 6644 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6582(arg0)) {
    if (_mod6629(arg1)) {
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