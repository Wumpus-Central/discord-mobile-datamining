// discord_app/modules/forums/native/ForumPostPlaceholder.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
const jsx = Fragment.jsx;
let obj = { postPlaceholder: obj2 };
obj2 = { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
let c8 = 0.55;
let c9 = 1000;
const __initData = {
  code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}",
};
const __initData2 = {
  code: "function ForumPostPlaceholderTsx2(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}",
};
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let stateFromStores;
        let tmp13;
        let tmp5;
        let tmp6;
        let useReducedMotion;
        let obj = stateFromStores(576);
        const cResult = obj.c(8);
        const tmp4 = closure_7();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          const fn = function w() {
            return useReducedMotion.useReducedMotion;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp6 = fn;
          tmp5 = items;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = stateFromStores(504);
        stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              let Easing;
              let obj2;
              const obj = { timingConfig: obj2 };
              obj2 = {
                duration: 1000 + 500 * Math.random(),
                easing: Easing.inOut(stateFromStores(dependencyMap[9]).Easing.sin),
              };
              Easing = stateFromStores(dependencyMap[9]).Easing;
              return obj;
            }
          }
          cResult[2] = T;
        } else {
          class T {
            constructor() {
              let Easing;
              let obj2;
              const obj = { timingConfig: obj2 };
              obj2 = {
                duration: 1000 + 500 * Math.random(),
                easing: Easing.inOut(stateFromStores(dependencyMap[9]).Easing.sin),
              };
              Easing = stateFromStores(dependencyMap[9]).Easing;
              return obj;
            }
          }
        }
        const timingConfig = _slicedToArray(react.useState(T), 1)[0].timingConfig;
        const tmpResult2 = stateFromStores(4612);
        class I {
          constructor() {
            let tmp10;
            const obj = { opacity: null };
            if (stateFromStores) {
              obj.opacity = opacity;
              tmp10 = obj;
            } else {
              const withDelay = ReanimatedRexport.withDelay;
              ReanimatedRexport;
              const withRepeat = ReanimatedRexport.withRepeat;
              ReanimatedRexport;
              const withSequence = ReanimatedRexport.withSequence;
              ReanimatedRexport;
              const obj2 = timing;
              const withTimingResult = obj2.withTiming(opacity, timingConfig);
              const obj3 = timing;
              obj.opacity = withDelay(
                c9,
                withRepeat(withSequence(withTimingResult, obj3.withTiming(1, timingConfig)), -1, true),
              );
              tmp10 = obj;
            }
            return tmp10;
          }
        }
        let obj2 = {
          reducedMotion: stateFromStores,
          ROW_OPACITY_END: v055,
          withDelay: tmp(4612).withDelay,
          INITIAL_DELAY_MS,
          withRepeat: tmp(4612).withRepeat,
          withSequence: tmp(4612).withSequence,
          withTiming: tmp(4891).withTiming,
          timingConfig,
        };
        I.__closure = obj2;
        I.__workletHash = 9488742940898;
        I.__initData = __initData;
        const animatedStyle = tmpResult2.useAnimatedStyle(I);
        if (cResult[3] !== tmp4.postPlaceholder) {
          class T {
            constructor() {
              let Easing;
              let obj2;
              const obj = { timingConfig: obj2 };
              obj2 = {
                duration: 1000 + 500 * Math.random(),
                easing: Easing.inOut(stateFromStores(dependencyMap[9]).Easing.sin),
              };
              Easing = stateFromStores(dependencyMap[9]).Easing;
              return obj;
            }
          }
          cResult[3] = tmp4.postPlaceholder;
          cResult[4] = jsx(stateFromStores(5995).Card, { variant: "secondary", style: tmp4.postPlaceholder });
          const tmp12 = jsx(stateFromStores(5995).Card, { variant: "secondary", style: tmp4.postPlaceholder });
        } else {
          class T {
            constructor() {
              let Easing;
              let obj2;
              const obj = { timingConfig: obj2 };
              obj2 = {
                duration: 1000 + 500 * Math.random(),
                easing: Easing.inOut(stateFromStores(dependencyMap[9]).Easing.sin),
              };
              Easing = stateFromStores(dependencyMap[9]).Easing;
              return obj;
            }
          }
        }
        if (cResult[5] === animatedStyle) {
          class T {
            constructor() {
              let Easing;
              let obj2;
              const obj = { timingConfig: obj2 };
              obj2 = {
                duration: 1000 + 500 * Math.random(),
                easing: Easing.inOut(stateFromStores(dependencyMap[9]).Easing.sin),
              };
              Easing = stateFromStores(dependencyMap[9]).Easing;
              return obj;
            }
          }
          return tmp13;
        }
        tmp13 = jsx(timingConfig(4612).View, { style: animatedStyle, pointerEvents: "none", children: tmp11 });
        cResult[5] = animatedStyle;
        cResult[6] = tmp11;
        cResult[7] = tmp13;
      }
    : () => {
        let stateFromStores;
        let useReducedMotion;
        const tmp = closure_7();
        let obj = stateFromStores(504);
        const items = [AccessibilityStore];
        stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        const timingConfig = _slicedToArray(
          react.useState(() => {
            let Easing;
            let obj2;
            const obj = { timingConfig: obj2 };
            obj2 = {
              duration: 1000 + 500 * Math.random(),
              easing: Easing.inOut(stateFromStores(dependencyMap[9]).Easing.sin),
            };
            Easing = stateFromStores(dependencyMap[9]).Easing;
            return obj;
          }),
          1,
        )[0].timingConfig;
        let obj2 = stateFromStores(4612);
        const fn = function _() {
          let tmp10;
          const obj = { opacity: null };
          if (stateFromStores) {
            obj.opacity = opacity;
            tmp10 = obj;
          } else {
            const withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const withRepeat = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            const withSequence = ReanimatedRexport.withSequence;
            ReanimatedRexport;
            const obj2 = timing;
            const withTimingResult = obj2.withTiming(opacity, timingConfig);
            const obj3 = timing;
            obj.opacity = withDelay(
              c9,
              withRepeat(withSequence(withTimingResult, obj3.withTiming(1, timingConfig)), -1, true),
            );
            tmp10 = obj;
          }
          return tmp10;
        };
        let obj3 = {
          reducedMotion: stateFromStores,
          ROW_OPACITY_END: v055,
          withDelay: stateFromStores(4612).withDelay,
          INITIAL_DELAY_MS,
          withRepeat: stateFromStores(4612).withRepeat,
          withSequence: stateFromStores(4612).withSequence,
          withTiming: stateFromStores(4891).withTiming,
          timingConfig,
        };
        fn.__closure = obj3;
        fn.__workletHash = 13857107900577;
        fn.__initData = __initData2;
        const animatedStyle = obj2.useAnimatedStyle(fn);
        const View = timingConfig(4612).View;
        return (
          <View style={animatedStyle} pointerEvents="none">
            {null}
          </View>
        );
      },
);
const result = size.fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default memoResult;
