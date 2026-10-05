// === Module 375: ? ===

// Module 375
import get_nativeEventEmitterDefault from "get nativeEventEmitter" /* 357 */;
import _modDef367 from "module_367" /* 367 */;
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
class AnimatedTracking {
  constructor(_value, _parent, _animationClass, _animationConfig, _callback, arg5) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedTracking);
    const items = [arg5];
    const obj = _getPrototypeOf(AnimatedTracking);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._value = _value;
    tmp3Result._parent = _parent;
    tmp3Result._animationClass = _animationClass;
    tmp3Result._animationConfig = _animationConfig;
    const obj3 = get_nativeEventEmitterDefault;
    tmp3Result._useNativeDriver = obj3.shouldUseNativeDriver(_animationConfig);
    tmp3Result._callback = _callback;
    tmp3Result.__attach();
    return tmp3Result;
  }
}
_inherits(AnimatedTracking, _modDef367);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    this.__isNative = true;
    const _parent = this._parent;
    _parent.__makeNative(arg0);
    const self = this;
    let fn = _get(_getPrototypeOf(AnimatedTracking.prototype), "__makeNative", this);
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
      let fn = _get(_getPrototypeOf(AnimatedTracking.prototype), "__attach", self);
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
      let fn = _get(_getPrototypeOf(AnimatedTracking.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "update",
    value: function update() {
      let toValue;
      const _value = this._value;
      const animate = _value.animate;
      const _animationClass = this._animationClass;
      const obj = { toValue: toValue.__getValue() };
      const merged = Object.assign(this._animationConfig);
      toValue = this._animationConfig.toValue;
      const _animationClass1 = new _animationClass(obj);
      animate(_animationClass1, this._callback);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let _parent;
      let _value;
      let obj4;
      let result;
      const _animationClass = this._animationClass;
      const obj = { toValue: undefined };
      const merged = Object.assign(this._animationConfig);
      const _animationClass1 = new _animationClass(obj);
      const obj2 = { type: "tracking", animationId: obj4.generateNewAnimationId(), animationConfig: result, toValue: _parent.__getNativeTag(), value: _value.__getNativeTag(), debugID: this.__getDebugID() };
      result = _animationClass1.__getNativeAnimationConfig();
      _parent = this._parent;
      _value = this._value;
      obj4 = get_nativeEventEmitterDefault;
      return obj2;
    }
  }
];

export default _createClass(AnimatedTracking, items);