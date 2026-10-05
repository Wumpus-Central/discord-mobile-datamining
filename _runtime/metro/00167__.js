// _runtime/metro/00167__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "../00091__classPrivateFieldKey.js";
import 00126__ from "00126__.js";

let closure_2 = _classPrivateFieldKey("startTime");
let closure_3 = _classPrivateFieldKey("initializeRuntimeStart");
let closure_4 = _classPrivateFieldKey("executeJavaScriptBundleEntryPointStart");
let closure_5 = _classPrivateFieldKey("endTime");
class ReactNativeStartupTiming {
  constructor(arg0) {
    const self = this;
    _classCallCheck(this, ReactNativeStartupTiming);
    Object.defineProperty(this, closure_2, { writable: true, value: "a" });
    Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    if (null != arg0) {
      ({ startTime: _classPrivateFieldBase(undefined, self, tmp2)[tmp2], initializeRuntimeStart: _classPrivateFieldBase(undefined, self, tmp4)[tmp4], executeJavaScriptBundleEntryPointStart: _classPrivateFieldBase(undefined, self, tmp6)[tmp6], endTime: _classPrivateFieldBase(undefined, self, tmp8)[tmp8] } = arg0);
    }
  }
}
const items = [, , , ];
const obj = {
  key: "startTime",
  get() {
    return _classPrivateFieldBase(this, closure_2)[closure_2];
  }
};
items[0] = obj;
items[1] = {
  key: "endTime",
  get() {
    return _classPrivateFieldBase(this, closure_5)[closure_5];
  }
};
items[2] = {
  key: "initializeRuntimeStart",
  get() {
    return _classPrivateFieldBase(this, closure_3)[closure_3];
  }
};
items[3] = {
  key: "executeJavaScriptBundleEntryPointStart",
  get() {
    return _classPrivateFieldBase(this, closure_4)[closure_4];
  }
};
const importDefaultResultResult = _createClass(ReactNativeStartupTiming, items);
module_126.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;