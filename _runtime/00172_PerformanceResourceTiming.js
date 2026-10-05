// === Module 172: PerformanceResourceTiming ===

// Module 172 (PerformanceResourceTiming)
import PerformanceEntry from "PerformanceEntry" /* 163 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;

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
    let constructResult;
    const self = this;
    _classCallCheck(this, PerformanceResourceTiming);
    const items = ["resource", arg0];
    const obj = _getPrototypeOf(PerformanceResourceTiming);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    Object.defineProperty(tmp3Result, closure_6, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_7, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_8, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_9, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_10, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_11, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_12, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_13, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_14, { writable: true, value: "a" });
    Object.defineProperty(tmp3Result, closure_15, { writable: true, value: "a" });
    ({ fetchStart: _classPrivateFieldBase(undefined, tmp6, closure_6)[closure_6], requestStart: _classPrivateFieldBase(undefined, tmp6, closure_7)[closure_7], connectStart: _classPrivateFieldBase(undefined, tmp6, closure_8)[closure_8], connectEnd: _classPrivateFieldBase(undefined, tmp6, closure_9)[closure_9], responseStart: _classPrivateFieldBase(undefined, tmp6, closure_10)[closure_10], responseEnd: _classPrivateFieldBase(undefined, tmp6, closure_11)[closure_11], responseStatus: _classPrivateFieldBase(undefined, tmp6, closure_12)[closure_12], contentType: _classPrivateFieldBase(undefined, tmp6, closure_13)[closure_13], encodedBodySize: _classPrivateFieldBase(undefined, tmp6, closure_14)[closure_14], decodedBodySize: _classPrivateFieldBase(undefined, tmp6, closure_15)[closure_15] } = arg0);
    return tmp3Result;
  }
}
_inherits(PerformanceResourceTiming, PerformanceEntry.PerformanceEntry);
let obj = {
  key: "fetchStart",
  get() {
    return _classPrivateFieldBase(this, closure_6)[closure_6];
  }
};
let items = [
  obj,
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
      const tmp = _get(_getPrototypeOf(PerformanceResourceTiming.prototype), "toJSON", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (arg0) => closure_1.apply(self, arg0);
      }
      const obj = { fetchStart: _classPrivateFieldBase(self, closure_6)[closure_6], requestStart: _classPrivateFieldBase(self, closure_7)[closure_7], connectStart: _classPrivateFieldBase(self, closure_8)[closure_8], connectEnd: _classPrivateFieldBase(self, closure_9)[closure_9], responseStart: _classPrivateFieldBase(self, closure_10)[closure_10], responseEnd: _classPrivateFieldBase(self, closure_11)[closure_11], responseStatus: _classPrivateFieldBase(self, closure_12)[closure_12] };
      const merged = Object.assign(fn([]));
      ({ contentType: obj.contentType, encodedBodySize: obj.encodedBodySize, decodedBodySize: obj.decodedBodySize } = self);
      return obj;
    }
  }
];
const importDefaultResultResult = _createClass(PerformanceResourceTiming, items);
tmp7.prototype = importDefaultResultResult.prototype;
const PerformanceResourceTiming_export = importDefaultResultResult;

export { PerformanceResourceTiming_export as PerformanceResourceTiming };
export const PerformanceResourceTiming_public = tmp7;