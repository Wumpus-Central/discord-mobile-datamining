// === Module 4917: CreateDataProperty ===

// Module 4917 (CreateDataProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4855 from "module_4855" /* 4855 */;
import _mod4902 from "module_4902" /* 4902 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 4918 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4855(arg0)) {
    if (_mod4902(arg1)) {
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