// === Module 14531: BestFitMatcher ===

// Module 14531 (BestFitMatcher)
import _mod14527 from "module_14527" /* 14527 */;

require = arg1;
const dependencyMap = arg6;

export const BestFitMatcher = function BestFitMatcher(arg0, arr, fn) {
  const items = [];
  const reduced = arr.reduce((acc, item) => {
    const replaced = item.replace(_mod14527.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    acc[replaced] = item;
    return acc;
  }, {});
  const findBestMatchResult = items(14527).findBestMatch(items, arg0);
  let prop;
  if (tmp3) {
    const tmp6 = reduced[findBestMatchResult.matchedDesiredLocale].slice(findBestMatchResult.matchedDesiredLocale.length) || undefined;
    prop = findBestMatchResult.matchedSupportedLocale;
    const tmp4 = reduced[findBestMatchResult.matchedDesiredLocale].slice(findBestMatchResult.matchedDesiredLocale.length) || undefined;
  }
  if (prop) {
    const obj2 = { locale: prop, extension: tmp4 };
    return obj2;
  } else {
    const obj = { locale: fn() };
    return obj;
  }
  tmp3 = findBestMatchResult.matchedSupportedLocale && findBestMatchResult.matchedDesiredLocale;
};