// _runtime/00257_frozen.js
const frozen = Object.freeze({ VISIBLE: 1, SUSPENDED: 2, HIDDEN: 3 });
arg5.default = frozen;
arg5.coerceDisplayMode = function coerceDisplayMode(arg0) {
  if (frozen.SUSPENDED === arg0) {
    return tmp.SUSPENDED;
  } else {
    return tmp.HIDDEN === arg0 ? tmp.HIDDEN : tmp.VISIBLE;
  }
};
