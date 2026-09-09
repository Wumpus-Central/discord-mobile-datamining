// _runtime/04884_CreateDataPropertyOrThrow.js
import _mod1283 from "metro/01283__.js";
import _mod4823 from "metro/04823__.js";
import _mod4870 from "metro/04870__.js";
import CreateDataProperty from "04885_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4823(arg0)) {
    if (_mod4870(arg1)) {
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
