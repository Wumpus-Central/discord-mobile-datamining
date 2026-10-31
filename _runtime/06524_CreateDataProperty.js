// _runtime/06524_CreateDataProperty.js
import _mod1293 from "metro/01293__.js";
import _mod6462 from "metro/06462__.js";
import _mod6509 from "metro/06509__.js";
import OrdinaryDefineOwnProperty from "06525_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6462(arg0)) {
    if (_mod6509(arg1)) {
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