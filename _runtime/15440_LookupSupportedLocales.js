// _runtime/15440_LookupSupportedLocales.js
import _mod15452 from "metro/15452__.js";

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod15452.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("metro/15453__.js").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
