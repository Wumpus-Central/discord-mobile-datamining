// === Module 9311: BalanceCounter ===

// Module 9311 (BalanceCounter)
import _modDef1653 from "module_1653" /* 1653 */;
import _mod1706 from "module_1706" /* 1706 */;
import spring_spring from "spring/spring" /* 5518 */;
import _slicedToArray from "module_32" /* 32 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useState: closure_4, useEffect: hasOwnProperty, useRef: closure_6, useCallback: metroImportDefault } = noop);
let noop = noop_mod;
let jsx = fn(21).jsx;
let closure_10 = { code: "(function BalanceCounterTsx1(){let[scheduleOnRN,setIsAnimating]=this.__closure;scheduleOnRN(setIsAnimating,false);})" };
let closure_11 = { code: "(function BalanceCounterTsx2(){let[isAnimating,animatedValue,scheduleOnRN,setDisplayValue,setMaxDigits]=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());scheduleOnRN(setDisplayValue,roundedValue);scheduleOnRN(setMaxDigits,roundedValue.toString().length);}return{};})" };
class BalanceCounter {
  constructor(arg0) {
    value = global.value;
    closure_0 = value;
    onValueChange = global.onValueChange;
    closure_1 = onValueChange;
    str = global.textVariant;
    ({ onValueReached, style } = global);
    if (str === undefined) {
      str = "body-sm/semibold";
    }
    ({ trimBottomFontSpace, textColor } = global);
    if (trimBottomFontSpace === undefined) {
      trimBottomFontSpace = false;
    }
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    enabled = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    clearAnimationTimeout = function clearAnimationTimeout() {
      if (null != _undefined5.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(_undefined5.current);
        _undefined5.current = null;
      }
      _undefined7(false);
    };
    closure_2 = closure_6(null);
    tmp2 = closure_2;
    tmp = closure_0;
    obj = closure_0(closure_2[3]);
    sharedValue = obj.useSharedValue(0);
    closure_3 = sharedValue;
    closure_4 = closure_6(null);
    enabled = closure_8.useContext(closure_0(closure_2[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp4 = closure_3(closure_4(0), 2);
    closure_6 = tmp4[1];
    tmp5 = closure_7((nativeEvent) => {
      const lines = nativeEvent.nativeEvent.lines;
      if (null != lines[lines.length - 1]) {
        const _Math = Math;
        closure_6(Math.abs(tmp.descender));
      }
    }, []);
    tmp6 = closure_3(closure_4(0), 2);
    [obj2, tmp7] = tmp6;
    closure_7 = tmp7;
    tmp8 = closure_3(closure_4(1), 2);
    [tmp9, tmp10] = tmp8;
    tmp11 = closure_3(closure_4(false), 2);
    [tmp12, closure_8] = tmp11;
    tmp13 = closure_7((set, _undefined2, duration) => {
      _undefined7(true);
      items = [closure_10, _mod1706.scheduleOnRN, _undefined7];
      c0 = undefined;
      c1 = undefined;
      [tmp2, tmp3, tmp4] = items;
      class BalanceCounterTsx1 {
        constructor() {
          tmp = closure_0(closure_1, false);
          return;
        }
      }
      const items1 = [tmp3, tmp4];
      BalanceCounterTsx1.__closure = items1;
      BalanceCounterTsx1.__workletHash = 2321092596604;
      BalanceCounterTsx1.__initData = tmp2;
      const result = set.set(spring_spring.withSpring(_undefined2, { duration, damping: 15, stiffness: 150, mass: 1 }, "respect-motion-settings", BalanceCounterTsx1));
    }, []);
    closure_9 = tmp13;
    items = [, , , , , ];
    items[0] = value;
    items[1] = onValueChange;
    items[2] = onValueReached;
    items[3] = sharedValue;
    items[4] = tmp13;
    items[5] = enabled;
    tmp14 = enabled(() => {
      if (null !== duration) {
        if (null !== _undefined3.current) {
          if (!enabled) {
            if (tmp !== _undefined3.current) {
              const diff = tmp - _undefined3.current;
              _undefined2(diff);
              _undefined3.current = tmp;
              const obj2 = { targetTime: _undefined(_undefined3[7]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS };
              const orbBalanceCounterAnimationConfigs = _undefined(_undefined3[7]).getOrbBalanceCounterAnimationConfigs(diff, obj2);
              duration = orbBalanceCounterAnimationConfigs.duration;
              if (null != _undefined5.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(_undefined5.current);
                _undefined5.current = null;
              }
              _undefined7(false);
              const _setTimeout = setTimeout;
              _undefined5.current = setTimeout(() => {
                closure_9(c3, c0, duration);
                c4.current = null;
              }, orbBalanceCounterAnimationConfigs.delay);
              return clearAnimationTimeout;
            } else {
              _undefined6(tmp);
            }
          }
        }
        _undefined6(tmp);
        const result = _undefined4.set(tmp);
        _undefined3.current = tmp;
      }
    }, items);
    tmp15 = closure_0(closure_2[3]);
    items1 = [, , , , , ];
    items1[0] = closure_11;
    items1[1] = tmp12;
    items1[2] = sharedValue;
    items1[3] = closure_0(closure_2[6]).scheduleOnRN;
    items1[4] = tmp7;
    items1[5] = tmp10;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
    class BalanceCounterTsx2 {
      constructor() {
        if (closure_0) {
          tmp = globalThis;
          _Math = Math;
          tmp2 = closure_1;
          str = Math.round(closure_1.get());
          tmp3 = closure_2;
          tmp4 = closure_3;
          tmp5 = closure_2(closure_3, str);
          tmp6 = closure_4;
          tmp7 = closure_2(closure_4, str.toString().length);
        }
        return {};
      }
    }
    items2 = [, , , , ];
    items2[0] = tmp17;
    items2[1] = tmp18;
    items2[2] = tmp19;
    items2[3] = tmp20;
    items2[4] = tmp21;
    BalanceCounterTsx2.__closure = items2;
    BalanceCounterTsx2.__workletHash = 10121586392867;
    BalanceCounterTsx2.__initData = tmp16;
    tmp25Result = null;
    if (null !== value) {
      tmp25 = closure_9;
      tmp26 = closure_1;
      items3 = [, ];
      items3[0] = tmp22;
      obj1 = { minWidth: null, marginBottom: null };
      num2 = 7;
      obj1.minWidth = 7 * tmp9;
      num = 0;
      if (trimBottomFontSpace) {
        num = -tmp4[0];
      }
      obj6 = { style: null, children: null };
      obj1.marginBottom = num;
      items3[1] = obj1;
      obj6.style = items3;
      obj7 = { variant: null, color: null, style: null, maxFontSizeMultiplier: 2, onTextLayout: null, children: null };
      obj7.variant = str;
      obj7.color = textColor;
      obj7.style = style;
      tmp24 = undefined;
      if (trimBottomFontSpace) {
        tmp24 = tmp5;
      }
      obj7.onTextLayout = tmp24;
      obj7.children = obj2.toFixed(0);
      obj6.children = tmp25(tmp(tmp2[8]).Text, obj7);
      tmp25Result = tmp25(closure_1(tmp2[3]).View, obj6);
    }
    return tmp25Result;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };