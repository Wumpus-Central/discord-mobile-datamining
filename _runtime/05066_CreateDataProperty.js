// _runtime/05066_CreateDataProperty.js
import _mod1282 from "metro/01282__.js";
import _mod5004 from "metro/05004__.js";
import _mod5051 from "metro/05051__.js";
import OrdinaryDefineOwnProperty from "05067_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5004(arg0)) {
    if (_mod5051(arg1)) {
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