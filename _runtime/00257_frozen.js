// === Module 257: frozen ===

// Module 257 (frozen)
const frozen = Object.freeze({ VISIBLE: 1, SUSPENDED: 2, HIDDEN: 3 });
arg5.default = frozen;
arg5.coerceDisplayMode = function coerceDisplayMode(arg0) {
  if (frozen.SUSPENDED === arg0) {
    return frozen.SUSPENDED;
  } else {
    return frozen.HIDDEN === arg0 ? frozen.HIDDEN : frozen.VISIBLE;
  }
};