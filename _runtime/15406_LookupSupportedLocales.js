// === Module 15406: LookupSupportedLocales ===

// Module 15406 (LookupSupportedLocales)
import _mod15418 from "module_15418" /* 15418 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod15418.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("module_15419").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;