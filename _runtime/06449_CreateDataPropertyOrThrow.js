// === Module 6449: CreateDataPropertyOrThrow ===

// Module 6449 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6388 from "module_6388" /* 6388 */;
import _mod6435 from "module_6435" /* 6435 */;
import CreateDataProperty from "CreateDataProperty" /* 6450 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6388(arg0)) {
    if (_mod6435(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1308("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};