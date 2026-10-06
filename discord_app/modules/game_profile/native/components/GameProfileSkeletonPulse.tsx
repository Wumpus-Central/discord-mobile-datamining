// === Module 8420: GameProfileSkeletonPulse ===

// Module 8420 (GameProfileSkeletonPulse)
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4618 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let cancelAnimationResult, closure_8, closure_9, dependencyMap, diff, flag, num, set, tmp10, tmp6, tmp8, tmp8Result1;

let ReanimatedRexport;
let c4 = 0.1;
let c5 = 1300;
const Easing = ReanimatedRexport.Easing;
const inOutResult = Easing.inOut(ReanimatedRexport.Easing.quad);
const metroRequire = inOutResult;
ReanimatedRexport = ReanimatedRexport_mod;
const pulsePhase = ReanimatedRexport.makeMutable(0);
let c8 = 0;
let c9 = false;
function getPulseOpacity(arg0, arg1) {
  let result1;
  const result = (arg0 + arg1) % 1;
  let sum = result;
  if (result < 0) {
    sum = result + 1;
  }
  if (sum < 0.5) {
    result1 = 2 * sum;
  } else {
    result1 = 2 * (1 - sum);
  }
  return 0.05 + 0.05 * metroRequire(result1);
}
getPulseOpacity.__closure = { MIN_OPACITY: 0.05, MAX_OPACITY: 0.1, DEFAULT_TIMING_EASING: inOutResult };
getPulseOpacity.__workletHash = 2217576423672;
getPulseOpacity.__initData = { code: "function getPulseOpacity_GameProfileSkeletonPulseTsx1(phase,phaseOffset){const{MIN_OPACITY,MAX_OPACITY,DEFAULT_TIMING_EASING}=this.__closure;const shiftedPhase=(phase+phaseOffset)%1;const cyclePhase=shiftedPhase<0?shiftedPhase+1:shiftedPhase;const pulseProgress=cyclePhase<0.5?cyclePhase*2:(1-cyclePhase)*2;return MIN_OPACITY+(MAX_OPACITY-MIN_OPACITY)*DEFAULT_TIMING_EASING(pulseProgress);}" };
const __initData = { code: "function GameProfileSkeletonPulseTsx2(){const{shouldReduceMotion,MAX_OPACITY,getPulseOpacity,pulsePhase,phaseOffset}=this.__closure;if(shouldReduceMotion){return{opacity:MAX_OPACITY};}return{opacity:getPulseOpacity(pulsePhase.get(),phaseOffset)};}" };
const __initData2 = { code: "function GameProfileSkeletonPulseTsx3(){const{shouldReduceMotion,MAX_OPACITY,getPulseOpacity,pulsePhase,phaseOffset}=this.__closure;if(shouldReduceMotion){return{opacity:MAX_OPACITY};}return{opacity:getPulseOpacity(pulsePhase.get(),phaseOffset)};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp9;
  const tmp = stateFromStores;
  let tmp2 = dependencyMap;
  let obj = stateFromStores(576);
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function f() {
      return AccessibilityStore.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
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
          tmp8 = closure_0;
          tmp9 = closure_1;
          obj2 = closure_0(closure_1[2]);
          tmp10 = closure_1_7;
          cancelAnimationResult = obj2.cancelAnimation(closure_1_7);
          result = closure_1_7.set(0);
          if (tmp2) {
            set = tmp10.set;
            tmp8Result = tmp8(tmp9[2]);
            withRepeat = tmp8Result.withRepeat;
            tmp8Result1 = tmp8(tmp9[3]);
            obj = { duration: null, easing: null };
            tmp6 = closure_1_5;
            obj.duration = closure_1_5;
            withTiming = tmp8Result1.withTiming;
            obj.easing = tmp8(tmp9[2]).Easing.linear;
            flag = false;
            num = -1;
            result1 = set(withRepeat(withTiming(1, obj), -1, false));
          }
        }
        return () => {
          diff = diff - 1;
          if ((diff > 0 && !useReducedMotion.useReducedMotion) !== closure_9) {
            closure_9 = tmp2;
            const obj2 = stateFromStores(closure_1_1[2]);
            obj2.cancelAnimation(closure_1_7);
            result = closure_1_7.set(0);
            if (diff > 0 && !useReducedMotion.useReducedMotion) {
              set = closure_1_7.set;
              const withRepeat = stateFromStores(closure_1_1[2]).withRepeat;
              stateFromStores(closure_1_1[2]);
              const obj = { duration, easing: stateFromStores(closure_1_1[2]).Easing.linear };
              const withTiming = stateFromStores(closure_1_1[3]).withTiming;
              stateFromStores(closure_1_1[3]);
              const result1 = set(withRepeat(withTiming(1, obj), -1, false));
            }
          }
        };
      }
    }
    const items1 = [];
    cResult[2] = A;
    cResult[3] = items1;
    tmp9 = items1;
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
          tmp8 = closure_0;
          tmp9 = closure_1;
          obj2 = closure_0(closure_1[2]);
          tmp10 = closure_1_7;
          cancelAnimationResult = obj2.cancelAnimation(closure_1_7);
          result = closure_1_7.set(0);
          if (tmp2) {
            set = tmp10.set;
            tmp8Result = tmp8(tmp9[2]);
            withRepeat = tmp8Result.withRepeat;
            tmp8Result1 = tmp8(tmp9[3]);
            obj = { duration: null, easing: null };
            tmp6 = closure_1_5;
            obj.duration = closure_1_5;
            withTiming = tmp8Result1.withTiming;
            obj.easing = tmp8(tmp9[2]).Easing.linear;
            flag = false;
            num = -1;
            result1 = set(withRepeat(withTiming(1, obj), -1, false));
          }
        }
        return () => {
          diff = diff - 1;
          if ((diff > 0 && !useReducedMotion.useReducedMotion) !== closure_9) {
            closure_9 = tmp2;
            const obj2 = stateFromStores(closure_1_1[2]);
            obj2.cancelAnimation(closure_1_7);
            result = closure_1_7.set(0);
            if (diff > 0 && !useReducedMotion.useReducedMotion) {
              set = closure_1_7.set;
              const withRepeat = stateFromStores(closure_1_1[2]).withRepeat;
              stateFromStores(closure_1_1[2]);
              const obj = { duration, easing: stateFromStores(closure_1_1[2]).Easing.linear };
              const withTiming = stateFromStores(closure_1_1[3]).withTiming;
              stateFromStores(closure_1_1[3]);
              const result1 = set(withRepeat(withTiming(1, obj), -1, false));
            }
          }
        };
      }
    }
    tmp9 = cResult[3];
  }
  const effect = react.useEffect(A, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        if ((sum > 0 && !AccessibilityStore.useReducedMotion) !== closure_9) {
          closure_9 = tmp;
          const obj2 = stateFromStores(dependencyMap[2]);
          obj2.cancelAnimation(pulsePhase);
          dependencyMap = pulsePhase.set(0);
          if (sum > 0 && !AccessibilityStore.useReducedMotion) {
            set = pulsePhase.set;
            const withRepeat = stateFromStores(dependencyMap[2]).withRepeat;
            stateFromStores(dependencyMap[2]);
            const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
            const withTiming = stateFromStores(dependencyMap[3]).withTiming;
            stateFromStores(dependencyMap[3]);
            const result1 = set(withRepeat(withTiming(1, obj), -1, false));
          }
        }
      }
    }
    cResult[4] = O;
  } else {
    class O {
      constructor() {
        if ((sum > 0 && !AccessibilityStore.useReducedMotion) !== closure_9) {
          closure_9 = tmp;
          const obj2 = stateFromStores(dependencyMap[2]);
          obj2.cancelAnimation(pulsePhase);
          dependencyMap = pulsePhase.set(0);
          if (sum > 0 && !AccessibilityStore.useReducedMotion) {
            set = pulsePhase.set;
            const withRepeat = stateFromStores(dependencyMap[2]).withRepeat;
            stateFromStores(dependencyMap[2]);
            const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
            const withTiming = stateFromStores(dependencyMap[3]).withTiming;
            stateFromStores(dependencyMap[3]);
            const result1 = set(withRepeat(withTiming(1, obj), -1, false));
          }
        }
      }
    }
  }
  if (cResult[5] !== stateFromStores) {
    class O {
      constructor() {
        if ((sum > 0 && !AccessibilityStore.useReducedMotion) !== closure_9) {
          closure_9 = tmp;
          const obj2 = stateFromStores(dependencyMap[2]);
          obj2.cancelAnimation(pulsePhase);
          dependencyMap = pulsePhase.set(0);
          if (sum > 0 && !AccessibilityStore.useReducedMotion) {
            set = pulsePhase.set;
            const withRepeat = stateFromStores(dependencyMap[2]).withRepeat;
            stateFromStores(dependencyMap[2]);
            const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
            const withTiming = stateFromStores(dependencyMap[3]).withTiming;
            stateFromStores(dependencyMap[3]);
            const result1 = set(withRepeat(withTiming(1, obj), -1, false));
          }
        }
      }
    }
    tmp13[0] = stateFromStores;
    cResult[5] = stateFromStores;
    cResult[6] = tmp13;
  } else {
    class O {
      constructor() {
        if ((sum > 0 && !AccessibilityStore.useReducedMotion) !== closure_9) {
          closure_9 = tmp;
          const obj2 = stateFromStores(dependencyMap[2]);
          obj2.cancelAnimation(pulsePhase);
          dependencyMap = pulsePhase.set(0);
          if (sum > 0 && !AccessibilityStore.useReducedMotion) {
            set = pulsePhase.set;
            const withRepeat = stateFromStores(dependencyMap[2]).withRepeat;
            stateFromStores(dependencyMap[2]);
            const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
            const withTiming = stateFromStores(dependencyMap[3]).withTiming;
            stateFromStores(dependencyMap[3]);
            const result1 = set(withRepeat(withTiming(1, obj), -1, false));
          }
        }
      }
    }
  }
  const effect1 = react.useEffect(O, tmp13);
  let result = -arg0 % c5 / c5;
  dependencyMap = result;
  const tmpResult2 = tmp(4618);
  class T {
    constructor() {
      let tmp7;
      const obj = { opacity: null };
      if (stateFromStores) {
        obj.opacity = opacity;
        tmp7 = obj;
      } else if (typeof getPulseOpacity === "function") {
        let result1;
        dependencyMap = (pulsePhase.get() + dependencyMap) % 1;
        sum = dependencyMap;
        if (dependencyMap < 0) {
          sum = dependencyMap + 1;
        }
        if (sum < 0.5) {
          result1 = 2 * sum;
        } else {
          result1 = 2 * (1 - sum);
        }
        obj.opacity = 0.05 + 0.05 * metroRequire(result1);
        tmp7 = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      return tmp7;
    }
  }
  let obj2 = { shouldReduceMotion: stateFromStores, MAX_OPACITY: v01, getPulseOpacity, pulsePhase, phaseOffset: result };
  T.__closure = obj2;
  T.__workletHash = 3992024948852;
  T.__initData = __initData;
  return tmpResult2.useAnimatedStyle(T);
}) : ((arg0) => {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const effect = react.useEffect(() => {
    let useReducedMotion;
    sum = sum + 1;
    const tmp2 = sum > 0 && !AccessibilityStore.useReducedMotion;
    if (tmp2 !== closure_9) {
      closure_9 = tmp2;
      let obj2 = stateFromStores(dependencyMap[2]);
      obj2.cancelAnimation(pulsePhase);
      dependencyMap = pulsePhase.set(0);
      if (tmp2) {
        set = pulsePhase.set;
        const tmp8Result = stateFromStores(tmp9[2]);
        let withRepeat = tmp8Result.withRepeat;
        const tmp8Result2 = stateFromStores(tmp9[3]);
        let obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
        let withTiming = tmp8Result2.withTiming;
        let result1 = set(withRepeat(withTiming(1, obj), -1, false));
      }
    }
    return () => {
      diff = diff - 1;
      if ((diff > 0 && !useReducedMotion.useReducedMotion) !== closure_9) {
        closure_9 = tmp2;
        const obj2 = stateFromStores(closure_1_1[2]);
        obj2.cancelAnimation(closure_1_7);
        result = closure_1_7.set(0);
        if (diff > 0 && !useReducedMotion.useReducedMotion) {
          set = closure_1_7.set;
          const withRepeat = stateFromStores(closure_1_1[2]).withRepeat;
          stateFromStores(closure_1_1[2]);
          const obj = { duration, easing: stateFromStores(closure_1_1[2]).Easing.linear };
          const withTiming = stateFromStores(closure_1_1[3]).withTiming;
          stateFromStores(closure_1_1[3]);
          const result1 = set(withRepeat(withTiming(1, obj), -1, false));
        }
      }
    };
  }, []);
  const items1 = [stateFromStores];
  const effect1 = react.useEffect(() => {
    if ((sum > 0 && !AccessibilityStore.useReducedMotion) !== closure_9) {
      closure_9 = tmp;
      const obj2 = stateFromStores(dependencyMap[2]);
      obj2.cancelAnimation(pulsePhase);
      dependencyMap = pulsePhase.set(0);
      if (sum > 0 && !AccessibilityStore.useReducedMotion) {
        set = pulsePhase.set;
        const withRepeat = stateFromStores(dependencyMap[2]).withRepeat;
        stateFromStores(dependencyMap[2]);
        const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
        const withTiming = stateFromStores(dependencyMap[3]).withTiming;
        stateFromStores(dependencyMap[3]);
        const result1 = set(withRepeat(withTiming(1, obj), -1, false));
      }
    }
  }, items1);
  let result = -arg0 % c5 / c5;
  dependencyMap = result;
  let obj2 = stateFromStores(4618);
  const fn = function f() {
    let tmp7;
    const obj = { opacity: null };
    if (stateFromStores) {
      obj.opacity = opacity;
      tmp7 = obj;
    } else if (typeof getPulseOpacity === "function") {
      let result1;
      dependencyMap = (pulsePhase.get() + dependencyMap) % 1;
      sum = dependencyMap;
      if (dependencyMap < 0) {
        sum = dependencyMap + 1;
      }
      if (sum < 0.5) {
        result1 = 2 * sum;
      } else {
        result1 = 2 * (1 - sum);
      }
      obj.opacity = 0.05 + 0.05 * metroRequire(result1);
      tmp7 = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    return tmp7;
  };
  const obj3 = { shouldReduceMotion: stateFromStores, MAX_OPACITY: v01, getPulseOpacity, pulsePhase, phaseOffset: result };
  fn.__closure = obj3;
  fn.__workletHash = 15886965849973;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonPulse.tsx");

export const useSkeletonPulseStyle = tmp3;