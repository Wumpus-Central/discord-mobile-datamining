// === Module 375: ? ===

// Module 375
import _assertNativeAnimatedModuleDefault from "_assertNativeAnimatedModule" /* 367 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const AnimatedTracking = importDefault;
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
class AnimatedTracking {
  constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
    self = this;
    tmp = c2(this, AnimatedTracking);
    items = [];
    items[0] = exports;
    tmp2 = closure_4;
    obj = closure_4(AnimatedTracking);
    tmp3 = closure_3;
    if (metroRequire()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._value = global;
    tmp3Result._parent = arg1;
    tmp3Result._animationClass = importDefault;
    tmp3Result._animationConfig = importAll;
    obj3 = closure_0(closure_1[6]);
    tmp3Result._useNativeDriver = obj3.shouldUseNativeDriver(importAll);
    tmp3Result._callback = module;
    __attachResult = tmp3Result.__attach();
    return tmp3Result;
  }
}
_inherits(AnimatedTracking, _assertNativeAnimatedModuleDefault);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    this.__isNative = true;
    const _parent = this._parent;
    _parent.__makeNative(arg0);
    const self = this;
    let fn = hasOwnProperty(_getPrototypeOf(AnimatedTracking.prototype), "__makeNative", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    fn(items);
    const _value = this._value;
    _value.__makeNative(arg0);
  }
};
let items = [
  entry,
  {
    key: "__getValue",
    value: function __getValue() {
      const _parent = this._parent;
      return _parent.__getValue();
    }
  },
  {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const _parent = this._parent;
      _parent.__addChild(this);
      if (this._useNativeDriver) {
        self.__makeNative(self._animationConfig.platformConfig);
      }
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedTracking.prototype), "__attach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedTracking.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "update",
    value: function update() {
      const _value = this._value;
      const obj = {};
      const merged = Object.assign(this._animationConfig);
      const toValue = this._animationConfig.toValue;
      obj.toValue = toValue.__getValue();
      const _animationClass = new this._animationClass(obj);
      _value.animate(_animationClass, this._callback);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let obj = {};
      const merged = Object.assign(this._animationConfig);
      obj.toValue = undefined;
      const _animationClass = new this._animationClass(obj);
      obj = { type: "tracking", animationId: null, animationConfig: null, toValue: null, value: null, debugID: null };
      const result = _animationClass.__getNativeAnimationConfig();
      obj.animationId = AnimatedTracking(357).generateNewAnimationId();
      obj.animationConfig = result;
      const _parent = this._parent;
      obj.toValue = _parent.__getNativeTag();
      const _value = this._value;
      obj.value = _value.__getNativeTag();
      obj.debugID = this.__getDebugID();
      return obj;
    }
  }
];

export default _createClass(AnimatedTracking, items);