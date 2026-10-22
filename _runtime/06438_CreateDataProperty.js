// _runtime/06438_CreateDataProperty.js
import _mod1308 from "metro/01308__.js";
import _mod6376 from "metro/06376__.js";
import _mod6423 from "metro/06423__.js";
import OrdinaryDefineOwnProperty from "06439_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod6376(arg0)) {
    if (_mod6423(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};