// === Module 372: ? ===

// Module 372
import _modDef366 from "module_366" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
    tmp = c2(this, AnimatedDiffClamp);
    items = [];
    items[0] = importAll;
    tmp2 = closure_4;
    obj = closure_4(AnimatedDiffClamp);
    tmp3 = closure_3;
    if (metroRequire()) {
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
_inherits(AnimatedDiffClamp, _modDef366);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    const _a = this._a;
    _a.__makeNative(arg0);
    const self = this;
    let fn = hasOwnProperty(_getPrototypeOf(AnimatedDiffClamp.prototype), "__makeNative", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    fn(items);
  }
};
let items = [
  entry,
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedDiffClamp.prototype), "__attach", this);
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedDiffClamp.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const range = { type: "diffclamp", input: null, min: this._min, max: this._max, debugID: this.__getDebugID() };
      const _a = this._a;
      range.input = _a.__getNativeTag();
      return range;
    }
  }
];

export default _createClass(AnimatedDiffClamp, items);