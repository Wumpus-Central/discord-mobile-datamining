// === Module 16258: ChannelScreenAnimatedFrame ===

// Module 16258 (ChannelScreenAnimatedFrame)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import timing from "timing" /* 4723 */;
import PanelsConfig from "PanelsConfig" /* 16256 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj2 = { container: { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, splitDivider: null };
const obj3 = { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.splitDivider = { borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
let closure_4 = createStyles.createStyles(obj2);
const __initData = { code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const isChatLockedOpen = translateX.isChatLockedOpen;
  let tmp = closure_4();
  class S {
    constructor() {
      tmp = translateX.get() === maxWidth || isChatLockedOpen;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[5]);
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj1 = { easing: tmp2(tmp3[6]).STANDARD_EASING, duration: null };
      tmp2Result = tmp2(tmp3[7]);
      obj4 = { opacity: obj.withTiming(num, obj1) };
      obj1.duration = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
      return obj4;
    }
  }
  let obj = translateX(isChatLockedOpen[4]);
  S.__closure = { translateX, maxWidth, isChatLockedOpen, withTiming: translateX(isChatLockedOpen[5]).withTiming, STANDARD_EASING: translateX(isChatLockedOpen[6]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[7]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[7]).SIDE_PANEL_OPEN_DURATION_MS };
  S.__workletHash = 9063010717249;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  let obj2 = { translateX, maxWidth, isChatLockedOpen, withTiming: translateX(isChatLockedOpen[5]).withTiming, STANDARD_EASING: translateX(isChatLockedOpen[6]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[7]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[7]).SIDE_PANEL_OPEN_DURATION_MS };
  const gradientTop = translateX(isChatLockedOpen[8]).useGradientTop();
  const obj4 = { pointerEvents: "none", style: null, children: jsx(translateX(isChatLockedOpen[9]).SafeAreaPaddingView, { top: true }) };
  const items = [, , , ];
  ({ container: arr[0], splitDivider: arr[1] } = tmp);
  items[2] = gradientTop;
  items[3] = animatedStyle;
  obj4.style = items;
  return jsx(maxWidth(isChatLockedOpen[4]).View, { pointerEvents: "none", style: null, children: jsx(translateX(isChatLockedOpen[9]).SafeAreaPaddingView, { top: true }) });
};