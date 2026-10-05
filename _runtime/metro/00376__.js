// === Module 376: ? ===

// Module 376
import _modDef38 from "module_38" /* 38 */;
import _modAll378 from "module_378" /* 378 */;
import _modDef379 from "module_379" /* 379 */;
import _readOnlyError from "_readOnlyError" /* 377 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
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
class SpringAnimation {
  constructor(overshootClamping) {
    let constructResult;
    let delay;
    const self = this;
    _classCallCheck(this, SpringAnimation);
    const items = [overshootClamping];
    const obj = _getPrototypeOf(SpringAnimation);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    let flag = overshootClamping.overshootClamping;
    if (flag == null) {
      flag = false;
    }
    tmp3Result._overshootClamping = flag;
    let num = overshootClamping.restDisplacementThreshold;
    if (num == null) {
      num = 0.001;
    }
    tmp3Result._restDisplacementThreshold = num;
    let num2 = overshootClamping.restSpeedThreshold;
    if (num2 == null) {
      num2 = 0.001;
    }
    tmp3Result._restSpeedThreshold = num2;
    let num3 = overshootClamping.velocity;
    if (num3 == null) {
      num3 = 0;
    }
    tmp3Result._initialVelocity = num3;
    let num4 = overshootClamping.velocity;
    if (num4 == null) {
      num4 = 0;
    }
    tmp3Result._lastVelocity = num4;
    ({ toValue: tmp6._toValue, delay } = overshootClamping);
    if (delay == null) {
      delay = 0;
    }
    tmp3Result._delay = delay;
    tmp3Result._platformConfig = overshootClamping.platformConfig;
    if (undefined === overshootClamping.stiffness) {
      if (undefined === overshootClamping.damping) {
        if (undefined === overshootClamping.mass) {
          if (undefined === overshootClamping.bounciness) {
            if (undefined === overshootClamping.speed) {
              let num5 = overshootClamping.tension;
              const fromOrigamiTensionAndFriction = _modAll378.fromOrigamiTensionAndFriction;
              _modAll378;
              if (num5 == null) {
                num5 = 40;
              }
              let num6 = overshootClamping.friction;
              if (num6 == null) {
                num6 = 7;
              }
              const result = fromOrigamiTensionAndFriction(num5, num6);
              ({ stiffness: tmp6._stiffness, damping: tmp6._damping } = result);
              tmp3Result._mass = 1;
            }
          }
          let tmp14 = undefined === overshootClamping.tension;
          const tmp13 = _modDef38;
          if (tmp14) {
            tmp14 = undefined === overshootClamping.friction;
          }
          if (tmp14) {
            tmp14 = undefined === overshootClamping.stiffness;
          }
          if (tmp14) {
            tmp14 = undefined === overshootClamping.damping;
          }
          if (tmp14) {
            tmp14 = undefined === overshootClamping.mass;
          }
          tmp13(tmp14, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
          let num8 = overshootClamping.bounciness;
          const fromBouncinessAndSpeed = _modAll378.fromBouncinessAndSpeed;
          _modAll378;
          if (num8 == null) {
            num8 = 8;
          }
          let num9 = overshootClamping.speed;
          if (num9 == null) {
            num9 = 12;
          }
          const result1 = fromBouncinessAndSpeed(num8, num9);
          ({ stiffness: tmp6._stiffness, damping: tmp6._damping } = result1);
          tmp3Result._mass = 1;
        }
        _modDef38(tmp3Result._stiffness > 0, "Stiffness value must be greater than 0");
        _modDef38(tmp3Result._damping > 0, "Damping value must be greater than 0");
        _modDef38(tmp3Result._mass > 0, "Mass value must be greater than 0");
        return tmp3Result;
      }
    }
    let tmp21 = undefined === overshootClamping.bounciness;
    const tmp20 = _modDef38;
    if (tmp21) {
      tmp21 = undefined === overshootClamping.speed;
    }
    if (tmp21) {
      tmp21 = undefined === overshootClamping.tension;
    }
    if (tmp21) {
      tmp21 = undefined === overshootClamping.friction;
    }
    tmp20(tmp21, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
    let num11 = overshootClamping.stiffness;
    if (num11 == null) {
      num11 = 100;
    }
    tmp3Result._stiffness = num11;
    let num12 = overshootClamping.damping;
    if (num12 == null) {
      num12 = 10;
    }
    tmp3Result._damping = num12;
    let num13 = overshootClamping.mass;
    if (num13 == null) {
      num13 = 1;
    }
    tmp3Result._mass = num13;
  }
}
_inherits(SpringAnimation, _modDef379);
const entry = {
  key: "__getNativeAnimationConfig",
  value: function __getNativeAnimationConfig() {
    let _lastVelocity;
    const self = this;
    const obj = { type: "spring", overshootClamping: this._overshootClamping, restDisplacementThreshold: this._restDisplacementThreshold, restSpeedThreshold: this._restSpeedThreshold, stiffness: this._stiffness, damping: this._damping, mass: this._mass, initialVelocity: _lastVelocity, toValue: null, iterations: null, platformConfig: null, debugID: self.__getDebugID() };
    _lastVelocity = this._initialVelocity;
    if (_lastVelocity == null) {
      _lastVelocity = self._lastVelocity;
    }
    ({ _toValue: obj.toValue, __iterations: obj.iterations, _platformConfig: obj.platformConfig } = self);
    return obj;
  }
};
let items = [
  entry,
  {
    key: "start",
    value: function start(_startPosition, _onUpdate, arg2, getInternalState, __makeNative) {
      let closure_0 = __makeNative;
      const self = this;
      const tmp2 = _get(_getPrototypeOf(SpringAnimation.prototype), "start", this);
      let closure_1 = tmp2;
      let fn = tmp2;
      if (typeof tmp2 === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [_startPosition, _onUpdate, arg2, getInternalState, __makeNative];
      fn(items);
      self._startPosition = _startPosition;
      self._lastPosition = self._startPosition;
      self._onUpdate = _onUpdate;
      self._lastTime = Date.now();
      self._frameTime = 0;
      if (getInternalState instanceof SpringAnimation) {
        const internalState = getInternalState.getInternalState();
        ({ lastPosition: self._lastPosition, lastVelocity: self._lastVelocity } = internalState);
        self._initialVelocity = self._lastVelocity;
        self._lastTime = internalState.lastTime;
      }
      if (self._delay) {
        const _setTimeout = setTimeout;
        self._timeout = setTimeout(function start() {
          if (!self.__startAnimationIfNative(closure_0)) {
            self.onUpdate();
          }
        }, self._delay);
      } else if (!self.__startAnimationIfNative(__makeNative)) {
        self.onUpdate();
      }
    }
  },
  {
    key: "getInternalState",
    value: function getInternalState() {
      return { lastPosition: this._lastPosition, lastVelocity: this._lastVelocity, lastTime: this._lastTime };
    }
  },
  {
    key: "onUpdate",
    value: function onUpdate() {
      let _mass;
      let _stiffness;
      let diff1;
      let diff2;
      const self = this;
      let timestamp = Date.now();
      if (timestamp > this._lastTime + 64) {
        timestamp = self._lastTime + 64;
      }
      self._frameTime = self._frameTime + (timestamp - self._lastTime) / 1000;
      ({ _mass, _stiffness } = self);
      const result = self._damping / (2 * Math.sqrt(_stiffness * _mass));
      const sqrtResult = Math.sqrt(_stiffness / _mass);
      const result1 = sqrtResult * Math.sqrt(1 - result * result);
      const diff = self._toValue - self._startPosition;
      const _frameTime = self._frameTime;
      if (result < 1) {
        const _Math2 = Math;
        const expResult = Math.exp(-result * sqrtResult * _frameTime);
        const _Math3 = Math;
        const _toValue = self._toValue;
        const result2 = (tmp2 + result * sqrtResult * diff) / result1;
        const _Math4 = Math;
        const result3 = result2 * Math.sin(result1 * _frameTime);
        diff1 = _toValue - expResult * (result3 + diff * Math.cos(result1 * _frameTime));
        const _Math5 = Math;
        const result4 = result * sqrtResult * expResult;
        const _Math6 = Math;
        const result5 = Math.sin(result1 * _frameTime) * (tmp2 + result * sqrtResult * diff) / result1;
        const _Math7 = Math;
        const sum = result5 + diff * Math.cos(result1 * _frameTime);
        const _Math8 = Math;
        const result6 = Math.cos(result1 * _frameTime) * (tmp2 + result * sqrtResult * diff);
        const result7 = result1 * diff;
        diff2 = result4 * sum - expResult * (result6 - result7 * Math.sin(result1 * _frameTime));
      } else {
        const _Math = Math;
        const expResult1 = Math.exp(-sqrtResult * _frameTime);
        diff1 = self._toValue - expResult1 * (diff + (tmp2 + sqrtResult * diff) * _frameTime);
        diff2 = expResult1 * (tmp2 * (_frameTime * sqrtResult - 1) + _frameTime * diff * (sqrtResult * sqrtResult));
      }
      self._lastTime = timestamp;
      self._lastPosition = diff1;
      self._lastVelocity = diff2;
      self._onUpdate(diff1);
      if (self.__active) {
        const _overshootClamping = self._overshootClamping && 0 !== self._stiffness;
        let flag = false;
        if (_overshootClamping) {
          let tmp19;
          if (self._startPosition < self._toValue) {
            tmp19 = diff1 > self._toValue;
          } else {
            tmp19 = diff1 < self._toValue;
          }
          flag = tmp19;
        }
        const _Math9 = Math;
        Math.abs(diff2) <= self._restSpeedThreshold;
        if (0 !== self._stiffness) {
          const _Math10 = Math;
          Math.abs(self._toValue - diff1) <= self._restDisplacementThreshold;
        }
        if (!flag) {
          const _requestAnimationFrame = requestAnimationFrame;
          const onUpdate = self.onUpdate;
          self._animationFrame = requestAnimationFrame(onUpdate.bind(self));
        }
        if (0 !== self._stiffness) {
          self._lastPosition = self._toValue;
          self._lastVelocity = 0;
          self._onUpdate(self._toValue);
        }
        self.__notifyAnimationEnd({ finished: true });
      }
    }
  },
  {
    key: "stop",
    value: function stop() {
      const self = this;
      let fn = _get(_getPrototypeOf(SpringAnimation.prototype), "stop", this);
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

export default _createClass(SpringAnimation, items);