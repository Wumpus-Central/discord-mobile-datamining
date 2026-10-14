// _runtime/05718_CreateDataProperty.js
import _mod1306 from "metro/01306__.js";
import _mod5656 from "metro/05656__.js";
import _mod5703 from "metro/05703__.js";
import OrdinaryDefineOwnProperty from "05719_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5656(arg0)) {
    if (_mod5703(arg1)) {
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