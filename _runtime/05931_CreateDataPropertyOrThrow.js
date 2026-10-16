// _runtime/05931_CreateDataPropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod5870 from "metro/05870__.js";
import _mod5917 from "metro/05917__.js";
import CreateDataProperty from "05932_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5870(arg0)) {
    if (_mod5917(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1308("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
