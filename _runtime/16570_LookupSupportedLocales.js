// === Module 16570: LookupSupportedLocales ===

// Module 16570 (LookupSupportedLocales)
import _mod16582 from "module_16582" /* 16582 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod16582.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("module_16583").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;