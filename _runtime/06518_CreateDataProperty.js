// === Module 6518: CreateDataProperty ===

// Module 6518 (CreateDataProperty)
import _mod1294 from "module_1294" /* 1294 */;
import _mod6456 from "module_6456" /* 6456 */;
import _mod6503 from "module_6503" /* 6503 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6519 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1294("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};