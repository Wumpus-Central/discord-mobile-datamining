// _runtime/00162__isNativeReflectConstruct.js
import nullthrowsDefault from "00070_nullthrows.js";
import NativePerformanceCxxDefault from "00154_NativePerformanceCxx.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import importDefaultResult from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _get from "metro/00096__get.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import importDefaultResult2 from "00091__classPrivateFieldKey.js";
import importDefaultResult1 from "00098__inherits.js";

let EventCounts = global;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_8 = nullthrowsDefault(NativePerformanceCxxDefault);
let closure_9 = importDefaultResult2("processingStart");
let closure_10 = importDefaultResult2("processingEnd");
let closure_11 = importDefaultResult2("interactionId");
class PerformanceEventTiming {
  constructor(arg0) {
    self = this;
    tmp = closure_1(this, EventCounts);
    items = ["event"];
    items[1] = global;
    tmp2 = closure_3;
    obj = closure_3(EventCounts);
    tmp3 = closure_2;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp7 = closure_9;
    definePropertyResult = Object.defineProperty(tmp3Result, closure_9, { writable: true, value: "a" });
    tmp9 = closure_10;
    definePropertyResult1 = Object.defineProperty(tmp3Result, closure_10, { writable: true, value: "a" });
    tmp11 = closure_11;
    definePropertyResult2 = Object.defineProperty(tmp3Result, closure_11, { writable: true, value: "a" });
    tmp13 = closure_5;
    num = global.processingStart;
    tmp14 = closure_5(tmp3Result, closure_9);
    if (num == null) {
      num = 0;
    }
    tmp14[tmp7] = num;
    num2 = global.processingEnd;
    tmp13Result = tmp13(tmp3Result, tmp9);
    if (num2 == null) {
      num2 = 0;
    }
    tmp13Result[tmp9] = num2;
    num3 = global.interactionId;
    tmp13Result1 = tmp13(tmp3Result, tmp11);
    if (num3 == null) {
      num3 = 0;
    }
    tmp13Result1[tmp11] = num3;
    return tmp3Result;
  }
}
EventCounts = PerformanceEventTiming;
importDefaultResult1(PerformanceEventTiming, require("PerformanceEntry").PerformanceEntry);
let obj = {
  key: "processingStart",
  get() {
    return callback4(this, closure_9)[closure_9];
  }
};
let items = [
  obj,
  {
    key: "processingEnd",
    get() {
      return callback4(this, closure_10)[closure_10];
    }
  },
  {
    key: "interactionId",
    get() {
      return callback4(this, closure_11)[closure_11];
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      const self = this;
      const tmp = callback3(callback2(self.prototype), "toJSON", this);
      closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (arg0) => callback.apply(self, arg0);
      }
      const obj = {};
      const merged = Object.assign(fn([]));
      obj.processingStart = callback4(self, closure_9)[closure_9];
      obj.processingEnd = callback4(self, closure_10)[closure_10];
      obj.interactionId = callback4(self, closure_11)[closure_11];
      return obj;
    }
  }
];
const importDefaultResultResult = importDefaultResult(PerformanceEventTiming, items);
class PerformanceEventTiming {
  constructor() {
    typeError = new TypeError("Failed to construct 'PerformanceEventTiming': Illegal constructor");
    throw typeError;
  }
}
PerformanceEventTiming.prototype = importDefaultResultResult.prototype;
class EventCounts {
  constructor() {
    tmp = closure_1(this, EventCounts);
    return;
  }
}
obj = {
  key: "size",
  get() {
    let tmp = map;
    if (!map) {
      let eventCounts = store.getEventCounts();
      if (eventCounts == null) {
        eventCounts = [];
      }
      map = new Map(eventCounts);
      EventCounts.queueMicrotask(() => {
        c7 = null;
      });
      tmp = map;
    }
    return tmp.size;
  }
};
const items1 = [
  obj,
  {
    key: "entries",
    value: function entries() {
      let obj = map;
      if (!map) {
        let eventCounts = store.getEventCounts();
        if (eventCounts == null) {
          eventCounts = [];
        }
        map = new Map(eventCounts);
        EventCounts.queueMicrotask(() => {
          c7 = null;
        });
        obj = map;
      }
      return obj.entries();
    }
  },
  {
    key: "forEach",
    value: function forEach(arg0) {
      let arr = map;
      if (!map) {
        let eventCounts = store.getEventCounts();
        if (eventCounts == null) {
          eventCounts = [];
        }
        map = new Map(eventCounts);
        EventCounts.queueMicrotask(() => {
          c7 = null;
        });
        arr = map;
      }
      return arr.forEach(arg0);
    }
  },
  {
    key: "get",
    value: function get(arg0) {
      let obj = map;
      if (!map) {
        let eventCounts = store.getEventCounts();
        if (eventCounts == null) {
          eventCounts = [];
        }
        map = new Map(eventCounts);
        EventCounts.queueMicrotask(() => {
          c7 = null;
        });
        obj = map;
      }
      return obj.get(arg0);
    }
  },
  {
    key: "has",
    value: function has(arg0) {
      let obj = map;
      if (!map) {
        let eventCounts = store.getEventCounts();
        if (eventCounts == null) {
          eventCounts = [];
        }
        map = new Map(eventCounts);
        EventCounts.queueMicrotask(() => {
          c7 = null;
        });
        obj = map;
      }
      return obj.has(arg0);
    }
  },
  {
    key: "keys",
    value: function keys() {
      let obj = map;
      if (!map) {
        let eventCounts = store.getEventCounts();
        if (eventCounts == null) {
          eventCounts = [];
        }
        map = new Map(eventCounts);
        EventCounts.queueMicrotask(() => {
          c7 = null;
        });
        obj = map;
      }
      return obj.keys();
    }
  },
  {
    key: "values",
    value: function values() {
      let obj = map;
      if (!map) {
        let eventCounts = store.getEventCounts();
        if (eventCounts == null) {
          eventCounts = [];
        }
        map = new Map(eventCounts);
        EventCounts.queueMicrotask(() => {
          c7 = null;
        });
        obj = map;
      }
      return obj.values();
    }
  }
];
const importDefaultResultResult1 = importDefaultResult(EventCounts, items1);
class EventCounts {
  constructor() {
    typeError = new TypeError("Failed to construct 'EventCounts': Illegal constructor");
    throw typeError;
  }
}
EventCounts.prototype = importDefaultResultResult1.prototype;

export const PerformanceEventTiming = importDefaultResultResult;
export const PerformanceEventTiming_public = PerformanceEventTiming;
export const EventCounts = importDefaultResultResult1;
export const EventCounts_public = EventCounts;