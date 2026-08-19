// === Module 368: _isNativeReflectConstruct ===

// Module 368 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;

const AnimatedSubtraction = importDefault;
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
class AnimatedSubtraction {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = closure_2(this, AnimatedSubtraction);
    items = [];
    items[0] = importDefault;
    tmp2 = closure_4;
    obj = closure_4(AnimatedSubtraction);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp7 = global;
    if (typeof global === "number") {
      tmp9 = AnimatedSubtraction;
      tmp10 = closure_1;
      tmp11 = new.target;
      tmp12 = new.target;
      tmp13 = global;
      tmp7 = new require("_isNativeReflectConstruct")(global);
    }
    tmp3Result._a = tmp7;
    tmp8 = arg1;
    if (typeof arg1 === "number") {
      tmp14 = AnimatedSubtraction;
      tmp15 = closure_1;
      tmp16 = new.target;
      tmp17 = new.target;
      tmp18 = arg1;
      tmp8 = new require("_isNativeReflectConstruct")(arg1);
    }
    tmp3Result._b = tmp8;
    return tmp3Result;
  }
}
_inheritsDefault(AnimatedSubtraction, _isNativeReflectConstructDefault);
let items = [
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const _b = this._b;
      _b.__makeNative(arg0);
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
    key: "__getValue",
    value: function __getValue() {
      ({ _a, _b } = this);
      return _a.__getValue() - _b.__getValue();
    }
  },
  {
    key: "interpolate",
    value: function interpolate(arg0) {
      return new AnimatedSubtraction(363)(this, arg0);
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
      const _b = this._b;
      _b.__removeChild(this);
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
      const obj = { type: "subtraction", input: null, debugID: null };
      const _a = this._a;
      const items = [_a.__getNativeTag(), ];
      const _b = this._b;
      items[1] = _b.__getNativeTag();
      obj[1] = items;
      obj[2] = this.__getDebugID();
      return obj;
    }
  }
];

export default importDefaultResult(AnimatedSubtraction, items);