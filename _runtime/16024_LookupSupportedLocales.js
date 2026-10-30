// _runtime/16024_LookupSupportedLocales.js
import _mod16036 from "metro/16036__.js";

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod16036.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("metro/16037__.js").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
