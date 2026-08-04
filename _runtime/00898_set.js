// _runtime/00898_set.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const set = new Set();
arg5._INTERNAL_clearAiProviderSkips = function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (require(823) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
    const debug = require(824) /* consoleSandbox */.debug;
    debug.log("Cleared AI provider skip registrations");
  }
};
arg5._INTERNAL_shouldSkipAiProviderWrapping = function _INTERNAL_shouldSkipAiProviderWrapping(arg0) {
  return set.has(arg0);
};
arg5._INTERNAL_skipAiProviderWrapping = function _INTERNAL_skipAiProviderWrapping(arr) {
  const item = arr.forEach((arg0) => {
    set.add(arg0);
    if (callback(table[0]).DEBUG_BUILD) {
      const debug = callback(table[1]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("AI provider \"" + arg0 + "\" wrapping will be skipped");
    }
  });
};