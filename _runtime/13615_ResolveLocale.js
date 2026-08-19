// _runtime/13615_ResolveLocale.js
const require = arg1;
const dependencyMap = arg6;
arg5.ResolveLocale = function ResolveLocale(arg0, arg1, localeMatcher, arg3, arg4, fn) {
  let str;
  if ("lookup" === localeMatcher.localeMatcher) {
    const _Array2 = Array;
    let LookupMatcherResult = str(13616).LookupMatcher(Array.from(arg0), arg1, fn);
    let tmp5 = str;
    let tmp7 = str;
  } else {
    const _Array = Array;
    tmp5 = str;
    tmp7 = str;
    LookupMatcherResult = str(13621).BestFitMatcher(Array.from(arg0), arg1, fn);
  }
  if (null == LookupMatcherResult) {
    let obj = { locale: null, extension: "" };
    obj[0] = fn();
    LookupMatcherResult = obj;
  }
  const locale = LookupMatcherResult.locale;
  obj = { locale: "en", dataLocale: locale };
  if (LookupMatcherResult.extension) {
    let keywords = tmp7(13622).UnicodeExtensionComponents(LookupMatcherResult.extension).keywords;
  } else {
    keywords = [];
  }
  const items = [];
  let num = 0;
  if (0 < arg3.length) {
    do {
      str = arg3[num];
      let items1;
      if (null != tmp12) {
        items1 = tmp12[str];
      }
      if (null === items1) {
        items1 = [];
      }
      let tmp14 = str;
      let _Array3 = Array;
      let concat = "keyLocaleData for ".concat;
      let isArray = Array.isArray(items1);
      let invariantResult = str(13617).invariant(isArray, "keyLocaleData for ".concat(str, " must be an array"));
      let first = items1[0];
      let tmp19 = undefined === first;
      if (!tmp19) {
        tmp19 = typeof first === "string";
      }
      let invariantResult1 = str(13617).invariant(tmp19, "value must be a string or undefined");
      let iter = keywords.find((item, index) => item.key === str);
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
            obj1 = { key: null, value: "true" };
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
      let invariantResult2 = tmp14(13617).invariant(tmp24, "optionsValue must be a string or undefined");
      let str3 = tmp23;
      if (typeof tmp23 === "string") {
        let formatted = str.toLowerCase();
        str3 = tmp14(13623).CanonicalizeUValue(formatted, tmp23);
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
      tmp5 = tmp14;
    } while (num < arg3.length);
  }
  let result = locale;
  if (items.length > 0) {
    result = tmp5(13624).InsertUnicodeExtensionAndCanonicalize(locale, [], items);
  }
  obj.locale = result;
  return obj;
};