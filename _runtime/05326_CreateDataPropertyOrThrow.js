// === Module 5326: CreateDataPropertyOrThrow ===

// Module 5326 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5265 from "module_5265" /* 5265 */;
import _mod5312 from "module_5312" /* 5312 */;
import CreateDataProperty from "CreateDataProperty" /* 5327 */;


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
};