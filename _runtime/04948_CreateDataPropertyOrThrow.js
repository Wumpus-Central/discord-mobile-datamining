// _runtime/04948_CreateDataPropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod4887 from "metro/04887__.js";
import _mod4934 from "metro/04934__.js";
import CreateDataProperty from "04949_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4887(arg0)) {
    if (_mod4934(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1282("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
