// === Module 6451: CreateDataPropertyOrThrow ===

// Module 6451 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6390 from "module_6390" /* 6390 */;
import _mod6437 from "module_6437" /* 6437 */;
import CreateDataProperty from "CreateDataProperty" /* 6452 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6390(arg0)) {
    if (_mod6437(arg1)) {
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