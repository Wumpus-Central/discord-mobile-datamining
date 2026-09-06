// _runtime/12899_CounterMetric.js
import COUNTER_METRIC_TYPE from "12894_COUNTER_METRIC_TYPE.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let SetMetric = require;
class CounterMetric {
  constructor(arg0) {
    tmp = c2(this, SetMetric);
    this._value = global;
    return;
  }
}
SetMetric = CounterMetric;
let obj = {
  key: "weight",
  get() {
    return 1;
  },
};
let items = [
  obj,
  {
    key: "add",
    value: function add(arg0) {
      this._value = this._value + arg0;
    },
  },
  {
    key: "toString",
    value: function toString() {
      return "" + this._value;
    },
  },
];
const _moduleResult = _createClass(CounterMetric, items);
class GaugeMetric {
  constructor(arg0) {
    tmp = c2(this, SetMetric);
    this._last = global;
    this._min = global;
    this._max = global;
    this._sum = global;
    this._count = 1;
    return;
  }
}
SetMetric = GaugeMetric;
obj = {
  key: "weight",
  get() {
    return 5;
  },
};
const items1 = [
  obj,
  {
    key: "add",
    value: function add(_last) {
      const self = this;
      this._last = _last;
      if (_last < this._min) {
        self._min = _last;
      }
      if (_last > self._max) {
        self._max = _last;
      }
      self._sum = self._sum + _last;
      self._count = self._count + 1;
    },
  },
  {
    key: "toString",
    value: function toString() {
      return "" + this._last + ":" + this._min + ":" + this._max + ":" + this._sum + ":" + this._count;
    },
  },
];
const _moduleResult1 = _createClass(GaugeMetric, items1);
class DistributionMetric {
  constructor(arg0) {
    tmp = c2(this, SetMetric);
    items = [];
    items[0] = global;
    this._value = items;
    return;
  }
}
SetMetric = DistributionMetric;
obj = {
  key: "weight",
  get() {
    return this._value.length;
  },
};
const items2 = [
  obj,
  {
    key: "add",
    value: function add(arg0) {
      const _value = this._value;
      _value.push(arg0);
    },
  },
  {
    key: "toString",
    value: function toString() {
      const _value = this._value;
      return _value.join(":");
    },
  },
];
const _moduleResult2 = _createClass(DistributionMetric, items2);
class SetMetric {
  constructor(arg0) {
    tmp = c2(this, SetMetric);
    this.first = global;
    items = [];
    items[0] = global;
    set = new Set(items);
    this._value = set;
    return;
  }
}
const items3 = [
  {
    key: "weight",
    get() {
      return this._value.size;
    },
  },
  {
    key: "add",
    value: function add(arg0) {
      const _value = this._value;
      _value.add(arg0);
    },
  },
  {
    key: "toString",
    value: function toString() {
      const mapped = Array.from(this._value).map((item) => {
        let simpleHashResult = item;
        if (typeof item === "string") {
          simpleHashResult = SetMetric(dependencyMap[2]).simpleHash(item);
          const obj = SetMetric(dependencyMap[2]);
        }
        return simpleHashResult;
      });
      return mapped.join(":");
    },
  },
];
const _moduleResult3 = _createClass(SetMetric, items3);

export const CounterMetric = _moduleResult;
export const DistributionMetric = _moduleResult2;
export const GaugeMetric = _moduleResult1;
export const METRIC_MAP = {
  [COUNTER_METRIC_TYPE.COUNTER_METRIC_TYPE]: _moduleResult,
  [COUNTER_METRIC_TYPE.GAUGE_METRIC_TYPE]: _moduleResult1,
  [COUNTER_METRIC_TYPE.DISTRIBUTION_METRIC_TYPE]: _moduleResult2,
  [COUNTER_METRIC_TYPE.SET_METRIC_TYPE]: _moduleResult3,
};
export const SetMetric = _moduleResult3;
