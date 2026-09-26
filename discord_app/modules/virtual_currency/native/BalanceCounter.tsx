// discord_app/modules/virtual_currency/native/BalanceCounter.tsx
import AccessibilityPreferencesContext from "../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop_mod from "../../../../_runtime/metro/00019__.js";

const Text_Text = tmp(4832);
require = fn;
let noop = fn(19);
({ useState: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useCallback: closure_7 } = noop);
let noop = noop_mod;
let jsx = fn(21).jsx;
let closure_10 = {
  code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}",
};
let closure_11 = {
  code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}",
};
class BalanceCounter {
  constructor(arg0) {
    value = global.value;
    closure_0 = value;
    onValueChange = global.onValueChange;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    enabled = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    clearAnimationTimeout = function clearAnimationTimeout() {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      setIsAnimating(false);
    };
    ({ onValueReached, style } = global);
    closure_2 = closure_6(null);
    tmp2 = closure_2;
    tmp = closure_0;
    obj = closure_0(closure_2[3]);
    sharedValue = obj.useSharedValue(0);
    closure_3 = sharedValue;
    closure_4 = closure_6(null);
    enabled = closure_8.useContext(closure_0(closure_2[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp4 = closure_3(closure_4(0), 2);
    [obj2, tmp5] = tmp4;
    closure_6 = tmp5;
    tmp6 = closure_3(closure_4(1), 2);
    tmp7 = tmp6[1];
    closure_7 = tmp7;
    tmp8 = closure_3(closure_4(false), 2);
    first = tmp8[0];
    closure_8 = first;
    closure_9 = tmp8[1];
    tmp10 = closure_7((set, value, duration) => {
      setIsAnimating(true);
      const fn = function l() {
        value(closure_2[3]).runOnJS(setIsAnimating)(false);
      };
      const obj = spring;
      const obj2 = { duration, damping: 15, stiffness: 150, mass: 1 };
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAnimating };
      fn.__workletHash = 16153226572520;
      fn.__initData = __initData;
      const result = set.set(obj.withSpring(value, obj2, "respect-motion-settings", fn));
    }, []);
    closure_10 = tmp10;
    items = [, , , , ,];
    items[0] = value;
    items[1] = onValueChange;
    items[2] = onValueReached;
    items[3] = sharedValue;
    items[4] = tmp10;
    items[5] = enabled;
    tmp11 = enabled(() => {
      if (null !== duration) {
        if (null !== ref.current) {
          if (!enabled) {
            if (tmp !== ref.current) {
              const diff = tmp - ref.current;
              onValueChange(diff);
              ref.current = tmp;
              const obj2 = { targetTime: value(ref[6]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS };
              const orbBalanceCounterAnimationConfigs = value(ref[6]).getOrbBalanceCounterAnimationConfigs(diff, obj2);
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
    tmp12 = closure_0(closure_2[3]);
    class F {
      constructor() {
        if (closure_8) {
          tmp = globalThis;
          _Math = Math;
          tmp2 = closure_3;
          str = Math.round(closure_3.get());
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[3]);
          tmp5 = closure_6;
          tmp6 = obj.runOnJS(closure_6)(str);
          obj2 = closure_0(closure_2[3]);
          tmp7 = closure_7;
          runOnJSResult = obj2.runOnJS(closure_7);
          tmp8Result = runOnJSResult(str.toString().length);
        }
        return {};
      }
    }
    obj1 = {
      isAnimating: first,
      animatedValue: sharedValue,
      runOnJS: closure_0(closure_2[3]).runOnJS,
      setDisplayValue: tmp5,
      setMaxDigits: tmp7,
    };
    F.__closure = obj1;
    F.__workletHash = 4408542396979;
    F.__initData = clearAnimationTimeout;
    tmp14 = null;
    if (null !== value) {
      tmp15 = closure_9;
      tmp16 = onValueChange;
      obj7 = { style: null, children: null };
      items1 = [,];
      items1[0] = tmp13;
      obj8 = { minWidth: null };
      num = 7;
      obj8.minWidth = 7 * tmp6[0];
      items1[1] = obj8;
      obj7.style = items1;
      obj9 = { variant: "text-sm/semibold", style: null, maxFontSizeMultiplier: 2, children: null };
      obj9.style = style;
      obj9.children = obj2.toFixed(0);
      obj7.children = closure_9(tmp(tmp2[7]).Text, obj9);
      tmp14 = closure_9(onValueChange(tmp2[3]).View, obj7);
    }
    return tmp14;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };
