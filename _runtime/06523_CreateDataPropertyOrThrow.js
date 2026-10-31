// === Module 6523: CreateDataPropertyOrThrow ===

// Module 6523 (CreateDataPropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6509 from "module_6509" /* 6509 */;
import CreateDataProperty from "CreateDataProperty" /* 6524 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6462(arg0)) {
    if (_mod6509(arg1)) {
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