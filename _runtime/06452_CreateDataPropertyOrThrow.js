// === Module 6452: CreateDataPropertyOrThrow ===

// Module 6452 (CreateDataPropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6438 from "module_6438" /* 6438 */;
import CreateDataProperty from "CreateDataProperty" /* 6453 */;


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
};