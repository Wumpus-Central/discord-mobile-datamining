// _runtime/metro/00372__.js
import _modDef363 from "00363__.js";
import _modDef366 from "00366__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class AnimatedDiffClamp {
  constructor(_a, _min, _max, arg3) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedDiffClamp);
    const items = [arg3];
    const obj = _getPrototypeOf(AnimatedDiffClamp);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._a = _a;
    tmp3Result._min = _min;
    tmp3Result._max = _max;
    _a = tmp3Result._a;
    const __getValueResult = _a.__getValue();
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
    let fn = _get(_getPrototypeOf(AnimatedDiffClamp.prototype), "__makeNative", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    fn(items);
  },
};
let items = [
  entry,
  {
    key: "interpolate",
    value: function interpolate(arg0) {
      const tmp = new _modDef363(this, arg0);
      return tmp;
    },
  },
  {
    key: "__getValue",
    value: function __getValue() {
      const _a = this._a;
      const __getValueResult = _a.__getValue();
      this._lastValue = __getValueResult;
      this._value = Math.min(Math.max(this._value + (__getValueResult - this._lastValue), this._min), this._max);
      return this._value;
    },
  },
  {
    key: "__attach",
    value: function __attach() {
      const _a = this._a;
      _a.__addChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedDiffClamp.prototype), "__attach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedDiffClamp.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let _a;
      const range = {
        type: "diffclamp",
        input: _a.__getNativeTag(),
        min: this._min,
        max: this._max,
        debugID: this.__getDebugID(),
      };
      _a = this._a;
      return range;
    },
  },
];

export default _createClass(AnimatedDiffClamp, items);
