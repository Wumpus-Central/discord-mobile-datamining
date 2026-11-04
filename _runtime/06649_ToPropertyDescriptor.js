// === Module 6649: ToPropertyDescriptor ===

// Module 6649 (ToPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1325 from "module_1325" /* 1325 */;
import _mod6597 from "module_6597" /* 6597 */;
import _mod6632 from "module_6632" /* 6632 */;
import ToBoolean from "ToBoolean" /* 6650 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod6597(enumerable)) {
    const obj = {};
    if (_mod1325(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (_mod1325(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (_mod1325(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (_mod1325(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (_mod1325(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod6632(get)) {
          const tmp9 = new _mod1293("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (_mod1325(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod6632(set)) {
          const tmp13 = new _mod1293("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (_mod1325(obj, "[[Get]]")) {
      const tmp17 = new _mod1293("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new _mod1293("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};