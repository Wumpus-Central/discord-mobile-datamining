// _runtime/06658_CreateDataPropertyOrThrow.js
import _mod1293 from "metro/01293__.js";
import _mod6597 from "metro/06597__.js";
import _mod6644 from "metro/06644__.js";
import CreateDataProperty from "06659_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6597(arg0)) {
    if (_mod6644(arg1)) {
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
