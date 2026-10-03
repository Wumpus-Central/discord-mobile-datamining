// _runtime/05390_CreateDataPropertyOrThrow.js
import _mod1293 from "metro/01293__.js";
import _mod5329 from "metro/05329__.js";
import _mod5376 from "metro/05376__.js";
import CreateDataProperty from "05391_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5329(arg0)) {
    if (_mod5376(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1293("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
