// === Module 376: _isNativeReflectConstruct ===

// Module 376 (_isNativeReflectConstruct)
import _modDef38 from "module_38" /* 38 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _readOnlyErrorDefault from "_readOnlyError" /* 377 */;
import fromOrigamiTensionAndFrictionAll from "fromOrigamiTensionAndFriction" /* 378 */;
import AnimationDefault from "Animation" /* 379 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import importDefaultResult1 from "_createClass" /* 42 */;

const SpringAnimation = global;
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
_readOnlyErrorDefault;
class SpringAnimation {
  constructor(arg0) {
    self = this;
    tmp = closure_4(this, SpringAnimation);
    items = [];
    items[0] = global;
    tmp2 = closure_6;
    obj = closure_6(SpringAnimation);
    tmp3 = closure_5;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    flag = global.overshootClamping;
    if (flag == null) {
      flag = false;
    }
    tmp3Result._overshootClamping = flag;
    num = global.restDisplacementThreshold;
    if (num == null) {
      num = 0.001;
    }
    tmp3Result._restDisplacementThreshold = num;
    num2 = global.restSpeedThreshold;
    if (num2 == null) {
      num2 = 0.001;
    }
    tmp3Result._restSpeedThreshold = num2;
    num3 = global.velocity;
    if (num3 == null) {
      num3 = 0;
    }
    tmp3Result._initialVelocity = num3;
    num4 = global.velocity;
    if (num4 == null) {
      num4 = 0;
    }
    tmp3Result._lastVelocity = num4;
    ({ toValue: tmp6._toValue, delay } = global);
    if (delay == null) {
      delay = 0;
    }
    tmp3Result._delay = delay;
    tmp3Result._platformConfig = global.platformConfig;
    if (undefined === global.stiffness) {
      if (undefined === global.damping) {
        if (undefined === global.mass) {
          if (undefined === global.bounciness) {
            if (undefined === global.speed) {
              tmp7 = closure_2;
              tmp8 = closure_3;
              obj2 = require("fromOrigamiTensionAndFriction");
              num5 = global.tension;
              if (num5 == null) {
                num5 = 40;
              }
              num6 = global.friction;
              if (num6 == null) {
                num6 = 7;
              }
              result = obj2.fromOrigamiTensionAndFriction(num5, num6);
              ({ stiffness: tmp6._stiffness, damping: tmp6._damping } = result);
              num7 = 1;
              tmp3Result._mass = 1;
            }
          }
          tmp10 = closure_1;
          tmp11 = closure_3;
          tmp13 = undefined === global.tension;
          tmp12 = require("module_38");
          if (tmp13) {
            tmp13 = undefined === global.friction;
          }
          if (tmp13) {
            tmp13 = undefined === global.stiffness;
          }
          if (tmp13) {
            tmp13 = undefined === global.damping;
          }
          if (tmp13) {
            tmp13 = undefined === global.mass;
          }
          str = "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one";
          tmp12Result = tmp12(tmp13, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
          tmp15 = closure_2;
          obj3 = require("fromOrigamiTensionAndFriction");
          num8 = global.bounciness;
          if (num8 == null) {
            num8 = 8;
          }
          num9 = global.speed;
          if (num9 == null) {
            num9 = 12;
          }
          result1 = obj3.fromBouncinessAndSpeed(num8, num9);
          ({ stiffness: tmp6._stiffness, damping: tmp6._damping } = result1);
          num10 = 1;
          tmp3Result._mass = 1;
          tmp8 = tmp11;
        }
        tmp21 = closure_1;
        num14 = 0;
        str2 = "Stiffness value must be greater than 0";
        tmp22 = require("module_38")(tmp3Result._stiffness > 0, "Stiffness value must be greater than 0");
        str3 = "Damping value must be greater than 0";
        tmp23 = require("module_38")(tmp3Result._damping > 0, "Damping value must be greater than 0");
        str4 = "Mass value must be greater than 0";
        tmp24 = require("module_38")(tmp3Result._mass > 0, "Mass value must be greater than 0");
        return tmp3Result;
      }
    }
    tmp17 = closure_3;
    tmp19 = undefined === global.bounciness;
    tmp18 = require("module_38");
    if (tmp19) {
      tmp19 = undefined === global.speed;
    }
    if (tmp19) {
      tmp19 = undefined === global.tension;
    }
    if (tmp19) {
      tmp19 = undefined === global.friction;
    }
    tmp18Result = tmp18(tmp19, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
    num11 = global.stiffness;
    if (num11 == null) {
      num11 = 100;
    }
    tmp3Result._stiffness = num11;
    num12 = global.damping;
    if (num12 == null) {
      num12 = 10;
    }
    tmp3Result._damping = num12;
    num13 = global.mass;
    if (num13 == null) {
      num13 = 1;
    }
    tmp3Result._mass = num13;
    tmp8 = tmp17;
    return;
  }
}
_inheritsDefault(SpringAnimation, AnimationDefault);
let items = [
  {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      const self = this;
      const obj = { type: "spring", overshootClamping: this._overshootClamping, restDisplacementThreshold: this._restDisplacementThreshold, restSpeedThreshold: this._restSpeedThreshold, stiffness: this._stiffness, damping: this._damping, mass: this._mass, initialVelocity: null, toValue: null, iterations: null, platformConfig: null, debugID: null };
      let _lastVelocity = this._initialVelocity;
      if (_lastVelocity == null) {
        _lastVelocity = self._lastVelocity;
      }
      obj[7] = _lastVelocity;
      ({ _toValue: obj[8], __iterations: obj[9], _platformConfig: obj[10] } = self);
      obj[11] = self.__getDebugID();
      return obj;
    }
  },
  {
    key: "start",
    value: function start(_startPosition, _onUpdate, arg2, getInternalState, self) {
      self = this;
      const tmp2 = callback3(callback2(self.prototype), "start", this);
      closure_1 = tmp2;
      let fn = tmp2;
      if (typeof tmp2 === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [_startPosition, _onUpdate, arg2, getInternalState, self];
      fn(items);
      self._startPosition = _startPosition;
      self._lastPosition = self._startPosition;
      self._onUpdate = _onUpdate;
      self._lastTime = Date.now();
      self._frameTime = 0;
      if (getInternalState instanceof self) {
        const internalState = getInternalState.getInternalState();
        ({ lastPosition: self._lastPosition, lastVelocity: self._lastVelocity } = internalState);
        self._initialVelocity = self._lastVelocity;
        self._lastTime = internalState.lastTime;
      }
      if (self._delay) {
        const _setTimeout = setTimeout;
        self._timeout = setTimeout(function start() {
          if (!closure_1.__startAnimationIfNative(self)) {
            closure_1.onUpdate();
          }
        }, self._delay);
      } else if (!self.__startAnimationIfNative(self)) {
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
        const result2 = (tmp2 + result * sqrtResult * diff) / result1;
        const _Math4 = Math;
        const result3 = result2 * Math.sin(result1 * _frameTime);
        let diff1 = self._toValue - expResult * (result3 + diff * Math.cos(result1 * _frameTime));
        const _Math5 = Math;
        const result4 = result * sqrtResult * expResult;
        const _Math6 = Math;
        const result5 = Math.sin(result1 * _frameTime) * (tmp2 + result * sqrtResult * diff) / result1;
        const _Math7 = Math;
        const sum = result5 + diff * Math.cos(result1 * _frameTime);
        const _Math8 = Math;
        const result6 = Math.cos(result1 * _frameTime) * (tmp2 + result * sqrtResult * diff);
        const result7 = result1 * diff;
        let diff2 = result4 * sum - expResult * (result6 - result7 * Math.sin(result1 * _frameTime));
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
        let _overshootClamping = self._overshootClamping;
        if (_overshootClamping) {
          _overshootClamping = 0 !== self._stiffness;
        }
        if (!_overshootClamping) {
          const _Math9 = Math;
          let flag2 = true;
          if (0 !== self._stiffness) {
            const _Math10 = Math;
            flag2 = Math.abs(self._toValue - diff1) <= self._restDisplacementThreshold;
          }
          {
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
    }
  },
  {
    key: "stop",
    value: function stop() {
      const self = this;
      let fn = callback3(callback2(self.prototype), "stop", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
      clearTimeout(self._timeout);
      if (null != self._animationFrame) {
        SpringAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  }
];

export default importDefaultResult1(SpringAnimation, items);