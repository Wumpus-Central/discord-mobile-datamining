// === Module 19600: VoicePanelHeader ===

// Module 19600 (VoicePanelHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5727 */;
import spring_spring from "spring/spring" /* 5761 */;
import springPresets from "springPresets" /* 5762 */;
import useChannelName from "useChannelName" /* 5776 */;
import NativeViewDefault from "NativeView" /* 7023 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11369 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 12044 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 12182 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19509 */;
import MobileGoLiveEntrypointExperimentDefault from "MobileGoLiveEntrypointExperiment" /* 19601 */;
import useVoicePanelNavArrowPressedDefault from "useVoicePanelNavArrowPressed" /* 19602 */;
import useStableParticipant from "useStableParticipant" /* 19603 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;
import ExperimentStore from "ExperimentStore" /* 5354 */;
import StageMusicStore from "StageMusicStore" /* 12037 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;
import SpeakingStore from "SpeakingStore" /* 6811 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;
const useStableParticipantDefault = useStableParticipant;

require = fn;
function MusicMuteButton(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  const tmp3 = stateFromStores(12182)(channelId);
  if (tmp3 != null) {
    const speaker = tmp3.speaker;
  }
  items = [StageMusicStore];
  stateFromStores = channelId(504).useStateFromStores(items, () => muted.isMuted());
  const obj = channelId(504);
  const showStageMusicMuteButton = channelId(12039).useShowStageMusicMuteButton(channelId);
  const obj2 = channelId(12039);
  const items1 = [ChannelStore];
  const items2 = [channelId];
  const stateFromStores1 = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  channelId(11327);
  let tmp10 = null;
  if (showStageMusicMuteButton) {
    if (!speaker) {
      tmp10 = null;
    }
    const intl = tmp4(1113).intl;
    const string = intl.string;
    const t = tmp4(1113).t;
    if (stateFromStores) {
      let stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    const obj4 = {
      accessibilityLabel: stringResult,
      icon: tmp(stateFromStores ? 12043 : 8629),
      onPress() {
          return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
        }
    };
    closure_24(tmp(19508), obj4);
    const tmpResult = tmp(19508);
  }
  return tmp10;
}
get_ActivityIndicator = fn(17);
let StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(11363);
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = VoicePanelConstants);
const EDGE_GUTTER = fn(11366).EDGE_GUTTER;
const VoicePanelControlsModes = fn(11361).VoicePanelControlsModes;
const DOCK_PULL_SNAP_DISTANCE = fn(11381).DOCK_PULL_SNAP_DISTANCE;
const ParticipantTypes = fn(5805).ParticipantTypes;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_24, jsxs: closure_25 } = jsxProd);
let closure_26 = { duration: 300 };
const createStyles = fn(5140);
let obj = { headerWrapper: { zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%" }, headerSurface: null, blurStyles: null, leftWrapper: null, rightWrapper: null, headerOuter: null, headerInner: null, headerContentWrapper: null, stroke: null, strokeAlt: null, strokeContainer: null, focusedSpeakingDotWrapper: null, focusedSpeakingDot: null, shieldIconMargin: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.paddingBottom = EDGE_GUTTER;
obj3.overflow = "hidden";
obj.headerSurface = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.opacity = 0.7;
obj.blurStyles = obj4;
obj.leftWrapper = { position: "relative", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: 12 };
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
let closure_30 = { code: "(function VoicePanelHeaderTsx1(){let[isHeaderHidden,focused,scrollPosition]=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);})" };
let closure_31 = { code: "(function VoicePanelHeaderTsx2(){let[withSpring,showHeaderBlur,Reanimated3DefaultSpringConfig]=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0,Reanimated3DefaultSpringConfig)};})" };
let closure_32 = { code: "(function VoicePanelHeaderTsx3(){let[withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};})" };
let closure_33 = noop.memo(function HeaderBlur(arg0) {
  ({ isHeaderHidden, scrollPosition, focused } = arg0);
  const tmp = closure_27();
  items = [closure_30, isHeaderHidden, focused, scrollPosition];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class VoicePanelHeaderTsx1 {
    constructor() {
      value = closure_0.get();
      tmp2 = !value;
      if (!value) {
        tmp3 = closure_1;
        tmp4 = null;
        tmp5 = null != closure_1.get();
        if (!tmp5) {
          tmp6 = closure_2;
          num = 0;
          tmp5 = closure_2.get() > 0;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  VoicePanelHeaderTsx1.__closure = items1;
  VoicePanelHeaderTsx1.__workletHash = 11813925576343;
  VoicePanelHeaderTsx1.__initData = tmp4;
  const derivedValue = _mod1652.useDerivedValue(VoicePanelHeaderTsx1);
  const items2 = [closure_31, spring_spring.withSpring, derivedValue, springPresets.Reanimated3DefaultSpringConfig];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class VoicePanelHeaderTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 0.3;
      }
      obj = { blurAmount: tmp(num, closure_2) };
      return obj;
    }
  }
  const items3 = [tmp10, tmp11, tmp12];
  VoicePanelHeaderTsx2.__closure = items3;
  VoicePanelHeaderTsx2.__workletHash = 16070581711409;
  VoicePanelHeaderTsx2.__initData = tmp9;
  const animatedProps = _mod1652.useAnimatedProps(VoicePanelHeaderTsx2);
  const tmp2Result = _mod1652;
  const items4 = [closure_32, spring_spring.withSpring, derivedValue, obj5];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp14, tmp15, tmp16, tmp17] = items4;
  class VoicePanelHeaderTsx3 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items5 = [tmp15, tmp16, tmp17];
  VoicePanelHeaderTsx3.__closure = items5;
  VoicePanelHeaderTsx3.__workletHash = 16349033493456;
  VoicePanelHeaderTsx3.__initData = tmp14;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelHeaderTsx3);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  const items6 = [StyleSheet.absoluteFill, animatedStyle];
  obj2.style = items6;
  const items7 = [dependencyMap3(VisualEffectViewAnimatedDefault, { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps }), ];
  const obj4 = { style: tmp.strokeContainer, children: null };
  const obj3 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  const tmp2Result2 = _mod1652;
  obj5 = { style: tmp.stroke };
  const items8 = [dependencyMap3(NativeViewDefault, obj5), dependencyMap3(NativeViewDefault, { style: tmp.strokeAlt })];
  obj4.children = items8;
  items7[1] = closure_1_25(NativeViewDefault, obj4);
  obj2.children = items7;
  return closure_1_25(_modDef1652.View, obj2);
});
let closure_34 = { code: "(function VoicePanelHeaderTsx4(){let[focused,controlsSpecs,VoicePanelControlsModes,speaking]=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();})" };
let closure_35 = { code: "(function VoicePanelHeaderTsx5(){let[showSpeakingIndicator]=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};})" };
let closure_36 = noop.memo(function FocusedSpeakingDot() {
  const id = AuthenticationStore.getId();
  _require = id;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ focused, controlsSpecs } = context);
  const sharedValue = require("module_1652").useSharedValue(SpeakingStore.isSpeaking(id));
  items = [id, sharedValue];
  const layoutEffect = noop.useLayoutEffect(() => {
    function handleChange() {
      const result = _undefined2.set(SpeakingStore.isSpeaking(handleChange));
    }
    let result = _undefined2.set(SpeakingStore.isSpeaking(handleChange));
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  }, items);
  const tmp8 = closure_27();
  const obj = require("module_1652");
  const tmp5 = _require;
  const items1 = [closure_34, focused, controlsSpecs, VoicePanelControlsModes, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class VoicePanelHeaderTsx4 {
    constructor() {
      value = null != closure_0.get();
      if (value) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        value = closure_1.get().mode !== closure_2.HIDDEN;
      }
      if (value) {
        tmp4 = closure_3;
        value = closure_3.get();
      }
      return value;
    }
  }
  const items2 = [tmp10, tmp11, tmp12, tmp13];
  VoicePanelHeaderTsx4.__closure = items2;
  VoicePanelHeaderTsx4.__workletHash = 16194275628888;
  VoicePanelHeaderTsx4.__initData = tmp9;
  const derivedValue = require("module_1652").useDerivedValue(VoicePanelHeaderTsx4);
  const obj2 = require("module_1652");
  const items3 = [closure_35, derivedValue];
  _require = undefined;
  [tmp15, tmp16] = items3;
  class VoicePanelHeaderTsx5 {
    constructor() {
      opacity = 0;
      if (closure_0.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  const items4 = [tmp16];
  VoicePanelHeaderTsx5.__closure = items4;
  VoicePanelHeaderTsx5.__workletHash = 8700465895227;
  VoicePanelHeaderTsx5.__initData = tmp15;
  const animatedStyle = tmp5(1652).useAnimatedStyle(VoicePanelHeaderTsx5);
  const obj3 = { style: null, pointerEvents: "none", children: closure_24(NativeViewDefault, { style: tmp8.focusedSpeakingDot }) };
  const items5 = [tmp8.focusedSpeakingDotWrapper, animatedStyle];
  obj3.style = items5;
  return closure_24(_modDef1652.View, obj3);
});
let closure_38 = { code: "(function VoicePanelHeaderTsx6(){let[focused]=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;})" };
let closure_39 = { code: "(function VoicePanelHeaderTsx7(manualId,previousManualId){let[scheduleOnRN,handleFocusChange]=this.__closure;if(manualId!==previousManualId){scheduleOnRN(handleFocusChange,manualId);}})" };
let closure_40 = { code: "(function VoicePanelHeaderTsx8(){let[isDockEnabled,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER]=this.__closure;if(isDockEnabled){return 0;}const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;})" };
let closure_41 = { code: "(function VoicePanelHeaderTsx9(){let[calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER,isDockEnabled,wrapperDimensions,dockHeight,DOCK_PULL_SNAP_DISTANCE,interpolate,dockMinimizeProgress,Extrapolation]=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(!connected.get()){return EDGE_GUTTER;}if(!isDockEnabled){return specs.paddingTop;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const headerRevealProgress=travel>0?Math.min(DOCK_PULL_SNAP_DISTANCE/travel,1):0;return interpolate(1-dockMinimizeProgress.get(),[headerRevealProgress,1],[edgeGutter,specs.paddingTop],Extrapolation.CLAMP);})" };
let closure_42 = { code: "(function VoicePanelHeaderTsx10(){let[BASE_VOICE_PANEL_HEADER_HEIGHT,headerPaddingTop]=this.__closure;return{height:BASE_VOICE_PANEL_HEADER_HEIGHT+headerPaddingTop.get()};})" };
let closure_43 = { code: "(function VoicePanelHeaderTsx11(){let[calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,isDockEnabled,mode,VoicePanelModes,connected,headerPaddingTop,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS]=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const hidesForMinimize=!isDockEnabled&&mode.get()===VoicePanelModes.PIP;const ridesSheetOut=isDockEnabled&&connected.get();return{paddingTop:headerPaddingTop.get(),paddingLeft:specs.paddingLeft,paddingRight:specs.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(hidesForMinimize||mode.get()===VoicePanelModes.DISMISSED&&!ridesSheetOut?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};})" };
let closure_44 = { code: "(function VoicePanelHeaderTsx12(){let[connected,dockMinimizeProgress]=this.__closure;return{opacity:connected.get()?Math.min(Math.max(1-dockMinimizeProgress.get(),0),1):1};})" };
let closure_45 = { code: "(function VoicePanelHeaderTsx13(){let[controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled]=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;})" };
let closure_46 = { code: "(function VoicePanelHeaderTsx14(){let[calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS]=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};})" };
let closure_47 = { code: "(function VoicePanelHeaderTsx15(){let[isHeaderHidden]=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default noop.memo(function VoicePanelHeader(layout) {
  layout = layout.layout;
  importDefault = undefined;
  dependencyMap = undefined;
  let DOWN;
  noop = undefined;
  ({ wrapperOffset, gestureState } = layout);
  let tmp = closure_27();
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  _require = channelId;
  ({ channelType, focused, mode, safeArea, connected, isDockEnabled, dockMinimizeProgress } = context);
  ({ guildId, controlsSpecs, scrollPosition, dockHeight, wrapperDimensions } = context);
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  let obj2 = require("useIsScreenReaderEnabled");
  items = [c10];
  let items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(c0), items1);
  let tmp111Result11 = useIsConnectedToVoiceChannelDefault(channelId);
  let obj3 = require("initialize");
  const obj4 = MobileGoLiveEntrypointExperimentDefault;
  const items2 = [c14, c12, c10, c7];
  const items3 = [channelId];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const channel = ChannelStore.getChannel(c0);
    let channelName;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    }
    if (channelName == null) {
      const intl = util.intl;
      channelName = intl.string(util.t.zLZPmk);
    }
    return channelName;
  }, items3);
  obj5 = require("initialize");
  [tmp11, c1] = DOWN(noop.useState(undefined), 2);
  const tmp10 = DOWN(noop.useState(undefined), 2);
  [tmp13, c2] = DOWN(noop.useState(null), 2);
  const items4 = [channelId];
  const callback = noop.useCallback((arg0) => {
    let tmp3 = null;
    if (null != arg0) {
      const participant = ChannelRTCStore.getParticipant(tmp2, arg0);
      let type = null;
      if (null != participant) {
        type = participant.type;
      }
      tmp3 = type;
    }
    _undefined3(tmp3);
    _undefined2(arg0);
  }, items4);
  const tmp12 = DOWN(noop.useState(null), 2);
  const items5 = [closure_38, focused];
  _require = undefined;
  [tmp15, tmp16] = items5;
  class VoicePanelHeaderTsx6 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  const items6 = [tmp16];
  VoicePanelHeaderTsx6.__closure = items6;
  VoicePanelHeaderTsx6.__workletHash = 14454401854438;
  VoicePanelHeaderTsx6.__initData = tmp15;
  const items7 = [closure_39, require("module_1705").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  [tmp17, tmp18, tmp19] = items7;
  class VoicePanelHeaderTsx7 {
    constructor(arg0, arg1) {
      if (layout !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, layout);
      }
      return;
    }
  }
  const items8 = [tmp18, tmp19];
  VoicePanelHeaderTsx7.__closure = items8;
  VoicePanelHeaderTsx7.__workletHash = 10422398338840;
  VoicePanelHeaderTsx7.__initData = tmp17;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelHeaderTsx6, VoicePanelHeaderTsx7);
  const obj6 = require("module_1652");
  const token = require("useToken").useToken(tmp2(575).modules.mobile.VOICE_PANEL_GUTTER);
  const tmp5Result = require("useToken");
  const items9 = [closure_40, isDockEnabled, calculateVoicePanelHeaderSpecsDefault, safeArea, token, mode, closure_17, gestureState, connected, EDGE_GUTTER];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  DOWN = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items9;
  class VoicePanelHeaderTsx8 {
    constructor() {
      if (closure_0) {
        num2 = 0;
        return 0;
      } else {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = DOWN;
        obj = closure_4;
        tmp4 = closure_1(closure_2.get(), DOWN);
        if (closure_4.get() === closure_5.PIP) {
          tmp8 = closure_8;
          num = -tmp4.height + closure_8;
        } else {
          obj2 = closure_6;
          if (closure_6.get().active) {
            if (!obj2.get().requiresPop) {
              tmp6 = closure_7;
            }
          }
          num = 0;
          if (obj.get() === tmp5.DISMISSED) {
            tmp7 = closure_7;
            num = 0;
          }
        }
        return num;
      }
    }
  }
  const items10 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  VoicePanelHeaderTsx8.__closure = items10;
  VoicePanelHeaderTsx8.__workletHash = 9510822083837;
  VoicePanelHeaderTsx8.__initData = tmp24;
  const derivedValue = require("module_1652").useDerivedValue(VoicePanelHeaderTsx8);
  const tmp5Result16 = require("module_1652");
  const items11 = [closure_41, calculateVoicePanelHeaderSpecsDefault, safeArea, token, connected, EDGE_GUTTER, isDockEnabled, wrapperDimensions, dockHeight, DOCK_PULL_SNAP_DISTANCE, require("module_1652").interpolate, dockMinimizeProgress, require("module_1652").Extrapolation];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  DOWN = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  AuthenticationStore = undefined;
  c10 = undefined;
  c11 = undefined;
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items11;
  class VoicePanelHeaderTsx9 {
    constructor() {
      tmp = closure_2;
      tmp2 = closure_0(closure_1.get(), closure_2);
      if (DOWN.get()) {
        tmp4 = closure_5;
        if (closure_5) {
          tmp5 = closure_6;
          tmp6 = closure_7;
          diff = closure_6.get().drawerHeight - closure_7.get();
          num = 0;
          if (diff > 0) {
            tmp8 = globalThis;
            _Math = Math;
            tmp9 = closure_8;
            num2 = 1;
            num = Math.min(closure_8 / diff, 1);
          }
          tmp10 = closure_9;
          tmp11 = closure_10;
          num3 = 1;
          items = [, ];
          items[0] = num;
          items[1] = 1;
          items1 = [, ];
          items1[0] = tmp;
          items1[1] = tmp2.paddingTop;
          tmp12 = closure_11;
          tmp13 = items;
          tmp14 = items1;
          return closure_9(1 - closure_10.get(), items, items1, closure_11.CLAMP);
        } else {
          return tmp2.paddingTop;
        }
      } else {
        tmp3 = closure_4;
        return closure_4;
      }
    }
  }
  const items12 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
  VoicePanelHeaderTsx9.__closure = items12;
  VoicePanelHeaderTsx9.__workletHash = 12871873065494;
  VoicePanelHeaderTsx9.__initData = tmp35;
  const derivedValue1 = require("module_1652").useDerivedValue(VoicePanelHeaderTsx9);
  const tmp5Result17 = require("module_1652");
  const items13 = [closure_42, require("calculateVoicePanelHeaderSpecs").BASE_VOICE_PANEL_HEADER_HEIGHT, derivedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp49, tmp50, tmp51] = items13;
  class VoicePanelHeaderTsx10 {
    constructor() {
      obj = { height: closure_0 + closure_1.get() };
      return obj;
    }
  }
  const items14 = [tmp50, tmp51];
  VoicePanelHeaderTsx10.__closure = items14;
  VoicePanelHeaderTsx10.__workletHash = 6113996517866;
  VoicePanelHeaderTsx10.__initData = tmp49;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelHeaderTsx10);
  const tmp5Result18 = require("module_1652");
  const items15 = [closure_43, calculateVoicePanelHeaderSpecsDefault, safeArea, token, isDockEnabled, mode, closure_17, connected, derivedValue1, require("timing/timing").withTiming, closure_26, require("spring/spring").withSpring, derivedValue, wrapperOffset, closure_18, closure_16];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  DOWN = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  AuthenticationStore = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69] = items15;
  class VoicePanelHeaderTsx11 {
    constructor() {
      tmp = closure_0(closure_1.get(), closure_2);
      value = DOWN;
      tmp3 = !DOWN;
      if (!DOWN) {
        tmp4 = closure_4;
        tmp5 = closure_5;
        tmp3 = closure_4.get() === closure_5.PIP;
      }
      if (value) {
        tmp6 = closure_6;
        value = closure_6.get();
      }
      obj = { paddingTop: closure_7.get(), paddingLeft: tmp.paddingLeft, paddingRight: tmp.paddingRight, borderTopLeftRadius: null, borderTopRightRadius: null, opacity: null, transform: null };
      obj2 = closure_6;
      num = 24;
      num2 = 24;
      if (closure_6.get()) {
        num2 = 0;
      }
      obj.borderTopLeftRadius = num2;
      if (obj2.get()) {
        num = 0;
      }
      obj.borderTopRightRadius = num;
      tmp7 = closure_8;
      if (tmp3) {
        num4 = 0;
      } else {
        tmp8 = closure_4;
        tmp9 = closure_5;
        num3 = 1;
        num4 = 1;
        if (closure_4.get() === closure_5.DISMISSED) {
          num4 = 1;
        }
      }
      obj.opacity = tmp7(num4, closure_9);
      tmp10 = closure_10;
      value1 = closure_11.get();
      if (!obj2.get()) {
        tmp12 = closure_12;
        if (closure_12.get().gestureActive) {
          tmp13 = closure_13;
        }
        obj1 = { translateY: null };
        obj1.translateY = tmp10(value1, tmp13);
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
      tmp13 = closure_14;
      return;
    }
  }
  const items16 = [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69];
  VoicePanelHeaderTsx11.__closure = items16;
  VoicePanelHeaderTsx11.__workletHash = 4008001347556;
  VoicePanelHeaderTsx11.__initData = tmp54;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(VoicePanelHeaderTsx11);
  const tmp5Result19 = require("module_1652");
  const items17 = [closure_44, connected, dockMinimizeProgress];
  _require = undefined;
  importDefault = undefined;
  [tmp71, tmp72, tmp73] = items17;
  class VoicePanelHeaderTsx12 {
    constructor() {
      opacity = 1;
      if (closure_0.get()) {
        tmp = globalThis;
        _Math = Math;
        _Math2 = Math;
        tmp2 = closure_1;
        num2 = 0;
        opacity = Math.min(Math.max(1 - closure_1.get(), 0), 1);
      }
      return { opacity };
    }
  }
  const items18 = [tmp72, tmp73];
  VoicePanelHeaderTsx12.__closure = items18;
  VoicePanelHeaderTsx12.__workletHash = 1721987456011;
  VoicePanelHeaderTsx12.__initData = tmp71;
  let animatedStyle2 = require("module_1652").useAnimatedStyle(VoicePanelHeaderTsx12);
  const tmp5Result20 = require("module_1652");
  const items19 = [closure_45, controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp75, tmp76, tmp77, tmp78] = items19;
  class VoicePanelHeaderTsx13 {
    constructor() {
      tmp = closure_0.get().mode === closure_1.HIDDEN;
      if (tmp) {
        tmp2 = closure_2;
        tmp = !closure_2;
      }
      return tmp;
    }
  }
  const items20 = [tmp76, tmp77, tmp78];
  VoicePanelHeaderTsx13.__closure = items20;
  VoicePanelHeaderTsx13.__workletHash = 4955516325016;
  VoicePanelHeaderTsx13.__initData = tmp75;
  const derivedValue2 = require("module_1652").useDerivedValue(VoicePanelHeaderTsx13);
  const tmp5Result21 = require("module_1652");
  const items21 = [closure_46, calculateVoicePanelHeaderSpecsDefault, safeArea, token, require("timing/timing").withTiming, derivedValue2, closure_26, require("spring/spring").withSpring, MODE_CHANGE_PHYSICS];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  DOWN = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88] = items21;
  class VoicePanelHeaderTsx14 {
    constructor() {
      obj = closure_4;
      tmp = DOWN;
      num = 1;
      if (closure_4.get()) {
        num = 0;
      }
      obj1 = { opacity: tmp(num, closure_5), transform: null };
      tmp2 = closure_6;
      num2 = 0;
      if (obj.get()) {
        num2 = -closure_0(closure_1.get(), closure_2).height;
      }
      obj4 = { translateY: tmp2(num2, closure_7) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items22 = [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88];
  VoicePanelHeaderTsx14.__closure = items22;
  VoicePanelHeaderTsx14.__workletHash = 11197145702562;
  VoicePanelHeaderTsx14.__initData = tmp80;
  const animatedStyle3 = require("module_1652").useAnimatedStyle(VoicePanelHeaderTsx14);
  const tmp5Result22 = require("module_1652");
  const items23 = [closure_47, derivedValue2];
  _require = undefined;
  [tmp90, tmp91] = items23;
  class VoicePanelHeaderTsx15 {
    constructor() {
      obj = closure_0;
      str = "box-none";
      if (closure_0.get()) {
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
  const items24 = [tmp91];
  VoicePanelHeaderTsx15.__closure = items24;
  VoicePanelHeaderTsx15.__workletHash = 11930407461065;
  VoicePanelHeaderTsx15.__initData = tmp90;
  const animatedProps = require("module_1652").useAnimatedProps(VoicePanelHeaderTsx15);
  const tmp93 = useMyCurrentStageChannelRoleDefault(channelId);
  let flag;
  if (tmp93 != null) {
    flag = tmp93.speaker;
  }
  if (flag == null) {
    flag = false;
  }
  if (channelType !== require("ChannelTypes").ChannelTypes.GUILD_STAGE_VOICE) {
    flag = obj4.useConfig({ location: "VoicePanelHeader" }).treatment === tmp5(19601).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  const tmp5Result23 = require("module_1652");
  let canInviteMembers = require("useCanInviteMembers").useCanInviteMembers(channelId);
  const tmp5Result24 = require("useCanInviteMembers");
  const tmp5Result25 = require("useInviteMembersCallback");
  const tmp96 = useVoicePanelNavArrowPressedDefault();
  const inviteMembersCallback = require("useInviteMembersCallback").useInviteMembersCallback(channelId);
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(tmp96);
  if (null != tmp13) {
    DOWN = constants.LEFT;
    let tmp98 = constants;
  } else {
    tmp98 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp98.LEFT) {
    let intl2 = tmp5(1113).intl;
    let stringResult = intl2.string(tmp5(1113).t["9M6OdC"]);
  } else {
    let intl = tmp5(1113).intl;
    const string = intl.string;
    const t = tmp5(1113).t;
    if (tmp111Result11) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  const tmp5Result26 = require("useNavigatorBackPressHandler");
  const tmp2ResultResult = useStableParticipantDefault(AuthenticationStore.getId(), channelId, guildId);
  noop = tmp2ResultResult;
  const tmp2Result = useStableParticipantDefault;
  const items25 = [c11];
  const items26 = [tmp2ResultResult];
  const stateFromStores2 = require("initialize").useStateFromStores(items25, () => {
    if (null != closure_4) {
      if (obj3.isStableUserParticipant(closure_4)) {
        if (tmp10Result.stableParticipantHasVideo(closure_4)) {
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
  }, items26);
  const items27 = [DOWN];
  const callback1 = obj.useCallback(() => {
    const videoDeviceId = _undefined9.getVideoDeviceId();
    const keys = Object.keys(_undefined9.getVideoDevices());
    const found = keys.find((item) => item !== closure_0);
    if (null != found) {
      _undefined2(_undefined3[50]).setVideoDevice(found);
      const obj = _undefined2(_undefined3[50]);
    }
  }, []);
  const memo = obj.useMemo(() => {
    let str = "0deg";
    if (DOWN === constants.LEFT) {
      str = "90deg";
    }
    const obj = { transform: null };
    items = [{ rotateZ: str }];
    obj.transform = items;
    return obj;
  }, items27);
  const tmp5Result27 = require("initialize");
  const isSecureFramesUIEnabled = require("useIsSecureFramesUIEnabled").useIsSecureFramesUIEnabled({ channelId });
  const tmp5Result28 = require("useIsSecureFramesUIEnabled");
  let tmp108 = null;
  if (tmp13 === ParticipantTypes.USER) {
    tmp108 = null;
    if (null != tmp11) {
      tmp108 = tmp11;
    }
  }
  const isUserSecureFramesVerified = require("useIsSecureFramesVerified").useIsUserSecureFramesVerified({ userId: tmp108, channelId });
  const tmp5Result29 = require("useIsSecureFramesVerified");
  let tmp110 = null;
  if (tmp13 === ParticipantTypes.STREAM) {
    tmp110 = null;
    if (null != tmp11) {
      tmp110 = tmp11;
    }
  }
  let flag2 = require("useIsSecureFramesVerified").useIsStreamSecureFramesVerified({ streamKey: tmp110, channelId });
  if (ParticipantTypes.STREAM !== tmp13) {
    flag2 = false;
    if (ParticipantTypes.USER === tmp13) {
      flag2 = isUserSecureFramesVerified;
    }
  }
  let ONYX;
  if (tmp111Result11) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj7 = { theme: ONYX, children: null };
  const obj8 = { style: null, pointerEvents: "box-none", layout, children: null };
  const items28 = [tmp.headerWrapper, animatedStyle];
  obj8.style = items28;
  const obj9 = { style: null, pointerEvents: "box-none", children: null };
  const items29 = [tmp.headerSurface, animatedStyle1];
  obj9.style = items29;
  const items30 = [closure_24(closure_33, { isHeaderHidden: derivedValue2, scrollPosition, focused }), , ];
  if (!tmp111Result11) {
    items30[1] = tmp111Result11;
    const obj10 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: null };
    let tmp111Result = null;
    if (tmp13 === ParticipantTypes.USER) {
      const obj11 = { isHeaderHidden: derivedValue2 };
      tmp111Result = closure_24(tmp2(19604), obj11);
    }
    const items31 = [tmp111Result, ];
    const obj12 = { style: null, animatedProps: null, children: null };
    const items32 = [tmp.headerOuter, animatedStyle3];
    obj12.style = items32;
    obj12.animatedProps = animatedProps;
    const obj13 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: null };
    const obj14 = { icon: null, accessibilityLabel: null, onPress: null, style: null };
    const tmp2Result7 = tmp2(7023);
    obj14.icon = tmp2(11556);
    obj14.accessibilityLabel = stringResult;
    obj14.onPress = tmp96;
    obj14.style = memo;
    const items33 = [closure_24(tmp2(19508), obj14), ];
    const obj15 = { style: tmp.headerInner, children: null };
    const tmp2Result8 = tmp2(19508);
    const items34 = [closure_24(tmp2(19606), {}), ];
    let tmp111Result7 = null;
    if (isSecureFramesUIEnabled) {
      tmp111Result7 = null;
      if (flag2) {
        const obj16 = { size: "xs", color: tmp2(575).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
        tmp111Result7 = closure_24(tmp5(14974).ShieldLockIcon, obj16);
      }
    }
    items34[1] = tmp111Result7;
    obj15.children = items34;
    items33[1] = closure_25(tmp2(7023), obj15);
    obj13.children = items33;
    const items35 = [closure_25(tmp2Result7, obj13), ];
    const obj17 = { style: tmp.rightWrapper, layout, children: null };
    const items36 = [closure_24(closure_36, {}), , , , , , ];
    let tmp111Result8 = channelType === tmp5(1093).ChannelTypes.GUILD_STAGE_VOICE;
    if (tmp111Result8) {
      const obj18 = { channelId };
      tmp111Result8 = closure_24(MusicMuteButton, obj18);
    }
    items36[1] = tmp111Result8;
    const obj19 = { isConnectedToVoiceChannel: tmp111Result11, channelId };
    items36[2] = closure_24(tmp2(19608), obj19);
    let tmp111Result9 = null;
    if (null != stateFromStores) {
      const obj20 = { channel: stateFromStores, inCall: tmp111Result11 };
      tmp111Result9 = closure_24(tmp2(19617), obj20);
    }
    items36[3] = tmp111Result9;
    if (canInviteMembers) {
      const obj21 = { icon: tmp2(11108), accessibilityLabel: null, onPress: null };
      let intl3 = tmp5(1113).intl;
      const obj22 = { channelName: stateFromStores1 };
      obj21.accessibilityLabel = intl3.formatToPlainString(tmp5(1113).t["dHHb/2"], obj22);
      obj21.onPress = inviteMembersCallback;
      canInviteMembers = closure_24(tmp2(19508), obj21);
      const tmp2Result10 = tmp2(19508);
    }
    items36[4] = canInviteMembers;
    let tmp111Result10 = null;
    if (null != stateFromStores2) {
      const obj23 = { icon: tmp2(19619), onPress: callback1, accessibilityLabel: stateFromStores2 };
      tmp111Result10 = closure_24(tmp2(19508), obj23);
      const tmp2Result11 = tmp2(19508);
    }
    items36[5] = tmp111Result10;
    if (tmp111Result11) {
      tmp111Result11 = flag;
    }
    if (tmp111Result11) {
      const obj24 = { channelId };
      tmp111Result11 = closure_24(tmp2(19620), obj24);
    }
    items36[6] = tmp111Result11;
    obj17.children = items36;
    items35[1] = closure_25(tmp2(1652).View, obj17);
    obj12.children = items35;
    items31[1] = closure_25(tmp2(1652).View, obj12);
    obj10.children = items31;
    items30[2] = closure_25(tmp2(1652).View, obj10);
    obj9.children = items30;
    obj8.children = closure_25(tmp2(1652).View, obj9);
    obj7.children = closure_24(tmp2(1652).View, obj8);
    return closure_24(tmp5(5199).ThemeContextProvider, obj7);
  } else if (isDockEnabled) {
    const obj25 = { style: null, pointerEvents: "none", children: null };
    const items37 = [StyleSheet.absoluteFill, animatedStyle2];
    obj25.style = items37;
    animatedStyle2 = tmp2(18944);
    const obj26 = { baseColor: tmp2(575).colors.BLACK, minHeight: 0 };
    obj25.children = closure_24(animatedStyle2, obj26);
    let tmp111Result12 = closure_24(tmp2(1652).View, obj25);
  } else {
    const obj27 = { baseColor: tmp2(575).colors.BLACK, minHeight: 0 };
    tmp111Result12 = closure_24(tmp2(18944), obj27);
    const tmp2Result12 = tmp2(18944);
  }
  const tmp5Result30 = require("useIsSecureFramesVerified");
});