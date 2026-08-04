// _runtime/00375__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class AnimatedTracking {
  constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
    self = this;
    tmp = _isNativeReflectConstruct(this, AnimatedTracking);
    items = [];
    items[0] = exports;
    tmp2 = __esModule;
    obj = __esModule(AnimatedTracking);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
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
    obj3 = require("set");
    tmp3Result._useNativeDriver = obj3.shouldUseNativeDriver(importAll);
    tmp3Result._callback = module;
    __attachResult = tmp3Result.__attach();
    return tmp3Result;
  }
}
require("_inherits")(AnimatedTracking, require("_assertNativeAnimatedModule"));
let items = [
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      this.__isNative = true;
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const self = this;
      let fn;
      fn = callback3(callback2(self.prototype), "__makeNative", this);
      if (typeof fn !== "disabledUntil") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
      const _value = this._value;
      _value.__makeNative(arg0);
    }
  },
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
      let fn = callback3(callback2(self.prototype), "__attach", self);
      if (typeof fn !== "disabledUntil") {
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
      let fn;
      fn = callback3(callback2(self.prototype), "__detach", this);
      if (typeof fn !== "disabledUntil") {
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
      obj[1] = AnimatedTracking(357).generateNewAnimationId();
      obj[2] = result;
      const _parent = this._parent;
      obj[3] = _parent.__getNativeTag();
      const _value = this._value;
      obj[4] = _value.__getNativeTag();
      obj[5] = this.__getDebugID();
      return obj;
    }
  }
];

export default importDefaultResult(AnimatedTracking, items);