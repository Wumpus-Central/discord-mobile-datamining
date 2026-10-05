// === Module 355: ? ===

// Module 355
import flushValueDefault from "flushValue" /* 356 */;
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
class AnimatedAddition {
  constructor(num, num2, arg2) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedAddition);
    const items = [arg2];
    const obj = _getPrototypeOf(AnimatedAddition);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    let tmp7 = num;
    if (typeof num === "number") {
      const self2 = this;
      const self3 = this;
      tmp7 = new flushValueDefault(num);
    }
    tmp3Result._a = tmp7;
    let tmp8 = num2;
    if (typeof num2 === "number") {
      const self4 = this;
      const self5 = this;
      tmp8 = new flushValueDefault(num2);
    }
    tmp3Result._b = tmp8;
    return tmp3Result;
  }
}
_inherits(AnimatedAddition, _modDef366);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    const _a = this._a;
    _a.__makeNative(arg0);
    const _b = this._b;
    _b.__makeNative(arg0);
    const self = this;
    let fn = _get(_getPrototypeOf(AnimatedAddition.prototype), "__makeNative", this);
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
      let _a;
      let _b;
      ({ _a, _b } = this);
      const __getValueResult = _a.__getValue();
      return __getValueResult + _b.__getValue();
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
      const _b = this._b;
      _b.__addChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedAddition.prototype), "__attach", this);
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
      const _b = this._b;
      _b.__removeChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedAddition.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let items;
      const _a = this._a;
      const obj = { type: "addition", input: items, debugID: this.__getDebugID() };
      items = [_a.__getNativeTag(), ];
      const _b = this._b;
      items[1] = _b.__getNativeTag();
      return obj;
    }
  }
];

export default _createClass(AnimatedAddition, items);