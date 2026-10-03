// === Module 11008: BalanceCounter ===

// Module 11008 (BalanceCounter)
import c from "c" /* 576 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4596 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import _slicedToArray from "module_32" /* 32 */;
import noop_mod from "module_19" /* 19 */;

const Text_Text = tmp(4886);
require = fn;
let noop = fn(19);
({ useState: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useCallback: closure_7 } = noop);
let noop = noop_mod;
let jsx = fn(21).jsx;
let closure_10 = { code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
let closure_11 = { code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
let closure_12 = { code: "function BalanceCounterTsx3(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
const __initData = { code: "function BalanceCounterTsx4(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((value) => {
  const cResult = c.c(26);
  value = value.value;
  require = value;
  const onValueChange = value.onValueChange;
  ({ onValueReached, style } = value);
  dependencyMap = tmp4(null);
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  ref = tmp4(null);
  const enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
  [r10035, tmp4] = sharedValue(ref(0), 2);
  const tmp3 = sharedValue(ref(0), 2);
  closure_7 = sharedValue(ref(1), 2)[1];
  const tmp6 = sharedValue(ref(false), 2);
  noop = tmp6[0];
  jsx = tmp6[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function o(set, value, duration) {
      setIsAnimating(true);
      const fn = function l() {
        value(closure_2[5]).runOnJS(setIsAnimating)(false);
      };
      const obj = spring;
      const obj2 = { duration, damping: 15, stiffness: 150, mass: 1 };
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAnimating };
      fn.__workletHash = 16153226572520;
      fn.__initData = __initData;
      const result = set.set(obj.withSpring(value, obj2, "respect-motion-settings", fn));
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        tmp = closure_4;
        if (null != closure_4.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
          tmp.current = null;
        }
        tmp4 = closure_9(false);
        return;
      }
    }
    cResult[1] = F;
    const tmp8 = F;
  } else {
    class F {
      constructor() {
        tmp = closure_4;
        if (null != closure_4.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
          tmp.current = null;
        }
        tmp4 = closure_9(false);
        return;
      }
    }
  }
  F = tmp8;
  if (cResult[2] === sharedValue) {
    class F {
      constructor() {
        tmp = closure_4;
        if (null != closure_4.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
          tmp.current = null;
        }
        tmp4 = closure_9(false);
        return;
      }
    }
  }
  class H {
    constructor() {
      tmp = duration;
      if (null !== duration) {
        tmp2 = closure_2;
        if (null !== closure_2.current) {
          tmp19 = enabled;
          if (!enabled) {
            if (tmp !== tmp2.current) {
              diff = tmp - tmp2.current;
              tmp6 = onValueChange;
              tmp7 = onValueChange(diff);
              tmp2.current = tmp;
              tmp8 = value;
              tmp9 = closure_2;
              obj = value(closure_2[8]);
              obj1 = { targetTime: null };
              obj1.targetTime = value(closure_2[8]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
              orbBalanceCounterAnimationConfigs = obj.getOrbBalanceCounterAnimationConfigs(diff, obj1);
              duration = orbBalanceCounterAnimationConfigs.duration;
              tmp11 = closure_11;
              tmp12 = closure_11();
              tmp13 = closure_4;
              tmp14 = globalThis;
              _setTimeout = setTimeout;
              closure_4.current = setTimeout(() => {
                first(sharedValue, value, duration);
                closure_4.current = null;
              }, orbBalanceCounterAnimationConfigs.delay);
              return closure_11;
            } else {
              tmp3 = closure_6;
              tmp4 = closure_6(tmp);
            }
          }
        }
        tmp15 = closure_6;
        tmp16 = closure_6(tmp);
        tmp17 = closure_3;
        result = closure_3.set(tmp);
        tmp2.current = tmp;
        return;
      }
      return;
    }
  }
  cResult[2] = sharedValue;
  cResult[3] = onValueChange;
  cResult[4] = enabled;
  cResult[5] = value;
  cResult[6] = H;
}) : ((value) => {
  value = value.value;
  require = value;
  const onValueChange = value.onValueChange;
  c6 = undefined;
  let isAnimating;
  function clearAnimationTimeout() {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
    setIsAnimating(false);
  }
  ({ onValueReached, style } = value);
  dependencyMap = c6(null);
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  ref = c6(null);
  const enabled = isAnimating.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
  [obj2, tmp5] = sharedValue(ref(0), 2);
  c6 = tmp5;
  const tmp6 = sharedValue(ref(1), 2);
  closure_7 = tmp7;
  const tmp8 = sharedValue(ref(false), 2);
  isAnimating = tmp8[0];
  jsx = tmp8[1];
  const tmp10 = closure_7((set, value, duration) => {
    setIsAnimating(true);
    const fn = function l() {
      value(closure_2[5]).runOnJS(setIsAnimating)(false);
    };
    const obj = spring;
    const obj2 = { duration, damping: 15, stiffness: 150, mass: 1 };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAnimating };
    fn.__workletHash = 5640678796522;
    fn.__initData = __initData;
    const result = set.set(obj.withSpring(value, obj2, "respect-motion-settings", fn));
  }, []);
  closure_10 = tmp10;
  const items = [value, onValueChange, onValueReached, sharedValue, tmp10, enabled];
  enabled(() => {
    if (null !== duration) {
      if (null !== ref.current) {
        if (!enabled) {
          if (tmp !== ref.current) {
            const diff = tmp - ref.current;
            onValueChange(diff);
            ref.current = tmp;
            const obj2 = { targetTime: value(ref[8]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS };
            const orbBalanceCounterAnimationConfigs = value(ref[8]).getOrbBalanceCounterAnimationConfigs(diff, obj2);
            duration = orbBalanceCounterAnimationConfigs.duration;
            if (null != ref2.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref2.current);
              ref2.current = null;
            }
            setIsAnimating(false);
            const _setTimeout = setTimeout;
            ref2.current = setTimeout(() => {
              closure_10(sharedValue, value, duration);
              closure_4.current = null;
            }, orbBalanceCounterAnimationConfigs.delay);
            return clearAnimationTimeout;
          } else {
            _undefined(tmp);
          }
        }
      }
      _undefined(tmp);
      const result = sharedValue.set(tmp);
      ref.current = tmp;
    }
  }, items);
  ReanimatedRexport;
  let fn = function k() {
    if (first) {
      const _Math = Math;
      const str = Math.round(sharedValue.get());
      ReanimatedRexport.runOnJS(c6)(str);
      ReanimatedRexport.runOnJS(closure_7)(str.toString().length);
      const runOnJSResult = ReanimatedRexport.runOnJS(closure_7);
    }
    return {};
  };
  const tmp4 = sharedValue(ref(0), 2);
  fn.__closure = { isAnimating, animatedValue: sharedValue, runOnJS: ReanimatedRexport.runOnJS, setDisplayValue: tmp5, setMaxDigits: tmp6[1] };
  fn.__workletHash = 3325611842357;
  fn.__initData = __initData;
  let tmp14 = null;
  if (null !== value) {
    const obj4 = { style: null, children: null };
    const items1 = [tmp13, ];
    const obj5 = { minWidth: 7 * tmp6[0] };
    items1[1] = obj5;
    obj4.style = items1;
    const obj6 = { variant: "text-sm/semibold", style, maxFontSizeMultiplier: 2, children: obj2.toFixed(0) };
    obj4.children = jsx(Text_Text.Text, { variant: "text-sm/semibold", style, maxFontSizeMultiplier: 2, children: obj2.toFixed(0) });
    tmp14 = jsx(onValueChange(4612).View, { style: null, children: null });
  }
  return tmp14;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default tmp3;
export const BalanceCounter = tmp3;