// _runtime/09834_BrowserMetricsAggregator.js
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
  value: function add(metricType, arg1, diff) {
    let str = none;
    if (none === undefined) {
      str = "none";
    }
    let obj = tags;
    if (tags === undefined) {
      obj = {};
    }
    let timestampInSecondsResult = result1;
    if (result1 === undefined) {
      timestampInSecondsResult = BrowserMetricsAggregator(9744).timestampInSeconds();
      const obj2 = BrowserMetricsAggregator(9744);
    }
    const rounded = Math.floor(timestampInSecondsResult);
    const sanitizeMetricKeyResult = BrowserMetricsAggregator(9831).sanitizeMetricKey(arg1);
    const obj3 = BrowserMetricsAggregator(9831);
    const sanitizeTagsResult = BrowserMetricsAggregator(9831).sanitizeTags(obj);
    const obj4 = BrowserMetricsAggregator(9831);
    const sanitizeUnitResult = BrowserMetricsAggregator(9831).sanitizeUnit(str);
    const obj5 = BrowserMetricsAggregator(9831);
    const bucketKey = BrowserMetricsAggregator(9831).getBucketKey(
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
      if (metricType === BrowserMetricsAggregator(9827).SET_METRIC_TYPE) {
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
      const tmp16 = new BrowserMetricsAggregator(9832).METRIC_MAP[metricType](diff);
      obj7.metric = tmp16;
      obj7.timestamp = rounded;
      obj7.metricType = metricType;
      obj7.name = sanitizeMetricKeyResult;
      obj7.unit = sanitizeUnitResult;
      obj7.tags = sanitizeTagsResult;
      const _buckets2 = this._buckets;
      const result = _buckets2.set(bucketKey, obj7);
    }
    if (typeof diff === "string") {
      diff = obj7.metric.weight - num;
    }
    const obj6 = BrowserMetricsAggregator(9831);
    result1 = BrowserMetricsAggregator(9735).updateMetricSummaryOnActiveSpan(
      metricType,
      sanitizeMetricKeyResult,
      diff,
      sanitizeUnitResult,
      obj,
      bucketKey,
    );
    const tmp5Result = BrowserMetricsAggregator(9735);
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
        const result = BrowserMetricsAggregator(9833).captureAggregateMetrics(self._client, arr);
        const _buckets2 = self._buckets;
        _buckets2.clear();
        const obj = BrowserMetricsAggregator(9833);
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
