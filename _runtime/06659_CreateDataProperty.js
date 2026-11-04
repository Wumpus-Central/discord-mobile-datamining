// === Module 6659: CreateDataProperty ===

// Module 6659 (CreateDataProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6597 from "module_6597" /* 6597 */;
import _mod6644 from "module_6644" /* 6644 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6660 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6597(arg0)) {
    if (_mod6644(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};