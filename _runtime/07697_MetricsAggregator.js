// _runtime/07697_MetricsAggregator.js
import closure_2 from "metro/00032__slicedToArray.js";
import closure_3 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const MetricsAggregator = require;
class MetricsAggregator {
  constructor(arg0) {
    self = this;
    self = this;
    tmp = closure_3(this, self);
    this._client = global;
    map = new Map();
    this._buckets = map;
    this._bucketsTotalWeight = 0;
    tmp3 = MetricsAggregator;
    tmp4 = closure_1;
    this._interval = setInterval(() => self._flush(), require("metro/07694__.js").DEFAULT_FLUSH_INTERVAL);
    if (this._interval.unref) {
      _interval = self._interval;
      unrefResult = _interval.unref();
    }
    random = Math.random();
    self._flushShift = Math.floor(random * require("metro/07694__.js").DEFAULT_FLUSH_INTERVAL / 1000);
    self._forceFlush = false;
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
        timestampInSecondsResult = MetricsAggregator(7611).timestampInSeconds();
        const obj2 = MetricsAggregator(7611);
      }
      const self = this;
      const rounded = Math.floor(timestampInSecondsResult);
      const sanitizeMetricKeyResult = MetricsAggregator(7698).sanitizeMetricKey(arg1);
      const obj3 = MetricsAggregator(7698);
      const sanitizeTagsResult = MetricsAggregator(7698).sanitizeTags(obj);
      const obj4 = MetricsAggregator(7698);
      const sanitizeUnitResult = MetricsAggregator(7698).sanitizeUnit(str);
      const obj5 = MetricsAggregator(7698);
      const bucketKey = MetricsAggregator(7698).getBucketKey(arg0, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
      const _buckets = this._buckets;
      const value = _buckets.get(bucketKey);
      let num = 0;
      if (value) {
        num = 0;
        if (arg0 === tmp5(7694).SET_METRIC_TYPE) {
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
        const tmp15 = new tmp5(7699).METRIC_MAP[arg0](diff);
        obj[0] = tmp15;
        obj[1] = rounded;
        obj[2] = arg0;
        obj[3] = sanitizeMetricKeyResult;
        obj[4] = sanitizeUnitResult;
        obj[5] = sanitizeTagsResult;
        const _buckets2 = self._buckets;
        const result = _buckets2.set(bucketKey, obj);
      }
      if (typeof diff === "string") {
        diff = obj.metric.weight - num;
      }
      const obj6 = MetricsAggregator(7698);
      const result1 = MetricsAggregator(7602).updateMetricSummaryOnActiveSpan(arg0, sanitizeMetricKeyResult, diff, sanitizeUnitResult, obj, bucketKey);
      self._bucketsTotalWeight = self._bucketsTotalWeight + obj.metric.weight;
      if (self._bucketsTotalWeight >= MetricsAggregator(7694).MAX_WEIGHT) {
        self.flush();
      }
    }
  },
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
        const rounded = Math.floor(MetricsAggregator(7611).timestampInSeconds());
        const _Map = Map;
        const diff = rounded - MetricsAggregator(7694).DEFAULT_FLUSH_INTERVAL / 1000 - self._flushShift;
        const map = new Map();
        const _buckets = self._buckets;
        const tmp10 = _buckets[Symbol.iterator]();
        while (tmp10 !== undefined) {
          let tmp14 = callback;
          let tmp15 = callback(tmp12, 2);
          [tmp16, tmp17] = tmp15;
          let tmp18 = tmp17;
          if (tmp17.timestamp <= diff) {
            let tmp19 = tmp16;
            let tmp20 = tmp17;
            let result = map.set(tmp16, tmp18);
            self._bucketsTotalWeight = self._bucketsTotalWeight - tmp18.metric.weight;
          }
          continue;
        }
        const tmp23 = map[Symbol.iterator]();
        while (tmp23 !== undefined) {
          let tmp27 = callback;
          let _buckets2 = self._buckets;
          let deleteResult = _buckets2.delete(callback(tmp25, 1)[0]);
          continue;
        }
        self._captureMetrics(map);
      }
    }
  },
  {
    key: "_captureMetrics",
    value: function _captureMetrics(_buckets) {
      if (_buckets.size > 0) {
        const self = this;
        const _Array = Array;
        const mapped = Array.from(_buckets).map((arg0) => {
          [, tmp] = arg0;
          return tmp;
        });
        const arr = Array.from(_buckets);
        const result = MetricsAggregator(7700).captureAggregateMetrics(this._client, mapped);
        const obj = MetricsAggregator(7700);
      }
    }
  }
];

export const MetricsAggregator = _createClass(MetricsAggregator, items);