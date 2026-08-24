// _runtime/07754_getMetricSummaryJsonForSpan.js
import addNonEnumerableProperty from "07744_addNonEnumerableProperty.js";
import closure_2 from "metro/00032__slicedToArray.js";

const _sentryMetrics = "_sentryMetrics";

export const getMetricSummaryJsonForSpan = function getMetricSummaryJsonForSpan(self) {
  if (self[_sentryMetrics]) {
    const obj = {};
    const tmp3 = tmp[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp7 = callback;
      let tmp8 = callback(callback(tmp5, 2)[1], 2);
      [tmp9, tmp11] = tmp8;
      let arr = obj[tmp9];
      if (!arr) {
        let tmp12 = tmp9;
        let items = [];
        obj[tmp10] = items;
        arr = items;
      }
      let tmp13 = require;
      let tmp14 = dependencyMap;
      let obj2 = addNonEnumerableProperty;
      let tmp15 = tmp11;
      arr = arr.push(obj2.dropUndefinedKeys(tmp11));
      continue;
    }
    return obj;
  }
};
export const updateMetricSummaryOnSpan = function updateMetricSummaryOnSpan(activeSpan, arg1, sanitizeMetricKeyResult, diff, sanitizeUnitResult, arg5, bucketKey) {
  let obj = activeSpan[_sentryMetrics];
  if (!obj) {
    const _Map = Map;
    const map = new Map();
    activeSpan[tmp] = map;
    obj = map;
  }
  const combined = "" + arg1 + ":" + sanitizeMetricKeyResult + "@" + sanitizeUnitResult;
  const value = obj.get(bucketKey);
  if (value) {
    const tmp12 = callback(value, 2)[1];
    const items = [combined, ];
    obj = { min: null, max: null, count: null, sum: null, tags: null };
    const _Math = Math;
    obj[0] = Math.min(tmp12.min, diff);
    const _Math2 = Math;
    obj[1] = Math.max(tmp12.max, diff);
    const sum = tmp12.count + 1;
    tmp12.count = sum;
    obj[2] = sum;
    const sum1 = tmp12.sum + diff;
    tmp12.sum = sum1;
    obj[3] = sum1;
    obj[4] = tmp12.tags;
    items[1] = obj;
    const result = obj.set(bucketKey, items);
  } else {
    const items1 = [combined, ];
    obj = { min: null, max: null, count: 1, sum: null, tags: null };
    obj[0] = diff;
    obj[1] = diff;
    obj[3] = diff;
    obj[4] = arg5;
    items1[1] = obj;
    const result1 = obj.set(bucketKey, items1);
  }
};