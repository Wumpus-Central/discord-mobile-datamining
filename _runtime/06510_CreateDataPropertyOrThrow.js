// === Module 6510: CreateDataPropertyOrThrow ===

// Module 6510 (CreateDataPropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6449 from "module_6449" /* 6449 */;
import _mod6496 from "module_6496" /* 6496 */;
import CreateDataProperty from "CreateDataProperty" /* 6511 */;


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
};