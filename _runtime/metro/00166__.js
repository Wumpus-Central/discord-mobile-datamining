// _runtime/metro/00166__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "../00091__classPrivateFieldKey.js";
import 00126__ from "00126__.js";

let closure_2 = _classPrivateFieldKey("jsHeapSizeLimit");
let closure_3 = _classPrivateFieldKey("totalJSHeapSize");
let closure_4 = _classPrivateFieldKey("usedJSHeapSize");
class MemoryInfo {
  constructor(arg0) {
    const self = this;
    _classCallCheck(this, MemoryInfo);
    Object.defineProperty(this, closure_2, { writable: true, value: "a" });
    Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    if (null != arg0) {
      ({ jsHeapSizeLimit: _classPrivateFieldBase(undefined, self, tmp2)[tmp2], totalJSHeapSize: _classPrivateFieldBase(undefined, self, tmp4)[tmp4], usedJSHeapSize: _classPrivateFieldBase(undefined, self, tmp6)[tmp6] } = arg0);
    }
  }
}
const items = [, , ];
const obj = {
  key: "jsHeapSizeLimit",
  get() {
    return _classPrivateFieldBase(this, closure_2)[closure_2];
  }
};
items[0] = obj;
items[1] = {
  key: "totalJSHeapSize",
  get() {
    return _classPrivateFieldBase(this, closure_3)[closure_3];
  }
};
items[2] = {
  key: "usedJSHeapSize",
  get() {
    return _classPrivateFieldBase(this, closure_4)[closure_4];
  }
};
const importDefaultResultResult = _createClass(MemoryInfo, items);
module_126.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;