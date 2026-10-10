// === Module 8947: GameProfileSkeletonPulse ===

// Module 8947 (GameProfileSkeletonPulse)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

const require = fn;
let c4 = 0.1;
let c5 = 1300;
const Easing = fn(4850).Easing;
const inOutResult = Easing.inOut(fn(4850).Easing.quad);
const metroRequire = inOutResult;
const ReanimatedRexport = fn(4850);
const pulsePhase = ReanimatedRexport.makeMutable(0);
let c8 = 0;
let c9 = false;
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
const __initData2 = { code: "function GameProfileSkeletonPulseTsx3(){const{shouldReduceMotion,MAX_OPACITY,getPulseOpacity,pulsePhase,phaseOffset}=this.__closure;if(shouldReduceMotion){return{opacity:MAX_OPACITY};}return{opacity:getPulseOpacity(pulsePhase.get(),phaseOffset)};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonPulse.tsx");

export const useSkeletonPulseStyle = ReactCompilerGating.isReactCompilerEnabled() ? (function useSkeletonPulseStyle(arg0) {
  const cResult = stateFromStores(576).c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function _() {
      return AccessibilityStore.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        sum = closure_8 + 1;
        closure_8 = sum;
        tmp2 = sum > 0;
        if (tmp2) {
          tmp3 = closure_1_3;
          tmp2 = !closure_1_3.useReducedMotion;
        }
        if (tmp2 !== closure_9) {
          closure_9 = tmp2;
          tmp6 = closure_0;
          tmp7 = closure_1;
          obj4 = closure_0(closure_1[2]);
          obj5 = closure_1_7;
          cancelAnimationResult = obj4.cancelAnimation(closure_1_7);
          result = closure_1_7.set(0);
          if (tmp2) {
            tmp6Result = tmp6(tmp7[2]);
            tmp6Result1 = tmp6(tmp7[3]);
            obj1 = { duration: null, easing: null };
            tmp4 = closure_1_5;
            obj1.duration = closure_1_5;
            obj1.easing = tmp6(tmp7[2]).Easing.linear;
            flag = false;
            num = -1;
            result1 = obj5.set(tmp6Result.withRepeat(tmp6Result1.withTiming(1, obj1), -1, false));
          }
        }
        return () => {
          diff = diff - 1;
          let tmp2 = diff > 0;
          if (tmp2) {
            tmp2 = !useReducedMotion.useReducedMotion;
          }
          if (tmp2 !== closure_9) {
            closure_9 = tmp2;
            stateFromStores(dependencyMap[2]).cancelAnimation(closure_1_7);
            result = closure_1_7.set(0);
            if (tmp2) {
              const tmp6Result = stateFromStores(dependencyMap[2]);
              const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
              const result1 = closure_1_7.set(tmp6Result.withRepeat(stateFromStores(dependencyMap[3]).withTiming(1, obj), -1, false));
              const tmp6Result2 = stateFromStores(dependencyMap[3]);
            }
            const obj4 = stateFromStores(dependencyMap[2]);
          }
        };
      }
    }
    const items1 = [];
    cResult[2] = A;
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    class A {
      constructor() {
        sum = closure_8 + 1;
        closure_8 = sum;
        tmp2 = sum > 0;
        if (tmp2) {
          tmp3 = closure_1_3;
          tmp2 = !closure_1_3.useReducedMotion;
        }
        if (tmp2 !== closure_9) {
          closure_9 = tmp2;
          tmp6 = closure_0;
          tmp7 = closure_1;
          obj4 = closure_0(closure_1[2]);
          obj5 = closure_1_7;
          cancelAnimationResult = obj4.cancelAnimation(closure_1_7);
          result = closure_1_7.set(0);
          if (tmp2) {
            tmp6Result = tmp6(tmp7[2]);
            tmp6Result1 = tmp6(tmp7[3]);
            obj1 = { duration: null, easing: null };
            tmp4 = closure_1_5;
            obj1.duration = closure_1_5;
            obj1.easing = tmp6(tmp7[2]).Easing.linear;
            flag = false;
            num = -1;
            result1 = obj5.set(tmp6Result.withRepeat(tmp6Result1.withTiming(1, obj1), -1, false));
          }
        }
        return () => {
          diff = diff - 1;
          let tmp2 = diff > 0;
          if (tmp2) {
            tmp2 = !useReducedMotion.useReducedMotion;
          }
          if (tmp2 !== closure_9) {
            closure_9 = tmp2;
            stateFromStores(dependencyMap[2]).cancelAnimation(closure_1_7);
            result = closure_1_7.set(0);
            if (tmp2) {
              const tmp6Result = stateFromStores(dependencyMap[2]);
              const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
              const result1 = closure_1_7.set(tmp6Result.withRepeat(stateFromStores(dependencyMap[3]).withTiming(1, obj), -1, false));
              const tmp6Result2 = stateFromStores(dependencyMap[3]);
            }
            const obj4 = stateFromStores(dependencyMap[2]);
          }
        };
      }
    }
    tmp9 = cResult[3];
  }
  const effect = noop.useEffect(A, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        tmp = closure_8 > 0;
        if (tmp) {
          tmp2 = closure_1_3;
          tmp = !closure_1_3.useReducedMotion;
        }
        if (tmp !== closure_9) {
          closure_9 = tmp;
          tmp5 = closure_0;
          tmp6 = closure_1;
          obj4 = closure_0(closure_1[2]);
          obj5 = closure_1_7;
          cancelAnimationResult = obj4.cancelAnimation(closure_1_7);
          result = closure_1_7.set(0);
          if (tmp) {
            tmp5Result = tmp5(tmp6[2]);
            tmp5Result1 = tmp5(tmp6[3]);
            obj1 = { duration: null, easing: null };
            tmp3 = closure_1_5;
            obj1.duration = closure_1_5;
            obj1.easing = tmp5(tmp6[2]).Easing.linear;
            num = 1;
            flag = false;
            num2 = -1;
            result1 = obj5.set(tmp5Result.withRepeat(tmp5Result1.withTiming(1, obj1), -1, false));
          }
        }
        return;
      }
    }
    cResult[4] = O;
  } else {
    class O {
      constructor() {
        tmp = closure_8 > 0;
        if (tmp) {
          tmp2 = closure_1_3;
          tmp = !closure_1_3.useReducedMotion;
        }
        if (tmp !== closure_9) {
          closure_9 = tmp;
          tmp5 = closure_0;
          tmp6 = closure_1;
          obj4 = closure_0(closure_1[2]);
          obj5 = closure_1_7;
          cancelAnimationResult = obj4.cancelAnimation(closure_1_7);
          result = closure_1_7.set(0);
          if (tmp) {
            tmp5Result = tmp5(tmp6[2]);
            tmp5Result1 = tmp5(tmp6[3]);
            obj1 = { duration: null, easing: null };
            tmp3 = closure_1_5;
            obj1.duration = closure_1_5;
            obj1.easing = tmp5(tmp6[2]).Easing.linear;
            num = 1;
            flag = false;
            num2 = -1;
            result1 = obj5.set(tmp5Result.withRepeat(tmp5Result1.withTiming(1, obj1), -1, false));
          }
        }
        return;
      }
    }
  }
  if (cResult[5] !== stateFromStores) {
    class O {
      constructor() {
        tmp = closure_8 > 0;
        if (tmp) {
          tmp2 = closure_1_3;
          tmp = !closure_1_3.useReducedMotion;
        }
        if (tmp !== closure_9) {
          closure_9 = tmp;
          tmp5 = closure_0;
          tmp6 = closure_1;
          obj4 = closure_0(closure_1[2]);
          obj5 = closure_1_7;
          cancelAnimationResult = obj4.cancelAnimation(closure_1_7);
          result = closure_1_7.set(0);
          if (tmp) {
            tmp5Result = tmp5(tmp6[2]);
            tmp5Result1 = tmp5(tmp6[3]);
            obj1 = { duration: null, easing: null };
            tmp3 = closure_1_5;
            obj1.duration = closure_1_5;
            obj1.easing = tmp5(tmp6[2]).Easing.linear;
            num = 1;
            flag = false;
            num2 = -1;
            result1 = obj5.set(tmp5Result.withRepeat(tmp5Result1.withTiming(1, obj1), -1, false));
          }
        }
        return;
      }
    }
    tmp13[0] = stateFromStores;
    cResult[5] = stateFromStores;
    cResult[6] = tmp13;
  } else {
    class O {
      constructor() {
        tmp = closure_8 > 0;
        if (tmp) {
          tmp2 = closure_1_3;
          tmp = !closure_1_3.useReducedMotion;
        }
        if (tmp !== closure_9) {
          closure_9 = tmp;
          tmp5 = closure_0;
          tmp6 = closure_1;
          obj4 = closure_0(closure_1[2]);
          obj5 = closure_1_7;
          cancelAnimationResult = obj4.cancelAnimation(closure_1_7);
          result = closure_1_7.set(0);
          if (tmp) {
            tmp5Result = tmp5(tmp6[2]);
            tmp5Result1 = tmp5(tmp6[3]);
            obj1 = { duration: null, easing: null };
            tmp3 = closure_1_5;
            obj1.duration = closure_1_5;
            obj1.easing = tmp5(tmp6[2]).Easing.linear;
            num = 1;
            flag = false;
            num2 = -1;
            result1 = obj5.set(tmp5Result.withRepeat(tmp5Result1.withTiming(1, obj1), -1, false));
          }
        }
        return;
      }
    }
  }
  const effect1 = noop.useEffect(O, tmp13);
  let result = -arg0 % c5 / c5;
  dependencyMap = result;
  const tmpResult = stateFromStores(504);
  class T {
    constructor() {
      obj = { opacity: null };
      if (closure_0) {
        tmp8 = c4;
        obj.opacity = c4;
        tmp7 = obj;
      } else {
        tmp = getPulseOpacity;
        tmp2 = closure_7;
        if (typeof getPulseOpacity === "function") {
          num = 1;
          result = (closure_7.get() + closure_1) % 1;
          num2 = 0;
          sum = result;
          if (result < 0) {
            sum = result + 1;
          }
          num3 = 0.5;
          tmp5 = closure_6;
          if (sum < 0.5) {
            num5 = 2;
            result1 = 2 * sum;
          } else {
            num4 = 2;
            result1 = 2 * (1 - sum);
          }
          num6 = 0.05;
          obj.opacity = 0.05 + 0.05 * tmp5(result1);
          tmp7 = obj;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      return tmp7;
    }
  }
  T.__closure = { shouldReduceMotion: stateFromStores, MAX_OPACITY: v01, getPulseOpacity, pulsePhase, phaseOffset: result };
  T.__workletHash = 3992024948852;
  T.__initData = __initData;
  return stateFromStores(4850).useAnimatedStyle(T);
}) : (function useSkeletonPulseStyle(arg0) {
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const effect = noop.useEffect(() => {
    sum = sum + 1;
    let tmp2 = sum > 0;
    if (tmp2) {
      tmp2 = !AccessibilityStore.useReducedMotion;
    }
    if (tmp2 !== closure_9) {
      closure_9 = tmp2;
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
      if (tmp2 !== closure_9) {
        closure_9 = tmp2;
        stateFromStores(dependencyMap[2]).cancelAnimation(closure_1_7);
        result = closure_1_7.set(0);
        if (tmp2) {
          const tmp6Result = stateFromStores(dependencyMap[2]);
          const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
          const result1 = closure_1_7.set(tmp6Result.withRepeat(stateFromStores(dependencyMap[3]).withTiming(1, obj), -1, false));
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
    if (tmp !== closure_9) {
      closure_9 = tmp;
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
  let result = -arg0 % c5 / c5;
  dependencyMap = result;
  let obj = stateFromStores(504);
  const fn = function _() {
    const obj = { opacity: null };
    if (stateFromStores) {
      obj.opacity = opacity;
      let tmp7 = obj;
    } else if (typeof getPulseOpacity === "function") {
      result = (closure_7.get() + result) % 1;
      sum = result;
      if (result < 0) {
        sum = result + 1;
      }
      if (sum < 0.5) {
        let result1 = 2 * sum;
      } else {
        result1 = 2 * (1 - sum);
      }
      obj.opacity = 0.05 + 0.05 * inOutResult(result1);
      tmp7 = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    return tmp7;
  };
  fn.__closure = { shouldReduceMotion: stateFromStores, MAX_OPACITY: v01, getPulseOpacity, pulsePhase, phaseOffset: result };
  fn.__workletHash = 15886965849973;
  fn.__initData = __initData2;
  return stateFromStores(4850).useAnimatedStyle(fn);
});