// === Module 5398: CreateDataProperty ===

// Module 5398 (CreateDataProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5336 from "module_5336" /* 5336 */;
import _mod5383 from "module_5383" /* 5383 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5399 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5336(arg0)) {
    if (_mod5383(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};