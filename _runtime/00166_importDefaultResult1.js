// _runtime/00166_importDefaultResult1.js
import MemoryInfo from "_classCallCheck";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult1 from "_classPrivateFieldKey";
import setPlatformObject from "setPlatformObject";

let closure_2 = importDefaultResult1("jsHeapSizeLimit");
let closure_3 = importDefaultResult1("totalJSHeapSize");
let closure_4 = importDefaultResult1("usedJSHeapSize");
class MemoryInfo {
  constructor(arg0) {
    self = this;
    tmp = MemoryInfo(this, MemoryInfo);
    tmp2 = jsHeapSizeLimit;
    definePropertyResult = Object.defineProperty(this, jsHeapSizeLimit, { writable: true, value: "a" });
    tmp4 = totalJSHeapSize;
    definePropertyResult1 = Object.defineProperty(this, totalJSHeapSize, { writable: true, value: "a" });
    tmp6 = usedJSHeapSize;
    definePropertyResult2 = Object.defineProperty(this, usedJSHeapSize, { writable: true, value: "a" });
    if (null != global) {
      tmp8 = outer1_1;
      ({ jsHeapSizeLimit: outer1_1(undefined, self, tmp2)[tmp2], totalJSHeapSize: outer1_1(undefined, self, tmp4)[tmp4], usedJSHeapSize: outer1_1(undefined, self, tmp6)[tmp6] } = global);
    }
    return;
  }
}
const items = [
  {
    key: "jsHeapSizeLimit",
    get() {
      return callback(this, closure_2)[closure_2];
    }
  },
  {
    key: "totalJSHeapSize",
    get() {
      return callback(this, closure_3)[closure_3];
    }
  },
  {
    key: "usedJSHeapSize",
    get() {
      return callback(this, closure_4)[closure_4];
    }
  }
];
const importDefaultResultResult = require("_createClass")(MemoryInfo, items);
setPlatformObject.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;