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
const createStyles = fn(4640);
let obj2 = { pulse: { backgroundColor: nativeDefault.colors.WHITE }, border: null };
let obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.border = { backgroundColor: nativeDefault.colors.STATUS_SPEAKING };
let closure_10 = createStyles.createStyles(obj2);
const __initData = {
  code: "function SpeakerPulseTsx1(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}",
};
const __initData2 = {
  code: "function SpeakerPulseTsx2(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default function SpeakerPulse(style) {
  style = style.style;
  let stateFromStores;
  let sharedValue1;
  const tmp = closure_10();
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(sharedValue1[6]).useStateFromStores(
    items,
    () => !useReducedMotion.useReducedMotion,
    [],
  );
  const obj = stateFromStores(sharedValue1[6]);
  const sharedValue = stateFromStores(sharedValue1[7]).useSharedValue(c9);
  let obj2 = stateFromStores(sharedValue1[7]);
  sharedValue1 = stateFromStores(sharedValue1[7]).useSharedValue(c9);
  const items1 = [stateFromStores, sharedValue, sharedValue1];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      const result = set(0);
      const result1 = sharedValue1.set(0);
      const obj2 = ReanimatedRexport;
      const obj3 = ReanimatedRexport;
      const obj4 = ReanimatedRexport;
      const withDelayResult = obj4.withDelay(100, timing.withTiming(c9, { duration: 250 }));
      const obj6 = ReanimatedRexport;
      const withRepeatResult = obj2.withRepeat(
        obj3.withSequence(withDelayResult, obj6.withDelay(250, timing.withTiming(0, { duration: 500 }))),
        -1,
        false,
      );
      const obj8 = ReanimatedRexport;
      const obj9 = ReanimatedRexport;
      const obj10 = ReanimatedRexport;
      const withDelayResult1 = obj10.withDelay(350, timing.withTiming(c9, { duration: 250 }));
      const result2 = sharedValue.set(withRepeatResult);
      const result3 = sharedValue1.set(
        obj8.withRepeat(obj9.withSequence(withDelayResult1, timing.withTiming(0, { duration: 500 })), -1, false),
      );
      const withRepeatResult1 = obj8.withRepeat(
        obj9.withSequence(withDelayResult1, timing.withTiming(0, { duration: 500 })),
        -1,
        false,
      );
    } else {
      const result4 = set(c9);
      const result5 = sharedValue1.set(c9);
    }
  }, items1);
  let obj3 = stateFromStores(sharedValue1[7]);
  class T {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  T.__closure = { animatedInnerOpacity: sharedValue };
  T.__workletHash = 202297893401;
  T.__initData = __initData;
  const animatedStyle = stateFromStores(sharedValue1[7]).useAnimatedStyle(T);
  let obj4 = stateFromStores(sharedValue1[7]);
  const fn = function k() {
    return { opacity: sharedValue1.get() };
  };
  fn.__closure = { animatedOuterOpacity: sharedValue1 };
  fn.__workletHash = 13537504931930;
  fn.__initData = __initData2;
  let obj6 = { children: null };
  let obj7 = { style: null };
  const items2 = [tmp.border, style];
  obj7.style = items2;
  const animatedStyle1 = stateFromStores(sharedValue1[7]).useAnimatedStyle(fn);
  const items3 = [closure_6(View, obj7), ,];
  let obj8 = { style: null };
  const items4 = [tmp.pulse, style, animatedStyle];
  let obj9 = { transform: null };
  const items5 = [{ scale: 1.5 }];
  obj9.transform = items5;
  items4[3] = obj9;
  obj8.style = items4;
  items3[1] = closure_6(sharedValue(sharedValue1[7]).View, obj8);
  let obj10 = { style: null };
  const items6 = [tmp.pulse, style, animatedStyle1];
  let obj11 = { transform: null };
  const items7 = [{ scale: 2 }];
  obj11.transform = items7;
  items6[3] = obj11;
  obj10.style = items6;
  items3[2] = closure_6(sharedValue(sharedValue1[7]).View, obj10);
  obj6.children = items3;
  return closure_8(closure_7, obj6);
}
