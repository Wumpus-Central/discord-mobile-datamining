// _runtime/05703_ToPropertyDescriptor.js
import _mod1306 from "metro/01306__.js";
import _mod1338 from "metro/01338__.js";
import _mod5651 from "metro/05651__.js";
import _mod5686 from "metro/05686__.js";
import ToBoolean from "05704_ToBoolean.js";

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
      const tmp17 = new _mod1306(
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1306("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
}
