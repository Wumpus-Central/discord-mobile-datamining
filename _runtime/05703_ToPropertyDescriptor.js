// === Module 5703: ToPropertyDescriptor ===

// Module 5703 (ToPropertyDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1338 from "module_1338" /* 1338 */;
import _mod5651 from "module_5651" /* 5651 */;
import _mod5686 from "module_5686" /* 5686 */;
import ToBoolean from "ToBoolean" /* 5704 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod5651(enumerable)) {
    const obj = {};
    if (_mod1338(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (_mod1338(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (_mod1338(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (_mod1338(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (_mod1338(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod5686(get)) {
          const tmp9 = new _mod1306("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1338(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod5686(set)) {
          const tmp13 = new _mod1306("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1338(obj, "[[Get]]")) {
      const tmp17 = new _mod1306("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1306("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};