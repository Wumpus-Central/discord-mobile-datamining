// _runtime/13893_match.js
import { ResolveLocale } from "13894_ResolveLocale.js";
import { LookupSupportedLocales } from "13906_LookupSupportedLocales.js";
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = undefined;
arg5.ResolveLocale = undefined;
arg5.match = function match(arg0, arg1, arg2, algorithm) {
  const _require = arg2;
  const result = require("13905_CanonicalizeLocaleList.js").CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("13894_ResolveLocale.js").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0)
    .locale;
};
let obj = {
  enumerable: true,
  get() {
    return LookupSupportedLocales /* LookupSupportedLocales */.LookupSupportedLocales;
  },
};
Object.defineProperty(arg5, "LookupSupportedLocales", obj);
obj = {
  enumerable: true,
  get() {
    return ResolveLocale /* ResolveLocale */.ResolveLocale;
  },
};
Object.defineProperty(arg5, "ResolveLocale", obj);
