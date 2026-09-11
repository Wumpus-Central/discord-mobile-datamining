// _runtime/04917_CreateDataProperty.js
import _mod1283 from "metro/01283__.js";
import _mod4855 from "metro/04855__.js";
import _mod4902 from "metro/04902__.js";
import OrdinaryDefineOwnProperty from "04918_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4855(arg0)) {
    if (_mod4902(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1283("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};