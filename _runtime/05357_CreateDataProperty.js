// _runtime/05357_CreateDataProperty.js
import _mod1282 from "metro/01282__.js";
import _mod5295 from "metro/05295__.js";
import _mod5342 from "metro/05342__.js";
import OrdinaryDefineOwnProperty from "05358_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5295(arg0)) {
    if (_mod5342(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};