// === Module 14291: LookupSupportedLocales ===

// Module 14291 (LookupSupportedLocales)
import _mod14303 from "module_14303" /* 14303 */;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14303.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("ResolveLocale").ResolveLocale;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;