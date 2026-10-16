// === Module 15192: LookupSupportedLocales ===

// Module 15192 (LookupSupportedLocales)
import _mod15204 from "module_15204" /* 15204 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod15204.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_15205").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;