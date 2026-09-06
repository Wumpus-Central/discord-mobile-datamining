// === Module 386: ? ===

// Module 386
import AnimationDefault from "Animation" /* 379 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class DecayAnimation {
  constructor(arg0) {
    self = this;
    tmp = closure_1(this, DecayAnimation);
    items = [];
    items[0] = global;
    tmp2 = closure_3;
    obj = closure_3(DecayAnimation);
    tmp3 = c2;
    if (hasOwnProperty()) {
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
_inherits(DecayAnimation, AnimationDefault);
const entry = {
  key: "__getNativeAnimationConfig",
  value: function __getNativeAnimationConfig() {
    return { type: "decay", deceleration: this._deceleration, velocity: this._velocity, iterations: this.__iterations, platformConfig: this._platformConfig, debugID: this.__getDebugID() };
  }
};
let items = [
  entry,
  {
    key: "start",
    value: function start(_lastValue, _onUpdate, arg2, arg3, self) {
      self = this;
      const tmp = _get(_getPrototypeOf(DecayAnimation.prototype), "start", this);
      closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
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
      const self = this;
      let fn = _get(_getPrototypeOf(DecayAnimation.prototype), "stop", this);
      if (typeof fn === "function") {
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

export default _createClass(DecayAnimation, items);