// discord_app/modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import PanelsConfig from "../../../panels/native/PanelsConfig.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
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
let obj3 = {
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
let closure_4 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}",
};
const __initData2 = {
  code: "function ChannelScreenAnimatedFrameTsx2(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}",
};
const ReactCompilerGating = fn(558);
let obj4 = {
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
  borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelScreenAnimatedFrame(translateX) {
      const cResult = translateX(isChatLockedOpen[5]).c(8);
      translateX = translateX.translateX;
      const maxWidth = translateX.maxWidth;
      isChatLockedOpen = translateX.isChatLockedOpen;
      const tmp4 = closure_4();
      let obj = translateX(isChatLockedOpen[5]);
      let tmp = translateX;
      class S {
        constructor() {
          tmp = translateX.get() === maxWidth || isChatLockedOpen;
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[7]);
          num = 1;
          if (tmp) {
            num = 0;
          }
          obj1 = { easing: tmp2(tmp3[8]).STANDARD_EASING, duration: null };
          tmp2Result = tmp2(tmp3[9]);
          obj4 = { opacity: obj.withTiming(num, obj1) };
          obj1.duration = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
          return obj4;
        }
      }
      let obj2 = translateX(isChatLockedOpen[6]);
      S.__closure = {
        translateX,
        maxWidth,
        isChatLockedOpen,
        withTiming: translateX(isChatLockedOpen[7]).withTiming,
        STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING,
        SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS,
        SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS,
      };
      S.__workletHash = 9063010717249;
      S.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(S);
      const obj3 = {
        translateX,
        maxWidth,
        isChatLockedOpen,
        withTiming: translateX(isChatLockedOpen[7]).withTiming,
        STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING,
        SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS,
        SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS,
      };
      const gradientTop = translateX(isChatLockedOpen[10]).useGradientTop();
      if (cResult[0] === gradientTop) {
        if (cResult[1] === animatedStyle) {
          if (cResult[2] === tmp4.container) {
            if (cResult[3] === tmp4.splitDivider) {
              let tmp7 = cResult[4];
            }
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp11 = jsx(tmp(tmp2[11]).SafeAreaPaddingView, { top: true });
              cResult[5] = tmp11;
              let tmp9 = tmp11;
            } else {
              tmp9 = cResult[5];
            }
            if (cResult[6] !== tmp7) {
              const obj5 = { pointerEvents: "none", style: tmp7, children: tmp9 };
              const tmp15 = jsx(maxWidth(tmp2[6]).View, { pointerEvents: "none", style: tmp7, children: tmp9 });
              cResult[6] = tmp7;
              cResult[7] = tmp15;
              let tmp12 = tmp15;
            } else {
              tmp12 = cResult[7];
            }
            return tmp12;
          }
        }
      }
      const items = [, , ,];
      ({ container: arr[0], splitDivider: arr[1] } = tmp4);
      items[2] = gradientTop;
      items[3] = animatedStyle;
      cResult[0] = gradientTop;
      cResult[1] = animatedStyle;
      cResult[2] = tmp4.container;
      cResult[3] = tmp4.splitDivider;
      cResult[4] = items;
      tmp7 = items;
      const obj4 = translateX(isChatLockedOpen[10]);
    }
  : function ChannelScreenAnimatedFrame(translateX) {
      translateX = translateX.translateX;
      const maxWidth = translateX.maxWidth;
      const isChatLockedOpen = translateX.isChatLockedOpen;
      let tmp = closure_4();
      const fn = function o() {
        const tmp = translateX.get() === maxWidth || isChatLockedOpen;
        let num = 1;
        if (tmp) {
          num = 0;
        }
        const obj2 = { easing: native.STANDARD_EASING, duration: null };
        const tmp2Result = PanelsConfig;
        obj2.duration = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
        return { opacity: timing.withTiming(num, obj2) };
      };
      let obj = translateX(isChatLockedOpen[6]);
      fn.__closure = {
        translateX,
        maxWidth,
        isChatLockedOpen,
        withTiming: translateX(isChatLockedOpen[7]).withTiming,
        STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING,
        SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS,
        SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS,
      };
      fn.__workletHash = 10998352187650;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      let obj2 = {
        translateX,
        maxWidth,
        isChatLockedOpen,
        withTiming: translateX(isChatLockedOpen[7]).withTiming,
        STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING,
        SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS,
        SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS,
      };
      const gradientTop = translateX(isChatLockedOpen[10]).useGradientTop();
      const obj4 = {
        pointerEvents: "none",
        style: null,
        children: jsx(translateX(isChatLockedOpen[11]).SafeAreaPaddingView, { top: true }),
      };
      const items = [, , ,];
      ({ container: arr[0], splitDivider: arr[1] } = tmp);
      items[2] = gradientTop;
      items[3] = animatedStyle;
      obj4.style = items;
      return jsx(maxWidth(isChatLockedOpen[6]).View, {
        pointerEvents: "none",
        style: null,
        children: jsx(translateX(isChatLockedOpen[11]).SafeAreaPaddingView, { top: true }),
      });
    };
