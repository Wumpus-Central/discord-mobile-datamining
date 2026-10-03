// === Module 774: _INTERNAL_clearAiProviderSkips ===

// Module 774 (_INTERNAL_clearAiProviderSkips)
import _mod699 from "module_699" /* 699 */;
import consoleSandbox from "consoleSandbox" /* 700 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const set = new Set();

export const _INTERNAL_clearAiProviderSkips = function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (_mod699.DEBUG_BUILD) {
    const debug = consoleSandbox.debug;
    debug.log("Cleared AI provider skip registrations");
  }
};
export const _INTERNAL_shouldSkipAiProviderWrapping = function _INTERNAL_shouldSkipAiProviderWrapping(arg0) {
  return set.has(arg0);
};
export const _INTERNAL_skipAiProviderWrapping = function _INTERNAL_skipAiProviderWrapping(arr) {
  const item = arr.forEach((item) => {
    set.add(item);
    if (_mod699.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log("AI provider \"" + item + "\" wrapping will be skipped");
    }
  });
};