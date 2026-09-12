// === Module 14439: ? ===

// Module 14439
import _mod14388 from "module_14388" /* 14388 */;
import text from "text" /* 14397 */;
import _mod14420 from "module_14420" /* 14420 */;
import _mod14437 from "module_14437" /* 14437 */;
import _mod14440 from "module_14440" /* 14440 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14388) {
  if (_mod14440) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14437(fn);
      const tmp2 = text(arg1);
      _mod14437(value);
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
    _mod14437(arg0);
    const tmp2 = text(arg1);
    _mod14437(value);
    if (!_mod14420) {
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