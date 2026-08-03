// === Module 372: _isNativeReflectConstruct ===

// Module 372 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class AnimatedDiffClamp {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = _isNativeReflectConstruct(this, AnimatedDiffClamp);
    items = [];
    items[0] = importAll;
    tmp2 = __esModule;
    obj = __esModule(AnimatedDiffClamp);
    tmp3 = __esModule;
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
require("_inherits")(AnimatedDiffClamp, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const self = this;
      let fn;
      fn = callback3(callback2(self.prototype), "__makeNative", this);
      if (typeof fn !== "HAS_APPLICATION") {
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
      let fn;
      fn = callback3(callback2(self.prototype), "__attach", this);
      if (typeof fn !== "HAS_APPLICATION") {
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
      let fn;
      fn = callback3(callback2(self.prototype), "__detach", this);
      if (typeof fn !== "HAS_APPLICATION") {
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