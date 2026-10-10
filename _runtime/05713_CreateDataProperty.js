// === Module 5713: CreateDataProperty ===

// Module 5713 (CreateDataProperty)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5651 from "module_5651" /* 5651 */;
import _mod5698 from "module_5698" /* 5698 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5714 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5651(arg0)) {
    if (_mod5698(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1306("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};