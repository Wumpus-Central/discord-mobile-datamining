// === Module 5717: CreateDataPropertyOrThrow ===

// Module 5717 (CreateDataPropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5656 from "module_5656" /* 5656 */;
import _mod5703 from "module_5703" /* 5703 */;
import CreateDataProperty from "CreateDataProperty" /* 5718 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5656(arg0)) {
    if (_mod5703(arg1)) {
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
};