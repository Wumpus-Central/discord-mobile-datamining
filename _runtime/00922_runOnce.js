// === Module 922: runOnce ===

// Module 922 (runOnce)
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