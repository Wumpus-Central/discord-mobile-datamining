// _runtime/00167_importDefaultResult1.js
import _createClassDefault from "_createClass" /* 42 */;
import ReactNativeStartupTiming from "_classCallCheck" /* 41 */;
import closure_1 from "_classPrivateFieldBase" /* 90 */;
import importDefaultResult1 from "_classPrivateFieldKey" /* 91 */;
import setPlatformObject from "setPlatformObject" /* 126 */;

let closure_2 = importDefaultResult1("startTime");
let closure_3 = importDefaultResult1("initializeRuntimeStart");
let closure_4 = importDefaultResult1("executeJavaScriptBundleEntryPointStart");
let closure_5 = importDefaultResult1("endTime");
class ReactNativeStartupTiming {
  constructor(arg0) {
    self = this;
    tmp = ReactNativeStartupTiming(this, ReactNativeStartupTiming);
    tmp2 = closure_2;
    definePropertyResult = Object.defineProperty(this, closure_2, { writable: true, value: "a" });
    tmp4 = closure_3;
    definePropertyResult1 = Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    tmp6 = closure_4;
    definePropertyResult2 = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    tmp8 = closure_5;
    definePropertyResult3 = Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    if (null != global) {
      tmp10 = closure_1;
      ({ startTime: closure_1(undefined, self, tmp2)[tmp2], initializeRuntimeStart: closure_1(undefined, self, tmp4)[tmp4], executeJavaScriptBundleEntryPointStart: closure_1(undefined, self, tmp6)[tmp6], endTime: closure_1(undefined, self, tmp8)[tmp8] } = global);
    }
    return;
  }
}
const items = [
  {
    key: "startTime",
    get() {
      return callback(this, closure_2)[closure_2];
    }
  },
  {
    key: "endTime",
    get() {
      return callback(this, closure_5)[closure_5];
    }
  },
  {
    key: "initializeRuntimeStart",
    get() {
      return callback(this, closure_3)[closure_3];
    }
  },
  {
    key: "executeJavaScriptBundleEntryPointStart",
    get() {
      return callback(this, closure_4)[closure_4];
    }
  }
];
const importDefaultResultResult = _createClassDefault(ReactNativeStartupTiming, items);
setPlatformObject.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;