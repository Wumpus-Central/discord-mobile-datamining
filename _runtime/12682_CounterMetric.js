// _runtime/12682_CounterMetric.js
import COUNTER_METRIC_TYPE from "12677_COUNTER_METRIC_TYPE.js";
import _mod12681 from "metro/12681__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class CounterMetric {
  constructor(_value) {
    _classCallCheck(this, CounterMetric);
    this._value = _value;
  }
}
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
  constructor(_last) {
    _classCallCheck(this, GaugeMetric);
    this._last = _last;
    this._min = _last;
    this._max = _last;
    this._sum = _last;
    this._count = 1;
  }
}
const items1 = [, ,];
const obj2 = {
  key: "weight",
  get() {
    return 5;
  },
};
items1[0] = obj2;
items1[1] = {
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
};
items1[2] = {
  key: "toString",
  value: function toString() {
    return "" + this._last + ":" + this._min + ":" + this._max + ":" + this._sum + ":" + this._count;
  },
};
const _moduleResult1 = _createClass(GaugeMetric, items1);
class DistributionMetric {
  constructor(arg0) {
    _classCallCheck(this, DistributionMetric);
    const items = [arg0];
    this._value = items;
  }
}
const items2 = [, ,];
const obj3 = {
  key: "weight",
  get() {
    return this._value.length;
  },
};
items2[0] = obj3;
items2[1] = {
  key: "add",
  value: function add(arg0) {
    const _value = this._value;
    _value.push(arg0);
  },
};
items2[2] = {
  key: "toString",
  value: function toString() {
    const _value = this._value;
    return _value.join(":");
  },
};
const _moduleResult2 = _createClass(DistributionMetric, items2);
class SetMetric {
  constructor(arg0) {
    _classCallCheck(this, SetMetric);
    this.first = arg0;
    const items = [arg0];
    this._value = new Set(items);
    new Set(items);
  }
}
const items3 = [, ,];
const obj4 = {
  key: "weight",
  get() {
    return this._value.size;
  },
};
items3[0] = obj4;
items3[1] = {
  key: "add",
  value: function add(arg0) {
    const _value = this._value;
    _value.add(arg0);
  },
};
items3[2] = {
  key: "toString",
  value: function toString() {
    const arr = Array.from(this._value);
    const mapped = arr.map((item) => {
      let simpleHashResult = item;
      if (typeof item === "string") {
        const obj = _mod12681;
        simpleHashResult = obj.simpleHash(item);
      }
      return simpleHashResult;
    });
    return mapped.join(":");
  },
};
const _moduleResult3 = _createClass(SetMetric, items3);
const CounterMetric_export = _moduleResult;
const DistributionMetric_export = _moduleResult2;
const GaugeMetric_export = _moduleResult1;
const SetMetric_export = _moduleResult3;

export { CounterMetric_export as CounterMetric };
export { DistributionMetric_export as DistributionMetric };
export { GaugeMetric_export as GaugeMetric };
export const METRIC_MAP = {
  [COUNTER_METRIC_TYPE.COUNTER_METRIC_TYPE]: _moduleResult,
  [COUNTER_METRIC_TYPE.GAUGE_METRIC_TYPE]: _moduleResult1,
  [COUNTER_METRIC_TYPE.DISTRIBUTION_METRIC_TYPE]: _moduleResult2,
  [COUNTER_METRIC_TYPE.SET_METRIC_TYPE]: _moduleResult3,
};
export { SetMetric_export as SetMetric };
