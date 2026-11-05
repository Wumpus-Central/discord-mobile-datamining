// _runtime/06662_CreateDataProperty.js
import _mod1293 from "metro/01293__.js";
import _mod6600 from "metro/06600__.js";
import _mod6647 from "metro/06647__.js";
import OrdinaryDefineOwnProperty from "06663_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6600(arg0)) {
    if (_mod6647(arg1)) {
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