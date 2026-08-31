// === Module 10471: ? ===

// Module 10471
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
let c3 = importAllResult;
({ Image: c4, View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = Object.freeze({ FLASH_TIME_PERCENT: 0.72, FLASH_DURATION_PERCENT: 0.08 });
let obj = { container: { overflow: "hidden" }, shineContainer: null, shine: null, shineInner: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[1] = obj;
let items = [{ rotate: "30deg" }];
obj[2] = { transform: items, width: 56, flex: 0, height: "300%", top: "-10%" };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
obj[3] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function ShineAnimationTsx1(){const{interpolate,progress}=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+\"%\"};}" };
let closure_11 = { code: "function ShineAnimationTsx2(){const{ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor}=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};}" };
const memoResult = importAllResult.memo(function ShineAnimation(arg0) {
  let sharedValue;
  importDefault = undefined;
  let hexResult1;
  ({ source, style } = arg0);
  const tmp = callback3();
  let obj = sharedValue(hexResult1[5]);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const effect = importAllResult.useEffect(() => {
    const obj = sharedValue(hexResult1[5]);
    const obj2 = sharedValue(hexResult1[5]);
    const result = sharedValue.set(obj.withDelay(400, obj2.withRepeat(sharedValue(hexResult1[6]).withTiming(1, { duration: 1000 }), -1, false)));
  }, items);
  obj1 = sharedValue(hexResult1[5]);
  class A {
    constructor() {
      obj = { width: null };
      obj2 = closure_0(closure_2[5]);
      obj[0] = "" + obj2.interpolate(closure_0.get(), [0, 1], [20, 160]) + "%";
      return obj;
    }
  }
  obj = { interpolate: sharedValue(hexResult1[5]).interpolate, progress: sharedValue };
  A.__closure = obj;
  A.__workletHash = 4072719467417;
  A.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(A);
  const tmp5 = importDefault(hexResult1[7]);
  const tmp5Result = importDefault(hexResult1[7])(importDefault(hexResult1[4]).unsafe_rawColors.BRAND_360);
  const hexResult = importDefault(hexResult1[7])(importDefault(hexResult1[4]).unsafe_rawColors.BRAND_360).alpha(0.2).hex();
  importDefault = hexResult;
  const alphaResult = importDefault(hexResult1[7])(importDefault(hexResult1[4]).unsafe_rawColors.BRAND_360).alpha(0.2);
  const tmp7 = importDefault(hexResult1[7]);
  const tmp7Result = importDefault(hexResult1[7])(importDefault(hexResult1[4]).unsafe_rawColors.BRAND_360);
  hexResult1 = importDefault(hexResult1[7])(importDefault(hexResult1[4]).unsafe_rawColors.BRAND_360).alpha(1).hex();
  const alphaResult1 = importDefault(hexResult1[7])(importDefault(hexResult1[4]).unsafe_rawColors.BRAND_360).alpha(1);
  class E {
    constructor() {
      FLASH_TIME_PERCENT = closure_1_8.FLASH_TIME_PERCENT;
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[5]);
      items = [0];
      items[1] = FLASH_TIME_PERCENT;
      items[2] = FLASH_TIME_PERCENT;
      items[3] = FLASH_TIME_PERCENT + closure_1_8.FLASH_DURATION_PERCENT;
      items[4] = 1;
      items1 = [, , , , ];
      items1[0] = closure_1;
      items1[1] = closure_1;
      items1[2] = closure_2;
      items1[3] = closure_2;
      items1[4] = closure_1;
      obj[0] = obj2.interpolateColor(closure_0.get(), items, items1);
      return obj;
    }
  }
  obj = { ShineAnimationConfig: closure_8, interpolateColor: sharedValue(hexResult1[5]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 };
  E.__closure = obj;
  E.__workletHash = 9845866779228;
  E.__initData = closure_11;
  const animatedStyle1 = sharedValue(hexResult1[5]).useAnimatedStyle(E);
  obj1 = { style: items1, children: null };
  items1 = [tmp.container, style, animatedStyle1];
  let obj2 = { style: tmp.shineContainer, children: null };
  const items2 = [callback(importDefault(hexResult1[5]).View, { style: animatedStyle }), ];
  const obj8 = sharedValue(hexResult1[5]);
  items2[1] = callback(closure_5, { style: tmp.shine, children: callback(closure_5, obj4) });
  obj2[1] = items2;
  const items3 = [callback2(closure_5, obj2), callback(closure_4, { source })];
  obj1[1] = items3;
  return callback2(importDefault(hexResult1[5]).View, obj1);
});
let result = require("set").fileFinishedImporting("components_native/premium/ShineAnimation.tsx");

export default memoResult;