// === Module 162: PerformanceEventTiming ===

// Module 162 (PerformanceEventTiming)
import _modDef154 from "module_154" /* 154 */;
import PerformanceEntry from "PerformanceEntry" /* 163 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;
import nullthrows from "nullthrows" /* 70 */;

let _Map1, c7;

const f80256 = () => {
  c7 = null;
};
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const NativePerformanceCxx = nullthrows(_modDef154);
let closure_9 = _classPrivateFieldKey("processingStart");
let closure_10 = _classPrivateFieldKey("processingEnd");
let closure_11 = _classPrivateFieldKey("interactionId");
class PerformanceEventTiming {
  constructor(processingStart) {
    let constructResult;
    const self = this;
    _classCallCheck(this, PerformanceEventTiming);
    const items = ["event", processingStart];
    const obj = _getPrototypeOf(PerformanceEventTiming);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c2(self, constructResult);
    Object.defineProperty(tmp3Result, closure_9, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_10, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_11, { writable: true, value: "a" });
    let num = processingStart.processingStart;
    const tmp14 = _classPrivateFieldBase(tmp3Result, closure_9);
    if (num == null) {
      num = 0;
    }
    tmp14[closure_9] = num;
    let num2 = processingStart.processingEnd;
    const tmp13Result = _classPrivateFieldBase(tmp3Result, closure_10);
    if (num2 == null) {
      num2 = 0;
    }
    tmp13Result[closure_10] = num2;
    let num3 = processingStart.interactionId;
    const tmp13Result2 = _classPrivateFieldBase(tmp3Result, closure_11);
    if (num3 == null) {
      num3 = 0;
    }
    tmp13Result2[closure_11] = num3;
    return tmp3Result;
  }
}
_inherits(PerformanceEventTiming, PerformanceEntry.PerformanceEntry);
let obj = {
  key: "processingStart",
  get() {
    return _classPrivateFieldBase(this, closure_9)[closure_9];
  }
};
let items = [
  obj,
  {
    key: "processingEnd",
    get() {
      return _classPrivateFieldBase(this, closure_10)[closure_10];
    }
  },
  {
    key: "interactionId",
    get() {
      return _classPrivateFieldBase(this, closure_11)[closure_11];
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      const self = this;
      const tmp = _get(_getPrototypeOf(PerformanceEventTiming.prototype), "toJSON", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (arg0) => closure_1.apply(self, arg0);
      }
      const obj = { processingStart: _classPrivateFieldBase(self, closure_9)[closure_9], processingEnd: _classPrivateFieldBase(self, closure_10)[closure_10], interactionId: _classPrivateFieldBase(self, closure_11)[closure_11] };
      const merged = Object.assign(fn([]));
      return obj;
    }
  }
];
const importDefaultResultResult = _createClass(PerformanceEventTiming, items);
tmp8.prototype = importDefaultResultResult.prototype;
class EventCounts {
  constructor() {
    _classCallCheck(this, EventCounts);
  }
}
const items1 = [, , , , , , ];
const obj2 = {
  key: "size",
  get() {
    let tmp = _Map1;
    if (!tmp) {
      const _Map = Map;
      let eventCounts = NativePerformanceCxx.getEventCounts();
      if (eventCounts == null) {
        eventCounts = [];
      }
      const self = this;
      const self2 = this;
      _Map1 = new _Map(eventCounts);
      global.queueMicrotask(f80256);
      tmp = _Map1;
    }
    return tmp.size;
  }
};
items1[0] = obj2;
items1[1] = {
  key: "entries",
  value: function entries() {
    let obj = _Map1;
    if (!obj) {
      const _Map = Map;
      let eventCounts = NativePerformanceCxx.getEventCounts();
      if (eventCounts == null) {
        eventCounts = [];
      }
      const self = this;
      const self2 = this;
      _Map1 = new _Map(eventCounts);
      global.queueMicrotask(f80256);
      obj = _Map1;
    }
    return obj.entries();
  }
};
items1[2] = {
  key: "forEach",
  value: function forEach(arg0) {
    let arr = _Map1;
    if (!arr) {
      const _Map = Map;
      let eventCounts = NativePerformanceCxx.getEventCounts();
      if (eventCounts == null) {
        eventCounts = [];
      }
      const self = this;
      const self2 = this;
      _Map1 = new _Map(eventCounts);
      global.queueMicrotask(f80256);
      arr = _Map1;
    }
    return arr.forEach(arg0);
  }
};
items1[3] = {
  key: "get",
  value: function get(arg0) {
    let obj = _Map1;
    if (!obj) {
      const _Map = Map;
      let eventCounts = NativePerformanceCxx.getEventCounts();
      if (eventCounts == null) {
        eventCounts = [];
      }
      const self = this;
      const self2 = this;
      _Map1 = new _Map(eventCounts);
      global.queueMicrotask(f80256);
      obj = _Map1;
    }
    return obj.get(arg0);
  }
};
items1[4] = {
  key: "has",
  value: function has(arg0) {
    let obj = _Map1;
    if (!obj) {
      const _Map = Map;
      let eventCounts = NativePerformanceCxx.getEventCounts();
      if (eventCounts == null) {
        eventCounts = [];
      }
      const self = this;
      const self2 = this;
      _Map1 = new _Map(eventCounts);
      global.queueMicrotask(f80256);
      obj = _Map1;
    }
    return obj.has(arg0);
  }
};
items1[5] = {
  key: "keys",
  value: function keys() {
    let obj = _Map1;
    if (!obj) {
      const _Map = Map;
      let eventCounts = NativePerformanceCxx.getEventCounts();
      if (eventCounts == null) {
        eventCounts = [];
      }
      const self = this;
      const self2 = this;
      _Map1 = new _Map(eventCounts);
      global.queueMicrotask(f80256);
      obj = _Map1;
    }
    return obj.keys();
  }
};
items1[6] = {
  key: "values",
  value: function values() {
    let obj = _Map1;
    if (!obj) {
      const _Map = Map;
      let eventCounts = NativePerformanceCxx.getEventCounts();
      if (eventCounts == null) {
        eventCounts = [];
      }
      const self = this;
      const self2 = this;
      _Map1 = new _Map(eventCounts);
      global.queueMicrotask(f80256);
      obj = _Map1;
    }
    return obj.values();
  }
};
const importDefaultResultResult1 = _createClass(EventCounts, items1);
tmp10.prototype = importDefaultResultResult1.prototype;
const PerformanceEventTiming_export = importDefaultResultResult;
const EventCounts_export = importDefaultResultResult1;

export { PerformanceEventTiming_export as PerformanceEventTiming };
export const PerformanceEventTiming_public = tmp8;
export { EventCounts_export as EventCounts };
export const EventCounts_public = tmp10;