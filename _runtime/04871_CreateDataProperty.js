// _runtime/04871_CreateDataProperty.js
import _mod1283 from "metro/01283__.js";
import _mod4809 from "metro/04809__.js";
import _mod4856 from "metro/04856__.js";
import OrdinaryDefineOwnProperty from "04872_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4809(arg0)) {
    if (_mod4856(arg1)) {
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