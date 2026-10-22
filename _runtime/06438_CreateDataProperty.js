// === Module 6438: CreateDataProperty ===

// Module 6438 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6376 from "module_6376" /* 6376 */;
import _mod6423 from "module_6423" /* 6423 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6439 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6376(arg0)) {
    if (_mod6423(arg1)) {
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