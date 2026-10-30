// _runtime/00910_runOnce.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (fn) => {
  closure_0 = fn;
  c1 = false;
  return () => {
    if (!c1) {
      closure_0();
      c1 = true;
    }
  };
}