// === Module 171: TaskAttributionTiming ===

// Module 171 (TaskAttributionTiming)
import PerformanceEntry from "PerformanceEntry" /* 163 */;
import _get from "_get" /* 96 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
class TaskAttributionTiming {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, TaskAttributionTiming);
    const obj = _getPrototypeOf(TaskAttributionTiming);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c2(self, constructResult);
  }
}
_inherits(TaskAttributionTiming, PerformanceEntry.PerformanceEntry);
const importDefaultResultResult = _createClass(TaskAttributionTiming);
tmp6.prototype = importDefaultResultResult.prototype;
let closure_5 = Object.preventExtensions([]);
class PerformanceLongTaskTiming {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, PerformanceLongTaskTiming);
    const items = ["longtask", arg0];
    const obj = _getPrototypeOf(PerformanceLongTaskTiming);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return c2(self, constructResult);
  }
}
_inherits(PerformanceLongTaskTiming, PerformanceEntry.PerformanceEntry);
let obj = {
  key: "attribution",
  get() {
    return closure_5;
  }
};
let items = [
  obj,
  {
    key: "toJSON",
    value: function toJSON() {
      const self = this;
      const tmp = _get(_getPrototypeOf(PerformanceLongTaskTiming.prototype), "toJSON", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (arg0) => closure_1.apply(self, arg0);
      }
      const obj = { attribution: this.attribution };
      const merged = Object.assign(fn([]));
      return obj;
    }
  }
];
const importDefaultResultResult1 = _createClass(PerformanceLongTaskTiming, items);
tmp9.prototype = importDefaultResultResult1.prototype;
const TaskAttributionTiming_export = importDefaultResultResult;
const PerformanceLongTaskTiming_export = importDefaultResultResult1;

export { TaskAttributionTiming_export as TaskAttributionTiming };
export const TaskAttributionTiming_public = tmp6;
export { PerformanceLongTaskTiming_export as PerformanceLongTaskTiming };
export const PerformanceLongTaskTiming_public = tmp9;