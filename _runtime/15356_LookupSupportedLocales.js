// === Module 15356: LookupSupportedLocales ===

// Module 15356 (LookupSupportedLocales)
import _mod15368 from "module_15368" /* 15368 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod15368.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("module_15369").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;