// === Module 14404: ? ===

// Module 14404
import _mod14353 from "module_14353" /* 14353 */;
import text from "text" /* 14362 */;
import _mod14385 from "module_14385" /* 14385 */;
import _mod14402 from "module_14402" /* 14402 */;
import _mod14405 from "module_14405" /* 14405 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14353) {
  if (_mod14405) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14402(fn);
      const tmp2 = text(arg1);
      _mod14402(value);
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
    _mod14402(arg0);
    const tmp2 = text(arg1);
    _mod14402(value);
    if (!_mod14385) {
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