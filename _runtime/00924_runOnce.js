// === Module 924: runOnce ===

// Module 924 (runOnce)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const runOnce = (fn) => {
  let closure_0 = fn;
  let c1 = false;
  return () => {
    const tmp = c1;
    if (!tmp) {
      fn();
      c1 = true;
    }
  };
};