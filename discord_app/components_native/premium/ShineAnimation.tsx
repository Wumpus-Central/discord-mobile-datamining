// discord_app/components_native/premium/ShineAnimation.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ShineAnimationConfig = Object.freeze({ FLASH_TIME_PERCENT: 0.72, FLASH_DURATION_PERCENT: 0.08 });
const createStyles = fn(5090);
let obj = { container: { overflow: "hidden" }, shineContainer: null, shine: null, shineInner: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.shineContainer = {};
let size = { transform: null, width: 56, flex: 0, height: "300%", top: "-10%" };
let items = [{ rotate: "30deg" }];
size.transform = items;
obj.shine = size;
obj.shineInner = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
let closure_9 = createStyles.createStyles(obj);
const __initData = {
  code: 'function ShineAnimationTsx1(){const{interpolate,progress}=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+"%"};}',
};
const __initData2 = {
  code: "function ShineAnimationTsx2(){const{ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor}=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};}",
};
const __initData3 = {
  code: 'function ShineAnimationTsx3(){const{interpolate,progress}=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+"%"};}',
};
const __initData4 = {
  code: "function ShineAnimationTsx4(){const{ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor}=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/ShineAnimation.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ShineAnimation(arg0) {
        const cResult = sharedValue(hexResult1[6]).c(24);
        ({ source, style } = arg0);
        const tmp4 = closure_9();
        let obj = sharedValue(hexResult1[6]);
        sharedValue = sharedValue(hexResult1[7]).useSharedValue(0);
        if (cResult[0] !== sharedValue) {
          const fn = function s() {
            const obj = ReanimatedRexport;
            const obj2 = ReanimatedRexport;
            const result = sharedValue.set(
              obj.withDelay(400, obj2.withRepeat(timing.withTiming(1, { duration: 1000 }), -1, false)),
            );
          };
          let items = [sharedValue];
          cResult[0] = sharedValue;
          cResult[1] = fn;
          cResult[2] = items;
          let tmp7 = items;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[1];
          tmp7 = cResult[2];
        }
        const effect = noop.useEffect(tmp6, tmp7);
        let obj2 = sharedValue(hexResult1[7]);
        class R {
          constructor() {
            obj = { width: null };
            obj2 = closure_0(closure_2[7]);
            obj.width = "" + obj2.interpolate(closure_0.get(), [0, 1], [20, 160]) + "%";
            return obj;
          }
        }
        const tmpResult = sharedValue(hexResult1[7]);
        R.__closure = { interpolate: sharedValue(hexResult1[7]).interpolate, progress: sharedValue };
        R.__workletHash = 4072719467417;
        R.__initData = __initData;
        const animatedStyle = tmpResult.useAnimatedStyle(R);
        const obj3 = { interpolate: sharedValue(hexResult1[7]).interpolate, progress: sharedValue };
        const tmp11 = require("../../../_runtime/metro/00683__.js");
        const tmp11Result = require("../../../_runtime/metro/00683__.js")(require("native").unsafe_rawColors.BRAND_360);
        const hexResult = require("../../../_runtime/metro/00683__.js")(require("native").unsafe_rawColors.BRAND_360)
          .alpha(0.2)
          .hex();
        importDefault = hexResult;
        const alphaResult = require("../../../_runtime/metro/00683__.js")(
          require("native").unsafe_rawColors.BRAND_360,
        ).alpha(0.2);
        const tmp13 = require("../../../_runtime/metro/00683__.js");
        const tmp13Result = require("../../../_runtime/metro/00683__.js")(require("native").unsafe_rawColors.BRAND_360);
        hexResult1 = require("../../../_runtime/metro/00683__.js")(require("native").unsafe_rawColors.BRAND_360)
          .alpha(1)
          .hex();
        const alphaResult1 = require("../../../_runtime/metro/00683__.js")(
          require("native").unsafe_rawColors.BRAND_360,
        ).alpha(1);
        const fn2 = function y() {
          const FLASH_TIME_PERCENT = constants.FLASH_TIME_PERCENT;
          const obj = { backgroundColor: null };
          const items = [
            0,
            FLASH_TIME_PERCENT,
            FLASH_TIME_PERCENT,
            FLASH_TIME_PERCENT + constants.FLASH_DURATION_PERCENT,
            1,
          ];
          const items1 = [hexResult, hexResult, hexResult1, hexResult1, hexResult];
          obj.backgroundColor = ReanimatedRexport.interpolateColor(sharedValue.get(), items, items1);
          return obj;
        };
        const tmpResult2 = sharedValue(hexResult1[7]);
        fn2.__closure = {
          ShineAnimationConfig,
          interpolateColor: sharedValue(hexResult1[7]).interpolateColor,
          progress: sharedValue,
          flashStartColor: hexResult,
          flashEndColor: hexResult1,
        };
        fn2.__workletHash = 9845866779228;
        fn2.__initData = __initData2;
        const animatedStyle1 = tmpResult2.useAnimatedStyle(fn2);
        if (cResult[3] === animatedStyle1) {
          if (cResult[4] === style) {
            if (cResult[5] === tmp4.container) {
              let tmp16 = cResult[6];
            }
            if (cResult[7] !== animatedStyle) {
              const obj5 = { style: animatedStyle };
              const tmp19 = closure_6(tmp10(tmp2[7]).View, obj5);
              cResult[7] = animatedStyle;
              cResult[8] = tmp19;
              let tmp17 = tmp19;
            } else {
              tmp17 = cResult[8];
            }
            if (cResult[9] !== tmp4.shineInner) {
              const obj6 = { style: tmp4.shineInner };
              const tmp23 = closure_6(closure_5, obj6);
              cResult[9] = tmp4.shineInner;
              cResult[10] = tmp23;
              let tmp20 = tmp23;
            } else {
              tmp20 = cResult[10];
            }
            if (cResult[11] === tmp4.shine) {
              if (cResult[12] === tmp20) {
                let tmp24 = cResult[13];
              }
              if (cResult[14] === tmp4.shineContainer) {
                if (cResult[15] === tmp17) {
                  if (cResult[18] !== source) {
                    const obj7 = { source };
                    const tmp35 = closure_6(closure_4, obj7);
                    cResult[18] = source;
                    cResult[19] = tmp35;
                    let tmp32 = tmp35;
                  } else {
                    tmp32 = cResult[19];
                  }
                  if (cResult[20] === tmp16) {
                    if (cResult[21] === tmp28) {
                      if (cResult[22] === tmp32) {
                        const tmp36 = cResult[23];
                      }
                      return tmp36;
                    }
                  }
                  const obj8 = { style: tmp16, children: null };
                  let items1 = [tmp28, tmp32];
                  obj8.children = items1;
                  cResult[20] = tmp16;
                  cResult[21] = tmp28;
                  cResult[22] = tmp32;
                  cResult[23] = closure_7(tmp10(tmp2[7]).View, obj8);
                  class R {
                    constructor() {
                      obj = { width: null };
                      obj2 = closure_0(closure_2[7]);
                      obj.width = "" + obj2.interpolate(closure_0.get(), [0, 1], [20, 160]) + "%";
                      return obj;
                    }
                  }
                  const tmp38 = closure_7(tmp10(tmp2[7]).View, obj8);
                }
              }
              const obj9 = { style: tmp4.shineContainer, children: null };
              const items2 = [tmp17, tmp24];
              obj9.children = items2;
              cResult[14] = tmp4.shineContainer;
              cResult[15] = tmp17;
              cResult[16] = tmp24;
              cResult[17] = closure_7(closure_5, obj9);
              class R {
                constructor() {
                  obj = { width: null };
                  obj2 = closure_0(closure_2[7]);
                  obj.width = "" + obj2.interpolate(closure_0.get(), [0, 1], [20, 160]) + "%";
                  return obj;
                }
              }
              const tmp31 = closure_7(closure_5, obj9);
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
        const obj4 = {
          ShineAnimationConfig,
          interpolateColor: sharedValue(hexResult1[7]).interpolateColor,
          progress: sharedValue,
          flashStartColor: hexResult,
          flashEndColor: hexResult1,
        };
      }
    : function ShineAnimation(arg0) {
        let sharedValue;
        importDefault = undefined;
        let hexResult1;
        ({ source, style } = arg0);
        const tmp = closure_9();
        sharedValue = sharedValue(hexResult1[7]).useSharedValue(0);
        let items = [sharedValue];
        const effect = noop.useEffect(() => {
          const obj = ReanimatedRexport;
          const obj2 = ReanimatedRexport;
          const result = sharedValue.set(
            obj.withDelay(400, obj2.withRepeat(timing.withTiming(1, { duration: 1000 }), -1, false)),
          );
        }, items);
        let obj = sharedValue(hexResult1[7]);
        const fn = function p() {
          const obj = { width: "" + ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [20, 160]) + "%" };
          return obj;
        };
        let obj2 = sharedValue(hexResult1[7]);
        fn.__closure = { interpolate: sharedValue(hexResult1[7]).interpolate, progress: sharedValue };
        fn.__workletHash = 20406807323;
        fn.__initData = __initData3;
        const animatedStyle = obj2.useAnimatedStyle(fn);
        const obj3 = { interpolate: sharedValue(hexResult1[7]).interpolate, progress: sharedValue };
        const tmp5 = require("../../../_runtime/metro/00683__.js");
        const tmp5Result = require("../../../_runtime/metro/00683__.js")(require("native").unsafe_rawColors.BRAND_360);
        const hexResult = require("../../../_runtime/metro/00683__.js")(require("native").unsafe_rawColors.BRAND_360)
          .alpha(0.2)
          .hex();
        importDefault = hexResult;
        const alphaResult = require("../../../_runtime/metro/00683__.js")(
          require("native").unsafe_rawColors.BRAND_360,
        ).alpha(0.2);
        const tmp7 = require("../../../_runtime/metro/00683__.js");
        const tmp7Result = require("../../../_runtime/metro/00683__.js")(require("native").unsafe_rawColors.BRAND_360);
        hexResult1 = require("../../../_runtime/metro/00683__.js")(require("native").unsafe_rawColors.BRAND_360)
          .alpha(1)
          .hex();
        const alphaResult1 = require("../../../_runtime/metro/00683__.js")(
          require("native").unsafe_rawColors.BRAND_360,
        ).alpha(1);
        class E {
          constructor() {
            FLASH_TIME_PERCENT = closure_8.FLASH_TIME_PERCENT;
            obj = { backgroundColor: null };
            obj2 = closure_0(closure_2[7]);
            items = [0];
            items[1] = FLASH_TIME_PERCENT;
            items[2] = FLASH_TIME_PERCENT;
            items[3] = FLASH_TIME_PERCENT + closure_8.FLASH_DURATION_PERCENT;
            items[4] = 1;
            items1 = [, , , ,];
            items1[0] = closure_1;
            items1[1] = closure_1;
            items1[2] = closure_2;
            items1[3] = closure_2;
            items1[4] = closure_1;
            obj.backgroundColor = obj2.interpolateColor(closure_0.get(), items, items1);
            return obj;
          }
        }
        const obj8 = sharedValue(hexResult1[7]);
        E.__closure = {
          ShineAnimationConfig,
          interpolateColor: sharedValue(hexResult1[7]).interpolateColor,
          progress: sharedValue,
          flashStartColor: hexResult,
          flashEndColor: hexResult1,
        };
        E.__workletHash = 13660181424090;
        E.__initData = __initData4;
        const animatedStyle1 = obj8.useAnimatedStyle(E);
        const obj5 = { style: null, children: null };
        let items1 = [tmp.container, style, animatedStyle1];
        obj5.style = items1;
        const obj6 = { style: tmp.shineContainer, children: null };
        const items2 = [closure_6(require("ReanimatedRexport").View, { style: animatedStyle })];
        const obj7 = { style: tmp.shine, children: closure_6(closure_5, { style: tmp.shineInner }) };
        items2[1] = closure_6(closure_5, obj7);
        obj6.children = items2;
        const items3 = [closure_7(closure_5, obj6), closure_6(closure_4, { source })];
        obj5.children = items3;
        return closure_7(require("ReanimatedRexport").View, obj5);
      },
);
