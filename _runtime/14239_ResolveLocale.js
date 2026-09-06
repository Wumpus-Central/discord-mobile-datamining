// _runtime/14239_ResolveLocale.js
import LookupMatcher from "14240_LookupMatcher.js";
import _mod14241 from "metro/14241__.js";
import BestFitMatcher from "14245_BestFitMatcher.js";
import CanonicalizeUValue from "14247_CanonicalizeUValue.js";

require = arg1;
const dependencyMap = arg6;

export const ResolveLocale = function ResolveLocale(arg0, arg1, localeMatcher, arg3, arg4, fn) {
  if ("lookup" === localeMatcher.localeMatcher) {
    const _Array2 = Array;
    let LookupMatcherResult = LookupMatcher.LookupMatcher(Array.from(arg0), arg1, fn);
    let tmp5 = require;
    let tmp7 = require;
  } else {
    const _Array = Array;
    tmp5 = require;
    tmp7 = require;
    LookupMatcherResult = BestFitMatcher.BestFitMatcher(Array.from(arg0), arg1, fn);
  }
  if (null == LookupMatcherResult) {
    let obj = { locale: fn(), extension: "" };
    LookupMatcherResult = obj;
  }
  locale = LookupMatcherResult.locale;
  obj = { locale: "en", dataLocale: locale };
  if (LookupMatcherResult.extension) {
    let keywords = tmp7(14246).UnicodeExtensionComponents(LookupMatcherResult.extension).keywords;
  } else {
    keywords = [];
  }
  const items = [];
  let num = 0;
  if (0 < arg3.length) {
    do {
      let str = arg3[num];
      let items1;
      if (null != tmp12) {
        items1 = tmp12[str];
      }
      if (null === items1) {
        items1 = [];
      }
      let _Array3 = Array;
      let concat = "keyLocaleData for ".concat;
      let isArray = Array.isArray(items1);
      let invariantResult = _mod14241.invariant(isArray, "keyLocaleData for ".concat(str, " must be an array"));
      let first = items1[0];
      let tmp19 = undefined === first;
      if (!tmp19) {
        tmp19 = typeof first === "string";
      }
      let invariantResult1 = _mod14241.invariant(tmp19, "value must be a string or undefined");
      let iter = keywords.find((key) => key.key === str);
      let tmp22;
      let str2 = first;
      if (iter) {
        value = iter.value;
        if ("" !== value) {
          str2 = first;
          if (items1.indexOf(value) > -1) {
            let entry = { key: str, value };
            tmp22 = entry;
            str2 = value;
          }
        } else {
          str2 = first;
          if (items1.indexOf("true") > -1) {
            let entry1 = { key: str, value: "true" };
            tmp22 = entry1;
            str2 = "true";
          }
        }
      }
      let tmp23 = localeMatcher[str];
      let tmp24 = null == tmp23;
      if (!tmp24) {
        tmp24 = typeof tmp23 === "string";
      }
      let invariantResult2 = _mod14241.invariant(tmp24, "optionsValue must be a string or undefined");
      let str3 = tmp23;
      if (typeof tmp23 === "string") {
        let formatted = str.toLowerCase();
        str3 = CanonicalizeUValue.CanonicalizeUValue(formatted, tmp23);
        if ("" === str3) {
          str3 = "true";
        }
      }
      let tmp26 = str3 !== str2 && items1.indexOf(str3) > -1;
      if (tmp26) {
        str2 = str3;
      }
      if (tmp22) {
        let arr = items.push(tmp22);
      }
      obj[str] = str2;
      num = num + 1;
      tmp5 = require;
    } while (num < arg3.length);
  }
  let result = locale;
  if (items.length > 0) {
    result = tmp5(14248).InsertUnicodeExtensionAndCanonicalize(locale, [], items);
  }
  obj.locale = result;
  return obj;
};
