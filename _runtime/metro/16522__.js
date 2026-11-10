// === Module 16522: ? ===

// Module 16522
import _mod16471 from "module_16471" /* 16471 */;
import text from "text" /* 16480 */;
import _mod16503 from "module_16503" /* 16503 */;
import _mod16520 from "module_16520" /* 16520 */;
import _mod16523 from "module_16523" /* 16523 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16471) {
  if (_mod16523) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16520(fn);
      const tmp2 = text(arg1);
      _mod16520(value);
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
    _mod16520(arg0);
    const tmp2 = text(arg1);
    _mod16520(value);
    if (!_mod16503) {
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