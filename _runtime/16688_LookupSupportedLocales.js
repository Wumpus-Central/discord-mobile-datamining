// === Module 16688: LookupSupportedLocales ===

// Module 16688 (LookupSupportedLocales)
import _mod16700 from "module_16700" /* 16700 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod16700.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("module_16701").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;