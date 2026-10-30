// _runtime/00762__INTERNAL_clearAiProviderSkips.js
import _mod687 from "metro/00687__.js";
import consoleSandbox from "00688_consoleSandbox.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const set = new Set();

export function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (_mod687.DEBUG_BUILD) {
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
    if (_mod687.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log('AI provider "' + item + '" wrapping will be skipped');
    }
  });
}
