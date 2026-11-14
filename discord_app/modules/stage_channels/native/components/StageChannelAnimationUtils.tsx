// discord_app/modules/stage_channels/native/components/StageChannelAnimationUtils.tsx
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useIsInvitedToSpeakDefault from "../../useIsInvitedToSpeak.tsx";
import StageChannelHeightHooks from "../../StageChannelHeightHooks.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = { duration: 250, easing: null };
const Easing = _mod1655.Easing;
obj.easing = Easing.bezier(0.66, 0, 0.2, 1);
let closure_4 = {
  code: "(function StageChannelAnimationUtilsTsx1(){let[isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding]=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;})",
};
let closure_5 = {
  code: "(function StageChannelAnimationUtilsTsx2(){let[withTiming,paddingTop,TIMING_CONFIG]=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};})",
};
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelAnimationUtils.tsx");

export function useStageActionBarAnimation(channelId, arg1) {
  obj = StageChannelHeightHooks;
  const getActionBarHeight = obj.useGetActionBarHeight(channelId);
  const tmp2 = useIsInvitedToSpeakDefault();
  items = [closure_4, tmp2, getActionBarHeight, 10, useSafeAreaInsetsDefault().top, arg1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class StageChannelAnimationUtilsTsx1 {
    constructor() {
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        sum = closure_1 + closure_2 + closure_3;
      } else {
        sum = closure_4;
      }
      return sum;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  StageChannelAnimationUtilsTsx1.__closure = items1;
  StageChannelAnimationUtilsTsx1.__workletHash = 554637474683;
  StageChannelAnimationUtilsTsx1.__initData = tmp5;
  const derivedValue = _mod1655.useDerivedValue(StageChannelAnimationUtilsTsx1);
  const items2 = [closure_5, timing_timing.withTiming, derivedValue, obj];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp12, tmp13, tmp14, tmp15] = items2;
  class StageChannelAnimationUtilsTsx2 {
    constructor() {
      obj = { paddingTop: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items3 = [tmp13, tmp14, tmp15];
  StageChannelAnimationUtilsTsx2.__closure = items3;
  StageChannelAnimationUtilsTsx2.__workletHash = 6071132596271;
  StageChannelAnimationUtilsTsx2.__initData = tmp12;
  return _mod1655.useAnimatedStyle(StageChannelAnimationUtilsTsx2);
}
