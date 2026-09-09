// === Module 14379: ? ===

// Module 14379
import _mod14328 from "module_14328" /* 14328 */;
import text from "text" /* 14337 */;
import _mod14360 from "module_14360" /* 14360 */;
import _mod14377 from "module_14377" /* 14377 */;
import _mod14380 from "module_14380" /* 14380 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14328) {
  if (_mod14380) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14377(fn);
      const tmp2 = text(arg1);
      _mod14377(value);
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
    _mod14377(arg0);
    const tmp2 = text(arg1);
    _mod14377(value);
    if (!_mod14360) {
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