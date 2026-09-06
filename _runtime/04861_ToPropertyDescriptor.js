// === Module 4861: ToPropertyDescriptor ===

// Module 4861 (ToPropertyDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod1315 from "module_1315" /* 1315 */;
import _mod4809 from "module_4809" /* 4809 */;
import _mod4844 from "module_4844" /* 4844 */;
import ToBoolean from "ToBoolean" /* 4862 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod4809(enumerable)) {
    const obj = {};
    if (_mod1315(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (_mod1315(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (_mod1315(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (_mod1315(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (_mod1315(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod4844(get)) {
          const tmp9 = new _mod1283("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1315(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod4844(set)) {
          const tmp13 = new _mod1283("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1315(obj, "[[Get]]")) {
      const tmp17 = new _mod1283("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1283("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};