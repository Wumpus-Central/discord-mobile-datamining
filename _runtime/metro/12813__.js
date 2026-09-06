// === Module 12813: ? ===

// Module 12813
import _mod12803 from "module_12803" /* 12803 */;
import _slicedToArray from "module_32" /* 32 */;

const _sentryMetrics = "_sentryMetrics";

export const getMetricSummaryJsonForSpan = function getMetricSummaryJsonForSpan(self) {
  if (self[_sentryMetrics]) {
    const obj = {};
    const tmp3 = tmp[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp8 = _slicedToArray(_slicedToArray(tmp5, 2)[1], 2);
      [tmp9, tmp11] = tmp8;
      let arr = obj[tmp9];
      if (!arr) {
        let items = [];
        obj[tmp10] = items;
        arr = items;
      }
      let obj2 = _mod12803;
      arr = arr.push(obj2.dropUndefinedKeys(tmp11));
      continue;
    }
    return obj;
  }
};
export const updateMetricSummaryOnSpan = function updateMetricSummaryOnSpan(activeSpan, metricType, sanitizeMetricKeyResult, min, sanitizeUnitResult, tags, bucketKey) {
  let obj = activeSpan[_sentryMetrics];
  if (!obj) {
    const _Map = Map;
    const map = new Map();
    activeSpan[tmp] = map;
    obj = map;
  }
  const combined = "" + metricType + ":" + sanitizeMetricKeyResult + "@" + sanitizeUnitResult;
  value = obj.get(bucketKey);
  if (value) {
    _slicedToArray(value, 2)[1];
    const items = [combined, ];
    const range = { min: null, max: null, count: null, sum: null, tags: null };
    const _Math = Math;
    range.min = Math.min(range.min, min);
    const _Math2 = Math;
    range.max = Math.max(range.max, min);
    const sum = range.count + 1;
    range.count = sum;
    range.count = sum;
    const sum1 = range.sum + min;
    range.sum = sum1;
    range.sum = sum1;
    range.tags = range.tags;
    items[1] = range;
    const result = obj.set(bucketKey, items);
  } else {
    const items1 = [combined, ];
    const range1 = { min, max: min, count: 1, sum: min, tags };
    items1[1] = range1;
    const result1 = obj.set(bucketKey, items1);
  }
};