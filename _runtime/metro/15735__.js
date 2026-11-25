// === Module 15735: ? ===

// Module 15735
import _mod15684 from "module_15684" /* 15684 */;
import text from "text" /* 15693 */;
import _mod15716 from "module_15716" /* 15716 */;
import _mod15733 from "module_15733" /* 15733 */;
import _mod15736 from "module_15736" /* 15736 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15684) {
  if (_mod15736) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15733(fn);
      const tmp2 = text(arg1);
      _mod15733(value);
      let tmp4 = value;
      if (typeof fn === "function") {
        tmp4 = value;
        if ("prototype" === tmp2) {
          tmp4 = value;
          if ("value" in value) {
            tmp4 = value;
            if (writable in value) {
              tmp4 = value;
              if (!value[writable]) {
                const tmp7 = getOwnPropertyDescriptor(fn, tmp2);
                let tmp8 = tmp7;
                if (tmp7) {
                  tmp8 = tmp7[writable];
                }
                tmp4 = value;
                if (tmp8) {
                  fn[tmp2] = value.value;
                  const obj = { configurable: configurable in value ? value[configurable] : tmp7[configurable], enumerable: enumerable in value ? value[enumerable] : tmp7[enumerable], writable: false };
                }
              }
            }
          }
        }
      }
      return defineProperty(fn, tmp2, tmp4);
    };
  }
  let defineProperty2 = defineProperty;
} else {
  defineProperty2 = function defineProperty(arg0, arg1, value) {
    _mod15733(arg0);
    const tmp2 = text(arg1);
    _mod15733(value);
    if (!_mod15716) {
      if (!("get" in value)) {
        if (!("set" in value)) {
          if ("value" in value) {
            arg0[tmp2] = value.value;
          }
          return arg0;
        }
      }
      const tmp8 = new TypeError("Accessors not supported");
      throw tmp8;
    } else {
      try {
        return defineProperty(arg0, tmp2, value);
      } catch (err) {
      }
    }
  };
}

export const f = defineProperty2;