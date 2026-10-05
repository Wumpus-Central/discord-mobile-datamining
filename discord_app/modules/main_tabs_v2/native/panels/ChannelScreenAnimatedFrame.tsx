// discord_app/modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import PanelsConfig from "../../../panels/native/PanelsConfig.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj1, tmp2, tmp3;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, splitDivider: obj3 };
obj2 = {
  position: "absolute",
  zIndex: 1,
  top: 0,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles = createStyles.createStyles;
obj3 = {
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
  borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
};
let closure_4 = createStyles(obj);
const __initData = {
  code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}",
};
const __initData2 = {
  code: "function ChannelScreenAnimatedFrameTsx2(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}",
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (translateX) => {
      let isChatLockedOpen;
      let tmp = translateX;
      let obj = translateX(isChatLockedOpen[5]);
      const cResult = obj.c(8);
      translateX = translateX.translateX;
      const maxWidth = translateX.maxWidth;
      isChatLockedOpen = translateX.isChatLockedOpen;
      const tmp4 = closure_4();
      let obj2 = translateX(isChatLockedOpen[6]);
      class S {
        constructor() {
          tmp = translateX.get() === maxWidth || isChatLockedOpen;
          tmp2 = closure_0;
          tmp3 = closure_2;
          tmp4 = closure_0(closure_2[7]);
          num = 1;
          withTiming = tmp4.withTiming;
          if (tmp) {
            num = 0;
          }
          obj = { easing: tmp2(tmp3[8]).STANDARD_EASING, duration: null };
          tmp2Result = tmp2(tmp3[9]);
          obj1 = { opacity: withTiming(num, obj) };
          obj.duration = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
          return obj1;
        }
      }
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
      ({
        translateX,
        maxWidth,
        isChatLockedOpen,
        withTiming: translateX(isChatLockedOpen[7]).withTiming,
        STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING,
        SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS,
        SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS,
      });
      const animatedStyle = obj2.useAnimatedStyle(S);
      const obj4 = translateX(isChatLockedOpen[10]);
      const gradientTop = obj4.useGradientTop();
      if (cResult[0] === gradientTop) {
        if (cResult[1] === animatedStyle) {
          if (cResult[2] === tmp4.container) {
            let tmp7;
            let tmp9;
            let tmp12;
            if (cResult[3] === tmp4.splitDivider) {
              tmp7 = cResult[4];
            }
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp11 = jsx(tmp(isChatLockedOpen[11]).SafeAreaPaddingView, { top: true });
              let num = 5;
              cResult[5] = tmp11;
              tmp9 = tmp11;
            } else {
              tmp9 = cResult[5];
            }
            if (cResult[6] !== tmp7) {
              const tmp15 = jsx(maxWidth(isChatLockedOpen[6]).View, {
                pointerEvents: "none",
                style: tmp7,
                children: tmp9,
              });
              cResult[6] = tmp7;
              cResult[7] = tmp15;
              tmp12 = tmp15;
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
    }
  : (translateX) => {
      translateX = translateX.translateX;
      const maxWidth = translateX.maxWidth;
      const isChatLockedOpen = translateX.isChatLockedOpen;
      let tmp = closure_4();
      let obj = translateX(isChatLockedOpen[6]);
      const fn = function o() {
        let tmp2Result;
        const tmp = translateX.get() === maxWidth || isChatLockedOpen;
        let num = 1;
        const withTiming = timing.withTiming;
        timing;
        if (tmp) {
          num = 0;
        }
        const obj = {
          easing: native.STANDARD_EASING,
          duration: tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS,
        };
        tmp2Result = PanelsConfig;
        const obj2 = { opacity: withTiming(num, obj) };
        return obj2;
      };
      let obj2 = {
        translateX,
        maxWidth,
        isChatLockedOpen,
        withTiming: translateX(isChatLockedOpen[7]).withTiming,
        STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING,
        SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS,
        SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS,
      };
      fn.__closure = obj2;
      fn.__workletHash = 10998352187650;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj3 = translateX(isChatLockedOpen[10]);
      const gradientTop = obj3.useGradientTop();
      const items = [, , ,];
      ({ container: arr[0], splitDivider: arr[1] } = tmp);
      items[2] = gradientTop;
      items[3] = animatedStyle;
      const View = maxWidth(isChatLockedOpen[6]).View;
      return (
        <View pointerEvents="none" style={items}>
          {null}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default tmp4;
