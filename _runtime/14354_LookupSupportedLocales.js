// === Module 14354: LookupSupportedLocales ===

// Module 14354 (LookupSupportedLocales)
import _mod14366 from "module_14366" /* 14366 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14366.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14367").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;