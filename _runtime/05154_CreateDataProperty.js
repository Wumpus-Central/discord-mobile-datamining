// _runtime/05154_CreateDataProperty.js
import _mod1282 from "metro/01282__.js";
import _mod5092 from "metro/05092__.js";
import _mod5139 from "metro/05139__.js";
import OrdinaryDefineOwnProperty from "05155_OrdinaryDefineOwnProperty.js";


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod5092(arg0)) {
    if (_mod5139(arg1)) {
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