// _runtime/06436_CreateDataPropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod6375 from "metro/06375__.js";
import _mod6422 from "metro/06422__.js";
import CreateDataProperty from "06437_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6375(arg0)) {
    if (_mod6422(arg1)) {
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
