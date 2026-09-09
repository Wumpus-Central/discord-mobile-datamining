// === Module 4885: CreateDataProperty ===

// Module 4885 (CreateDataProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4823 from "module_4823" /* 4823 */;
import _mod4870 from "module_4870" /* 4870 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 4886 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4823(arg0)) {
    if (_mod4870(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1283("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};