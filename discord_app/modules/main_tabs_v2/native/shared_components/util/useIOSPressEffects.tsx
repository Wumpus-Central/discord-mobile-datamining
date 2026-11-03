// === Module 7108: useIOSPressEffects ===

// Module 7108 (useIOSPressEffects)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const SPRING_CONFIG = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5 };
let closure_5 = { code: "(function useIOSPressEffectsTsx1(){let[withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity]=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx");

export { SPRING_CONFIG };
export function useIOSPressEffects(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  noop = undefined;
  const width = useWindowDimensionsDefault().width;
  const sharedValue = require("module_1652").useSharedValue(1 - arg0 / width);
  items = [width, arg0, sharedValue];
  const effect = noop.useEffect(() => {
    const result = _undefined3.set(1 - c0 / c1);
  }, items);
  const obj = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  noop = sharedValue1;
  let items1 = [sharedValue1];
  let items2 = [sharedValue1];
  const callback = noop.useCallback(() => {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = _undefined4.set(1);
    }
    return isIOSResult;
  }, items1);
  const callback1 = noop.useCallback(() => {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = _undefined4.set(0);
    }
    return isIOSResult;
  }, items2);
  let obj2 = require("module_1652");
  const items3 = [c5, require("spring/spring").withSpring, require("module_1652").interpolate, sharedValue1, sharedValue, c4, flag];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items3;
  function useIOSPressEffectsTsx1() {
    value = _undefined3.get();
    items = [1, _undefined4.get()];
    const tmp5 = _undefined(_undefined2(value, [0, 1], items), c4);
    if (c5) {
      const obj2 = { transform: null, opacity: null };
      const obj3 = { scale: tmp5 };
      const items1 = [obj3];
      obj2.transform = items1;
      obj2.opacity = _undefined(_undefined2(_undefined3.get(), [0, 1], [1, 0.5]), c4);
      let obj4 = obj2;
    } else {
      obj4 = { transform: null };
      const obj5 = { scale: tmp5 };
      const items2 = [obj5];
      obj4.transform = items2;
    }
    return obj4;
  }
  const items4 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  useIOSPressEffectsTsx1.__closure = items4;
  useIOSPressEffectsTsx1.__workletHash = 16251534857998;
  useIOSPressEffectsTsx1.__initData = tmp6;
  let obj3 = require("module_1652");
  return { sharedPressState: sharedValue1, onPressOut: callback1, onPressIn: callback, pressableStyles: require("module_1652").useAnimatedStyle(useIOSPressEffectsTsx1) };
}