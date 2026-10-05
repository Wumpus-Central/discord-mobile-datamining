// discord_app/modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

const SPRING_CONFIG = {
  overshootClamping: true,
  damping: 35,
  stiffness: 450,
  mass: 0.5,
  restDisplacementThreshold: 0.001,
};
const __initData = {
  code: "function useIOSPressEffectsTsx1(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}",
};
const __initData2 = {
  code: "function useIOSPressEffectsTsx2(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let width;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(14);
      const tmp4 = undefined !== arg1 && arg1;
      importDefault = tmp4;
      width = require("useWindowDimensions")().width;
      const tmpResult = tmp(tmp2[4]);
      const sharedValue = tmpResult.useSharedValue(1 - arg0 / width);
      if (cResult[0] === sharedValue) {
        if (cResult[1] === width) {
          let tmp6;
          let tmp7;
          let tmp11;
          if (cResult[2] === arg0) {
            tmp6 = cResult[3];
            tmp7 = cResult[4];
          }
          const effect = sharedValue.useEffect(tmp6, tmp7);
          const tmpResult3 = require("ReanimatedRexport");
          const sharedValue1 = tmpResult3.useSharedValue(0);
          if (cResult[5] !== sharedValue1) {
            const fn2 = function _() {
              const obj = PlatformUtils;
              const isIOSResult = obj.isIOS() && sharedValue1.set(1);
              return isIOSResult;
            };
            cResult[5] = sharedValue1;
            cResult[6] = fn2;
            tmp11 = fn2;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] !== sharedValue1) {
            class P {
              constructor() {
                const obj = PlatformUtils;
                const isIOSResult = obj.isIOS() && sharedValue1.set(0);
                return isIOSResult;
              }
            }
            cResult[7] = sharedValue1;
            cResult[8] = P;
          } else {
            class P {
              constructor() {
                const obj = PlatformUtils;
                const isIOSResult = obj.isIOS() && sharedValue1.set(0);
                return isIOSResult;
              }
            }
          }
          const fn3 = function w() {
            let items1;
            let items2;
            let obj4;
            let tmpResult2;
            let withSpring2;
            const withSpring = spring.withSpring;
            spring;
            const interpolate = ReanimatedRexport.interpolate;
            ReanimatedRexport;
            const value = sharedValue1.get();
            const items = [1, sharedValue.get()];
            const withSpringResult = withSpring(interpolate(value, [0, 1], items), sharedValue1);
            if (closure_1) {
              const obj2 = {
                transform: items1,
                opacity: withSpring2(tmpResult2.interpolate(sharedValue1.get(), [0, 1], [1, 0.5]), sharedValue1),
              };
              items1 = [{ scale: withSpringResult }];
              const obj3 = { scale: withSpringResult };
              withSpring2 = spring.withSpring;
              spring;
              obj4 = obj2;
              tmpResult2 = ReanimatedRexport;
            } else {
              obj4 = { transform: items2 };
              items2 = [{ scale: withSpringResult }];
              const obj5 = { scale: withSpringResult };
            }
            return obj4;
          };
          let obj2 = {
            withSpring: require("spring").withSpring,
            interpolate: require("ReanimatedRexport").interpolate,
            sharedPressState: sharedValue1,
            sharedWidthScale: sharedValue,
            SPRING_CONFIG: sharedValue1,
            withOpacity: tmp4,
          };
          const useAnimatedStyle = require("ReanimatedRexport").useAnimatedStyle;
          require("ReanimatedRexport");
          fn3.__closure = obj2;
          fn3.__workletHash = 1305898392151;
          fn3.__initData = __initData;
          const animatedStyle = useAnimatedStyle(fn3);
          if (cResult[9] === tmp11) {
            class P {
              constructor() {
                const obj = PlatformUtils;
                const isIOSResult = obj.isIOS() && sharedValue1.set(0);
                return isIOSResult;
              }
            }
          }
          let obj3 = {
            sharedPressState: sharedValue1,
            onPressOut: P,
            onPressIn: tmp11,
            pressableStyles: animatedStyle,
          };
          cResult[9] = tmp11;
          cResult[10] = P;
          cResult[11] = animatedStyle;
          cResult[12] = sharedValue1;
          cResult[13] = obj3;
        }
      }
      const fn = function o() {
        const result = sharedValue.set(1 - closure_0 / width);
      };
      let items = [width, arg0, sharedValue];
      cResult[0] = sharedValue;
      cResult[1] = width;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items;
      tmp7 = items;
      tmp6 = fn;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      let width;
      width = flag(width[3])().width;
      let obj = require("ReanimatedRexport");
      const sharedValue = obj.useSharedValue(1 - arg0 / width);
      let items = [width, arg0, sharedValue];
      const effect = sharedValue.useEffect(() => {
        const result = sharedValue.set(1 - closure_0 / width);
      }, items);
      let obj2 = require("ReanimatedRexport");
      const sharedValue1 = obj2.useSharedValue(0);
      let items1 = [sharedValue1];
      let items2 = [sharedValue1];
      const callback = sharedValue.useCallback(() => {
        const obj = PlatformUtils;
        const isIOSResult = obj.isIOS() && sharedValue1.set(1);
        return isIOSResult;
      }, items1);
      const callback1 = sharedValue.useCallback(() => {
        const obj = PlatformUtils;
        const isIOSResult = obj.isIOS() && sharedValue1.set(0);
        return isIOSResult;
      }, items2);
      let obj3 = require("ReanimatedRexport");
      class S {
        constructor() {
          let items1;
          let items2;
          let obj4;
          let tmpResult2;
          let withSpring2;
          const withSpring = spring.withSpring;
          spring;
          const interpolate = ReanimatedRexport.interpolate;
          ReanimatedRexport;
          const value = sharedValue1.get();
          const items = [1, sharedValue.get()];
          const withSpringResult = withSpring(interpolate(value, [0, 1], items), sharedValue1);
          if (flag) {
            const obj2 = {
              transform: items1,
              opacity: withSpring2(tmpResult2.interpolate(sharedValue1.get(), [0, 1], [1, 0.5]), sharedValue1),
            };
            items1 = [{ scale: withSpringResult }];
            const obj3 = { scale: withSpringResult };
            withSpring2 = spring.withSpring;
            spring;
            obj4 = obj2;
            tmpResult2 = ReanimatedRexport;
          } else {
            obj4 = { transform: items2 };
            items2 = [{ scale: withSpringResult }];
            const obj5 = { scale: withSpringResult };
          }
          return obj4;
        }
      }
      let obj4 = {
        withSpring: require("spring").withSpring,
        interpolate: require("ReanimatedRexport").interpolate,
        sharedPressState: sharedValue1,
        sharedWidthScale: sharedValue,
        SPRING_CONFIG: sharedValue1,
        withOpacity: flag,
      };
      S.__closure = obj4;
      S.__workletHash = 1415647611988;
      S.__initData = __initData2;
      let obj5 = {
        sharedPressState: sharedValue1,
        onPressOut: callback1,
        onPressIn: callback,
        pressableStyles: obj3.useAnimatedStyle(S),
      };
      return obj5;
    };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx");

export { SPRING_CONFIG };
export const useIOSPressEffects = tmp2;
