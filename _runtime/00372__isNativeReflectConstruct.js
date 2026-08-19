// _runtime/00372__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "00366__isNativeReflectConstruct.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _get from "metro/00096__get.js";
import importDefaultResult from "metro/00042__createClass.js";

const AnimatedDiffClamp = importDefault;
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
class AnimatedDiffClamp {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = closure_2(this, AnimatedDiffClamp);
    items = [];
    items[0] = importAll;
    tmp2 = closure_4;
    obj = closure_4(AnimatedDiffClamp);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._a = global;
    tmp3Result._min = arg1;
    tmp3Result._max = importDefault;
    _a = tmp3Result._a;
    __getValueResult = _a.__getValue();
    tmp3Result._lastValue = __getValueResult;
    tmp3Result._value = __getValueResult;
    return tmp3Result;
  }
}
_inheritsDefault(AnimatedDiffClamp, _isNativeReflectConstructDefault);
let items = [
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const self = this;
      let fn = callback3(callback2(self.prototype), "__makeNative", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    }
  },
  {
    key: "interpolate",
    value: function interpolate(arg0) {
      return new AnimatedDiffClamp(363)(this, arg0);
    }
  },
  {
    key: "__getValue",
    value: function __getValue() {
      const _a = this._a;
      const __getValueResult = _a.__getValue();
      this._lastValue = __getValueResult;
      this._value = Math.min(Math.max(this._value + (__getValueResult - this._lastValue), this._min), this._max);
      return this._value;
    }
  },
  {
    key: "__attach",
    value: function __attach() {
      const _a = this._a;
      _a.__addChild(this);
      const self = this;
      let fn = callback3(callback2(self.prototype), "__attach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      const self = this;
      let fn = callback3(callback2(self.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const _a = this._a;
      return { type: "diffclamp", input: _a.__getNativeTag(), min: this._min, max: this._max, debugID: this.__getDebugID() };
    }
  }
];

export default importDefaultResult(AnimatedDiffClamp, items);