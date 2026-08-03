import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

const DecayAnimation = global;
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
class DecayAnimation {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, DecayAnimation);
    items = [];
    items[0] = global;
    tmp2 = __esModule;
    obj = __esModule(DecayAnimation);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    num = global.deceleration;
    if (num == null) {
      num = 0.998;
    }
    tmp3Result._deceleration = num;
    ({ velocity: tmp6._velocity, platformConfig: tmp6._platformConfig } = global);
    return tmp3Result;
  }
}
require("_inherits")(DecayAnimation, require("Animation"));
let items = [
  {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      return { type: "decay", deceleration: this._deceleration, velocity: this._velocity, iterations: this.__iterations, platformConfig: this._platformConfig, debugID: this.__getDebugID() };
    }
  },
  {
    key: "start",
    value: function start(_lastValue, _onUpdate, arg2, arg3, self) {
      self = this;
      self = this;
      self = this;
      const tmp = callback3(callback2(self.prototype), "start", this);
      let _classCallCheck = tmp;
      let fn = tmp;
      if (typeof tmp !== "HAS_APPLICATION") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [_lastValue, _onUpdate, arg2, arg3, self];
      fn(items);
      self._lastValue = _lastValue;
      self._fromValue = _lastValue;
      self._onUpdate = _onUpdate;
      self._startTime = Date.now();
      if (!self.__startAnimationIfNative(self)) {
        const _requestAnimationFrame = requestAnimationFrame;
        self._animationFrame = requestAnimationFrame(() => self.onUpdate());
      }
    }
  },
  {
    key: "onUpdate",
    value: function onUpdate() {
      const self = this;
      const result = this._velocity / (1 - this._deceleration);
      const sum = this._fromValue + result * (1 - Math.exp(-1 - this._deceleration * (Date.now() - this._startTime)));
      this._onUpdate(sum);
      if (Math.abs(this._lastValue - sum) < 0.1) {
        self.__notifyAnimationEnd({ finished: true });
      } else {
        self._lastValue = sum;
        if (self.__active) {
          const _requestAnimationFrame = requestAnimationFrame;
          const onUpdate = self.onUpdate;
          self._animationFrame = requestAnimationFrame(onUpdate.bind(self));
        }
      }
    }
  },
  {
    key: "stop",
    value: function stop() {
      let self = this;
      self = this;
      let fn = callback3(callback2(self.prototype), "stop", this);
      if (typeof fn !== "HAS_APPLICATION") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
      if (null != self._animationFrame) {
        DecayAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  }
];

export default importDefaultResult(DecayAnimation, items);