// === Module 6511: CreateDataProperty ===

// Module 6511 (CreateDataProperty)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6449 from "module_6449" /* 6449 */;
import _mod6496 from "module_6496" /* 6496 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6512 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6449(arg0)) {
    if (_mod6496(arg1)) {
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