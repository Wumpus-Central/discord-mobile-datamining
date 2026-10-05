// === Module 386: ? ===

// Module 386
import _modDef379 from "module_379" /* 379 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
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
class DecayAnimation {
  constructor(deceleration) {
    let constructResult;
    const self = this;
    _classCallCheck(this, DecayAnimation);
    const items = [deceleration];
    const obj = _getPrototypeOf(DecayAnimation);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c2(self, constructResult);
    let num = deceleration.deceleration;
    if (num == null) {
      num = 0.998;
    }
    tmp3Result._deceleration = num;
    ({ velocity: tmp6._velocity, platformConfig: tmp6._platformConfig } = deceleration);
    return tmp3Result;
  }
}
_inherits(DecayAnimation, _modDef379);
const entry = {
  key: "__getNativeAnimationConfig",
  value: function __getNativeAnimationConfig() {
    const obj = { type: "decay", deceleration: this._deceleration, velocity: this._velocity, iterations: this.__iterations, platformConfig: this._platformConfig, debugID: this.__getDebugID() };
    return obj;
  }
};
let items = [
  entry,
  {
    key: "start",
    value: function start(_lastValue, _onUpdate, arg2, arg3, __makeNative) {
      const self = this;
      const tmp = _get(_getPrototypeOf(DecayAnimation.prototype), "start", this);
      let closure_1 = tmp;
      let fn = tmp;
      if (typeof tmp === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [_lastValue, _onUpdate, arg2, arg3, __makeNative];
      fn(items);
      self._lastValue = _lastValue;
      self._fromValue = _lastValue;
      self._onUpdate = _onUpdate;
      self._startTime = Date.now();
      if (!self.__startAnimationIfNative(__makeNative)) {
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
        global.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  }
];

export default _createClass(DecayAnimation, items);