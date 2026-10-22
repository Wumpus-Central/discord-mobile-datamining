// === Module 6437: CreateDataPropertyOrThrow ===

// Module 6437 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6376 from "module_6376" /* 6376 */;
import _mod6423 from "module_6423" /* 6423 */;
import CreateDataProperty from "CreateDataProperty" /* 6438 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6376(arg0)) {
    if (_mod6423(arg1)) {
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