// === Module 5928: CreateDataPropertyOrThrow ===

// Module 5928 (CreateDataPropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5867 from "module_5867" /* 5867 */;
import _mod5914 from "module_5914" /* 5914 */;
import CreateDataProperty from "CreateDataProperty" /* 5929 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5867(arg0)) {
    if (_mod5914(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1306("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1306("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};