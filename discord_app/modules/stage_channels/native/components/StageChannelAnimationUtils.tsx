// discord_app/modules/stage_channels/native/components/StageChannelAnimationUtils.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let __closure = { duration: 250, easing: null };
const Easing = ReanimatedRexport.Easing;
__closure.easing = Easing.bezier(0.66, 0, 0.2, 1);
let closure_4 = {
  code: "function StageChannelAnimationUtilsTsx1(){const{isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding}=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;}",
};
const __initData = {
  code: "function StageChannelAnimationUtilsTsx2(){const{withTiming,paddingTop,TIMING_CONFIG}=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};}",
};
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelAnimationUtils.tsx");

export const useStageActionBarAnimation = function useStageActionBarAnimation(channelId, controlPadding) {
  _require = controlPadding;
  const tmp = require("useIsInvitedToSpeak")();
  importDefault = tmp;
  __closure = require("StageChannelHeightHooks");
  getActionBarHeight = __closure.useGetActionBarHeight(channelId);
  const top = require("useSafeAreaInsets")().top;
  class A {
    constructor() {
      if (closure_1) {
        tmp2 = closure_2;
        num = 10;
        tmp3 = top;
        sum = closure_2 + 10 + top;
      } else {
        sum = closure_0;
      }
      return sum;
    }
  }
  A.__closure = {
    isInvited: tmp,
    actionBarHeight: getActionBarHeight,
    ACTION_BAR_SAFE_AREA_PADDING: 10,
    safeAreaTop: top,
    controlPadding,
  };
  A.__workletHash = 2568370943746;
  A.__initData = derivedValue;
  derivedValue = require("ReanimatedRexport").useDerivedValue(A);
  const obj2 = require("ReanimatedRexport");
  const fn = function c() {
    obj = { paddingTop: timing.withTiming(derivedValue.get(), obj) };
    return obj;
  };
  __closure = { withTiming: require("timing").withTiming, paddingTop: derivedValue, TIMING_CONFIG: top };
  fn.__closure = __closure;
  fn.__workletHash = 16816216105718;
  fn.__initData = __initData;
  return require("ReanimatedRexport").useAnimatedStyle(fn);
};
