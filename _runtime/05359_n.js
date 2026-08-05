import { GESTURE_SOURCE } from "05341_GESTURE_SOURCE.js";
// _runtime/05359_n.js
const require = arg1;
const dependencyMap = arg6;
const fn = function n(arg0) {
  let configs;
  let onComplete;
  let overrideReduceMotion;
  let point;
  let velocity;
  ({ point, configs, velocity } = arg0);
  if (velocity === undefined) {
    velocity = 0;
  }
  ({ overrideReduceMotion, onComplete } = arg0);
  if (!configs) {
    configs = GESTURE_SOURCE /* GESTURE_SOURCE */.ANIMATION_CONFIGS;
  }
  if (overrideReduceMotion) {
    configs.reduceMotion = overrideReduceMotion;
  }
  if (!("duration" in configs)) {
    if (!("easing" in configs)) {
      let tmp3 = require;
      let TIMING = GESTURE_SOURCE /* GESTURE_SOURCE */.ANIMATION_METHOD.SPRING;
    }
    if (TIMING === tmp3(5341).ANIMATION_METHOD.TIMING) {
      let tmp3Result = tmp3(1606);
      let withTimingResult = tmp3Result.withTiming(point, configs, onComplete);
    } else {
      tmp3Result = tmp3(1606);
      const _Object = Object;
      const obj = { velocity: null };
      obj[0] = velocity;
      withTimingResult = tmp3Result.withSpring(point, Object.assign(obj, configs), onComplete);
    }
    return withTimingResult;
  }
  TIMING = GESTURE_SOURCE /* GESTURE_SOURCE */.ANIMATION_METHOD.TIMING;
  tmp3 = require;
};
fn.__closure = { ANIMATION_CONFIGS: require("GESTURE_SOURCE").ANIMATION_CONFIGS, ANIMATION_METHOD: require("GESTURE_SOURCE").ANIMATION_METHOD, withTiming: require("cancelAnimation").withTiming, withSpring: require("cancelAnimation").withSpring };
fn.__workletHash = 17032227615993;
fn.__initData = { code: "function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){const{ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring}=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);}" };
arg5.animate = fn;