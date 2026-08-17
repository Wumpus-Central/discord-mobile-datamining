// _runtime/00171__isNativeReflectConstruct.js
import PerformanceLongTaskTiming from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;
import closure_1 from "_classCallCheck" /* 41 */;
import closure_2 from "_possibleConstructorReturn" /* 93 */;
import closure_3 from "_getPrototypeOf" /* 95 */;
import importDefaultResult1 from "_inherits" /* 98 */;

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
class TaskAttributionTiming {
  constructor() {
    self = this;
    tmp = closure_1(this, PerformanceLongTaskTiming);
    tmp2 = closure_3;
    obj = closure_3(PerformanceLongTaskTiming);
    tmp3 = closure_2;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
PerformanceLongTaskTiming = TaskAttributionTiming;
importDefaultResult1(TaskAttributionTiming, require("PerformanceEntry").PerformanceEntry);
const importDefaultResultResult = importDefaultResult(TaskAttributionTiming);
class TaskAttributionTiming {
  constructor() {
    typeError = new TypeError("Failed to construct 'TaskAttributionTiming': Illegal constructor");
    throw typeError;
  }
}
TaskAttributionTiming.prototype = importDefaultResultResult.prototype;
let closure_5 = Object.preventExtensions([]);
class PerformanceLongTaskTiming {
  constructor(arg0) {
    self = this;
    tmp = closure_1(this, PerformanceLongTaskTiming);
    items = ["longtask"];
    items[1] = global;
    tmp2 = closure_3;
    obj = closure_3(PerformanceLongTaskTiming);
    tmp3 = closure_2;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return tmp3(self, constructResult);
  }
}
importDefaultResult1(PerformanceLongTaskTiming, require("PerformanceEntry").PerformanceEntry);
let items = [
  {
    key: "attribution",
    get() {
      return closure_5;
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      const self = this;
      const tmp = PerformanceLongTaskTiming(callback2(self.prototype), "toJSON", this);
      closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (arg0) => callback.apply(self, arg0);
      }
      const obj = {};
      const merged = Object.assign(fn([]));
      obj.attribution = this.attribution;
      return obj;
    }
  }
];
const importDefaultResultResult1 = importDefaultResult(PerformanceLongTaskTiming, items);
class PerformanceLongTaskTiming {
  constructor() {
    typeError = new TypeError("Failed to construct 'PerformanceLongTaskTiming': Illegal constructor");
    throw typeError;
  }
}
PerformanceLongTaskTiming.prototype = importDefaultResultResult1.prototype;

export const TaskAttributionTiming = importDefaultResultResult;
export const TaskAttributionTiming_public = TaskAttributionTiming;
export const PerformanceLongTaskTiming = importDefaultResultResult1;
export const PerformanceLongTaskTiming_public = PerformanceLongTaskTiming;