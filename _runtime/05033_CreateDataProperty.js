// _runtime/05033_CreateDataProperty.js
import _mod1282 from "metro/01282__.js";
import _mod4971 from "metro/04971__.js";
import _mod5018 from "metro/05018__.js";
import OrdinaryDefineOwnProperty from "05034_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4971(arg0)) {
    if (_mod5018(arg1)) {
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