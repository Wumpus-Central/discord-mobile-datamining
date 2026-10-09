// _runtime/05709_CreateDataPropertyOrThrow.js
import _mod1306 from "metro/01306__.js";
import _mod5648 from "metro/05648__.js";
import _mod5695 from "metro/05695__.js";
import CreateDataProperty from "05710_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5648(arg0)) {
    if (_mod5695(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1306("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1306("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
