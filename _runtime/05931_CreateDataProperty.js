// _runtime/05931_CreateDataProperty.js
import _mod1308 from "metro/01308__.js";
import _mod5869 from "metro/05869__.js";
import _mod5916 from "metro/05916__.js";
import OrdinaryDefineOwnProperty from "05932_OrdinaryDefineOwnProperty.js";


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