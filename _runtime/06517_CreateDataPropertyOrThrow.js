// === Module 6517: CreateDataPropertyOrThrow ===

// Module 6517 (CreateDataPropertyOrThrow)
import _mod1294 from "module_1294" /* 1294 */;
import _mod6456 from "module_6456" /* 6456 */;
import _mod6503 from "module_6503" /* 6503 */;
import CreateDataProperty from "CreateDataProperty" /* 6518 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod1294("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1294("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};