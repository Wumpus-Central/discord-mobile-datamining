// _runtime/05153_CreateDataPropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5092 from "metro/05092__.js";
import _mod5139 from "metro/05139__.js";
import CreateDataProperty from "05154_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5092(arg0)) {
    if (_mod5139(arg1)) {
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
