// === Module 9094: GameProfileSkeletonPulse ===

// Module 9094 (GameProfileSkeletonPulse)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

const require = fn;
let c4 = 1300;
const Easing = fn(4561).Easing;
const inOutResult = Easing.inOut(fn(4561).Easing.quad);
const hasOwnProperty = inOutResult;
const ReanimatedRexport = fn(4561);
const pulsePhase = ReanimatedRexport.makeMutable(0);
let c7 = 0;
let c8 = false;
function getPulseOpacity(arg0, arg1) {
  const result = (arg0 + arg1) % 1;
  let sum = result;
  if (result < 0) {
    sum = result + 1;
  }
  if (sum < 0.5) {
    let result1 = 2 * sum;
  } else {
    result1 = 2 * (1 - sum);
  }
  return 0.05 + 0.05 * inOutResult(result1);
}
getPulseOpacity.__closure = { MIN_OPACITY: 0.05, MAX_OPACITY: 0.1, DEFAULT_TIMING_EASING: inOutResult };
getPulseOpacity.__workletHash = 2217576423672;
getPulseOpacity.__initData = { code: "function getPulseOpacity_GameProfileSkeletonPulseTsx1(phase,phaseOffset){const{MIN_OPACITY,MAX_OPACITY,DEFAULT_TIMING_EASING}=this.__closure;const shiftedPhase=(phase+phaseOffset)%1;const cyclePhase=shiftedPhase<0?shiftedPhase+1:shiftedPhase;const pulseProgress=cyclePhase<0.5?cyclePhase*2:(1-cyclePhase)*2;return MIN_OPACITY+(MAX_OPACITY-MIN_OPACITY)*DEFAULT_TIMING_EASING(pulseProgress);}" };
const __initData = { code: "function GameProfileSkeletonPulseTsx2(){const{shouldReduceMotion,MAX_OPACITY,getPulseOpacity,pulsePhase,phaseOffset}=this.__closure;if(shouldReduceMotion){return{opacity:MAX_OPACITY};}return{opacity:getPulseOpacity(pulsePhase.get(),phaseOffset)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonPulse.tsx");

export const useSkeletonPulseStyle = function useSkeletonPulseStyle(animationDelayMs) {
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const effect = noop.useEffect(() => {
    sum = sum + 1;
    let tmp2 = sum > 0;
    if (tmp2) {
      tmp2 = !AccessibilityStore.useReducedMotion;
    }
    if (tmp2 !== closure_8) {
      closure_8 = tmp2;
      stateFromStores(result[2]).cancelAnimation(pulsePhase);
      result = pulsePhase.set(0);
      if (tmp2) {
        let tmp6Result = stateFromStores(tmp7[2]);
        let obj = { duration, easing: stateFromStores(tmp7[2]).Easing.linear };
        let result1 = pulsePhase.set(tmp6Result.withRepeat(stateFromStores(tmp7[3]).withTiming(1, obj), -1, false));
        let tmp6Result2 = stateFromStores(tmp7[3]);
      }
      let obj4 = stateFromStores(result[2]);
    }
    return () => {
      diff = diff - 1;
      let tmp2 = diff > 0;
      if (tmp2) {
        tmp2 = !useReducedMotion.useReducedMotion;
      }
      if (tmp2 !== closure_8) {
        closure_8 = tmp2;
        stateFromStores(dependencyMap[2]).cancelAnimation(closure_1_6);
        result = closure_1_6.set(0);
        if (tmp2) {
          const tmp6Result = stateFromStores(dependencyMap[2]);
          const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
          const result1 = closure_1_6.set(tmp6Result.withRepeat(stateFromStores(dependencyMap[3]).withTiming(1, obj), -1, false));
          const tmp6Result2 = stateFromStores(dependencyMap[3]);
        }
        const obj4 = stateFromStores(dependencyMap[2]);
      }
    };
  }, []);
  const items1 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    let tmp = sum > 0;
    if (tmp) {
      tmp = !AccessibilityStore.useReducedMotion;
    }
    if (tmp !== closure_8) {
      closure_8 = tmp;
      stateFromStores(result[2]).cancelAnimation(pulsePhase);
      result = pulsePhase.set(0);
      if (tmp) {
        const tmp5Result = stateFromStores(tmp6[2]);
        const obj = { duration, easing: stateFromStores(tmp6[2]).Easing.linear };
        const result1 = pulsePhase.set(tmp5Result.withRepeat(stateFromStores(tmp6[3]).withTiming(1, obj), -1, false));
        const tmp5Result2 = stateFromStores(tmp6[3]);
      }
      const obj4 = stateFromStores(result[2]);
    }
  }, items1);
  let result = -animationDelayMs % c4 / c4;
  dependencyMap = result;
  let obj = stateFromStores(504);
  class P {
    constructor() {
      if (closure_0) {
        obj = { opacity: 0.1 };
      } else {
        tmp = getPulseOpacity;
        tmp2 = closure_6;
        if (typeof getPulseOpacity === "function") {
          num = 1;
          result = (closure_6.get() + closure_1) % 1;
          num2 = 0;
          sum = result;
          if (result < 0) {
            sum = result + 1;
          }
          num3 = 0.5;
          tmp5 = closure_5;
          if (sum < 0.5) {
            num5 = 2;
            result1 = 2 * sum;
          } else {
            num4 = 2;
            result1 = 2 * (1 - sum);
          }
          obj = { opacity: null };
          num6 = 0.05;
          obj.opacity = 0.05 + 0.05 * tmp5(result1);
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      return obj;
    }
  }
  P.__closure = { shouldReduceMotion: stateFromStores, MAX_OPACITY: 0.1, getPulseOpacity, pulsePhase, phaseOffset: result };
  P.__workletHash = 3992024948852;
  P.__initData = __initData;
  return stateFromStores(4561).useAnimatedStyle(P);
};