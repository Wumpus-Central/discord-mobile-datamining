// === Module 13867: BestFitMatcher ===

// Module 13867 (BestFitMatcher)
const require = arg1;
const dependencyMap = arg6;
arg5.BestFitMatcher = function BestFitMatcher(arg0, arr) {
  const items = [];
  const reduced = arr.reduce((arg0, str) => {
    const replaced = str.replace(items(closure_1_1[0]).UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    arg0[replaced] = str;
    return arg0;
  }, {});
  const findBestMatchResult = items(13863).findBestMatch(items, arg0);
  let prop;
  if (tmp3) {
    const arr2 = reduced[findBestMatchResult.matchedDesiredLocale];
    const tmp6 = reduced[findBestMatchResult.matchedDesiredLocale].slice(findBestMatchResult.matchedDesiredLocale.length) || undefined;
    prop = findBestMatchResult.matchedSupportedLocale;
    const tmp4 = reduced[findBestMatchResult.matchedDesiredLocale].slice(findBestMatchResult.matchedDesiredLocale.length) || undefined;
  }
  if (prop) {
    let obj = { locale: null, extension: null };
    obj[0] = prop;
    obj[1] = tmp4;
    return obj;
  } else {
    obj = { locale: null };
    obj[0] = arg2();
    return obj;
  }
  tmp3 = findBestMatchResult.matchedSupportedLocale && findBestMatchResult.matchedDesiredLocale;
};