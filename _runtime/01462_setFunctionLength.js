// _runtime/01462_setFunctionLength.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import _mod1293 from "metro/01293__.js";
import _mod1294 from "metro/01294__.js";
import hasPropertyDescriptors from "01463_hasPropertyDescriptors.js";
import defineDataProperty from "01464_defineDataProperty.js";

let closure_2 = hasPropertyDescriptors();
let closure_3 = GetIntrinsic("%Math.floor%");

export default function setFunctionLength(fn, num) {
  if (typeof fn !== "function") {
    const self3 = this;
    const self4 = this;
    const tmp21 = new _mod1293("`fn` is not a function");
    throw tmp21;
  } else {
    if (typeof num === "number") {
      if (0 >= 0) {
        if (0 <= 4294967295) {
          if (closure_3(0) === 0) {
            let flag = true;
            let flag2 = true;
            const tmp = arguments.length > 2 && arguments[2];
            if ("length" in fn) {
              flag = true;
              flag2 = true;
              if (_mod1294) {
                const tmp4 = _mod1294(fn, "length");
                let flag3 = true;
                const tmp5 = tmp4 && !tmp4.configurable;
                if (tmp5) {
                  flag3 = false;
                }
                flag = true;
                flag2 = flag3;
                const tmp6 = tmp4 && !tmp4.writable;
                if (tmp6) {
                  flag = false;
                  flag2 = flag3;
                }
              }
            }
            if (!flag2) {
              flag2 = flag;
            }
            if (!flag2) {
              flag2 = !tmp;
            }
            if (flag2) {
              const tmp10 = defineDataProperty;
              if (closure_2) {
                tmp10(fn, "length", 0, true, true);
              } else {
                tmp10(fn, "length", 0);
              }
            }
            return fn;
          }
        }
      }
    }
    const self = this;
    const self2 = this;
    const tmp17 = new _mod1293("`length` must be a positive 32-bit integer");
    throw tmp17;
  }
}
