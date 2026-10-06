// === Module 11021: BalanceCounter ===

// Module 11021 (BalanceCounter)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react3 from "react" /* 4602 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, ref, value;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const Text_Text = tmp(4892);
let react = react_mod;
({ useState: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useCallback: metroImportDefault } = react);
react = react_mod;
let jsx = Fragment.jsx;
let closure_10 = { code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
let closure_11 = { code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
let closure_12 = { code: "function BalanceCounterTsx3(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
const __initData = { code: "function BalanceCounterTsx4(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((value) => {
  let closure_6;
  let closure_8;
  let onValueReached;
  let ref2;
  let setIsAnimating;
  let style;
  let tmp4;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(26);
  value = value.value;
  require = value;
  const onValueChange = value.onValueChange;
  ({ onValueReached, style } = value);
  dependencyMap = tmp4(null);
  let obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(0);
  ref = tmp4(null);
  const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  [r10035, tmp4] = sharedValue(ref(0), 2);
  const tmp3 = sharedValue(ref(0), 2);
  let closure_7 = sharedValue(ref(1), 2)[1];
  sharedValue(ref(1), 2);
  const tmp6 = sharedValue(ref(false), 2);
  react = tmp6[0];
  jsx = tmp6[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function o(set, targetHeight, duration) {
      setIsAnimating(true);
      let obj = spring;
      const fn = function l() {
        const obj = require("ReanimatedRexport");
        obj.runOnJS(setIsAnimating)(false);
      };
      const obj2 = { duration, damping: 15, stiffness: 150, mass: 1 };
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAnimating };
      fn.__workletHash = 16153226572520;
      fn.__initData = __initData;
      ({ runOnJS: ReanimatedRexport.runOnJS, setIsAnimating });
      const result = set(obj.withSpring(targetHeight, obj2, "respect-motion-settings", fn));
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        if (null != ref2.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref2.current);
          ref2.current = null;
        }
        setIsAnimating(false);
      }
    }
    cResult[1] = F;
    tmp8 = F;
  } else {
    class F {
      constructor() {
        if (null != ref2.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref2.current);
          ref2.current = null;
        }
        setIsAnimating(false);
      }
    }
  }
  F = tmp8;
  if (cResult[2] === sharedValue) {
    class F {
      constructor() {
        if (null != ref2.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref2.current);
          ref2.current = null;
        }
        setIsAnimating(false);
      }
    }
  }
  class H {
    constructor() {
      let duration;
      let tmp4;
      if (null !== duration) {
        if (null !== ref.current) {
          if (!enabled) {
            if (duration !== ref.current) {
              const diff = tmp - ref.current;
              onValueChange(diff);
              ref.current = duration;
              const obj = { targetTime: require("AnimationUtils").EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS };
              const getOrbBalanceCounterAnimationConfigs = require("AnimationUtils").getOrbBalanceCounterAnimationConfigs;
              require("AnimationUtils");
              const orbBalanceCounterAnimationConfigs = getOrbBalanceCounterAnimationConfigs(diff, obj);
              duration = orbBalanceCounterAnimationConfigs.duration;
              const delay = orbBalanceCounterAnimationConfigs.delay;
              F();
              const _setTimeout = setTimeout;
              closure_4.current = setTimeout(() => {
                first(sharedValue, require, duration);
                ref2.current = null;
              }, delay);
              return F;
            } else {
              tmp4 = tmp4(duration);
            }
          }
        }
        tmp4(duration);
        const result = sharedValue.set(tmp);
        ref.current = duration;
      }
    }
  }
  cResult[2] = sharedValue;
  cResult[3] = onValueChange;
  cResult[4] = enabled;
  cResult[5] = value;
  cResult[6] = H;
}) : ((value) => {
  let _undefined;
  let obj2;
  let onValueReached;
  let ref2;
  let setIsAnimating;
  let style;
  let tmp5;
  value = value.value;
  require = value;
  const onValueChange = value.onValueChange;
  let c6;
  let first1;
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
  const tmp = require;
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  ref = c6(null);
  const enabled = first1.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  [obj2, tmp5] = sharedValue(ref(0), 2);
  c6 = tmp5;
  const tmp4 = sharedValue(ref(0), 2);
  let closure_7 = tmp8;
  const first = sharedValue(ref(1), 2)[0];
  const tmp6 = sharedValue(ref(1), 2);
  const tmp9 = sharedValue(ref(false), 2);
  first1 = tmp9[0];
  jsx = tmp9[1];
  const tmp11 = closure_7((set, targetHeight, duration) => {
    setIsAnimating(true);
    let obj = spring;
    const fn = function l() {
      const obj = require("ReanimatedRexport");
      obj.runOnJS(setIsAnimating)(false);
    };
    const obj2 = { duration, damping: 15, stiffness: 150, mass: 1 };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAnimating };
    fn.__workletHash = 5640678796522;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setIsAnimating });
    const result = set(obj.withSpring(targetHeight, obj2, "respect-motion-settings", fn));
  }, []);
  closure_10 = tmp11;
  const items = [value, onValueChange, onValueReached, sharedValue, tmp11, enabled];
  enabled(() => {
    let duration;
    if (null !== duration) {
      if (null !== ref.current) {
        if (!enabled) {
          if (duration !== ref.current) {
            const diff = tmp - ref.current;
            onValueChange(diff);
            ref.current = duration;
            const obj = { targetTime: require("AnimationUtils").EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS };
            const getOrbBalanceCounterAnimationConfigs = require("AnimationUtils").getOrbBalanceCounterAnimationConfigs;
            require("AnimationUtils");
            const orbBalanceCounterAnimationConfigs = getOrbBalanceCounterAnimationConfigs(diff, obj);
            duration = orbBalanceCounterAnimationConfigs.duration;
            const delay = orbBalanceCounterAnimationConfigs.delay;
            if (null != ref2.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref2.current);
              ref2.current = null;
            }
            setIsAnimating(false);
            const _setTimeout = setTimeout;
            ref2.current = setTimeout(() => {
              closure_10(sharedValue, require, duration);
              ref2.current = null;
            }, delay);
            return clearAnimationTimeout;
          } else {
            _undefined(duration);
          }
        }
      }
      _undefined(duration);
      const result = sharedValue.set(tmp);
      ref.current = duration;
    }
  }, items);
  ReanimatedRexport;
  let fn = function k() {
    if (first1) {
      const _Math = Math;
      const str = Math.round(sharedValue.get());
      const obj = ReanimatedRexport;
      obj.runOnJS(c6)(str);
      const obj2 = ReanimatedRexport;
      const runOnJSResult = obj2.runOnJS(closure_7);
      runOnJSResult(str.toString().length);
    }
    return {};
  };
  const obj3 = { isAnimating: first1, animatedValue: sharedValue, runOnJS: ReanimatedRexport.runOnJS, setDisplayValue: tmp5, setMaxDigits: tmp8 };
  fn.__closure = obj3;
  fn.__workletHash = 3325611842357;
  fn.__initData = __initData;
  let tmp15 = null;
  if (null !== value) {
    const items1 = [tmp14, ];
    const obj5 = { minWidth: 7 * first };
    items1[1] = obj5;
    const View = onValueChange(4618).View;
    ({ variant: "text-sm/semibold", style, maxFontSizeMultiplier: 2, children: obj2.toFixed(0) });
    const Text = Text_Text.Text;
    tmp15 = <View style={items1}>{null}</View>;
  }
  return tmp15;
});
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default tmp3;
export const BalanceCounter = tmp3;