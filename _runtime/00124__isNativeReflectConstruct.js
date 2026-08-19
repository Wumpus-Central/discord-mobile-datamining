// === Module 124: _isNativeReflectConstruct ===

// Module 124 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import importDefaultResult1Default from "importDefaultResult1" /* 125 */;
import DOMRect from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import setPlatformObject from "setPlatformObject" /* 126 */;

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
class DOMRect {
  constructor() {
    self = this;
    tmp = DOMRect(this, DOMRect);
    tmp2 = closure_2;
    obj = closure_2(DOMRect);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inheritsDefault(DOMRect, importDefaultResult1Default);
let obj = {
  key: "x",
  get() {
    return this.__getInternalX();
  },
  set(arg0) {
    this.__setInternalX(arg0);
  }
};
const items = [
  obj,
  {
    key: "y",
    get() {
      return this.__getInternalY();
    },
    set(DOMRectReadOnly) {
      this.__setInternalY(DOMRectReadOnly);
    }
  },
  {
    key: "width",
    get() {
      return this.__getInternalWidth();
    },
    set(width) {
      this.__setInternalWidth(width);
    }
  },
  {
    key: "height",
    get() {
      return this.__getInternalHeight();
    },
    set(height) {
      this.__setInternalHeight(height);
    }
  }
];
obj = {
  key: "fromRect",
  value: function fromRect(arg0) {
    if (arg0) {
      ({ x, y, width, height } = arg0);
      let tmpResult = DOMRect(x, y, width, height);
      const obj = Object.create(DOMRect.prototype);
    } else {
      tmpResult = DOMRect();
    }
    return tmpResult;
  }
};
const items1 = [obj];
const importDefaultResultResult = importDefaultResult(DOMRect, items, items1);
let c4 = importDefaultResultResult;
obj = {
  clone(arg0) {
    return new closure_4(arg0.x, arg0.y, arg0.width, arg0.height);
  }
};
setPlatformObject.setPlatformObject(importDefaultResultResult, obj);

export default importDefaultResultResult;