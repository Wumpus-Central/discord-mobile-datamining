// === Module 5356: CreateDataPropertyOrThrow ===

// Module 5356 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5295 from "module_5295" /* 5295 */;
import _mod5342 from "module_5342" /* 5342 */;
import CreateDataProperty from "CreateDataProperty" /* 5357 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5295(arg0)) {
    if (_mod5342(arg1)) {
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