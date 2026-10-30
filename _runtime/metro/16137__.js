// === Module 16137: ? ===

// Module 16137
import _mod16086 from "module_16086" /* 16086 */;
import text from "text" /* 16095 */;
import _mod16118 from "module_16118" /* 16118 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16138 from "module_16138" /* 16138 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16086) {
  if (_mod16138) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16135(fn);
      const tmp2 = text(arg1);
      _mod16135(value);
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
    _mod16135(arg0);
    const tmp2 = text(arg1);
    _mod16135(value);
    if (!_mod16118) {
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