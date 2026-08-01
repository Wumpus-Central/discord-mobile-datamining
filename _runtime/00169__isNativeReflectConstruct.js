// === Module 169: _isNativeReflectConstruct ===

// Module 169 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult1 from "_inherits";

let PerformanceMeasureTemplate = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class PerformanceMarkTemplate {
  constructor(arg0, arg1) {
    self = this;
    tmp = PerformanceMeasureTemplate;
    tmp2 = _isNativeReflectConstruct(this, PerformanceMeasureTemplate);
    obj = { name: global, startTime: null, duration: 0 };
    startTime = undefined;
    if (arg1 != null) {
      startTime = arg1.startTime;
    }
    if (startTime == null) {
      tmp4 = PerformanceMeasureTemplate;
      tmp5 = closure_1;
      obj2 = require("warnNoNativePerformance");
      startTime = obj2.getCurrentTimeStamp();
    }
    obj[1] = startTime;
    items = ["mark"];
    items[1] = obj;
    tmp6 = _isNativeReflectConstruct;
    obj3 = _isNativeReflectConstruct(tmp);
    tmp7 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp9 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj3, items, tmp6(self).constructor);
    } else {
      constructResult = obj3.apply(self, items);
    }
    tmp7Result = tmp7(self, constructResult);
    detail = undefined;
    if (arg1 != null) {
      detail = arg1.detail;
    }
    if (detail == null) {
      detail = null;
    }
    tmp7Result.__detail = detail;
    return tmp7Result;
  }
}
PerformanceMeasureTemplate = PerformanceMarkTemplate;
importDefaultResult1(PerformanceMarkTemplate, require("PerformanceEntry").PerformanceEntry);
let obj = {
  key: "detail",
  get() {
    return this.__detail;
  }
};
let items = [obj];
class PerformanceMark {
  constructor(arg0, arg1) {
    obj = { __entryType: "mark", __name: global };
    startTime = undefined;
    if (arg1 != null) {
      startTime = arg1.startTime;
    }
    if (startTime == null) {
      tmp2 = PerformanceMeasureTemplate;
      tmp3 = closure_1;
      obj2 = require("warnNoNativePerformance");
      startTime = obj2.getCurrentTimeStamp();
    }
    obj.__startTime = startTime;
    obj.__duration = 0;
    detail = undefined;
    if (arg1 != null) {
      detail = arg1.detail;
    }
    if (detail == null) {
      detail = null;
    }
    obj.__detail = detail;
    return;
  }
}
PerformanceMark.prototype = importDefaultResult(PerformanceMarkTemplate, items).prototype;
class PerformanceMeasureTemplate {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, PerformanceMeasureTemplate);
    items = ["measure"];
    items[1] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(PerformanceMeasureTemplate);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    detail = undefined;
    if (global != null) {
      detail = global.detail;
    }
    if (detail == null) {
      detail = null;
    }
    tmp3Result.__detail = detail;
    return tmp3Result;
  }
}
importDefaultResult1(PerformanceMeasureTemplate, require("PerformanceEntry").PerformanceEntry);
obj = {
  key: "detail",
  get() {
    return this.__detail;
  }
};
const items1 = [obj];
class PerformanceMeasure {
  constructor(arg0) {
    obj = { __entryType: "measure", __name: global.name, __startTime: global.startTime, __duration: global.duration };
    detail = global.detail;
    if (detail == null) {
      detail = null;
    }
    obj.__detail = detail;
    return;
  }
}
PerformanceMeasure.prototype = importDefaultResult(PerformanceMeasureTemplate, items1).prototype;
class PerformanceMeasure {
  constructor() {
    typeError = new TypeError("Failed to construct 'PerformanceMeasure': Illegal constructor");
    throw typeError;
  }
}
PerformanceMeasure.prototype = PerformanceMeasure.prototype;

export { PerformanceMark };
export { PerformanceMeasure };
export const PerformanceMeasure_public = PerformanceMeasure;