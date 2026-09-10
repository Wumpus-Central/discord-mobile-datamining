// === Module 14428: ? ===

// Module 14428
import _mod14377 from "module_14377" /* 14377 */;
import text from "text" /* 14386 */;
import _mod14409 from "module_14409" /* 14409 */;
import _mod14426 from "module_14426" /* 14426 */;
import _mod14429 from "module_14429" /* 14429 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14377) {
  if (_mod14429) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14426(fn);
      const tmp2 = text(arg1);
      _mod14426(value);
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
    _mod14426(arg0);
    const tmp2 = text(arg1);
    _mod14426(value);
    if (!_mod14409) {
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