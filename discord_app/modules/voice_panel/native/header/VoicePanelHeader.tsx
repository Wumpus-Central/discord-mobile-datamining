// discord_app/modules/voice_panel/native/header/VoicePanelHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useChannelName from "../../../channel/useChannelName.tsx";
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs.tsx";
import StageMusicActionCreators from "../../../stage_channels/StageMusicActionCreators.tsx";
import useMyCurrentStageChannelRoleDefault from "../../../stage_channels/useMyCurrentStageChannelRole.tsx";
import VoicePanelIconButtonDefault from "../shared/VoicePanelIconButton.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ExperimentStore from "../../../experiments/ExperimentStore.tsx";
import StageMusicStore from "../../../stage_channels/StageMusicStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(10901);
let MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({
  UI_SHOW_HIDE_PHYSICS: closure_16,
  VoicePanelModes: closure_17,
  DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18,
} = VoicePanelConstants);
const EDGE_GUTTER = fn(10904).EDGE_GUTTER;
const VoicePanelControlsModes = fn(10899).VoicePanelControlsModes;
const ParticipantTypes = fn(5632).ParticipantTypes;
const ThemeTypes = fn(1098).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
const OPACITY_TIMING = { duration: 300 };
const createStyles = fn(4971);
let obj = {
  headerWrapper: { zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%" },
  headerSurface: null,
  blurStyles: null,
  leftWrapper: null,
  rightWrapper: null,
  headerOuter: null,
  headerInner: null,
  headerContentWrapper: null,
  stroke: null,
  strokeAlt: null,
  strokeContainer: null,
  focusedSpeakingDotWrapper: null,
  focusedSpeakingDot: null,
  shieldIconMargin: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.paddingBottom = EDGE_GUTTER;
obj3.overflow = "hidden";
obj.headerSurface = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.opacity = 0.7;
obj.blurStyles = obj4;
obj.leftWrapper = {
  position: "relative",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 1,
  gap: 12,
};
obj.rightWrapper = { flexDirection: "row", alignItems: "center", gap: 12, paddingLeft: 12 };
obj.headerOuter = { flexDirection: "row", alignItems: "center" };
obj.headerInner = { flexDirection: "row", alignItems: "center", flexShrink: 1, flexGrow: 1 };
obj.headerContentWrapper = { position: "relative" };
obj.stroke = { height: StyleSheet.hairlineWidth, opacity: 0.2 };
obj.strokeAlt = { height: StyleSheet.hairlineWidth, opacity: 0.8 };
obj.strokeContainer = { position: "absolute", left: 0, right: 0, bottom: 0, height: StyleSheet.hairlineWidth };
let size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, padding: 2 };
obj.focusedSpeakingDotWrapper = size;
const size1 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
obj.focusedSpeakingDot = size1;
obj.shieldIconMargin = { marginLeft: -8 };
let closure_26 = createStyles.createStyles(obj);
const constants = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj5 = {};
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
obj5.overshootClamping = true;
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
let ReactCompilerGating = fn(558);
let closure_35 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function HeaderBlur(isHeaderHidden) {
        const cResult = isHeaderHidden(focused[21]).c(17);
        isHeaderHidden = isHeaderHidden.isHeaderHidden;
        const scrollPosition = isHeaderHidden.scrollPosition;
        focused = isHeaderHidden.focused;
        const tmp3 = closure_26();
        let obj = isHeaderHidden(focused[21]);
        const fn = function n() {
          value = isHeaderHidden.get();
          let tmp2 = !value;
          if (!value) {
            let tmp5 = null != focused.get();
            if (!tmp5) {
              tmp5 = scrollPosition.get() > 0;
            }
            tmp2 = tmp5;
          }
          return tmp2;
        };
        fn.__closure = { isHeaderHidden, focused, scrollPosition };
        fn.__workletHash = 8127245112238;
        fn.__initData = __initData;
        const derivedValue = isHeaderHidden(focused[22]).useDerivedValue(fn);
        const obj2 = isHeaderHidden(focused[22]);
        const fn2 = function o() {
          let num = 0;
          if (derivedValue.get()) {
            num = 0.3;
          }
          return { blurAmount: spring.withSpring(num) };
        };
        const obj3 = isHeaderHidden(focused[22]);
        fn2.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
        fn2.__workletHash = 10074943135400;
        fn2.__initData = __initData2;
        const animatedProps = obj3.useAnimatedProps(fn2);
        obj5 = isHeaderHidden(focused[22]);
        const fn3 = function c() {
          let num = 0;
          if (derivedValue.get()) {
            num = 1;
          }
          return { opacity: spring.withSpring(num, obj5) };
        };
        const obj4 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
        fn3.__closure = {
          withSpring: isHeaderHidden(focused[23]).withSpring,
          showHeaderBlur: derivedValue,
          HEADER_CHANGE_PHYSICS: obj5,
        };
        fn3.__workletHash = 2825977044105;
        fn3.__initData = __initData3;
        const animatedStyle = obj5.useAnimatedStyle(fn3);
        if (cResult[0] !== animatedStyle) {
          const items = [StyleSheet.absoluteFill, animatedStyle];
          cResult[0] = animatedStyle;
          cResult[1] = items;
          let tmp7 = items;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === animatedProps) {
          if (cResult[3] === tmp3.blurStyles) {
            let tmp9 = cResult[4];
          }
          if (cResult[5] !== tmp3.stroke) {
            const obj7 = { style: tmp3.stroke };
            const tmp14 = closure_23(scrollPosition(tmp[25]), obj7);
            cResult[5] = tmp3.stroke;
            cResult[6] = tmp14;
            let tmp11 = tmp14;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] !== tmp3.strokeAlt) {
            const obj8 = { style: tmp3.strokeAlt };
            const tmp18 = closure_23(scrollPosition(tmp[25]), obj8);
            cResult[7] = tmp3.strokeAlt;
            cResult[8] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] === tmp3.strokeContainer) {
            if (cResult[10] === tmp11) {
              if (cResult[11] === tmp15) {
                let tmp19 = cResult[12];
              }
              if (cResult[13] === tmp7) {
                if (cResult[14] === tmp9) {
                  if (cResult[15] === tmp19) {
                    let tmp23 = cResult[16];
                  }
                  return tmp23;
                }
              }
              const obj9 = { style: tmp7, pointerEvents: "none", children: null };
              const items1 = [tmp9, tmp19];
              obj9.children = items1;
              const tmp26 = closure_24(scrollPosition(tmp[26]), obj9);
              cResult[13] = tmp7;
              cResult[14] = tmp9;
              cResult[15] = tmp19;
              cResult[16] = tmp26;
              tmp23 = tmp26;
            }
          }
          const obj10 = { style: tmp3.strokeContainer, children: null };
          const items2 = [tmp11, tmp15];
          obj10.children = items2;
          const tmp22 = closure_24(scrollPosition(tmp[25]), obj10);
          cResult[9] = tmp3.strokeContainer;
          cResult[10] = tmp11;
          cResult[11] = tmp15;
          cResult[12] = tmp22;
          tmp19 = tmp22;
        }
        const tmp10 = closure_23(scrollPosition(focused[24]), {
          style: tmp3.blurStyles,
          blurStyle: "ultra-thin",
          blurTheme: "dark",
          animatedProps,
        });
        cResult[2] = animatedProps;
        cResult[3] = tmp3.blurStyles;
        cResult[4] = tmp10;
        tmp9 = tmp10;
        const obj11 = { style: tmp3.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
        const obj6 = {
          withSpring: isHeaderHidden(focused[23]).withSpring,
          showHeaderBlur: derivedValue,
          HEADER_CHANGE_PHYSICS: obj5,
        };
      }
    : function HeaderBlur(isHeaderHidden) {
        isHeaderHidden = isHeaderHidden.isHeaderHidden;
        const scrollPosition = isHeaderHidden.scrollPosition;
        const focused = isHeaderHidden.focused;
        const tmp = closure_26();
        const fn = function c() {
          value = isHeaderHidden.get();
          let tmp2 = !value;
          if (!value) {
            let tmp5 = null != focused.get();
            if (!tmp5) {
              tmp5 = scrollPosition.get() > 0;
            }
            tmp2 = tmp5;
          }
          return tmp2;
        };
        fn.__closure = { isHeaderHidden, focused, scrollPosition };
        fn.__workletHash = 17400658237995;
        fn.__initData = __initData4;
        const derivedValue = isHeaderHidden(focused[22]).useDerivedValue(fn);
        let obj = isHeaderHidden(focused[22]);
        const fn2 = function l() {
          let num = 0;
          if (derivedValue.get()) {
            num = 0.3;
          }
          return { blurAmount: spring.withSpring(num) };
        };
        const obj2 = isHeaderHidden(focused[22]);
        fn2.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
        fn2.__workletHash = 850837345455;
        fn2.__initData = __initData5;
        const animatedProps = obj2.useAnimatedProps(fn2);
        const obj3 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
        const fn3 = function u() {
          let num = 0;
          if (derivedValue.get()) {
            num = 1;
          }
          return { opacity: spring.withSpring(num, obj5) };
        };
        obj5 = {
          withSpring: isHeaderHidden(focused[23]).withSpring,
          showHeaderBlur: derivedValue,
          HEADER_CHANGE_PHYSICS: obj5,
        };
        fn3.__closure = obj5;
        fn3.__workletHash = 6395364000396;
        fn3.__initData = __initData6;
        const animatedStyle = isHeaderHidden(focused[22]).useAnimatedStyle(fn3);
        const obj6 = { style: null, pointerEvents: "none", children: null };
        const items = [StyleSheet.absoluteFill, animatedStyle];
        obj6.style = items;
        const obj4 = isHeaderHidden(focused[22]);
        const items1 = [
          closure_23(scrollPosition(focused[24]), {
            style: tmp.blurStyles,
            blurStyle: "ultra-thin",
            blurTheme: "dark",
            animatedProps,
          }),
        ];
        const obj8 = { style: tmp.strokeContainer, children: null };
        const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
        let tmp5 = scrollPosition(focused[26]);
        const items2 = [
          closure_23(scrollPosition(focused[25]), { style: tmp.stroke }),
          closure_23(scrollPosition(focused[25]), { style: tmp.strokeAlt }),
        ];
        obj8.children = items2;
        items1[1] = closure_24(scrollPosition(focused[25]), obj8);
        obj6.children = items1;
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
ReactCompilerGating = fn(558);
let closure_40 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function FocusedSpeakingDot() {
        const cResult = id(controlsSpecs[21]).c(12);
        id = AuthenticationStore.getId();
        const context = derivedValue.useContext(focused(controlsSpecs[27]));
        focused = context.focused;
        controlsSpecs = context.controlsSpecs;
        const obj = id(controlsSpecs[21]);
        const obj2 = derivedValue;
        const sharedValue = id(controlsSpecs[22]).useSharedValue(SpeakingStore.isSpeaking(id));
        if (cResult[0] === id) {
          if (cResult[1] === sharedValue) {
            let tmp8 = cResult[2];
            let tmp9 = cResult[3];
          }
          const layoutEffect = obj2.useLayoutEffect(tmp8, tmp9);
          const tmp12 = closure_26();
          class S {
            constructor() {
              value = null != focused.get();
              if (value) {
                tmp2 = controlsSpecs;
                tmp3 = VoicePanelControlsModes;
                value = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
              }
              if (value) {
                tmp4 = closure_3;
                value = closure_3.get();
              }
              return value;
            }
          }
          const obj4 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
          S.__closure = obj4;
          S.__workletHash = 297593450050;
          S.__initData = __initData7;
          derivedValue = tmp(tmp2[22]).useDerivedValue(S);
          const tmpResult = tmp(tmp2[22]);
          class H {
            constructor() {
              opacity = 0;
              if (closure_4.get()) {
                opacity = 1;
              }
              return { opacity };
            }
          }
          obj5 = { showSpeakingIndicator: derivedValue };
          H.__closure = obj5;
          H.__workletHash = 10090467727535;
          H.__initData = __initData8;
          const animatedStyle = tmp(tmp2[22]).useAnimatedStyle(H);
          if (cResult[4] === animatedStyle) {
            if (cResult[5] === tmp12.focusedSpeakingDotWrapper) {
              let tmp18 = cResult[6];
            }
            if (cResult[7] !== tmp12.focusedSpeakingDot) {
              const obj6 = { style: tmp12.focusedSpeakingDot };
              const tmp21 = closure_23(tmp5(tmp2[26]), obj6);
              class S {
                constructor() {
                  value = null != focused.get();
                  if (value) {
                    tmp2 = controlsSpecs;
                    tmp3 = VoicePanelControlsModes;
                    value = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
                  }
                  if (value) {
                    tmp4 = closure_3;
                    value = closure_3.get();
                  }
                  return value;
                }
              }
              cResult[8] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[8];
            }
            if (cResult[9] === tmp18) {
              if (cResult[10] === tmp19) {
                let tmp22 = cResult[11];
              }
              return tmp22;
            }
            const obj7 = { style: null, pointerEvents: "none", children: null };
            class S {
              constructor() {
                value = null != focused.get();
                if (value) {
                  tmp2 = controlsSpecs;
                  tmp3 = VoicePanelControlsModes;
                  value = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
                }
                if (value) {
                  tmp4 = closure_3;
                  value = closure_3.get();
                }
                return value;
              }
            }
            obj7.children = tmp19;
            const tmp24 = closure_23(tmp5(tmp2[26]), obj7);
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
          const tmpResult2 = tmp(tmp2[22]);
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
        const obj3 = id(controlsSpecs[22]);
      }
    : function FocusedSpeakingDot() {
        const id = AuthenticationStore.getId();
        const context = derivedValue.useContext(focused(controlsSpecs[27]));
        focused = context.focused;
        controlsSpecs = context.controlsSpecs;
        const sharedValue = id(controlsSpecs[22]).useSharedValue(SpeakingStore.isSpeaking(id));
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
        const obj = id(controlsSpecs[22]);
        const fn = function u() {
          value = null != focused.get();
          if (value) {
            value = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
          }
          if (value) {
            value = sharedValue.get();
          }
          return value;
        };
        fn.__closure = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
        fn.__workletHash = 4860356878028;
        fn.__initData = __initData9;
        derivedValue = id(controlsSpecs[22]).useDerivedValue(fn);
        const obj2 = id(controlsSpecs[22]);
        const obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
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
        const animatedStyle = id(controlsSpecs[22]).useAnimatedStyle(fn2);
        obj5 = { style: null, pointerEvents: "none", children: null };
        const items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
        obj5.style = items1;
        const obj4 = id(controlsSpecs[22]);
        obj5.children = closure_23(focused(controlsSpecs[26]), { style: tmp5.focusedSpeakingDot });
        return closure_23(focused(controlsSpecs[26]), obj5);
      },
);
ReactCompilerGating = fn(558);
let closure_41 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MusicMuteButton(channelId) {
      const cResult = stateFromStores(576).c(10);
      channelId = channelId.channelId;
      const tmp5 = useMyCurrentStageChannelRoleDefault(channelId);
      if (tmp5 != null) {
        const speaker = tmp5.speaker;
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
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp6, tmp7);
      const tmpResult = stateFromStores(504);
      if (tmpResult2.useShowStageMusicMuteButton(channelId)) {
        if (speaker) {
          if (cResult[2] !== stateFromStores) {
            const intl = tmp(1128).intl;
            const string = intl.string;
            let ScHlfl = tmp(1128).t;
            if (stateFromStores) {
              ScHlfl = ScHlfl.ScHlfl;
              let stringResult = string(ScHlfl);
            } else {
              stringResult = string(ScHlfl.zqxfrf);
            }
            cResult[2] = stateFromStores;
            cResult[3] = stringResult;
          } else {
            const tmp4Result = importDefault(stateFromStores ? 11534 : 8461);
            if (cResult[4] !== stateFromStores) {
              const fn2 = function p() {
                return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
              };
              cResult[4] = stateFromStores;
              cResult[5] = fn2;
              let tmp14 = fn2;
            } else {
              tmp14 = cResult[5];
            }
            if (cResult[6] === cResult[3]) {
              if (cResult[7] === tmp4Result) {
                if (cResult[8] === tmp14) {
                  let tmp15 = cResult[9];
                }
                return tmp15;
              }
            }
            const obj2 = { accessibilityLabel: cResult[3], icon: tmp4Result, onPress: tmp14 };
            const tmp17 = closure_23(VoicePanelIconButtonDefault, obj2);
            cResult[6] = cResult[3];
            cResult[7] = tmp4Result;
            cResult[8] = tmp14;
            cResult[9] = tmp17;
            tmp15 = tmp17;
          }
        }
      }
      return null;
    }
  : function MusicMuteButton(channelId) {
      channelId = channelId.channelId;
      let stateFromStores;
      const tmp3 = useMyCurrentStageChannelRoleDefault(channelId);
      if (tmp3 != null) {
        const speaker = tmp3.speaker;
      }
      const items = [StageMusicStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => muted.isMuted());
      const obj = stateFromStores(504);
      let tmp6 = null;
      if (obj2.useShowStageMusicMuteButton(channelId)) {
        tmp6 = null;
        if (speaker) {
          const intl = tmp4(1128).intl;
          const string = intl.string;
          const t = tmp4(1128).t;
          if (stateFromStores) {
            let stringResult = string(t.ScHlfl);
          } else {
            stringResult = string(t.zqxfrf);
          }
          const obj3 = {
            accessibilityLabel: stringResult,
            icon: importDefault(stateFromStores ? 11534 : 8461),
            onPress() {
              return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
            },
          };
          closure_23(VoicePanelIconButtonDefault, obj3);
          const tmpResult = VoicePanelIconButtonDefault;
        }
      }
      return tmp6;
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
  code: "function VoicePanelHeaderTsx14(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{height:!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height};}",
};
const __initData15 = {
  code: "function VoicePanelHeaderTsx15(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_1=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;return{paddingTop:!connected.get()?EDGE_GUTTER:specs_1.paddingTop,paddingLeft:specs_1.paddingLeft,paddingRight:specs_1.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData16 = {
  code: "function VoicePanelHeaderTsx16(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}",
};
const __initData17 = {
  code: "function VoicePanelHeaderTsx17(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}",
};
const __initData18 = {
  code: 'function VoicePanelHeaderTsx18(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?"none":"box-none",importantForAccessibility:isHeaderHidden.get()?"no-hide-descendants":"auto",accessibilityElementsHidden:isHeaderHidden.get()};}',
};
const __initData19 = {
  code: "function VoicePanelHeaderTsx19(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData20 = {
  code: "function VoicePanelHeaderTsx20(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}",
};
const __initData21 = {
  code: "function VoicePanelHeaderTsx21(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}",
};
const __initData22 = {
  code: "function VoicePanelHeaderTsx22(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{height:!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height};}",
};
const __initData23 = {
  code: "function VoicePanelHeaderTsx23(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_1=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;return{paddingTop:!connected.get()?EDGE_GUTTER:specs_1.paddingTop,paddingLeft:specs_1.paddingLeft,paddingRight:specs_1.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData24 = {
  code: "function VoicePanelHeaderTsx24(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}",
};
const __initData25 = {
  code: "function VoicePanelHeaderTsx25(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}",
};
const __initData26 = {
  code: "function VoicePanelHeaderTsx26(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}",
};
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoicePanelHeader(wrapperOffset) {
        const cResult = wrapperOffset(channelId[21]).c(113);
        wrapperOffset = wrapperOffset.wrapperOffset;
        const gestureState = wrapperOffset.gestureState;
        const tmp4 = closure_26();
        const context = controlsSpecs.useContext(gestureState(channelId[27]));
        channelId = context.channelId;
        ({ channelType, focused } = context);
        controlsSpecs = context.controlsSpecs;
        const mode = context.mode;
        const safeArea = context.safeArea;
        const connected = context.connected;
        ({ scrollPosition, guildId } = context);
        let obj = wrapperOffset(channelId[21]);
        const isScreenReaderEnabled = wrapperOffset(channelId[36]).useIsScreenReaderEnabled();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function c() {
            return ChannelStore.getChannel(channelId);
          };
          const items1 = [channelId];
          cResult[1] = channelId;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp11 = items1;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[2];
          tmp11 = cResult[3];
        }
        let obj3 = wrapperOffset(channelId[36]);
        const stateFromStores = wrapperOffset(channelId[29]).useStateFromStores(first, tmp10, tmp11);
        const tmp13 = gestureState(channelId[37])(channelId);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { location: "VoicePanelHeader" };
          cResult[4] = obj4;
          let tmp14 = obj4;
        } else {
          tmp14 = cResult[4];
        }
        let tmpResult = wrapperOffset(channelId[29]);
        const treatment = gestureState(channelId[38]).useConfig(tmp14).treatment;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [derivedValue1, token, ChannelStore, connected];
          cResult[5] = items2;
          let tmp15 = items2;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] !== channelId) {
          function le() {
            const channel = ChannelStore.getChannel(channelId);
            let channelName;
            if (null != channel) {
              channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
            }
            if (channelName == null) {
              const intl = util.intl;
              channelName = intl.string(util.t.zLZPmk);
            }
            return channelName;
          }
          const items3 = [channelId];
          cResult[6] = channelId;
          cResult[7] = le;
          cResult[8] = items3;
          let tmp21 = items3;
          let tmp20 = le;
        } else {
          tmp20 = cResult[7];
          tmp21 = cResult[8];
        }
        const tmp5Result = gestureState(channelId[38]);
        const stateFromStores1 = wrapperOffset(channelId[29]).useStateFromStores(tmp15, tmp20, tmp21);
        const tmpResult17 = wrapperOffset(channelId[29]);
        [tmp24, AuthenticationStore] = focused(controlsSpecs.useState(undefined), 2);
        const tmp23 = focused(controlsSpecs.useState(undefined), 2);
        [tmp26, ChannelStore] = focused(controlsSpecs.useState(null), 2);
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
        const tmp25 = focused(controlsSpecs.useState(null), 2);
        function _e() {
          value = focused.get();
          let id;
          if (value != null) {
            id = value.id;
          }
          return id;
        }
        _e.__closure = { focused };
        _e.__workletHash = 8016082904457;
        _e.__initData = __initData11;
        function ge(arg0, arg1) {
          if (arg0 !== arg1) {
            ReanimatedRexport.runOnJS(handleFocusChange)(arg0);
          }
        }
        const tmpResult18 = wrapperOffset(channelId[22]);
        ge.__closure = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
        ge.__workletHash = 9918394343352;
        ge.__initData = __initData12;
        const animatedReaction = tmpResult18.useAnimatedReaction(_e, ge);
        obj5 = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
        token = wrapperOffset(channelId[40]).useToken(tmp5(tmp2[19]).modules.mobile.VOICE_PANEL_GUTTER);
        const tmpResult19 = wrapperOffset(channelId[40]);
        class Te {
          constructor() {
            tmp = closure_1(closure_2[41]);
            obj = mode;
            tmpResult = tmp(safeArea.get(), closure_12);
            if (mode.get() === VoicePanelModes.PIP) {
              tmp6 = EDGE_GUTTER;
              num = -tmpResult.height + EDGE_GUTTER;
            } else {
              obj2 = gestureState;
              if (gestureState.get().active) {
                if (!obj2.get().requiresPop) {
                  tmp4 = connected;
                }
              }
              num = 0;
              if (obj.get() === tmp3.DISMISSED) {
                tmp5 = connected;
                num = 0;
              }
            }
            return num;
          }
        }
        const tmpResult20 = wrapperOffset(channelId[22]);
        Te.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          gestureState,
          connected,
          EDGE_GUTTER,
        };
        Te.__workletHash = 2737204369147;
        Te.__initData = __initData13;
        const derivedValue = tmpResult20.useDerivedValue(Te);
        const obj6 = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          gestureState,
          connected,
          EDGE_GUTTER,
        };
        class Ce {
          constructor() {
            tmp = closure_1(closure_2[41]);
            tmpResult = tmp(safeArea.get(), closure_12);
            height = tmpResult.height;
            if (connected.get()) {
              sum = height;
            } else {
              tmp3 = EDGE_GUTTER;
              sum = height - tmpResult.paddingTop + EDGE_GUTTER;
            }
            return { height: sum };
          }
        }
        const tmpResult21 = wrapperOffset(channelId[22]);
        Ce.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          connected,
          EDGE_GUTTER,
        };
        Ce.__workletHash = 9724674813169;
        Ce.__initData = __initData14;
        const animatedStyle = tmpResult21.useAnimatedStyle(Ce);
        const obj7 = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          connected,
          EDGE_GUTTER,
        };
        class De {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[41]);
            tmp2Result = tmp2(safeArea.get(), closure_12);
            obj = mode;
            obj2 = connected;
            value = mode.get();
            tmp5 = VoicePanelModes;
            obj1 = {
              paddingTop: connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER,
              paddingLeft: tmp2Result.paddingLeft,
              paddingRight: tmp2Result.paddingRight,
              borderTopLeftRadius: null,
              borderTopRightRadius: null,
              opacity: null,
              transform: null,
            };
            num = 24;
            num2 = 24;
            if (obj2.get()) {
              num2 = 0;
            }
            obj1.borderTopLeftRadius = num2;
            if (obj2.get()) {
              num = 0;
            }
            obj1.borderTopRightRadius = num;
            tmp6 = closure_0;
            obj4 = closure_0(tmp[42]);
            if (value === VoicePanelModes.PIP) {
              num3 = 0;
            } else {
              num3 = 1;
            }
            obj1.opacity = obj4.withTiming(num3, closure_25);
            tmp6Result = tmp6(tmp[23]);
            value1 = closure_13.get();
            if (!obj2.get()) {
              tmp8 = wrapperOffset;
              if (wrapperOffset.get().gestureActive) {
                tmp9 = closure_18;
              }
              obj7 = { translateY: null };
              obj7.translateY = tmp6Result.withSpring(value1, tmp9);
              items = [];
              items[0] = obj7;
              obj1.transform = items;
              return obj1;
            }
            tmp9 = UI_SHOW_HIDE_PHYSICS;
            return;
          }
        }
        const tmpResult22 = wrapperOffset(channelId[22]);
        De.__closure = {
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
        De.__workletHash = 2433528387381;
        De.__initData = __initData15;
        const animatedStyle1 = tmpResult22.useAnimatedStyle(De);
        const obj8 = {
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
        function ye() {
          let tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
          if (tmp) {
            tmp = !isScreenReaderEnabled;
          }
          return tmp;
        }
        ye.__closure = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
        ye.__workletHash = 15015047770436;
        ye.__initData = __initData16;
        derivedValue1 = wrapperOffset(channelId[22]).useDerivedValue(ye);
        const obj9 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
        const tmpResult23 = wrapperOffset(channelId[22]);
        function be() {
          const tmp2 = calculateVoicePanelHeaderSpecsDefault;
          let num = 1;
          if (derivedValue1.get()) {
            num = 0;
          }
          const obj3 = { opacity: timing.withTiming(num, closure_25), transform: null };
          let num2 = 0;
          if (derivedValue1.get()) {
            num2 = -tmp2(safeArea.get(), token).height;
          }
          const tmp3Result = spring;
          const items = [{ translateY: spring.withSpring(num2, MODE_CHANGE_PHYSICS) }];
          obj3.transform = items;
          return obj3;
        }
        const tmpResult24 = wrapperOffset(channelId[22]);
        be.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          withTiming: wrapperOffset(channelId[42]).withTiming,
          isHeaderHidden: derivedValue1,
          OPACITY_TIMING,
          withSpring: wrapperOffset(channelId[23]).withSpring,
          MODE_CHANGE_PHYSICS,
        };
        be.__workletHash = 27171065880;
        be.__initData = __initData17;
        const animatedStyle2 = tmpResult24.useAnimatedStyle(be);
        const obj10 = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          withTiming: wrapperOffset(channelId[42]).withTiming,
          isHeaderHidden: derivedValue1,
          OPACITY_TIMING,
          withSpring: wrapperOffset(channelId[23]).withSpring,
          MODE_CHANGE_PHYSICS,
        };
        function ve() {
          let str = "box-none";
          if (derivedValue1.get()) {
            str = "none";
          }
          const obj2 = { pointerEvents: str, importantForAccessibility: null, accessibilityElementsHidden: null };
          let str2 = "auto";
          if (derivedValue1.get()) {
            str2 = "no-hide-descendants";
          }
          obj2.importantForAccessibility = str2;
          obj2.accessibilityElementsHidden = derivedValue1.get();
          return obj2;
        }
        ve.__closure = { isHeaderHidden: derivedValue1 };
        ve.__workletHash = 5001013322077;
        ve.__initData = __initData18;
        const animatedProps = wrapperOffset(channelId[22]).useAnimatedProps(ve);
        const tmpResult25 = wrapperOffset(channelId[22]);
        const canInviteMembers = wrapperOffset(channelId[43]).useCanInviteMembers(channelId);
        const tmpResult26 = wrapperOffset(channelId[43]);
        wrapperOffset(channelId[44]).useInviteMembersCallback(channelId);
        const tmpResult27 = wrapperOffset(channelId[44]);
        const tmp37 = gestureState(channelId[45])();
        wrapperOffset(channelId[46]).useNavigatorBackPressHandler(tmp37);
        if (null != tmp26) {
          let DOWN = constants.LEFT;
          let tmp39 = constants;
        } else {
          tmp39 = constants;
          DOWN = constants.DOWN;
        }
        if (cResult[9] === tmp13) {
          if (cResult[10] === DOWN) {
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              let id = AuthenticationStore.getId();
              cResult[12] = id;
              let tmp44 = id;
            } else {
              tmp44 = cResult[12];
            }
            const tmp47 = tmp5(tmp2[47])(tmp44, channelId, guildId);
            MODE_CHANGE_PHYSICS = tmp47;
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items4 = [handleFocusChange];
              cResult[13] = items4;
              let tmp48 = items4;
            } else {
              tmp48 = cResult[13];
            }
            if (cResult[14] !== tmp47) {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              const items5 = [tmp47];
              cResult[14] = tmp47;
              cResult[15] = Be;
              cResult[16] = items5;
              let tmp51 = items5;
            } else {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              tmp51 = cResult[16];
            }
            const stateFromStores2 = tmp(tmp2[29]).useStateFromStores(tmp48, Be, tmp51);
            const _Symbol3 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              cResult[17] = tmp54;
            } else {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
            }
            if (DOWN === tmp39.LEFT) {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
            }
            if (cResult[18] !== "0deg") {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              const obj11 = { rotateZ: str };
              const items6 = [obj11];
              tmp56[0] = items6;
              cResult[18] = str;
              cResult[19] = tmp56;
            } else {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
            }
            if (cResult[20] !== channelId) {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              tmp58[0] = channelId;
              cResult[20] = channelId;
              cResult[21] = tmp58;
            } else {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
            }
            const tmpResult29 = tmp(tmp2[29]);
            const isSecureFramesUIEnabled = tmp(tmp2[49]).useIsSecureFramesUIEnabled(tmp58);
            if (tmp26 === ParticipantTypes.USER) {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              if (null != tmp24) {
                class Be {
                  constructor() {
                    tmp = closure_15;
                    if (null != closure_15) {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      obj3 = closure_0(closure_2[47]);
                      if (obj3.isStableUserParticipant(tmp)) {
                        tmp10Result = tmp10(tmp11[47]);
                        if (tmp10Result.stableParticipantHasVideo(tmp)) {
                          obj2 = closure_11;
                          videoDevices = closure_11.getVideoDevices();
                          tmp3 = globalThis;
                          _Object = Object;
                          keys = Object.keys(videoDevices);
                          num = 2;
                          if (keys.length >= 2) {
                            videoDeviceId = obj2.getVideoDeviceId();
                            closure_0 = videoDeviceId;
                            tmp13 = videoDevices[videoDeviceId];
                            facing = undefined;
                            if (tmp13 != null) {
                              facing = tmp13.facing;
                            }
                            found = keys.find((item) => item !== videoDeviceId);
                            if (null != found) {
                              tmp7 = videoDevices[found];
                              facing1 = undefined;
                              if (tmp7 != null) {
                                facing1 = tmp7.facing;
                              }
                              tmp6 = facing1;
                            }
                            if (null != facing) {
                              if (null != tmp6) {
                                str3 = "back";
                                if ("back" === facing) {
                                  str = "front";
                                  if ("front" === tmp6) {
                                    intl3 = tmp10(tmp11[31]).intl;
                                    stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                  }
                                }
                                str2 = "front";
                                if ("front" === facing) {
                                  if ("back" === tmp6) {
                                    intl2 = tmp10(tmp11[31]).intl;
                                    stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                  }
                                }
                                intl = tmp10(tmp11[31]).intl;
                                stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                              }
                              return stringResult;
                            }
                            intl4 = tmp10(tmp11[31]).intl;
                            stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                          }
                        }
                      }
                    }
                    return;
                  }
                }
              }
            }
            if (cResult[22] === channelId) {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
              const isUserSecureFramesVerified = tmp(tmp2[50]).useIsUserSecureFramesVerified(tmp62);
              if (tmp26 === ParticipantTypes.STREAM) {
                class Be {
                  constructor() {
                    tmp = closure_15;
                    if (null != closure_15) {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      obj3 = closure_0(closure_2[47]);
                      if (obj3.isStableUserParticipant(tmp)) {
                        tmp10Result = tmp10(tmp11[47]);
                        if (tmp10Result.stableParticipantHasVideo(tmp)) {
                          obj2 = closure_11;
                          videoDevices = closure_11.getVideoDevices();
                          tmp3 = globalThis;
                          _Object = Object;
                          keys = Object.keys(videoDevices);
                          num = 2;
                          if (keys.length >= 2) {
                            videoDeviceId = obj2.getVideoDeviceId();
                            closure_0 = videoDeviceId;
                            tmp13 = videoDevices[videoDeviceId];
                            facing = undefined;
                            if (tmp13 != null) {
                              facing = tmp13.facing;
                            }
                            found = keys.find((item) => item !== videoDeviceId);
                            if (null != found) {
                              tmp7 = videoDevices[found];
                              facing1 = undefined;
                              if (tmp7 != null) {
                                facing1 = tmp7.facing;
                              }
                              tmp6 = facing1;
                            }
                            if (null != facing) {
                              if (null != tmp6) {
                                str3 = "back";
                                if ("back" === facing) {
                                  str = "front";
                                  if ("front" === tmp6) {
                                    intl3 = tmp10(tmp11[31]).intl;
                                    stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                  }
                                }
                                str2 = "front";
                                if ("front" === facing) {
                                  if ("back" === tmp6) {
                                    intl2 = tmp10(tmp11[31]).intl;
                                    stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                  }
                                }
                                intl = tmp10(tmp11[31]).intl;
                                stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                              }
                              return stringResult;
                            }
                            intl4 = tmp10(tmp11[31]).intl;
                            stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                          }
                        }
                      }
                    }
                    return;
                  }
                }
                if (null != tmp24) {
                  class Be {
                    constructor() {
                      tmp = closure_15;
                      if (null != closure_15) {
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj3 = closure_0(closure_2[47]);
                        if (obj3.isStableUserParticipant(tmp)) {
                          tmp10Result = tmp10(tmp11[47]);
                          if (tmp10Result.stableParticipantHasVideo(tmp)) {
                            obj2 = closure_11;
                            videoDevices = closure_11.getVideoDevices();
                            tmp3 = globalThis;
                            _Object = Object;
                            keys = Object.keys(videoDevices);
                            num = 2;
                            if (keys.length >= 2) {
                              videoDeviceId = obj2.getVideoDeviceId();
                              closure_0 = videoDeviceId;
                              tmp13 = videoDevices[videoDeviceId];
                              facing = undefined;
                              if (tmp13 != null) {
                                facing = tmp13.facing;
                              }
                              found = keys.find((item) => item !== videoDeviceId);
                              if (null != found) {
                                tmp7 = videoDevices[found];
                                facing1 = undefined;
                                if (tmp7 != null) {
                                  facing1 = tmp7.facing;
                                }
                                tmp6 = facing1;
                              }
                              if (null != facing) {
                                if (null != tmp6) {
                                  str3 = "back";
                                  if ("back" === facing) {
                                    str = "front";
                                    if ("front" === tmp6) {
                                      intl3 = tmp10(tmp11[31]).intl;
                                      stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                    }
                                  }
                                  str2 = "front";
                                  if ("front" === facing) {
                                    if ("back" === tmp6) {
                                      intl2 = tmp10(tmp11[31]).intl;
                                      stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                    }
                                  }
                                  intl = tmp10(tmp11[31]).intl;
                                  stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                                }
                                return stringResult;
                              }
                              intl4 = tmp10(tmp11[31]).intl;
                              stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                          }
                        }
                      }
                      return;
                    }
                  }
                }
              }
              if (cResult[25] === channelId) {
                class Be {
                  constructor() {
                    tmp = closure_15;
                    if (null != closure_15) {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      obj3 = closure_0(closure_2[47]);
                      if (obj3.isStableUserParticipant(tmp)) {
                        tmp10Result = tmp10(tmp11[47]);
                        if (tmp10Result.stableParticipantHasVideo(tmp)) {
                          obj2 = closure_11;
                          videoDevices = closure_11.getVideoDevices();
                          tmp3 = globalThis;
                          _Object = Object;
                          keys = Object.keys(videoDevices);
                          num = 2;
                          if (keys.length >= 2) {
                            videoDeviceId = obj2.getVideoDeviceId();
                            closure_0 = videoDeviceId;
                            tmp13 = videoDevices[videoDeviceId];
                            facing = undefined;
                            if (tmp13 != null) {
                              facing = tmp13.facing;
                            }
                            found = keys.find((item) => item !== videoDeviceId);
                            if (null != found) {
                              tmp7 = videoDevices[found];
                              facing1 = undefined;
                              if (tmp7 != null) {
                                facing1 = tmp7.facing;
                              }
                              tmp6 = facing1;
                            }
                            if (null != facing) {
                              if (null != tmp6) {
                                str3 = "back";
                                if ("back" === facing) {
                                  str = "front";
                                  if ("front" === tmp6) {
                                    intl3 = tmp10(tmp11[31]).intl;
                                    stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                  }
                                }
                                str2 = "front";
                                if ("front" === facing) {
                                  if ("back" === tmp6) {
                                    intl2 = tmp10(tmp11[31]).intl;
                                    stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                  }
                                }
                                intl = tmp10(tmp11[31]).intl;
                                stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                              }
                              return stringResult;
                            }
                            intl4 = tmp10(tmp11[31]).intl;
                            stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                          }
                        }
                      }
                    }
                    return;
                  }
                }
                const isStreamSecureFramesVerified = tmp(tmp2[50]).useIsStreamSecureFramesVerified(tmp65);
                if (ParticipantTypes.STREAM !== tmp26) {
                  class Be {
                    constructor() {
                      tmp = closure_15;
                      if (null != closure_15) {
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj3 = closure_0(closure_2[47]);
                        if (obj3.isStableUserParticipant(tmp)) {
                          tmp10Result = tmp10(tmp11[47]);
                          if (tmp10Result.stableParticipantHasVideo(tmp)) {
                            obj2 = closure_11;
                            videoDevices = closure_11.getVideoDevices();
                            tmp3 = globalThis;
                            _Object = Object;
                            keys = Object.keys(videoDevices);
                            num = 2;
                            if (keys.length >= 2) {
                              videoDeviceId = obj2.getVideoDeviceId();
                              closure_0 = videoDeviceId;
                              tmp13 = videoDevices[videoDeviceId];
                              facing = undefined;
                              if (tmp13 != null) {
                                facing = tmp13.facing;
                              }
                              found = keys.find((item) => item !== videoDeviceId);
                              if (null != found) {
                                tmp7 = videoDevices[found];
                                facing1 = undefined;
                                if (tmp7 != null) {
                                  facing1 = tmp7.facing;
                                }
                                tmp6 = facing1;
                              }
                              if (null != facing) {
                                if (null != tmp6) {
                                  str3 = "back";
                                  if ("back" === facing) {
                                    str = "front";
                                    if ("front" === tmp6) {
                                      intl3 = tmp10(tmp11[31]).intl;
                                      stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                    }
                                  }
                                  str2 = "front";
                                  if ("front" === facing) {
                                    if ("back" === tmp6) {
                                      intl2 = tmp10(tmp11[31]).intl;
                                      stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                    }
                                  }
                                  intl = tmp10(tmp11[31]).intl;
                                  stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                                }
                                return stringResult;
                              }
                              intl4 = tmp10(tmp11[31]).intl;
                              stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                          }
                        }
                      }
                      return;
                    }
                  }
                  if (ParticipantTypes.USER !== tmp26) {
                    class Be {
                      constructor() {
                        tmp = closure_15;
                        if (null != closure_15) {
                          tmp10 = closure_0;
                          tmp11 = closure_2;
                          obj3 = closure_0(closure_2[47]);
                          if (obj3.isStableUserParticipant(tmp)) {
                            tmp10Result = tmp10(tmp11[47]);
                            if (tmp10Result.stableParticipantHasVideo(tmp)) {
                              obj2 = closure_11;
                              videoDevices = closure_11.getVideoDevices();
                              tmp3 = globalThis;
                              _Object = Object;
                              keys = Object.keys(videoDevices);
                              num = 2;
                              if (keys.length >= 2) {
                                videoDeviceId = obj2.getVideoDeviceId();
                                closure_0 = videoDeviceId;
                                tmp13 = videoDevices[videoDeviceId];
                                facing = undefined;
                                if (tmp13 != null) {
                                  facing = tmp13.facing;
                                }
                                found = keys.find((item) => item !== videoDeviceId);
                                if (null != found) {
                                  tmp7 = videoDevices[found];
                                  facing1 = undefined;
                                  if (tmp7 != null) {
                                    facing1 = tmp7.facing;
                                  }
                                  tmp6 = facing1;
                                }
                                if (null != facing) {
                                  if (null != tmp6) {
                                    str3 = "back";
                                    if ("back" === facing) {
                                      str = "front";
                                      if ("front" === tmp6) {
                                        intl3 = tmp10(tmp11[31]).intl;
                                        stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                      }
                                    }
                                    str2 = "front";
                                    if ("front" === facing) {
                                      if ("back" === tmp6) {
                                        intl2 = tmp10(tmp11[31]).intl;
                                        stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                      }
                                    }
                                    intl = tmp10(tmp11[31]).intl;
                                    stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                                  }
                                  return stringResult;
                                }
                                intl4 = tmp10(tmp11[31]).intl;
                                stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                              }
                            }
                          }
                        }
                        return;
                      }
                    }
                  }
                }
                if (tmp13) {
                  class Be {
                    constructor() {
                      tmp = closure_15;
                      if (null != closure_15) {
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj3 = closure_0(closure_2[47]);
                        if (obj3.isStableUserParticipant(tmp)) {
                          tmp10Result = tmp10(tmp11[47]);
                          if (tmp10Result.stableParticipantHasVideo(tmp)) {
                            obj2 = closure_11;
                            videoDevices = closure_11.getVideoDevices();
                            tmp3 = globalThis;
                            _Object = Object;
                            keys = Object.keys(videoDevices);
                            num = 2;
                            if (keys.length >= 2) {
                              videoDeviceId = obj2.getVideoDeviceId();
                              closure_0 = videoDeviceId;
                              tmp13 = videoDevices[videoDeviceId];
                              facing = undefined;
                              if (tmp13 != null) {
                                facing = tmp13.facing;
                              }
                              found = keys.find((item) => item !== videoDeviceId);
                              if (null != found) {
                                tmp7 = videoDevices[found];
                                facing1 = undefined;
                                if (tmp7 != null) {
                                  facing1 = tmp7.facing;
                                }
                                tmp6 = facing1;
                              }
                              if (null != facing) {
                                if (null != tmp6) {
                                  str3 = "back";
                                  if ("back" === facing) {
                                    str = "front";
                                    if ("front" === tmp6) {
                                      intl3 = tmp10(tmp11[31]).intl;
                                      stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                    }
                                  }
                                  str2 = "front";
                                  if ("front" === facing) {
                                    if ("back" === tmp6) {
                                      intl2 = tmp10(tmp11[31]).intl;
                                      stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                    }
                                  }
                                  intl = tmp10(tmp11[31]).intl;
                                  stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                                }
                                return stringResult;
                              }
                              intl4 = tmp10(tmp11[31]).intl;
                              stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                          }
                        }
                      }
                      return;
                    }
                  }
                  const ONYX = ThemeTypes.ONYX;
                }
                if (cResult[28] === animatedStyle) {
                  class Be {
                    constructor() {
                      tmp = closure_15;
                      if (null != closure_15) {
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj3 = closure_0(closure_2[47]);
                        if (obj3.isStableUserParticipant(tmp)) {
                          tmp10Result = tmp10(tmp11[47]);
                          if (tmp10Result.stableParticipantHasVideo(tmp)) {
                            obj2 = closure_11;
                            videoDevices = closure_11.getVideoDevices();
                            tmp3 = globalThis;
                            _Object = Object;
                            keys = Object.keys(videoDevices);
                            num = 2;
                            if (keys.length >= 2) {
                              videoDeviceId = obj2.getVideoDeviceId();
                              closure_0 = videoDeviceId;
                              tmp13 = videoDevices[videoDeviceId];
                              facing = undefined;
                              if (tmp13 != null) {
                                facing = tmp13.facing;
                              }
                              found = keys.find((item) => item !== videoDeviceId);
                              if (null != found) {
                                tmp7 = videoDevices[found];
                                facing1 = undefined;
                                if (tmp7 != null) {
                                  facing1 = tmp7.facing;
                                }
                                tmp6 = facing1;
                              }
                              if (null != facing) {
                                if (null != tmp6) {
                                  str3 = "back";
                                  if ("back" === facing) {
                                    str = "front";
                                    if ("front" === tmp6) {
                                      intl3 = tmp10(tmp11[31]).intl;
                                      stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                    }
                                  }
                                  str2 = "front";
                                  if ("front" === facing) {
                                    if ("back" === tmp6) {
                                      intl2 = tmp10(tmp11[31]).intl;
                                      stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                    }
                                  }
                                  intl = tmp10(tmp11[31]).intl;
                                  stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                                }
                                return stringResult;
                              }
                              intl4 = tmp10(tmp11[31]).intl;
                              stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                          }
                        }
                      }
                      return;
                    }
                  }
                  if (cResult[31] === animatedStyle1) {
                    class Be {
                      constructor() {
                        tmp = closure_15;
                        if (null != closure_15) {
                          tmp10 = closure_0;
                          tmp11 = closure_2;
                          obj3 = closure_0(closure_2[47]);
                          if (obj3.isStableUserParticipant(tmp)) {
                            tmp10Result = tmp10(tmp11[47]);
                            if (tmp10Result.stableParticipantHasVideo(tmp)) {
                              obj2 = closure_11;
                              videoDevices = closure_11.getVideoDevices();
                              tmp3 = globalThis;
                              _Object = Object;
                              keys = Object.keys(videoDevices);
                              num = 2;
                              if (keys.length >= 2) {
                                videoDeviceId = obj2.getVideoDeviceId();
                                closure_0 = videoDeviceId;
                                tmp13 = videoDevices[videoDeviceId];
                                facing = undefined;
                                if (tmp13 != null) {
                                  facing = tmp13.facing;
                                }
                                found = keys.find((item) => item !== videoDeviceId);
                                if (null != found) {
                                  tmp7 = videoDevices[found];
                                  facing1 = undefined;
                                  if (tmp7 != null) {
                                    facing1 = tmp7.facing;
                                  }
                                  tmp6 = facing1;
                                }
                                if (null != facing) {
                                  if (null != tmp6) {
                                    str3 = "back";
                                    if ("back" === facing) {
                                      str = "front";
                                      if ("front" === tmp6) {
                                        intl3 = tmp10(tmp11[31]).intl;
                                        stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                      }
                                    }
                                    str2 = "front";
                                    if ("front" === facing) {
                                      if ("back" === tmp6) {
                                        intl2 = tmp10(tmp11[31]).intl;
                                        stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                      }
                                    }
                                    intl = tmp10(tmp11[31]).intl;
                                    stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                                  }
                                  return stringResult;
                                }
                                intl4 = tmp10(tmp11[31]).intl;
                                stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                              }
                            }
                          }
                        }
                        return;
                      }
                    }
                    if (cResult[34] === focused) {
                      class Be {
                        constructor() {
                          tmp = closure_15;
                          if (null != closure_15) {
                            tmp10 = closure_0;
                            tmp11 = closure_2;
                            obj3 = closure_0(closure_2[47]);
                            if (obj3.isStableUserParticipant(tmp)) {
                              tmp10Result = tmp10(tmp11[47]);
                              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                                obj2 = closure_11;
                                videoDevices = closure_11.getVideoDevices();
                                tmp3 = globalThis;
                                _Object = Object;
                                keys = Object.keys(videoDevices);
                                num = 2;
                                if (keys.length >= 2) {
                                  videoDeviceId = obj2.getVideoDeviceId();
                                  closure_0 = videoDeviceId;
                                  tmp13 = videoDevices[videoDeviceId];
                                  facing = undefined;
                                  if (tmp13 != null) {
                                    facing = tmp13.facing;
                                  }
                                  found = keys.find((item) => item !== videoDeviceId);
                                  if (null != found) {
                                    tmp7 = videoDevices[found];
                                    facing1 = undefined;
                                    if (tmp7 != null) {
                                      facing1 = tmp7.facing;
                                    }
                                    tmp6 = facing1;
                                  }
                                  if (null != facing) {
                                    if (null != tmp6) {
                                      str3 = "back";
                                      if ("back" === facing) {
                                        str = "front";
                                        if ("front" === tmp6) {
                                          intl3 = tmp10(tmp11[31]).intl;
                                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                        }
                                      }
                                      str2 = "front";
                                      if ("front" === facing) {
                                        if ("back" === tmp6) {
                                          intl2 = tmp10(tmp11[31]).intl;
                                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                        }
                                      }
                                      intl = tmp10(tmp11[31]).intl;
                                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                                    }
                                    return stringResult;
                                  }
                                  intl4 = tmp10(tmp11[31]).intl;
                                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                                }
                              }
                            }
                          }
                          return;
                        }
                      }
                    }
                    const obj12 = { isHeaderHidden: derivedValue1, scrollPosition, focused };
                    const tmp72 = closure_23(closure_35, obj12);
                    cResult[34] = focused;
                    cResult[35] = derivedValue1;
                    cResult[36] = scrollPosition;
                    cResult[37] = tmp72;
                  }
                  const items7 = [tmp4.headerSurface, animatedStyle1];
                  cResult[31] = animatedStyle1;
                  cResult[32] = tmp4.headerSurface;
                  cResult[33] = items7;
                }
                const items8 = [tmp4.headerWrapper, animatedStyle];
                cResult[28] = animatedStyle;
                cResult[29] = tmp4.headerWrapper;
                cResult[30] = items8;
                const tmpResult32 = tmp(tmp2[50]);
              }
              const obj13 = { streamKey: null, channelId };
              cResult[25] = channelId;
              cResult[26] = null;
              cResult[27] = obj13;
              tmp65 = obj13;
              const tmpResult31 = tmp(tmp2[50]);
            }
            const obj14 = { userId: null, channelId };
            cResult[22] = channelId;
            cResult[23] = null;
            cResult[24] = obj14;
            tmp62 = obj14;
            const tmpResult30 = tmp(tmp2[49]);
          }
        }
        if (DOWN === tmp39.LEFT) {
          class Be {
            constructor() {
              tmp = closure_15;
              if (null != closure_15) {
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj3 = closure_0(closure_2[47]);
                if (obj3.isStableUserParticipant(tmp)) {
                  tmp10Result = tmp10(tmp11[47]);
                  if (tmp10Result.stableParticipantHasVideo(tmp)) {
                    obj2 = closure_11;
                    videoDevices = closure_11.getVideoDevices();
                    tmp3 = globalThis;
                    _Object = Object;
                    keys = Object.keys(videoDevices);
                    num = 2;
                    if (keys.length >= 2) {
                      videoDeviceId = obj2.getVideoDeviceId();
                      closure_0 = videoDeviceId;
                      tmp13 = videoDevices[videoDeviceId];
                      facing = undefined;
                      if (tmp13 != null) {
                        facing = tmp13.facing;
                      }
                      found = keys.find((item) => item !== videoDeviceId);
                      if (null != found) {
                        tmp7 = videoDevices[found];
                        facing1 = undefined;
                        if (tmp7 != null) {
                          facing1 = tmp7.facing;
                        }
                        tmp6 = facing1;
                      }
                      if (null != facing) {
                        if (null != tmp6) {
                          str3 = "back";
                          if ("back" === facing) {
                            str = "front";
                            if ("front" === tmp6) {
                              intl3 = tmp10(tmp11[31]).intl;
                              stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                            }
                          }
                          str2 = "front";
                          if ("front" === facing) {
                            if ("back" === tmp6) {
                              intl2 = tmp10(tmp11[31]).intl;
                              stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                            }
                          }
                          intl = tmp10(tmp11[31]).intl;
                          stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                        return stringResult;
                      }
                      intl4 = tmp10(tmp11[31]).intl;
                      stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                  }
                }
              }
              return;
            }
          }
          let stringResult = obj25.string(tmp(tmp2[31]).t["9M6OdC"]);
        } else {
          class Be {
            constructor() {
              tmp = closure_15;
              if (null != closure_15) {
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj3 = closure_0(closure_2[47]);
                if (obj3.isStableUserParticipant(tmp)) {
                  tmp10Result = tmp10(tmp11[47]);
                  if (tmp10Result.stableParticipantHasVideo(tmp)) {
                    obj2 = closure_11;
                    videoDevices = closure_11.getVideoDevices();
                    tmp3 = globalThis;
                    _Object = Object;
                    keys = Object.keys(videoDevices);
                    num = 2;
                    if (keys.length >= 2) {
                      videoDeviceId = obj2.getVideoDeviceId();
                      closure_0 = videoDeviceId;
                      tmp13 = videoDevices[videoDeviceId];
                      facing = undefined;
                      if (tmp13 != null) {
                        facing = tmp13.facing;
                      }
                      found = keys.find((item) => item !== videoDeviceId);
                      if (null != found) {
                        tmp7 = videoDevices[found];
                        facing1 = undefined;
                        if (tmp7 != null) {
                          facing1 = tmp7.facing;
                        }
                        tmp6 = facing1;
                      }
                      if (null != facing) {
                        if (null != tmp6) {
                          str3 = "back";
                          if ("back" === facing) {
                            str = "front";
                            if ("front" === tmp6) {
                              intl3 = tmp10(tmp11[31]).intl;
                              stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                            }
                          }
                          str2 = "front";
                          if ("front" === facing) {
                            if ("back" === tmp6) {
                              intl2 = tmp10(tmp11[31]).intl;
                              stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                            }
                          }
                          intl = tmp10(tmp11[31]).intl;
                          stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                        return stringResult;
                      }
                      intl4 = tmp10(tmp11[31]).intl;
                      stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                  }
                }
              }
              return;
            }
          }
          const string = tmp42.string;
          const t = tmp(tmp2[31]).t;
          if (tmp13) {
            class Be {
              constructor() {
                tmp = closure_15;
                if (null != closure_15) {
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj3 = closure_0(closure_2[47]);
                  if (obj3.isStableUserParticipant(tmp)) {
                    tmp10Result = tmp10(tmp11[47]);
                    if (tmp10Result.stableParticipantHasVideo(tmp)) {
                      obj2 = closure_11;
                      videoDevices = closure_11.getVideoDevices();
                      tmp3 = globalThis;
                      _Object = Object;
                      keys = Object.keys(videoDevices);
                      num = 2;
                      if (keys.length >= 2) {
                        videoDeviceId = obj2.getVideoDeviceId();
                        closure_0 = videoDeviceId;
                        tmp13 = videoDevices[videoDeviceId];
                        facing = undefined;
                        if (tmp13 != null) {
                          facing = tmp13.facing;
                        }
                        found = keys.find((item) => item !== videoDeviceId);
                        if (null != found) {
                          tmp7 = videoDevices[found];
                          facing1 = undefined;
                          if (tmp7 != null) {
                            facing1 = tmp7.facing;
                          }
                          tmp6 = facing1;
                        }
                        if (null != facing) {
                          if (null != tmp6) {
                            str3 = "back";
                            if ("back" === facing) {
                              str = "front";
                              if ("front" === tmp6) {
                                intl3 = tmp10(tmp11[31]).intl;
                                stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                              }
                            }
                            str2 = "front";
                            if ("front" === facing) {
                              if ("back" === tmp6) {
                                intl2 = tmp10(tmp11[31]).intl;
                                stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                              }
                            }
                            intl = tmp10(tmp11[31]).intl;
                            stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                          }
                          return stringResult;
                        }
                        intl4 = tmp10(tmp11[31]).intl;
                        stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                      }
                    }
                  }
                }
                return;
              }
            }
          } else {
            class Be {
              constructor() {
                tmp = closure_15;
                if (null != closure_15) {
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj3 = closure_0(closure_2[47]);
                  if (obj3.isStableUserParticipant(tmp)) {
                    tmp10Result = tmp10(tmp11[47]);
                    if (tmp10Result.stableParticipantHasVideo(tmp)) {
                      obj2 = closure_11;
                      videoDevices = closure_11.getVideoDevices();
                      tmp3 = globalThis;
                      _Object = Object;
                      keys = Object.keys(videoDevices);
                      num = 2;
                      if (keys.length >= 2) {
                        videoDeviceId = obj2.getVideoDeviceId();
                        closure_0 = videoDeviceId;
                        tmp13 = videoDevices[videoDeviceId];
                        facing = undefined;
                        if (tmp13 != null) {
                          facing = tmp13.facing;
                        }
                        found = keys.find((item) => item !== videoDeviceId);
                        if (null != found) {
                          tmp7 = videoDevices[found];
                          facing1 = undefined;
                          if (tmp7 != null) {
                            facing1 = tmp7.facing;
                          }
                          tmp6 = facing1;
                        }
                        if (null != facing) {
                          if (null != tmp6) {
                            str3 = "back";
                            if ("back" === facing) {
                              str = "front";
                              if ("front" === tmp6) {
                                intl3 = tmp10(tmp11[31]).intl;
                                stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                              }
                            }
                            str2 = "front";
                            if ("front" === facing) {
                              if ("back" === tmp6) {
                                intl2 = tmp10(tmp11[31]).intl;
                                stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                              }
                            }
                            intl = tmp10(tmp11[31]).intl;
                            stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                          }
                          return stringResult;
                        }
                        intl4 = tmp10(tmp11[31]).intl;
                        stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                      }
                    }
                  }
                }
                return;
              }
            }
          }
        }
        cResult[9] = tmp13;
        cResult[10] = DOWN;
        cResult[11] = stringResult;
        const tmpResult28 = wrapperOffset(channelId[46]);
      }
    : function VoicePanelHeader(wrapperOffset) {
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
        const context = controlsSpecs.useContext(gestureState(channelId[27]));
        channelId = context.channelId;
        const focused = context.focused;
        controlsSpecs = context.controlsSpecs;
        const mode = context.mode;
        const safeArea = context.safeArea;
        const connected = context.connected;
        ({ guildId, channelType, scrollPosition } = context);
        const isScreenReaderEnabled = wrapperOffset(channelId[36]).useIsScreenReaderEnabled();
        let obj2 = wrapperOffset(channelId[36]);
        let items = [c10];
        const items1 = [channelId];
        const stateFromStores = wrapperOffset(channelId[29]).useStateFromStores(
          items,
          () => ChannelStore.getChannel(channelId),
          items1,
        );
        let tmp40Result12 = gestureState(channelId[37])(channelId);
        let obj3 = wrapperOffset(channelId[29]);
        let obj4 = gestureState(channelId[38]);
        const items2 = [derivedValue1, token, c10, connected];
        const items3 = [channelId];
        const stateFromStores1 = wrapperOffset(channelId[29]).useStateFromStores(
          items2,
          () => {
            const channel = ChannelStore.getChannel(channelId);
            let channelName;
            if (null != channel) {
              channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
            }
            if (channelName == null) {
              const intl = util.intl;
              channelName = intl.string(util.t.zLZPmk);
            }
            return channelName;
          },
          items3,
        );
        obj5 = wrapperOffset(channelId[29]);
        [tmp11, c9] = focused(controlsSpecs.useState(undefined), 2);
        const tmp10 = focused(controlsSpecs.useState(undefined), 2);
        [tmp13, c10] = focused(controlsSpecs.useState(null), 2);
        const items4 = [channelId];
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
          _undefined(tmp3);
          _undefined(arg0);
        }, items4);
        const tmp12 = focused(controlsSpecs.useState(null), 2);
        const fn = function f() {
          value = focused.get();
          let id;
          if (value != null) {
            id = value.id;
          }
          return id;
        };
        fn.__closure = { focused };
        fn.__workletHash = 13360529041025;
        fn.__initData = __initData19;
        const fn2 = function u(arg0, arg1) {
          if (arg0 !== arg1) {
            ReanimatedRexport.runOnJS(callback)(arg0);
          }
        };
        const obj6 = wrapperOffset(channelId[22]);
        fn2.__closure = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
        fn2.__workletHash = 3863557916793;
        fn2.__initData = __initData20;
        const animatedReaction = obj6.useAnimatedReaction(fn, fn2);
        const obj7 = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
        token = wrapperOffset(channelId[40]).useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
        const obj8 = wrapperOffset(channelId[40]);
        function pe() {
          if (mode.get() === VoicePanelModes.PIP) {
            let num = -tmpResult.height + EDGE_GUTTER;
          } else {
            num = 0;
            if (mode.get() === tmp3.DISMISSED) {
              num = 0;
            }
          }
          return num;
        }
        const obj9 = wrapperOffset(channelId[22]);
        pe.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          gestureState,
          connected,
          EDGE_GUTTER,
        };
        pe.__workletHash = 4432667021114;
        pe.__initData = __initData21;
        const derivedValue = obj9.useDerivedValue(pe);
        const obj10 = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          mode,
          VoicePanelModes,
          gestureState,
          connected,
          EDGE_GUTTER,
        };
        class Se {
          constructor() {
            tmp = closure_1(closure_2[41]);
            tmpResult = tmp(safeArea.get(), closure_12);
            height = tmpResult.height;
            if (connected.get()) {
              sum = height;
            } else {
              tmp3 = EDGE_GUTTER;
              sum = height - tmpResult.paddingTop + EDGE_GUTTER;
            }
            return { height: sum };
          }
        }
        const obj11 = wrapperOffset(channelId[22]);
        Se.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          connected,
          EDGE_GUTTER,
        };
        Se.__workletHash = 13652046153012;
        Se.__initData = __initData22;
        const animatedStyle = obj11.useAnimatedStyle(Se);
        const obj12 = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          connected,
          EDGE_GUTTER,
        };
        function fe() {
          const tmp2Result = calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token);
          value = mode.get();
          const obj3 = {
            paddingTop: connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER,
            paddingLeft: tmp2Result.paddingLeft,
            paddingRight: tmp2Result.paddingRight,
            borderTopLeftRadius: null,
            borderTopRightRadius: null,
            opacity: null,
            transform: null,
          };
          let num = 24;
          let num2 = 24;
          if (connected.get()) {
            num2 = 0;
          }
          obj3.borderTopLeftRadius = num2;
          if (connected.get()) {
            num = 0;
          }
          obj3.borderTopRightRadius = num;
          if (value === VoicePanelModes.PIP) {
            let num3 = 0;
          } else {
            num3 = 1;
          }
          obj3.opacity = timing.withTiming(num3, closure_25);
          value2 = derivedValue.get();
          if (!connected.get()) {
            if (wrapperOffset.get().gestureActive) {
              let tmp9 = DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
            }
            obj5 = { translateY: tmp6Result.withSpring(value2, tmp9) };
            const items = [obj5];
            obj3.transform = items;
            return obj3;
          }
          tmp9 = UI_SHOW_HIDE_PHYSICS;
          tmp6Result = spring;
        }
        const obj13 = wrapperOffset(channelId[22]);
        fe.__closure = {
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
        fe.__workletHash = 15844160278128;
        fe.__initData = __initData23;
        const animatedStyle1 = obj13.useAnimatedStyle(fe);
        const obj14 = {
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
        class He {
          constructor() {
            tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
            if (tmp) {
              tmp2 = closure_8;
              tmp = !closure_8;
            }
            return tmp;
          }
        }
        He.__closure = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
        He.__workletHash = 7957810318213;
        He.__initData = __initData24;
        derivedValue1 = wrapperOffset(channelId[22]).useDerivedValue(He);
        const obj15 = wrapperOffset(channelId[22]);
        const obj16 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
        class Ee {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_1(closure_2[41]);
            tmp3 = closure_0;
            obj = closure_0(closure_2[42]);
            obj2 = closure_14;
            num = 1;
            if (closure_14.get()) {
              num = 0;
            }
            obj1 = { opacity: obj.withTiming(num, closure_25), transform: null };
            tmp3Result = tmp3(tmp[23]);
            num2 = 0;
            if (obj2.get()) {
              num2 = -tmp2(safeArea.get(), closure_12).height;
            }
            obj6 = { translateY: tmp3Result.withSpring(num2, MODE_CHANGE_PHYSICS) };
            items = [];
            items[0] = obj6;
            obj1.transform = items;
            return obj1;
          }
        }
        const obj17 = wrapperOffset(channelId[22]);
        Ee.__closure = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          withTiming: wrapperOffset(channelId[42]).withTiming,
          isHeaderHidden: derivedValue1,
          OPACITY_TIMING,
          withSpring: wrapperOffset(channelId[23]).withSpring,
          MODE_CHANGE_PHYSICS: DOWN,
        };
        Ee.__workletHash = 10565055547481;
        Ee.__initData = __initData25;
        const animatedStyle2 = obj17.useAnimatedStyle(Ee);
        const obj18 = {
          calculateVoicePanelHeaderSpecs: gestureState(channelId[41]),
          safeArea,
          edgeGutter: token,
          withTiming: wrapperOffset(channelId[42]).withTiming,
          isHeaderHidden: derivedValue1,
          OPACITY_TIMING,
          withSpring: wrapperOffset(channelId[23]).withSpring,
          MODE_CHANGE_PHYSICS: DOWN,
        };
        class Ie {
          constructor() {
            obj = closure_14;
            str = "box-none";
            if (closure_14.get()) {
              str = "none";
            }
            obj1 = { pointerEvents: str, importantForAccessibility: null, accessibilityElementsHidden: null };
            str2 = "auto";
            if (obj.get()) {
              str2 = "no-hide-descendants";
            }
            obj1.importantForAccessibility = str2;
            obj1.accessibilityElementsHidden = obj.get();
            return obj1;
          }
        }
        Ie.__closure = { isHeaderHidden: derivedValue1 };
        Ie.__workletHash = 1667970934768;
        Ie.__initData = __initData26;
        const animatedProps = wrapperOffset(channelId[22]).useAnimatedProps(Ie);
        const obj19 = wrapperOffset(channelId[22]);
        let canInviteMembers = wrapperOffset(channelId[43]).useCanInviteMembers(channelId);
        const obj20 = wrapperOffset(channelId[43]);
        const obj21 = wrapperOffset(channelId[44]);
        const tmp25 = gestureState(channelId[45])();
        const inviteMembersCallback = wrapperOffset(channelId[44]).useInviteMembersCallback(channelId);
        wrapperOffset(channelId[46]).useNavigatorBackPressHandler(tmp25);
        if (null != tmp13) {
          DOWN = constants.LEFT;
          let tmp27 = constants;
        } else {
          tmp27 = constants;
          DOWN = constants.DOWN;
        }
        if (DOWN === tmp27.LEFT) {
          let intl2 = tmp5(tmp3[31]).intl;
          let stringResult = intl2.string(tmp5(tmp3[31]).t["9M6OdC"]);
        } else {
          let intl = tmp5(tmp3[31]).intl;
          const string = intl.string;
          const t = tmp5(tmp3[31]).t;
          if (tmp40Result12) {
            stringResult = string(t.RLCTQG);
          } else {
            stringResult = string(t["5lPjGj"]);
          }
        }
        const obj22 = wrapperOffset(channelId[46]);
        const tmp2ResultResult = gestureState(channelId[47])(AuthenticationStore.getId(), channelId, guildId);
        UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
        let tmp2Result = gestureState(channelId[47]);
        const items5 = [handleFocusChange];
        const items6 = [tmp2ResultResult];
        const stateFromStores2 = wrapperOffset(channelId[29]).useStateFromStores(
          items5,
          () => {
            if (null != closure_16) {
              if (obj3.isStableUserParticipant(closure_16)) {
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
                      if (null != tmp6) {
                        if ("back" === facing) {
                          if ("front" === tmp6) {
                            const intl3 = util.intl;
                            let stringResult = intl3.string(util.t["/R1SBx"]);
                          }
                        }
                        if ("front" === facing) {
                          if ("back" === tmp6) {
                            const intl2 = util.intl;
                            stringResult = intl2.string(util.t["7YZ/Si"]);
                          }
                        }
                        const intl = util.intl;
                        stringResult = intl.string(util.t["t9eQ/g"]);
                      }
                      return stringResult;
                    }
                    const intl4 = util.intl;
                    stringResult = intl4.string(util.t["t9eQ/g"]);
                  }
                }
                tmp10Result = useStableParticipant;
              }
              obj3 = useStableParticipant;
            }
          },
          items6,
        );
        const items7 = [DOWN];
        const callback1 = obj.useCallback(() => {
          const videoDeviceId = callback.getVideoDeviceId();
          const keys = Object.keys(callback.getVideoDevices());
          const found = keys.find((item) => item !== closure_0);
          if (null != found) {
            gestureState(channelId[48]).setVideoDevice(found);
            const obj = gestureState(channelId[48]);
          }
        }, []);
        const memo = obj.useMemo(() => {
          let str = "0deg";
          if (DOWN === constants.LEFT) {
            str = "90deg";
          }
          const obj = { transform: null };
          const items = [{ rotateZ: str }];
          obj.transform = items;
          return obj;
        }, items7);
        const tmp5Result = wrapperOffset(channelId[29]);
        const isSecureFramesUIEnabled = wrapperOffset(channelId[49]).useIsSecureFramesUIEnabled({ channelId });
        const tmp5Result4 = wrapperOffset(channelId[49]);
        let tmp37 = null;
        if (tmp13 === ParticipantTypes.USER) {
          tmp37 = null;
          if (null != tmp11) {
            tmp37 = tmp11;
          }
        }
        const isUserSecureFramesVerified = wrapperOffset(channelId[50]).useIsUserSecureFramesVerified({
          userId: tmp37,
          channelId,
        });
        const tmp5Result5 = wrapperOffset(channelId[50]);
        let tmp39 = null;
        if (tmp13 === ParticipantTypes.STREAM) {
          tmp39 = null;
          if (null != tmp11) {
            tmp39 = tmp11;
          }
        }
        let flag = wrapperOffset(channelId[50]).useIsStreamSecureFramesVerified({ streamKey: tmp39, channelId });
        if (ParticipantTypes.STREAM !== tmp13) {
          flag = false;
          if (ParticipantTypes.USER === tmp13) {
            flag = isUserSecureFramesVerified;
          }
        }
        let ONYX;
        if (tmp40Result12) {
          ONYX = ThemeTypes.ONYX;
        }
        const obj23 = { theme: ONYX, children: null };
        const obj24 = { style: null, pointerEvents: "box-none", layout, children: null };
        const items8 = [tmp.headerWrapper, animatedStyle];
        obj24.style = items8;
        const tmp5Result6 = wrapperOffset(channelId[50]);
        const obj25 = { style: null, pointerEvents: "box-none", children: null };
        const items9 = [tmp.headerSurface, animatedStyle1];
        obj25.style = items9;
        const tmp2Result12 = gestureState(channelId[26]);
        const items10 = [closure_23(closure_35, { isHeaderHidden: derivedValue1, scrollPosition, focused }), ,];
        let tmp40Result = tmp40Result12;
        if (tmp40Result12) {
          const obj26 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
          tmp40Result = closure_23(tmp2(tmp3[51]), obj26);
          const tmp2Result14 = tmp2(tmp3[51]);
        }
        items10[1] = tmp40Result;
        const obj27 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: null };
        let tmp40Result7 = null;
        const tmp2Result13 = gestureState(channelId[26]);
        if (tmp13 === ParticipantTypes.USER) {
          const obj28 = { isHeaderHidden: derivedValue1 };
          tmp40Result7 = closure_23(tmp2(tmp3[52]), obj28);
        }
        const items11 = [tmp40Result7];
        const obj29 = { style: null, animatedProps, children: null };
        const items12 = [tmp.headerOuter, animatedStyle2];
        obj29.style = items12;
        const tmp2Result15 = gestureState(channelId[26]);
        const obj30 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: null };
        const tmp2Result16 = gestureState(channelId[26]);
        const obj31 = { icon: null, accessibilityLabel: null, onPress: null, style: null };
        const tmp2Result17 = gestureState(channelId[25]);
        obj31.icon = gestureState(channelId[53]);
        obj31.accessibilityLabel = stringResult;
        obj31.onPress = tmp25;
        obj31.style = memo;
        const items13 = [closure_23(gestureState(channelId[35]), obj31)];
        const obj32 = { style: tmp.headerInner, children: null };
        const tmp2Result18 = gestureState(channelId[35]);
        const items14 = [closure_23(gestureState(channelId[54]), {})];
        let tmp40Result8 = null;
        if (isSecureFramesUIEnabled) {
          tmp40Result8 = null;
          if (flag) {
            const obj33 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
            tmp40Result8 = closure_23(tmp5(tmp3[55]).ShieldLockIcon, obj33);
          }
        }
        items14[1] = tmp40Result8;
        obj32.children = items14;
        items13[1] = closure_24(gestureState(channelId[26]), obj32);
        obj30.children = items13;
        const items15 = [closure_24(tmp2Result17, obj30)];
        const obj34 = { style: tmp.rightWrapper, layout, children: null };
        const tmp2Result19 = gestureState(channelId[26]);
        const items16 = [closure_23(closure_40, {}), , , , , ,];
        let tmp40Result9 = channelType === tmp5(tmp3[56]).ChannelTypes.GUILD_STAGE_VOICE;
        if (tmp40Result9) {
          const obj35 = { channelId };
          tmp40Result9 = closure_23(closure_41, obj35);
        }
        items16[1] = tmp40Result9;
        items16[2] = closure_23(gestureState(channelId[57]), { isConnectedToVoiceChannel: tmp40Result12, channelId });
        let tmp40Result10 = null;
        if (null != stateFromStores) {
          const obj36 = { channel: stateFromStores, inCall: tmp40Result12 };
          tmp40Result10 = closure_23(tmp2(tmp3[58]), obj36);
        }
        items16[3] = tmp40Result10;
        if (canInviteMembers) {
          const obj37 = { icon: tmp2(tmp3[59]), accessibilityLabel: null, onPress: null };
          let intl3 = tmp5(tmp3[31]).intl;
          const obj38 = { channelName: stateFromStores1 };
          obj37.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp3[31]).t["dHHb/2"], obj38);
          obj37.onPress = inviteMembersCallback;
          canInviteMembers = closure_23(tmp2(tmp3[35]), obj37);
          const tmp2Result21 = tmp2(tmp3[35]);
        }
        items16[4] = canInviteMembers;
        let tmp40Result11 = null;
        if (null != stateFromStores2) {
          const obj39 = { icon: tmp2(tmp3[60]), onPress: callback1, accessibilityLabel: stateFromStores2 };
          tmp40Result11 = closure_23(tmp2(tmp3[35]), obj39);
          const tmp2Result22 = tmp2(tmp3[35]);
        }
        items16[5] = tmp40Result11;
        if (tmp40Result12) {
          tmp40Result12 =
            obj4.useConfig({ location: "VoicePanelHeader" }).treatment ===
            tmp5(tmp3[38]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
        }
        if (tmp40Result12) {
          const obj40 = { channelId };
          tmp40Result12 = closure_23(tmp2(tmp3[61]), obj40);
        }
        items16[6] = tmp40Result12;
        obj34.children = items16;
        items15[1] = closure_24(gestureState(channelId[26]), obj34);
        obj29.children = items15;
        items11[1] = closure_24(tmp2Result16, obj29);
        obj27.children = items11;
        items10[2] = closure_24(tmp2Result15, obj27);
        obj25.children = items10;
        obj24.children = closure_24(tmp2Result13, obj25);
        obj23.children = closure_23(tmp2Result12, obj24);
        return closure_23(wrapperOffset(channelId[62]).ThemeContextProvider, obj23);
      },
);
