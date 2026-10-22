// _runtime/06428_ToPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod1340 from "metro/01340__.js";
import _mod6376 from "metro/06376__.js";
import _mod6411 from "metro/06411__.js";
import ToBoolean from "06429_ToBoolean.js";

export default function ToPropertyDescriptor(enumerable) {
  if (_mod6376(enumerable)) {
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
        if (!_mod6411(get)) {
          const tmp9 = new _mod1308("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1340(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod6411(set)) {
          const tmp13 = new _mod1308("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1340(obj, "[[Get]]")) {
      const tmp17 = new _mod1308(
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1308("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
}
