// _runtime/00169_PerformanceMark.js
import PerformanceEntry from "00163_PerformanceEntry.js";
import warnNoNativePerformance from "00164_warnNoNativePerformance.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
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
class PerformanceMarkTemplate {
  constructor(name, startTime) {
    let constructResult;
    const self = this;
    _classCallCheck(this, PerformanceMarkTemplate);
    const obj = { name, startTime, duration: 0 };
    startTime = undefined;
    if (startTime != null) {
      startTime = startTime.startTime;
    }
    if (startTime == null) {
      const obj2 = warnNoNativePerformance;
      startTime = obj2.getCurrentTimeStamp();
    }
    const items = ["mark", obj];
    const obj3 = _getPrototypeOf(PerformanceMarkTemplate);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj3, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj3.apply(self, items);
    }
    const tmp7Result = c3(self, constructResult);
    let detail;
    if (startTime != null) {
      detail = startTime.detail;
    }
    if (detail == null) {
      detail = null;
    }
    tmp7Result.__detail = detail;
    return tmp7Result;
  }
}
_inherits(PerformanceMarkTemplate, PerformanceEntry.PerformanceEntry);
let obj = {
  key: "detail",
  get() {
    return this.__detail;
  },
};
let items = [obj];
class PerformanceMark {
  constructor(StringResult, startTime) {
    startTime = undefined;
    if (startTime != null) {
      startTime = startTime.startTime;
    }
    if (startTime == null) {
      const obj2 = warnNoNativePerformance;
      startTime = obj2.getCurrentTimeStamp();
    }
    let detail;
    if (startTime != null) {
      detail = startTime.detail;
    }
    if (detail == null) {
      detail = null;
    }
  }
}
PerformanceMark.prototype = _createClass(PerformanceMarkTemplate, items).prototype;
class PerformanceMeasureTemplate {
  constructor(detail) {
    let constructResult;
    const self = this;
    _classCallCheck(this, PerformanceMeasureTemplate);
    const items = ["measure", detail];
    const obj = _getPrototypeOf(PerformanceMeasureTemplate);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    detail = undefined;
    if (detail != null) {
      detail = detail.detail;
    }
    if (detail == null) {
      detail = null;
    }
    tmp3Result.__detail = detail;
    return tmp3Result;
  }
}
_inherits(PerformanceMeasureTemplate, PerformanceEntry.PerformanceEntry);
let obj2 = {
  key: "detail",
  get() {
    return this.__detail;
  },
};
const items1 = [obj2];
class PerformanceMeasure {
  constructor(__name) {
    let detail = __name.detail;
    if (detail == null) {
      detail = null;
    }
  }
}
PerformanceMeasure.prototype = _createClass(PerformanceMeasureTemplate, items1).prototype;
tmp6.prototype = PerformanceMeasure.prototype;

export { PerformanceMark };
export { PerformanceMeasure };
export const PerformanceMeasure_public = tmp6;
