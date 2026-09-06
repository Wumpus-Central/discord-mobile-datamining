// === Module 124: ? ===

// Module 124
import DOMRectReadOnlyDefault from "DOMRectReadOnly" /* 125 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
    tmp = closure_0(this, DOMRect);
    tmp2 = c2;
    obj = c2(DOMRect);
    tmp3 = closure_1;
    if (closure_3()) {
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
_classCallCheck = DOMRect;
_inherits(DOMRect, DOMRectReadOnlyDefault);
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
    set(arg0) {
      this.__setInternalY(arg0);
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
const entry = {
  key: "fromRect",
  value: function fromRect(arg0) {
    if (arg0) {
      ({ x, y, width, height } = arg0);
      let tmpResult = tmp(x, y, width, height);
      const obj = Object.create(tmp.prototype);
    } else {
      tmpResult = tmp();
    }
    return tmpResult;
  }
};
const items1 = [entry];
const importDefaultResultResult = _createClass(DOMRect, items, items1);
const module_126 = fn(126);
obj = {
  clone(arg0) {
    return new importDefaultResultResult(arg0.x, arg0.y, arg0.width, arg0.height);
  }
};
module_126.setPlatformObject(importDefaultResultResult, obj);

export default importDefaultResultResult;