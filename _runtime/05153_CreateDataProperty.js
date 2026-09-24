// === Module 5153: CreateDataProperty ===

// Module 5153 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5091 from "module_5091" /* 5091 */;
import _mod5138 from "module_5138" /* 5138 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5154 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5091(arg0)) {
    if (_mod5138(arg1)) {
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