// === Module 5067: CreateDataProperty ===

// Module 5067 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5005 from "module_5005" /* 5005 */;
import _mod5052 from "module_5052" /* 5052 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5068 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5005(arg0)) {
    if (_mod5052(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};