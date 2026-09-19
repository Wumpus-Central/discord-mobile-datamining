// _runtime/05056_ToPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod1314 from "metro/01314__.js";
import _mod5004 from "metro/05004__.js";
import _mod5039 from "metro/05039__.js";
import ToBoolean from "05057_ToBoolean.js";

export default function ToPropertyDescriptor(enumerable) {
  if (_mod5004(enumerable)) {
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
        if (!_mod5039(get)) {
          const tmp9 = new _mod1282("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1314(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod5039(set)) {
          const tmp13 = new _mod1282("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1314(obj, "[[Get]]")) {
      const tmp17 = new _mod1282(
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1282("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
}
