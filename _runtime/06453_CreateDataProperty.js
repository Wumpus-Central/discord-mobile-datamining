// _runtime/06453_CreateDataProperty.js
import _mod1305 from "metro/01305__.js";
import _mod6391 from "metro/06391__.js";
import _mod6438 from "metro/06438__.js";
import OrdinaryDefineOwnProperty from "06454_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6391(arg0)) {
    if (_mod6438(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};