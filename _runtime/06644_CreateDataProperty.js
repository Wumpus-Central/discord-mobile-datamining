// _runtime/06644_CreateDataProperty.js
import _mod1293 from "metro/01293__.js";
import _mod6582 from "metro/06582__.js";
import _mod6629 from "metro/06629__.js";
import OrdinaryDefineOwnProperty from "06645_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6582(arg0)) {
    if (_mod6629(arg1)) {
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