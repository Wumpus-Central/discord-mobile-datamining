// _runtime/10174_repeatedTimeunitPattern.js

export const repeatedTimeunitPattern = function repeatedTimeunitPattern(arg0, combined, arg2) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "\\s{0,5},?\\s{0,5}";
  }
  const replaced = combined.replace(/\((?!\?)/g, "(?:");
  return "" + arg0 + replaced + "(?:" + str + replaced + "){0,10}";
};
export const extractTerms = function extractTerms(arr) {
  if (arr instanceof Array) {
    const items = [];
    HermesBuiltin.arraySpread(items, arr, 0);
    arr = items;
  } else {
    const _Map = Map;
    if (arr instanceof Map) {
      const _Array = Array;
      arr = Array.from(arr.keys());
    } else {
      const _Object = Object;
      arr = Object.keys(arr);
    }
  }
  return arr;
};
export const matchAnyPattern = function matchAnyPattern(MONTH_DICTIONARY) {
  let arr;
  if (MONTH_DICTIONARY instanceof Array) {
    const items = [];
    HermesBuiltin.arraySpread(items, MONTH_DICTIONARY, 0);
    arr = items;
  } else {
    const _Map = Map;
    if (MONTH_DICTIONARY instanceof Map) {
      const _Array = Array;
      arr = Array.from(MONTH_DICTIONARY.keys());
    } else {
      const _Object = Object;
      arr = Object.keys(MONTH_DICTIONARY);
    }
  }
  const sorted = arr.sort((arg0, arg1) => arg1.length - arg0.length);
  const str = sorted.join("|");
  return "(?:" + str.replace(/\./g, "\\.") + ")";
};
