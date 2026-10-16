// === Module 5930: CreateDataPropertyOrThrow ===

// Module 5930 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5869 from "module_5869" /* 5869 */;
import _mod5916 from "module_5916" /* 5916 */;
import CreateDataProperty from "CreateDataProperty" /* 5931 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5869(arg0)) {
    if (_mod5916(arg1)) {
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