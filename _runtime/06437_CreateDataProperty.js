// _runtime/06437_CreateDataProperty.js
import _mod1308 from "metro/01308__.js";
import _mod6375 from "metro/06375__.js";
import _mod6422 from "metro/06422__.js";
import OrdinaryDefineOwnProperty from "06438_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6375(arg0)) {
    if (_mod6422(arg1)) {
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