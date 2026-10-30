// _runtime/06517_CreateDataPropertyOrThrow.js
import _mod1294 from "metro/01294__.js";
import _mod6456 from "metro/06456__.js";
import _mod6503 from "metro/06503__.js";
import CreateDataProperty from "06518_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1294("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1294("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
