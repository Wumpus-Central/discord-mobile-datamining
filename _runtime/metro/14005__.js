// === Module 14005: ? ===

// Module 14005
import _mod1172 from "module_1172" /* 1172 */;
import data from "data" /* 14006 */;
import regions from "regions" /* 14007 */;

let obj3;

function isMatched(region, str, arg2) {
  let arr;
  let tmp2;
  let tmp3;
  let tmp4;
  const parts = str.split("-");
  [tmp2, tmp3, arr] = parts;
  if (arr) {
    if ("$" === arr[0]) {
      let arr2;
      const slice = arr.slice;
      if ("!" !== arr[1]) {
        arr2 = arg2[slice(arr, 1)];
      } else {
        arr2 = arg2[slice(arr, 2)];
      }
      const mapped = arr2.map((item) => {
        let tmp = regions.regions[item];
        if (!tmp) {
          const items = [item];
          tmp = items;
        }
        return tmp;
      });
      const reduced = mapped.reduce((acc, item) => {
        const __spreadArray = _mod1172.__spreadArray;
        _mod1172;
        const obj = _mod1172;
        return __spreadArray(obj.__spreadArray([], acc, true), item, true);
      }, []);
      let str4 = region.region;
      const indexOf = reduced.indexOf;
      if (!str4) {
        str4 = "";
      }
      tmp4 = indexOf(str4) > -1 === tmp7;
    }
    if (tmp4) {
      const script = region.script;
      let tmp8 = !script;
      if (script) {
        tmp8 = "*" === tmp3 || tmp3 === region.script;
      }
      tmp4 = tmp8;
    }
    if (tmp4) {
      const language = region.language;
      let tmp10 = !language;
      if (language) {
        tmp10 = "*" === tmp2 || tmp2 === region.language;
      }
      tmp4 = tmp10;
    }
    return tmp4;
  }
  region = region.region;
  tmp4 = !region;
  if (region) {
    tmp4 = "*" === arr || arr === region.region;
  }
}
function findMatchingDistanceForLSR(arg0, arg1, matches) {
  let tmp;
  matches = matches.matches;
  let num = 0;
  if (0 < matches.length) {
    while (true) {
      tmp = matches[num];
      let tmp2Result = isMatched(arg0, tmp.desired, matches.matchVariables);
      if (tmp2Result) {
        tmp2Result = isMatched(arg1, tmp.supported, matches.matchVariables);
      }
      let tmp5 = tmp.oneway || tmp2Result;
      if (!tmp5) {
        let tmp6 = isMatched(arg0, tmp.supported, matches.matchVariables) && isMatched(arg1, tmp.desired, matches.matchVariables);
        tmp2Result = tmp6;
      }
      if (tmp2Result) {
        break;
      } else {
        num = num + 1;
      }
    }
    const result = 10 * tmp.distance;
    const paradigmLocales = matches.paradigmLocales;
    const items = [, , ];
    ({ language: arr3[0], script: arr3[1], region: arr3[2] } = arg0);
    const _Boolean = Boolean;
    const indexOf = paradigmLocales.indexOf;
    const found = items.filter(Boolean);
    const paradigmLocales1 = matches.paradigmLocales;
    const items1 = [, , ];
    ({ language: arr5[0], script: arr5[1], region: arr5[2] } = arg1);
    const _Boolean2 = Boolean;
    const indexOf2 = paradigmLocales1.indexOf;
    const tmp10 = indexOf(found.join("-")) > -1;
    const found1 = items1.filter(Boolean);
    let diff = result;
    if (tmp10 !== indexOf2(found1.join("-")) > -1) {
      diff = result - 1;
    }
    return diff;
  }
  const error = new Error("No matching distance found");
  throw error;
}
function findMatchingDistance(matchedDesiredLocale, matchedSupportedLocale) {
  let __spreadArray;
  let __spreadArrayResult;
  let locale = new Intl.Locale(matchedDesiredLocale);
  const maximizeResult = locale.maximize();
  const locale1 = new Intl.Locale(matchedSupportedLocale);
  const maximizeResult1 = locale1.maximize();
  const obj = { language: maximizeResult.language, script: maximizeResult.script || "", region: maximizeResult.region || "" };
  const obj2 = { language: maximizeResult1.language, script: maximizeResult1.script || "", region: maximizeResult1.region || "" };
  let tmp3 = obj3;
  if (!tmp3) {
    let first = data.data.supplemental.languageMatching["written-new"][0];
    let paradigmLocales;
    if (null !== first) {
      if (undefined !== first) {
        paradigmLocales = first.paradigmLocales;
      }
    }
    let parts;
    if (null !== paradigmLocales) {
      if (undefined !== paradigmLocales) {
        let str = paradigmLocales._locales;
        parts = str.split(" ");
      }
    }
    const prop = data.data.supplemental.languageMatching["written-new"];
    let substr = prop.slice(1, 5);
    const prop1 = data.data.supplemental.languageMatching["written-new"];
    const substr1 = prop1.slice(5);
    obj3 = {
      matches: substr1.map((item) => {
          const first = Object.keys(item)[0];
          return { supported: first, desired: item[first]._desired, distance: +item[first]._distance, oneway: "true" === item[first].oneway };
        }, {}),
      matchVariables: substr.reduce((acc, item) => {
          const first = Object.keys(item)[0];
          const str = item[first]._value;
          const substr = first.slice(1);
          acc[substr] = str.split("+");
          return acc;
        }, {}),
      paradigmLocales: __spreadArray(__spreadArrayResult, parts.map((item) => {
          const locale = new Intl.Locale(item.replace(/_/g, "-"));
          const str = locale.maximize();
          return str.toString();
        }), true)
    };
    __spreadArray = _mod1172.__spreadArray;
    _mod1172;
    const tmp4Result2 = _mod1172;
    tmp3 = obj3;
    __spreadArrayResult = tmp4Result2.__spreadArray([], parts, true);
  }
  let num3 = 0;
  if (obj.language !== obj2.language) {
    const obj4 = { language: maximizeResult.language, script: "", region: "" };
    const obj5 = { language: maximizeResult1.language, script: "", region: "" };
    num3 = findMatchingDistanceForLSR(obj4, obj5, tmp3);
  }
  let sum = num3;
  if (obj.script !== obj2.script) {
    const obj6 = { language: maximizeResult.language, script: obj.script, region: "" };
    const obj7 = { language: maximizeResult1.language, script: obj2.script, region: "" };
    sum = num3 + findMatchingDistanceForLSR(obj6, obj7, tmp3);
  }
  let sum1 = sum;
  if (obj.region !== obj2.region) {
    sum1 = sum + findMatchingDistanceForLSR(obj, obj2, tmp3);
  }
  return sum1;
}
let c3 = 838;

export const invariant = function invariant(arg0, arg1, arg2) {
  let _Error = arg2;
  if (undefined === arg2) {
    _Error = Error;
  }
  const tmp2 = arg0;
  if (!tmp2) {
    const self = this;
    const self2 = this;
    const _Error1 = new _Error(arg1);
    throw _Error1;
  }
};
export { findMatchingDistance };
export const findBestMatch = function findBestMatch(arr, arg1, arg2) {
  let closure_0 = arg1;
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = c3;
  }
  let Infinity = Infinity;
  const obj = { matchedDesiredLocale: "", distances: {} };
  let item = arr.forEach((item, index) => {
    const matchedDesiredLocale = item;
    let closure_1 = index;
    if (!obj.distances[item]) {
      obj.distances[item] = {};
    }
    item = matchedDesiredLocale.forEach((matchedSupportedLocale) => {
      const sum = findMatchingDistance(matchedDesiredLocale, matchedSupportedLocale) + 40 * index;
      obj.distances[matchedDesiredLocale][matchedSupportedLocale] = sum;
      if (sum < Infinity) {
        Infinity = sum;
        obj.matchedDesiredLocale = matchedDesiredLocale;
        obj.matchedSupportedLocale = matchedSupportedLocale;
      }
    });
  });
  if (Infinity >= tmp) {
    obj.matchedDesiredLocale = undefined;
    obj.matchedSupportedLocale = undefined;
  }
  return obj;
};
export const UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;