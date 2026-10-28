// === Module 6486: CreateDataPropertyOrThrow ===

// Module 6486 (CreateDataPropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6425 from "module_6425" /* 6425 */;
import _mod6472 from "module_6472" /* 6472 */;
import CreateDataProperty from "CreateDataProperty" /* 6487 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6425(arg0)) {
    if (_mod6472(arg1)) {
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