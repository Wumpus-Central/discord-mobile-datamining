// === Module 5151: CreateDataProperty ===

// Module 5151 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5089 from "module_5089" /* 5089 */;
import _mod5136 from "module_5136" /* 5136 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5152 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5089(arg0)) {
    if (_mod5136(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};