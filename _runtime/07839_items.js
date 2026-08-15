// _runtime/07839_items.js
import _slicedToArray from "_slicedToArray";
import { addNonEnumerableProperty } from "07744_addNonEnumerableProperty.js";

let items = [["\n", "\\n"], ["\r", "\\r"], ["\t", "\\t"], ["\\", "\\\\"], ["|", "\\u{7c}"], [",", "\\u{2c}"]];

export const getBucketKey = function getBucketKey(arg0, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult) {
  const entries = Object.entries(addNonEnumerableProperty.dropUndefinedKeys(sanitizeTagsResult));
  return "" + arg0 + sanitizeMetricKeyResult + sanitizeUnitResult + entries.sort((arg0, arg1) => {
    const first = arg0[0];
    return first.localeCompare(arg1[0]);
  });
};
export const sanitizeMetricKey = function sanitizeMetricKey(str) {
  return str.replace(/[^\w\-.]+/gi, "_");
};
export const sanitizeTags = function sanitizeTags(obj) {
  obj = {};
  for (const key10007 in arg0) {
    let tmp5 = key10007;
    let _Object = Object;
    let call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty(key10007);
    } else {
      hasOwnPropertyResult = call(arg0, key10007);
    }
    if (!hasOwnPropertyResult) {
      continue;
    } else {
      let _String = String;
      let replaced = key10007.replace(/[^\w\-./]+/gi, "");
      let items = [];
      let tmp3 = items;
      let num = 0;
      let arraySpreadResult = HermesBuiltin.arraySpread(String(arg0[key10007]), 0);
      obj[replaced] = items.reduce((arg0, arg1) => arg0 + (function getCharOrReplacement(arg0) {
        const obj = dependencyMap[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp3 = callback;
          let tmp4 = callback(tmp2, 2);
          if (arg0 === tmp4[0]) {
            let tmp6 = obj;
            obj.return();
            return tmp5;
          }
        }
        return arg0;
      })(arg1), "");
      continue;
    }
    continue;
  }
  return obj;
};
export const sanitizeUnit = function sanitizeUnit(str) {
  return str.replace(/[^\w]+/gi, "_");
};
export const serializeMetricBuckets = function serializeMetricBuckets(arg0) {
  let str = "";
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let _Object = Object;
    let entries = Object.entries(nextResult.tags);
    let arr2 = entries;
    let str2 = "";
    if (entries.length > 0) {
      let tmp3 = entries;
      let mapped = arr2.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return "" + tmp + ":" + tmp2;
      });
      let _HermesInternal = HermesInternal;
      str2 = "|#" + mapped.join(",");
    }
    let tmp4 = str;
    let tmp5 = nextResult;
    let _HermesInternal2 = HermesInternal;
    let str3 = "";
    let str4 = "@";
    let str5 = ":";
    let str6 = "|";
    let tmp6 = str2;
    let str7 = "|T";
    let str8 = "\n";
    str = str + "" + tmp2.name + "@" + tmp2.unit + ":" + tmp2.metric + "|" + tmp2.metricType + str2 + "|T" + tmp2.timestamp + "\n";
    continue;
  }
  return str;
};
export const simpleHash = function simpleHash(str) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < str.length) {
    do {
      let sum = (num2 << 5) - num2 + str.charCodeAt(num);
      num2 = sum & sum;
      num = num + 1;
      num3 = num2;
      length = str.length;
    } while (num < length);
  }
  return num3 >>> 0;
};