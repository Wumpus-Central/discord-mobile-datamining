// _runtime/00166_MemoryInfo.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "00091__classPrivateFieldKey.js";

let closure_2 = _classPrivateFieldKey("jsHeapSizeLimit");
let closure_3 = _classPrivateFieldKey("totalJSHeapSize");
let closure_4 = _classPrivateFieldKey("usedJSHeapSize");
class MemoryInfo {
  constructor(arg0) {
    self = this;
    tmp = closure_0(this, MemoryInfo);
    tmp2 = c2;
    definePropertyResult = Object.defineProperty(this, c2, { writable: true, value: "a" });
    tmp4 = closure_3;
    definePropertyResult1 = Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    tmp6 = closure_4;
    definePropertyResult2 = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    if (null != global) {
      tmp8 = closure_1;
      ({
        jsHeapSizeLimit: closure_1(undefined, self, tmp2)[tmp2],
        totalJSHeapSize: closure_1(undefined, self, tmp4)[tmp4],
        usedJSHeapSize: closure_1(undefined, self, tmp6)[tmp6],
      } = global);
    }
    return;
  }
}
_classCallCheck = MemoryInfo;
const items = [
  {
    key: "jsHeapSizeLimit",
    get() {
      return _classPrivateFieldBase(this, closure_2)[closure_2];
    },
  },
  {
    key: "totalJSHeapSize",
    get() {
      return _classPrivateFieldBase(this, closure_3)[closure_3];
    },
  },
  {
    key: "usedJSHeapSize",
    get() {
      return _classPrivateFieldBase(this, closure_4)[closure_4];
    },
  },
];
const importDefaultResultResult = _createClass(MemoryInfo, items);
const module_126 = fn(126);
module_126.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
