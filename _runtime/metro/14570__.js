// === Module 14570: ? ===

// Module 14570
import _mod14519 from "module_14519" /* 14519 */;
import text from "text" /* 14528 */;
import _mod14551 from "module_14551" /* 14551 */;
import _mod14568 from "module_14568" /* 14568 */;
import _mod14571 from "module_14571" /* 14571 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14519) {
  if (_mod14571) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14568(fn);
      const tmp2 = text(arg1);
      _mod14568(value);
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
    _mod14568(arg0);
    const tmp2 = text(arg1);
    _mod14568(value);
    if (!_mod14551) {
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