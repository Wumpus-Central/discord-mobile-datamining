// === Module 7754: getMetricSummaryJsonForSpan ===

// Module 7754 (getMetricSummaryJsonForSpan)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 7744 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

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
      let obj2 = addNonEnumerableProperty;
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
    const range = _slicedToArray(value, 2)[1];
    const items = [combined, ];
    obj = { min: null, max: null, count: null, sum: null, tags: null };
    const _Math = Math;
    obj[0] = Math.min(range.min, diff);
    const _Math2 = Math;
    obj[1] = Math.max(range.max, diff);
    const sum = range.count + 1;
    range.count = sum;
    obj[2] = sum;
    const sum1 = range.sum + diff;
    range.sum = sum1;
    obj[3] = sum1;
    obj[4] = range.tags;
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