// === Module 6436: CreateDataPropertyOrThrow ===

// Module 6436 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6375 from "module_6375" /* 6375 */;
import _mod6422 from "module_6422" /* 6422 */;
import CreateDataProperty from "CreateDataProperty" /* 6437 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6375(arg0)) {
    if (_mod6422(arg1)) {
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