// _runtime/metro/14354__.js
import _mod14303 from "14303__.js";
import text from "../14312_text.js";
import _mod14335 from "14335__.js";
import _mod14352 from "14352__.js";
import _mod14355 from "14355__.js";

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14303) {
  if (_mod14355) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14352(fn);
      const tmp2 = text(arg1);
      _mod14352(value);
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
                  const obj = {
                    configurable: configurable in value ? value[configurable] : tmp7[configurable],
                    enumerable: enumerable in value ? value[enumerable] : tmp7[enumerable],
                    writable: false,
                  };
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
    _mod14352(arg0);
    const tmp2 = text(arg1);
    _mod14352(value);
    if (!_mod14335) {
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
      } catch (err) {}
    }
  };
}

export const f = defineProperty2;
