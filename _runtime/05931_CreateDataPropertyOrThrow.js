// === Module 5931: CreateDataPropertyOrThrow ===

// Module 5931 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5870 from "module_5870" /* 5870 */;
import _mod5917 from "module_5917" /* 5917 */;
import CreateDataProperty from "CreateDataProperty" /* 5932 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5870(arg0)) {
    if (_mod5917(arg1)) {
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