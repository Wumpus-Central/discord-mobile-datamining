// _runtime/06406_CreateDataProperty.js
import _mod1308 from "metro/01308__.js";
import _mod6344 from "metro/06344__.js";
import _mod6391 from "metro/06391__.js";
import OrdinaryDefineOwnProperty from "06407_OrdinaryDefineOwnProperty.js";


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