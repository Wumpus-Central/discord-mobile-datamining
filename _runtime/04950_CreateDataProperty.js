// _runtime/04950_CreateDataProperty.js
import _mod1282 from "metro/01282__.js";
import _mod4888 from "metro/04888__.js";
import _mod4935 from "metro/04935__.js";
import OrdinaryDefineOwnProperty from "04951_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4888(arg0)) {
    if (_mod4935(arg1)) {
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