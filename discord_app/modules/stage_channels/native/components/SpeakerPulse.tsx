// discord_app/modules/stage_channels/native/components/SpeakerPulse.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 0.16;
let c10 = 250;
let c11 = 500;
const createStyles = fn(5090);
let obj2 = { pulse: { backgroundColor: nativeDefault.colors.WHITE }, border: null };
let obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.border = { backgroundColor: nativeDefault.colors.STATUS_SPEAKING };
let closure_12 = createStyles.createStyles(obj2);
const __initData = { code: "function SpeakerPulseTsx1(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}" };
const __initData2 = { code: "function SpeakerPulseTsx2(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}" };
const __initData3 = { code: "function SpeakerPulseTsx3(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}" };
const __initData4 = { code: "function SpeakerPulseTsx4(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}" };
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.STATUS_SPEAKING };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SpeakerPulse(arg0) {
  const cResult = stateFromStores(sharedValue1[7]).c(28);
  ({ color, style } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class O {
      constructor() {
        return !closure_1_5.useReducedMotion;
      }
    }
    const items1 = [];
    cResult[0] = items;
    cResult[1] = O;
    cResult[2] = items1;
    tmp5 = items;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  const obj = stateFromStores(sharedValue1[7]);
  stateFromStores = stateFromStores(sharedValue1[8]).useStateFromStores(tmp5, O, tmp7);
  const tmpResult = stateFromStores(sharedValue1[8]);
  const sharedValue = stateFromStores(sharedValue1[9]).useSharedValue(c9);
  const tmpResult4 = stateFromStores(sharedValue1[9]);
  sharedValue1 = stateFromStores(sharedValue1[9]).useSharedValue(c9);
  if (cResult[3] === sharedValue) {
    if (cResult[4] === sharedValue1) {
      if (cResult[5] === stateFromStores) {
        let tmp12 = cResult[6];
        let tmp13 = cResult[7];
      }
      const effect = noop.useEffect(tmp12, tmp13);
      class O {
        constructor() {
          return !closure_1_5.useReducedMotion;
        }
      }
      class A {
        constructor() {
          obj = { opacity: closure_1.get() };
          return obj;
        }
      }
      let obj2 = { animatedInnerOpacity: sharedValue };
      A.__closure = obj2;
      A.__workletHash = 202297893401;
      A.__initData = __initData;
      const animatedStyle = obj5.useAnimatedStyle(A);
      class C {
        constructor() {
          obj = { opacity: closure_2.get() };
          return obj;
        }
      }
      let obj3 = { animatedOuterOpacity: sharedValue1 };
      C.__closure = obj3;
      C.__workletHash = 13537504931930;
      C.__initData = __initData2;
      const animatedStyle1 = tmp(tmp2[9]).useAnimatedStyle(C);
      if (cResult[8] !== color) {
        let tmp21 = null;
        if (null != color) {
          let obj4 = { backgroundColor: color };
          tmp21 = obj4;
        }
        class O {
          constructor() {
            return !closure_1_5.useReducedMotion;
          }
        }
        class A {
          constructor() {
            obj = { opacity: closure_1.get() };
            return obj;
          }
        }
        cResult[9] = tmp21;
        let tmp20 = tmp21;
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] === style) {
        if (cResult[11] === tmp4.border) {
          const _Symbol = Symbol;
          class O {
            constructor() {
              return !closure_1_5.useReducedMotion;
            }
          }
          class A {
            constructor() {
              obj = { opacity: closure_1.get() };
              return obj;
            }
          }
          const items2 = [tmp4.pulse, style, animatedStyle, tmp28];
          { style: null }.style = items2;
          class C {
            constructor() {
              obj = { opacity: closure_2.get() };
              return obj;
            }
          }
          cResult[15] = animatedStyle;
          cResult[16] = style;
          cResult[17] = tmp4.pulse;
          cResult[18] = tmp32;
          let obj6 = { style: null };
        }
      }
      class I {
        constructor() {
          obj = closure_1;
          set = closure_1.set;
          if (closure_0) {
            num = 0;
            result = set(0);
            tmp7 = closure_2;
            result1 = closure_2.set(0);
            tmp9 = closure_0;
            tmp10 = closure_2;
            obj2 = closure_0(closure_2[9]);
            obj3 = closure_0(closure_2[9]);
            obj4 = closure_0(closure_2[9]);
            obj5 = closure_0(closure_2[10]);
            tmp11 = c9;
            obj1 = { duration: null };
            tmp12 = c10;
            obj1.duration = c10;
            num2 = 100;
            withDelayResult = obj4.withDelay(100, obj5.withTiming(c9, obj1));
            obj7 = closure_0(closure_2[9]);
            obj8 = closure_0(closure_2[10]);
            obj17 = { duration: null };
            tmp14 = c11;
            obj17.duration = c11;
            flag = false;
            num3 = -1;
            withRepeatResult = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(c10, obj8.withTiming(0, obj17))), -1, false);
            obj10 = closure_0(closure_2[9]);
            obj11 = closure_0(closure_2[9]);
            obj12 = closure_0(closure_2[9]);
            obj13 = closure_0(closure_2[10]);
            tmp16 = c9;
            obj18 = { duration: null };
            obj18.duration = c10;
            num4 = 350;
            withDelayResult1 = obj12.withDelay(350, obj13.withTiming(c9, obj18));
            obj15 = closure_0(closure_2[10]);
            obj19 = { duration: null };
            obj19.duration = c11;
            withRepeatResult1 = obj10.withRepeat(obj11.withSequence(withDelayResult1, obj15.withTiming(0, obj19)), -1, false);
            result2 = obj.set(withRepeatResult);
            result3 = closure_2.set(withRepeatResult1);
          } else {
            tmp = c9;
            result4 = set(c9);
            tmp3 = closure_2;
            tmp4 = c9;
            result5 = closure_2.set(c9);
          }
          return;
        }
      }
      const items3 = [tmp4.border, tmp20, style];
      tmp25[0] = items3;
      const tmp26 = closure_6(View, tmp25);
      cResult[10] = style;
      cResult[11] = tmp4.border;
      cResult[12] = tmp20;
      cResult[13] = tmp26;
      const tmpResult6 = tmp(tmp2[9]);
    }
  }
  class I {
    constructor() {
      obj = closure_1;
      set = closure_1.set;
      if (closure_0) {
        num = 0;
        result = set(0);
        tmp7 = closure_2;
        result1 = closure_2.set(0);
        tmp9 = closure_0;
        tmp10 = closure_2;
        obj2 = closure_0(closure_2[9]);
        obj3 = closure_0(closure_2[9]);
        obj4 = closure_0(closure_2[9]);
        obj5 = closure_0(closure_2[10]);
        tmp11 = c9;
        obj1 = { duration: null };
        tmp12 = c10;
        obj1.duration = c10;
        num2 = 100;
        withDelayResult = obj4.withDelay(100, obj5.withTiming(c9, obj1));
        obj7 = closure_0(closure_2[9]);
        obj8 = closure_0(closure_2[10]);
        obj17 = { duration: null };
        tmp14 = c11;
        obj17.duration = c11;
        flag = false;
        num3 = -1;
        withRepeatResult = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(c10, obj8.withTiming(0, obj17))), -1, false);
        obj10 = closure_0(closure_2[9]);
        obj11 = closure_0(closure_2[9]);
        obj12 = closure_0(closure_2[9]);
        obj13 = closure_0(closure_2[10]);
        tmp16 = c9;
        obj18 = { duration: null };
        obj18.duration = c10;
        num4 = 350;
        withDelayResult1 = obj12.withDelay(350, obj13.withTiming(c9, obj18));
        obj15 = closure_0(closure_2[10]);
        obj19 = { duration: null };
        obj19.duration = c11;
        withRepeatResult1 = obj10.withRepeat(obj11.withSequence(withDelayResult1, obj15.withTiming(0, obj19)), -1, false);
        result2 = obj.set(withRepeatResult);
        result3 = closure_2.set(withRepeatResult1);
      } else {
        tmp = c9;
        result4 = set(c9);
        tmp3 = closure_2;
        tmp4 = c9;
        result5 = closure_2.set(c9);
      }
      return;
    }
  }
  const items4 = [stateFromStores, sharedValue, sharedValue1];
  cResult[3] = sharedValue;
  cResult[4] = sharedValue1;
  cResult[5] = stateFromStores;
  cResult[6] = I;
  cResult[7] = items4;
  tmp13 = items4;
  tmp12 = I;
  const tmpResult5 = stateFromStores(sharedValue1[9]);
}) : (function SpeakerPulse(arg0) {
  ({ color, style } = arg0);
  let stateFromStores;
  let sharedValue1;
  const tmp = closure_12();
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(sharedValue1[8]).useStateFromStores(items, () => !useReducedMotion.useReducedMotion, []);
  const obj = stateFromStores(sharedValue1[8]);
  const sharedValue = stateFromStores(sharedValue1[9]).useSharedValue(c9);
  let obj2 = stateFromStores(sharedValue1[9]);
  sharedValue1 = stateFromStores(sharedValue1[9]).useSharedValue(c9);
  const items1 = [stateFromStores, sharedValue, sharedValue1];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      const result = set(0);
      const result1 = sharedValue1.set(0);
      const obj2 = ReanimatedRexport;
      const obj3 = ReanimatedRexport;
      const obj4 = ReanimatedRexport;
      const obj6 = { duration };
      const withDelayResult = obj4.withDelay(100, timing.withTiming(c9, obj6));
      const obj7 = ReanimatedRexport;
      const obj9 = { duration: duration2 };
      const withRepeatResult = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(duration, timing.withTiming(0, obj9))), -1, false);
      const obj10 = ReanimatedRexport;
      const obj11 = ReanimatedRexport;
      const obj12 = ReanimatedRexport;
      const obj14 = { duration };
      const withDelayResult1 = obj12.withDelay(350, timing.withTiming(c9, obj14));
      const obj16 = { duration: duration2 };
      const result2 = sharedValue.set(withRepeatResult);
      const result3 = sharedValue1.set(obj10.withRepeat(obj11.withSequence(withDelayResult1, timing.withTiming(0, obj16)), -1, false));
      const withRepeatResult1 = obj10.withRepeat(obj11.withSequence(withDelayResult1, timing.withTiming(0, obj16)), -1, false);
    } else {
      const result4 = set(c9);
      const result5 = sharedValue1.set(c9);
    }
  }, items1);
  let obj3 = stateFromStores(sharedValue1[9]);
  const fn = function v() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { animatedInnerOpacity: sharedValue };
  fn.__workletHash = 190943686683;
  fn.__initData = __initData3;
  const animatedStyle = stateFromStores(sharedValue1[9]).useAnimatedStyle(fn);
  let obj4 = stateFromStores(sharedValue1[9]);
  class D {
    constructor() {
      obj = { opacity: closure_2.get() };
      return obj;
    }
  }
  D.__closure = { animatedOuterOpacity: sharedValue1 };
  D.__workletHash = 5118129808732;
  D.__initData = __initData4;
  const items2 = [tmp.border, , ];
  let tmp13 = null;
  const animatedStyle1 = stateFromStores(sharedValue1[9]).useAnimatedStyle(D);
  if (null != color) {
    let obj6 = { backgroundColor: color };
    tmp13 = obj6;
  }
  let obj7 = { children: null };
  items2[1] = tmp13;
  items2[2] = style;
  const items3 = [closure_6(View, { style: items2 }), , ];
  let obj8 = { style: null };
  const items4 = [tmp.pulse, style, animatedStyle, ];
  let obj9 = { transform: null };
  const items5 = [{ scale: 1.5 }];
  obj9.transform = items5;
  items4[3] = obj9;
  obj8.style = items4;
  items3[1] = closure_6(sharedValue(sharedValue1[9]).View, obj8);
  let obj10 = { style: null };
  const items6 = [tmp.pulse, style, animatedStyle1, ];
  let obj11 = { transform: null };
  const items7 = [{ scale: 2 }];
  obj11.transform = items7;
  items6[3] = obj11;
  obj10.style = items6;
  items3[2] = closure_6(sharedValue(sharedValue1[9]).View, obj10);
  obj7.children = items3;
  return closure_8(closure_7, obj7);
});