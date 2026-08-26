// _runtime/07767_BrowserMetricsAggregator.js
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const BrowserMetricsAggregator = require;
class BrowserMetricsAggregator {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, self);
    this._client = global;
    map = new Map();
    this._buckets = map;
    this._interval = setInterval(() => self.flush(), require("metro/07760__.js").DEFAULT_BROWSER_FLUSH_INTERVAL);
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
        timestampInSecondsResult = BrowserMetricsAggregator(7677).timestampInSeconds();
        const obj2 = BrowserMetricsAggregator(7677);
      }
      const rounded = Math.floor(timestampInSecondsResult);
      const sanitizeMetricKeyResult = BrowserMetricsAggregator(7764).sanitizeMetricKey(arg1);
      const obj3 = BrowserMetricsAggregator(7764);
      const sanitizeTagsResult = BrowserMetricsAggregator(7764).sanitizeTags(obj);
      const obj4 = BrowserMetricsAggregator(7764);
      const sanitizeUnitResult = BrowserMetricsAggregator(7764).sanitizeUnit(str);
      const obj5 = BrowserMetricsAggregator(7764);
      const bucketKey = BrowserMetricsAggregator(7764).getBucketKey(arg0, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
      const _buckets = this._buckets;
      const value = _buckets.get(bucketKey);
      let num = 0;
      if (value) {
        num = 0;
        if (arg0 === tmp5(7760).SET_METRIC_TYPE) {
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
        const tmp16 = new tmp5(7765).METRIC_MAP[arg0](diff);
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
      const obj6 = BrowserMetricsAggregator(7764);
      const result1 = BrowserMetricsAggregator(7668).updateMetricSummaryOnActiveSpan(arg0, sanitizeMetricKeyResult, diff, sanitizeUnitResult, obj, bucketKey);
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
        const result = BrowserMetricsAggregator(7766).captureAggregateMetrics(self._client, arr);
        const _buckets2 = self._buckets;
        _buckets2.clear();
        const obj = BrowserMetricsAggregator(7766);
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