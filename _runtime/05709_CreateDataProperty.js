// _runtime/05709_CreateDataProperty.js
import _mod1305 from "metro/01305__.js";
import _mod5647 from "metro/05647__.js";
import _mod5694 from "metro/05694__.js";
import OrdinaryDefineOwnProperty from "05710_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5647(arg0)) {
    if (_mod5694(arg1)) {
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