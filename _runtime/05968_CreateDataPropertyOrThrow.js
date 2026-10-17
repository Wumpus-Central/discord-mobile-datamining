// === Module 5968: CreateDataPropertyOrThrow ===

// Module 5968 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5907 from "module_5907" /* 5907 */;
import _mod5954 from "module_5954" /* 5954 */;
import CreateDataProperty from "CreateDataProperty" /* 5969 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5907(arg0)) {
    if (_mod5954(arg1)) {
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