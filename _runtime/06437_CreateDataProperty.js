// === Module 6437: CreateDataProperty ===

// Module 6437 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6375 from "module_6375" /* 6375 */;
import _mod6422 from "module_6422" /* 6422 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6438 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6375(arg0)) {
    if (_mod6422(arg1)) {
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