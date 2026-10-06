// === Module 356: flushValue ===

// Module 356 (flushValue)
import get_nativeEventEmitterDefault from "get nativeEventEmitter" /* 357 */;
import _modDef363 from "module_363" /* 363 */;
import _modDef366 from "module_366" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

let dependencyMap, importDefault, set;

const f81137 = (update) => update.update();
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
class AnimatedValue {
  constructor(_value, useNativeDriver) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedValue);
    const items = [useNativeDriver];
    const obj = _getPrototypeOf(AnimatedValue);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    if (typeof _value !== "number") {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("AnimatedValue: Attempting to set value to undefined");
      throw error;
    } else {
      tmp3Result._listenerCount = 0;
      tmp3Result._updateSubscription = null;
      tmp3Result._value = _value;
      tmp3Result._startingValue = _value;
      tmp3Result._offset = 0;
      tmp3Result._animation = null;
      const tmp6 = useNativeDriver && useNativeDriver.useNativeDriver;
      if (tmp6) {
        tmp3Result.__makeNative();
      }
      return tmp3Result;
    }
  }
}
_inherits(AnimatedValue, _modDef366);
const entry = {
  key: "__detach",
  value: function __detach() {
    const self = this;
    if (this.__isNative) {
      const API = get_nativeEventEmitterDefault.API;
      const value = API.getValue(self.__getNativeTag(), (arg0) => {
        self._value = arg0 - self._offset;
      });
    }
    self.stopAnimation();
    let fn = _get(_getPrototypeOf(AnimatedValue.prototype), "__detach", self);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    fn([]);
  }
};
let items = [
  entry,
  {
    key: "__getValue",
    value: function __getValue() {
      return this._value + this._offset;
    }
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedValue.prototype), "__makeNative", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
      if (self._listenerCount > 0) {
        const result = self.__ensureUpdateSubscriptionExists();
      }
    }
  },
  {
    key: "addListener",
    value: function addListener(arg0) {
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedValue.prototype), "addListener", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      self._listenerCount = self._listenerCount + 1;
      const fnResult = fn(items);
      if (self.__isNative) {
        const result = self.__ensureUpdateSubscriptionExists();
      }
      return fnResult;
    }
  },
  {
    key: "removeListener",
    value: function removeListener(arg0) {
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedValue.prototype), "removeListener", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
      self._listenerCount = self._listenerCount - 1;
      const __isNative = self.__isNative && 0 === self._listenerCount;
      if (__isNative) {
        const _updateSubscription = self._updateSubscription;
        if (_updateSubscription != null) {
          _updateSubscription.remove();
        }
      }
    }
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedValue.prototype), "removeAllListeners", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
      self._listenerCount = 0;
      if (self.__isNative) {
        const _updateSubscription = self._updateSubscription;
        if (_updateSubscription != null) {
          _updateSubscription.remove();
        }
      }
    }
  },
  {
    key: "__ensureUpdateSubscriptionExists",
    value: function __ensureUpdateSubscriptionExists() {
      let closure_0;
      const self = this;
      if (null == this._updateSubscription) {
        const __getNativeTagResult = self.__getNativeTag();
        dependencyMap = __getNativeTagResult;
        let API = get_nativeEventEmitterDefault.API;
        let result = API.startListeningToAnimatedNodeValue(__getNativeTagResult);
        const nativeEventEmitter = get_nativeEventEmitterDefault.nativeEventEmitter;
        importDefault = nativeEventEmitter.addListener("onAnimatedValueUpdate", (tag) => {
          if (tag.tag === dependencyMap) {
            const result = self.__onAnimatedValueUpdateReceived(tag.value, tag.offset);
          }
        });
        const obj = {
          remove() {
              if (null != self._updateSubscription) {
                self._updateSubscription = null;
                closure_0.remove();
                const API = get_nativeEventEmitterDefault.API;
                const result = API.stopListeningToAnimatedNodeValue(dependencyMap);
              }
            }
        };
        self._updateSubscription = obj;
      }
    }
  },
  {
    key: "setValue",
    value: function setValue(_startingValue) {
      const self = this;
      if (this._animation) {
        const _animation = self._animation;
        _animation.stop();
        self._animation = null;
      }
      self._updateValue(_startingValue, !self.__isNative);
      if (self.__isNative) {
        const str = self.__getNativeTag();
        const str1 = str.toString();
        const API = get_nativeEventEmitterDefault.API;
        const result = API.setWaitingForIdentifier(str1);
        const API2 = get_nativeEventEmitterDefault.API;
        API2.setAnimatedNodeValue(self.__getNativeTag(), _startingValue);
        const API3 = get_nativeEventEmitterDefault.API;
        const result1 = API3.unsetWaitingForIdentifier(str1);
      }
    }
  },
  {
    key: "setOffset",
    value: function setOffset(_offset) {
      const self = this;
      this._offset = _offset;
      if (this.__isNative) {
        const API = get_nativeEventEmitterDefault.API;
        const result = API.setAnimatedNodeOffset(self.__getNativeTag(), _offset);
      }
    }
  },
  {
    key: "flattenOffset",
    value: function flattenOffset() {
      const self = this;
      this._value = this._value + this._offset;
      this._offset = 0;
      if (this.__isNative) {
        const API = get_nativeEventEmitterDefault.API;
        const result = API.flattenAnimatedNodeOffset(self.__getNativeTag());
      }
    }
  },
  {
    key: "extractOffset",
    value: function extractOffset() {
      const self = this;
      this._offset = this._offset + this._value;
      this._value = 0;
      if (this.__isNative) {
        const str = self.__getNativeTag();
        const str1 = str.toString();
        const API = get_nativeEventEmitterDefault.API;
        const result = API.setWaitingForIdentifier(str1);
        const API2 = get_nativeEventEmitterDefault.API;
        const result1 = API2.extractAnimatedNodeOffset(self.__getNativeTag());
        const API3 = get_nativeEventEmitterDefault.API;
        const result2 = API3.unsetWaitingForIdentifier(str1);
      }
    }
  },
  {
    key: "stopAnimation",
    value: function stopAnimation(fn) {
      const self = this;
      this.stopTracking();
      if (this._animation) {
        const _animation = self._animation;
        _animation.stop();
      }
      self._animation = null;
      if (fn) {
        if (self.__isNative) {
          const API = get_nativeEventEmitterDefault.API;
          const value = API.getValue(self.__getNativeTag(), fn);
        } else {
          fn(self.__getValue());
        }
      }
    }
  },
  {
    key: "resetAnimation",
    value: function resetAnimation(arg0) {
      const self = this;
      this.stopAnimation(arg0);
      this._value = this._startingValue;
      if (this.__isNative) {
        const API = get_nativeEventEmitterDefault.API;
        API.setAnimatedNodeValue(self.__getNativeTag(), self._startingValue);
      }
    }
  },
  {
    key: "__onAnimatedValueUpdateReceived",
    value: function __onAnimatedValueUpdateReceived(_value, _offset) {
      this._updateValue(_value, false);
      if (null != _offset) {
        this._offset = _offset;
      }
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
    key: "animate",
    value: function animate(_animation, arg1) {
      const self = this;
      let closure_0 = arg1;
      _animation = this._animation;
      if (_animation) {
        const _animation2 = self._animation;
        _animation2.stop();
      }
      self._animation = _animation;
      _animation.start(self._value, (_value) => {
        self._updateValue(_value, true);
      }, (arg0) => {
        self._animation = null;
        if (closure_0) {
          tmp(arg0);
        }
      }, _animation, self);
    }
  },
  {
    key: "stopTracking",
    value: function stopTracking() {
      const self = this;
      if (this._tracking) {
        const _tracking = self._tracking;
        _tracking.__detach();
      }
      self._tracking = null;
    }
  },
  {
    key: "track",
    value: function track(_tracking) {
      this.stopTracking();
      this._tracking = _tracking;
      if (this._tracking) {
        _tracking = this._tracking;
        _tracking.update();
      }
    }
  },
  {
    key: "_updateValue",
    value: function _updateValue(_value, arg1) {
      if (undefined === _value) {
        const _Error = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("AnimatedValue: Attempting to set value to undefined");
        throw error;
      } else {
        const self5 = this;
        this._value = _value;
        if (arg1) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          function findAnimatedStyles(update) {
            if (typeof update.update === "function") {
              set.add(update);
            } else {
              const __getChildrenResult = update.__getChildren();
              const item = __getChildrenResult.forEach(findAnimatedStyles);
            }
          }
          if (typeof self5.update === "function") {
            set.add(self5);
          } else {
            let __getChildrenResult = self5.__getChildren();
            let item = __getChildrenResult.forEach(findAnimatedStyles);
          }
          const item1 = set.forEach(f81137);
        }
        self5.__callListeners(self5.__getValue());
      }
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "value", value: this._value, offset: this._offset, debugID: this.__getDebugID() };
      return obj;
    }
  }
];

export default _createClass(AnimatedValue, items);
export const flushValue = function flushValue(self) {
  set = new Set();
  function findAnimatedStyles(update) {
    if (typeof update.update === "function") {
      set.add(update);
    } else {
      const __getChildrenResult = update.__getChildren();
      const item = __getChildrenResult.forEach(findAnimatedStyles);
    }
  }
  if (typeof self.update === "function") {
    set.add(self);
  } else {
    const __getChildrenResult = self.__getChildren();
    const item = __getChildrenResult.forEach(findAnimatedStyles);
  }
  const item1 = set.forEach(f81137);
};