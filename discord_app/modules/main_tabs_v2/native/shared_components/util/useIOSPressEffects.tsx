// === Module 5610: useIOSPressEffects ===

// Module 5610 (useIOSPressEffects)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

require = fn;
const SPRING_CONFIG = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
const __initData = { code: "function useIOSPressEffectsTsx1(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx");

export { SPRING_CONFIG };
export const useIOSPressEffects = function useIOSPressEffects(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let width;
  width = flag(width[1])().width;
  let __closure = require("ReanimatedRexport");
  const sharedValue = __closure.useSharedValue(1 - arg0 / width);
  let items = [width, arg0, sharedValue];
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(1 - closure_0 / width);
  }, items);
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
  let obj2 = require("ReanimatedRexport");
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[4]);
      obj2 = closure_0(closure_2[2]);
      obj3 = closure_4;
      value = closure_4.get();
      items = [1];
      items[1] = closure_3.get();
      tmp4 = closure_4;
      withSpringResult = obj.withSpring(obj2.interpolate(value, [0, 1], items), closure_4);
      if (c1) {
        obj = { transform: null, opacity: null };
        obj1 = { scale: null };
        obj1.scale = withSpringResult;
        items1 = [];
        items1[0] = obj1;
        obj.transform = items1;
        tmpResult = tmp(tmp2[4]);
        tmpResult1 = tmp(tmp2[2]);
        obj.opacity = tmpResult.withSpring(tmpResult1.interpolate(obj3.get(), [0, 1], [1, 0.5]), tmp4);
        obj2 = obj;
      } else {
        obj2 = { transform: null };
        obj3 = { scale: null };
        obj3.scale = withSpringResult;
        items2 = [];
        items2[0] = obj3;
        obj2.transform = items2;
      }
      return obj2;
    }
  }
  __closure = { withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, sharedPressState: sharedValue1, sharedWidthScale: sharedValue, SPRING_CONFIG: sharedValue1, withOpacity: flag };
  S.__closure = __closure;
  S.__workletHash = 1305898392151;
  S.__initData = __initData;
  __closure = { sharedPressState: sharedValue1, onPressOut: callback1, onPressIn: callback, pressableStyles: require("ReanimatedRexport").useAnimatedStyle(S) };
  return __closure;
};