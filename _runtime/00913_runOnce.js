// _runtime/00913_runOnce.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (arg0) => {
  closure_0 = arg0;
  c1 = false;
  return () => {
    if (!c1) {
      closure_0();
      c1 = true;
    }
  };
}