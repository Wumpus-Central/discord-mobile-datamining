// _runtime/06510_CreateDataPropertyOrThrow.js
import _mod1305 from "metro/01305__.js";
import _mod6449 from "metro/06449__.js";
import _mod6496 from "metro/06496__.js";
import CreateDataProperty from "06511_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6449(arg0)) {
    if (_mod6496(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1305("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
