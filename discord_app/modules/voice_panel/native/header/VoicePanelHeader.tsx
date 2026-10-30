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
      const intl = tmp4(1114).intl;
      const string = intl.string;
      const t = tmp4(1114).t;
      if (stateFromStores) {
        let stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 11842 : 8550),
        onPress() {
          return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
        },
      };
      closure_23(VoicePanelIconButtonDefault, obj3);
      const tmpResult = VoicePanelIconButtonDefault;
    }
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(11204);
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({
  UI_SHOW_HIDE_PHYSICS: closure_16,
  VoicePanelModes: closure_17,
  DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18,
} = VoicePanelConstants);
const EDGE_GUTTER = fn(11207).EDGE_GUTTER;
const VoicePanelControlsModes = fn(11202).VoicePanelControlsModes;
const ParticipantTypes = fn(5676).ParticipantTypes;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
const OPACITY_TIMING = { duration: 300 };
const createStyles = fn(5009);
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
let closure_32 = noop.memo(function HeaderBlur(isHeaderHidden) {
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
  fn.__workletHash = 8127245112238;
  fn.__initData = __initData;
  const derivedValue = isHeaderHidden(focused[20]).useDerivedValue(fn);
  let obj = isHeaderHidden(focused[20]);
  const fn2 = function l() {
    let num = 0;
    if (derivedValue.get()) {
      num = 0.3;
    }
    return { blurAmount: spring.withSpring(num) };
  };
  const obj2 = isHeaderHidden(focused[20]);
  fn2.__closure = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue };
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
  const animatedProps = obj2.useAnimatedProps(fn2);
  const obj3 = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue };
  const fn3 = function u() {
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, obj5) };
  };
  obj5 = {
    withSpring: isHeaderHidden(focused[21]).withSpring,
    showHeaderBlur: derivedValue,
    HEADER_CHANGE_PHYSICS: obj5,
  };
  fn3.__closure = obj5;
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  const animatedStyle = isHeaderHidden(focused[20]).useAnimatedStyle(fn3);
  const obj6 = { style: null, pointerEvents: "none", children: null };
  const items = [StyleSheet.absoluteFill, animatedStyle];
  obj6.style = items;
  const obj4 = isHeaderHidden(focused[20]);
  const items1 = [
    closure_23(scrollPosition(focused[23]), {
      style: tmp.blurStyles,
      blurStyle: "ultra-thin",
      blurTheme: "dark",
      animatedProps,
    }),
  ];
  const obj8 = { style: tmp.strokeContainer, children: null };
  const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  let tmp5 = scrollPosition(focused[22]);
  const items2 = [
    closure_23(scrollPosition(focused[24]), { style: tmp.stroke }),
    closure_23(scrollPosition(focused[24]), { style: tmp.strokeAlt }),
  ];
  obj8.children = items2;
  items1[1] = closure_24(scrollPosition(focused[24]), obj8);
  obj6.children = items1;
  return closure_24(tmp5, obj6);
});
const __initData4 = {
  code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}",
};
const __initData5 = {
  code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}",
};
let closure_35 = noop.memo(function FocusedSpeakingDot() {
  const id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[25]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const sharedValue = id(controlsSpecs[20]).useSharedValue(SpeakingStore.isSpeaking(id));
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
  const obj = id(controlsSpecs[20]);
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
  derivedValue = id(controlsSpecs[20]).useDerivedValue(fn);
  const obj2 = id(controlsSpecs[20]);
  const obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  const fn2 = function _() {
    let opacity = 0;
    if (derivedValue.get()) {
      opacity = 1;
    }
    return { opacity };
  };
  fn2.__closure = { showSpeakingIndicator: derivedValue };
  fn2.__workletHash = 16177124708898;
  fn2.__initData = __initData5;
  const animatedStyle = id(controlsSpecs[20]).useAnimatedStyle(fn2);
  obj5 = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  obj5.style = items1;
  const obj4 = id(controlsSpecs[20]);
  obj5.children = closure_23(focused(controlsSpecs[22]), { style: tmp5.focusedSpeakingDot });
  return closure_23(focused(controlsSpecs[22]), obj5);
});
const __initData6 = {
  code: "function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData7 = {
  code: "function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}",
};
const __initData8 = {
  code: "function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}",
};
const __initData9 = {
  code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{height:!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height};}",
};
const __initData10 = {
  code: "function VoicePanelHeaderTsx10(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;return{paddingTop:!connected.get()?EDGE_GUTTER:specs.paddingTop,paddingLeft:specs.paddingLeft,paddingRight:specs.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData11 = {
  code: "function VoicePanelHeaderTsx11(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}",
};
const __initData12 = {
  code: "function VoicePanelHeaderTsx12(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}",
};
const __initData13 = {
  code: "function VoicePanelHeaderTsx13(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default noop.memo(function VoicePanelHeader(wrapperOffset) {
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const layout = wrapperOffset.layout;
  let channelId;
  let controlsSpecs;
  AuthenticationStore = undefined;
  c10 = undefined;
  let token;
  let derivedValue;
  let derivedValue1;
  let DOWN;
  UI_SHOW_HIDE_PHYSICS = undefined;
  let tmp = closure_26();
  const context = controlsSpecs.useContext(gestureState(channelId[25]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  ({ guildId, channelType, scrollPosition } = context);
  const isScreenReaderEnabled = wrapperOffset(channelId[34]).useIsScreenReaderEnabled();
  let obj2 = wrapperOffset(channelId[34]);
  let items = [c10];
  const items1 = [channelId];
  const stateFromStores = wrapperOffset(channelId[27]).useStateFromStores(
    items,
    () => ChannelStore.getChannel(channelId),
    items1,
  );
  let tmp40Result12 = gestureState(channelId[35])(channelId);
  let obj3 = wrapperOffset(channelId[27]);
  let obj4 = gestureState(channelId[36]);
  const items2 = [derivedValue1, token, c10, connected];
  const items3 = [channelId];
  const stateFromStores1 = wrapperOffset(channelId[27]).useStateFromStores(
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
  obj5 = wrapperOffset(channelId[27]);
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
  class E {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  E.__closure = { focused };
  E.__workletHash = 7943480174143;
  E.__initData = __initData6;
  const fn = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback)(arg0);
    }
  };
  const obj6 = wrapperOffset(channelId[20]);
  fn.__closure = { runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange };
  fn.__workletHash = 13084116412140;
  fn.__initData = __initData7;
  const animatedReaction = obj6.useAnimatedReaction(E, fn);
  const obj7 = { runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange };
  token = wrapperOffset(channelId[38]).useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj8 = wrapperOffset(channelId[38]);
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
  const obj9 = wrapperOffset(channelId[20]);
  pe.__closure = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
    safeArea,
    edgeGutter: token,
    mode,
    VoicePanelModes,
    gestureState,
    connected,
    EDGE_GUTTER,
  };
  pe.__workletHash = 13290333964417;
  pe.__initData = __initData8;
  derivedValue = obj9.useDerivedValue(pe);
  const obj10 = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
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
      tmp = closure_1(closure_2[39]);
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
  const obj11 = wrapperOffset(channelId[20]);
  Se.__closure = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
    safeArea,
    edgeGutter: token,
    connected,
    EDGE_GUTTER,
  };
  Se.__workletHash = 1684302669645;
  Se.__initData = __initData9;
  const animatedStyle = obj11.useAnimatedStyle(Se);
  const obj12 = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
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
  const obj13 = wrapperOffset(channelId[20]);
  fe.__closure = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
    safeArea,
    edgeGutter: token,
    mode,
    VoicePanelModes,
    connected,
    EDGE_GUTTER,
    withTiming: wrapperOffset(channelId[40]).withTiming,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[21]).withSpring,
    yOffset: derivedValue,
    wrapperOffset,
    DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,
    UI_SHOW_HIDE_PHYSICS,
  };
  fe.__workletHash = 3423245801552;
  fe.__initData = __initData10;
  const animatedStyle1 = obj13.useAnimatedStyle(fe);
  const obj14 = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
    safeArea,
    edgeGutter: token,
    mode,
    VoicePanelModes,
    connected,
    EDGE_GUTTER,
    withTiming: wrapperOffset(channelId[40]).withTiming,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[21]).withSpring,
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
  He.__workletHash = 15131979824291;
  He.__initData = __initData11;
  derivedValue1 = wrapperOffset(channelId[20]).useDerivedValue(He);
  const obj15 = wrapperOffset(channelId[20]);
  const obj16 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  class Ee {
    constructor() {
      tmp = closure_2;
      tmp2 = closure_1(closure_2[39]);
      tmp3 = closure_0;
      obj = closure_0(closure_2[40]);
      obj2 = closure_14;
      num = 1;
      if (closure_14.get()) {
        num = 0;
      }
      obj1 = { opacity: obj.withTiming(num, closure_25), transform: null };
      tmp3Result = tmp3(tmp[21]);
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
  const obj17 = wrapperOffset(channelId[20]);
  Ee.__closure = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
    safeArea,
    edgeGutter: token,
    withTiming: wrapperOffset(channelId[40]).withTiming,
    isHeaderHidden: derivedValue1,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[21]).withSpring,
    MODE_CHANGE_PHYSICS: DOWN,
  };
  Ee.__workletHash = 12660552700093;
  Ee.__initData = __initData12;
  const animatedStyle2 = obj17.useAnimatedStyle(Ee);
  const obj18 = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
    safeArea,
    edgeGutter: token,
    withTiming: wrapperOffset(channelId[40]).withTiming,
    isHeaderHidden: derivedValue1,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[21]).withSpring,
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
  Ie.__workletHash = 6333039607894;
  Ie.__initData = __initData13;
  const animatedProps = wrapperOffset(channelId[20]).useAnimatedProps(Ie);
  const obj19 = wrapperOffset(channelId[20]);
  let canInviteMembers = wrapperOffset(channelId[41]).useCanInviteMembers(channelId);
  const obj20 = wrapperOffset(channelId[41]);
  const obj21 = wrapperOffset(channelId[42]);
  const tmp25 = gestureState(channelId[43])();
  const inviteMembersCallback = wrapperOffset(channelId[42]).useInviteMembersCallback(channelId);
  wrapperOffset(channelId[44]).useNavigatorBackPressHandler(tmp25);
  if (null != tmp13) {
    DOWN = constants.LEFT;
    let tmp27 = constants;
  } else {
    tmp27 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp27.LEFT) {
    let intl2 = tmp5(tmp3[30]).intl;
    let stringResult = intl2.string(tmp5(tmp3[30]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[30]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[30]).t;
    if (tmp40Result12) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  const obj22 = wrapperOffset(channelId[44]);
  const tmp2ResultResult = gestureState(channelId[45])(AuthenticationStore.getId(), channelId, guildId);
  UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
  let tmp2Result = gestureState(channelId[45]);
  const items5 = [handleFocusChange];
  const items6 = [tmp2ResultResult];
  const stateFromStores2 = wrapperOffset(channelId[27]).useStateFromStores(
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
      gestureState(channelId[46]).setVideoDevice(found);
      const obj = gestureState(channelId[46]);
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
  const tmp5Result = wrapperOffset(channelId[27]);
  const isSecureFramesUIEnabled = wrapperOffset(channelId[47]).useIsSecureFramesUIEnabled({ channelId });
  const tmp5Result4 = wrapperOffset(channelId[47]);
  let tmp37 = null;
  if (tmp13 === ParticipantTypes.USER) {
    tmp37 = null;
    if (null != tmp11) {
      tmp37 = tmp11;
    }
  }
  const isUserSecureFramesVerified = wrapperOffset(channelId[48]).useIsUserSecureFramesVerified({
    userId: tmp37,
    channelId,
  });
  const tmp5Result5 = wrapperOffset(channelId[48]);
  let tmp39 = null;
  if (tmp13 === ParticipantTypes.STREAM) {
    tmp39 = null;
    if (null != tmp11) {
      tmp39 = tmp11;
    }
  }
  let flag = wrapperOffset(channelId[48]).useIsStreamSecureFramesVerified({ streamKey: tmp39, channelId });
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
  const tmp5Result6 = wrapperOffset(channelId[48]);
  const obj25 = { style: null, pointerEvents: "box-none", children: null };
  const items9 = [tmp.headerSurface, animatedStyle1];
  obj25.style = items9;
  const tmp2Result12 = gestureState(channelId[22]);
  const items10 = [closure_23(closure_32, { isHeaderHidden: derivedValue1, scrollPosition, focused }), ,];
  let tmp40Result = tmp40Result12;
  if (tmp40Result12) {
    const obj26 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
    tmp40Result = closure_23(tmp2(tmp3[50]), obj26);
    const tmp2Result14 = tmp2(tmp3[50]);
  }
  items10[1] = tmp40Result;
  const obj27 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: null };
  let tmp40Result7 = null;
  const tmp2Result13 = gestureState(channelId[22]);
  if (tmp13 === ParticipantTypes.USER) {
    const obj28 = { isHeaderHidden: derivedValue1 };
    tmp40Result7 = closure_23(tmp2(tmp3[51]), obj28);
  }
  const items11 = [tmp40Result7];
  const obj29 = { style: null, animatedProps, children: null };
  const items12 = [tmp.headerOuter, animatedStyle2];
  obj29.style = items12;
  const tmp2Result15 = gestureState(channelId[22]);
  const obj30 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: null };
  const tmp2Result16 = gestureState(channelId[22]);
  const obj31 = { icon: null, accessibilityLabel: null, onPress: null, style: null };
  const tmp2Result17 = gestureState(channelId[24]);
  obj31.icon = gestureState(channelId[52]);
  obj31.accessibilityLabel = stringResult;
  obj31.onPress = tmp25;
  obj31.style = memo;
  const items13 = [closure_23(gestureState(channelId[29]), obj31)];
  const obj32 = { style: tmp.headerInner, children: null };
  const tmp2Result18 = gestureState(channelId[29]);
  const items14 = [closure_23(gestureState(channelId[53]), {})];
  let tmp40Result8 = null;
  if (isSecureFramesUIEnabled) {
    tmp40Result8 = null;
    if (flag) {
      const obj33 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      tmp40Result8 = closure_23(tmp5(tmp3[54]).ShieldLockIcon, obj33);
    }
  }
  items14[1] = tmp40Result8;
  obj32.children = items14;
  items13[1] = closure_24(gestureState(channelId[22]), obj32);
  obj30.children = items13;
  const items15 = [closure_24(tmp2Result17, obj30)];
  const obj34 = { style: tmp.rightWrapper, layout, children: null };
  const tmp2Result19 = gestureState(channelId[22]);
  const items16 = [closure_23(closure_35, {}), , , , , ,];
  let tmp40Result9 = channelType === tmp5(tmp3[55]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp40Result9) {
    const obj35 = { channelId };
    tmp40Result9 = closure_23(MusicMuteButton, obj35);
  }
  items16[1] = tmp40Result9;
  items16[2] = closure_23(gestureState(channelId[56]), { isConnectedToVoiceChannel: tmp40Result12, channelId });
  let tmp40Result10 = null;
  if (null != stateFromStores) {
    const obj36 = { channel: stateFromStores, inCall: tmp40Result12 };
    tmp40Result10 = closure_23(tmp2(tmp3[57]), obj36);
  }
  items16[3] = tmp40Result10;
  if (canInviteMembers) {
    const obj37 = { icon: tmp2(tmp3[58]), accessibilityLabel: null, onPress: null };
    let intl3 = tmp5(tmp3[30]).intl;
    const obj38 = { channelName: stateFromStores1 };
    obj37.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp3[30]).t["dHHb/2"], obj38);
    obj37.onPress = inviteMembersCallback;
    canInviteMembers = closure_23(tmp2(tmp3[29]), obj37);
    const tmp2Result21 = tmp2(tmp3[29]);
  }
  items16[4] = canInviteMembers;
  let tmp40Result11 = null;
  if (null != stateFromStores2) {
    const obj39 = { icon: tmp2(tmp3[59]), onPress: callback1, accessibilityLabel: stateFromStores2 };
    tmp40Result11 = closure_23(tmp2(tmp3[29]), obj39);
    const tmp2Result22 = tmp2(tmp3[29]);
  }
  items16[5] = tmp40Result11;
  if (tmp40Result12) {
    tmp40Result12 =
      obj4.useConfig({ location: "VoicePanelHeader" }).treatment ===
      tmp5(tmp3[36]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp40Result12) {
    const obj40 = { channelId };
    tmp40Result12 = closure_23(tmp2(tmp3[60]), obj40);
  }
  items16[6] = tmp40Result12;
  obj34.children = items16;
  items15[1] = closure_24(gestureState(channelId[22]), obj34);
  obj29.children = items15;
  items11[1] = closure_24(tmp2Result16, obj29);
  obj27.children = items11;
  items10[2] = closure_24(tmp2Result15, obj27);
  obj25.children = items10;
  obj24.children = closure_24(tmp2Result13, obj25);
  obj23.children = closure_23(tmp2Result12, obj24);
  return closure_23(wrapperOffset(channelId[49]).ThemeContextProvider, obj23);
});
