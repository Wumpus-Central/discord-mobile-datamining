// _runtime/00171_TaskAttributionTiming.js
import PerformanceEntry from "00163_PerformanceEntry.js";
import _get from "metro/00096__get.js";
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import c2 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
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
  },
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
    },
  },
];
const importDefaultResultResult1 = _createClass(PerformanceLongTaskTiming, items);
tmp9.prototype = importDefaultResultResult1.prototype;
const TaskAttributionTiming_export = importDefaultResultResult;
const PerformanceLongTaskTiming_export = importDefaultResultResult1;

export { TaskAttributionTiming_export as TaskAttributionTiming };
export const TaskAttributionTiming_public = tmp6;
export { PerformanceLongTaskTiming_export as PerformanceLongTaskTiming };
export const PerformanceLongTaskTiming_public = tmp9;
