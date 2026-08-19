// === Module 898: set ===

// Module 898 (set)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 823 */;
import consoleSandbox from "consoleSandbox" /* 824 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const set = new Set();
arg5._INTERNAL_clearAiProviderSkips = function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug = consoleSandbox.debug;
    debug.log("Cleared AI provider skip registrations");
  }
};
arg5._INTERNAL_shouldSkipAiProviderWrapping = function _INTERNAL_shouldSkipAiProviderWrapping(arg0) {
  return set.has(arg0);
};
arg5._INTERNAL_skipAiProviderWrapping = function _INTERNAL_skipAiProviderWrapping(arr) {
  const item = arr.forEach((item, index) => {
    set.add(item);
    if (callback(table[0]).DEBUG_BUILD) {
      const debug = callback(table[1]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("AI provider \"" + item + "\" wrapping will be skipped");
    }
  });
};