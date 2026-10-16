// === Module 5932: CreateDataProperty ===

// Module 5932 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5870 from "module_5870" /* 5870 */;
import _mod5917 from "module_5917" /* 5917 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5933 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5870(arg0)) {
    if (_mod5917(arg1)) {
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