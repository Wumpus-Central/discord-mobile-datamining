// _runtime/00167_importDefaultResult1.js
import ReactNativeStartupTiming from "_classCallCheck";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult1 from "_classPrivateFieldKey";
import setPlatformObject from "setPlatformObject";

let closure_2 = importDefaultResult1("startTime");
let closure_3 = importDefaultResult1("initializeRuntimeStart");
let closure_4 = importDefaultResult1("executeJavaScriptBundleEntryPointStart");
let closure_5 = importDefaultResult1("endTime");
class ReactNativeStartupTiming {
  constructor(arg0) {
    self = this;
    tmp = ReactNativeStartupTiming(this, ReactNativeStartupTiming);
    tmp2 = startTime;
    definePropertyResult = Object.defineProperty(this, startTime, { writable: true, value: "a" });
    tmp4 = initializeRuntimeStart;
    definePropertyResult1 = Object.defineProperty(this, initializeRuntimeStart, { writable: true, value: "a" });
    tmp6 = executeJavaScriptBundleEntryPointStart;
    definePropertyResult2 = Object.defineProperty(this, executeJavaScriptBundleEntryPointStart, { writable: true, value: "a" });
    tmp8 = endTime;
    definePropertyResult3 = Object.defineProperty(this, endTime, { writable: true, value: "a" });
    if (null != global) {
      tmp10 = outer1_1;
      ({ startTime: outer1_1(undefined, self, tmp2)[tmp2], initializeRuntimeStart: outer1_1(undefined, self, tmp4)[tmp4], executeJavaScriptBundleEntryPointStart: outer1_1(undefined, self, tmp6)[tmp6], endTime: outer1_1(undefined, self, tmp8)[tmp8] } = global);
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
const importDefaultResultResult = require("_createClass")(ReactNativeStartupTiming, items);
setPlatformObject.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;