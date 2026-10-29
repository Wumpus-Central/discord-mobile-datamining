// _runtime/15991_BestFitMatcher.js
import _mod15987 from "metro/15987__.js";

require = arg1;
const dependencyMap = arg6;

export function BestFitMatcher(arg0, arr, fn) {
  const items = [];
  const reduced = arr.reduce((acc, item) => {
    const replaced = item.replace(_mod15987.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    acc[replaced] = item;
    return acc;
  }, {});
  const findBestMatchResult = items(15987).findBestMatch(items, arg0);
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
    const obj2 = { locale: prop, extension: tmp4 };
    return obj2;
  } else {
    const obj = { locale: fn() };
    return obj;
  }
  tmp3 = findBestMatchResult.matchedSupportedLocale && findBestMatchResult.matchedDesiredLocale;
}
