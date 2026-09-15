// === Module 4949: CreateDataPropertyOrThrow ===

// Module 4949 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4888 from "module_4888" /* 4888 */;
import _mod4935 from "module_4935" /* 4935 */;
import CreateDataProperty from "CreateDataProperty" /* 4950 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4888(arg0)) {
    if (_mod4935(arg1)) {
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