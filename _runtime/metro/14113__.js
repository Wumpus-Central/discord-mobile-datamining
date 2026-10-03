// === Module 14113: ? ===

// Module 14113
import _mod14062 from "module_14062" /* 14062 */;
import text from "text" /* 14071 */;
import _mod14094 from "module_14094" /* 14094 */;
import _mod14111 from "module_14111" /* 14111 */;
import _mod14114 from "module_14114" /* 14114 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14062) {
  if (_mod14114) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14111(fn);
      const tmp2 = text(arg1);
      _mod14111(value);
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
    _mod14111(arg0);
    const tmp2 = text(arg1);
    _mod14111(value);
    if (!_mod14094) {
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