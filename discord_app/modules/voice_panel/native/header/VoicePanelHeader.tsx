// discord_app/modules/voice_panel/native/header/VoicePanelHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import CallConstants from "../../../calls/CallConstants.tsx";
import useChannelName from "../../../channel/useChannelName.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import StageMusicActionCreators from "../../../stage_channels/StageMusicActionCreators.tsx";
import useMyCurrentStageChannelRoleDefault from "../../../stage_channels/useMyCurrentStageChannelRole.tsx";
import VoicePanelControlsConstants from "../controls/VoicePanelControlsConstants.tsx";
import VoicePanelCardConstants from "../card/VoicePanelCardConstants.tsx";
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs.tsx";
import VoicePanelIconButtonDefault from "../shared/VoicePanelIconButton.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ExperimentStore from "../../../experiments/ExperimentStore.tsx";
import StageMusicStore from "../../../stage_channels/StageMusicStore.tsx";
import AuthenticationStore_mod from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let closure_16;
let closure_17;
let closure_18;
let closure_23;
let closure_24;
let obj2;
let size;
let size1;
const StyleSheet = react_native.StyleSheet;
let AuthenticationStore = AuthenticationStore_mod;
let MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({
  UI_SHOW_HIDE_PHYSICS: closure_16,
  VoicePanelModes: closure_17,
  DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18,
} = VoicePanelConstants);
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ParticipantTypes = CallConstants.ParticipantTypes;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_23, jsxs: closure_24 } = Fragment);
const OPACITY_TIMING = { duration: 300 };
let createStyles = createStyles_mod;
let obj = {
  headerWrapper: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    paddingBottom: EDGE_GUTTER,
    overflow: "hidden",
  },
  blurStyles: obj2,
  leftWrapper: {
    position: "relative",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
    gap: 12,
  },
  rightWrapper: { flexDirection: "row", alignItems: "center", gap: 12, paddingLeft: 12 },
  headerOuter: { flexDirection: "row", alignItems: "center" },
  headerInner: { flexDirection: "row", alignItems: "center", flexShrink: 1, flexGrow: 1 },
  headerContentWrapper: { position: "relative" },
  stroke: { height: StyleSheet.hairlineWidth, opacity: 0.2 },
  strokeAlt: { height: StyleSheet.hairlineWidth, opacity: 0.8 },
  strokeContainer: { position: "absolute", left: 0, right: 0, bottom: 0, height: StyleSheet.hairlineWidth },
  focusedSpeakingDotWrapper: size,
  focusedSpeakingDot: size1,
  shieldIconMargin: { marginLeft: -8 },
};
obj2 = { opacity: 0.7 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, padding: 2 };
size1 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
let closure_26 = createStyles(obj);
const constants = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj3 = { overshootClamping: true };
const merged1 = Object.assign(MODE_CHANGE_PHYSICS);
const __initData = {
  code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}",
};
const __initData2 = {
  code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}",
};
const __initData3 = {
  code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}",
};
const __initData4 = {
  code: "function VoicePanelHeaderTsx4(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}",
};
const __initData5 = {
  code: "function VoicePanelHeaderTsx5(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}",
};
const __initData6 = {
  code: "function VoicePanelHeaderTsx6(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}",
};
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isHeaderHidden) => {
        let focused;
        let items1;
        let items2;
        let tmp7;
        const tmp = focused;
        let obj = isHeaderHidden(focused[21]);
        const cResult = obj.c(17);
        isHeaderHidden = isHeaderHidden.isHeaderHidden;
        const scrollPosition = isHeaderHidden.scrollPosition;
        focused = isHeaderHidden.focused;
        const tmp3 = closure_26();
        const fn = function n() {
          const value = isHeaderHidden.get();
          let tmp2 = !value;
          if (tmp2) {
            tmp2 = null != focused.get() || scrollPosition.get() > 0;
            const tmp5 = null != focused.get() || scrollPosition.get() > 0;
          }
          return tmp2;
        };
        fn.__closure = { isHeaderHidden, focused, scrollPosition };
        fn.__workletHash = 8127245112238;
        fn.__initData = __initData;
        const obj2 = isHeaderHidden(focused[22]);
        const derivedValue = obj2.useDerivedValue(fn);
        obj3 = isHeaderHidden(focused[22]);
        const fn2 = function o() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (derivedValue.get()) {
            num = 0.3;
          }
          const obj = { blurAmount: withSpring(num) };
          return obj;
        };
        fn2.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
        fn2.__workletHash = 10074943135400;
        fn2.__initData = __initData2;
        ({ withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue });
        const animatedProps = obj3.useAnimatedProps(fn2);
        const fn3 = function c() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (derivedValue.get()) {
            num = 1;
          }
          const obj = { opacity: withSpring(num, obj3) };
          return obj;
        };
        const obj5 = isHeaderHidden(focused[22]);
        fn3.__closure = {
          withSpring: isHeaderHidden(focused[23]).withSpring,
          showHeaderBlur: derivedValue,
          HEADER_CHANGE_PHYSICS: obj3,
        };
        fn3.__workletHash = 2825977044105;
        fn3.__initData = __initData3;
        ({
          withSpring: isHeaderHidden(focused[23]).withSpring,
          showHeaderBlur: derivedValue,
          HEADER_CHANGE_PHYSICS: obj3,
        });
        const animatedStyle = obj5.useAnimatedStyle(fn3);
        if (cResult[0] !== animatedStyle) {
          const items = [StyleSheet.absoluteFill, animatedStyle];
          let num = 0;
          cResult[0] = animatedStyle;
          cResult[1] = items;
          tmp7 = items;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === animatedProps) {
          let tmp9;
          let tmp11;
          let tmp15;
          if (cResult[3] === tmp3.blurStyles) {
            tmp9 = cResult[4];
          }
          if (cResult[5] !== tmp3.stroke) {
            const obj7 = { style: tmp3.stroke };
            const tmp14 = closure_23(scrollPosition(tmp[25]), obj7);
            cResult[5] = tmp3.stroke;
            cResult[6] = tmp14;
            tmp11 = tmp14;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] !== tmp3.strokeAlt) {
            const obj8 = { style: tmp3.strokeAlt };
            const tmp18 = closure_23(scrollPosition(tmp[25]), obj8);
            cResult[7] = tmp3.strokeAlt;
            cResult[8] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] === tmp3.strokeContainer) {
            if (cResult[10] === tmp11) {
              let tmp19;
              if (cResult[11] === tmp15) {
                tmp19 = cResult[12];
              }
              if (cResult[13] === tmp7) {
                if (cResult[14] === tmp9) {
                  let tmp23;
                  if (cResult[15] === tmp19) {
                    tmp23 = cResult[16];
                  }
                  return tmp23;
                }
              }
              const obj9 = { style: tmp7, pointerEvents: "none", children: items1 };
              items1 = [tmp9, tmp19];
              const tmp26 = closure_24(scrollPosition(tmp[26]), obj9);
              cResult[13] = tmp7;
              cResult[14] = tmp9;
              cResult[15] = tmp19;
              cResult[16] = tmp26;
              tmp23 = tmp26;
            }
          }
          const obj10 = { style: tmp3.strokeContainer, children: items2 };
          items2 = [tmp11, tmp15];
          const tmp22 = closure_24(scrollPosition(tmp[25]), obj10);
          cResult[9] = tmp3.strokeContainer;
          cResult[10] = tmp11;
          cResult[11] = tmp15;
          cResult[12] = tmp22;
          tmp19 = tmp22;
        }
        const obj11 = { style: tmp3.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
        const tmp10 = closure_23(scrollPosition(tmp[24]), obj11);
        cResult[2] = animatedProps;
        cResult[3] = tmp3.blurStyles;
        cResult[4] = tmp10;
        tmp9 = tmp10;
      }
    : (isHeaderHidden) => {
        let items;
        let items1;
        let items2;
        isHeaderHidden = isHeaderHidden.isHeaderHidden;
        const scrollPosition = isHeaderHidden.scrollPosition;
        const focused = isHeaderHidden.focused;
        const tmp = closure_26();
        let obj = isHeaderHidden(focused[22]);
        const fn = function c() {
          const value = isHeaderHidden.get();
          let tmp2 = !value;
          if (tmp2) {
            tmp2 = null != focused.get() || scrollPosition.get() > 0;
            const tmp5 = null != focused.get() || scrollPosition.get() > 0;
          }
          return tmp2;
        };
        fn.__closure = { isHeaderHidden, focused, scrollPosition };
        fn.__workletHash = 17400658237995;
        fn.__initData = __initData4;
        const derivedValue = obj.useDerivedValue(fn);
        const fn2 = function l() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (derivedValue.get()) {
            num = 0.3;
          }
          const obj = { blurAmount: withSpring(num) };
          return obj;
        };
        const obj2 = isHeaderHidden(focused[22]);
        obj3 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
        fn2.__closure = obj3;
        fn2.__workletHash = 850837345455;
        fn2.__initData = __initData5;
        const animatedProps = obj2.useAnimatedProps(fn2);
        const fn3 = function u() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (derivedValue.get()) {
            num = 1;
          }
          const obj = { opacity: withSpring(num, obj3) };
          return obj;
        };
        const obj4 = isHeaderHidden(focused[22]);
        fn3.__closure = {
          withSpring: isHeaderHidden(focused[23]).withSpring,
          showHeaderBlur: derivedValue,
          HEADER_CHANGE_PHYSICS: obj3,
        };
        fn3.__workletHash = 6395364000396;
        fn3.__initData = __initData6;
        ({
          withSpring: isHeaderHidden(focused[23]).withSpring,
          showHeaderBlur: derivedValue,
          HEADER_CHANGE_PHYSICS: obj3,
        });
        const animatedStyle = obj4.useAnimatedStyle(fn3);
        const obj6 = { style: items, pointerEvents: "none", children: items1 };
        items = [StyleSheet.absoluteFill, animatedStyle];
        let tmp5 = scrollPosition(focused[26]);
        items1 = [,];
        const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
        items1[0] = closure_23(scrollPosition(focused[24]), obj7);
        const obj8 = { style: tmp.strokeContainer, children: items2 };
        items2 = [,];
        const obj9 = { style: tmp.stroke };
        const tmp6 = scrollPosition(focused[25]);
        items2[0] = closure_23(scrollPosition(focused[25]), obj9);
        const obj10 = { style: tmp.strokeAlt };
        items2[1] = closure_23(scrollPosition(focused[25]), obj10);
        items1[1] = closure_24(tmp6, obj8);
        return closure_24(tmp5, obj6);
      },
);
const __initData7 = {
  code: "function VoicePanelHeaderTsx7(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}",
};
const __initData8 = {
  code: "function VoicePanelHeaderTsx8(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}",
};
const __initData9 = {
  code: "function VoicePanelHeaderTsx9(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}",
};
const __initData10 = {
  code: "function VoicePanelHeaderTsx10(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}",
};
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let controlsSpecs;
        let derivedValue;
        let focused;
        let id;
        const obj = id(controlsSpecs[21]);
        const cResult = obj.c(12);
        id = AuthenticationStore.getId();
        const context = derivedValue.useContext(focused(controlsSpecs[27]));
        focused = context.focused;
        controlsSpecs = context.controlsSpecs;
        obj3 = id(controlsSpecs[22]);
        const sharedValue = obj3.useSharedValue(SpeakingStore.isSpeaking(id));
        const obj2 = derivedValue;
        if (cResult[0] === id) {
          let tmp8;
          let tmp9;
          if (cResult[1] === sharedValue) {
            tmp8 = cResult[2];
            tmp9 = cResult[3];
          }
          const layoutEffect = obj2.useLayoutEffect(tmp8, tmp9);
          const tmp12 = closure_26();
          const tmpResult = id(controlsSpecs[22]);
          class S {
            constructor() {
              const value =
                null != focused.get() &&
                controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN &&
                sharedValue.get();
              return value;
            }
          }
          const obj4 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
          S.__closure = obj4;
          S.__workletHash = 297593450050;
          S.__initData = __initData7;
          derivedValue = tmpResult.useDerivedValue(S);
          const tmpResult2 = id(controlsSpecs[22]);
          class H {
            constructor() {
              let opacity = 0;
              if (derivedValue.get()) {
                opacity = 1;
              }
              return { opacity };
            }
          }
          const obj5 = { showSpeakingIndicator: derivedValue };
          H.__closure = obj5;
          H.__workletHash = 10090467727535;
          H.__initData = __initData8;
          const animatedStyle = tmpResult2.useAnimatedStyle(H);
          if (cResult[4] === animatedStyle) {
            let tmp18;
            let tmp19;
            if (cResult[5] === tmp12.focusedSpeakingDotWrapper) {
              tmp18 = cResult[6];
            }
            if (cResult[7] !== tmp12.focusedSpeakingDot) {
              const obj6 = { style: tmp12.focusedSpeakingDot };
              const tmp21 = closure_23(focused(controlsSpecs[26]), obj6);
              class S {
                constructor() {
                  const value =
                    null != focused.get() &&
                    controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN &&
                    sharedValue.get();
                  return value;
                }
              }
              cResult[8] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[8];
            }
            if (cResult[9] === tmp18) {
              let tmp22;
              if (cResult[10] === tmp19) {
                tmp22 = cResult[11];
              }
              return tmp22;
            }
            const obj7 = { style: null, pointerEvents: "none", children: tmp19 };
            class S {
              constructor() {
                const value =
                  null != focused.get() &&
                  controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN &&
                  sharedValue.get();
                return value;
              }
            }
            const tmp24 = closure_23(focused(controlsSpecs[26]), obj7);
            cResult[9] = tmp18;
            cResult[10] = tmp19;
            cResult[11] = tmp24;
            tmp22 = tmp24;
          }
          const items = [tmp12.focusedSpeakingDotWrapper, animatedStyle];
          cResult[4] = animatedStyle;
          cResult[5] = tmp12.focusedSpeakingDotWrapper;
          cResult[6] = items;
          tmp18 = items;
        }
        const fn = function t() {
          function handleChange() {
            const result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
          }
          let result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
          const result1 = SpeakingStore.addReactChangeListener(handleChange);
          return () => {
            const result = SpeakingStore.removeReactChangeListener(handleChange);
          };
        };
        const items1 = [id, sharedValue];
        cResult[0] = id;
        cResult[1] = sharedValue;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      }
    : () => {
        let controlsSpecs;
        let derivedValue;
        let focused;
        let items1;
        let obj6;
        const id = AuthenticationStore.getId();
        const context = derivedValue.useContext(focused(controlsSpecs[27]));
        focused = context.focused;
        controlsSpecs = context.controlsSpecs;
        const obj = id(controlsSpecs[22]);
        const sharedValue = obj.useSharedValue(SpeakingStore.isSpeaking(id));
        const items = [id, sharedValue];
        const layoutEffect = derivedValue.useLayoutEffect(() => {
          function handleChange() {
            const result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
          }
          let result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
          const result1 = SpeakingStore.addReactChangeListener(handleChange);
          return () => {
            const result = SpeakingStore.removeReactChangeListener(handleChange);
          };
        }, items);
        const tmp5 = closure_26();
        const fn = function u() {
          const value =
            null != focused.get() && controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN && sharedValue.get();
          return value;
        };
        obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
        fn.__closure = obj3;
        fn.__workletHash = 4860356878028;
        fn.__initData = __initData9;
        const obj2 = id(controlsSpecs[22]);
        derivedValue = obj2.useDerivedValue(fn);
        const fn2 = function h() {
          let opacity = 0;
          if (derivedValue.get()) {
            opacity = 1;
          }
          return { opacity };
        };
        fn2.__closure = { showSpeakingIndicator: derivedValue };
        fn2.__workletHash = 898986210230;
        fn2.__initData = __initData10;
        const obj4 = id(controlsSpecs[22]);
        const animatedStyle = obj4.useAnimatedStyle(fn2);
        const obj5 = { style: items1, pointerEvents: "none", children: closure_23(focused(controlsSpecs[26]), obj6) };
        items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
        obj6 = { style: tmp5.focusedSpeakingDot };
        const tmp8 = focused(controlsSpecs[26]);
        return closure_23(tmp8, obj5);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_41 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let muted;
      let speaker;
      let stateFromStores;
      let tmp6;
      let tmp7;
      let obj = stateFromStores(576);
      const cResult = obj.c(10);
      channelId = channelId.channelId;
      const tmp5 = useMyCurrentStageChannelRoleDefault(channelId);
      if (tmp5 != null) {
        speaker = tmp5.speaker;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageMusicStore];
        const fn = function o() {
          return muted.isMuted();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      const tmpResult2 = stateFromStores(9561);
      if (tmpResult2.useShowStageMusicMuteButton(channelId)) {
        if (speaker) {
          let tmp10;
          let tmp13;
          if (cResult[2] !== stateFromStores) {
            let stringResult;
            const intl = tmp(1126).intl;
            const string = intl.string;
            const t = tmp(1126).t;
            if (stateFromStores) {
              stringResult = string(t.ScHlfl);
            } else {
              stringResult = string(t.zqxfrf);
            }
            cResult[2] = stateFromStores;
            cResult[3] = stringResult;
            tmp10 = stringResult;
          } else {
            tmp10 = cResult[3];
          }
          const tmp4Result = importDefault(stateFromStores ? 9570 : 9572);
          if (cResult[4] !== stateFromStores) {
            const fn2 = function p() {
              const obj = StageMusicActionCreators;
              return obj.updateStageMusicMuted(!stateFromStores);
            };
            cResult[4] = stateFromStores;
            cResult[5] = fn2;
            tmp13 = fn2;
          } else {
            tmp13 = cResult[5];
          }
          if (cResult[6] === tmp10) {
            if (cResult[7] === tmp4Result) {
              let tmp14;
              if (cResult[8] === tmp13) {
                tmp14 = cResult[9];
              }
              return tmp14;
            }
          }
          const obj2 = { accessibilityLabel: tmp10, icon: tmp4Result, onPress: tmp13 };
          const tmp16 = closure_23(VoicePanelIconButtonDefault, obj2);
          cResult[6] = tmp10;
          cResult[7] = tmp4Result;
          cResult[8] = tmp13;
          cResult[9] = tmp16;
          tmp14 = tmp16;
        }
      }
      return null;
    }
  : (channelId) => {
      let muted;
      let speaker;
      channelId = channelId.channelId;
      let stateFromStores;
      const tmp3 = useMyCurrentStageChannelRoleDefault(channelId);
      if (tmp3 != null) {
        speaker = tmp3.speaker;
      }
      let obj = stateFromStores(504);
      const items = [StageMusicStore];
      stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
      let tmp7Result = null;
      const obj2 = stateFromStores(9561);
      if (obj2.useShowStageMusicMuteButton(channelId)) {
        tmp7Result = null;
        if (speaker) {
          let stringResult;
          const tmpResult = VoicePanelIconButtonDefault;
          const intl = tmp4(1126).intl;
          const string = intl.string;
          const t = tmp4(1126).t;
          if (stateFromStores) {
            stringResult = string(t.ScHlfl);
          } else {
            stringResult = string(t.zqxfrf);
          }
          obj3 = {
            accessibilityLabel: stringResult,
            icon: importDefault(stateFromStores ? 9570 : 9572),
            onPress() {
              const obj = StageMusicActionCreators;
              return obj.updateStageMusicMuted(!stateFromStores);
            },
          };
          tmp7Result = closure_23(tmpResult, obj3);
        }
      }
      return tmp7Result;
    };
const __initData11 = {
  code: "function VoicePanelHeaderTsx11(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData12 = {
  code: "function VoicePanelHeaderTsx12(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}",
};
const __initData13 = {
  code: "function VoicePanelHeaderTsx13(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}",
};
const __initData14 = {
  code: "function VoicePanelHeaderTsx14(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs_0.paddingTop;return{...specs_0,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData15 = {
  code: "function VoicePanelHeaderTsx15(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}",
};
const __initData16 = {
  code: "function VoicePanelHeaderTsx16(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height_0}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height_0:0,MODE_CHANGE_PHYSICS)}]};}",
};
const __initData17 = {
  code: 'function VoicePanelHeaderTsx17(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?"none":"box-none",importantForAccessibility:isHeaderHidden.get()?"no-hide-descendants":"auto",accessibilityElementsHidden:isHeaderHidden.get()};}',
};
const __initData18 = {
  code: "function VoicePanelHeaderTsx18(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData19 = {
  code: "function VoicePanelHeaderTsx19(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}",
};
const __initData20 = {
  code: "function VoicePanelHeaderTsx20(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}",
};
const __initData21 = {
  code: "function VoicePanelHeaderTsx21(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs_0.paddingTop;return{...specs_0,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData22 = {
  code: "function VoicePanelHeaderTsx22(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}",
};
const __initData23 = {
  code: "function VoicePanelHeaderTsx23(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height_0}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height_0:0,MODE_CHANGE_PHYSICS)}]};}",
};
const __initData24 = {
  code: "function VoicePanelHeaderTsx24(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (wrapperOffset) => {
        let DOWN;
        let channelId;
        let channelType;
        let closure_15;
        let controlsSpecs;
        let derivedValue1;
        let first;
        let focused;
        let guildId;
        let scrollPosition;
        let stringResult;
        let tmp10;
        let tmp15;
        let tmp16;
        let tmp19;
        let tmp21;
        let tmp33;
        let tmp55;
        let tmp58;
        let token;
        let tmp = wrapperOffset;
        let tmp2 = channelId;
        let obj = wrapperOffset(channelId[21]);
        const cResult = obj.c(99);
        wrapperOffset = wrapperOffset.wrapperOffset;
        const gestureState = wrapperOffset.gestureState;
        const tmp4 = closure_26();
        let obj2 = controlsSpecs;
        const context = controlsSpecs.useContext(gestureState(channelId[27]));
        channelId = context.channelId;
        ({ channelType, focused } = context);
        controlsSpecs = context.controlsSpecs;
        const mode = context.mode;
        const safeArea = context.safeArea;
        const connected = context.connected;
        ({ scrollPosition, guildId } = context);
        obj3 = wrapperOffset(channelId[36]);
        const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
        let tmp8 = gestureState(channelId[37])(channelId);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { location: "VoicePanelHeader" };
          let num = 0;
          cResult[0] = obj4;
          first = obj4;
        } else {
          first = cResult[0];
        }
        const tmp5Result = gestureState(tmp2[38]);
        const treatment = tmp5Result.useConfig(first).treatment;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [derivedValue1, token, ChannelStore, connected];
          let num2 = 1;
          cResult[1] = items;
          tmp10 = items;
        } else {
          tmp10 = cResult[1];
        }
        if (cResult[2] !== channelId) {
          function re() {
            const channel = ChannelStore.getChannel(channelId);
            let channelName;
            if (null != channel) {
              const obj = useChannelName;
              channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
            }
            if (channelName == null) {
              const intl = intl5.intl;
              channelName = intl.string(intl5.t.zLZPmk);
            }
            return channelName;
          }
          const items1 = [channelId];
          let num3 = 2;
          cResult[2] = channelId;
          cResult[3] = re;
          cResult[4] = items1;
          tmp16 = items1;
          tmp15 = re;
        } else {
          tmp15 = cResult[3];
          tmp16 = cResult[4];
        }
        let tmpResult = tmp(tmp2[29]);
        const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp15, tmp16);
        [tmp19, AuthenticationStore] = focused(obj2.useState(undefined), 2);
        focused(obj2.useState(undefined), 2);
        [tmp21, ChannelStore] = focused(obj2.useState(null), 2);
        function handleFocusChange(Dispatcher) {
          let tmp3 = null;
          if (null != Dispatcher) {
            const participant = ChannelRTCStore.getParticipant(tmp2, Dispatcher);
            let type = null;
            if (null != participant) {
              type = participant.type;
            }
            tmp3 = type;
          }
          ChannelStore(tmp3);
          AuthenticationStore(Dispatcher);
        }
        focused(obj2.useState(null), 2);
        function ce() {
          const value = focused.get();
          let id;
          if (value != null) {
            id = value.id;
          }
          return id;
        }
        ce.__closure = { focused };
        ce.__workletHash = 8016082904457;
        ce.__initData = __initData11;
        function se(arg0, arg1) {
          if (arg0 !== arg1) {
            const obj = ReanimatedRexport;
            obj.runOnJS(handleFocusChange)(arg0);
          }
        }
        const tmpResult15 = tmp(tmp2[22]);
        se.__closure = { runOnJS: tmp(tmp2[22]).runOnJS, handleFocusChange };
        se.__workletHash = 9918394343352;
        se.__initData = __initData12;
        ({ runOnJS: tmp(tmp2[22]).runOnJS, handleFocusChange });
        const animatedReaction = tmpResult15.useAnimatedReaction(ce, se);
        const tmpResult16 = tmp(tmp2[40]);
        token = tmpResult16.useToken(tmp5(tmp2[19]).modules.mobile.VOICE_PANEL_GUTTER);
        const tmpResult17 = tmp(tmp2[22]);
        class He {
          constructor() {
            let num;
            const tmp = calculateVoicePanelHeaderSpecsDefault;
            const tmpResult = tmp(safeArea.get(), token);
            if (mode.get() === constants.PIP) {
              num = -tmpResult.height + EDGE_GUTTER;
            } else {
              num = 0;
              if (mode.get() === tmp3.DISMISSED) {
                num = 0;
              }
            }
            return num;
          }
        }
        He.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(tmp2[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          gestureState,
          connected,
          EDGE_GUTTER,
        };
        He.__workletHash = 2737204369147;
        He.__initData = __initData13;
        ({
          calculateVoicePanelHeaderSpecs: gestureState(tmp2[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          gestureState,
          connected,
          EDGE_GUTTER,
        });
        const derivedValue = tmpResult17.useDerivedValue(He);
        const tmpResult18 = tmp(tmp2[22]);
        class Ee {
          constructor() {
            let num;
            let num2;
            let num3;
            let sum;
            let tmp8;
            let withTiming;
            const tmp2 = calculateVoicePanelHeaderSpecsDefault;
            const tmp2Result = tmp2(safeArea.get(), token);
            const value = mode.get();
            const PIP = constants.PIP;
            const height = tmp2Result.height;
            if (connected.get()) {
              sum = height;
            } else {
              sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
            }
            obj3 = {
              paddingTop: tmp8,
              borderTopLeftRadius: num2,
              borderTopRightRadius: num,
              height: sum,
              opacity: withTiming(num3, OPACITY_TIMING),
            };
            tmp8 = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
            const merged = Object.assign(tmp2Result);
            num = 24;
            num2 = 24;
            if (connected.get()) {
              num2 = 0;
            }
            if (connected.get()) {
              num = 0;
            }
            withTiming = timing.withTiming;
            timing;
            if (value === PIP) {
              num3 = 0;
            } else {
              num3 = 1;
            }
            const withSpring = spring.withSpring;
            spring;
            const value2 = derivedValue.get();
            if (!connected.get()) {
              let tmp15;
              if (wrapperOffset.get().gestureActive) {
                tmp15 = closure_18;
              }
              const items = [{ translateY: withSpring(value2, tmp15) }];
              obj3.transform = items;
              const obj4 = { translateY: withSpring(value2, tmp15) };
              return obj3;
            }
            tmp15 = closure_16;
          }
        }
        Ee.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(tmp2[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          connected,
          EDGE_GUTTER,
          withTiming: tmp(tmp2[42]).withTiming,
          OPACITY_TIMING,
          withSpring: tmp(tmp2[23]).withSpring,
          yOffset: derivedValue,
          wrapperOffset,
          DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,
          UI_SHOW_HIDE_PHYSICS,
        };
        Ee.__workletHash = 9971353242678;
        Ee.__initData = __initData14;
        ({
          calculateVoicePanelHeaderSpecs: gestureState(tmp2[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          connected,
          EDGE_GUTTER,
          withTiming: tmp(tmp2[42]).withTiming,
          OPACITY_TIMING,
          withSpring: tmp(tmp2[23]).withSpring,
          yOffset: derivedValue,
          wrapperOffset,
          DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,
          UI_SHOW_HIDE_PHYSICS,
        });
        const animatedStyle = tmpResult18.useAnimatedStyle(Ee);
        const tmpResult19 = tmp(tmp2[22]);
        class Ie {
          constructor() {
            const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
            return tmp;
          }
        }
        const obj8 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
        Ie.__closure = obj8;
        Ie.__workletHash = 12045427211815;
        Ie.__initData = __initData15;
        derivedValue1 = tmpResult19.useDerivedValue(Ie);
        const tmpResult20 = tmp(tmp2[22]);
        class Pe {
          constructor() {
            let items;
            const tmp2 = calculateVoicePanelHeaderSpecsDefault;
            const height = tmp2(safeArea.get(), token).height;
            const withTiming = timing.withTiming;
            let num = 1;
            timing;
            if (derivedValue1.get()) {
              num = 0;
            }
            const obj2 = { opacity: withTiming(num, OPACITY_TIMING), transform: items };
            const withSpring = spring.withSpring;
            let num2 = 0;
            spring;
            if (derivedValue1.get()) {
              num2 = -height;
            }
            items = [{ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) }];
            ({ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) });
            return obj2;
          }
        }
        Pe.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(tmp2[41]),
          safeArea,
          edgeGutter: token,
          withTiming: tmp(tmp2[42]).withTiming,
          isHeaderHidden: derivedValue1,
          OPACITY_TIMING,
          withSpring: tmp(tmp2[23]).withSpring,
          MODE_CHANGE_PHYSICS,
        };
        Pe.__workletHash = 11509667866329;
        Pe.__initData = __initData16;
        ({
          calculateVoicePanelHeaderSpecs: gestureState(tmp2[41]),
          safeArea,
          edgeGutter: token,
          withTiming: tmp(tmp2[42]).withTiming,
          isHeaderHidden: derivedValue1,
          OPACITY_TIMING,
          withSpring: tmp(tmp2[23]).withSpring,
          MODE_CHANGE_PHYSICS,
        });
        const animatedStyle1 = tmpResult20.useAnimatedStyle(Pe);
        function me() {
          let str2;
          let str = "box-none";
          if (derivedValue1.get()) {
            str = "none";
          }
          const obj2 = {
            pointerEvents: str,
            importantForAccessibility: str2,
            accessibilityElementsHidden: derivedValue1.get(),
          };
          str2 = "auto";
          if (derivedValue1.get()) {
            str2 = "no-hide-descendants";
          }
          return obj2;
        }
        me.__closure = { isHeaderHidden: derivedValue1 };
        me.__workletHash = 13251177319922;
        me.__initData = __initData17;
        const tmpResult21 = tmp(tmp2[22]);
        const animatedProps = tmpResult21.useAnimatedProps(me);
        const tmpResult22 = tmp(tmp2[43]);
        const canInviteMembers = tmpResult22.useCanInviteMembers(channelId);
        const tmpResult23 = tmp(tmp2[44]);
        tmpResult23.useInviteMembersCallback(channelId);
        const tmp31 = gestureState(tmp2[45])();
        const tmpResult24 = tmp(tmp2[46]);
        tmpResult24.useNavigatorBackPressHandler(tmp31);
        if (null != tmp21) {
          DOWN = constants.LEFT;
          tmp33 = constants;
        } else {
          tmp33 = constants;
          DOWN = constants.DOWN;
        }
        if (cResult[5] === tmp8) {
          let tmp38;
          let tmp42;
          let tmp45;
          let tmp44;
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            let id = AuthenticationStore.getId();
            cResult[8] = id;
            tmp38 = id;
          } else {
            tmp38 = cResult[8];
          }
          const tmp41 = gestureState(tmp2[47])(tmp38, channelId, guildId);
          MODE_CHANGE_PHYSICS = tmp41;
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [handleFocusChange];
            cResult[9] = items2;
            tmp42 = items2;
          } else {
            tmp42 = cResult[9];
          }
          if (cResult[10] !== tmp41) {
            function xe() {
              if (null != closure_15) {
                obj3 = useStableParticipant;
                if (obj3.isStableUserParticipant(closure_15)) {
                  const tmp10Result = useStableParticipant;
                  if (tmp10Result.stableParticipantHasVideo(closure_15)) {
                    const videoDevices = MediaEngineStore.getVideoDevices();
                    const _Object = Object;
                    const keys = Object.keys(videoDevices);
                    if (keys.length >= 2) {
                      const videoDeviceId = MediaEngineStore.getVideoDeviceId();
                      let facing;
                      if (videoDevices[videoDeviceId] != null) {
                        facing = tmp13.facing;
                      }
                      const found = keys.find((item) => item !== videoDeviceId);
                      if (null != found) {
                        let facing1;
                        if (videoDevices[found] != null) {
                          facing1 = tmp7.facing;
                        }
                      }
                      if (null != facing) {
                        let stringResult;
                        if (null != tmp6) {
                          if ("back" === facing) {
                            if ("front" === tmp6) {
                              const intl3 = intl5.intl;
                              stringResult = intl3.string(intl5.t["/R1SBx"]);
                            }
                          }
                          if ("front" === facing) {
                            if ("back" === tmp6) {
                              const intl2 = intl5.intl;
                              stringResult = intl2.string(intl5.t["7YZ/Si"]);
                            }
                          }
                          const intl = intl5.intl;
                          stringResult = intl.string(intl5.t["t9eQ/g"]);
                        }
                        return stringResult;
                      }
                      const intl4 = intl5.intl;
                      stringResult = intl4.string(intl5.t["t9eQ/g"]);
                    }
                  }
                }
              }
            }
            const items3 = [tmp41];
            cResult[10] = tmp41;
            cResult[11] = xe;
            cResult[12] = items3;
            tmp45 = items3;
            tmp44 = xe;
          } else {
            tmp44 = cResult[11];
            tmp45 = cResult[12];
          }
          const tmpResult25 = tmp(tmp2[29]);
          const stateFromStores1 = tmpResult25.useStateFromStores(tmp42, tmp44, tmp45);
          const _Symbol3 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
            cResult[13] = Ue;
          } else {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
          }
          let str = "0deg";
          if (DOWN === tmp33.LEFT) {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
          }
          if (cResult[14] !== str) {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
            const items4 = [{ rotateZ: str }];
            const obj10 = { rotateZ: str };
            tmp49[0] = items4;
            cResult[14] = str;
            cResult[15] = tmp49;
          } else {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
          }
          if (cResult[16] !== channelId) {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
            tmp51[0] = channelId;
            cResult[16] = channelId;
            cResult[17] = tmp51;
          } else {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
          }
          const tmpResult26 = tmp(tmp2[49]);
          const isSecureFramesUIEnabled = tmpResult26.useIsSecureFramesUIEnabled(tmp51);
          if (tmp21 === ParticipantTypes.USER) {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
            if (null != tmp19) {
              class Ue {
                constructor() {
                  const videoDeviceId = handleFocusChange.getVideoDeviceId();
                  const keys = Object.keys(handleFocusChange.getVideoDevices());
                  const found = keys.find((item) => item !== closure_0);
                  if (null != found) {
                    const obj = gestureState(channelId[48]);
                    obj.setVideoDevice(found);
                  }
                }
              }
            }
          }
          if (cResult[18] === channelId) {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
            const tmpResult27 = tmp(tmp2[50]);
            const isUserSecureFramesVerified = tmpResult27.useIsUserSecureFramesVerified(tmp55);
            if (tmp21 === ParticipantTypes.STREAM) {
              class Ue {
                constructor() {
                  const videoDeviceId = handleFocusChange.getVideoDeviceId();
                  const keys = Object.keys(handleFocusChange.getVideoDevices());
                  const found = keys.find((item) => item !== closure_0);
                  if (null != found) {
                    const obj = gestureState(channelId[48]);
                    obj.setVideoDevice(found);
                  }
                }
              }
              if (null != tmp19) {
                class Ue {
                  constructor() {
                    const videoDeviceId = handleFocusChange.getVideoDeviceId();
                    const keys = Object.keys(handleFocusChange.getVideoDevices());
                    const found = keys.find((item) => item !== closure_0);
                    if (null != found) {
                      const obj = gestureState(channelId[48]);
                      obj.setVideoDevice(found);
                    }
                  }
                }
              }
            }
            if (cResult[21] === channelId) {
              class Ue {
                constructor() {
                  const videoDeviceId = handleFocusChange.getVideoDeviceId();
                  const keys = Object.keys(handleFocusChange.getVideoDevices());
                  const found = keys.find((item) => item !== closure_0);
                  if (null != found) {
                    const obj = gestureState(channelId[48]);
                    obj.setVideoDevice(found);
                  }
                }
              }
              const tmpResult28 = tmp(tmp2[50]);
              const isStreamSecureFramesVerified = tmpResult28.useIsStreamSecureFramesVerified(tmp58);
              if (ParticipantTypes.STREAM !== tmp21) {
                class Ue {
                  constructor() {
                    const videoDeviceId = handleFocusChange.getVideoDeviceId();
                    const keys = Object.keys(handleFocusChange.getVideoDevices());
                    const found = keys.find((item) => item !== closure_0);
                    if (null != found) {
                      const obj = gestureState(channelId[48]);
                      obj.setVideoDevice(found);
                    }
                  }
                }
                if (ParticipantTypes.USER !== tmp21) {
                  class Ue {
                    constructor() {
                      const videoDeviceId = handleFocusChange.getVideoDeviceId();
                      const keys = Object.keys(handleFocusChange.getVideoDevices());
                      const found = keys.find((item) => item !== closure_0);
                      if (null != found) {
                        const obj = gestureState(channelId[48]);
                        obj.setVideoDevice(found);
                      }
                    }
                  }
                }
              }
              if (tmp8) {
                class Ue {
                  constructor() {
                    const videoDeviceId = handleFocusChange.getVideoDeviceId();
                    const keys = Object.keys(handleFocusChange.getVideoDevices());
                    const found = keys.find((item) => item !== closure_0);
                    if (null != found) {
                      const obj = gestureState(channelId[48]);
                      obj.setVideoDevice(found);
                    }
                  }
                }
                const ONYX = ThemeTypes.ONYX;
              }
              if (cResult[24] === animatedStyle) {
                class Ue {
                  constructor() {
                    const videoDeviceId = handleFocusChange.getVideoDeviceId();
                    const keys = Object.keys(handleFocusChange.getVideoDevices());
                    const found = keys.find((item) => item !== closure_0);
                    if (null != found) {
                      const obj = gestureState(channelId[48]);
                      obj.setVideoDevice(found);
                    }
                  }
                }
                if (cResult[27] === focused) {
                  class Ue {
                    constructor() {
                      const videoDeviceId = handleFocusChange.getVideoDeviceId();
                      const keys = Object.keys(handleFocusChange.getVideoDevices());
                      const found = keys.find((item) => item !== closure_0);
                      if (null != found) {
                        const obj = gestureState(channelId[48]);
                        obj.setVideoDevice(found);
                      }
                    }
                  }
                }
                const obj11 = { isHeaderHidden: derivedValue1, scrollPosition, focused };
                cResult[27] = focused;
                cResult[28] = derivedValue1;
                cResult[29] = scrollPosition;
                cResult[30] = closure_23(closure_35, obj11);
                const tmp64 = closure_23(closure_35, obj11);
              }
              const items5 = [tmp4.headerWrapper, animatedStyle];
              cResult[24] = animatedStyle;
              cResult[25] = tmp4.headerWrapper;
              cResult[26] = items5;
            }
            const obj12 = { streamKey: null, channelId };
            cResult[21] = channelId;
            cResult[22] = null;
            cResult[23] = obj12;
            tmp58 = obj12;
          }
          const obj13 = { userId: null, channelId };
          cResult[18] = channelId;
          cResult[19] = null;
          cResult[20] = obj13;
          tmp55 = obj13;
        }
        if (DOWN === tmp33.LEFT) {
          class Ue {
            constructor() {
              const videoDeviceId = handleFocusChange.getVideoDeviceId();
              const keys = Object.keys(handleFocusChange.getVideoDevices());
              const found = keys.find((item) => item !== closure_0);
              if (null != found) {
                const obj = gestureState(channelId[48]);
                obj.setVideoDevice(found);
              }
            }
          }
          stringResult = obj22.string(tmp(tmp2[31]).t["9M6OdC"]);
        } else {
          class Ue {
            constructor() {
              const videoDeviceId = handleFocusChange.getVideoDeviceId();
              const keys = Object.keys(handleFocusChange.getVideoDevices());
              const found = keys.find((item) => item !== closure_0);
              if (null != found) {
                const obj = gestureState(channelId[48]);
                obj.setVideoDevice(found);
              }
            }
          }
          const string = tmp36.string;
          const t = tmp(tmp2[31]).t;
          if (tmp8) {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
          } else {
            class Ue {
              constructor() {
                const videoDeviceId = handleFocusChange.getVideoDeviceId();
                const keys = Object.keys(handleFocusChange.getVideoDevices());
                const found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  const obj = gestureState(channelId[48]);
                  obj.setVideoDevice(found);
                }
              }
            }
          }
        }
        cResult[5] = tmp8;
        cResult[6] = DOWN;
        cResult[7] = stringResult;
      }
    : (wrapperOffset) => {
        let _undefined;
        let _undefined2;
        let c10;
        let c9;
        let channelType;
        let closure_16;
        let guildId;
        let intl3;
        let items10;
        let items11;
        let items12;
        let items13;
        let items6;
        let items7;
        let items8;
        let items9;
        let obj21;
        let obj33;
        let scrollPosition;
        let stringResult;
        let tmp10;
        let tmp12;
        let tmp25;
        let tmp2Result11;
        wrapperOffset = wrapperOffset.wrapperOffset;
        const gestureState = wrapperOffset.gestureState;
        const layout = wrapperOffset.layout;
        let channelId;
        let controlsSpecs;
        AuthenticationStore = undefined;
        c10 = undefined;
        let token;
        let derivedValue1;
        let DOWN;
        UI_SHOW_HIDE_PHYSICS = undefined;
        let tmp = closure_26();
        let obj = controlsSpecs;
        let tmp2 = gestureState;
        let tmp3 = channelId;
        const context = controlsSpecs.useContext(gestureState(channelId[27]));
        channelId = context.channelId;
        const focused = context.focused;
        controlsSpecs = context.controlsSpecs;
        const mode = context.mode;
        const safeArea = context.safeArea;
        const connected = context.connected;
        ({ guildId, channelType, scrollPosition } = context);
        let obj2 = wrapperOffset(channelId[36]);
        const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
        let tmp40Result10 = gestureState(channelId[37])(channelId);
        obj3 = gestureState(channelId[38]);
        const treatment = obj3.useConfig({ location: "VoicePanelHeader" }).treatment;
        let obj4 = wrapperOffset(channelId[29]);
        let items = [derivedValue1, token, c10, connected];
        const items1 = [channelId];
        const stateFromStores = obj4.useStateFromStores(
          items,
          () => {
            const channel = ChannelStore.getChannel(channelId);
            let channelName;
            if (null != channel) {
              const obj = useChannelName;
              channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
            }
            if (channelName == null) {
              const intl = intl5.intl;
              channelName = intl.string(intl5.t.zLZPmk);
            }
            return channelName;
          },
          items1,
        );
        [tmp10, c9] = focused(controlsSpecs.useState(undefined), 2);
        focused(controlsSpecs.useState(undefined), 2);
        const tmp11 = focused(controlsSpecs.useState(null), 2);
        [tmp12, c10] = tmp11;
        const items2 = [channelId];
        const handleFocusChange = controlsSpecs.useCallback((arg0) => {
          let tmp3 = null;
          if (null != arg0) {
            const participant = ChannelRTCStore.getParticipant(tmp2, arg0);
            let type = null;
            if (null != participant) {
              type = participant.type;
            }
            tmp3 = type;
          }
          _undefined2(tmp3);
          _undefined(arg0);
        }, items2);
        const fn = function f() {
          const value = focused.get();
          let id;
          if (value != null) {
            id = value.id;
          }
          return id;
        };
        fn.__closure = { focused };
        fn.__workletHash = 3671264887776;
        fn.__initData = __initData18;
        const fn2 = function u(arg0, arg1) {
          if (arg0 !== arg1) {
            const obj = ReanimatedRexport;
            obj.runOnJS(callback)(arg0);
          }
        };
        const obj5 = wrapperOffset(channelId[22]);
        fn2.__closure = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
        fn2.__workletHash = 3195747765779;
        fn2.__initData = __initData19;
        ({ runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange });
        const animatedReaction = obj5.useAnimatedReaction(fn, fn2);
        const obj7 = wrapperOffset(channelId[40]);
        token = obj7.useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
        function _e() {
          let num;
          const tmp = calculateVoicePanelHeaderSpecsDefault;
          const tmpResult = tmp(safeArea.get(), token);
          if (mode.get() === constants.PIP) {
            num = -tmpResult.height + EDGE_GUTTER;
          } else {
            num = 0;
            if (mode.get() === tmp3.DISMISSED) {
              num = 0;
            }
          }
          return num;
        }
        const obj8 = wrapperOffset(channelId[22]);
        _e.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          gestureState,
          connected,
          EDGE_GUTTER,
        };
        _e.__workletHash = 11122710925211;
        _e.__initData = __initData20;
        ({
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          gestureState,
          connected,
          EDGE_GUTTER,
        });
        const derivedValue = obj8.useDerivedValue(_e);
        function he() {
          let num;
          let num2;
          let num3;
          let sum;
          let tmp8;
          let withTiming;
          const tmp2 = calculateVoicePanelHeaderSpecsDefault;
          const tmp2Result = tmp2(safeArea.get(), token);
          const value = mode.get();
          const PIP = constants.PIP;
          const height = tmp2Result.height;
          if (connected.get()) {
            sum = height;
          } else {
            sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
          }
          obj3 = {
            paddingTop: tmp8,
            borderTopLeftRadius: num2,
            borderTopRightRadius: num,
            height: sum,
            opacity: withTiming(num3, OPACITY_TIMING),
          };
          tmp8 = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
          const merged = Object.assign(tmp2Result);
          num = 24;
          num2 = 24;
          if (connected.get()) {
            num2 = 0;
          }
          if (connected.get()) {
            num = 0;
          }
          withTiming = timing.withTiming;
          timing;
          if (value === PIP) {
            num3 = 0;
          } else {
            num3 = 1;
          }
          const withSpring = spring.withSpring;
          spring;
          const value2 = derivedValue.get();
          if (!connected.get()) {
            let tmp15;
            if (wrapperOffset.get().gestureActive) {
              tmp15 = closure_18;
            }
            const items = [{ translateY: withSpring(value2, tmp15) }];
            obj3.transform = items;
            const obj4 = { translateY: withSpring(value2, tmp15) };
            return obj3;
          }
          tmp15 = closure_16;
        }
        const obj10 = wrapperOffset(channelId[22]);
        he.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          connected,
          EDGE_GUTTER,
          withTiming: wrapperOffset(channelId[42]).withTiming,
          OPACITY_TIMING,
          withSpring: wrapperOffset(channelId[23]).withSpring,
          yOffset: derivedValue,
          wrapperOffset,
          DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,
          UI_SHOW_HIDE_PHYSICS,
        };
        he.__workletHash = 13938557240528;
        he.__initData = __initData21;
        ({
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          connected,
          EDGE_GUTTER,
          withTiming: wrapperOffset(channelId[42]).withTiming,
          OPACITY_TIMING,
          withSpring: wrapperOffset(channelId[23]).withSpring,
          yOffset: derivedValue,
          wrapperOffset,
          DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,
          UI_SHOW_HIDE_PHYSICS,
        });
        const animatedStyle = obj10.useAnimatedStyle(he);
        function pe() {
          const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
          return tmp;
        }
        const obj13 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
        pe.__closure = obj13;
        pe.__workletHash = 5927654807363;
        pe.__initData = __initData22;
        const obj12 = wrapperOffset(channelId[22]);
        derivedValue1 = obj12.useDerivedValue(pe);
        const obj14 = wrapperOffset(channelId[22]);
        class Se {
          constructor() {
            let items;
            const tmp2 = calculateVoicePanelHeaderSpecsDefault;
            const height = tmp2(safeArea.get(), token).height;
            const withTiming = timing.withTiming;
            let num = 1;
            timing;
            if (derivedValue1.get()) {
              num = 0;
            }
            const obj2 = { opacity: withTiming(num, OPACITY_TIMING), transform: items };
            const withSpring = spring.withSpring;
            let num2 = 0;
            spring;
            if (derivedValue1.get()) {
              num2 = -height;
            }
            items = [{ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) }];
            ({ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) });
            return obj2;
          }
        }
        Se.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          withTiming: wrapperOffset(channelId[42]).withTiming,
          isHeaderHidden: derivedValue1,
          OPACITY_TIMING,
          withSpring: wrapperOffset(channelId[23]).withSpring,
          MODE_CHANGE_PHYSICS: DOWN,
        };
        Se.__workletHash = 11151013494207;
        Se.__initData = __initData23;
        ({
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          withTiming: wrapperOffset(channelId[42]).withTiming,
          isHeaderHidden: derivedValue1,
          OPACITY_TIMING,
          withSpring: wrapperOffset(channelId[23]).withSpring,
          MODE_CHANGE_PHYSICS: DOWN,
        });
        const animatedStyle1 = obj14.useAnimatedStyle(Se);
        function fe() {
          let str2;
          let str = "box-none";
          if (derivedValue1.get()) {
            str = "none";
          }
          const obj2 = {
            pointerEvents: str,
            importantForAccessibility: str2,
            accessibilityElementsHidden: derivedValue1.get(),
          };
          str2 = "auto";
          if (derivedValue1.get()) {
            str2 = "no-hide-descendants";
          }
          return obj2;
        }
        fe.__closure = { isHeaderHidden: derivedValue1 };
        fe.__workletHash = 9531590342194;
        fe.__initData = __initData24;
        const obj16 = wrapperOffset(channelId[22]);
        const animatedProps = obj16.useAnimatedProps(fe);
        const obj17 = wrapperOffset(channelId[43]);
        let canInviteMembers = obj17.useCanInviteMembers(channelId);
        const obj18 = wrapperOffset(channelId[44]);
        const inviteMembersCallback = obj18.useInviteMembersCallback(channelId);
        const tmp23 = gestureState(channelId[45])();
        const obj19 = wrapperOffset(channelId[46]);
        obj19.useNavigatorBackPressHandler(tmp23);
        if (null != tmp12) {
          DOWN = constants.LEFT;
          tmp25 = constants;
        } else {
          tmp25 = constants;
          DOWN = constants.DOWN;
        }
        if (DOWN === tmp25.LEFT) {
          let intl2 = tmp5(tmp3[31]).intl;
          stringResult = intl2.string(tmp5(tmp3[31]).t["9M6OdC"]);
        } else {
          let intl = tmp5(tmp3[31]).intl;
          const string = intl.string;
          const t = tmp5(tmp3[31]).t;
          if (tmp40Result10) {
            stringResult = string(t.RLCTQG);
          } else {
            stringResult = string(t["5lPjGj"]);
          }
        }
        let tmp2Result = tmp2(tmp3[47]);
        const tmp2ResultResult = tmp2Result(AuthenticationStore.getId(), channelId, guildId);
        UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
        const items3 = [handleFocusChange];
        const items4 = [tmp2ResultResult];
        const tmp5Result = wrapperOffset(tmp3[29]);
        const stateFromStores1 = tmp5Result.useStateFromStores(
          items3,
          () => {
            if (null != closure_16) {
              obj3 = useStableParticipant;
              if (obj3.isStableUserParticipant(closure_16)) {
                const tmp10Result = useStableParticipant;
                if (tmp10Result.stableParticipantHasVideo(closure_16)) {
                  const videoDevices = MediaEngineStore.getVideoDevices();
                  const _Object = Object;
                  const keys = Object.keys(videoDevices);
                  if (keys.length >= 2) {
                    const videoDeviceId = MediaEngineStore.getVideoDeviceId();
                    let facing;
                    if (videoDevices[videoDeviceId] != null) {
                      facing = tmp13.facing;
                    }
                    const found = keys.find((item) => item !== videoDeviceId);
                    if (null != found) {
                      let facing1;
                      if (videoDevices[found] != null) {
                        facing1 = tmp7.facing;
                      }
                    }
                    if (null != facing) {
                      let stringResult;
                      if (null != tmp6) {
                        if ("back" === facing) {
                          if ("front" === tmp6) {
                            const intl3 = intl5.intl;
                            stringResult = intl3.string(intl5.t["/R1SBx"]);
                          }
                        }
                        if ("front" === facing) {
                          if ("back" === tmp6) {
                            const intl2 = intl5.intl;
                            stringResult = intl2.string(intl5.t["7YZ/Si"]);
                          }
                        }
                        const intl = intl5.intl;
                        stringResult = intl.string(intl5.t["t9eQ/g"]);
                      }
                      return stringResult;
                    }
                    const intl4 = intl5.intl;
                    stringResult = intl4.string(intl5.t["t9eQ/g"]);
                  }
                }
              }
            }
          },
          items4,
        );
        const items5 = [DOWN];
        const callback1 = obj.useCallback(() => {
          const videoDeviceId = callback.getVideoDeviceId();
          const keys = Object.keys(callback.getVideoDevices());
          const found = keys.find((item) => item !== closure_0);
          if (null != found) {
            const obj = gestureState(channelId[48]);
            obj.setVideoDevice(found);
          }
        }, []);
        const memo = obj.useMemo(() => {
          let items;
          let str = "0deg";
          if (DOWN === constants.LEFT) {
            str = "90deg";
          }
          const obj = { transform: items };
          items = [{ rotateZ: str }];
          return obj;
        }, items5);
        const tmp5Result4 = wrapperOffset(tmp3[49]);
        const isSecureFramesUIEnabled = tmp5Result4.useIsSecureFramesUIEnabled({ channelId });
        let tmp36 = null;
        const useIsUserSecureFramesVerified = wrapperOffset(tmp3[50]).useIsUserSecureFramesVerified;
        wrapperOffset(tmp3[50]);
        if (tmp12 === ParticipantTypes.USER) {
          tmp36 = null;
          if (null != tmp10) {
            tmp36 = tmp10;
          }
        }
        const isUserSecureFramesVerified = useIsUserSecureFramesVerified({ userId: tmp36, channelId });
        let tmp39 = null;
        const useIsStreamSecureFramesVerified = wrapperOffset(tmp3[50]).useIsStreamSecureFramesVerified;
        wrapperOffset(tmp3[50]);
        if (tmp12 === ParticipantTypes.STREAM) {
          tmp39 = null;
          if (null != tmp10) {
            tmp39 = tmp10;
          }
        }
        let flag = useIsStreamSecureFramesVerified({ streamKey: tmp39, channelId });
        if (ParticipantTypes.STREAM !== tmp12) {
          flag = false;
          if (ParticipantTypes.USER === tmp12) {
            flag = isUserSecureFramesVerified;
          }
        }
        let ONYX;
        const ThemeContextProvider = tmp5(tmp3[61]).ThemeContextProvider;
        if (tmp40Result10) {
          ONYX = ThemeTypes.ONYX;
        }
        const obj20 = { theme: ONYX, children: closure_24(tmp2Result11, obj21) };
        obj21 = { style: items6, pointerEvents: "box-none", layout, children: items7 };
        items6 = [tmp.headerWrapper, animatedStyle];
        items7 = [, ,];
        tmp2Result11 = tmp2(tmp3[26]);
        items7[0] = closure_23(closure_35, { isHeaderHidden: derivedValue1, scrollPosition, focused });
        let tmp40Result = tmp40Result10;
        if (tmp40Result) {
          const obj22 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
          const tmp2Result12 = tmp2(tmp3[51]);
          tmp40Result = closure_23(tmp2Result12, obj22);
        }
        items7[1] = tmp40Result;
        let tmp40Result6 = null;
        const obj23 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: items8 };
        const tmp2Result13 = tmp2(tmp3[26]);
        if (tmp12 === ParticipantTypes.USER) {
          const obj24 = { isHeaderHidden: derivedValue1 };
          tmp40Result6 = closure_23(tmp2(tmp3[52]), obj24);
        }
        items8 = [tmp40Result6];
        const obj25 = { style: items9, animatedProps, children: items12 };
        items9 = [tmp.headerOuter, animatedStyle1];
        const obj26 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: items10 };
        const tmp2Result14 = tmp2(tmp3[26]);
        const obj27 = { icon: tmp2(tmp3[53]), accessibilityLabel: stringResult, onPress: tmp23, style: memo };
        const tmp2Result15 = tmp2(tmp3[25]);
        const tmp2Result16 = tmp2(tmp3[35]);
        items10 = [closure_23(tmp2Result16, obj27)];
        const obj28 = { style: tmp.headerInner, children: items11 };
        items11 = [,];
        const tmp2Result17 = tmp2(tmp3[26]);
        items11[0] = closure_23(tmp2(tmp3[54]), {});
        let tmp40Result7 = null;
        if (isSecureFramesUIEnabled) {
          tmp40Result7 = null;
          if (flag) {
            const obj29 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
            const ShieldLockIcon = tmp5(tmp3[55]).ShieldLockIcon;
            tmp40Result7 = closure_23(ShieldLockIcon, obj29);
          }
        }
        items11[1] = tmp40Result7;
        items10[1] = closure_24(tmp2Result17, obj28);
        items12 = [closure_24(tmp2Result15, obj26)];
        const obj30 = { style: tmp.rightWrapper, layout, children: items13 };
        items13 = [, , , , ,];
        const tmp2Result18 = tmp2(tmp3[26]);
        items13[0] = closure_23(closure_40, {});
        let tmp40Result8 = channelType === tmp5(tmp3[56]).ChannelTypes.GUILD_STAGE_VOICE;
        if (tmp40Result8) {
          const obj31 = { channelId };
          tmp40Result8 = closure_23(closure_41, obj31);
        }
        items13[1] = tmp40Result8;
        items13[2] = closure_23(tmp2(tmp3[57]), { isConnectedToVoiceChannel: tmp40Result10, channelId });
        if (canInviteMembers) {
          const obj32 = {
            icon: tmp2(tmp3[58]),
            accessibilityLabel: intl3.formatToPlainString(wrapperOffset(tmp3[31]).t["dHHb/2"], obj33),
            onPress: inviteMembersCallback,
          };
          const tmp2Result19 = tmp2(tmp3[35]);
          intl3 = tmp5(tmp3[31]).intl;
          obj33 = { channelName: stateFromStores };
          canInviteMembers = closure_23(tmp2Result19, obj32);
        }
        items13[3] = canInviteMembers;
        let tmp40Result9 = null;
        if (null != stateFromStores1) {
          const obj34 = { icon: tmp2(tmp3[59]), onPress: callback1, accessibilityLabel: stateFromStores1 };
          const tmp2Result20 = tmp2(tmp3[35]);
          tmp40Result9 = closure_23(tmp2Result20, obj34);
        }
        items13[4] = tmp40Result9;
        if (tmp40Result10) {
          tmp40Result10 = treatment === tmp5(tmp3[38]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
        }
        if (tmp40Result10) {
          const obj35 = { channelId };
          tmp40Result10 = closure_23(tmp2(tmp3[60]), obj35);
        }
        items13[5] = tmp40Result10;
        items12[1] = closure_24(tmp2Result18, obj30);
        items8[1] = closure_24(tmp2Result14, obj25);
        items7[2] = closure_24(tmp2Result13, obj23);
        return closure_23(ThemeContextProvider, obj20);
      },
);
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
