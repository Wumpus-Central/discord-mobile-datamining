// === Module 169: ? ===

// Module 169
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let PerformanceMeasureTemplate = fn;
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
class PerformanceMarkTemplate {
  constructor(arg0, arg1) {
    self = this;
    tmp = PerformanceMeasureTemplate;
    tmp2 = c2(this, PerformanceMeasureTemplate);
    obj = { name: global, startTime: null, duration: 0 };
    startTime = undefined;
    if (fn != null) {
      startTime = fn.startTime;
    }
    if (startTime == null) {
      tmp4 = closure_0;
      tmp5 = closure_1;
      obj2 = closure_0(closure_1[5]);
      startTime = obj2.getCurrentTimeStamp();
    }
    obj.startTime = startTime;
    items = ["mark"];
    items[1] = obj;
    tmp6 = closure_4;
    obj3 = closure_4(tmp);
    tmp7 = closure_3;
    if (hasOwnProperty()) {
      tmp9 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj3, items, tmp6(self).constructor);
    } else {
      constructResult = obj3.apply(self, items);
    }
    tmp7Result = tmp7(self, constructResult);
    detail = undefined;
    if (fn != null) {
      detail = fn.detail;
    }
    if (detail == null) {
      detail = null;
    }
    tmp7Result.__detail = detail;
    return tmp7Result;
  }
}
PerformanceMeasureTemplate = PerformanceMarkTemplate;
_inherits(PerformanceMarkTemplate, fn(163).PerformanceEntry);
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
    if (fn != null) {
      startTime = fn.startTime;
    }
    if (startTime == null) {
      tmp2 = PerformanceMeasureTemplate;
      tmp3 = closure_1;
      obj2 = PerformanceMeasureTemplate(closure_1[5]);
      startTime = obj2.getCurrentTimeStamp();
    }
    obj.__startTime = startTime;
    obj.__duration = 0;
    detail = undefined;
    if (fn != null) {
      detail = fn.detail;
    }
    if (detail == null) {
      detail = null;
    }
    obj.__detail = detail;
    return;
  }
}
PerformanceMark.prototype = _createClass(PerformanceMarkTemplate, items).prototype;
class PerformanceMeasureTemplate {
  constructor(arg0) {
    self = this;
    tmp = c2(this, PerformanceMeasureTemplate);
    items = ["measure"];
    items[1] = global;
    tmp2 = closure_4;
    obj = closure_4(PerformanceMeasureTemplate);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(PerformanceMeasureTemplate, fn(163).PerformanceEntry);
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
PerformanceMeasure.prototype = _createClass(PerformanceMeasureTemplate, items1).prototype;
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