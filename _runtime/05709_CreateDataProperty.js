// === Module 5709: CreateDataProperty ===

// Module 5709 (CreateDataProperty)
import _mod1305 from "module_1305" /* 1305 */;
import _mod5647 from "module_5647" /* 5647 */;
import _mod5694 from "module_5694" /* 5694 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5710 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5647(arg0)) {
    if (_mod5694(arg1)) {
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