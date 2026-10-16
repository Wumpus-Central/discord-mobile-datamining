// === Module 15305: ? ===

// Module 15305
import _mod15254 from "module_15254" /* 15254 */;
import text from "text" /* 15263 */;
import _mod15286 from "module_15286" /* 15286 */;
import _mod15303 from "module_15303" /* 15303 */;
import _mod15306 from "module_15306" /* 15306 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15254) {
  if (_mod15306) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15303(fn);
      const tmp2 = text(arg1);
      _mod15303(value);
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
    _mod15303(arg0);
    const tmp2 = text(arg1);
    _mod15303(value);
    if (!_mod15286) {
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