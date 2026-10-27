// _runtime/06452_CreateDataPropertyOrThrow.js
import _mod1305 from "metro/01305__.js";
import _mod6391 from "metro/06391__.js";
import _mod6438 from "metro/06438__.js";
import CreateDataProperty from "06453_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6391(arg0)) {
    if (_mod6438(arg1)) {
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
