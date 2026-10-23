// === Module 6450: CreateDataProperty ===

// Module 6450 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6388 from "module_6388" /* 6388 */;
import _mod6435 from "module_6435" /* 6435 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6451 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6388(arg0)) {
    if (_mod6435(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};