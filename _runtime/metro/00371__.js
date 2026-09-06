// _runtime/metro/00371__.js
import _modDef366 from "00366__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

const AnimatedModulo = importDefault;
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
  } catch (err) {}
}
class AnimatedModulo {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = c2(this, AnimatedModulo);
    items = [];
    items[0] = importDefault;
    tmp2 = closure_4;
    obj = closure_4(AnimatedModulo);
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
    tmp3Result._modulus = arg1;
    return tmp3Result;
  }
}
_inherits(AnimatedModulo, _modDef366);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    const _a = this._a;
    _a.__makeNative(arg0);
    const self = this;
    let fn = hasOwnProperty(_getPrototypeOf(AnimatedModulo.prototype), "__makeNative", this);
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
    key: "__getValue",
    value: function __getValue() {
      const _a = this._a;
      return ((_a.__getValue() % this._modulus) + this._modulus) % this._modulus;
    },
  },
  {
    key: "interpolate",
    value: function interpolate(arg0) {
      return new AnimatedModulo(363)(this, arg0);
    },
  },
  {
    key: "__attach",
    value: function __attach() {
      const _a = this._a;
      _a.__addChild(this);
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedModulo.prototype), "__attach", this);
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedModulo.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "modulus", input: null, modulus: this._modulus, debugID: this.__getDebugID() };
      const _a = this._a;
      obj.input = _a.__getNativeTag();
      return obj;
    },
  },
];

export default _createClass(AnimatedModulo, items);
