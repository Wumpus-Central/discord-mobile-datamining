// _runtime/05151_CreateDataProperty.js
import _mod1282 from "metro/01282__.js";
import _mod5089 from "metro/05089__.js";
import _mod5136 from "metro/05136__.js";
import OrdinaryDefineOwnProperty from "05152_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5089(arg0)) {
    if (_mod5136(arg1)) {
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