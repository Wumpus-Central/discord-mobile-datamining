// === Module 15369: ChannelScreenAnimatedFrame ===

// Module 15369 (ChannelScreenAnimatedFrame)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import MIN_HEADER_HEIGHT from "MIN_HEADER_HEIGHT" /* 8540 */;
import { ThemeTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
noopAll;
({ HEADER_CORNER_RADIUS, MIDNIGHT_BORDER_WIDTH } = MIN_HEADER_HEIGHT);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, midnightContainer: null, splitDivider: null, additionalHeight: null };
createCacheKey = { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
let obj1 = { borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
createCacheKey[2] = { borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderLeftWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
createCacheKey[3] = { height: HEADER_CORNER_RADIUS };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}" };
const obj2 = { borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderLeftWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const isChatLockedOpen = translateX.isChatLockedOpen;
  let tmp = callback2();
  let obj = translateX(isChatLockedOpen[8]);
  obj1 = translateX(isChatLockedOpen[9]);
  class E {
    constructor() {
      tmp = translateX.get() === maxWidth || isChatLockedOpen;
      tmp2 = translateX;
      tmp3 = isChatLockedOpen;
      obj = translateX(isChatLockedOpen[10]);
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj = { easing: tmp2(tmp3[11]).STANDARD_EASING, duration: null };
      tmp2Result = tmp2(tmp3[12]);
      obj1 = { opacity: obj.withTiming(num, obj) };
      obj[1] = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
      return obj1;
    }
  }
  obj = { translateX, maxWidth, isChatLockedOpen, withTiming: translateX(isChatLockedOpen[10]).withTiming, STANDARD_EASING: translateX(isChatLockedOpen[11]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[12]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[12]).SIDE_PANEL_OPEN_DURATION_MS };
  E.__closure = obj;
  E.__workletHash = 9063010717249;
  E.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(E);
  const tmp2 = isChatLockedOpen;
  const tmp3 = maxWidth(isChatLockedOpen[7])();
  const tmp4 = translateX;
  const gradientTop = translateX(isChatLockedOpen[13]).useGradientTop();
  const items = [, , , , ];
  ({ container: arr[0], splitDivider: arr[1] } = tmp);
  let midnightContainer;
  if (tmp3 === ThemeTypes.MIDNIGHT) {
    if (!obj.useMobileVisualRefreshConfig({ location: "ChannelScreenAnimatedFrame" }).chatInputFloating) {
      midnightContainer = tmp.midnightContainer;
    }
  }
  obj = { pointerEvents: "none", style: items, children: null };
  items[2] = midnightContainer;
  items[3] = gradientTop;
  items[4] = animatedStyle;
  const items1 = [callback(tmp4(tmp2[14]).SafeAreaPaddingView, { top: true }), ];
  obj1 = { style: tmp.additionalHeight };
  items1[1] = callback(View, obj1);
  obj[2] = items1;
  return closure_6(maxWidth(isChatLockedOpen[9]).View, obj);
};