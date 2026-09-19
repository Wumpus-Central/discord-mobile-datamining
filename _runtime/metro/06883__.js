// _runtime/metro/06883__.js
import value2 from "../06865_value2.js";

const cancelAnimation = tmp3(1637);
require = fn;
const dependencyMap = arg6;
fn = function n(arg0) {
  ({ point, configs, velocity } = arg0);
  if (velocity === undefined) {
    velocity = 0;
  }
  ({ overrideReduceMotion, onComplete } = arg0);
  if (!configs) {
    configs = value2.ANIMATION_CONFIGS;
  }
  if (overrideReduceMotion) {
    configs.reduceMotion = overrideReduceMotion;
  }
  if (!("duration" in configs)) {
    if (!("easing" in configs)) {
      let TIMING = value2.ANIMATION_METHOD.SPRING;
    }
    if (TIMING === value2.ANIMATION_METHOD.TIMING) {
      let withTimingResult = cancelAnimation.withTiming(point, configs, onComplete);
      const tmp3Result = cancelAnimation;
    } else {
      const _Object = Object;
      const obj = { velocity };
      withTimingResult = cancelAnimation.withSpring(point, Object.assign(obj, configs), onComplete);
      const tmp3Result2 = cancelAnimation;
    }
    return withTimingResult;
  }
  TIMING = value2.ANIMATION_METHOD.TIMING;
};
fn.__closure = {
  ANIMATION_CONFIGS: fn(6865).ANIMATION_CONFIGS,
  ANIMATION_METHOD: fn(6865).ANIMATION_METHOD,
  withTiming: fn(1637).withTiming,
  withSpring: fn(1637).withSpring,
};
fn.__workletHash = 17032227615993;
fn.__initData = {
  code: "function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){const{ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring}=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);}",
};

export const animate = fn;
