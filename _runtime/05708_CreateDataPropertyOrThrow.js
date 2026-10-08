// === Module 5708: CreateDataPropertyOrThrow ===

// Module 5708 (CreateDataPropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import _mod5647 from "module_5647" /* 5647 */;
import _mod5694 from "module_5694" /* 5694 */;
import CreateDataProperty from "CreateDataProperty" /* 5709 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5647(arg0)) {
    if (_mod5694(arg1)) {
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