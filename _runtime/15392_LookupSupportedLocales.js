// === Module 15392: LookupSupportedLocales ===

// Module 15392 (LookupSupportedLocales)
import _mod15404 from "module_15404" /* 15404 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod15404.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("module_15405").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;