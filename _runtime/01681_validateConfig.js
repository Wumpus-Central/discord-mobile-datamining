// _runtime/01681_validateConfig.js
import { t } from "01617_t.js";
import { isValidLayoutAnimationProp } from "01646_isValidLayoutAnimationProp.js";
import { isValidRubberBandConfig } from "01682_isValidRubberBandConfig.js";
import { rubberBandDecay } from "01683_rubberBandDecay.js";
import { rigidDecay } from "01684_rigidDecay.js";
const require = arg1;
let dependencyMap = arg6;
function validateConfig(clamp) {
  if (clamp.clamp) {
    const _Array = Array;
    if (Array.isArray(clamp.clamp)) {
      if (2 !== clamp.clamp.length) {
        const _HermesInternal3 = HermesInternal;
        const reanimatedError = new t.ReanimatedError("`clamp array` must contain 2 items but is given " + clamp.clamp.length + ".");
        throw reanimatedError;
      }
    } else {
      const _HermesInternal = HermesInternal;
      const reanimatedError1 = new t.ReanimatedError("`config.clamp` must be an array but is " + typeof clamp.clamp + ".");
      throw reanimatedError1;
    }
  }
  if (clamp.velocityFactor <= 0) {
    const _HermesInternal2 = HermesInternal;
    const reanimatedError2 = new t.ReanimatedError("`config.velocityFactor` must be greater then 0 but is " + clamp.velocityFactor + ".");
    throw reanimatedError2;
  } else if (clamp.rubberBandEffect) {
    if (!clamp.clamp) {
      const reanimatedError3 = new t.ReanimatedError("You need to set `clamp` property when using `rubberBandEffect`.");
      throw reanimatedError3;
    }
  }
}
validateConfig.__closure = {};
validateConfig.__workletHash = 14532293098342;
validateConfig.__initData = { code: "function validateConfig_Pnpm_decayTs1(config){if(config.clamp){if(!Array.isArray(config.clamp)){throw new ReanimatedError(\"`config.clamp` must be an array but is \"+typeof config.clamp+\".\");}if(config.clamp.length!==2){throw new ReanimatedError(\"`clamp array` must contain 2 items but is given \"+config.clamp.length+\".\");}}if(config.velocityFactor<=0){throw new ReanimatedError(\"`config.velocityFactor` must be greater then 0 but is \"+config.velocityFactor+\".\");}if(config.rubberBandEffect&&!config.clamp){throw new ReanimatedError('You need to set `clamp` property when using `rubberBandEffect`.');}}" };
let closure_3 = { code: "function pnpm_decayTs3(){const{userConfig,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,callback,getReduceMotionForAnimation}=this.__closure;var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}" };
let fn = function n(userConfig, callback) {
  const _require = userConfig;
  const dependencyMap = callback;
  let obj = _isValidLayoutAnimationProp;
  const fn = function c() {
    let obj = { deceleration: 0.998, velocityFactor: 1, velocity: 0, rubberBandFactor: 0.6 };
    if (obj) {
      const _Object = Object;
      const keys = Object.keys(tmp);
      const item = keys.forEach((arg0) => {
        obj[arg0] = obj[arg0];
        return obj[arg0];
      });
    }
    obj = {
      onFrame: userConfig(table[2]).isValidRubberBandConfig(obj) ? ((current, lastTimestamp) => {
        obj = obj(1683);
        return obj.rubberBandDecay(current, lastTimestamp, obj);
      }) : ((initialVelocity, lastTimestamp) => {
        obj = obj(1684);
        return obj.rigidDecay(initialVelocity, lastTimestamp, obj);
      }),
      onStart(reduceMotion, current, lastTimestamp) {
        const velocity = obj.velocity;
        reduceMotion.current = current;
        reduceMotion.lastTimestamp = lastTimestamp;
        reduceMotion.startTimestamp = lastTimestamp;
        reduceMotion.initialVelocity = velocity;
        reduceMotion.velocity = velocity;
        outer2_2(obj);
        if (tmp3) {
          if (current < tmp.clamp[0]) {
            reduceMotion.current = tmp.clamp[0];
          } else if (current > tmp.clamp[1]) {
            reduceMotion.current = tmp.clamp[1];
          }
        }
      },
      callback: table,
      velocity: null,
      initialVelocity: 0,
      current: "sa",
      lastTimestamp: null,
      startTimestamp: 72,
      reduceMotion: 4
    };
    let num = obj.velocity;
    if (num == null) {
      num = 0;
    }
    obj[3] = num;
    const obj2 = userConfig(table[2]);
    const tmp4 = userConfig;
    const tmp5 = table;
    obj[8] = userConfig(table[1]).getReduceMotionForAnimation(obj.reduceMotion);
    return obj;
  };
  obj = { userConfig, isValidRubberBandConfig: _isValidRubberBandConfig.isValidRubberBandConfig, rubberBandDecay: _rubberBandDecay.rubberBandDecay, rigidDecay: _rigidDecay.rigidDecay, validateConfig, callback, getReduceMotionForAnimation: _isValidLayoutAnimationProp.getReduceMotionForAnimation };
  fn.__closure = obj;
  fn.__workletHash = 17099614658252;
  fn.__initData = closure_3;
  return obj.defineAnimation(0, fn);
};
fn.__closure = { defineAnimation: require("isValidLayoutAnimationProp").defineAnimation, isValidRubberBandConfig: require("isValidRubberBandConfig").isValidRubberBandConfig, rubberBandDecay: require("rubberBandDecay").rubberBandDecay, rigidDecay: require("rigidDecay").rigidDecay, validateConfig, getReduceMotionForAnimation: require("isValidLayoutAnimationProp").getReduceMotionForAnimation };
fn.__workletHash = 3913201228611;
fn.__initData = { code: "function pnpm_decayTs2(userConfig,callback){const{defineAnimation,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,getReduceMotionForAnimation}=this.__closure;return defineAnimation(0,function(){'worklet';var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}" };
arg5.withDecay = fn;