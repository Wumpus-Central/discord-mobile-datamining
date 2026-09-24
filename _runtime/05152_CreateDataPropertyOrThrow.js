// === Module 5152: CreateDataPropertyOrThrow ===

// Module 5152 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5091 from "module_5091" /* 5091 */;
import _mod5138 from "module_5138" /* 5138 */;
import CreateDataProperty from "CreateDataProperty" /* 5153 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5091(arg0)) {
    if (_mod5138(arg1)) {
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