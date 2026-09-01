// _runtime/04814_ToPropertyDescriptor.js
import isObject from "04762_isObject.js";

export default function ToPropertyDescriptor(enumerable) {
  if (isObject(enumerable)) {
    const obj = {};
    if (tmp(573)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(4815)(enumerable.enumerable);
    }
    if (tmp(573)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(4815)(enumerable.configurable);
    }
    if (tmp(573)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(573)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(4815)(enumerable.writable);
    }
    if (tmp(573)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(4797)(get)) {
          const tmp9 = new tmp(541)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(573)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(4797)(set)) {
          const tmp13 = new tmp(541)("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (tmp(573)(obj, "[[Get]]")) {
      const tmp17 = new tmp(541)(
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new tmp(541)("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
}
