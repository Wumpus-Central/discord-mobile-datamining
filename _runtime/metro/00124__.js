// _runtime/metro/00124__.js
import _modDef125 from "00125__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import 00126__ from "00126__.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class DOMRect {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, DOMRect);
    const obj = _getPrototypeOf(DOMRect);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(DOMRect, _modDef125);
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
    let height;
    let tmpResult;
    let width;
    let x;
    let y;
    if (arg0) {
      ({ x, y, width, height } = arg0);
      Object.create(DOMRect.prototype);
      tmpResult = DOMRect(x, y, width, height);
    } else {
      tmpResult = DOMRect();
    }
    return tmpResult;
  }
};
const items1 = [entry];
const importDefaultResultResult = _createClass(DOMRect, items, items1);
const obj2 = {
  clone(arg0) {
    const tmp = new importDefaultResultResult(arg0.x, arg0.y, arg0.width, arg0.height);
    return tmp;
  }
};
module_126.setPlatformObject(importDefaultResultResult, obj2);

export default importDefaultResultResult;