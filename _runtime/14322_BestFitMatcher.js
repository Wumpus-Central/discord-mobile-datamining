// _runtime/14322_BestFitMatcher.js
import _mod14318 from "metro/14318__.js";

require = arg1;
const dependencyMap = arg6;

export const BestFitMatcher = function BestFitMatcher(arg0, arr, fn) {
  const items = [];
  const reduced = arr.reduce((acc, item) => {
    const replaced = item.replace(_mod14318.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    acc[replaced] = item;
    return acc;
  }, {});
  const findBestMatchResult = items(14318).findBestMatch(items, arg0);
  let prop;
  if (tmp3) {
    const tmp6 =
      reduced[findBestMatchResult.matchedDesiredLocale].slice(findBestMatchResult.matchedDesiredLocale.length) ||
      undefined;
    prop = findBestMatchResult.matchedSupportedLocale;
    const tmp4 =
      reduced[findBestMatchResult.matchedDesiredLocale].slice(findBestMatchResult.matchedDesiredLocale.length) ||
      undefined;
  }
  if (prop) {
    let obj = { locale: prop, extension: tmp4 };
    return obj;
  } else {
    obj = { locale: fn() };
    return obj;
  }
  tmp3 = findBestMatchResult.matchedSupportedLocale && findBestMatchResult.matchedDesiredLocale;
};
