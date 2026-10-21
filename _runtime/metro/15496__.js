// === Module 15496: ? ===

// Module 15496
import _mod15445 from "module_15445" /* 15445 */;
import text from "text" /* 15454 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15494 from "module_15494" /* 15494 */;
import _mod15497 from "module_15497" /* 15497 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15445) {
  if (_mod15497) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15494(fn);
      const tmp2 = text(arg1);
      _mod15494(value);
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
    _mod15494(arg0);
    const tmp2 = text(arg1);
    _mod15494(value);
    if (!_mod15477) {
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