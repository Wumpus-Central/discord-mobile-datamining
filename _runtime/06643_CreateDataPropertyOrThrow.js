// _runtime/06643_CreateDataPropertyOrThrow.js
import _mod1293 from "metro/01293__.js";
import _mod6582 from "metro/06582__.js";
import _mod6629 from "metro/06629__.js";
import CreateDataProperty from "06644_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6582(arg0)) {
    if (_mod6629(arg1)) {
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
