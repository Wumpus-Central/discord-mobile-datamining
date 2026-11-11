// === Module 16683: ? ===

// Module 16683
import _mod16632 from "module_16632" /* 16632 */;
import text from "text" /* 16641 */;
import _mod16664 from "module_16664" /* 16664 */;
import _mod16681 from "module_16681" /* 16681 */;
import _mod16684 from "module_16684" /* 16684 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16632) {
  if (_mod16684) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16681(fn);
      const tmp2 = text(arg1);
      _mod16681(value);
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
    _mod16681(arg0);
    const tmp2 = text(arg1);
    _mod16681(value);
    if (!_mod16664) {
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