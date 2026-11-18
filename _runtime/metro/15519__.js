// === Module 15519: ? ===

// Module 15519
import _mod15468 from "module_15468" /* 15468 */;
import text from "text" /* 15477 */;
import _mod15500 from "module_15500" /* 15500 */;
import _mod15517 from "module_15517" /* 15517 */;
import _mod15520 from "module_15520" /* 15520 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15468) {
  if (_mod15520) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15517(fn);
      const tmp2 = text(arg1);
      _mod15517(value);
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
    _mod15517(arg0);
    const tmp2 = text(arg1);
    _mod15517(value);
    if (!_mod15500) {
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