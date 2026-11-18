// === Module 762: _INTERNAL_clearAiProviderSkips ===

// Module 762 (_INTERNAL_clearAiProviderSkips)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const set = new Set();

export function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug = consoleSandbox.debug;
    debug.log("Cleared AI provider skip registrations");
  }
}
export function _INTERNAL_shouldSkipAiProviderWrapping(arg0) {
  return set.has(arg0);
}
export function _INTERNAL_skipAiProviderWrapping(arr) {
  const item = arr.forEach((item) => {
    set.add(item);
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log("AI provider \"" + item + "\" wrapping will be skipped");
    }
  });
}