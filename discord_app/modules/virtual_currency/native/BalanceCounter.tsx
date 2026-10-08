// discord_app/modules/virtual_currency/native/BalanceCounter.tsx
import c from "../../../../_runtime/00576_c.js";
import AccessibilityPreferencesContext from "../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop_mod from "../../../../_runtime/metro/00019__.js";

const Text_Text = tmp(5086);
require = fn;
let noop = fn(19);
({ useState: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useCallback: closure_7 } = noop);
let noop = noop_mod;
let jsx = fn(21).jsx;
let closure_10 = {
  code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}",
};
let __initData = {
  code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}",
};
let closure_12 = {
  code: "function BalanceCounterTsx3(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}",
};
const __initData2 = {
  code: "function BalanceCounterTsx4(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}",
};
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (value) => {
      const cResult = c.c(26);
      value = value.value;
      const require = value;
      const onValueChange = value.onValueChange;
      ({ onValueReached, style } = value);
      dependencyMap = tmp6(null);
      const sharedValue = ReanimatedRexport.useSharedValue(0);
      const ref2 = tmp6(null);
      const enabled = isAnimating.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext)
        .reducedMotion.enabled;
      [obj3, tmp6] = sharedValue(ref2(0), 2);
      const tmp7 = sharedValue(ref2(1), 2);
      closure_7 = tmp8;
      const tmp9 = sharedValue(ref2(false), 2);
      isAnimating = tmp9[0];
      jsx = tmp9[1];
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
        let first1 = fn;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        function clearAnimationTimeout() {
          if (null != ref2.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref2.current);
            ref2.current = null;
          }
          setIsAnimating(false);
        }
        cResult[1] = clearAnimationTimeout;
        let tmp12 = clearAnimationTimeout;
      } else {
        tmp12 = cResult[1];
      }
      __initData = tmp12;
      if (cResult[2] === sharedValue) {
        if (cResult[3] === onValueChange) {
          if (cResult[4] === enabled) {
            if (cResult[5] === value) {
              let tmp13 = cResult[6];
            }
            if (cResult[7] === sharedValue) {
              if (cResult[8] === onValueChange) {
                if (cResult[9] === onValueReached) {
                  if (cResult[10] === enabled) {
                    if (cResult[11] === value) {
                      let tmp14 = cResult[12];
                    }
                    enabled(tmp13, tmp14);
                    class L {
                      constructor() {
                        if (closure_8) {
                          tmp = globalThis;
                          _Math = Math;
                          tmp2 = closure_3;
                          str = Math.round(closure_3.get());
                          tmp3 = closure_0;
                          tmp4 = closure_2;
                          obj = closure_0(closure_2[5]);
                          tmp5 = closure_6;
                          tmp6 = obj.runOnJS(closure_6)(str);
                          obj2 = closure_0(closure_2[5]);
                          tmp7 = closure_7;
                          runOnJSResult = obj2.runOnJS(closure_7);
                          tmp8Result = runOnJSResult(str.toString().length);
                        }
                        return {};
                      }
                    }
                    const obj4 = {
                      isAnimating,
                      animatedValue: sharedValue,
                      runOnJS: tmp(4810).runOnJS,
                      setDisplayValue: tmp6,
                      setMaxDigits: tmp8,
                    };
                    L.__closure = obj4;
                    L.__workletHash = 4408542396979;
                    L.__initData = __initData;
                    const animatedStyle = tmp(4810).useAnimatedStyle(L);
                    if (null === value) {
                      return null;
                    } else {
                      let result = 7 * tmp7[0];
                      if (cResult[13] !== result) {
                        const obj5 = { minWidth: result };
                        cResult[13] = result;
                        class L {
                          constructor() {
                            if (closure_8) {
                              tmp = globalThis;
                              _Math = Math;
                              tmp2 = closure_3;
                              str = Math.round(closure_3.get());
                              tmp3 = closure_0;
                              tmp4 = closure_2;
                              obj = closure_0(closure_2[5]);
                              tmp5 = closure_6;
                              tmp6 = obj.runOnJS(closure_6)(str);
                              obj2 = closure_0(closure_2[5]);
                              tmp7 = closure_7;
                              runOnJSResult = obj2.runOnJS(closure_7);
                              tmp8Result = runOnJSResult(str.toString().length);
                            }
                            return {};
                          }
                        }
                        cResult[14] = obj5;
                        let tmp19 = obj5;
                      } else {
                        tmp19 = cResult[14];
                      }
                      if (cResult[15] === animatedStyle) {
                        if (cResult[16] === tmp19) {
                          let tmp20 = cResult[17];
                        }
                        if (cResult[18] !== obj3) {
                          cResult[18] = obj3;
                          class L {
                            constructor() {
                              if (closure_8) {
                                tmp = globalThis;
                                _Math = Math;
                                tmp2 = closure_3;
                                str = Math.round(closure_3.get());
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj = closure_0(closure_2[5]);
                                tmp5 = closure_6;
                                tmp6 = obj.runOnJS(closure_6)(str);
                                obj2 = closure_0(closure_2[5]);
                                tmp7 = closure_7;
                                runOnJSResult = obj2.runOnJS(closure_7);
                                tmp8Result = runOnJSResult(str.toString().length);
                              }
                              return {};
                            }
                          }
                          let tmp22 = obj3.toFixed(0);
                          const toFixedResult = obj3.toFixed(0);
                        } else {
                          tmp22 = cResult[19];
                        }
                        if (cResult[20] === style) {
                          if (cResult[21] === tmp22) {
                            let tmp24 = cResult[22];
                          }
                          if (cResult[23] === tmp20) {
                            if (cResult[24] === tmp24) {
                              let tmp28 = cResult[25];
                            }
                            return tmp28;
                          }
                          class L {
                            constructor() {
                              if (closure_8) {
                                tmp = globalThis;
                                _Math = Math;
                                tmp2 = closure_3;
                                str = Math.round(closure_3.get());
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj = closure_0(closure_2[5]);
                                tmp5 = closure_6;
                                tmp6 = obj.runOnJS(closure_6)(str);
                                obj2 = closure_0(closure_2[5]);
                                tmp7 = closure_7;
                                runOnJSResult = obj2.runOnJS(closure_7);
                                tmp8Result = runOnJSResult(str.toString().length);
                              }
                              return {};
                            }
                          }
                          tmp31[0] = tmp20;
                          tmp31[1] = tmp24;
                          const tmp32 = jsx(onValueChange(4810).View, tmp31);
                          cResult[23] = tmp20;
                          cResult[24] = tmp24;
                          cResult[25] = tmp32;
                          tmp28 = tmp32;
                        }
                        class L {
                          constructor() {
                            if (closure_8) {
                              tmp = globalThis;
                              _Math = Math;
                              tmp2 = closure_3;
                              str = Math.round(closure_3.get());
                              tmp3 = closure_0;
                              tmp4 = closure_2;
                              obj = closure_0(closure_2[5]);
                              tmp5 = closure_6;
                              tmp6 = obj.runOnJS(closure_6)(str);
                              obj2 = closure_0(closure_2[5]);
                              tmp7 = closure_7;
                              runOnJSResult = obj2.runOnJS(closure_7);
                              tmp8Result = runOnJSResult(str.toString().length);
                            }
                            return {};
                          }
                        }
                        tmp26[1] = style;
                        tmp26[3] = tmp22;
                        const tmp27 = jsx(tmp(5086).Text, tmp26);
                        cResult[20] = style;
                        cResult[21] = tmp22;
                        cResult[22] = tmp27;
                        tmp24 = tmp27;
                      }
                      class L {
                        constructor() {
                          if (closure_8) {
                            tmp = globalThis;
                            _Math = Math;
                            tmp2 = closure_3;
                            str = Math.round(closure_3.get());
                            tmp3 = closure_0;
                            tmp4 = closure_2;
                            obj = closure_0(closure_2[5]);
                            tmp5 = closure_6;
                            tmp6 = obj.runOnJS(closure_6)(str);
                            obj2 = closure_0(closure_2[5]);
                            tmp7 = closure_7;
                            runOnJSResult = obj2.runOnJS(closure_7);
                            tmp8Result = runOnJSResult(str.toString().length);
                          }
                          return {};
                        }
                      }
                      tmp21[0] = animatedStyle;
                      tmp21[1] = tmp19;
                      cResult[15] = animatedStyle;
                      cResult[16] = tmp19;
                      cResult[17] = tmp21;
                      tmp20 = tmp21;
                    }
                    const tmpResult = tmp(4810);
                  }
                }
              }
            }
            const items = [value, , onValueReached, sharedValue, first1, enabled];
            cResult[7] = sharedValue;
            cResult[8] = onValueChange;
            cResult[9] = onValueReached;
            cResult[10] = enabled;
            cResult[11] = value;
            cResult[12] = items;
            tmp14 = items;
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
                    first1(sharedValue, value, duration);
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
      tmp13 = H;
    }
  : (value) => {
      value = value.value;
      const require = value;
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
      const ref2 = c6(null);
      const enabled = isAnimating.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext)
        .reducedMotion.enabled;
      [obj2, tmp5] = sharedValue(ref2(0), 2);
      c6 = tmp5;
      const tmp6 = sharedValue(ref2(1), 2);
      closure_7 = tmp7;
      const tmp8 = sharedValue(ref2(false), 2);
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
                const orbBalanceCounterAnimationConfigs = value(ref[8]).getOrbBalanceCounterAnimationConfigs(
                  diff,
                  obj2,
                );
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
      const tmp4 = sharedValue(ref2(0), 2);
      fn.__closure = {
        isAnimating,
        animatedValue: sharedValue,
        runOnJS: ReanimatedRexport.runOnJS,
        setDisplayValue: tmp5,
        setMaxDigits: tmp6[1],
      };
      fn.__workletHash = 3325611842357;
      fn.__initData = __initData2;
      let tmp14 = null;
      if (null !== value) {
        const obj4 = { style: null, children: null };
        const items1 = [tmp13];
        const obj5 = { minWidth: 7 * tmp6[0] };
        items1[1] = obj5;
        obj4.style = items1;
        const obj6 = { variant: "text-sm/semibold", style, maxFontSizeMultiplier: 2, children: obj2.toFixed(0) };
        obj4.children = jsx(Text_Text.Text, {
          variant: "text-sm/semibold",
          style,
          maxFontSizeMultiplier: 2,
          children: obj2.toFixed(0),
        });
        tmp14 = jsx(onValueChange(4810).View, { style: null, children: null });
      }
      return tmp14;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default tmp3;
export const BalanceCounter = tmp3;
