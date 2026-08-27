// === Module 12353: BrowserMetricsAggregator ===

// Module 12353 (BrowserMetricsAggregator)
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const BrowserMetricsAggregator = require;
class BrowserMetricsAggregator {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, self);
    this._client = global;
    map = new Map();
    this._buckets = map;
    this._interval = setInterval(() => self.flush(), require("module_12346").DEFAULT_BROWSER_FLUSH_INTERVAL);
    return;
  }
}
const items = [
  {
    key: "add",
    value: function add(arg0, arg1, diff) {
      let str = arg3;
      if (arg3 === undefined) {
        str = "none";
      }
      let obj = arg4;
      if (arg4 === undefined) {
        obj = {};
      }
      let timestampInSecondsResult = arg5;
      if (arg5 === undefined) {
        timestampInSecondsResult = BrowserMetricsAggregator(12263).timestampInSeconds();
        const obj2 = BrowserMetricsAggregator(12263);
      }
      const rounded = Math.floor(timestampInSecondsResult);
      const sanitizeMetricKeyResult = BrowserMetricsAggregator(12350).sanitizeMetricKey(arg1);
      const obj3 = BrowserMetricsAggregator(12350);
      const sanitizeTagsResult = BrowserMetricsAggregator(12350).sanitizeTags(obj);
      const obj4 = BrowserMetricsAggregator(12350);
      const sanitizeUnitResult = BrowserMetricsAggregator(12350).sanitizeUnit(str);
      const obj5 = BrowserMetricsAggregator(12350);
      const bucketKey = BrowserMetricsAggregator(12350).getBucketKey(arg0, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
      const _buckets = this._buckets;
      const value = _buckets.get(bucketKey);
      let num = 0;
      if (value) {
        num = 0;
        if (arg0 === tmp5(12346).SET_METRIC_TYPE) {
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
        const tmp16 = new tmp5(12351).METRIC_MAP[arg0](diff);
        obj[0] = tmp16;
        obj[1] = rounded;
        obj[2] = arg0;
        obj[3] = sanitizeMetricKeyResult;
        obj[4] = sanitizeUnitResult;
        obj[5] = sanitizeTagsResult;
        const _buckets2 = this._buckets;
        const result = _buckets2.set(bucketKey, obj);
      }
      if (typeof diff === "string") {
        diff = obj.metric.weight - num;
      }
      const obj6 = BrowserMetricsAggregator(12350);
      const result1 = BrowserMetricsAggregator(12254).updateMetricSummaryOnActiveSpan(arg0, sanitizeMetricKeyResult, diff, sanitizeUnitResult, obj, bucketKey);
    }
  },
  {
    key: "flush",
    value: function flush() {
      const self = this;
      if (0 !== this._buckets.size) {
        const _Array = Array;
        const _buckets = self._buckets;
        const arr = Array.from(_buckets.values());
        const result = BrowserMetricsAggregator(12352).captureAggregateMetrics(self._client, arr);
        const _buckets2 = self._buckets;
        _buckets2.clear();
        const obj = BrowserMetricsAggregator(12352);
      }
    }
  },
  {
    key: "close",
    value: function close() {
      clearInterval(this._interval);
      this.flush();
    }
  }
];

export const BrowserMetricsAggregator = _createClass(BrowserMetricsAggregator, items);