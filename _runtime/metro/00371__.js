// === Module 371: ? ===

// Module 371
import _modDef363 from "module_363" /* 363 */;
import _modDef366 from "module_366" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
class AnimatedModulo {
  constructor(_a, _modulus, arg2) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedModulo);
    const items = [arg2];
    const obj = _getPrototypeOf(AnimatedModulo);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._a = _a;
    tmp3Result._modulus = _modulus;
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
    let fn = _get(_getPrototypeOf(AnimatedModulo.prototype), "__makeNative", this);
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
    key: "__getValue",
    value: function __getValue() {
      const _a = this._a;
      return (_a.__getValue() % this._modulus + this._modulus) % this._modulus;
    }
  },
  {
    key: "interpolate",
    value: function interpolate(arg0) {
      const tmp = new _modDef363(this, arg0);
      return tmp;
    }
  },
  {
    key: "__attach",
    value: function __attach() {
      const _a = this._a;
      _a.__addChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedModulo.prototype), "__attach", this);
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
      let fn = _get(_getPrototypeOf(AnimatedModulo.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let _a;
      const obj = { type: "modulus", input: _a.__getNativeTag(), modulus: this._modulus, debugID: this.__getDebugID() };
      _a = this._a;
      return obj;
    }
  }
];

export default _createClass(AnimatedModulo, items);