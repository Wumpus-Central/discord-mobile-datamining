// === Module 5033: CreateDataProperty ===

// Module 5033 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4971 from "module_4971" /* 4971 */;
import _mod5018 from "module_5018" /* 5018 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5034 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4971(arg0)) {
    if (_mod5018(arg1)) {
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