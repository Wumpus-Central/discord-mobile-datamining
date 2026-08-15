// _runtime/13614_match.js
import { ResolveLocale } from "13615_ResolveLocale.js";
import { CanonicalizeLocaleList } from "13626_CanonicalizeLocaleList.js";
import { LookupSupportedLocales } from "13627_LookupSupportedLocales.js";
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = undefined;
arg5.ResolveLocale = undefined;
arg5.match = function match(arg0, arg1, arg2, algorithm) {
  const _require = arg2;
  const result = _CanonicalizeLocaleList.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return _ResolveLocale.ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
let obj = {
  enumerable: true,
  get() {
    return LookupSupportedLocales.LookupSupportedLocales;
  }
};
Object.defineProperty(arg5, "LookupSupportedLocales", obj);
obj = {
  enumerable: true,
  get() {
    return ResolveLocale.ResolveLocale;
  }
};
Object.defineProperty(arg5, "ResolveLocale", obj);