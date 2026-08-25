// === Module 10302: BalanceCounter ===

// Module 10302 (BalanceCounter)
import context from "context" /* 1356 */;
import _mod4120 from "module_4120" /* 4120 */;
import Text from "Text" /* 4376 */;
import closure_3 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import closure_8 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
({ useState: c4, useEffect: c5, useRef: closure_6, useCallback: error } = noop);
let closure_10 = { code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
let closure_11 = { code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
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
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      callback(false);
    };
    ({ onValueReached, style } = global);
    closure_2 = closure_6(null);
    tmp2 = closure_2;
    tmp = closure_0;
    obj = require("module_4120");
    sharedValue = require("module_0");
    closure_3 = sharedValue;
    closure_4 = closure_6(null);
    enabled = closure_8.useContext(require("context").AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp4 = closure_3(require("module_0"), 2);
    [obj2, tmp5] = tmp4;
    closure_6 = tmp5;
    tmp6 = closure_3(require("module_1"), 2);
    tmp7 = tmp6[1];
    closure_7 = tmp7;
    tmp8 = closure_3(closure_4(false), 2);
    first = tmp8[0];
    closure_8 = first;
    closure_9 = tmp8[1];
    tmp10 = closure_7((set, value, duration) => {
      callback(true);
      let obj = value(ref[5]);
      obj = { duration, damping: 15, stiffness: 150, mass: 1 };
      const fn = function l() {
        closure_1_0(closure_1_2[3]).runOnJS(closure_9)(false);
      };
      obj = { runOnJS: value(ref[3]).runOnJS, setIsAnimating: callback };
      fn.__closure = obj;
      fn.__workletHash = 16153226572520;
      fn.__initData = closure_10;
      const result = set.set(obj.withSpring(value, obj, "respect-motion-settings", fn));
    }, []);
    closure_10 = tmp10;
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
                closure_1_10(closure_1_3, duration, duration);
                closure_1_4.current = null;
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
    tmp12 = require("module_4120");
    class F {
      constructor() {
        if (closure_8) {
          tmp = globalThis;
          _Math = Math;
          tmp2 = closure_3;
          str = Math.round(closure_3.get());
          tmp3 = value;
          tmp4 = closure_2;
          obj = require("module_4120");
          tmp5 = closure_6;
          tmp6 = obj.runOnJS(closure_6)(str);
          obj2 = require("module_4120");
          tmp7 = closure_7;
          runOnJSResult = obj2.runOnJS(closure_7);
          tmp8Result = runOnJSResult(str.toString().length);
        }
        return {};
      }
    }
    obj = { isAnimating: first, animatedValue: sharedValue, runOnJS: require("module_4120").runOnJS, setDisplayValue: tmp5, setMaxDigits: tmp7 };
    F.__closure = obj;
    F.__workletHash = 4408542396979;
    F.__initData = clearAnimationTimeout;
    tmp14 = null;
    if (null !== value) {
      tmp15 = closure_9;
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
      obj3[3] = require("module_0");
      obj1[1] = closure_9(require("Text").Text, obj3);
      tmp14 = closure_9(require("module_4120").View, obj1);
    }
    return tmp14;
  }
}
let result = require("set").fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };