// _runtime/12665_MetricsAggregator.js
import _mod12570 from "metro/12570__.js";
import _browserPerformanceTimeOriginMode from "12579__browserPerformanceTimeOriginMode.js";
import COUNTER_METRIC_TYPE from "12662_COUNTER_METRIC_TYPE.js";
import _mod12666 from "metro/12666__.js";
import CounterMetric from "12667_CounterMetric.js";
import captureAggregateMetrics from "12668_captureAggregateMetrics.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let map;

class MetricsAggregator {
  constructor(_client) {
    const self = this;
    _classCallCheck(this, MetricsAggregator);
    this._client = _client;
    this._buckets = new Map();
    this._bucketsTotalWeight = 0;
    new Map();
    this._interval = setInterval(() => self._flush(), COUNTER_METRIC_TYPE.DEFAULT_FLUSH_INTERVAL);
    if (this._interval.unref) {
      const _interval = self._interval;
      _interval.unref();
    }
    const random = Math.random();
    self._flushShift = floor((random * COUNTER_METRIC_TYPE.DEFAULT_FLUSH_INTERVAL) / 1000);
    self._forceFlush = false;
  }
}
const entry = {
  key: "add",
  value: function add(metricType, arg1, diff) {
    let obj7;
    let tmp13;
    let str = none;
    if (none === undefined) {
      str = "none";
    }
    let obj = tags;
    if (tags === undefined) {
      obj = {};
    }
    let timestampInSecondsResult = arg5;
    if (arg5 === undefined) {
      const obj2 = _browserPerformanceTimeOriginMode;
      timestampInSecondsResult = obj2.timestampInSeconds();
    }
    const self = this;
    const rounded = Math.floor(timestampInSecondsResult);
    const obj3 = _mod12666;
    const sanitizeMetricKeyResult = obj3.sanitizeMetricKey(arg1);
    const obj4 = _mod12666;
    const sanitizeTagsResult = obj4.sanitizeTags(obj);
    const obj5 = _mod12666;
    const sanitizeUnitResult = obj5.sanitizeUnit(str);
    const obj6 = _mod12666;
    const bucketKey = obj6.getBucketKey(metricType, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
    const _buckets = this._buckets;
    const value = _buckets.get(bucketKey);
    let num = 0;
    if (value) {
      num = 0;
      if (metricType === COUNTER_METRIC_TYPE.SET_METRIC_TYPE) {
        num = value.metric.weight;
      }
    }
    if (value) {
      const metric = value.metric;
      metric.add(diff);
      obj7 = value;
      if (value.timestamp < rounded) {
        value.timestamp = rounded;
        obj7 = value;
      }
    } else {
      obj7 = {
        metric: tmp13,
        timestamp: rounded,
        metricType,
        name: sanitizeMetricKeyResult,
        unit: sanitizeUnitResult,
        tags: sanitizeTagsResult,
      };
      const self2 = this;
      const self3 = this;
      const _buckets2 = self._buckets;
      tmp13 = new CounterMetric.METRIC_MAP[metricType](diff);
      const result = _buckets2.set(bucketKey, obj7);
    }
    if (typeof diff === "string") {
      diff = obj7.metric.weight - num;
    }
    const tmp5Result = _mod12570;
    const result1 = tmp5Result.updateMetricSummaryOnActiveSpan(
      metricType,
      sanitizeMetricKeyResult,
      diff,
      sanitizeUnitResult,
      obj,
      bucketKey,
    );
    self._bucketsTotalWeight = self._bucketsTotalWeight + obj7.metric.weight;
    if (self._bucketsTotalWeight >= COUNTER_METRIC_TYPE.MAX_WEIGHT) {
      self.flush();
    }
  },
};
const items = [
  entry,
  {
    key: "flush",
    value: function flush() {
      this._forceFlush = true;
      this._flush();
    },
  },
  {
    key: "close",
    value: function close() {
      this._forceFlush = true;
      clearInterval(this._interval);
      this._flush();
    },
  },
  {
    key: "_flush",
    value: function _flush() {
      let tmp14;
      let tmp15;
      const self = this;
      if (this._forceFlush) {
        self._forceFlush = false;
        self._bucketsTotalWeight = 0;
        self._captureMetrics(self._buckets);
        const _buckets3 = self._buckets;
        _buckets3.clear();
      } else {
        const _Math = Math;
        const _Map = Map;
        const self2 = this;
        const self3 = this;
        const obj = _browserPerformanceTimeOriginMode;
        const floorResult = floor(obj.timestampInSeconds());
        const diff = floorResult - COUNTER_METRIC_TYPE.DEFAULT_FLUSH_INTERVAL / 1000 - self._flushShift;
        map = new Map();
        const _buckets = self._buckets;
        const tmp8 = _buckets[Symbol.iterator]();
        while (tmp8 !== undefined) {
          let tmp13 = _slicedToArray(tmp10, 2);
          [tmp14, tmp15] = tmp13;
          if (tmp15.timestamp <= diff) {
            let result = map.set(tmp14, tmp15);
            self._bucketsTotalWeight = self._bucketsTotalWeight - tmp15.metric.weight;
          }
          continue;
        }
        const tmp21 = map[Symbol.iterator]();
        while (tmp21 !== undefined) {
          let _buckets2 = self._buckets;
          let deleteResult = _buckets2.delete(_slicedToArray(tmp23, 1)[0]);
          continue;
        }
        self._captureMetrics(map);
      }
    },
  },
  {
    key: "_captureMetrics",
    value: function _captureMetrics(_buckets) {
      if (_buckets.size > 0) {
        const self = this;
        const tmp = globalThis;
        const _Array = Array;
        const arr = Array.from(_buckets);
        const mapped = arr.map((item) => {
          let tmp;
          [, tmp] = item;
          return tmp;
        });
        const obj = captureAggregateMetrics;
        const result = obj.captureAggregateMetrics(this._client, mapped);
      }
    },
  },
];
const MetricsAggregator_export = _createClass(MetricsAggregator, items);

export { MetricsAggregator_export as MetricsAggregator };
