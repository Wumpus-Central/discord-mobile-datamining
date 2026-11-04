// === Module 16427: ? ===

// Module 16427
import _mod16376 from "module_16376" /* 16376 */;
import text from "text" /* 16385 */;
import _mod16408 from "module_16408" /* 16408 */;
import _mod16425 from "module_16425" /* 16425 */;
import _mod16428 from "module_16428" /* 16428 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16376) {
  if (_mod16428) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16425(fn);
      const tmp2 = text(arg1);
      _mod16425(value);
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
    _mod16425(arg0);
    const tmp2 = text(arg1);
    _mod16425(value);
    if (!_mod16408) {
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