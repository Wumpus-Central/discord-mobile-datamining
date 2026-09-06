// === Module 172: ? ===

// Module 172
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;

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
_possibleConstructorReturnDefault;
let closure_6 = _classPrivateFieldKey("fetchStart");
let closure_7 = _classPrivateFieldKey("requestStart");
let closure_8 = _classPrivateFieldKey("connectStart");
let closure_9 = _classPrivateFieldKey("connectEnd");
let closure_10 = _classPrivateFieldKey("responseStart");
let closure_11 = _classPrivateFieldKey("responseEnd");
let closure_12 = _classPrivateFieldKey("responseStatus");
let closure_13 = _classPrivateFieldKey("contentType");
let closure_14 = _classPrivateFieldKey("encodedBodySize");
let closure_15 = _classPrivateFieldKey("decodedBodySize");
class PerformanceResourceTiming {
  constructor(arg0) {
    self = this;
    tmp = closure_0(this, PerformanceResourceTiming);
    items = ["resource"];
    items[1] = global;
    tmp2 = c2;
    obj = c2(PerformanceResourceTiming);
    tmp3 = closure_1;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    definePropertyResult = Object.defineProperty(tmp3Result, metroRequire, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(tmp3Result, closure_7, { writable: true, value: "a" });
    definePropertyResult2 = Object.defineProperty(tmp3Result, closure_8, { writable: true, value: "a" });
    definePropertyResult3 = Object.defineProperty(tmp3Result, closure_9, { writable: true, value: "a" });
    definePropertyResult4 = Object.defineProperty(tmp3Result, c10, { writable: true, value: "a" });
    definePropertyResult5 = Object.defineProperty(tmp3Result, closure_11, { writable: true, value: "a" });
    definePropertyResult6 = Object.defineProperty(tmp3Result, closure_12, { writable: true, value: "a" });
    definePropertyResult7 = Object.defineProperty(tmp3Result, closure_13, { writable: true, value: "a" });
    definePropertyResult8 = Object.defineProperty(tmp3Result, closure_2_14, { writable: true, value: "a" });
    definePropertyResult9 = Object.defineProperty(tmp3Result, closure_2_15, { writable: true, value: "a" });
    ({ fetchStart: closure_4(undefined, tmp6, metroRequire)[metroRequire], requestStart: closure_4(undefined, tmp6, closure_7)[closure_7], connectStart: closure_4(undefined, tmp6, closure_8)[closure_8], connectEnd: closure_4(undefined, tmp6, closure_9)[closure_9], responseStart: closure_4(undefined, tmp6, c10)[c10], responseEnd: closure_4(undefined, tmp6, closure_11)[closure_11], responseStatus: closure_4(undefined, tmp6, closure_12)[closure_12], contentType: closure_4(undefined, tmp6, closure_13)[closure_13], encodedBodySize: closure_4(undefined, tmp6, closure_2_14)[closure_2_14], decodedBodySize: closure_4(undefined, tmp6, closure_2_15)[closure_2_15] } = global);
    return tmp3Result;
  }
}
_classCallCheck = PerformanceResourceTiming;
_inherits(PerformanceResourceTiming, fn(163).PerformanceEntry);
let items = [
  {
    key: "fetchStart",
    get() {
      return _classPrivateFieldBase(this, closure_6)[closure_6];
    }
  },
  {
    key: "requestStart",
    get() {
      return _classPrivateFieldBase(this, closure_7)[closure_7];
    }
  },
  {
    key: "connectStart",
    get() {
      return _classPrivateFieldBase(this, closure_8)[closure_8];
    }
  },
  {
    key: "connectEnd",
    get() {
      return _classPrivateFieldBase(this, closure_9)[closure_9];
    }
  },
  {
    key: "responseStart",
    get() {
      return _classPrivateFieldBase(this, closure_10)[closure_10];
    }
  },
  {
    key: "responseEnd",
    get() {
      return _classPrivateFieldBase(this, closure_11)[closure_11];
    }
  },
  {
    key: "responseStatus",
    get() {
      return _classPrivateFieldBase(this, closure_12)[closure_12];
    }
  },
  {
    key: "contentType",
    get() {
      return _classPrivateFieldBase(this, closure_13)[closure_13];
    }
  },
  {
    key: "encodedBodySize",
    get() {
      return _classPrivateFieldBase(this, closure_14)[closure_14];
    }
  },
  {
    key: "decodedBodySize",
    get() {
      return _classPrivateFieldBase(this, closure_15)[closure_15];
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      const self = this;
      const tmp = _get(_getPrototypeOf(_classCallCheck.prototype), "toJSON", this);
      closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (arg0) => closure_1.apply(self, arg0);
      }
      const obj = {};
      const merged = Object.assign(fn([]));
      obj.fetchStart = _classPrivateFieldBase(self, metroRequire)[metroRequire];
      obj.requestStart = _classPrivateFieldBase(self, closure_7)[closure_7];
      obj.connectStart = _classPrivateFieldBase(self, closure_8)[closure_8];
      obj.connectEnd = _classPrivateFieldBase(self, closure_9)[closure_9];
      obj.responseStart = _classPrivateFieldBase(self, c10)[c10];
      obj.responseEnd = _classPrivateFieldBase(self, closure_11)[closure_11];
      obj.responseStatus = _classPrivateFieldBase(self, closure_12)[closure_12];
      ({ contentType: obj.contentType, encodedBodySize: obj.encodedBodySize, decodedBodySize: obj.decodedBodySize } = self);
      return obj;
    }
  }
];
const importDefaultResultResult = _createClass(PerformanceResourceTiming, items);
class PerformanceResourceTiming {
  constructor() {
    typeError = new TypeError("Failed to construct 'PerformanceResourceTiming': Illegal constructor");
    throw typeError;
  }
}
PerformanceResourceTiming.prototype = importDefaultResultResult.prototype;

export const PerformanceResourceTiming = importDefaultResultResult;
export const PerformanceResourceTiming_public = PerformanceResourceTiming;