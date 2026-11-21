// === Module 15592: ? ===

// Module 15592
import _mod15541 from "module_15541" /* 15541 */;
import text from "text" /* 15550 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15590 from "module_15590" /* 15590 */;
import _mod15593 from "module_15593" /* 15593 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15541) {
  if (_mod15593) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15590(fn);
      const tmp2 = text(arg1);
      _mod15590(value);
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
    _mod15590(arg0);
    const tmp2 = text(arg1);
    _mod15590(value);
    if (!_mod15573) {
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