// === Module 6524: CreateDataProperty ===

// Module 6524 (CreateDataProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6509 from "module_6509" /* 6509 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6525 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6462(arg0)) {
    if (_mod6509(arg1)) {
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