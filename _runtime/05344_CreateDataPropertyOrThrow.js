// === Module 5344: CreateDataPropertyOrThrow ===

// Module 5344 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5283 from "module_5283" /* 5283 */;
import _mod5330 from "module_5330" /* 5330 */;
import CreateDataProperty from "CreateDataProperty" /* 5345 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5283(arg0)) {
    if (_mod5330(arg1)) {
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