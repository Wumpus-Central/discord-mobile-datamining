// === Module 10732: ShineAnimation ===

// Module 10732 (ShineAnimation)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ShineAnimationConfig = Object.freeze({ FLASH_TIME_PERCENT: 0.72, FLASH_DURATION_PERCENT: 0.08 });
fn(4560);
let obj = { container: { overflow: "hidden" }, shineContainer: null, shine: null, shineInner: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.shineContainer = obj;
let size = { transform: null, width: 56, flex: 0, height: "300%", top: "-10%" };
let items = [{ rotate: "30deg" }];
size.transform = items;
obj.shine = size;
const createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
obj.shineInner = createStyles;
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function ShineAnimationTsx1(){const{interpolate,progress}=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+\"%\"};}" };
const __initData2 = { code: "function ShineAnimationTsx2(){const{ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor}=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};}" };
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/ShineAnimation.tsx");

export default noop.memo(function ShineAnimation(arg0) {
  let sharedValue;
  importDefault = undefined;
  let hexResult1;
  ({ source, style } = arg0);
  const tmp = closure_9();
  let obj = sharedValue(hexResult1[5]);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const obj2 = ReanimatedRexport;
    const result = sharedValue.set(obj.withDelay(400, obj2.withRepeat(timing.withTiming(1, { duration: 1000 }), -1, false)));
  }, items);
  let obj1 = sharedValue(hexResult1[5]);
  class A {
    constructor() {
      obj = { width: null };
      obj2 = closure_0(closure_2[5]);
      obj.width = "" + obj2.interpolate(closure_0.get(), [0, 1], [20, 160]) + "%";
      return obj;
    }
  }
  obj = { interpolate: sharedValue(hexResult1[5]).interpolate, progress: sharedValue };
  A.__closure = obj;
  A.__workletHash = 4072719467417;
  A.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(A);
  const tmp5 = require("module_672");
  const tmp5Result = require("module_672")(require("native").unsafe_rawColors.BRAND_360);
  const hexResult = require("module_672")(require("native").unsafe_rawColors.BRAND_360).alpha(0.2).hex();
  importDefault = hexResult;
  const alphaResult = require("module_672")(require("native").unsafe_rawColors.BRAND_360).alpha(0.2);
  const tmp7 = require("module_672");
  const tmp7Result = require("module_672")(require("native").unsafe_rawColors.BRAND_360);
  hexResult1 = require("module_672")(require("native").unsafe_rawColors.BRAND_360).alpha(1).hex();
  const alphaResult1 = require("module_672")(require("native").unsafe_rawColors.BRAND_360).alpha(1);
  class E {
    constructor() {
      FLASH_TIME_PERCENT = closure_8.FLASH_TIME_PERCENT;
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[5]);
      items = [0];
      items[1] = FLASH_TIME_PERCENT;
      items[2] = FLASH_TIME_PERCENT;
      items[3] = FLASH_TIME_PERCENT + closure_8.FLASH_DURATION_PERCENT;
      items[4] = 1;
      items1 = [, , , , ];
      items1[0] = closure_1;
      items1[1] = closure_1;
      items1[2] = closure_2;
      items1[3] = closure_2;
      items1[4] = closure_1;
      obj.backgroundColor = obj2.interpolateColor(closure_0.get(), items, items1);
      return obj;
    }
  }
  obj = { ShineAnimationConfig, interpolateColor: sharedValue(hexResult1[5]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 };
  E.__closure = obj;
  E.__workletHash = 9845866779228;
  E.__initData = __initData2;
  const animatedStyle1 = sharedValue(hexResult1[5]).useAnimatedStyle(E);
  obj1 = { style: null, children: null };
  let items1 = [tmp.container, style, animatedStyle1];
  obj1.style = items1;
  let obj2 = { style: tmp.shineContainer, children: null };
  const items2 = [closure_6(require("ReanimatedRexport").View, { style: animatedStyle }), ];
  const obj3 = { style: tmp.shine, children: closure_6(closure_5, { style: tmp.shineInner }) };
  items2[1] = closure_6(closure_5, obj3);
  obj2.children = items2;
  const items3 = [closure_7(closure_5, obj2), closure_6(closure_4, { source })];
  obj1.children = items3;
  return closure_7(require("ReanimatedRexport").View, obj1);
});