// _runtime/00172__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import PerformanceResourceTiming from "metro/00041__classCallCheck.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import closure_3 from "metro/00096__get.js";
import importDefaultResult from "metro/00042__createClass.js";
import closure_4 from "00090__classPrivateFieldBase.js";
import importDefaultResult2 from "00091__classPrivateFieldKey.js";

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
let closure_6 = importDefaultResult2("fetchStart");
let closure_7 = importDefaultResult2("requestStart");
let closure_8 = importDefaultResult2("connectStart");
let closure_9 = importDefaultResult2("connectEnd");
let closure_10 = importDefaultResult2("responseStart");
let closure_11 = importDefaultResult2("responseEnd");
let closure_12 = importDefaultResult2("responseStatus");
let closure_13 = importDefaultResult2("contentType");
let closure_14 = importDefaultResult2("encodedBodySize");
let closure_15 = importDefaultResult2("decodedBodySize");
class PerformanceResourceTiming {
  constructor(arg0) {
    self = this;
    tmp = PerformanceResourceTiming(this, PerformanceResourceTiming);
    items = ["resource"];
    items[1] = global;
    tmp2 = closure_2;
    obj = closure_2(PerformanceResourceTiming);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    definePropertyResult = Object.defineProperty(tmp3Result, closure_6, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(tmp3Result, closure_7, { writable: true, value: "a" });
    definePropertyResult2 = Object.defineProperty(tmp3Result, closure_8, { writable: true, value: "a" });
    definePropertyResult3 = Object.defineProperty(tmp3Result, closure_9, { writable: true, value: "a" });
    definePropertyResult4 = Object.defineProperty(tmp3Result, closure_10, { writable: true, value: "a" });
    definePropertyResult5 = Object.defineProperty(tmp3Result, closure_11, { writable: true, value: "a" });
    definePropertyResult6 = Object.defineProperty(tmp3Result, closure_12, { writable: true, value: "a" });
    definePropertyResult7 = Object.defineProperty(tmp3Result, closure_13, { writable: true, value: "a" });
    definePropertyResult8 = Object.defineProperty(tmp3Result, closure_14, { writable: true, value: "a" });
    definePropertyResult9 = Object.defineProperty(tmp3Result, closure_15, { writable: true, value: "a" });
    ({ fetchStart: closure_4(undefined, tmp6, closure_6)[closure_6], requestStart: closure_4(undefined, tmp6, closure_7)[closure_7], connectStart: closure_4(undefined, tmp6, closure_8)[closure_8], connectEnd: closure_4(undefined, tmp6, closure_9)[closure_9], responseStart: closure_4(undefined, tmp6, closure_10)[closure_10], responseEnd: closure_4(undefined, tmp6, closure_11)[closure_11], responseStatus: closure_4(undefined, tmp6, closure_12)[closure_12], contentType: closure_4(undefined, tmp6, closure_13)[closure_13], encodedBodySize: closure_4(undefined, tmp6, closure_14)[closure_14], decodedBodySize: closure_4(undefined, tmp6, closure_15)[closure_15] } = global);
    return tmp3Result;
  }
}
_inheritsDefault(PerformanceResourceTiming, require("PerformanceEntry").PerformanceEntry);
let items = [
  {
    key: "fetchStart",
    get() {
      return callback3(this, closure_6)[closure_6];
    }
  },
  {
    key: "requestStart",
    get() {
      return callback3(this, closure_7)[closure_7];
    }
  },
  {
    key: "connectStart",
    get() {
      return callback3(this, closure_8)[closure_8];
    }
  },
  {
    key: "connectEnd",
    get() {
      return callback3(this, closure_9)[closure_9];
    }
  },
  {
    key: "responseStart",
    get() {
      return callback3(this, closure_10)[closure_10];
    }
  },
  {
    key: "responseEnd",
    get() {
      return callback3(this, closure_11)[closure_11];
    }
  },
  {
    key: "responseStatus",
    get() {
      return callback3(this, closure_12)[closure_12];
    }
  },
  {
    key: "contentType",
    get() {
      return callback3(this, closure_13)[closure_13];
    }
  },
  {
    key: "encodedBodySize",
    get() {
      return callback3(this, closure_14)[closure_14];
    }
  },
  {
    key: "decodedBodySize",
    get() {
      return callback3(this, closure_15)[closure_15];
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      let self = this;
      self = this;
      const tmp = callback2(callback(self.prototype), "toJSON", this);
      closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (arg0) => callback.apply(self, arg0);
      }
      const obj = {};
      const merged = Object.assign(fn([]));
      obj.fetchStart = callback3(self, closure_6)[closure_6];
      obj.requestStart = callback3(self, closure_7)[closure_7];
      obj.connectStart = callback3(self, closure_8)[closure_8];
      obj.connectEnd = callback3(self, closure_9)[closure_9];
      obj.responseStart = callback3(self, closure_10)[closure_10];
      obj.responseEnd = callback3(self, closure_11)[closure_11];
      obj.responseStatus = callback3(self, closure_12)[closure_12];
      ({ contentType: obj.contentType, encodedBodySize: obj.encodedBodySize, decodedBodySize: obj.decodedBodySize } = self);
      return obj;
    }
  }
];
const importDefaultResultResult = importDefaultResult(PerformanceResourceTiming, items);
class PerformanceResourceTiming {
  constructor() {
    typeError = new TypeError("Failed to construct 'PerformanceResourceTiming': Illegal constructor");
    throw typeError;
  }
}
PerformanceResourceTiming.prototype = importDefaultResultResult.prototype;

export const PerformanceResourceTiming = importDefaultResultResult;
export const PerformanceResourceTiming_public = PerformanceResourceTiming;