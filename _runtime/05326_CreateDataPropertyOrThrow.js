// _runtime/05326_CreateDataPropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5265 from "metro/05265__.js";
import _mod5312 from "metro/05312__.js";
import CreateDataProperty from "05327_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5265(arg0)) {
    if (_mod5312(arg1)) {
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
