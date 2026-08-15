// _runtime/metro/00195__.js
import { define } from "../00197_define.js";
try {
  const _module = require("isNativeFunction");
  let flag = _module.hasNativeConstructor(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp4) {
        c0 = tmp;
        throw tmp4;
      }
    }
  }, "GeneratorFunction");
  if (!flag) {
    const _module1 = require("polyfillObjectProperty");
    _module1.polyfillGlobal("regeneratorRuntime", () => {
      delete tmp2[tmp];
      return define;
    });
  }
} catch (err) {
  flag = false;
}