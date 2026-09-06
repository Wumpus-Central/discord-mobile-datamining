// === Module 4871: CreateDataProperty ===

// Module 4871 (CreateDataProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4809 from "module_4809" /* 4809 */;
import _mod4856 from "module_4856" /* 4856 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 4872 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4809(arg0)) {
    if (_mod4856(arg1)) {
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