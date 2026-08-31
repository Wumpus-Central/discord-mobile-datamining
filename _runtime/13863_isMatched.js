// _runtime/13863_isMatched.js
import _mod13864 from "metro/13864__.js";

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
      const mapped = arr2.map((arg0) => {
        let tmp = callback(13865).regions[arg0];
        if (!tmp) {
          const items = [arg0];
          tmp = items;
        }
        return tmp;
      });
      const reduced = mapped.reduce((arg0, arg1) => {
        const obj = callback(1281);
        return obj.__spreadArray(callback(1281).__spreadArray([], arg0, true), arg1, true);
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
        const tmp9 = "*" === tmp3 || tmp3 === region.script;
      }
      tmp4 = tmp8;
    }
    if (tmp4) {
      const language = region.language;
      let tmp10 = !language;
      if (language) {
        tmp10 = "*" === tmp2 || tmp2 === region.language;
        const tmp11 = "*" === tmp2 || tmp2 === region.language;
      }
      tmp4 = tmp10;
    }
    return tmp4;
  }
  region = region.region;
  tmp4 = !region;
  if (region) {
    tmp4 = "*" === arr || arr === region.region;
    const tmp5 = "*" === arr || arr === region.region;
  }
}
function findMatchingDistanceForLSR(arg0, arg1, matches) {
  let tmp;
  matches = matches.matches;
  let num = 0;
  if (0 < matches.length) {
    while (true) {
      tmp = matches[num];
      let tmp2 = isMatched;
      let tmp2Result = isMatched(arg0, tmp.desired, matches.matchVariables);
      let tmp4 = num;
      if (tmp2Result) {
        tmp2Result = tmp2(arg1, tmp.supported, matches.matchVariables);
      }
      let tmp5 = tmp.oneway || tmp2Result;
      if (!tmp5) {
        let tmp6 = tmp2(arg0, tmp.supported, matches.matchVariables) && tmp2(arg1, tmp.desired, matches.matchVariables);
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
function findMatchingDistance(arg0, arg1) {
  let locale = new Intl.Locale(arg0);
  const maximizeResult = locale.maximize();
  const locale1 = new Intl.Locale(arg1);
  const maximizeResult1 = locale1.maximize();
  let obj = { language: maximizeResult.language, script: tmp3, region: tmp4 };
  obj = { language: maximizeResult1.language, script: tmp5, region: tmp6 };
  let tmp7 = obj1;
  if (!obj1) {
    let first = _mod13864.data.supplemental.languageMatching["written-new"][0];
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
        const str = paradigmLocales._locales;
      }
    }
    const prop = tmp8(13864).data.supplemental.languageMatching["written-new"];
    let substr = prop.slice(1, 5);
    const prop1 = tmp8(13864).data.supplemental.languageMatching["written-new"];
    const substr1 = prop1.slice(5);
    obj1 = { matches: null, matchVariables: null, paradigmLocales: null };
    obj1[0] = substr1.map((arg0) => {
      const first = Object.keys(arg0)[0];
      return { supported: first, desired: arg0[first]._desired, distance: +arg0[first]._distance, oneway: "true" === arg0[first].oneway };
    }, {});
    obj1[1] = substr.reduce((arg0, arg1) => {
      const first = Object.keys(arg1)[0];
      const substr = first.slice(1);
      arg0[substr] = arg1[first]._value.split("+");
      return arg0;
    }, {});
    let tmp8Result = tmp8(1281);
    tmp8Result = tmp8(1281);
    obj1[2] = tmp8Result.__spreadArray(tmp8Result.__spreadArray([], parts, true), parts.map((str) => {
      const locale = new Intl.Locale(str.replace(/_/g, "-"));
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
  let item = arr.forEach((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    if (!obj.distances[arg0]) {
      obj.distances[arg0] = {};
    }
    const item = closure_0.forEach((matchedSupportedLocale) => {
      const sum = closure_2_6(closure_0, matchedSupportedLocale) + 40 * closure_1;
      closure_1_2.distances[closure_0][matchedSupportedLocale] = sum;
      if (sum < closure_1) {
        closure_1 = sum;
        tmp3.matchedDesiredLocale = closure_0;
        tmp3.matchedSupportedLocale = matchedSupportedLocale;
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