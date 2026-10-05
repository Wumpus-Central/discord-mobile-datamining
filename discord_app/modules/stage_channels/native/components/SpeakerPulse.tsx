// discord_app/modules/stage_channels/native/components/SpeakerPulse.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let flag, num, num2, num3, num4, obj1, obj12, set, tmp10, tmp11, tmp14, tmp15, tmp17, tmp18, tmp22, tmp23, tmp3, tmp9;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 0.16;
let c10 = 250;
let c11 = 500;
let createStyles = createStyles_mod;
let obj = { pulse: obj2, border: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.STATUS_SPEAKING };
let closure_12 = createStyles(obj);
const __initData = {
  code: "function SpeakerPulseTsx1(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}",
};
const __initData2 = {
  code: "function SpeakerPulseTsx2(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}",
};
const __initData3 = {
  code: "function SpeakerPulseTsx3(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}",
};
const __initData4 = {
  code: "function SpeakerPulseTsx4(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}",
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let color;
      let items2;
      let obj5;
      let sharedValue1;
      let stateFromStores;
      let style;
      let tmp5;
      let tmp6;
      let tmp7;
      let useReducedMotion;
      let obj = stateFromStores(sharedValue1[7]);
      const cResult = obj.c(28);
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
      const tmpResult = stateFromStores(sharedValue1[8]);
      stateFromStores = tmpResult.useStateFromStores(tmp5, O, tmp7);
      const tmpResult4 = stateFromStores(sharedValue1[9]);
      const sharedValue = tmpResult4.useSharedValue(c9);
      const tmpResult5 = stateFromStores(sharedValue1[9]);
      sharedValue1 = tmpResult5.useSharedValue(c9);
      if (cResult[3] === sharedValue) {
        if (cResult[4] === sharedValue1) {
          let tmp12;
          let tmp13;
          let tmp20;
          if (cResult[5] === stateFromStores) {
            tmp12 = cResult[6];
            tmp13 = cResult[7];
          }
          const effect = react.useEffect(tmp12, tmp13);
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
          const tmpResult6 = stateFromStores(sharedValue1[9]);
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
          const animatedStyle1 = tmpResult6.useAnimatedStyle(C);
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
            tmp20 = tmp21;
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
              let obj6 = { style: items2 };
              items2 = [tmp4.pulse, style, animatedStyle, tmp28];
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
                tmp11 = closure_0(closure_2[9]);
                withRepeat = tmp11.withRepeat;
                tmp12 = closure_0(closure_2[9]);
                withSequence = tmp12.withSequence;
                tmp13 = closure_0(closure_2[9]);
                withDelay = tmp13.withDelay;
                obj2 = closure_0(closure_2[10]);
                tmp14 = c9;
                obj1 = { duration: null };
                tmp15 = c10;
                obj1.duration = c10;
                num2 = 100;
                withDelayResult = withDelay(100, obj2.withTiming(c9, obj1));
                tmp17 = closure_0(closure_2[9]);
                withDelay2 = tmp17.withDelay;
                obj4 = closure_0(closure_2[10]);
                obj10 = { duration: null };
                tmp18 = c11;
                obj10.duration = c11;
                flag = false;
                num3 = -1;
                withRepeatResult = withRepeat(
                  withSequence(withDelayResult, withDelay2(c10, obj4.withTiming(0, obj10))),
                  -1,
                  false,
                );
                tmp20 = closure_0(closure_2[9]);
                withRepeat2 = tmp20.withRepeat;
                tmp21 = closure_0(closure_2[9]);
                withSequence2 = tmp21.withSequence;
                tmp22 = closure_0(closure_2[9]);
                withDelay3 = tmp22.withDelay;
                obj6 = closure_0(closure_2[10]);
                tmp23 = c9;
                obj11 = { duration: null };
                obj11.duration = c10;
                num4 = 350;
                withDelay3Result = withDelay3(350, obj6.withTiming(c9, obj11));
                obj8 = closure_0(closure_2[10]);
                obj12 = { duration: null };
                obj12.duration = c11;
                withRepeat2Result = withRepeat2(withSequence2(withDelay3Result, obj8.withTiming(0, obj12)), -1, false);
                result2 = obj.set(withRepeatResult);
                result3 = closure_2.set(withRepeat2Result);
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
            tmp11 = closure_0(closure_2[9]);
            withRepeat = tmp11.withRepeat;
            tmp12 = closure_0(closure_2[9]);
            withSequence = tmp12.withSequence;
            tmp13 = closure_0(closure_2[9]);
            withDelay = tmp13.withDelay;
            obj2 = closure_0(closure_2[10]);
            tmp14 = c9;
            obj1 = { duration: null };
            tmp15 = c10;
            obj1.duration = c10;
            num2 = 100;
            withDelayResult = withDelay(100, obj2.withTiming(c9, obj1));
            tmp17 = closure_0(closure_2[9]);
            withDelay2 = tmp17.withDelay;
            obj4 = closure_0(closure_2[10]);
            obj10 = { duration: null };
            tmp18 = c11;
            obj10.duration = c11;
            flag = false;
            num3 = -1;
            withRepeatResult = withRepeat(
              withSequence(withDelayResult, withDelay2(c10, obj4.withTiming(0, obj10))),
              -1,
              false,
            );
            tmp20 = closure_0(closure_2[9]);
            withRepeat2 = tmp20.withRepeat;
            tmp21 = closure_0(closure_2[9]);
            withSequence2 = tmp21.withSequence;
            tmp22 = closure_0(closure_2[9]);
            withDelay3 = tmp22.withDelay;
            obj6 = closure_0(closure_2[10]);
            tmp23 = c9;
            obj11 = { duration: null };
            obj11.duration = c10;
            num4 = 350;
            withDelay3Result = withDelay3(350, obj6.withTiming(c9, obj11));
            obj8 = closure_0(closure_2[10]);
            obj12 = { duration: null };
            obj12.duration = c11;
            withRepeat2Result = withRepeat2(withSequence2(withDelay3Result, obj8.withTiming(0, obj12)), -1, false);
            result2 = obj.set(withRepeatResult);
            result3 = closure_2.set(withRepeat2Result);
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
    }
  : (arg0) => {
      let color;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let style;
      let useReducedMotion;
      ({ color, style } = arg0);
      let stateFromStores;
      let sharedValue1;
      const tmp = closure_12();
      let obj = stateFromStores(sharedValue1[8]);
      const items = [AccessibilityStore];
      stateFromStores = obj.useStateFromStores(items, () => !useReducedMotion.useReducedMotion, []);
      let obj2 = stateFromStores(sharedValue1[9]);
      const sharedValue = obj2.useSharedValue(c9);
      let obj3 = stateFromStores(sharedValue1[9]);
      sharedValue1 = obj3.useSharedValue(c9);
      const items1 = [stateFromStores, sharedValue, sharedValue1];
      const effect = react.useEffect(() => {
        if (stateFromStores) {
          const result = set(0);
          const result1 = sharedValue1.set(0);
          const withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          const withSequence = ReanimatedRexport.withSequence;
          ReanimatedRexport;
          const withDelay = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj3 = { duration };
          const obj2 = timing;
          const withDelayResult = withDelay(100, obj2.withTiming(c9, obj3));
          const withDelay2 = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj5 = { duration: duration2 };
          const obj4 = timing;
          const withRepeatResult = withRepeat(
            withSequence(withDelayResult, withDelay2(duration, obj4.withTiming(0, obj5))),
            -1,
            false,
          );
          const withRepeat2 = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          const withSequence2 = ReanimatedRexport.withSequence;
          ReanimatedRexport;
          const withDelay3 = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj7 = { duration };
          const obj6 = timing;
          const obj9 = { duration: duration2 };
          const withDelay3Result = withDelay3(350, obj6.withTiming(c9, obj7));
          const obj8 = timing;
          const withRepeat2Result = withRepeat2(withSequence2(withDelay3Result, obj8.withTiming(0, obj9)), -1, false);
          const result2 = sharedValue.set(withRepeatResult);
          const result3 = sharedValue1.set(withRepeat2Result);
        } else {
          const result4 = set(c9);
          const result5 = sharedValue1.set(c9);
        }
      }, items1);
      let obj4 = stateFromStores(sharedValue1[9]);
      const fn = function v() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn.__closure = { animatedInnerOpacity: sharedValue };
      fn.__workletHash = 190943686683;
      fn.__initData = __initData3;
      const animatedStyle = obj4.useAnimatedStyle(fn);
      let obj5 = stateFromStores(sharedValue1[9]);
      class D {
        constructor() {
          const obj = { opacity: sharedValue1.get() };
          return obj;
        }
      }
      D.__closure = { animatedOuterOpacity: sharedValue1 };
      D.__workletHash = 5118129808732;
      D.__initData = __initData4;
      const items2 = [tmp.border, ,];
      let tmp13 = null;
      const animatedStyle1 = obj5.useAnimatedStyle(D);
      if (null != color) {
        let obj6 = { backgroundColor: color };
        tmp13 = obj6;
      }
      let obj7 = { children: items3 };
      items2[1] = tmp13;
      items2[2] = style;
      items3 = [closure_6(View, { style: items2 }), ,];
      let obj8 = { style: items4 };
      items4 = [tmp.pulse, style, animatedStyle];
      let obj9 = { transform: items5 };
      items5 = [{ scale: 1.5 }];
      items4[3] = obj9;
      items3[1] = closure_6(sharedValue(sharedValue1[9]).View, obj8);
      const obj10 = { style: items6 };
      items6 = [tmp.pulse, style, animatedStyle1];
      const obj11 = { transform: items7 };
      items7 = [{ scale: 2 }];
      items6[3] = obj11;
      items3[2] = closure_6(sharedValue(sharedValue1[9]).View, obj10);
      return closure_8(closure_7, obj7);
    };
let result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default tmp4;
