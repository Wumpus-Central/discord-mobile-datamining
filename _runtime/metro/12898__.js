// _runtime/metro/12898__.js
import _mod12803 from "12803__.js";
import _slicedToArray from "00032__.js";

let items = [
  ["\n", "\\n"],
  ["\r", "\\r"],
  ["\t", "\\t"],
  ["\\", "\\\\"],
  ["|", "\\u{7c}"],
  [",", "\\u{2c}"],
];

export const getBucketKey = function getBucketKey(
  metricType,
  sanitizeMetricKeyResult,
  sanitizeUnitResult,
  sanitizeTagsResult,
) {
  const entries = Object.entries(_mod12803.dropUndefinedKeys(sanitizeTagsResult));
  return (
    "" +
    metricType +
    sanitizeMetricKeyResult +
    sanitizeUnitResult +
    entries.sort((arg0, arg1) => {
      const first = arg0[0];
      return first.localeCompare(arg1[0]);
    })
  );
};
export const sanitizeMetricKey = function sanitizeMetricKey(str) {
  return str.replace(/[^\w\-.]+/gi, "_");
};
export const sanitizeTags = function sanitizeTags(tags) {
  let obj = {};
  for (const key10007 in arg0) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
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
      items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(String(arg0[key10007]), 0);
      obj[replaced] = items.reduce(
        (acc, item) =>
          acc +
          (function getCharOrReplacement(item) {
            const obj = dependencyMap[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp4 = closure_1_2(tmp2, 2);
              if (item === tmp4[0]) {
                obj.return();
                return tmp5;
              }
            }
            return item;
          })(item),
        "",
      );
      continue;
    }
    continue;
  }
  return obj;
};
export const sanitizeUnit = function sanitizeUnit(none) {
  return none.replace(/[^\w]+/gi, "_");
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
      let mapped = arr2.map((item) => {
        [tmp, tmp2] = item;
        return "" + tmp + ":" + tmp2;
      });
      let _HermesInternal = HermesInternal;
      str2 = "|#" + mapped.join(",");
    }
    let _HermesInternal2 = HermesInternal;
    let str3 = "";
    let str4 = "@";
    let str5 = ":";
    let str6 = "|";
    let str7 = "|T";
    let str8 = "\n";
    str =
      str +
      "" +
      tmp2.name +
      "@" +
      tmp2.unit +
      ":" +
      tmp2.metric +
      "|" +
      tmp2.metricType +
      str2 +
      "|T" +
      tmp2.timestamp +
      "\n";
    continue;
  }
  return str;
};
export const simpleHash = function simpleHash(item) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < item.length) {
    do {
      let sum = (num2 << 5) - num2 + item.charCodeAt(num);
      num2 = sum & sum;
      num = num + 1;
      num3 = num2;
      length = item.length;
    } while (num < length);
  }
  return num3 >>> 0;
};
