// === Module 5141: ToPropertyDescriptor ===

// Module 5141 (ToPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1314 from "module_1314" /* 1314 */;
import _mod5089 from "module_5089" /* 5089 */;
import _mod5124 from "module_5124" /* 5124 */;
import ToBoolean from "ToBoolean" /* 5142 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod5089(enumerable)) {
    const obj = {};
    if (_mod1314(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (_mod1314(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (_mod1314(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (_mod1314(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (_mod1314(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod5124(get)) {
          const tmp9 = new _mod1282("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1314(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod5124(set)) {
          const tmp13 = new _mod1282("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1314(obj, "[[Get]]")) {
      const tmp17 = new _mod1282("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1282("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};