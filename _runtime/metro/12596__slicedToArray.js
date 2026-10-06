// === Module 12596: _slicedToArray ===

// Module 12596 (_slicedToArray)
import _mod12586 from "module_12586" /* 12586 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let map, set;

const _sentryMetrics = "_sentryMetrics";

export const getMetricSummaryJsonForSpan = function getMetricSummaryJsonForSpan(self) {
  let tmp11;
  let tmp9;
  if (self[_sentryMetrics]) {
    const obj = {};
    const tmp3 = self[_sentryMetrics][Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp8 = _slicedToArray(_slicedToArray(tmp5, 2)[1], 2);
      [tmp9, tmp11] = tmp8;
      let arr = obj[tmp9];
      if (!arr) {
        let items = [];
        obj[tmp10] = items;
        arr = items;
      }
      let push = arr.push;
      let obj2 = _mod12586;
      let arr2 = push(obj2.dropUndefinedKeys(tmp11));
      continue;
    }
    return obj;
  }
};
export const updateMetricSummaryOnSpan = function updateMetricSummaryOnSpan(activeSpan, metricType, sanitizeMetricKeyResult, min, sanitizeUnitResult, tags, bucketKey) {
  let sum;
  let sum1;
  let obj = activeSpan[_sentryMetrics];
  if (!obj) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    activeSpan[tmp] = map;
    obj = map;
  }
  const combined = "" + metricType + ":" + sanitizeMetricKeyResult + "@" + sanitizeUnitResult;
  const value = obj.get(bucketKey);
  if (value) {
    const range = _slicedToArray(value, 2)[1];
    const items = [combined, ];
    const range1 = { min: Math.min(range.min, min), max: Math.max(range.max, min), count: sum, sum: sum1, tags: range.tags };
    const _Math = Math;
    const _Math2 = Math;
    sum = range.count + 1;
    set = obj.set;
    range.count = sum;
    sum1 = range.sum + min;
    range.sum = sum1;
    items[1] = range1;
    const result = set(bucketKey, items);
  } else {
    const items1 = [combined, ];
    const range2 = { min, max: min, count: 1, sum: min, tags };
    items1[1] = range2;
    const result1 = obj.set(bucketKey, items1);
  }
};