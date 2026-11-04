// _runtime/06659_CreateDataProperty.js
import _mod1293 from "metro/01293__.js";
import _mod6597 from "metro/06597__.js";
import _mod6644 from "metro/06644__.js";
import OrdinaryDefineOwnProperty from "06660_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6597(arg0)) {
    if (_mod6644(arg1)) {
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