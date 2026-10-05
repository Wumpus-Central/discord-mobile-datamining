// _runtime/metro/00195__.js
import defineLazyObjectProperty from "../00123_defineLazyObjectProperty.js";
import _mod196 from "00196__.js";
import _mod197 from "00197__.js";

let c0;

let flag;
try {
  const _module = _mod196;
  flag = _module.hasNativeConstructor(function* () {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp3) {
        c0 = 3;
        throw tmp3;
      }
    }
  }, "GeneratorFunction");
} catch (err) {
  flag = false;
}
if (!flag) {
  const _module1 = defineLazyObjectProperty;
  _module1.polyfillGlobal("regeneratorRuntime", () => {
    delete global["regeneratorRuntime"];
    return _mod197;
  });
}
