// === Module 6487: CreateDataProperty ===

// Module 6487 (CreateDataProperty)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6425 from "module_6425" /* 6425 */;
import _mod6472 from "module_6472" /* 6472 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6488 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6425(arg0)) {
    if (_mod6472(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};