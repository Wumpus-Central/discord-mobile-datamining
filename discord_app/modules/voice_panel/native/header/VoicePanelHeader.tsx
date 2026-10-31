// discord_app/modules/voice_panel/native/header/VoicePanelHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useChannelName from "../../../channel/useChannelName.tsx";
import calculateVoicePanelHeaderSpecs from "calculateVoicePanelHeaderSpecs.tsx";
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
function MusicMuteButton(channelId) {
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
      const intl = tmp4(1113).intl;
      const string = intl.string;
      const t = tmp4(1113).t;
      if (stateFromStores) {
        let stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 11880 : 8558),
        onPress() {
          return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
        },
      };
      closure_24(VoicePanelIconButtonDefault, obj3);
      const tmpResult = VoicePanelIconButtonDefault;
    }
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(11223);
let MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({
  UI_SHOW_HIDE_PHYSICS: closure_16,
  VoicePanelModes: closure_17,
  DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18,
} = VoicePanelConstants);
const EDGE_GUTTER = fn(11226).EDGE_GUTTER;
const VoicePanelControlsModes = fn(11221).VoicePanelControlsModes;
let DOCK_PULL_SNAP_DISTANCE = fn(11241).DOCK_PULL_SNAP_DISTANCE;
const ParticipantTypes = fn(5681).ParticipantTypes;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_24, jsxs: closure_25 } = jsxProd);
const OPACITY_TIMING = { duration: 300 };
const createStyles = fn(5014);
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
let closure_27 = createStyles.createStyles(obj);
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
let closure_33 = noop.memo(function HeaderBlur(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = closure_27();
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
  fn.__workletHash = 8127245112238;
  fn.__initData = __initData;
  const derivedValue = isHeaderHidden(focused[21]).useDerivedValue(fn);
  let obj = isHeaderHidden(focused[21]);
  const fn2 = function l() {
    let num = 0;
    if (derivedValue.get()) {
      num = 0.3;
    }
    return { blurAmount: spring.withSpring(num) };
  };
  const obj2 = isHeaderHidden(focused[21]);
  fn2.__closure = { withSpring: isHeaderHidden(focused[22]).withSpring, showHeaderBlur: derivedValue };
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
  const animatedProps = obj2.useAnimatedProps(fn2);
  const obj3 = { withSpring: isHeaderHidden(focused[22]).withSpring, showHeaderBlur: derivedValue };
  const fn3 = function u() {
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, obj5) };
  };
  obj5 = {
    withSpring: isHeaderHidden(focused[22]).withSpring,
    showHeaderBlur: derivedValue,
    HEADER_CHANGE_PHYSICS: obj5,
  };
  fn3.__closure = obj5;
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  const animatedStyle = isHeaderHidden(focused[21]).useAnimatedStyle(fn3);
  const obj6 = { style: null, pointerEvents: "none", children: null };
  const items = [StyleSheet.absoluteFill, animatedStyle];
  obj6.style = items;
  const obj4 = isHeaderHidden(focused[21]);
  const items1 = [
    closure_24(scrollPosition(focused[24]), {
      style: tmp.blurStyles,
      blurStyle: "ultra-thin",
      blurTheme: "dark",
      animatedProps,
    }),
  ];
  const obj8 = { style: tmp.strokeContainer, children: null };
  const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  let tmp5 = scrollPosition(focused[23]);
  const items2 = [
    closure_24(scrollPosition(focused[25]), { style: tmp.stroke }),
    closure_24(scrollPosition(focused[25]), { style: tmp.strokeAlt }),
  ];
  obj8.children = items2;
  items1[1] = closure_25(scrollPosition(focused[25]), obj8);
  obj6.children = items1;
  return closure_25(tmp5, obj6);
});
const __initData4 = {
  code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}",
};
const __initData5 = {
  code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}",
};
let closure_36 = noop.memo(function FocusedSpeakingDot() {
  const id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[26]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const sharedValue = id(controlsSpecs[21]).useSharedValue(SpeakingStore.isSpeaking(id));
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
  const tmp5 = closure_27();
  const obj = id(controlsSpecs[21]);
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
  fn.__workletHash = 5466722752449;
  fn.__initData = __initData4;
  derivedValue = id(controlsSpecs[21]).useDerivedValue(fn);
  const obj2 = id(controlsSpecs[21]);
  const obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  const fn2 = function h() {
    let opacity = 0;
    if (derivedValue.get()) {
      opacity = 1;
    }
    return { opacity };
  };
  fn2.__closure = { showSpeakingIndicator: derivedValue };
  fn2.__workletHash = 16177124708898;
  fn2.__initData = __initData5;
  const animatedStyle = id(controlsSpecs[21]).useAnimatedStyle(fn2);
  obj5 = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  obj5.style = items1;
  const obj4 = id(controlsSpecs[21]);
  obj5.children = closure_24(focused(controlsSpecs[23]), { style: tmp5.focusedSpeakingDot });
  return closure_24(focused(controlsSpecs[23]), obj5);
});
const __initData6 = {
  code: "function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData7 = {
  code: "function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}",
};
const __initData8 = {
  code: "function VoicePanelHeaderTsx8(){const{isDockEnabled,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;if(isDockEnabled){return 0;}const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}",
};
const __initData9 = {
  code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER,isDockEnabled,wrapperDimensions,dockHeight,DOCK_PULL_SNAP_DISTANCE,interpolate,dockMinimizeProgress,Extrapolation}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(!connected.get()){return EDGE_GUTTER;}if(!isDockEnabled){return specs.paddingTop;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const headerRevealProgress=travel>0?Math.min(DOCK_PULL_SNAP_DISTANCE/travel,1):0;return interpolate(1-dockMinimizeProgress.get(),[headerRevealProgress,1],[edgeGutter,specs.paddingTop],Extrapolation.CLAMP);}",
};
const __initData10 = {
  code: "function VoicePanelHeaderTsx10(){const{BASE_VOICE_PANEL_HEADER_HEIGHT,headerPaddingTop}=this.__closure;return{height:BASE_VOICE_PANEL_HEADER_HEIGHT+headerPaddingTop.get()};}",
};
const __initData11 = {
  code: "function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,isDockEnabled,mode,VoicePanelModes,connected,headerPaddingTop,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const hidesForMinimize=!isDockEnabled&&mode.get()===VoicePanelModes.PIP;const ridesSheetOut=isDockEnabled&&connected.get();return{paddingTop:headerPaddingTop.get(),paddingLeft:specs.paddingLeft,paddingRight:specs.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(hidesForMinimize||mode.get()===VoicePanelModes.DISMISSED&&!ridesSheetOut?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData12 = {
  code: "function VoicePanelHeaderTsx12(){const{connected,dockMinimizeProgress}=this.__closure;return{opacity:connected.get()?Math.min(Math.max(1-dockMinimizeProgress.get(),0),1):1};}",
};
const __initData13 = {
  code: "function VoicePanelHeaderTsx13(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}",
};
const __initData14 = {
  code: "function VoicePanelHeaderTsx14(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}",
};
const __initData15 = {
  code: "function VoicePanelHeaderTsx15(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default noop.memo(function VoicePanelHeader(wrapperOffset) {
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const layout = wrapperOffset.layout;
  let channelId;
  let controlsSpecs;
  c13 = undefined;
  c14 = undefined;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let DOWN;
  DOCK_PULL_SNAP_DISTANCE = undefined;
  let tmp = closure_27();
  const context = controlsSpecs.useContext(gestureState(channelId[26]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  const isDockEnabled = context.isDockEnabled;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  const dockHeight = context.dockHeight;
  const wrapperDimensions = context.wrapperDimensions;
  ({ guildId, channelType, scrollPosition } = context);
  const isScreenReaderEnabled = wrapperOffset(channelId[35]).useIsScreenReaderEnabled();
  let obj2 = wrapperOffset(channelId[35]);
  let items = [dockHeight];
  let items1 = [channelId];
  const stateFromStores = wrapperOffset(channelId[28]).useStateFromStores(
    items,
    () => ChannelStore.getChannel(channelId),
    items1,
  );
  let tmp42Result11 = gestureState(channelId[36])(channelId);
  let obj3 = wrapperOffset(channelId[28]);
  let obj4 = gestureState(channelId[37]);
  const items2 = [c14, isScreenReaderEnabled, dockHeight, connected];
  const items3 = [channelId];
  const stateFromStores1 = wrapperOffset(channelId[28]).useStateFromStores(
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
  obj5 = wrapperOffset(channelId[28]);
  [tmp11, c13] = focused(controlsSpecs.useState(undefined), 2);
  const tmp10 = focused(controlsSpecs.useState(undefined), 2);
  [tmp13, c14] = focused(controlsSpecs.useState(null), 2);
  const items4 = [channelId];
  MODE_CHANGE_PHYSICS = controlsSpecs.useCallback((arg0) => {
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
  const fn = function k() {
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 7943480174143;
  fn.__initData = __initData6;
  const fn2 = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback)(arg0);
    }
  };
  const obj6 = wrapperOffset(channelId[21]);
  fn2.__closure = { runOnJS: wrapperOffset(channelId[21]).runOnJS, handleFocusChange: MODE_CHANGE_PHYSICS };
  fn2.__workletHash = 13084116412140;
  fn2.__initData = __initData7;
  const animatedReaction = obj6.useAnimatedReaction(fn, fn2);
  const obj7 = { runOnJS: wrapperOffset(channelId[21]).runOnJS, handleFocusChange: MODE_CHANGE_PHYSICS };
  const token = wrapperOffset(channelId[39]).useToken(gestureState(channelId[20]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj8 = wrapperOffset(channelId[39]);
  class Te {
    constructor() {
      if (isDockEnabled) {
        num2 = 0;
        return 0;
      } else {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp4 = safeArea;
        tmp3 = closure_1(closure_2[40]);
        tmp5 = closure_16;
        obj = mode;
        tmp3Result = tmp3(safeArea.get(), closure_16);
        if (mode.get() === VoicePanelModes.PIP) {
          tmp10 = EDGE_GUTTER;
          num = -tmp3Result.height + EDGE_GUTTER;
        } else {
          obj2 = gestureState;
          if (gestureState.get().active) {
            if (!obj2.get().requiresPop) {
              tmp8 = connected;
            }
          }
          num = 0;
          if (obj.get() === tmp7.DISMISSED) {
            tmp9 = connected;
            num = 0;
          }
        }
        return num;
      }
    }
  }
  const obj9 = wrapperOffset(channelId[21]);
  Te.__closure = {
    isDockEnabled,
    calculateVoicePanelHeaderSpecs: gestureState(channelId[40]),
    safeArea,
    edgeGutter: token,
    mode,
    VoicePanelModes: derivedValue,
    gestureState,
    connected,
    EDGE_GUTTER: derivedValue2,
  };
  Te.__workletHash = 11147398524964;
  Te.__initData = __initData8;
  derivedValue = obj9.useDerivedValue(Te);
  const obj10 = {
    isDockEnabled,
    calculateVoicePanelHeaderSpecs: gestureState(channelId[40]),
    safeArea,
    edgeGutter: token,
    mode,
    VoicePanelModes: derivedValue,
    gestureState,
    connected,
    EDGE_GUTTER: derivedValue2,
  };
  class De {
    constructor() {
      tmp = closure_2;
      tmp2 = closure_1(closure_2[40]);
      tmp3 = closure_16;
      tmp2Result = tmp2(safeArea.get(), closure_16);
      if (connected.get()) {
        tmp6 = isDockEnabled;
        if (isDockEnabled) {
          tmp7 = wrapperDimensions;
          tmp8 = dockHeight;
          diff = wrapperDimensions.get().drawerHeight - dockHeight.get();
          num = 0;
          if (diff > 0) {
            tmp10 = globalThis;
            _Math = Math;
            tmp11 = DOCK_PULL_SNAP_DISTANCE;
            num2 = 1;
            num = Math.min(DOCK_PULL_SNAP_DISTANCE / diff, 1);
          }
          tmp12 = closure_0;
          obj = closure_0(tmp[21]);
          tmp13 = dockMinimizeProgress;
          num3 = 1;
          diff1 = 1 - dockMinimizeProgress.get();
          items = [,];
          items[0] = num;
          items[1] = 1;
          items1 = [,];
          items1[0] = tmp3;
          items1[1] = tmp2Result.paddingTop;
          tmp15 = obj;
          tmp16 = diff1;
          tmp17 = items;
          tmp18 = items1;
          return obj.interpolate(diff1, items, items1, closure_0(tmp[21]).Extrapolation.CLAMP);
        } else {
          return tmp2Result.paddingTop;
        }
      } else {
        tmp5 = EDGE_GUTTER;
        return EDGE_GUTTER;
      }
    }
  }
  const obj11 = wrapperOffset(channelId[21]);
  De.__closure = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[40]),
    safeArea,
    edgeGutter: token,
    connected,
    EDGE_GUTTER: derivedValue2,
    isDockEnabled,
    wrapperDimensions,
    dockHeight,
    DOCK_PULL_SNAP_DISTANCE,
    interpolate: wrapperOffset(channelId[21]).interpolate,
    dockMinimizeProgress,
    Extrapolation: wrapperOffset(channelId[21]).Extrapolation,
  };
  De.__workletHash = 5513906451503;
  De.__initData = __initData9;
  derivedValue1 = obj11.useDerivedValue(De);
  const obj12 = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[40]),
    safeArea,
    edgeGutter: token,
    connected,
    EDGE_GUTTER: derivedValue2,
    isDockEnabled,
    wrapperDimensions,
    dockHeight,
    DOCK_PULL_SNAP_DISTANCE,
    interpolate: wrapperOffset(channelId[21]).interpolate,
    dockMinimizeProgress,
    Extrapolation: wrapperOffset(channelId[21]).Extrapolation,
  };
  class Ce {
    constructor() {
      obj = { height: closure_0(closure_2[40]).BASE_VOICE_PANEL_HEADER_HEIGHT + closure_18.get() };
      return obj;
    }
  }
  const obj13 = wrapperOffset(channelId[21]);
  Ce.__closure = {
    BASE_VOICE_PANEL_HEADER_HEIGHT: wrapperOffset(channelId[40]).BASE_VOICE_PANEL_HEADER_HEIGHT,
    headerPaddingTop: derivedValue1,
  };
  Ce.__workletHash = 14899434854035;
  Ce.__initData = __initData10;
  const animatedStyle = obj13.useAnimatedStyle(Ce);
  const obj14 = {
    BASE_VOICE_PANEL_HEADER_HEIGHT: wrapperOffset(channelId[40]).BASE_VOICE_PANEL_HEADER_HEIGHT,
    headerPaddingTop: derivedValue1,
  };
  class Ae {
    constructor() {
      tmp = closure_2;
      tmp2 = closure_1(closure_2[40]);
      tmp2Result = tmp2(safeArea.get(), closure_16);
      value = isDockEnabled;
      tmp5 = !isDockEnabled;
      if (!isDockEnabled) {
        tmp6 = mode;
        tmp7 = VoicePanelModes;
        tmp5 = mode.get() === VoicePanelModes.PIP;
      }
      if (value) {
        tmp8 = connected;
        value = connected.get();
      }
      obj = {
        paddingTop: closure_18.get(),
        paddingLeft: tmp2Result.paddingLeft,
        paddingRight: tmp2Result.paddingRight,
        borderTopLeftRadius: null,
        borderTopRightRadius: null,
        opacity: null,
        transform: null,
      };
      obj2 = connected;
      num = 24;
      num2 = 24;
      if (connected.get()) {
        num2 = 0;
      }
      obj.borderTopLeftRadius = num2;
      if (obj2.get()) {
        num = 0;
      }
      obj.borderTopRightRadius = num;
      tmp9 = closure_0;
      obj3 = closure_0(tmp[41]);
      if (tmp5) {
        num4 = 0;
      } else {
        tmp10 = mode;
        tmp11 = VoicePanelModes;
        num3 = 1;
        num4 = 1;
        if (mode.get() === VoicePanelModes.DISMISSED) {
          num4 = 1;
        }
      }
      obj.opacity = obj3.withTiming(num4, closure_26);
      tmp9Result = tmp9(tmp[22]);
      value1 = closure_17.get();
      if (!obj2.get()) {
        tmp13 = wrapperOffset;
        if (wrapperOffset.get().gestureActive) {
          tmp14 = closure_18;
        }
        obj1 = { translateY: null };
        obj1.translateY = tmp9Result.withSpring(value1, tmp14);
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
      tmp14 = UI_SHOW_HIDE_PHYSICS;
      return;
    }
  }
  const obj15 = wrapperOffset(channelId[21]);
  Ae.__closure = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[40]),
    safeArea,
    edgeGutter: token,
    isDockEnabled,
    mode,
    VoicePanelModes: derivedValue,
    connected,
    headerPaddingTop: derivedValue1,
    withTiming: wrapperOffset(channelId[41]).withTiming,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[22]).withSpring,
    yOffset: derivedValue,
    wrapperOffset,
    DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: derivedValue1,
    UI_SHOW_HIDE_PHYSICS: token,
  };
  Ae.__workletHash = 13312009093405;
  Ae.__initData = __initData11;
  const animatedStyle1 = obj15.useAnimatedStyle(Ae);
  const obj16 = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[40]),
    safeArea,
    edgeGutter: token,
    isDockEnabled,
    mode,
    VoicePanelModes: derivedValue,
    connected,
    headerPaddingTop: derivedValue1,
    withTiming: wrapperOffset(channelId[41]).withTiming,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[22]).withSpring,
    yOffset: derivedValue,
    wrapperOffset,
    DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: derivedValue1,
    UI_SHOW_HIDE_PHYSICS: token,
  };
  function be() {
    let opacity = 1;
    if (connected.get()) {
      const _Math = Math;
      const _Math2 = Math;
      opacity = Math.min(Math.max(1 - dockMinimizeProgress.get(), 0), 1);
    }
    return { opacity };
  }
  be.__closure = { connected, dockMinimizeProgress };
  be.__workletHash = 5918254352178;
  be.__initData = __initData12;
  let animatedStyle2 = wrapperOffset(channelId[21]).useAnimatedStyle(be);
  const obj17 = wrapperOffset(channelId[21]);
  function we() {
    let tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    if (tmp) {
      tmp = !isScreenReaderEnabled;
    }
    return tmp;
  }
  we.__closure = { controlsSpecs, VoicePanelControlsModes: DOWN, isScreenReaderEnabled };
  we.__workletHash = 16238308077793;
  we.__initData = __initData13;
  derivedValue2 = wrapperOffset(channelId[21]).useDerivedValue(we);
  const obj18 = wrapperOffset(channelId[21]);
  const obj19 = { controlsSpecs, VoicePanelControlsModes: DOWN, isScreenReaderEnabled };
  class Ve {
    constructor() {
      tmp = closure_2;
      tmp2 = closure_1(closure_2[40]);
      tmp3 = closure_0;
      obj = closure_0(closure_2[41]);
      obj2 = closure_19;
      num = 1;
      if (closure_19.get()) {
        num = 0;
      }
      obj1 = { opacity: obj.withTiming(num, closure_26), transform: null };
      tmp3Result = tmp3(tmp[22]);
      num2 = 0;
      if (obj2.get()) {
        num2 = -tmp2(safeArea.get(), closure_16).height;
      }
      obj6 = { translateY: tmp3Result.withSpring(num2, MODE_CHANGE_PHYSICS) };
      items = [];
      items[0] = obj6;
      obj1.transform = items;
      return obj1;
    }
  }
  const obj20 = wrapperOffset(channelId[21]);
  Ve.__closure = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[40]),
    safeArea,
    edgeGutter: token,
    withTiming: wrapperOffset(channelId[41]).withTiming,
    isHeaderHidden: derivedValue2,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[22]).withSpring,
    MODE_CHANGE_PHYSICS,
  };
  Ve.__workletHash = 14647155301883;
  Ve.__initData = __initData14;
  const animatedStyle3 = obj20.useAnimatedStyle(Ve);
  const obj21 = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[40]),
    safeArea,
    edgeGutter: token,
    withTiming: wrapperOffset(channelId[41]).withTiming,
    isHeaderHidden: derivedValue2,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[22]).withSpring,
    MODE_CHANGE_PHYSICS,
  };
  function ke() {
    let str = "box-none";
    if (derivedValue2.get()) {
      str = "none";
    }
    const obj2 = { pointerEvents: str, importantForAccessibility: null, accessibilityElementsHidden: null };
    let str2 = "auto";
    if (derivedValue2.get()) {
      str2 = "no-hide-descendants";
    }
    obj2.importantForAccessibility = str2;
    obj2.accessibilityElementsHidden = derivedValue2.get();
    return obj2;
  }
  ke.__closure = { isHeaderHidden: derivedValue2 };
  ke.__workletHash = 10804034531344;
  ke.__initData = __initData15;
  const animatedProps = wrapperOffset(channelId[21]).useAnimatedProps(ke);
  const obj22 = wrapperOffset(channelId[21]);
  let canInviteMembers = wrapperOffset(channelId[42]).useCanInviteMembers(channelId);
  const obj23 = wrapperOffset(channelId[42]);
  const obj24 = wrapperOffset(channelId[43]);
  const tmp27 = gestureState(channelId[44])();
  const inviteMembersCallback = wrapperOffset(channelId[43]).useInviteMembersCallback(channelId);
  wrapperOffset(channelId[45]).useNavigatorBackPressHandler(tmp27);
  if (null != tmp13) {
    DOWN = constants.LEFT;
    let tmp29 = constants;
  } else {
    tmp29 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp29.LEFT) {
    let intl2 = tmp5(tmp3[31]).intl;
    let stringResult = intl2.string(tmp5(tmp3[31]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[31]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[31]).t;
    if (tmp42Result11) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  const obj25 = wrapperOffset(channelId[45]);
  const tmp2ResultResult = gestureState(channelId[46])(dockMinimizeProgress.getId(), channelId, guildId);
  DOCK_PULL_SNAP_DISTANCE = tmp2ResultResult;
  let tmp2Result = gestureState(channelId[46]);
  const items5 = [wrapperDimensions];
  const items6 = [tmp2ResultResult];
  const stateFromStores2 = wrapperOffset(channelId[28]).useStateFromStores(
    items5,
    () => {
      if (null != closure_21) {
        if (obj3.isStableUserParticipant(closure_21)) {
          if (tmp10Result.stableParticipantHasVideo(closure_21)) {
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
    const videoDeviceId = wrapperDimensions.getVideoDeviceId();
    const keys = Object.keys(wrapperDimensions.getVideoDevices());
    const found = keys.find((item) => item !== closure_0);
    if (null != found) {
      gestureState(channelId[47]).setVideoDevice(found);
      const obj = gestureState(channelId[47]);
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
  const tmp5Result = wrapperOffset(channelId[28]);
  const isSecureFramesUIEnabled = wrapperOffset(channelId[48]).useIsSecureFramesUIEnabled({ channelId });
  const tmp5Result4 = wrapperOffset(channelId[48]);
  let tmp39 = null;
  if (tmp13 === ParticipantTypes.USER) {
    tmp39 = null;
    if (null != tmp11) {
      tmp39 = tmp11;
    }
  }
  const isUserSecureFramesVerified = wrapperOffset(channelId[49]).useIsUserSecureFramesVerified({
    userId: tmp39,
    channelId,
  });
  const tmp5Result5 = wrapperOffset(channelId[49]);
  let tmp41 = null;
  if (tmp13 === ParticipantTypes.STREAM) {
    tmp41 = null;
    if (null != tmp11) {
      tmp41 = tmp11;
    }
  }
  let flag = wrapperOffset(channelId[49]).useIsStreamSecureFramesVerified({ streamKey: tmp41, channelId });
  if (ParticipantTypes.STREAM !== tmp13) {
    flag = false;
    if (ParticipantTypes.USER === tmp13) {
      flag = isUserSecureFramesVerified;
    }
  }
  let ONYX;
  if (tmp42Result11) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj26 = { theme: ONYX, children: null };
  const obj27 = { style: null, pointerEvents: "box-none", layout, children: null };
  const items8 = [tmp.headerWrapper, animatedStyle];
  obj27.style = items8;
  const tmp5Result6 = wrapperOffset(channelId[49]);
  const obj28 = { style: null, pointerEvents: "box-none", children: null };
  const items9 = [tmp.headerSurface, animatedStyle1];
  obj28.style = items9;
  const tmp2Result13 = gestureState(channelId[23]);
  const items10 = [closure_24(closure_33, { isHeaderHidden: derivedValue2, scrollPosition, focused }), ,];
  if (!tmp42Result11) {
    items10[1] = tmp42Result11;
    const obj29 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: null };
    let tmp42Result = null;
    if (tmp13 === ParticipantTypes.USER) {
      const obj30 = { isHeaderHidden: derivedValue2 };
      tmp42Result = closure_24(tmp2(tmp3[52]), obj30);
    }
    const items11 = [tmp42Result];
    const obj31 = { style: null, animatedProps: null, children: null };
    const items12 = [tmp.headerOuter, animatedStyle3];
    obj31.style = items12;
    obj31.animatedProps = animatedProps;
    const tmp2Result15 = tmp2(tmp3[23]);
    const obj32 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: null };
    const tmp2Result16 = tmp2(tmp3[23]);
    const obj33 = { icon: null, accessibilityLabel: null, onPress: null, style: null };
    const tmp2Result17 = tmp2(tmp3[25]);
    obj33.icon = tmp2(tmp3[53]);
    obj33.accessibilityLabel = stringResult;
    obj33.onPress = tmp27;
    obj33.style = memo;
    const items13 = [closure_24(tmp2(tmp3[30]), obj33)];
    const obj34 = { style: tmp.headerInner, children: null };
    const tmp2Result18 = tmp2(tmp3[30]);
    const items14 = [closure_24(tmp2(tmp3[54]), {})];
    let tmp42Result7 = null;
    if (isSecureFramesUIEnabled) {
      tmp42Result7 = null;
      if (flag) {
        const obj35 = { size: "xs", color: tmp2(tmp3[20]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
        tmp42Result7 = closure_24(tmp5(tmp3[55]).ShieldLockIcon, obj35);
      }
    }
    items14[1] = tmp42Result7;
    obj34.children = items14;
    items13[1] = closure_25(tmp2(tmp3[23]), obj34);
    obj32.children = items13;
    const items15 = [closure_25(tmp2Result17, obj32)];
    const obj36 = { style: tmp.rightWrapper, layout, children: null };
    const tmp2Result19 = tmp2(tmp3[23]);
    const items16 = [closure_24(closure_36, {}), , , , , ,];
    let tmp42Result8 = channelType === tmp5(tmp3[56]).ChannelTypes.GUILD_STAGE_VOICE;
    if (tmp42Result8) {
      const obj37 = { channelId };
      tmp42Result8 = closure_24(MusicMuteButton, obj37);
    }
    items16[1] = tmp42Result8;
    const obj38 = { isConnectedToVoiceChannel: tmp42Result11, channelId };
    items16[2] = closure_24(tmp2(tmp3[57]), obj38);
    let tmp42Result9 = null;
    if (null != stateFromStores) {
      const obj39 = { channel: stateFromStores, inCall: tmp42Result11 };
      tmp42Result9 = closure_24(tmp2(tmp3[58]), obj39);
    }
    items16[3] = tmp42Result9;
    if (canInviteMembers) {
      const obj40 = { icon: tmp2(tmp3[59]), accessibilityLabel: null, onPress: null };
      let intl3 = tmp5(tmp3[31]).intl;
      const obj41 = { channelName: stateFromStores1 };
      obj40.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp3[31]).t["dHHb/2"], obj41);
      obj40.onPress = inviteMembersCallback;
      canInviteMembers = closure_24(tmp2(tmp3[30]), obj40);
      const tmp2Result21 = tmp2(tmp3[30]);
    }
    items16[4] = canInviteMembers;
    let tmp42Result10 = null;
    if (null != stateFromStores2) {
      const obj42 = { icon: tmp2(tmp3[60]), onPress: callback1, accessibilityLabel: stateFromStores2 };
      tmp42Result10 = closure_24(tmp2(tmp3[30]), obj42);
      const tmp2Result22 = tmp2(tmp3[30]);
    }
    items16[5] = tmp42Result10;
    if (tmp42Result11) {
      tmp42Result11 =
        obj4.useConfig({ location: "VoicePanelHeader" }).treatment ===
        tmp5(tmp3[37]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
    }
    if (tmp42Result11) {
      const obj43 = { channelId };
      tmp42Result11 = closure_24(tmp2(tmp3[61]), obj43);
    }
    items16[6] = tmp42Result11;
    obj36.children = items16;
    items15[1] = closure_25(tmp2(tmp3[23]), obj36);
    obj31.children = items15;
    items11[1] = closure_25(tmp2Result16, obj31);
    obj29.children = items11;
    items10[2] = closure_25(tmp2Result15, obj29);
    obj28.children = items10;
    obj27.children = closure_25(tmp2Result14, obj28);
    obj26.children = closure_24(tmp2Result13, obj27);
    return closure_24(tmp5(tmp3[50]).ThemeContextProvider, obj26);
  } else if (isDockEnabled) {
    const obj44 = { style: null, pointerEvents: "none", children: null };
    const items17 = [mode.absoluteFill, animatedStyle2];
    obj44.style = items17;
    animatedStyle2 = tmp2(tmp3[51]);
    const obj45 = { baseColor: tmp2(tmp3[20]).colors.BLACK, minHeight: 0 };
    obj44.children = closure_24(animatedStyle2, obj45);
    let tmp42Result12 = closure_24(tmp2(tmp3[23]), obj44);
    const tmp2Result23 = tmp2(tmp3[23]);
  } else {
    const obj46 = { baseColor: tmp2(tmp3[20]).colors.BLACK, minHeight: 0 };
    tmp42Result12 = closure_24(tmp2(tmp3[51]), obj46);
    const tmp2Result24 = tmp2(tmp3[51]);
  }
  tmp2Result14 = gestureState(channelId[23]);
});
