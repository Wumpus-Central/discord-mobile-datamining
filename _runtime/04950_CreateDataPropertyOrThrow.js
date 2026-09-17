// === Module 4950: CreateDataPropertyOrThrow ===

// Module 4950 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4889 from "module_4889" /* 4889 */;
import _mod4936 from "module_4936" /* 4936 */;
import CreateDataProperty from "CreateDataProperty" /* 4951 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4889(arg0)) {
    if (_mod4936(arg1)) {
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