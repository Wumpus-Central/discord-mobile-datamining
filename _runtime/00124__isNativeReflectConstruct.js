// === Module 124: _isNativeReflectConstruct ===

// Module 124 (_isNativeReflectConstruct)
import DOMRect from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import setPlatformObject from "setPlatformObject";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class DOMRect {
  constructor() {
    self = this;
    tmp = DOMRect(this, DOMRect);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(DOMRect);
    tmp3 = _isNativeReflectConstruct;
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
require("_inherits")(DOMRect, require("importDefaultResult1"));
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
    let height;
    let width;
    let x;
    let y;
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