// _runtime/00356__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "00366__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import closure_5 from "metro/00096__get.js";
import importDefaultResult from "metro/00042__createClass.js";

let AnimatedValue = importDefault;
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
class AnimatedValue {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_2(this, AnimatedValue);
    items = [];
    items[0] = arg1;
    tmp2 = closure_4;
    obj = closure_4(AnimatedValue);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    if (typeof global !== "number") {
      tmp7 = globalThis;
      _Error = Error;
      tmp8 = new.target;
      str = "AnimatedValue: Attempting to set value to undefined";
      tmp9 = new.target;
      error = new Error("AnimatedValue: Attempting to set value to undefined");
      tmp11 = error;
      throw error;
    } else {
      num = 0;
      tmp3Result._listenerCount = 0;
      tmp12 = null;
      tmp3Result._updateSubscription = null;
      tmp3Result._value = global;
      tmp3Result._startingValue = global;
      tmp3Result._offset = 0;
      tmp3Result._animation = null;
      useNativeDriver = arg1;
      if (arg1) {
        useNativeDriver = arg1.useNativeDriver;
      }
      if (useNativeDriver) {
        __makeNativeResult = tmp3Result.__makeNative();
      }
      return tmp3Result;
    }
  }
}
_inheritsDefault(AnimatedValue, _isNativeReflectConstructDefault);
let items = [
  {
    key: "__detach",
    value: function __detach() {
      let self = this;
      self = this;
      if (this.__isNative) {
        const API = AnimatedValue(357).API;
        const value = API.getValue(self.__getNativeTag(), (arg0) => {
          self._value = arg0 - self._offset;
        });
      }
      self.stopAnimation();
      let fn;
      fn = callback3(callback2(self.prototype), "__detach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getValue",
    value: function __getValue() {
      return this._value + this._offset;
    }
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      let self = this;
      self = this;
      let fn = callback3(callback2(self.prototype), "__makeNative", this);
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
      let self = this;
      self = this;
      let fn = callback3(callback2(self.prototype), "addListener", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      self._listenerCount = self._listenerCount + 1;
      if (self.__isNative) {
        const result = self.__ensureUpdateSubscriptionExists();
      }
      return fn(items);
    }
  },
  {
    key: "removeListener",
    value: function removeListener(arg0) {
      let self = this;
      self = this;
      let fn = callback3(callback2(self.prototype), "removeListener", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
      self._listenerCount = self._listenerCount - 1;
      let __isNative = self.__isNative;
      if (__isNative) {
        __isNative = 0 === self._listenerCount;
      }
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
      let self = this;
      self = this;
      let fn = callback3(callback2(self.prototype), "removeAllListeners", this);
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
      let self = this;
      self = this;
      if (null == this._updateSubscription) {
        const __getNativeTagResult = self.__getNativeTag();
        dependencyMap = __getNativeTagResult;
        let API = AnimatedValue(357).API;
        let result = API.startListeningToAnimatedNodeValue(__getNativeTagResult);
        const nativeEventEmitter = AnimatedValue(357).nativeEventEmitter;
        AnimatedValue = nativeEventEmitter.addListener("onAnimatedValueUpdate", (tag) => {
          if (tag.tag === closure_1) {
            const result = self.__onAnimatedValueUpdateReceived(tag.value, tag.offset);
          }
        });
        const obj = { remove: null };
        obj[0] = function remove() {
          if (null != self._updateSubscription) {
            self._updateSubscription = null;
            lib.remove();
            const API = lib(__getNativeTagResult[6]).API;
            const result = API.stopListeningToAnimatedNodeValue(closure_1);
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
        let str = self.__getNativeTag();
        str = str.toString();
        const API = AnimatedValue(357).API;
        const result = API.setWaitingForIdentifier(str);
        const API2 = AnimatedValue(357).API;
        API2.setAnimatedNodeValue(self.__getNativeTag(), _startingValue);
        const API3 = AnimatedValue(357).API;
        const result1 = API3.unsetWaitingForIdentifier(str);
      }
    }
  },
  {
    key: "setOffset",
    value: function setOffset(_offset) {
      const self = this;
      this._offset = _offset;
      if (this.__isNative) {
        const API = AnimatedValue(357).API;
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
        const API = AnimatedValue(357).API;
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
        let str = self.__getNativeTag();
        str = str.toString();
        const API = AnimatedValue(357).API;
        const result = API.setWaitingForIdentifier(str);
        const API2 = AnimatedValue(357).API;
        const result1 = API2.extractAnimatedNodeOffset(self.__getNativeTag());
        const API3 = AnimatedValue(357).API;
        const result2 = API3.unsetWaitingForIdentifier(str);
      }
    }
  },
  {
    key: "stopAnimation",
    value: function stopAnimation(arg0) {
      const self = this;
      this.stopTracking();
      if (this._animation) {
        const _animation = self._animation;
        _animation.stop();
      }
      self._animation = null;
      if (arg0) {
        if (self.__isNative) {
          const API = AnimatedValue(357).API;
          const value = API.getValue(self.__getNativeTag(), arg0);
        } else {
          arg0(self.__getValue());
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
        const API = AnimatedValue(357).API;
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
      return new AnimatedValue(363)(this, arg0);
    }
  },
  {
    key: "animate",
    value: function animate(_animation) {
      let self = this;
      self = this;
      closure_0 = arg1;
      if (this._animation) {
        _animation = self._animation;
        _animation.stop();
      }
      self._animation = _animation;
      _animation.start(self._value, (_value) => {
        self._updateValue(_value, true);
      }, (arg0) => {
        self._animation = null;
        if (closure_0) {
          tmp(arg0);
        }
      }, this._animation, self);
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
        error = new Error("AnimatedValue: Attempting to set value to undefined");
        throw error;
      } else {
        const self = this;
        this._value = _value;
        if (!arg1) {
          self.__callListeners(self.__getValue());
        } else {
          const _Set = Set;
          const set = new Set();
          function findAnimatedStyles(update) {
            if (typeof update.update === "function") {
              set.add(update);
            } else {
              const item = update.__getChildren().forEach(findAnimatedStyles);
              const __getChildrenResult = update.__getChildren();
            }
          }
          if (typeof self.update === "function") {
            set.add(self);
          } else {
            let item = self.__getChildren().forEach(findAnimatedStyles);
            let __getChildrenResult = self.__getChildren();
          }
          const item1 = set.forEach((update) => update.update());
        }
      }
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      return { type: "value", value: this._value, offset: this._offset, debugID: this.__getDebugID() };
    }
  }
];

export default importDefaultResult(AnimatedValue, items);
export const flushValue = function flushValue(self) {
  const set = new Set();
  function findAnimatedStyles(update) {
    if (typeof update.update === "function") {
      set.add(update);
    } else {
      const item = update.__getChildren().forEach(findAnimatedStyles);
      const __getChildrenResult = update.__getChildren();
    }
  }
  if (typeof self.update === "function") {
    set.add(self);
  } else {
    const item = self.__getChildren().forEach(findAnimatedStyles);
    const __getChildrenResult = self.__getChildren();
  }
  const item1 = set.forEach((update) => update.update());
};