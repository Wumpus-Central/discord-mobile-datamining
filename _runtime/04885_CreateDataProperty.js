// _runtime/04885_CreateDataProperty.js
import _mod1283 from "metro/01283__.js";
import _mod4823 from "metro/04823__.js";
import _mod4870 from "metro/04870__.js";
import OrdinaryDefineOwnProperty from "04886_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4823(arg0)) {
    if (_mod4870(arg1)) {
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