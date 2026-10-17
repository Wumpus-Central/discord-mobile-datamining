// === Module 5969: CreateDataProperty ===

// Module 5969 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5907 from "module_5907" /* 5907 */;
import _mod5954 from "module_5954" /* 5954 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5970 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5907(arg0)) {
    if (_mod5954(arg1)) {
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