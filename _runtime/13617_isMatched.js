// _runtime/13617_isMatched.js
import e from "01281_e.js";
import _mod13618 from "metro/13618__.js";

require = arg1;
const dependencyMap = arg6;
function isMatched(region, str) {
  const parts = str.split("-");
  [tmp2, tmp3, arr] = parts;
  if (arr) {
    if ("$" === arr[0]) {
      const slice = arr.slice;
      if ("!" !== arr[1]) {
        let arr2 = arg2[slice(arr, 1)];
      } else {
        arr2 = arg2[slice(arr, 2)];
      }
      const mapped = arr2.map((item, index) => {
        let tmp = callback(13619).regions[item];
        if (!tmp) {
          const items = [item];
          tmp = items;
        }
        return tmp;
      });
      const reduced = mapped.reduce((acc, item, index) => {
        const obj = callback(1281);
        return obj.__spreadArray(callback(1281).__spreadArray([], acc, true), item, true);
      }, []);
      let str4 = region.region;
      if (!str4) {
        str4 = "";
      }
      let tmp4 = reduced.indexOf(str4) > -1 === tmp7;
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
    const found = items.filter(Boolean);
    const paradigmLocales1 = matches.paradigmLocales;
    const items1 = [, , ];
    ({ language: arr5[0], script: arr5[1], region: arr5[2] } = arg1);
    const _Boolean2 = Boolean;
    const found1 = items1.filter(Boolean);
    let diff = result;
    if (tmp10 !== paradigmLocales1.indexOf(found1.join("-")) > -1) {
      diff = result - 1;
    }
    return diff;
  }
  error = new Error("No matching distance found");
  throw error;
}
function findMatchingDistance(closure_0, item) {
  let locale = new Intl.Locale(closure_0);
  const maximizeResult = locale.maximize();
  const locale1 = new Intl.Locale(item);
  const maximizeResult1 = locale1.maximize();
  const obj = { language: maximizeResult1.language, script: tmp5, region: tmp6 };
  let tmp7 = obj1;
  if (!obj1) {
    let first = _mod13618.data.supplemental.languageMatching["written-new"][0];
    let paradigmLocales;
    if (null !== first) {
      if (undefined !== first) {
        paradigmLocales = first.paradigmLocales;
      }
    }
    let parts;
    if (null !== paradigmLocales) {
      if (undefined !== paradigmLocales) {
        parts = paradigmLocales._locales.split(" ");
      }
    }
    const prop = _mod13618.data.supplemental.languageMatching["written-new"];
    let substr = prop.slice(1, 5);
    const prop1 = _mod13618.data.supplemental.languageMatching["written-new"];
    const substr1 = prop1.slice(5);
    obj1 = { matches: null, matchVariables: null, paradigmLocales: null };
    obj1[0] = substr1.map((item, index) => {
      const first = Object.keys(item)[0];
      return { supported: first, desired: item[first]._desired, distance: +item[first]._distance, oneway: "true" === item[first].oneway };
    }, {});
    obj1[1] = substr.reduce((acc, item, index) => {
      const first = Object.keys(item)[0];
      const substr = first.slice(1);
      acc[substr] = item[first]._value.split("+");
      return acc;
    }, {});
    const tmp8Result = e;
    obj1[2] = tmp8Result.__spreadArray(tmp8Result.__spreadArray([], parts, true), parts.map((item, index) => {
      const locale = new Intl.Locale(item.replace(/_/g, "-"));
      return locale.maximize().toString();
    }), true);
    tmp7 = obj1;
    const __spreadArrayResult = tmp8Result.__spreadArray([], parts, true);
  }
  let num3 = 0;
  if (obj.language !== obj.language) {
    const obj2 = { language: null, script: "", region: "" };
    obj2[0] = maximizeResult.language;
    const obj3 = { language: null, script: "", region: "" };
    obj3[0] = maximizeResult1.language;
    num3 = findMatchingDistanceForLSR(obj2, obj3, tmp7);
  }
  let sum = num3;
  if (obj.script !== obj.script) {
    const obj4 = { language: null, script: null, region: "" };
    obj4[0] = maximizeResult.language;
    obj4[1] = obj.script;
    const obj5 = { language: null, script: null, region: "" };
    obj5[0] = maximizeResult1.language;
    obj5[1] = obj.script;
    sum = num3 + findMatchingDistanceForLSR(obj4, obj5, tmp7);
  }
  let sum1 = sum;
  if (obj.region !== obj.region) {
    sum1 = sum + findMatchingDistanceForLSR(obj, obj, tmp7);
  }
  return sum1;
}
arg5.UNICODE_EXTENSION_SEQUENCE_REGEX = undefined;
arg5.invariant = function invariant(arg0, arg1, arg2) {
  let _Error = arg2;
  if (undefined === arg2) {
    _Error = Error;
  }
  if (!arg0) {
    _Error = new _Error(arg1);
    throw _Error;
  }
};
arg5.findMatchingDistance = findMatchingDistance;
arg5.findBestMatch = function findBestMatch(arr) {
  closure_0 = arg1;
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = c3;
  }
  const Infinity = Infinity;
  const obj = { matchedDesiredLocale: "", distances: {} };
  let item = arr.forEach((item, index) => {
    closure_0 = item;
    closure_1 = index;
    if (!obj.distances[item]) {
      obj.distances[item] = {};
    }
    item = closure_0.forEach((item, index) => {
      const sum = findMatchingDistance(closure_0, item) + 40 * closure_1;
      obj.distances[closure_0][item] = sum;
      if (sum < closure_1) {
        closure_1 = sum;
        obj.matchedDesiredLocale = closure_0;
        obj.matchedSupportedLocale = item;
      }
    });
  });
  if (Infinity >= tmp) {
    obj.matchedDesiredLocale = undefined;
    obj.matchedSupportedLocale = undefined;
  }
  return obj;
};
arg5.UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
let c3 = 838;