// === Module 385: ? ===

// Module 385
import AnimationDefault from "Animation" /* 379 */;
import _readOnlyError from "_readOnlyError" /* 377 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const TimingAnimation = global;
const require = arg1;
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
class TimingAnimation {
  constructor(arg0) {
    self = this;
    tmp = closure_4(this, TimingAnimation);
    items = [];
    items[0] = global;
    tmp2 = metroRequire;
    obj = metroRequire(TimingAnimation);
    tmp3 = hasOwnProperty;
    if (closure_8()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    ({ toValue: tmp6._toValue, easing } = global);
    if (easing == null) {
      tmp7 = closure_3;
      if (!closure_3) {
        tmp8 = closure_1;
        tmp9 = c2;
        _default = closure_1(c2[7]).default;
        inOutResult = _default.inOut(_default.ease);
        closure_3 = inOutResult;
        tmp7 = inOutResult;
      }
      easing = tmp7;
    }
    tmp3Result._easing = easing;
    num = global.duration;
    if (num == null) {
      num = 500;
    }
    tmp3Result._duration = num;
    num2 = global.delay;
    if (num2 == null) {
      num2 = 0;
    }
    tmp3Result._delay = num2;
    tmp3Result._platformConfig = global.platformConfig;
    return tmp3Result;
  }
}
_inherits(TimingAnimation, AnimationDefault);
const entry = {
  key: "__getNativeAnimationConfig",
  value: function __getNativeAnimationConfig() {
    const self = this;
    const items = [];
    const rounded = Math.round(this._duration / 16.666666666666668);
    for (let num = 0; num < rounded; num = num + 1) {
      let arr = items.push(self._easing(num / rounded));
    }
    items.push(self._easing(1));
    return { type: "frames", frames: items, toValue: self._toValue, iterations: self.__iterations, platformConfig: self._platformConfig, debugID: self.__getDebugID() };
  }
};
let items = [
  entry,
  {
    key: "start",
    value: function start(_fromValue, _onUpdate, arg2, arg3, self) {
      self = this;
      const tmp = _get(metroRequire(TimingAnimation.prototype), "start", this);
      closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [_fromValue, _onUpdate, arg2, arg3, self];
      fn(items);
      self._fromValue = _fromValue;
      self._onUpdate = _onUpdate;
      if (self._delay) {
        const _setTimeout = setTimeout;
        self._timeout = setTimeout(function start() {
          closure_1._startTime = Date.now();
          if (!closure_1.__startAnimationIfNative(self)) {
            if (0 === obj._duration) {
              obj._onUpdate(obj._toValue);
              obj.__notifyAnimationEnd({ finished: true });
            } else {
              const _requestAnimationFrame = requestAnimationFrame;
              obj._animationFrame = requestAnimationFrame(() => closure_1_1.onUpdate());
            }
          }
        }, self._delay);
      } else {
        const _Date = Date;
        self._startTime = Date.now();
        if (!self.__startAnimationIfNative(self)) {
          if (0 === self._duration) {
            self._onUpdate(self._toValue);
            self.__notifyAnimationEnd({ finished: true });
          } else {
            let _requestAnimationFrame = requestAnimationFrame;
            self._animationFrame = requestAnimationFrame(() => closure_1_1.onUpdate());
          }
        }
      }
    }
  },
  {
    key: "onUpdate",
    value: function onUpdate() {
      const self = this;
      const timestamp = Date.now();
      if (timestamp >= this._startTime + this._duration) {
        if (0 === self._duration) {
          self._onUpdate(self._toValue);
        } else {
          ({ _onUpdate, _fromValue } = self);
          _onUpdate(_fromValue + self._easing(1) * (self._toValue - self._fromValue));
        }
        self.__notifyAnimationEnd({ finished: true });
      } else {
        ({ _onUpdate: _onUpdate2, _fromValue: _fromValue2 } = self);
        _onUpdate2(_fromValue2 + self._easing((timestamp - self._startTime) / self._duration) * (self._toValue - self._fromValue));
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
      let fn = _get(metroRequire(TimingAnimation.prototype), "stop", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
      clearTimeout(self._timeout);
      if (null != self._animationFrame) {
        TimingAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  }
];

export default _createClass(TimingAnimation, items);