// === Module 15635: ? ===

// Module 15635
import _mod15584 from "module_15584" /* 15584 */;
import text from "text" /* 15593 */;
import _mod15616 from "module_15616" /* 15616 */;
import _mod15633 from "module_15633" /* 15633 */;
import _mod15636 from "module_15636" /* 15636 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15584) {
  if (_mod15636) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15633(fn);
      const tmp2 = text(arg1);
      _mod15633(value);
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
    _mod15633(arg0);
    const tmp2 = text(arg1);
    _mod15633(value);
    if (!_mod15616) {
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