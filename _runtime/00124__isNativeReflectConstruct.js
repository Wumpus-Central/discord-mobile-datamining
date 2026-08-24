// _runtime/00124__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import importDefaultResult1Default from "00125_importDefaultResult1.js";
import DOMRect from "metro/00041__classCallCheck.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import setPlatformObject from "00126_setPlatformObject.js";

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