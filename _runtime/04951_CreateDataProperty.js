// === Module 4951: CreateDataProperty ===

// Module 4951 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4889 from "module_4889" /* 4889 */;
import _mod4936 from "module_4936" /* 4936 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 4952 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4889(arg0)) {
    if (_mod4936(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};