// === Module 14432: ? ===

// Module 14432
import _mod14381 from "module_14381" /* 14381 */;
import text from "text" /* 14390 */;
import _mod14413 from "module_14413" /* 14413 */;
import _mod14430 from "module_14430" /* 14430 */;
import _mod14433 from "module_14433" /* 14433 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14381) {
  if (_mod14433) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14430(fn);
      const tmp2 = text(arg1);
      _mod14430(value);
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
    _mod14430(arg0);
    const tmp2 = text(arg1);
    _mod14430(value);
    if (!_mod14413) {
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