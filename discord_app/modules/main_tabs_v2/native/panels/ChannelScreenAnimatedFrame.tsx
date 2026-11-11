// === Module 18597: ChannelScreenAnimatedFrame ===

// Module 18597 (ChannelScreenAnimatedFrame)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 8994 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, splitDivider: null };
let obj4 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj4.zIndex = 1;
obj4.borderLeftWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
obj4.borderLeftColor = nativeDefault.colors.APP_FRAME_BORDER;
obj4.borderTopLeftRadius = nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS;
obj2.splitDivider = obj4;
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = { code: "(function ChannelScreenAnimatedFrameTsx1(){let[isChatLockedOpen,interpolate,translateX,maxWidth,Extrapolation]=this.__closure;return{opacity:isChatLockedOpen?0:interpolate(translateX.get(),[maxWidth,0],[0,1],Extrapolation.CLAMP)};})" };
let closure_8 = { code: "(function ChannelScreenAnimatedFrameTsx2(){let[isChatLockedOpen,interpolate,translateX,maxWidth,Extrapolation]=this.__closure;return{opacity:isChatLockedOpen?1:interpolate(translateX.get(),[maxWidth,0],[1,0],Extrapolation.CLAMP)};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(arg0) {
  ({ translateX, maxWidth, isChatLockedOpen } = arg0);
  const tmp = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  items = [closure_7, isChatLockedOpen, _mod1652.interpolate, translateX, maxWidth, _mod1652.Extrapolation];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class ChannelScreenAnimatedFrameTsx1 {
    constructor() {
      opacity = 0;
      if (!closure_0) {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        items = [, ];
        items[0] = closure_3;
        items[1] = 0;
        tmp4 = closure_4;
        tmp5 = items;
        opacity = closure_1(closure_2.get(), items, [0, 1], closure_4.CLAMP);
      }
      return { opacity };
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  ChannelScreenAnimatedFrameTsx1.__closure = items1;
  ChannelScreenAnimatedFrameTsx1.__workletHash = 9515959290845;
  ChannelScreenAnimatedFrameTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(ChannelScreenAnimatedFrameTsx1);
  const items2 = [closure_8, isChatLockedOpen, _mod1652.interpolate, translateX, maxWidth, _mod1652.Extrapolation];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class ChannelScreenAnimatedFrameTsx2 {
    constructor() {
      opacity = 1;
      if (!closure_0) {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        items = [, ];
        items[0] = closure_3;
        num2 = 0;
        items[1] = 0;
        tmp4 = closure_4;
        tmp5 = items;
        opacity = closure_1(closure_2.get(), items, [1, 0], closure_4.CLAMP);
      }
      return { opacity };
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  ChannelScreenAnimatedFrameTsx2.__closure = items3;
  ChannelScreenAnimatedFrameTsx2.__workletHash = 11289548854911;
  ChannelScreenAnimatedFrameTsx2.__initData = tmp12;
  const animatedStyle1 = _mod1652.useAnimatedStyle(ChannelScreenAnimatedFrameTsx2);
  const tmp4Result = _mod1652;
  const obj2 = { children: null };
  const gradientTop = ClientThemesOverrides.useGradientTop();
  const obj3 = { pointerEvents: "none", style: null };
  const items4 = [tmp.container, { height: top }, gradientTop, animatedStyle];
  obj3.style = items4;
  const items5 = [React3(_modDef1652.View, obj3), ];
  const obj4 = { pointerEvents: "none", style: null };
  const items6 = [tmp.splitDivider, { top }, animatedStyle1];
  obj4.style = items6;
  items5[1] = React3(_modDef1652.View, obj4);
  obj2.children = items5;
  return hasOwnProperty(constants, obj2);
};