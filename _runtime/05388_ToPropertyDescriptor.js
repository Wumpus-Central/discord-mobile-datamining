// _runtime/05388_ToPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import bind from "01325_bind.js";
import isObject from "05336_isObject.js";
import _mod5371 from "metro/05371__.js";
import ToBoolean from "05389_ToBoolean.js";

export default function ToPropertyDescriptor(enumerable) {
  if (isObject(enumerable)) {
    const obj = {};
    if (bind(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (bind(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (bind(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (bind(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (bind(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod5371(get)) {
          const self3 = this;
          const self4 = this;
          const tmp5 = new _mod1293("getter must be a function");
          throw tmp5;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (bind(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod5371(enumerable.set)) {
          const self5 = this;
          const self6 = this;
          const tmp7 = new _mod1293("setter must be a function");
          throw tmp7;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (bind(obj, "[[Get]]")) {
      const self7 = this;
      const self8 = this;
      const tmp9 = new _mod1293(
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
      throw tmp9;
    }
    return obj;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("ToPropertyDescriptor requires an object");
    throw tmp3;
  }
}
