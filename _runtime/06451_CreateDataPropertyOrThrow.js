// _runtime/06451_CreateDataPropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod6390 from "metro/06390__.js";
import _mod6437 from "metro/06437__.js";
import CreateDataProperty from "06452_CreateDataProperty.js";

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6390(arg0)) {
    if (_mod6437(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1308("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
