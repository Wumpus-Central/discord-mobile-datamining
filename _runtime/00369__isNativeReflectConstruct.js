// _runtime/00369__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "00366__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import closure_5 from "metro/00096__get.js";
import importDefaultResult from "metro/00042__createClass.js";

const AnimatedDivision = importDefault;
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
class AnimatedDivision {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = closure_2(this, AnimatedDivision);
    items = [];
    items[0] = importDefault;
    tmp2 = closure_4;
    obj = closure_4(AnimatedDivision);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._warnedAboutDivideByZero = false;
    tmp7 = 0 === arg1;
    if (!tmp7) {
      tmp8 = AnimatedDivision;
      tmp9 = closure_1;
      tmp10 = arg1 instanceof require("_assertNativeAnimatedModule") && 0 === arg1.__getValue();
      tmp7 = tmp10;
    }
    if (tmp7) {
      tmp11 = globalThis;
      _console = console;
      str = "Detected potential division by zero in AnimatedDivision";
      errorResult = console.error("Detected potential division by zero in AnimatedDivision");
    }
    tmp13 = global;
    if (typeof global === "number") {
      tmp15 = AnimatedDivision;
      tmp16 = closure_1;
      tmp17 = new.target;
      tmp18 = new.target;
      tmp19 = global;
      tmp13 = new require("_isNativeReflectConstruct")(global);
    }
    tmp3Result._a = tmp13;
    tmp14 = arg1;
    if (typeof arg1 === "number") {
      tmp20 = AnimatedDivision;
      tmp21 = closure_1;
      tmp22 = new.target;
      tmp23 = new.target;
      tmp24 = arg1;
      tmp14 = new require("_isNativeReflectConstruct")(arg1);
    }
    tmp3Result._b = tmp14;
    return tmp3Result;
  }
}
_inheritsDefault(AnimatedDivision, _isNativeReflectConstructDefault);
let items = [
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const _b = this._b;
      _b.__makeNative(arg0);
      const self = this;
      let fn;
      fn = callback3(callback2(self.prototype), "__makeNative", this);
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
      const self = this;
      ({ _a, _b } = this);
      const __getValueResult1 = _b.__getValue();
      if (0 === __getValueResult1) {
        let num = 0;
        if (!self._warnedAboutDivideByZero) {
          const _console = console;
          console.error("Detected division by zero in AnimatedDivision");
          self._warnedAboutDivideByZero = true;
          num = 0;
        }
      } else {
        self._warnedAboutDivideByZero = false;
        num = __getValueResult / __getValueResult1;
      }
      return num;
    }
  },
  {
    key: "interpolate",
    value: function interpolate(arg0) {
      return new AnimatedDivision(363)(this, arg0);
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
      let fn;
      fn = callback3(callback2(self.prototype), "__attach", this);
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
      let fn;
      fn = callback3(callback2(self.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "division", input: null, debugID: null };
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

export default importDefaultResult(AnimatedDivision, items);