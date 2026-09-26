// === Module 13843: ? ===

// Module 13843
import _mod13792 from "module_13792" /* 13792 */;
import text from "text" /* 13801 */;
import _mod13824 from "module_13824" /* 13824 */;
import _mod13841 from "module_13841" /* 13841 */;
import _mod13844 from "module_13844" /* 13844 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod13792) {
  if (_mod13844) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod13841(fn);
      const tmp2 = text(arg1);
      _mod13841(value);
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
    _mod13841(arg0);
    const tmp2 = text(arg1);
    _mod13841(value);
    if (!_mod13824) {
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