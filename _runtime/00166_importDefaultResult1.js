// _runtime/00166_importDefaultResult1.js
import _createClassDefault from "_createClass" /* 42 */;
import MemoryInfo from "_classCallCheck" /* 41 */;
import closure_1 from "_classPrivateFieldBase" /* 90 */;
import importDefaultResult1 from "_classPrivateFieldKey" /* 91 */;
import setPlatformObject from "setPlatformObject" /* 126 */;

let closure_2 = importDefaultResult1("jsHeapSizeLimit");
let closure_3 = importDefaultResult1("totalJSHeapSize");
let closure_4 = importDefaultResult1("usedJSHeapSize");
class MemoryInfo {
  constructor(arg0) {
    self = this;
    tmp = MemoryInfo(this, MemoryInfo);
    tmp2 = closure_2;
    definePropertyResult = Object.defineProperty(this, closure_2, { writable: true, value: "a" });
    tmp4 = closure_3;
    definePropertyResult1 = Object.defineProperty(this, closure_3, { writable: true, value: "a" });
    tmp6 = closure_4;
    definePropertyResult2 = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    if (null != global) {
      tmp8 = closure_1;
      ({ jsHeapSizeLimit: closure_1(undefined, self, tmp2)[tmp2], totalJSHeapSize: closure_1(undefined, self, tmp4)[tmp4], usedJSHeapSize: closure_1(undefined, self, tmp6)[tmp6] } = global);
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
const importDefaultResultResult = _createClassDefault(MemoryInfo, items);
setPlatformObject.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;