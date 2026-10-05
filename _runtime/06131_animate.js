// === Module 6131: animate ===

// Module 6131 (animate)
import _mod1643 from "module_1643" /* 1643 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6113 */;

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
    configs = GESTURE_SOURCE.ANIMATION_CONFIGS;
  }
  if (overrideReduceMotion) {
    configs.reduceMotion = overrideReduceMotion;
  }
  if (!("duration" in configs)) {
    let TIMING;
    let withTimingResult;
    if (!("easing" in configs)) {
      TIMING = GESTURE_SOURCE.ANIMATION_METHOD.SPRING;
    }
    if (TIMING === GESTURE_SOURCE.ANIMATION_METHOD.TIMING) {
      const tmp3Result = _mod1643;
      withTimingResult = tmp3Result.withTiming(point, configs, onComplete);
    } else {
      const _Object = Object;
      const obj = { velocity };
      const tmp3Result2 = _mod1643;
      withTimingResult = tmp3Result2.withSpring(point, Object.assign(obj, configs), onComplete);
    }
    return withTimingResult;
  }
  TIMING = GESTURE_SOURCE.ANIMATION_METHOD.TIMING;
};
let obj = { ANIMATION_CONFIGS: GESTURE_SOURCE.ANIMATION_CONFIGS, ANIMATION_METHOD: GESTURE_SOURCE.ANIMATION_METHOD, withTiming: _mod1643.withTiming, withSpring: _mod1643.withSpring };
fn.__closure = obj;
fn.__workletHash = 17032227615993;
fn.__initData = { code: "function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){const{ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring}=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);}" };

export const animate = fn;