// _runtime/00913_runOnce.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.runOnce = (arg0) => {
  closure_0 = arg0;
  c1 = false;
  return () => {
    if (!c1) {
      callback();
      c1 = true;
    }
  };
};
