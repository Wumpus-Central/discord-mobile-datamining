// === Module 10463: ShineAnimation ===

// Module 10463 (ShineAnimation)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let items;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ShineAnimationConfig = Object.freeze({ FLASH_TIME_PERCENT: 0.72, FLASH_DURATION_PERCENT: 0.08 });
let createStyles = createStyles_mod;
let obj = { container: { overflow: "hidden" }, shineContainer: obj2, shine: size, shineInner: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { transform: items, width: 56, flex: 0, height: "300%", top: "-10%" };
items = [{ rotate: "30deg" }];
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
let closure_9 = createStyles(obj);
const __initData = { code: "function ShineAnimationTsx1(){const{interpolate,progress}=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+\"%\"};}" };
const __initData2 = { code: "function ShineAnimationTsx2(){const{ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor}=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};}" };
const __initData3 = { code: "function ShineAnimationTsx3(){const{interpolate,progress}=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+\"%\"};}" };
const __initData4 = { code: "function ShineAnimationTsx4(){const{ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor}=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let hexResult1;
  let items1;
  let items2;
  let sharedValue;
  let source;
  let style;
  let tmp6;
  let tmp7;
  const tmp = sharedValue;
  const tmp2 = hexResult1;
  let obj = sharedValue(hexResult1[6]);
  const cResult = obj.c(24);
  ({ source, style } = arg0);
  const tmp4 = closure_9();
  let obj2 = sharedValue(hexResult1[7]);
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function s() {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj = timing;
      const result = set(withDelay(400, withRepeat(obj.withTiming(1, { duration: 1000 }), -1, false)));
    };
    let items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  const tmpResult = tmp(tmp2[7]);
  class R {
    constructor() {
      let obj2;
      const obj = { width: "" + obj2.interpolate(sharedValue.get(), [0, 1], [20, 160]) + "%" };
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  R.__closure = { interpolate: tmp(tmp2[7]).interpolate, progress: sharedValue };
  R.__workletHash = 4072719467417;
  R.__initData = __initData;
  ({ interpolate: tmp(tmp2[7]).interpolate, progress: sharedValue });
  const animatedStyle = tmpResult.useAnimatedStyle(R);
  const tmp11 = require("module_683");
  const tmp11Result = tmp11(require("native").unsafe_rawColors.BRAND_360);
  const alphaResult = tmp11Result.alpha(0.2);
  const hexResult = alphaResult.hex();
  importDefault = hexResult;
  const tmp13 = require("module_683");
  const tmp13Result = tmp13(require("native").unsafe_rawColors.BRAND_360);
  const alphaResult1 = tmp13Result.alpha(1);
  hexResult1 = alphaResult1.hex();
  const fn2 = function y() {
    let items;
    let items1;
    let obj2;
    const FLASH_TIME_PERCENT = constants.FLASH_TIME_PERCENT;
    const FLASH_DURATION_PERCENT = constants.FLASH_DURATION_PERCENT;
    const obj = { backgroundColor: obj2.interpolateColor(sharedValue.get(), items, items1) };
    items = [0, FLASH_TIME_PERCENT, FLASH_TIME_PERCENT, FLASH_TIME_PERCENT + FLASH_DURATION_PERCENT, 1];
    items1 = [importDefault, importDefault, hexResult1, hexResult1, importDefault];
    obj2 = ReanimatedRexport;
    return obj;
  };
  const tmpResult2 = tmp(tmp2[7]);
  fn2.__closure = { ShineAnimationConfig, interpolateColor: tmp(tmp2[7]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 };
  fn2.__workletHash = 9845866779228;
  fn2.__initData = __initData2;
  ({ ShineAnimationConfig, interpolateColor: tmp(tmp2[7]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 });
  const animatedStyle1 = tmpResult2.useAnimatedStyle(fn2);
  if (cResult[3] === animatedStyle1) {
    if (cResult[4] === style) {
      let tmp16;
      let tmp17;
      let tmp20;
      if (cResult[5] === tmp4.container) {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== animatedStyle) {
        const obj5 = { style: animatedStyle };
        const tmp19 = closure_6(require("ReanimatedRexport").View, obj5);
        cResult[7] = animatedStyle;
        cResult[8] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] !== tmp4.shineInner) {
        const obj6 = { style: tmp4.shineInner };
        const tmp23 = closure_6(closure_5, obj6);
        cResult[9] = tmp4.shineInner;
        cResult[10] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] === tmp4.shine) {
        let tmp24;
        if (cResult[12] === tmp20) {
          tmp24 = cResult[13];
        }
        if (cResult[14] === tmp4.shineContainer) {
          if (cResult[15] === tmp17) {
            let tmp32;
            if (cResult[18] !== source) {
              const obj7 = { source };
              const tmp35 = closure_6(closure_4, obj7);
              cResult[18] = source;
              cResult[19] = tmp35;
              tmp32 = tmp35;
            } else {
              tmp32 = cResult[19];
            }
            if (cResult[20] === tmp16) {
              if (cResult[21] === tmp28) {
                let tmp36;
                if (cResult[22] === tmp32) {
                  tmp36 = cResult[23];
                }
                return tmp36;
              }
            }
            const obj8 = { style: tmp16, children: items1 };
            items1 = [tmp28, tmp32];
            cResult[20] = tmp16;
            cResult[21] = tmp28;
            cResult[22] = tmp32;
            cResult[23] = closure_7(require("ReanimatedRexport").View, obj8);
            closure_7(require("ReanimatedRexport").View, obj8);
            class R {
              constructor() {
                let obj2;
                const obj = { width: "" + obj2.interpolate(sharedValue.get(), [0, 1], [20, 160]) + "%" };
                obj2 = ReanimatedRexport;
                return obj;
              }
            }
          }
        }
        const obj9 = { style: tmp4.shineContainer, children: items2 };
        items2 = [tmp17, tmp24];
        cResult[14] = tmp4.shineContainer;
        cResult[15] = tmp17;
        cResult[16] = tmp24;
        cResult[17] = closure_7(closure_5, obj9);
        closure_7(closure_5, obj9);
        class R {
          constructor() {
            let obj2;
            const obj = { width: "" + obj2.interpolate(sharedValue.get(), [0, 1], [20, 160]) + "%" };
            obj2 = ReanimatedRexport;
            return obj;
          }
        }
      }
      const obj10 = { style: tmp4.shine, children: tmp20 };
      const tmp27 = closure_6(closure_5, obj10);
      cResult[11] = tmp4.shine;
      cResult[12] = tmp20;
      cResult[13] = tmp27;
      tmp24 = tmp27;
    }
  }
  const items3 = [tmp4.container, style, animatedStyle1];
  cResult[3] = animatedStyle1;
  cResult[4] = style;
  cResult[5] = tmp4.container;
  cResult[6] = items3;
  tmp16 = items3;
}) : ((arg0) => {
  let c1;
  let items1;
  let items2;
  let items3;
  let obj9;
  let source;
  let style;
  let sharedValue;
  importDefault = undefined;
  let hexResult1;
  ({ source, style } = arg0);
  const tmp = closure_9();
  let obj = sharedValue(hexResult1[7]);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withDelay(400, withRepeat(obj.withTiming(1, { duration: 1000 }), -1, false)));
  }, items);
  let obj2 = sharedValue(hexResult1[7]);
  const fn = function p() {
    let obj2;
    const obj = { width: "" + obj2.interpolate(sharedValue.get(), [0, 1], [20, 160]) + "%" };
    obj2 = ReanimatedRexport;
    return obj;
  };
  fn.__closure = { interpolate: sharedValue(hexResult1[7]).interpolate, progress: sharedValue };
  fn.__workletHash = 20406807323;
  fn.__initData = __initData3;
  ({ interpolate: sharedValue(hexResult1[7]).interpolate, progress: sharedValue });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const tmp5 = require("module_683");
  const tmp5Result = tmp5(require("native").unsafe_rawColors.BRAND_360);
  const alphaResult = tmp5Result.alpha(0.2);
  const hexResult = alphaResult.hex();
  importDefault = hexResult;
  const tmp7 = require("module_683");
  const tmp7Result = tmp7(require("native").unsafe_rawColors.BRAND_360);
  const alphaResult1 = tmp7Result.alpha(1);
  hexResult1 = alphaResult1.hex();
  const obj8 = sharedValue(hexResult1[7]);
  class E {
    constructor() {
      let items;
      let items1;
      let obj2;
      const FLASH_TIME_PERCENT = constants.FLASH_TIME_PERCENT;
      const FLASH_DURATION_PERCENT = constants.FLASH_DURATION_PERCENT;
      const obj = { backgroundColor: obj2.interpolateColor(sharedValue.get(), items, items1) };
      items = [0, FLASH_TIME_PERCENT, FLASH_TIME_PERCENT, FLASH_TIME_PERCENT + FLASH_DURATION_PERCENT, 1];
      items1 = [c1, c1, hexResult1, hexResult1, c1];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  E.__closure = { ShineAnimationConfig, interpolateColor: sharedValue(hexResult1[7]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 };
  E.__workletHash = 13660181424090;
  E.__initData = __initData4;
  ({ ShineAnimationConfig, interpolateColor: sharedValue(hexResult1[7]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 });
  const animatedStyle1 = obj8.useAnimatedStyle(E);
  const obj5 = { style: items1, children: items3 };
  items1 = [tmp.container, style, animatedStyle1];
  const obj6 = { style: tmp.shineContainer, children: items2 };
  const View = require("ReanimatedRexport").View;
  items2 = [closure_6(require("ReanimatedRexport").View, { style: animatedStyle }), ];
  const obj7 = { style: tmp.shine, children: closure_6(closure_5, obj9) };
  obj9 = { style: tmp.shineInner };
  items2[1] = closure_6(closure_5, obj7);
  items3 = [closure_7(closure_5, obj6), closure_6(closure_4, { source })];
  return closure_7(View, obj5);
}));
size = size_mod;
let result = size.fileFinishedImporting("components_native/premium/ShineAnimation.tsx");

export default memoResult;