// === Module 370: ? ===

// Module 370
import _modDef366 from "module_366" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const AnimatedMultiplication = importDefault;
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
class AnimatedMultiplication {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = c2(this, AnimatedMultiplication);
    items = [];
    items[0] = importDefault;
    tmp2 = closure_4;
    obj = closure_4(AnimatedMultiplication);
    tmp3 = closure_3;
    if (metroRequire()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp7 = global;
    if (typeof global === "number") {
      tmp9 = closure_0;
      tmp10 = closure_1;
      tmp11 = new.target;
      tmp12 = new.target;
      tmp13 = global;
      tmp7 = new closure_0(closure_1[6])(global);
    }
    tmp3Result._a = tmp7;
    tmp8 = arg1;
    if (typeof arg1 === "number") {
      tmp14 = closure_0;
      tmp15 = closure_1;
      tmp16 = new.target;
      tmp17 = new.target;
      tmp18 = arg1;
      tmp8 = new closure_0(closure_1[6])(arg1);
    }
    tmp3Result._b = tmp8;
    return tmp3Result;
  }
}
_inherits(AnimatedMultiplication, _modDef366);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    const _a = this._a;
    _a.__makeNative(arg0);
    const _b = this._b;
    _b.__makeNative(arg0);
    const self = this;
    let fn = hasOwnProperty(_getPrototypeOf(AnimatedMultiplication.prototype), "__makeNative", this);
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
      ({ _a, _b } = this);
      return _a.__getValue() * _b.__getValue();
    }
  },
  {
    key: "interpolate",
    value: function interpolate(arg0) {
      return new AnimatedMultiplication(363)(this, arg0);
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedMultiplication.prototype), "__attach", this);
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedMultiplication.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "multiplication", input: null, debugID: null };
      const _a = this._a;
      const items = [_a.__getNativeTag(), ];
      const _b = this._b;
      items[1] = _b.__getNativeTag();
      obj.input = items;
      obj.debugID = this.__getDebugID();
      return obj;
    }
  }
];

export default _createClass(AnimatedMultiplication, items);