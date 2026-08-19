// === Module 4443: ToPropertyDescriptor ===

// Module 4443 (ToPropertyDescriptor)
import _mod541 from "module_541" /* 541 */;
import bind from "bind" /* 573 */;
import isObject from "isObject" /* 4391 */;
import apply from "apply" /* 4426 */;
import ToBoolean from "ToBoolean" /* 4444 */;


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
        if (!apply(get)) {
          const tmp9 = new _mod541("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (bind(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!apply(set)) {
          const tmp13 = new _mod541("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (bind(obj, "[[Get]]")) {
      const tmp17 = new _mod541("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod541("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};