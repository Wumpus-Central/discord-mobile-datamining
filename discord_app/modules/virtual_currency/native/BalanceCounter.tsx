import _slicedToArray from "_slicedToArray";
import noop from "noop";
import closure_8 from "noop";
import { jsx } from "jsxProd";

let c4;
let c5;
let closure_6;
let error;
let require = arg1;
({ useState: c4, useEffect: c5, useRef: closure_6, useCallback: error } = noop);
let closure_10 = { code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
let closure_11 = { code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
class BalanceCounter {
  constructor(arg0) {
    value = global.value;
    closure_0 = value;
    onValueChange = global.onValueChange;
    c2 = undefined;
    c3 = undefined;
    clearAnimationTimeout = undefined;
    enabled = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    clearAnimationTimeout = function clearAnimationTimeout() {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      callback(false);
    };
    ({ onValueReached, style } = global);
    c2 = c6(null);
    tmp2 = c2;
    tmp = closure_0;
    obj = require("module_4116");
    sharedValue = require("_slicedToArray");
    c3 = sharedValue;
    clearAnimationTimeout = c6(null);
    enabled = c8.useContext(require("context").AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp4 = c3(require("_slicedToArray"), 2);
    [obj2, tmp5] = tmp4;
    c6 = tmp5;
    tmp6 = c3(require("noop"), 2);
    tmp7 = tmp6[1];
    c7 = tmp7;
    tmp8 = c3(clearAnimationTimeout(false), 2);
    first = tmp8[0];
    c8 = first;
    c9 = tmp8[1];
    tmp10 = c7((set, value, duration) => {
      callback(true);
      let obj = value(ref[5]);
      obj = { duration, damping: 15, stiffness: 150, mass: 1 };
      const fn = function l() {
        outer1_0(outer1_2[3]).runOnJS(closure_9)(false);
      };
      obj = { runOnJS: value(ref[3]).runOnJS, setIsAnimating: callback };
      fn.__closure = obj;
      fn.__workletHash = 16153226572520;
      fn.__initData = c10;
      const result = set.set(obj.withSpring(value, obj, "respect-motion-settings", fn));
    }, []);
    c10 = tmp10;
    items = [, , , , , ];
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
            if (tmp !== tmp2.current) {
              const diff = tmp - tmp2.current;
              onValueChange(diff);
              tmp2.current = tmp;
              const desiredAnimationConfigs = value(ref[6]).getDesiredAnimationConfigs(diff, value(ref[6]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS);
              duration = desiredAnimationConfigs.duration;
              if (null != ref2.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp12.current);
                tmp12.current = null;
              }
              callback(false);
              const _setTimeout = setTimeout;
              ref2.current = setTimeout(() => {
                outer1_10(outer1_3, duration, duration);
                outer1_4.current = null;
              }, desiredAnimationConfigs.delay);
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
    tmp12 = require("module_4116");
    class F {
      constructor() {
        if (c8) {
          tmp = globalThis;
          _Math = Math;
          tmp2 = c3;
          str = Math.round(c3.get());
          tmp3 = value;
          tmp4 = c2;
          obj = require("module_4116");
          tmp5 = c6;
          tmp6 = obj.runOnJS(c6)(str);
          obj2 = require("module_4116");
          tmp7 = c7;
          runOnJSResult = obj2.runOnJS(c7);
          tmp8Result = runOnJSResult(str.toString().length);
        }
        return {};
      }
    }
    obj = { isAnimating: first, animatedValue: sharedValue, runOnJS: require("module_4116").runOnJS, setDisplayValue: tmp5, setMaxDigits: tmp7 };
    F.__closure = obj;
    F.__workletHash = 4408542396979;
    F.__initData = clearAnimationTimeout;
    tmp14 = null;
    if (null !== value) {
      tmp15 = c9;
      tmp16 = onValueChange;
      obj1 = { style: null, children: null };
      items1 = [, ];
      items1[0] = tmp13;
      obj2 = { minWidth: null };
      num = 7;
      obj2[0] = 7 * tmp6[0];
      items1[1] = obj2;
      obj1[0] = items1;
      obj3 = { variant: "text-sm/semibold", style: null, maxFontSizeMultiplier: 2, children: null };
      obj3[1] = style;
      obj3[3] = require("_slicedToArray");
      obj1[1] = c9(require("Text").Text, obj3);
      tmp14 = c9(require("module_4116").View, obj1);
    }
    return tmp14;
  }
}
let result = require("jsxProd").fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };