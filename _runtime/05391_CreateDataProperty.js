// === Module 5391: CreateDataProperty ===

// Module 5391 (CreateDataProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5329 from "module_5329" /* 5329 */;
import _mod5376 from "module_5376" /* 5376 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5392 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5329(arg0)) {
    if (_mod5376(arg1)) {
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