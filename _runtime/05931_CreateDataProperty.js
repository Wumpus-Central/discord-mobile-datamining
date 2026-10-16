// === Module 5931: CreateDataProperty ===

// Module 5931 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5869 from "module_5869" /* 5869 */;
import _mod5916 from "module_5916" /* 5916 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5932 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5869(arg0)) {
    if (_mod5916(arg1)) {
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