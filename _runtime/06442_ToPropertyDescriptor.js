// === Module 6442: ToPropertyDescriptor ===

// Module 6442 (ToPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1340 from "module_1340" /* 1340 */;
import _mod6390 from "module_6390" /* 6390 */;
import _mod6425 from "module_6425" /* 6425 */;
import ToBoolean from "ToBoolean" /* 6443 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod6390(enumerable)) {
    const obj = {};
    if (_mod1340(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (_mod1340(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (_mod1340(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (_mod1340(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (_mod1340(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod6425(get)) {
          const tmp9 = new _mod1308("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1340(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod6425(set)) {
          const tmp13 = new _mod1308("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1340(obj, "[[Get]]")) {
      const tmp17 = new _mod1308("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1308("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};