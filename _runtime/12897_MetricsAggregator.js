// _runtime/12897_MetricsAggregator.js
import _slicedToArray from "metro/00032__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const MetricsAggregator = require;
class MetricsAggregator {
  constructor(arg0) {
    self = this;
    self = this;
    tmp = closure_3(this, MetricsAggregator);
    this._client = global;
    map = new Map();
    this._buckets = map;
    this._bucketsTotalWeight = 0;
    tmp3 = closure_0;
    tmp4 = closure_1;
    this._interval = setInterval(() => self._flush(), closure_0(closure_1[3]).DEFAULT_FLUSH_INTERVAL);
    if (this._interval.unref) {
      _interval = self._interval;
      unrefResult = _interval.unref();
    }
    random = Math.random();
    self._flushShift = Math.floor((random * tmp3(tmp4[3]).DEFAULT_FLUSH_INTERVAL) / 1000);
    self._forceFlush = false;
    return;
  }
}
const entry = {
  key: "add",
  value: function add(metricType, arg1, diff, none, tags) {
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
      timestampInSecondsResult = MetricsAggregator(12811).timestampInSeconds();
      const obj2 = MetricsAggregator(12811);
    }
    const self = this;
    const rounded = Math.floor(timestampInSecondsResult);
    const sanitizeMetricKeyResult = MetricsAggregator(12898).sanitizeMetricKey(arg1);
    const obj3 = MetricsAggregator(12898);
    const sanitizeTagsResult = MetricsAggregator(12898).sanitizeTags(obj);
    const obj4 = MetricsAggregator(12898);
    const sanitizeUnitResult = MetricsAggregator(12898).sanitizeUnit(str);
    const obj5 = MetricsAggregator(12898);
    const bucketKey = MetricsAggregator(12898).getBucketKey(
      metricType,
      sanitizeMetricKeyResult,
      sanitizeUnitResult,
      sanitizeTagsResult,
    );
    const _buckets = this._buckets;
    value = _buckets.get(bucketKey);
    let num = 0;
    if (value) {
      num = 0;
      if (metricType === tmp5(12894).SET_METRIC_TYPE) {
        num = value.metric.weight;
      }
    }
    if (value) {
      const metric = value.metric;
      metric.add(diff);
      obj = value;
      if (value.timestamp < rounded) {
        value.timestamp = rounded;
        obj = value;
      }
    } else {
      obj = { metric: null, timestamp: null, metricType: null, name: null, unit: null, tags: null };
      const tmp15 = new tmp5(12899).METRIC_MAP[metricType](diff);
      obj.metric = tmp15;
      obj.timestamp = rounded;
      obj.metricType = metricType;
      obj.name = sanitizeMetricKeyResult;
      obj.unit = sanitizeUnitResult;
      obj.tags = sanitizeTagsResult;
      const _buckets2 = self._buckets;
      const result = _buckets2.set(bucketKey, obj);
    }
    if (typeof diff === "string") {
      diff = obj.metric.weight - num;
    }
    const obj6 = MetricsAggregator(12898);
    const result1 = MetricsAggregator(12802).updateMetricSummaryOnActiveSpan(
      metricType,
      sanitizeMetricKeyResult,
      diff,
      sanitizeUnitResult,
      obj,
      bucketKey,
    );
    self._bucketsTotalWeight = self._bucketsTotalWeight + obj.metric.weight;
    if (self._bucketsTotalWeight >= MetricsAggregator(12894).MAX_WEIGHT) {
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
      const self = this;
      if (this._forceFlush) {
        self._forceFlush = false;
        self._bucketsTotalWeight = 0;
        self._captureMetrics(self._buckets);
        const _buckets3 = self._buckets;
        _buckets3.clear();
      } else {
        const _Math = Math;
        const rounded = Math.floor(MetricsAggregator(12811).timestampInSeconds());
        const _Map = Map;
        const diff = rounded - MetricsAggregator(12894).DEFAULT_FLUSH_INTERVAL / 1000 - self._flushShift;
        const map = new Map();
        const _buckets = self._buckets;
        const tmp10 = _buckets[Symbol.iterator]();
        while (tmp10 !== undefined) {
          let tmp15 = _slicedToArray(tmp12, 2);
          [tmp16, tmp17] = tmp15;
          let tmp18 = tmp17;
          if (tmp17.timestamp <= diff) {
            let result = map.set(tmp16, tmp18);
            self._bucketsTotalWeight = self._bucketsTotalWeight - tmp18.metric.weight;
          }
          continue;
        }
        const tmp23 = map[Symbol.iterator]();
        while (tmp23 !== undefined) {
          let _buckets2 = self._buckets;
          let deleteResult = _buckets2.delete(_slicedToArray(tmp25, 1)[0]);
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
        const _Array = Array;
        const mapped = Array.from(_buckets).map((item) => {
          [, tmp] = item;
          return tmp;
        });
        const arr = Array.from(_buckets);
        const result = MetricsAggregator(12900).captureAggregateMetrics(this._client, mapped);
        const obj = MetricsAggregator(12900);
      }
    },
  },
];

export const MetricsAggregator = _createClass(MetricsAggregator, items);
