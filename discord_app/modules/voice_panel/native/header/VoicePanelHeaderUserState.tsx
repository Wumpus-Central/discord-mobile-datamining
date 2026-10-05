// discord_app/modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const useVoicePanelCardUserStateIconsDefault = useVoicePanelCardUserStateIcons;
let type;

let rect;
let size;
let size1;
const jsx = Fragment.jsx;
let closure_6 = ReanimatedRexport.createAnimatedComponent(native.BackgroundBlurView);
const OPACITY_TIMING = { duration: 100 };
let createStyles = createStyles_mod;
let obj = {
  container: rect,
  iconContainer: { flexDirection: "row" },
  floatingIconWrapper: size,
  floatingIcon: size1,
  leftMargin: { marginLeft: 4 },
};
rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.round, padding: 6 };
createStyles = createStyles.createStyles;
size = {
  width: 20,
  height: 20,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
size1 = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type, arg1, arg2) => {
      const obj = react2;
      const cResult = obj.c(9);
      const tmp6 = closure_8();
      type = undefined;
      const tmp7 = useVoicePanelCardUserStateIconsDefault;
      if (type != null) {
        type = type.type;
      }
      let id;
      const tmp2Result = useStableParticipant;
      if (tmp2Result.isStableParticipantWithUser(type)) {
        id = type.user.id;
      }
      const tmp7Result = tmp7(type, id, arg1);
      if (cResult[0] === tmp7Result) {
        let arr;
        if (cResult[1] === tmp6) {
          arr = cResult[2];
        }
        if (0 !== arr.length) {
          if (cResult[3] === arg2) {
            let tmp27;
            if (cResult[4] === tmp6.iconContainer) {
              tmp27 = cResult[5];
            }
            if (cResult[6] === arr) {
              let tmp28;
              if (cResult[7] === tmp27) {
                tmp28 = cResult[8];
              }
              return tmp28;
            }
            const tmp34 = jsx(NativeViewDefault, { style: tmp27, children: arr });
            cResult[6] = arr;
            cResult[7] = tmp27;
            cResult[8] = tmp34;
            tmp28 = tmp34;
          }
          const items = [tmp6.iconContainer, arg2];
          cResult[3] = arg2;
          cResult[4] = tmp6.iconContainer;
          cResult[5] = items;
          tmp27 = items;
        }
      }
      const items1 = [];
      const iter = tmp7Result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp12 = nextResult;
        if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
          let push = items1.push;
          let BackgroundBlurView = native.BackgroundBlurView;
          let obj4 = { style: tmp6.floatingIcon, state: tmp12.videoIconState };
          let arr2 = push(
            <BackgroundBlurView key="video" blurTheme="dark" style={tmp6.floatingIconWrapper}>
              {null}
            </BackgroundBlurView>,
          );
        }
        if (tmp12.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
          let push2 = items1.push;
          let items2 = [tmp6.floatingIconWrapper];
          let leftMargin;
          let BackgroundBlurView2 = native.BackgroundBlurView;
          if (tmp12.withLeftMargin) {
            leftMargin = tmp6.leftMargin;
          }
          items2[1] = leftMargin;
          let obj6 = { style: tmp6.floatingIcon, state: tmp12.muteDeafenIconState };
          let push2Result = push2(
            <BackgroundBlurView2 key="mute-deafen" blurTheme="dark" style={items2}>
              {null}
            </BackgroundBlurView2>,
          );
        }
        continue;
      }
      cResult[0] = tmp7Result;
      cResult[1] = tmp6;
      cResult[2] = items1;
      arr = items1;
    }
  : (type, arg1, arg2) => {
      const tmp = closure_8();
      type = undefined;
      const tmp4 = useVoicePanelCardUserStateIconsDefault;
      if (type != null) {
        type = type.type;
      }
      let id;
      const obj = useStableParticipant;
      if (obj.isStableParticipantWithUser(type)) {
        id = type.user.id;
      }
      const items = [];
      const tmp4Result = tmp4(type, id, arg1);
      const iter = tmp4Result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        if (nextResult.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
          let push = items.push;
          let BackgroundBlurView = native.BackgroundBlurView;
          let obj3 = { style: tmp.floatingIcon, state: tmp9.videoIconState };
          let arr = push(
            <BackgroundBlurView key="video" blurTheme="dark" style={tmp.floatingIconWrapper}>
              {null}
            </BackgroundBlurView>,
          );
        }
        if (tmp9.type === useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
          let push2 = items.push;
          let items1 = [tmp.floatingIconWrapper];
          let leftMargin;
          let BackgroundBlurView2 = native.BackgroundBlurView;
          if (tmp9.withLeftMargin) {
            leftMargin = tmp.leftMargin;
          }
          items1[1] = leftMargin;
          let obj5 = { style: tmp.floatingIcon, state: tmp9.muteDeafenIconState };
          let push2Result = push2(
            <BackgroundBlurView2 key="mute-deafen" blurTheme="dark" style={items1}>
              {null}
            </BackgroundBlurView2>,
          );
        }
        continue;
      }
      if (0 !== items.length) {
        const items2 = [tmp.iconContainer, arg2];
        return jsx(NativeViewDefault, { style: items2, children: items });
      }
    };
let closure_9 = tmp3;
const __initData = {
  code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}",
};
const __initData2 = {
  code: "function VoicePanelHeaderUserStateTsx2(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isHeaderHidden) => {
        let channelId;
        let first;
        let tmp9;
        const tmp = isHeaderHidden;
        let obj = isHeaderHidden(576);
        const cResult = obj.c(9);
        isHeaderHidden = isHeaderHidden.isHeaderHidden;
        const context = react.useContext(channelId(11901));
        const tmp4 = channelId;
        channelId = context.channelId;
        const guildId = context.guildId;
        const tmp6 = closure_8();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelRTCStore];
          let num = 0;
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function p() {
            const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
            let id;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            return id;
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          tmp9 = fn;
        } else {
          tmp9 = cResult[2];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
        const tmp11 = closure_9(tmp4(17219)(stateFromStores, channelId, guildId), guildId);
        const fn2 = function w() {
          const withTiming = timing.withTiming;
          let num = 0;
          timing;
          if (isHeaderHidden.get()) {
            num = 1;
          }
          const obj = { opacity: withTiming(num, OPACITY_TIMING) };
          return obj;
        };
        const tmpResult2 = tmp(4612);
        fn2.__closure = { withTiming: tmp(4891).withTiming, isHeaderHidden, OPACITY_TIMING };
        fn2.__workletHash = 7032221979181;
        fn2.__initData = __initData;
        ({ withTiming: tmp(4891).withTiming, isHeaderHidden, OPACITY_TIMING });
        const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
        let tmp13 = null;
        if (null != tmp11) {
          if (cResult[3] === animatedStyle) {
            let tmp14;
            if (cResult[4] === tmp6.container) {
              tmp14 = cResult[5];
            }
            if (cResult[6] === tmp11) {
              let tmp15;
              if (cResult[7] === tmp14) {
                tmp15 = cResult[8];
              }
              tmp13 = tmp15;
            }
            const tmp18 = (
              <closure_6 blurTheme="dark" style={tmp14} pointerEvents="none">
                {tmp11}
              </closure_6>
            );
            cResult[6] = tmp11;
            cResult[7] = tmp14;
            cResult[8] = tmp18;
            tmp15 = tmp18;
          }
          const items1 = [tmp6.container, animatedStyle];
          cResult[3] = animatedStyle;
          cResult[4] = tmp6.container;
          cResult[5] = items1;
          tmp14 = items1;
        }
        return tmp13;
      }
    : (isHeaderHidden) => {
        isHeaderHidden = isHeaderHidden.isHeaderHidden;
        let channelId;
        const context = react.useContext(channelId(11901));
        channelId = context.channelId;
        const guildId = context.guildId;
        const tmp2 = closure_8();
        let obj = isHeaderHidden(504);
        const items = [ChannelRTCStore];
        const stateFromStores = obj.useStateFromStores(items, () => {
          const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
          let id;
          if (selectedParticipant != null) {
            id = selectedParticipant.id;
          }
          return id;
        });
        const tmp4 = closure_9(channelId(17219)(stateFromStores, channelId, guildId), guildId);
        isHeaderHidden(4612);
        const fn = function f() {
          const withTiming = timing.withTiming;
          let num = 0;
          timing;
          if (isHeaderHidden.get()) {
            num = 1;
          }
          const obj = { opacity: withTiming(num, OPACITY_TIMING) };
          return obj;
        };
        fn.__closure = { withTiming: isHeaderHidden(4891).withTiming, isHeaderHidden, OPACITY_TIMING };
        fn.__workletHash = 1281074829646;
        fn.__initData = __initData2;
        let tmp7 = null;
        ({ withTiming: isHeaderHidden(4891).withTiming, isHeaderHidden, OPACITY_TIMING });
        if (null != tmp4) {
          const items1 = [tmp2.container, tmp6];
          tmp7 = (
            <closure_6 blurTheme="dark" style={items1} pointerEvents="none">
              {tmp4}
            </closure_6>
          );
        }
        return tmp7;
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default memoResult;
export const useVoicePanelHeaderUserStateIcons = tmp3;
