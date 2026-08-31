// discord_app/modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, splitDivider: null, additionalHeight: null };
createCacheKey = { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderLeftWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
createCacheKey[2] = { height: require("MIN_HEADER_HEIGHT").HEADER_CORNER_RADIUS };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let closure_7 = { code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}" };
const obj1 = { borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderLeftWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const isChatLockedOpen = translateX.isChatLockedOpen;
  let tmp = callback3();
  let obj = translateX(isChatLockedOpen[6]);
  class D {
    constructor() {
      tmp = translateX.get() === maxWidth || isChatLockedOpen;
      tmp2 = translateX;
      tmp3 = isChatLockedOpen;
      obj = translateX(isChatLockedOpen[7]);
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj = { easing: tmp2(tmp3[8]).STANDARD_EASING, duration: null };
      tmp2Result = tmp2(tmp3[9]);
      obj1 = { opacity: obj.withTiming(num, obj) };
      obj[1] = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
      return obj1;
    }
  }
  obj = { translateX, maxWidth, isChatLockedOpen, withTiming: translateX(isChatLockedOpen[7]).withTiming, STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS };
  D.__closure = obj;
  D.__workletHash = 9063010717249;
  D.__initData = closure_7;
  const animatedStyle = obj.useAnimatedStyle(D);
  const gradientTop = translateX(isChatLockedOpen[10]).useGradientTop();
  obj = { pointerEvents: "none", style: items, children: null };
  items = [, , , ];
  ({ container: arr[0], splitDivider: arr[1] } = tmp);
  items[2] = gradientTop;
  items[3] = animatedStyle;
  const items1 = [callback(translateX(isChatLockedOpen[11]).SafeAreaPaddingView, { top: true }), callback(View, { style: tmp.additionalHeight })];
  obj[2] = items1;
  return callback2(maxWidth(isChatLockedOpen[6]).View, obj);
};