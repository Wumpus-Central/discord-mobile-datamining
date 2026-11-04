// === Module 9586: GameProfileSkeletonPulse ===

// Module 9586 (GameProfileSkeletonPulse)
import initialize from "initialize" /* 504 */;
import _mod1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

require = fn;
let c4 = 1300;
const Easing = fn(1652).Easing;
const module_1652 = fn(1652);
let closure_5 = module_1652.makeMutable(0);
let c6 = 0;
let c7 = false;
let items = [{ code: "(function getPulseOpacity_GameProfileSkeletonPulseTsx1(phase,phaseOffset){let[MIN_OPACITY,MAX_OPACITY,DEFAULT_TIMING_EASING]=this.__closure;const shiftedPhase=(phase+phaseOffset)%1;const cyclePhase=shiftedPhase<0?shiftedPhase+1:shiftedPhase;const pulseProgress=cyclePhase<0.5?cyclePhase*2:(1-cyclePhase)*2;return MIN_OPACITY+(MAX_OPACITY-MIN_OPACITY)*DEFAULT_TIMING_EASING(pulseProgress);})" }, 0.05, 0.1, Easing.inOut(fn(1652).Easing.quad)];
let closure_129_0;
let closure_129_1;
let closure_129_2;
[tmp3, tmp4, tmp5, tmp6] = items;
function getPulseOpacity(arg0, arg1) {
  const result = (arg0 + arg1) % 1;
  let sum = result;
  if (result < 0) {
    sum = result + 1;
  }
  const diff = dependencyMap - require;
  if (sum < 0.5) {
    let result1 = 2 * sum;
  } else {
    result1 = 2 * (1 - sum);
  }
  return require + diff * noop(result1);
}
let items1 = [tmp4, tmp5, tmp6];
getPulseOpacity.__closure = items1;
getPulseOpacity.__workletHash = 14613140904833;
getPulseOpacity.__initData = tmp3;
let closure_9 = { code: "(function GameProfileSkeletonPulseTsx2(){let[shouldReduceMotion,MAX_OPACITY,getPulseOpacity,pulsePhase,phaseOffset]=this.__closure;if(shouldReduceMotion){return{opacity:MAX_OPACITY};}return{opacity:getPulseOpacity(pulsePhase.get(),phaseOffset)};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonPulse.tsx");

export function useSkeletonPulseStyle(animationDelayMs) {
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined3.useReducedMotion);
  const effect = noop.useEffect(() => {
    sum = sum + 1;
    let tmp2 = sum > 0;
    if (0 < sum) {
      tmp2 = !_undefined3.useReducedMotion;
    }
    if (tmp2 !== closure_7) {
      closure_7 = tmp2;
      _undefined(opacity[2]).cancelAnimation(closure_1_5);
      let result = closure_1_5.set(0);
      if (tmp2) {
        let tmp6Result = _undefined(opacity[2]);
        let obj = { duration, easing: _undefined(opacity[2]).Easing.linear };
        let result1 = closure_1_5.set(tmp6Result.withRepeat(_undefined(opacity[3]).withTiming(1, obj), -1, false));
        let tmp6Result2 = _undefined(opacity[3]);
      }
      let obj4 = _undefined(opacity[2]);
    }
    return () => {
      diff = diff - 1;
      let tmp2 = diff > 0;
      if (0 < diff) {
        tmp2 = !useReducedMotion.useReducedMotion;
      }
      if (tmp2 !== closure_7) {
        closure_7 = tmp2;
        _undefined(opacity[2]).cancelAnimation(closure_1_5);
        const result = closure_1_5.set(0);
        if (tmp2) {
          const tmp6Result = _undefined(opacity[2]);
          const obj = { duration, easing: _undefined(opacity[2]).Easing.linear };
          const result1 = closure_1_5.set(tmp6Result.withRepeat(_undefined(opacity[3]).withTiming(1, obj), -1, false));
          const tmp6Result2 = _undefined(opacity[3]);
        }
        const obj4 = _undefined(opacity[2]);
      }
    };
  }, []);
  const items1 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    let tmp = sum > 0;
    if (tmp) {
      tmp = !_undefined3.useReducedMotion;
    }
    if (tmp !== closure_7) {
      closure_7 = tmp;
      _undefined(opacity[2]).cancelAnimation(closure_1_5);
      const result = closure_1_5.set(0);
      if (tmp) {
        const tmp5Result = _undefined(opacity[2]);
        const obj = { duration, easing: _undefined(opacity[2]).Easing.linear };
        const result1 = closure_1_5.set(tmp5Result.withRepeat(_undefined(opacity[3]).withTiming(1, obj), -1, false));
        const tmp5Result2 = _undefined(opacity[3]);
      }
      const obj4 = _undefined(opacity[2]);
    }
  }, items1);
  const items2 = [closure_9, stateFromStores, 0.1, getPulseOpacity, closure_5, -animationDelayMs % c4 / c4];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items2;
  class GameProfileSkeletonPulseTsx2 {
    constructor() {
      obj = { opacity: null };
      if (closure_0) {
        tmp5 = closure_1;
        obj.opacity = closure_1;
        tmp4 = obj;
      } else {
        tmp = closure_2;
        tmp2 = closure_3;
        tmp3 = closure_4;
        obj.opacity = closure_2(closure_3.get(), closure_4);
        tmp4 = obj;
      }
      return tmp4;
    }
  }
  const items3 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  GameProfileSkeletonPulseTsx2.__closure = items3;
  GameProfileSkeletonPulseTsx2.__workletHash = 9470986050093;
  GameProfileSkeletonPulseTsx2.__initData = tmp4;
  return _mod1652.useAnimatedStyle(GameProfileSkeletonPulseTsx2);
}