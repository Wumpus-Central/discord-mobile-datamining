// _runtime/06508_ToPropertyDescriptor.js
import _mod1294 from "metro/01294__.js";
import _mod1326 from "metro/01326__.js";
import _mod6456 from "metro/06456__.js";
import _mod6491 from "metro/06491__.js";
import ToBoolean from "06509_ToBoolean.js";

export default function ToPropertyDescriptor(enumerable) {
  if (_mod6456(enumerable)) {
    const obj = {};
    if (_mod1326(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (_mod1326(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (_mod1326(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (_mod1326(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (_mod1326(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod6491(get)) {
          const tmp9 = new _mod1294("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1326(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod6491(set)) {
          const tmp13 = new _mod1294("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1326(obj, "[[Get]]")) {
      const tmp17 = new _mod1294(
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1294("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
}
