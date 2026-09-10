// _runtime/04915_CreateDataPropertyOrThrow.js
import _mod1283 from "metro/01283__.js";
import _mod4854 from "metro/04854__.js";
import _mod4901 from "metro/04901__.js";
import CreateDataProperty from "04916_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4854(arg0)) {
    if (_mod4901(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1283("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1283("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
