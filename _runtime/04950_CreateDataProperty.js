// === Module 4950: CreateDataProperty ===

// Module 4950 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4888 from "module_4888" /* 4888 */;
import _mod4935 from "module_4935" /* 4935 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 4951 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4888(arg0)) {
    if (_mod4935(arg1)) {
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