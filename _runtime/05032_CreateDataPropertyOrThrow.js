// === Module 5032: CreateDataPropertyOrThrow ===

// Module 5032 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4971 from "module_4971" /* 4971 */;
import _mod5018 from "module_5018" /* 5018 */;
import CreateDataProperty from "CreateDataProperty" /* 5033 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4971(arg0)) {
    if (_mod5018(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1282("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};