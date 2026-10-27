// === Module 6443: ToPropertyDescriptor ===

// Module 6443 (ToPropertyDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1337 from "module_1337" /* 1337 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6426 from "module_6426" /* 6426 */;
import ToBoolean from "ToBoolean" /* 6444 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod6391(enumerable)) {
    const obj = {};
    if (_mod1337(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (_mod1337(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (_mod1337(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (_mod1337(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (_mod1337(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod6426(get)) {
          const tmp9 = new _mod1305("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1337(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod6426(set)) {
          const tmp13 = new _mod1305("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1337(obj, "[[Get]]")) {
      const tmp17 = new _mod1305("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1305("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};