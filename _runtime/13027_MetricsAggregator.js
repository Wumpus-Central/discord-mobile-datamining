// === Module 13027: MetricsAggregator ===

// Module 13027 (MetricsAggregator)
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

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
    self._flushShift = Math.floor(random * tmp3(tmp4[3]).DEFAULT_FLUSH_INTERVAL / 1000);
    self._forceFlush = false;
    return;
  }
}
const entry = {
  key: "add",
  value: function add(metricType, arg1, diff) {
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
      timestampInSecondsResult = MetricsAggregator(12941).timestampInSeconds();
      const obj2 = MetricsAggregator(12941);
    }
    const self = this;
    const rounded = Math.floor(timestampInSecondsResult);
    const sanitizeMetricKeyResult = MetricsAggregator(13028).sanitizeMetricKey(arg1);
    const obj3 = MetricsAggregator(13028);
    const sanitizeTagsResult = MetricsAggregator(13028).sanitizeTags(obj);
    const obj4 = MetricsAggregator(13028);
    const sanitizeUnitResult = MetricsAggregator(13028).sanitizeUnit(str);
    const obj5 = MetricsAggregator(13028);
    const bucketKey = MetricsAggregator(13028).getBucketKey(metricType, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
    const _buckets = this._buckets;
    value = _buckets.get(bucketKey);
    let num = 0;
    if (value) {
      num = 0;
      if (metricType === MetricsAggregator(13024).SET_METRIC_TYPE) {
        num = value.metric.weight;
      }
    }
    if (value) {
      const metric = value.metric;
      metric.add(diff);
      let obj7 = value;
      if (value.timestamp < rounded) {
        value.timestamp = rounded;
        obj7 = value;
      }
    } else {
      obj7 = { metric: null, timestamp: null, metricType: null, name: null, unit: null, tags: null };
      const tmp15 = new MetricsAggregator(13029).METRIC_MAP[metricType](diff);
      obj7.metric = tmp15;
      obj7.timestamp = rounded;
      obj7.metricType = metricType;
      obj7.name = sanitizeMetricKeyResult;
      obj7.unit = sanitizeUnitResult;
      obj7.tags = sanitizeTagsResult;
      const _buckets2 = self._buckets;
      const result = _buckets2.set(bucketKey, obj7);
    }
    if (typeof diff === "string") {
      diff = obj7.metric.weight - num;
    }
    const obj6 = MetricsAggregator(13028);
    const result1 = MetricsAggregator(12932).updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, obj, bucketKey);
    self._bucketsTotalWeight = self._bucketsTotalWeight + obj7.metric.weight;
    if (self._bucketsTotalWeight >= MetricsAggregator(13024).MAX_WEIGHT) {
      self.flush();
    }
    const tmp5Result = MetricsAggregator(12932);
  }
};
const items = [
  entry,
  {
    key: "flush",
    value: function flush() {
      this._forceFlush = true;
      this._flush();
    }
  },
  {
    key: "close",
    value: function close() {
      this._forceFlush = true;
      clearInterval(this._interval);
      this._flush();
    }
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
        const rounded = Math.floor(MetricsAggregator(12941).timestampInSeconds());
        const _Map = Map;
        const diff = rounded - MetricsAggregator(13024).DEFAULT_FLUSH_INTERVAL / 1000 - self._flushShift;
        const map = new Map();
        const _buckets = self._buckets;
        const tmp10 = _buckets[Symbol.iterator]();
        while (tmp10 !== undefined) {
          let tmp15 = _slicedToArray(tmp12, 2);
          [tmp16, tmp17] = tmp15;
          if (tmp17.timestamp <= diff) {
            let result = map.set(tmp16, tmp17);
            self._bucketsTotalWeight = self._bucketsTotalWeight - tmp17.metric.weight;
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
        const obj = MetricsAggregator(12941);
      }
    }
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
        const result = MetricsAggregator(13030).captureAggregateMetrics(this._client, mapped);
        const obj = MetricsAggregator(13030);
      }
    }
  }
];

export const MetricsAggregator = _createClass(MetricsAggregator, items);