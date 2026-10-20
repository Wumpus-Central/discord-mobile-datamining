// === Module 6409: CreateDataProperty ===

// Module 6409 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6347 from "module_6347" /* 6347 */;
import _mod6394 from "module_6394" /* 6394 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6410 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6347(arg0)) {
    if (_mod6394(arg1)) {
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