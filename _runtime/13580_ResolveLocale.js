// _runtime/13580_ResolveLocale.js
import { LookupMatcher } from "13581_LookupMatcher.js";
import { isMatched } from "13582_isMatched.js";
import { BestFitMatcher } from "13586_BestFitMatcher.js";
let require = arg1;
const dependencyMap = arg6;
arg5.ResolveLocale = function ResolveLocale(arg0, arg1, localeMatcher) {
  let require;
  if ("lookup" === localeMatcher.localeMatcher) {
    const _Array2 = Array;
    let LookupMatcherResult = LookupMatcher.LookupMatcher(Array.from(arg0), arg1, arg5);
    let tmp5 = require;
    let tmp7 = require;
  } else {
    const _Array = Array;
    tmp5 = require;
    tmp7 = require;
    LookupMatcherResult = BestFitMatcher.BestFitMatcher(Array.from(arg0), arg1, arg5);
  }
  if (null == LookupMatcherResult) {
    let obj = { locale: null, extension: "" };
    obj[0] = arg5();
    LookupMatcherResult = obj;
  }
  const locale = LookupMatcherResult.locale;
  obj = { locale: "en", dataLocale: locale };
  if (LookupMatcherResult.extension) {
    let keywords = tmp7(13587).UnicodeExtensionComponents(LookupMatcherResult.extension).keywords;
  } else {
    keywords = [];
  }
  const items = [];
  let num = 0;
  if (0 < arg3.length) {
    do {
      let str = arg3[num];
      require = str;
      let tmp13 = num;
      let items1;
      if (null != tmp12) {
        items1 = tmp12[str];
      }
      if (null === items1) {
        items1 = [];
      }
      let tmp14 = require;
      let tmp15 = dependencyMap;
      let _Array3 = Array;
      let concat = "keyLocaleData for ".concat;
      let isArray = Array.isArray(items1);
      let invariantResult = isMatched.invariant(isArray, "keyLocaleData for ".concat(str, " must be an array"));
      let first = items1[0];
      let tmp19 = undefined === first;
      let tmp20 = items1;
      if (!tmp19) {
        tmp19 = typeof first === "string";
      }
      let invariantResult1 = isMatched.invariant(tmp19, "value must be a string or undefined");
      let iter = keywords.find((key) => key.key === closure_0);
      let tmp22;
      let str2 = first;
      if (iter) {
        let value = iter.value;
        if ("" !== value) {
          str2 = first;
          if (items1.indexOf(value) > -1) {
            obj = { key: null, value: null };
            obj[0] = str;
            obj[1] = value;
            tmp22 = obj;
            str2 = value;
          }
        } else {
          str2 = first;
          if (items1.indexOf("true") > -1) {
            let obj1 = { key: null, value: "true" };
            obj1[0] = str;
            tmp22 = obj1;
            str2 = "true";
          }
        }
      }
      let tmp23 = localeMatcher[str];
      let tmp24 = null == tmp23;
      if (!tmp24) {
        tmp24 = typeof tmp23 === "string";
      }
      let invariantResult2 = tmp14(13582).invariant(tmp24, "optionsValue must be a string or undefined");
      let str3 = tmp23;
      if (typeof tmp23 === "string") {
        let formatted = str.toLowerCase();
        str3 = tmp14(13588).CanonicalizeUValue(formatted, tmp23);
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
      let tmp4 = tmp15;
      tmp5 = tmp14;
    } while (num < arg3.length);
  }
  let result = locale;
  if (items.length > 0) {
    result = tmp5(13589).InsertUnicodeExtensionAndCanonicalize(locale, [], items);
  }
  obj.locale = result;
  return obj;
};