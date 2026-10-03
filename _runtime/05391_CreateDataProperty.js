// _runtime/05391_CreateDataProperty.js
import _mod1293 from "metro/01293__.js";
import _mod5329 from "metro/05329__.js";
import _mod5376 from "metro/05376__.js";
import OrdinaryDefineOwnProperty from "05392_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5329(arg0)) {
    if (_mod5376(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};