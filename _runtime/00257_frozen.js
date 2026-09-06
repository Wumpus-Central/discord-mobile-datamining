// === Module 257: frozen ===

// Module 257 (frozen)
const frozen = Object.freeze({ VISIBLE: 1, SUSPENDED: 2, HIDDEN: 3 });

export default frozen;
export const coerceDisplayMode = function coerceDisplayMode(arg0) {
  if (frozen.SUSPENDED === arg0) {
    return tmp.SUSPENDED;
  } else {
    return tmp.HIDDEN === arg0 ? tmp.HIDDEN : tmp.VISIBLE;
  }
};