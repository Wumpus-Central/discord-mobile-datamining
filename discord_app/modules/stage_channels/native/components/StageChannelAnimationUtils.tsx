// === Module 9726: StageChannelAnimationUtils ===

// Module 9726 (StageChannelAnimationUtils)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let Easing;
let obj = { duration: 250, easing: Easing.bezier(0.66, 0, 0.2, 1) };
Easing = ReanimatedRexport.Easing;
let closure_4 = { code: "function StageChannelAnimationUtilsTsx1(){const{isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding}=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;}" };
const __initData = { code: "function StageChannelAnimationUtilsTsx2(){const{withTiming,paddingTop,TIMING_CONFIG}=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};}" };
const __initData2 = { code: "function StageChannelAnimationUtilsTsx3(){const{isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding}=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;}" };
const __initData3 = { code: "function StageChannelAnimationUtilsTsx4(){const{withTiming,paddingTop,TIMING_CONFIG}=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, controlPadding) => {
  let closure_1;
  let derivedValue;
  let getActionBarHeight;
  _require = controlPadding;
  const tmp = require("useIsInvitedToSpeak")();
  importDefault = tmp;
  obj = require("StageChannelHeightHooks");
  getActionBarHeight = obj.useGetActionBarHeight(arg0);
  const top = require("useSafeAreaInsets")().top;
  let obj2 = require("ReanimatedRexport");
  class A {
    constructor() {
      let sum;
      if (closure_1) {
        sum = getActionBarHeight + 10 + top;
      } else {
        sum = controlPadding;
      }
      return sum;
    }
  }
  A.__closure = { isInvited: tmp, actionBarHeight: getActionBarHeight, ACTION_BAR_SAFE_AREA_PADDING: 10, safeAreaTop: top, controlPadding };
  A.__workletHash = 2568370943746;
  A.__initData = derivedValue;
  derivedValue = obj2.useDerivedValue(A);
  const fn = function c() {
    let obj2;
    obj = { paddingTop: obj2.withTiming(derivedValue.get(), obj) };
    obj2 = timing;
    return obj;
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, paddingTop: derivedValue, TIMING_CONFIG: top };
  fn.__workletHash = 16816216105718;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, paddingTop: derivedValue, TIMING_CONFIG: top });
  return obj3.useAnimatedStyle(fn);
}) : ((arg0, controlPadding) => {
  let closure_1;
  let getActionBarHeight;
  _require = controlPadding;
  const tmp = require("useIsInvitedToSpeak")();
  importDefault = tmp;
  obj = require("StageChannelHeightHooks");
  getActionBarHeight = obj.useGetActionBarHeight(arg0);
  const top = require("useSafeAreaInsets")().top;
  let obj2 = require("ReanimatedRexport");
  class A {
    constructor() {
      let sum;
      if (closure_1) {
        sum = getActionBarHeight + 10 + top;
      } else {
        sum = controlPadding;
      }
      return sum;
    }
  }
  A.__closure = { isInvited: tmp, actionBarHeight: getActionBarHeight, ACTION_BAR_SAFE_AREA_PADDING: 10, safeAreaTop: top, controlPadding };
  A.__workletHash = 15838290149504;
  A.__initData = __initData2;
  const derivedValue = obj2.useDerivedValue(A);
  const fn = function c() {
    let obj2;
    obj = { paddingTop: obj2.withTiming(derivedValue.get(), obj) };
    obj2 = timing;
    return obj;
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, paddingTop: derivedValue, TIMING_CONFIG: top };
  fn.__workletHash = 14135510825328;
  fn.__initData = __initData3;
  ({ withTiming: require("timing").withTiming, paddingTop: derivedValue, TIMING_CONFIG: top });
  return obj3.useAnimatedStyle(fn);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelAnimationUtils.tsx");

export const useStageActionBarAnimation = tmp2;