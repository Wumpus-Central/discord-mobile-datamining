// === Module 195: ? ===

// Module 195
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;
import _mod196 from "module_196" /* 196 */;
import define from "define" /* 197 */;

try {
  const _module = _mod196;
  let flag = _module.hasNativeConstructor(function*() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp4) {
        c0 = tmp;
        throw tmp4;
      }
    }
  }, "GeneratorFunction");
  if (!flag) {
    const _module1 = polyfillObjectProperty;
    _module1.polyfillGlobal("regeneratorRuntime", () => {
      delete tmp2[tmp];
      return define;
    });
  }
} catch (err) {
  flag = false;
}