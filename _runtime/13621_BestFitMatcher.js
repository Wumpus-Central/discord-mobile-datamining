// === Module 13621: BestFitMatcher ===

// Module 13621 (BestFitMatcher)
const require = arg1;
const dependencyMap = arg6;
arg5.BestFitMatcher = function BestFitMatcher(arg0, arr, fn) {
  const items = [];
  const reduced = arr.reduce((acc, item, index) => {
    const replaced = item.replace(items(dependencyMap[0]).UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    acc[replaced] = item;
    return acc;
  }, {});
  const findBestMatchResult = items(13617).findBestMatch(items, arg0);
  let prop;
  if (tmp3) {
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
    obj[0] = fn();
    return obj;
  }
  tmp3 = findBestMatchResult.matchedSupportedLocale && findBestMatchResult.matchedDesiredLocale;
};