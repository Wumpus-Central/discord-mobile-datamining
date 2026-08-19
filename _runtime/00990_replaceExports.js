// === Module 990: replaceExports ===

// Module 990 (replaceExports)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.replaceExports = function replaceExports(arg0, arg1, arg2) {
  if (typeof arg0[arg1] === "function") {
    try {
      arg0[arg1] = arg2;
      if (arg0.default === tmp4) {
        try {
          arg0.default = arg2;
        } catch (err) {
          const _Object2 = Object;
          let obj = { value: null, writable: true, configurable: true, enumerable: true };
          obj[0] = tmp;
          Object.defineProperty(tmp2, "default", obj);
        }
      }
    } catch (err) {
      const _Object = Object;
      obj = { value: null, writable: true, configurable: true, enumerable: true };
      obj[0] = tmp;
      Object.defineProperty(tmp2, tmp3, obj);
    }
  }
};