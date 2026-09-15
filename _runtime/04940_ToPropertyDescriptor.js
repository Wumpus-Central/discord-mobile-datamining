// _runtime/04940_ToPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod1314 from "metro/01314__.js";
import _mod4888 from "metro/04888__.js";
import _mod4923 from "metro/04923__.js";
import ToBoolean from "04941_ToBoolean.js";

export default function ToPropertyDescriptor(enumerable) {
  if (_mod4888(enumerable)) {
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
        if (!_mod4923(get)) {
          const tmp9 = new _mod1282("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1314(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod4923(set)) {
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
