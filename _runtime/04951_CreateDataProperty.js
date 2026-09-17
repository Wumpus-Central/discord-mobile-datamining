// _runtime/04951_CreateDataProperty.js
import _mod1282 from "metro/01282__.js";
import _mod4889 from "metro/04889__.js";
import _mod4936 from "metro/04936__.js";
import OrdinaryDefineOwnProperty from "04952_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4889(arg0)) {
    if (_mod4936(arg1)) {
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