// === Module 5710: CreateDataProperty ===

// Module 5710 (CreateDataProperty)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5648 from "module_5648" /* 5648 */;
import _mod5695 from "module_5695" /* 5695 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5711 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5648(arg0)) {
    if (_mod5695(arg1)) {
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