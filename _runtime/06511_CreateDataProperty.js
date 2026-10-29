// _runtime/06511_CreateDataProperty.js
import _mod1305 from "metro/01305__.js";
import _mod6449 from "metro/06449__.js";
import _mod6496 from "metro/06496__.js";
import OrdinaryDefineOwnProperty from "06512_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6449(arg0)) {
    if (_mod6496(arg1)) {
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