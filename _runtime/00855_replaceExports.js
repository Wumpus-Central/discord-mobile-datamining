// === Module 855: replaceExports ===

// Module 855 (replaceExports)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const replaceExports = function replaceExports(arg0, arg1, arg2) {
  if (typeof arg0[arg1] === "function") {
    try {
      arg0[arg1] = arg2;
      if (arg0.default === tmp4) {
        try {
          arg0.default = arg2;
        } catch (err) {
          const _Object2 = Object;
          let obj = { value: tmp, writable: true, configurable: true, enumerable: true };
          Object.defineProperty(tmp2, "default", obj);
        }
      }
    } catch (err) {
      const _Object = Object;
      obj = { value: tmp, writable: true, configurable: true, enumerable: true };
      Object.defineProperty(tmp2, tmp3, obj);
    }
  }
};