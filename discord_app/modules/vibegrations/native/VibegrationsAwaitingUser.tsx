// discord_app/modules/vibegrations/native/VibegrationsAwaitingUser.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(4890);
let obj2 = { ring: null };
const rect = {
  position: "absolute",
  top: -PX_4,
  right: -PX_4,
  bottom: -PX_4,
  left: -PX_4,
  borderWidth: PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.md,
};
obj2.ring = rect;
let closure_6 = createStyles.createStyles(obj2);
const __initData = {
  code: "function VibegrationsAwaitingUserTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function VibegrationsAwaitingUserTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAwaitingUser.tsx");

export const VibegrationsAwaitingPulseRing = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(9);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        let fn = function l() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
      const tmpResult = stateFromStores(504);
      const sharedValue = stateFromStores(4612).useSharedValue(0);
      if (cResult[2] === sharedValue) {
        if (cResult[3] === stateFromStores) {
          let tmp10 = cResult[4];
          let tmp11 = cResult[5];
        }
        const effect = noop.useEffect(tmp10, tmp11);
        const fn3 = function v() {
          return { opacity: sharedValue.get() };
        };
        let obj2 = { opacity: sharedValue };
        fn3.__closure = obj2;
        fn3.__workletHash = 7009775530053;
        fn3.__initData = __initData;
        const animatedStyle = tmp(4612).useAnimatedStyle(fn3);
        if (cResult[6] === animatedStyle) {
          if (cResult[7] === tmp4.ring) {
            let tmp16 = cResult[8];
          }
          return tmp16;
        }
        let obj3 = { pointerEvents: "none", style: null };
        const items1 = [tmp4.ring, animatedStyle];
        obj3.style = items1;
        const tmp19 = jsx(sharedValue(4612).View, { pointerEvents: "none", style: null });
        cResult[6] = animatedStyle;
        cResult[7] = tmp4.ring;
        cResult[8] = tmp19;
        tmp16 = tmp19;
        const tmpResult4 = tmp(4612);
      }
      const fn2 = function y() {
        if (stateFromStores) {
          ReanimatedRexport.cancelAnimation(sharedValue);
          const result = sharedValue.set(0);
        } else {
          const obj = ReanimatedRexport;
          const obj3 = { duration: 1000, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
          const result1 = sharedValue.set(obj.withRepeat(timing.withTiming(0.35, obj3), -1, true));
          const fn = () => stateFromStores(dependencyMap[8]).cancelAnimation(sharedValue);
        }
        return fn;
      };
      const items2 = [sharedValue, stateFromStores];
      cResult[2] = sharedValue;
      cResult[3] = stateFromStores;
      cResult[4] = fn2;
      cResult[5] = items2;
      tmp11 = items2;
      tmp10 = fn2;
      const tmpResult3 = stateFromStores(4612);
    }
  : () => {
      const tmp = closure_6();
      const items = [AccessibilityStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let obj = stateFromStores(504);
      const sharedValue = stateFromStores(4612).useSharedValue(0);
      const items1 = [sharedValue, stateFromStores];
      const effect = noop.useEffect(() => {
        if (stateFromStores) {
          ReanimatedRexport.cancelAnimation(sharedValue);
          const result = sharedValue.set(0);
        } else {
          const obj = ReanimatedRexport;
          const obj3 = { duration: 1000, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
          const result1 = sharedValue.set(obj.withRepeat(timing.withTiming(0.35, obj3), -1, true));
          const fn = () => stateFromStores(dependencyMap[8]).cancelAnimation(sharedValue);
        }
        return fn;
      }, items1);
      let obj2 = stateFromStores(4612);
      let fn = function p() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 15488190280262;
      fn.__initData = __initData2;
      const animatedStyle = stateFromStores(4612).useAnimatedStyle(fn);
      let obj4 = { pointerEvents: "none", style: null };
      const items2 = [tmp.ring, animatedStyle];
      obj4.style = items2;
      return jsx(sharedValue(4612).View, { pointerEvents: "none", style: null });
    };
