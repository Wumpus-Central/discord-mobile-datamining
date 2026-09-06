// _runtime/00167_ReactNativeStartupTiming.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "00091__classPrivateFieldKey.js";

let closure_2 = _classPrivateFieldKey("startTime");
let closure_3 = _classPrivateFieldKey("initializeRuntimeStart");
let closure_4 = _classPrivateFieldKey("executeJavaScriptBundleEntryPointStart");
let closure_5 = _classPrivateFieldKey("endTime");
class ReactNativeStartupTiming {
  constructor(arg0) {
    self = this;
    tmp = closure_0(this, ReactNativeStartupTiming);
    tmp2 = c2;
    definePropertyResult = Object.defineProperty(this, c2, { writable: true, value: "a" });
    tmp4 = closure_3;
    definePropertyResult1 = Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    tmp6 = closure_4;
    definePropertyResult2 = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    tmp8 = hasOwnProperty;
    definePropertyResult3 = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "a" });
    if (null != global) {
      tmp10 = closure_1;
      ({
        startTime: closure_1(undefined, self, tmp2)[tmp2],
        initializeRuntimeStart: closure_1(undefined, self, tmp4)[tmp4],
        executeJavaScriptBundleEntryPointStart: closure_1(undefined, self, tmp6)[tmp6],
        endTime: closure_1(undefined, self, tmp8)[tmp8],
      } = global);
    }
    return;
  }
}
_classCallCheck = ReactNativeStartupTiming;
const items = [
  {
    key: "startTime",
    get() {
      return _classPrivateFieldBase(this, closure_2)[closure_2];
    },
  },
  {
    key: "endTime",
    get() {
      return _classPrivateFieldBase(this, closure_5)[closure_5];
    },
  },
  {
    key: "initializeRuntimeStart",
    get() {
      return _classPrivateFieldBase(this, closure_3)[closure_3];
    },
  },
  {
    key: "executeJavaScriptBundleEntryPointStart",
    get() {
      return _classPrivateFieldBase(this, closure_4)[closure_4];
    },
  },
];
const importDefaultResultResult = _createClass(ReactNativeStartupTiming, items);
const module_126 = fn(126);
module_126.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
