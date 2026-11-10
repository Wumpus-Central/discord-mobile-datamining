// _runtime/01847_decay.js
import utilNative from "01841_utilNative.js";
import _mod1848 from "metro/01848__.js";
import rubberBandDecay from "01850_rubberBandDecay.js";
import rigidDecay from "01851_rigidDecay.js";

let items = [
  {
    code: '(function validateConfig_Pnpm_decayTs1(config){if(config.clamp){if(!Array.isArray(config.clamp)){throw new Error("[Reanimated] `config.clamp` must be an array but is "+typeof config.clamp+".");}if(config.clamp.length!==2){throw new Error("[Reanimated] `clamp array` must contain 2 items but is given "+config.clamp.length+".");}}if(config.velocityFactor<=0){throw new Error("[Reanimated] `config.velocityFactor` must be greater than 0 but is "+config.velocityFactor+".");}if(config.rubberBandEffect&&!config.clamp){throw new Error(\'[Reanimated] You need to set `clamp` property when using `rubberBandEffect`.\');}})',
  },
];
[tmp2] = items;
function validateConfig(clamp) {
  if (clamp.clamp) {
    const _Array = Array;
    if (Array.isArray(clamp.clamp)) {
      if (2 !== clamp.clamp.length) {
        const _Error4 = Error;
        const _HermesInternal3 = HermesInternal;
        const error = new Error(
          "[Reanimated] `clamp array` must contain 2 items but is given " + clamp.clamp.length + ".",
        );
        throw error;
      }
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error1 = new Error("[Reanimated] `config.clamp` must be an array but is " + typeof clamp.clamp + ".");
      throw error1;
    }
  }
  if (clamp.velocityFactor <= 0) {
    const _Error3 = Error;
    const _HermesInternal2 = HermesInternal;
    const error2 = new Error(
      "[Reanimated] `config.velocityFactor` must be greater than 0 but is " + clamp.velocityFactor + ".",
    );
    throw error2;
  } else if (clamp.rubberBandEffect) {
    if (!clamp.clamp) {
      const _Error2 = Error;
      const error3 = new Error("[Reanimated] You need to set `clamp` property when using `rubberBandEffect`.");
      throw error3;
    }
  }
}
validateConfig.__workletHash = 567415303619;
validateConfig.__initData = tmp2;
let items1 = [
  {
    code: "(function pnpm_decayTs3(userConfig,callback){let[defineAnimation,_worklet_12615362997077_init_data,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,getReduceMotionForAnimation]=this.__closure;return defineAnimation(0,function pnpm_decayTs2Factory([_worklet_12615362997077_init_data,userConfig,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,callback,getReduceMotionForAnimation]){const pnpm_decayTs2=function(){var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return(config[key]=userConfig[key]);});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};};pnpm_decayTs2.__closure=[userConfig,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,callback,getReduceMotionForAnimation];pnpm_decayTs2.__workletHash=12615362997077;pnpm_decayTs2.__initData=_worklet_12615362997077_init_data;return pnpm_decayTs2;}([_worklet_12615362997077_init_data,userConfig,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,callback,getReduceMotionForAnimation]));})",
  },
  utilNative.defineAnimation,
  {
    code: "(function pnpm_decayTs2(){let[userConfig,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,callback,getReduceMotionForAnimation]=this.__closure;var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return(config[key]=userConfig[key]);});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};})",
  },
  _mod1848.isValidRubberBandConfig,
  rubberBandDecay.rubberBandDecay,
  rigidDecay.rigidDecay,
  validateConfig,
  utilNative.getReduceMotionForAnimation,
];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
[tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
function pnpm_decayTs3(arg0, arg1) {
  items = [c1, arg0, c2, c3, c4, c5, arg1, c6];
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  function pnpm_decayTs2() {
    const obj = { deceleration: 0.998, velocityFactor: 1, velocity: 0, rubberBandFactor: 0.6 };
    if (obj) {
      const _Object = Object;
      const keys = Object.keys(tmp);
      const item = keys.forEach((item) => {
        obj[item] = _undefined[item];
        return _undefined[item];
      });
    }
    const obj2 = {
      onFrame: closure_1(obj)
        ? (arg0, arg1) => closure_2_2(arg0, arg1, obj)
        : (arg0, arg1) => closure_2_3(arg0, arg1, obj),
      onStart(reduceMotion, current, lastTimestamp) {
        const velocity = obj.velocity;
        reduceMotion.current = current;
        reduceMotion.lastTimestamp = lastTimestamp;
        reduceMotion.startTimestamp = lastTimestamp;
        reduceMotion.initialVelocity = velocity;
        reduceMotion.velocity = velocity;
        closure_2_4(obj);
        if (tmp3) {
          if (current < obj.clamp[0]) {
            reduceMotion.current = obj.clamp[0];
          } else if (current > obj.clamp[1]) {
            reduceMotion.current = obj.clamp[1];
          }
        }
        tmp3 = reduceMotion.reduceMotion && obj.clamp;
      },
      callback,
      velocity: null,
      initialVelocity: 0,
      current: "ip",
      lastTimestamp: null,
      startTimestamp: "AttributeSelector",
      reduceMotion: null,
    };
    let num = obj.velocity;
    if (num == null) {
      num = 0;
    }
    obj2.velocity = num;
    obj2.reduceMotion = closure_6(obj.reduceMotion);
    return obj2;
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
  pnpm_decayTs2.__closure = items1;
  pnpm_decayTs2.__workletHash = 12615362997077;
  pnpm_decayTs2.__initData = tmp;
  return _undefined(0, pnpm_decayTs2);
}
const items2 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
pnpm_decayTs3.__closure = items2;
pnpm_decayTs3.__workletHash = 7052935405285;
pnpm_decayTs3.__initData = tmp3;

export const withDecay = pnpm_decayTs3;
