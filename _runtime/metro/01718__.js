// === Module 1718: ? ===

// Module 1718
import ReanimatedError from "ReanimatedError" /* 1654 */;
import _mod1683 from "module_1683" /* 1683 */;
import VELOCITY_EPS from "VELOCITY_EPS" /* 1719 */;
import rubberBandDecay from "rubberBandDecay" /* 1720 */;
import rigidDecay from "rigidDecay" /* 1721 */;

const require = globalThis.__r;
let _require, dependencyMap;

function validateConfig(clamp) {
  if (clamp.clamp) {
    const _Array = Array;
    if (Array.isArray(clamp.clamp)) {
      if (2 !== clamp.clamp.length) {
        const _HermesInternal3 = HermesInternal;
        const self7 = this;
        const self8 = this;
        const reanimatedError = new ReanimatedError.ReanimatedError("`clamp array` must contain 2 items but is given " + clamp.clamp.length + ".");
        throw reanimatedError;
      }
    } else {
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const reanimatedError1 = new ReanimatedError.ReanimatedError("`config.clamp` must be an array but is " + typeof clamp.clamp + ".");
      throw reanimatedError1;
    }
  }
  if (clamp.velocityFactor <= 0) {
    const _HermesInternal2 = HermesInternal;
    const self5 = this;
    const self6 = this;
    const reanimatedError2 = new ReanimatedError.ReanimatedError("`config.velocityFactor` must be greater then 0 but is " + clamp.velocityFactor + ".");
    throw reanimatedError2;
  } else if (clamp.rubberBandEffect) {
    if (!clamp.clamp) {
      const self3 = this;
      const self4 = this;
      const reanimatedError3 = new ReanimatedError.ReanimatedError("You need to set `clamp` property when using `rubberBandEffect`.");
      throw reanimatedError3;
    }
  }
}
validateConfig.__closure = {};
validateConfig.__workletHash = 14532293098342;
validateConfig.__initData = { code: "function validateConfig_Pnpm_decayTs1(config){if(config.clamp){if(!Array.isArray(config.clamp)){throw new ReanimatedError(\"`config.clamp` must be an array but is \"+typeof config.clamp+\".\");}if(config.clamp.length!==2){throw new ReanimatedError(\"`clamp array` must contain 2 items but is given \"+config.clamp.length+\".\");}}if(config.velocityFactor<=0){throw new ReanimatedError(\"`config.velocityFactor` must be greater then 0 but is \"+config.velocityFactor+\".\");}if(config.rubberBandEffect&&!config.clamp){throw new ReanimatedError('You need to set `clamp` property when using `rubberBandEffect`.');}}" };
const __initData = { code: "function pnpm_decayTs3(){const{userConfig,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,callback,getReduceMotionForAnimation}=this.__closure;var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}" };
let fn = function n(userConfig, fn) {
  let callback;
  _require = userConfig;
  dependencyMap = fn;
  let obj = require("module_1683");
  fn = function c() {
    let num;
    let tmp4Result;
    let obj = { deceleration: 0.998, velocityFactor: 1, velocity: 0, rubberBandFactor: 0.6 };
    if (obj) {
      const _Object = Object;
      const keys = Object.keys(tmp);
      const item = keys.forEach((item) => {
        obj[item] = userConfig[item];
        return userConfig[item];
      });
    }
    const obj2 = userConfig(callback[2]);
    const obj3 = {
      onFrame: obj2.isValidRubberBandConfig(obj) ? ((current, lastTimestamp) => {
        obj = rubberBandDecay;
        return obj.rubberBandDecay(current, lastTimestamp, obj);
      }) : ((initialVelocity, lastTimestamp) => {
        obj = rigidDecay;
        return obj.rigidDecay(initialVelocity, lastTimestamp, obj);
      }),
      onStart(reduceMotion, current, lastTimestamp) {
        const velocity = obj.velocity;
        reduceMotion.current = current;
        reduceMotion.lastTimestamp = lastTimestamp;
        reduceMotion.startTimestamp = lastTimestamp;
        reduceMotion.initialVelocity = velocity;
        reduceMotion.velocity = velocity;
        validateConfig(obj);
        const tmp3 = reduceMotion.reduceMotion && obj.clamp;
        if (tmp3) {
          if (current < obj.clamp[0]) {
            reduceMotion.current = obj.clamp[0];
          } else if (current > obj.clamp[1]) {
            reduceMotion.current = obj.clamp[1];
          }
        }
      },
      callback,
      velocity: num,
      initialVelocity: 0,
      current: "emoji",
      lastTimestamp: null,
      startTimestamp: "row",
      reduceMotion: tmp4Result.getReduceMotionForAnimation(obj.reduceMotion)
    };
    num = obj.velocity;
    if (num == null) {
      num = 0;
    }
    tmp4Result = userConfig(callback[1]);
    return obj3;
  };
  let obj2 = { userConfig, isValidRubberBandConfig: require("VELOCITY_EPS").isValidRubberBandConfig, rubberBandDecay: require("rubberBandDecay").rubberBandDecay, rigidDecay: require("rigidDecay").rigidDecay, validateConfig, callback: fn, getReduceMotionForAnimation: require("module_1683").getReduceMotionForAnimation };
  fn.__closure = obj2;
  fn.__workletHash = 17099614658252;
  fn.__initData = __initData;
  return obj.defineAnimation(0, fn);
};
let obj = { defineAnimation: _mod1683.defineAnimation, isValidRubberBandConfig: VELOCITY_EPS.isValidRubberBandConfig, rubberBandDecay: rubberBandDecay.rubberBandDecay, rigidDecay: rigidDecay.rigidDecay, validateConfig, getReduceMotionForAnimation: _mod1683.getReduceMotionForAnimation };
fn.__closure = obj;
fn.__workletHash = 3913201228611;
fn.__initData = { code: "function pnpm_decayTs2(userConfig,callback){const{defineAnimation,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,getReduceMotionForAnimation}=this.__closure;return defineAnimation(0,function(){'worklet';var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}" };

export const withDecay = fn;