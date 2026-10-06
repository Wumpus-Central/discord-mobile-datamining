// === Module 385: ? ===

// Module 385
import bezier from "bezier" /* 364 */;
import _modDef379 from "module_379" /* 379 */;
import _readOnlyError from "_readOnlyError" /* 377 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

let inOutResult;

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
class TimingAnimation {
  constructor(duration) {
    let constructResult;
    let easing;
    const self = this;
    _classCallCheck(this, TimingAnimation);
    const items = [duration];
    const obj = _getPrototypeOf(TimingAnimation);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    ({ toValue: tmp6._toValue, easing } = duration);
    if (easing == null) {
      let tmp7 = inOutResult;
      if (!tmp7) {
        const _default = bezier.default;
        inOutResult = _default.inOut(_default.ease);
        tmp7 = inOutResult;
      }
      easing = tmp7;
    }
    tmp3Result._easing = easing;
    let num = duration.duration;
    if (num == null) {
      num = 500;
    }
    tmp3Result._duration = num;
    let num2 = duration.delay;
    if (num2 == null) {
      num2 = 0;
    }
    tmp3Result._delay = num2;
    tmp3Result._platformConfig = duration.platformConfig;
    return tmp3Result;
  }
}
_inherits(TimingAnimation, _modDef379);
const entry = {
  key: "__getNativeAnimationConfig",
  value: function __getNativeAnimationConfig() {
    let num;
    const self = this;
    const items = [];
    const rounded = Math.round(this._duration / 16.666666666666668);
    for (let num = 0; num < rounded; num = num + 1) {
      let arr = items.push(self._easing(num / rounded));
    }
    items.push(self._easing(1));
    const obj = { type: "frames", frames: items, toValue: self._toValue, iterations: self.__iterations, platformConfig: self._platformConfig, debugID: self.__getDebugID() };
    return obj;
  }
};
let items = [
  entry,
  {
    key: "start",
    value: function start(_fromValue, _onUpdate, arg2, arg3, __makeNative) {
      const f149944 = () => self.onUpdate();
      let closure_0 = __makeNative;
      const self = this;
      const tmp = _get(_getPrototypeOf(TimingAnimation.prototype), "start", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [_fromValue, _onUpdate, arg2, arg3, __makeNative];
      fn(items);
      self._fromValue = _fromValue;
      self._onUpdate = _onUpdate;
      if (self._delay) {
        const _setTimeout = setTimeout;
        self._timeout = setTimeout(function start() {
          self._startTime = Date.now();
          if (!self.__startAnimationIfNative(closure_0)) {
            if (0 === self._duration) {
              self._onUpdate(self._toValue);
              self.__notifyAnimationEnd({ finished: true });
            } else {
              const _requestAnimationFrame = requestAnimationFrame;
              self._animationFrame = requestAnimationFrame(f149944);
            }
          }
        }, self._delay);
      } else {
        const _Date = Date;
        self._startTime = Date.now();
        if (!self.__startAnimationIfNative(__makeNative)) {
          if (0 === self._duration) {
            self._onUpdate(self._toValue);
            self.__notifyAnimationEnd({ finished: true });
          } else {
            let _requestAnimationFrame = requestAnimationFrame;
            self._animationFrame = requestAnimationFrame(f149944);
          }
        }
      }
    }
  },
  {
    key: "onUpdate",
    value: function onUpdate() {
      let _fromValue;
      let _fromValue2;
      let _onUpdate;
      let _onUpdate2;
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
      let fn = _get(_getPrototypeOf(TimingAnimation.prototype), "stop", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
      clearTimeout(self._timeout);
      if (null != self._animationFrame) {
        global.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  }
];

export default _createClass(TimingAnimation, items);