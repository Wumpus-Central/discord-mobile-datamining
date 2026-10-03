// === Module 5998: useIOSPressEffects ===

// Module 5998 (useIOSPressEffects)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const SPRING_CONFIG = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
const __initData = { code: "function useIOSPressEffectsTsx1(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}" };
const __initData2 = { code: "function useIOSPressEffectsTsx2(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx");

export { SPRING_CONFIG };
export const useIOSPressEffects = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(14);
  importDefault = tmp4;
  width = require("useWindowDimensions")().width;
  let obj = require("c");
  const sharedValue = require("ReanimatedRexport").useSharedValue(1 - arg0 / width);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === width) {
      if (cResult[2] === arg0) {
        let tmp6 = cResult[3];
        let tmp7 = cResult[4];
      }
      const effect = sharedValue.useEffect(tmp6, tmp7);
      const sharedValue1 = tmp(tmp2[4]).useSharedValue(0);
      if (cResult[5] !== sharedValue1) {
        const fn2 = function _() {
          let isIOSResult = PlatformUtils.isIOS();
          if (isIOSResult) {
            isIOSResult = sharedValue1.set(1);
          }
          return isIOSResult;
        };
        cResult[5] = sharedValue1;
        cResult[6] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== sharedValue1) {
        class P {
          constructor() {
            obj = closure_0(closure_2[5]);
            isIOSResult = obj.isIOS();
            if (isIOSResult) {
              tmp2 = closure_4;
              num = 0;
              isIOSResult = closure_4.set(0);
            }
            return isIOSResult;
          }
        }
        cResult[7] = sharedValue1;
        cResult[8] = P;
      } else {
        class P {
          constructor() {
            obj = closure_0(closure_2[5]);
            isIOSResult = obj.isIOS();
            if (isIOSResult) {
              tmp2 = closure_4;
              num = 0;
              isIOSResult = closure_4.set(0);
            }
            return isIOSResult;
          }
        }
      }
      const tmpResult3 = tmp(tmp2[4]);
      const fn3 = function w() {
        const obj = spring;
        value = sharedValue1.get();
        const items = [1, sharedValue.get()];
        const withSpringResult = obj.withSpring(ReanimatedRexport.interpolate(value, [0, 1], items), obj);
        if (closure_1) {
          const obj4 = { transform: null, opacity: null };
          const obj5 = { scale: withSpringResult };
          const items1 = [obj5];
          obj4.transform = items1;
          const tmpResult = spring;
          obj4.opacity = tmpResult.withSpring(ReanimatedRexport.interpolate(sharedValue1.get(), [0, 1], [1, 0.5]), obj);
          let obj6 = obj4;
          const tmpResult2 = ReanimatedRexport;
        } else {
          obj6 = { transform: null };
          const obj7 = { scale: withSpringResult };
          const items2 = [obj7];
          obj6.transform = items2;
        }
        return obj6;
      };
      const obj2 = { withSpring: tmp(tmp2[6]).withSpring, interpolate: tmp(tmp2[4]).interpolate, sharedPressState: sharedValue1, sharedWidthScale: sharedValue, SPRING_CONFIG: sharedValue1, withOpacity: tmp4 };
      fn3.__closure = obj2;
      fn3.__workletHash = 1305898392151;
      fn3.__initData = __initData;
      const animatedStyle = tmp(tmp2[4]).useAnimatedStyle(fn3);
      if (cResult[9] === tmp11) {
        class P {
          constructor() {
            obj = closure_0(closure_2[5]);
            isIOSResult = obj.isIOS();
            if (isIOSResult) {
              tmp2 = closure_4;
              num = 0;
              isIOSResult = closure_4.set(0);
            }
            return isIOSResult;
          }
        }
      }
      const obj3 = { sharedPressState: sharedValue1, onPressOut: P, onPressIn: tmp11, pressableStyles: animatedStyle };
      cResult[9] = tmp11;
      cResult[10] = P;
      cResult[11] = animatedStyle;
      cResult[12] = sharedValue1;
      cResult[13] = obj3;
      const tmpResult4 = tmp(tmp2[4]);
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
  let tmpResult = require("ReanimatedRexport");
}) : ((arg0) => {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let width;
  width = flag(width[3])().width;
  const sharedValue = require("ReanimatedRexport").useSharedValue(1 - arg0 / width);
  let items = [width, arg0, sharedValue];
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(1 - closure_0 / width);
  }, items);
  let obj = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  let items1 = [sharedValue1];
  let items2 = [sharedValue1];
  const callback = sharedValue.useCallback(() => {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = sharedValue1.set(1);
    }
    return isIOSResult;
  }, items1);
  const callback1 = sharedValue.useCallback(() => {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = sharedValue1.set(0);
    }
    return isIOSResult;
  }, items2);
  const obj2 = require("ReanimatedRexport");
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[6]);
      obj2 = closure_0(closure_2[4]);
      obj3 = closure_4;
      value = closure_4.get();
      items = [1];
      items[1] = closure_3.get();
      tmp4 = closure_4;
      withSpringResult = obj.withSpring(obj2.interpolate(value, [0, 1], items), closure_4);
      if (c1) {
        obj1 = { transform: null, opacity: null };
        obj10 = { scale: null };
        obj10.scale = withSpringResult;
        items1 = [];
        items1[0] = obj10;
        obj1.transform = items1;
        tmpResult = tmp(tmp2[6]);
        tmpResult1 = tmp(tmp2[4]);
        obj1.opacity = tmpResult.withSpring(tmpResult1.interpolate(obj3.get(), [0, 1], [1, 0.5]), tmp4);
        obj11 = obj1;
      } else {
        obj11 = { transform: null };
        obj12 = { scale: null };
        obj12.scale = withSpringResult;
        items2 = [];
        items2[0] = obj12;
        obj11.transform = items2;
      }
      return obj11;
    }
  }
  const obj3 = require("ReanimatedRexport");
  S.__closure = { withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, sharedPressState: sharedValue1, sharedWidthScale: sharedValue, SPRING_CONFIG: sharedValue1, withOpacity: flag };
  S.__workletHash = 1415647611988;
  S.__initData = __initData2;
  let obj4 = { withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, sharedPressState: sharedValue1, sharedWidthScale: sharedValue, SPRING_CONFIG: sharedValue1, withOpacity: flag };
  return { sharedPressState: sharedValue1, onPressOut: callback1, onPressIn: callback, pressableStyles: obj3.useAnimatedStyle(S) };
});