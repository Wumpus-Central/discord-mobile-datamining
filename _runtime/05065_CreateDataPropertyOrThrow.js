// === Module 5065: CreateDataPropertyOrThrow ===

// Module 5065 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5004 from "module_5004" /* 5004 */;
import _mod5051 from "module_5051" /* 5051 */;
import CreateDataProperty from "CreateDataProperty" /* 5066 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5004(arg0)) {
    if (_mod5051(arg1)) {
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