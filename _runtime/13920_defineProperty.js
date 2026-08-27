// === Module 13920: defineProperty ===

// Module 13920 (defineProperty)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13869 */;
import text from "text" /* 13878 */;
import _mod13901 from "module_13901" /* 13901 */;
import all from "all" /* 13918 */;
import getOwnPropertyDescriptor3 from "getOwnPropertyDescriptor" /* 13921 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (getOwnPropertyDescriptor2) {
  if (getOwnPropertyDescriptor3) {
    defineProperty = function defineProperty(fn, arg1, value) {
      all(fn);
      const tmp2 = text(arg1);
      all(value);
      let tmp4 = value;
      if (typeof fn === "function") {
        tmp4 = value;
        if ("prototype" === tmp2) {
          tmp4 = value;
          if ("value" in value) {
            tmp4 = value;
            if (writable in value) {
              tmp4 = value;
              if (!value[tmp5]) {
                const tmp7 = getOwnPropertyDescriptor(fn, tmp2);
                let tmp8 = tmp7;
                if (tmp7) {
                  tmp8 = tmp7[tmp5];
                }
                tmp4 = value;
                if (tmp8) {
                  fn[tmp2] = value.value;
                  const obj = { configurable: null, enumerable: null, writable: false };
                  obj[0] = configurable in value ? value[configurable] : tmp7[configurable];
                  obj[1] = enumerable in value ? value[enumerable] : tmp7[enumerable];
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
    all(arg0);
    const tmp2 = text(arg1);
    all(value);
    if (!_mod13901) {
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