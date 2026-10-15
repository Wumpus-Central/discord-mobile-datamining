// === Module 5929: CreateDataProperty ===

// Module 5929 (CreateDataProperty)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5867 from "module_5867" /* 5867 */;
import _mod5914 from "module_5914" /* 5914 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5930 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5867(arg0)) {
    if (_mod5914(arg1)) {
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