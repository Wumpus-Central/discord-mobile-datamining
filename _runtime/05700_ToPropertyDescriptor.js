// === Module 5700: ToPropertyDescriptor ===

// Module 5700 (ToPropertyDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1338 from "module_1338" /* 1338 */;
import _mod5648 from "module_5648" /* 5648 */;
import _mod5683 from "module_5683" /* 5683 */;
import ToBoolean from "ToBoolean" /* 5701 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod5648(enumerable)) {
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
        if (!_mod5683(get)) {
          const tmp9 = new _mod1306("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1338(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod5683(set)) {
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