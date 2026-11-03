// discord_app/modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import ClientThemesOverrides from "../../../client_themes/native/ClientThemesOverrides.tsx";
import PanelsConfig from "../../../panels/native/PanelsConfig.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj2 = {
  container: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    width: "100%",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  splitDivider: null,
};
const obj3 = {
  position: "absolute",
  zIndex: 1,
  top: 0,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.splitDivider = {
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
  borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
};
const easing = createStyles.createStyles(obj2);
let closure_5 = {
  code: "(function ChannelScreenAnimatedFrameTsx1(){let[translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS]=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(arg0) {
  ({ translateX, maxWidth, isChatLockedOpen } = arg0);
  let tmp = easing();
  items = [
    closure_5,
    translateX,
    maxWidth,
    isChatLockedOpen,
    timing_timing.withTiming,
    native.STANDARD_EASING,
    PanelsConfig.SIDE_PANEL_CLOSE_DURATION_MS,
    PanelsConfig.SIDE_PANEL_OPEN_DURATION_MS,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class ChannelScreenAnimatedFrameTsx1 {
    constructor() {
      tmp = closure_0.get() === closure_1 || closure_2;
      num = 1;
      tmp2 = closure_3;
      if (tmp) {
        num = 0;
      }
      obj = { easing: closure_4, duration: tmp ? closure_5 : closure_6 };
      obj1 = { opacity: tmp2(num, obj) };
      return obj1;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  ChannelScreenAnimatedFrameTsx1.__closure = items1;
  ChannelScreenAnimatedFrameTsx1.__workletHash = 6023157735704;
  ChannelScreenAnimatedFrameTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(ChannelScreenAnimatedFrameTsx1);
  const gradientTop = ClientThemesOverrides.useGradientTop();
  const obj2 = {
    pointerEvents: "none",
    style: null,
    children: jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true }),
  };
  const items2 = [, , ,];
  ({ container: arr3[0], splitDivider: arr3[1] } = tmp);
  items2[2] = gradientTop;
  items2[3] = animatedStyle;
  obj2.style = items2;
  return jsx(_modDef1652.View, {
    pointerEvents: "none",
    style: null,
    children: jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true }),
  });
}
