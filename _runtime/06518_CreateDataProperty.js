// _runtime/06518_CreateDataProperty.js
import _mod1294 from "metro/01294__.js";
import _mod6456 from "metro/06456__.js";
import _mod6503 from "metro/06503__.js";
import OrdinaryDefineOwnProperty from "06519_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1294("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};