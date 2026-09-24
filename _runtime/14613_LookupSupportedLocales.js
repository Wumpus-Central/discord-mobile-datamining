// === Module 14613: LookupSupportedLocales ===

// Module 14613 (LookupSupportedLocales)
import _mod14625 from "module_14625" /* 14625 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14625.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14626").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;