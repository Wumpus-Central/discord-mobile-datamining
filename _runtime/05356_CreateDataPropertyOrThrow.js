// _runtime/05356_CreateDataPropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5295 from "metro/05295__.js";
import _mod5342 from "metro/05342__.js";
import CreateDataProperty from "05357_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5295(arg0)) {
    if (_mod5342(arg1)) {
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
