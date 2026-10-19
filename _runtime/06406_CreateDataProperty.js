// === Module 6406: CreateDataProperty ===

// Module 6406 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6344 from "module_6344" /* 6344 */;
import _mod6391 from "module_6391" /* 6391 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6407 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6344(arg0)) {
    if (_mod6391(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};