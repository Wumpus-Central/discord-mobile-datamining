// === Module 5327: CreateDataProperty ===

// Module 5327 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5265 from "module_5265" /* 5265 */;
import _mod5312 from "module_5312" /* 5312 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5328 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5265(arg0)) {
    if (_mod5312(arg1)) {
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