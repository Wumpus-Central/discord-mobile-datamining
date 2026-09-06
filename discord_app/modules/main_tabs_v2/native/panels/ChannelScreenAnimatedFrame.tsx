// discord_app/modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import PanelsConfig from "../../../panels/native/PanelsConfig.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, splitDivider: null, additionalHeight: null };
createStyles = {
  position: "absolute",
  zIndex: 1,
  top: 0,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.container = createStyles;
createStyles.splitDivider = {
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
  borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
};
createStyles.additionalHeight = { height: fn(7864).HEADER_CORNER_RADIUS };
let closure_6 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const isChatLockedOpen = translateX.isChatLockedOpen;
  let tmp = closure_6();
  let obj = translateX(isChatLockedOpen[6]);
  class D {
    constructor() {
      tmp = translateX.get() === maxWidth || isChatLockedOpen;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[7]);
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj = { easing: tmp2(tmp3[8]).STANDARD_EASING, duration: null };
      tmp2Result = tmp2(tmp3[9]);
      obj1 = { opacity: obj.withTiming(num, obj) };
      obj.duration = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
      return obj1;
    }
  }
  obj = {
    translateX,
    maxWidth,
    isChatLockedOpen,
    withTiming: translateX(isChatLockedOpen[7]).withTiming,
    STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING,
    SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS,
    SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS,
  };
  D.__closure = obj;
  D.__workletHash = 9063010717249;
  D.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(D);
  const gradientTop = translateX(isChatLockedOpen[10]).useGradientTop();
  obj = { pointerEvents: "none", style: null, children: null };
  const items = [, , ,];
  ({ container: arr[0], splitDivider: arr[1] } = tmp);
  items[2] = gradientTop;
  items[3] = animatedStyle;
  obj.style = items;
  const items1 = [
    closure_4(translateX(isChatLockedOpen[11]).SafeAreaPaddingView, { top: true }),
    closure_4(View, { style: tmp.additionalHeight }),
  ];
  obj.children = items1;
  return closure_5(maxWidth(isChatLockedOpen[6]).View, obj);
}
