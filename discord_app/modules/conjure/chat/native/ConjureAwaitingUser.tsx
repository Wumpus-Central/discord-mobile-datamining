// discord_app/modules/conjure/chat/native/ConjureAwaitingUser.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let set;

let rect;
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
let obj = { ring: rect };
rect = {
  position: "absolute",
  top: -PX_4,
  right: -PX_4,
  bottom: -PX_4,
  left: -PX_4,
  borderWidth: PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.md,
};
let closure_6 = createStyles.createStyles(obj);
const __initData = {
  code: "function ConjureAwaitingUserTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function ConjureAwaitingUserTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let stateFromStores;
      let tmp5;
      let tmp6;
      let useReducedMotion;
      let obj = stateFromStores(576);
      const cResult = obj.c(9);
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
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmpResult3 = stateFromStores(4612);
      const sharedValue = tmpResult3.useSharedValue(0);
      if (cResult[2] === sharedValue) {
        let tmp10;
        let tmp11;
        if (cResult[3] === stateFromStores) {
          tmp10 = cResult[4];
          tmp11 = cResult[5];
        }
        const effect = react.useEffect(tmp10, tmp11);
        const fn3 = function w() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        };
        let obj2 = { opacity: sharedValue };
        fn3.__closure = obj2;
        fn3.__workletHash = 8512415125100;
        fn3.__initData = __initData;
        const tmpResult4 = stateFromStores(4612);
        const animatedStyle = tmpResult4.useAnimatedStyle(fn3);
        if (cResult[6] === animatedStyle) {
          let tmp16;
          if (cResult[7] === tmp4.ring) {
            tmp16 = cResult[8];
          }
          return tmp16;
        }
        const items1 = [tmp4.ring, animatedStyle];
        const tmp19 = jsx(sharedValue(4612).View, { pointerEvents: "none", style: items1 });
        cResult[6] = animatedStyle;
        cResult[7] = tmp4.ring;
        cResult[8] = tmp19;
        tmp16 = tmp19;
      }
      const fn2 = function y() {
        let Easing;
        let fn;
        if (stateFromStores) {
          const obj2 = ReanimatedRexport;
          obj2.cancelAnimation(sharedValue);
          const result = sharedValue.set(0);
        } else {
          set = sharedValue.set;
          const withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          let obj = { duration: 1000, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
          const withTiming = timing.withTiming;
          timing;
          Easing = ReanimatedRexport.Easing;
          const result1 = set(withRepeat(withTiming(0.35, obj), -1, true));
          fn = () => {
            const obj = stateFromStores(dependencyMap[8]);
            return obj.cancelAnimation(sharedValue);
          };
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
    }
  : () => {
      let stateFromStores;
      let useReducedMotion;
      const tmp = closure_6();
      let obj = stateFromStores(504);
      const items = [AccessibilityStore];
      stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let obj2 = stateFromStores(4612);
      const sharedValue = obj2.useSharedValue(0);
      const items1 = [sharedValue, stateFromStores];
      const effect = react.useEffect(() => {
        let Easing;
        let fn;
        if (stateFromStores) {
          const obj2 = ReanimatedRexport;
          obj2.cancelAnimation(sharedValue);
          const result = sharedValue.set(0);
        } else {
          set = sharedValue.set;
          const withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          let obj = { duration: 1000, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
          const withTiming = timing.withTiming;
          timing;
          Easing = ReanimatedRexport.Easing;
          const result1 = set(withRepeat(withTiming(0.35, obj), -1, true));
          fn = () => {
            const obj = stateFromStores(dependencyMap[8]);
            return obj.cancelAnimation(sharedValue);
          };
        }
        return fn;
      }, items1);
      let fn = function p() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 4491518532559;
      fn.__initData = __initData2;
      const obj3 = stateFromStores(4612);
      const animatedStyle = obj3.useAnimatedStyle(fn);
      const items2 = [tmp.ring, animatedStyle];
      return jsx(sharedValue(4612).View, { pointerEvents: "none", style: items2 });
    };
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAwaitingUser.tsx");

export const ConjureAwaitingPulseRing = tmp2;
