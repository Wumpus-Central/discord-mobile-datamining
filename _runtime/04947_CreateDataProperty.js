// === Module 4947: CreateDataProperty ===

// Module 4947 (CreateDataProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4885 from "module_4885" /* 4885 */;
import _mod4932 from "module_4932" /* 4932 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 4948 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4885(arg0)) {
    if (_mod4932(arg1)) {
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