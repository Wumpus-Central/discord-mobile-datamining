// === Module 14020: LookupSupportedLocales ===

// Module 14020 (LookupSupportedLocales)
import _mod14032 from "module_14032" /* 14032 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14032.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  const obj = { localeMatcher: str };
  return ResolveLocale(arg1, result, obj, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14033").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;