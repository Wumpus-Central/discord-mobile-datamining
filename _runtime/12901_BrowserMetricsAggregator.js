// _runtime/12901_BrowserMetricsAggregator.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const BrowserMetricsAggregator = require;
class BrowserMetricsAggregator {
  constructor(arg0) {
    self = this;
    tmp = c2(this, BrowserMetricsAggregator);
    this._client = global;
    map = new Map();
    this._buckets = map;
    this._interval = setInterval(() => self.flush(), closure_0(closure_1[2]).DEFAULT_BROWSER_FLUSH_INTERVAL);
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
      timestampInSecondsResult = BrowserMetricsAggregator(12811).timestampInSeconds();
      const obj2 = BrowserMetricsAggregator(12811);
    }
    const rounded = Math.floor(timestampInSecondsResult);
    const sanitizeMetricKeyResult = BrowserMetricsAggregator(12898).sanitizeMetricKey(arg1);
    const obj3 = BrowserMetricsAggregator(12898);
    const sanitizeTagsResult = BrowserMetricsAggregator(12898).sanitizeTags(obj);
    const obj4 = BrowserMetricsAggregator(12898);
    const sanitizeUnitResult = BrowserMetricsAggregator(12898).sanitizeUnit(str);
    const obj5 = BrowserMetricsAggregator(12898);
    const bucketKey = BrowserMetricsAggregator(12898).getBucketKey(
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
      const tmp16 = new tmp5(12899).METRIC_MAP[metricType](diff);
      obj.metric = tmp16;
      obj.timestamp = rounded;
      obj.metricType = metricType;
      obj.name = sanitizeMetricKeyResult;
      obj.unit = sanitizeUnitResult;
      obj.tags = sanitizeTagsResult;
      const _buckets2 = this._buckets;
      const result = _buckets2.set(bucketKey, obj);
    }
    if (typeof diff === "string") {
      diff = obj.metric.weight - num;
    }
    const obj6 = BrowserMetricsAggregator(12898);
    const result1 = BrowserMetricsAggregator(12802).updateMetricSummaryOnActiveSpan(
      metricType,
      sanitizeMetricKeyResult,
      diff,
      sanitizeUnitResult,
      obj,
      bucketKey,
    );
  },
};
const items = [
  entry,
  {
    key: "flush",
    value: function flush() {
      const self = this;
      if (0 !== this._buckets.size) {
        const _Array = Array;
        const _buckets = self._buckets;
        const arr = Array.from(_buckets.values());
        const result = BrowserMetricsAggregator(12900).captureAggregateMetrics(self._client, arr);
        const _buckets2 = self._buckets;
        _buckets2.clear();
        const obj = BrowserMetricsAggregator(12900);
      }
    },
  },
  {
    key: "close",
    value: function close() {
      clearInterval(this._interval);
      this.flush();
    },
  },
];

export const BrowserMetricsAggregator = _createClass(BrowserMetricsAggregator, items);
