// _runtime/01048_runOnce.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.runOnce = (arg0) => {
  let closure_0 = arg0;
  let c1 = false;
  return () => {
    if (!c1) {
      callback();
      c1 = true;
    }
  };
};