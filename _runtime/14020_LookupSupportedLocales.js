// _runtime/14020_LookupSupportedLocales.js
import _mod14032 from "metro/14032__.js";

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
export const LookupSupportedLocales = require("metro/14033__.js").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
