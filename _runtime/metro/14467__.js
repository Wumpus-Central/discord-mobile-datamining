// === Module 14467: ? ===

// Module 14467
import _mod14416 from "module_14416" /* 14416 */;
import text from "text" /* 14425 */;
import _mod14448 from "module_14448" /* 14448 */;
import _mod14465 from "module_14465" /* 14465 */;
import _mod14468 from "module_14468" /* 14468 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14416) {
  if (_mod14468) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14465(fn);
      const tmp2 = text(arg1);
      _mod14465(value);
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
    _mod14465(arg0);
    const tmp2 = text(arg1);
    _mod14465(value);
    if (!_mod14448) {
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