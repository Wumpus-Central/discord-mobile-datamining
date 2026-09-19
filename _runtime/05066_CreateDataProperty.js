// === Module 5066: CreateDataProperty ===

// Module 5066 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5004 from "module_5004" /* 5004 */;
import _mod5051 from "module_5051" /* 5051 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5067 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5004(arg0)) {
    if (_mod5051(arg1)) {
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