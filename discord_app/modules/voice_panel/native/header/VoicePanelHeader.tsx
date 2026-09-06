// discord_app/modules/voice_panel/native/header/VoicePanelHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useChannelName from "../../../channel/useChannelName.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import StageMusicActionCreators from "../../../stage_channels/StageMusicActionCreators.tsx";
import useMyCurrentStageChannelRoleDefault from "../../../stage_channels/useMyCurrentStageChannelRole.tsx";
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs.tsx";
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
  let obj = stateFromStores(504);
  const items = [StageMusicStore];
  stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
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
      obj = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 9910 : 9912),
        onPress() {
          return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
        },
      };
      closure_23(VoicePanelIconButtonDefault, obj);
      const tmpResult = VoicePanelIconButtonDefault;
    }
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(12273);
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({
  UI_SHOW_HIDE_PHYSICS: closure_16,
  VoicePanelModes: closure_17,
  DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18,
} = VoicePanelConstants);
const EDGE_GUTTER = fn(12276).EDGE_GUTTER;
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const ParticipantTypes = fn(4581).ParticipantTypes;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
const OPACITY_TIMING = { duration: 300 };
let createStyles = fn(4560);
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
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.opacity = 0.7;
obj.blurStyles = obj;
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
createStyles = {};
const merged1 = Object.assign(MODE_CHANGE_PHYSICS);
createStyles.overshootClamping = true;
const __initData = {
  code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}",
};
const __initData2 = {
  code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}",
};
const __initData3 = {
  code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}",
};
let closure_32 = noop.memo((isHeaderHidden) => {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = closure_26();
  let obj = isHeaderHidden(focused[20]);
  const fn = function l() {
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
  const derivedValue = obj.useDerivedValue(fn);
  let obj1 = isHeaderHidden(focused[20]);
  const fn2 = function c() {
    let obj = spring;
    let num = 0;
    if (derivedValue.get()) {
      num = 0.3;
    }
    obj = { blurAmount: obj.withSpring(num) };
    return obj;
  };
  obj = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
  const animatedProps = obj1.useAnimatedProps(fn2);
  let obj3 = isHeaderHidden(focused[20]);
  const fn3 = function u() {
    let obj = spring;
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, createStyles) };
    return obj;
  };
  obj = {
    withSpring: isHeaderHidden(focused[21]).withSpring,
    showHeaderBlur: derivedValue,
    HEADER_CHANGE_PHYSICS: createStyles,
  };
  fn3.__closure = obj;
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  const animatedStyle = obj3.useAnimatedStyle(fn3);
  obj1 = { style: null, pointerEvents: "none", children: null };
  const items = [StyleSheet.absoluteFill, animatedStyle];
  obj1.style = items;
  const items1 = [
    closure_23(scrollPosition(focused[23]), {
      style: tmp.blurStyles,
      blurStyle: "ultra-thin",
      blurTheme: "dark",
      animatedProps,
    }),
  ];
  obj3 = { style: tmp.strokeContainer, children: null };
  const obj2 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  let tmp5 = scrollPosition(focused[22]);
  const items2 = [
    closure_23(scrollPosition(focused[24]), { style: tmp.stroke }),
    closure_23(scrollPosition(focused[24]), { style: tmp.strokeAlt }),
  ];
  obj3.children = items2;
  items1[1] = closure_24(scrollPosition(focused[24]), obj3);
  obj1.children = items1;
  return closure_24(tmp5, obj1);
});
const __initData4 = {
  code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}",
};
const __initData5 = {
  code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}",
};
let closure_35 = noop.memo(() => {
  const id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[25]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  let obj = id(controlsSpecs[20]);
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
  let obj1 = id(controlsSpecs[20]);
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
  obj = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 5466722752449;
  fn.__initData = __initData4;
  derivedValue = obj1.useDerivedValue(fn);
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
  obj = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  obj.style = items1;
  const obj4 = id(controlsSpecs[20]);
  obj1 = { style: tmp5.focusedSpeakingDot };
  obj.children = closure_23(focused(controlsSpecs[22]), obj1);
  return closure_23(focused(controlsSpecs[22]), obj);
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
  code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData10 = {
  code: "function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}",
};
const __initData11 = {
  code: "function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}",
};
const __initData12 = {
  code: "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}",
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
  let obj = controlsSpecs;
  const context = controlsSpecs.useContext(gestureState(channelId[25]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  ({ guildId, channelType, scrollPosition } = context);
  let obj1 = wrapperOffset(channelId[34]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  let tmp38Result4 = gestureState(channelId[35])(channelId);
  let obj2 = gestureState(channelId[36]);
  let obj3 = wrapperOffset(channelId[27]);
  let items = [derivedValue1, token, c10, connected];
  const items1 = [channelId];
  const stateFromStores = obj3.useStateFromStores(
    items,
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
    items1,
  );
  [tmp10, c9] = focused(controlsSpecs.useState(undefined), 2);
  const tmp9 = focused(controlsSpecs.useState(undefined), 2);
  [tmp12, c10] = focused(controlsSpecs.useState(null), 2);
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
    _undefined(tmp3);
    _undefined(arg0);
  }, items2);
  let obj4 = wrapperOffset(channelId[20]);
  class I {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  I.__closure = { focused };
  I.__workletHash = 7943480174143;
  I.__initData = __initData6;
  const fn = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback)(arg0);
    }
  };
  obj = { runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange };
  fn.__closure = obj;
  fn.__workletHash = 13084116412140;
  fn.__initData = __initData7;
  const animatedReaction = obj4.useAnimatedReaction(I, fn);
  let obj6 = wrapperOffset(channelId[38]);
  token = obj6.useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  let obj7 = wrapperOffset(channelId[20]);
  function he() {
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
  obj = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
    safeArea,
    edgeGutter: token,
    mode,
    VoicePanelModes,
    gestureState,
    connected,
    EDGE_GUTTER,
  };
  he.__closure = obj;
  he.__workletHash = 13290333964417;
  he.__initData = __initData8;
  derivedValue = obj7.useDerivedValue(he);
  let obj9 = wrapperOffset(channelId[20]);
  function _e() {
    const tmp2Result = calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token);
    let obj = mode;
    value = mode.get();
    const height = tmp2Result.height;
    if (connected.get()) {
      let sum = height;
    } else {
      sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
    }
    obj = {};
    const merged = Object.assign(tmp2Result);
    obj.paddingTop = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
    let num = 24;
    let num2 = 24;
    if (connected.get()) {
      num2 = 0;
    }
    obj.borderTopLeftRadius = num2;
    if (connected.get()) {
      num = 0;
    }
    obj.borderTopRightRadius = num;
    obj.height = sum;
    const tmp8 = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
    if (value === VoicePanelModes.PIP) {
      let num3 = 0;
    } else {
      num3 = 1;
    }
    obj.opacity = timing.withTiming(num3, closure_25);
    value = derivedValue.get();
    if (!connected.get()) {
      if (wrapperOffset.get().gestureActive) {
        let tmp13 = DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
      }
      obj = { translateY: tmp10Result.withSpring(value, tmp13) };
      const items = [obj];
      obj.transform = items;
      return obj;
    }
    tmp13 = UI_SHOW_HIDE_PHYSICS;
    tmp10Result = spring;
  }
  obj1 = {
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
  _e.__closure = obj1;
  _e.__workletHash = 11065699618122;
  _e.__initData = __initData9;
  const animatedStyle = obj9.useAnimatedStyle(_e);
  let obj11 = wrapperOffset(channelId[20]);
  function pe() {
    let tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    if (tmp) {
      tmp = !isScreenReaderEnabled;
    }
    return tmp;
  }
  obj2 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  pe.__closure = obj2;
  pe.__workletHash = 16725581527938;
  pe.__initData = __initData10;
  derivedValue1 = obj11.useDerivedValue(pe);
  let obj13 = wrapperOffset(channelId[20]);
  class Se {
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
      obj = { opacity: obj.withTiming(num, closure_25), transform: null };
      tmp3Result = tmp3(tmp[21]);
      num2 = 0;
      if (obj2.get()) {
        num2 = -tmp2(safeArea.get(), closure_12).height;
      }
      obj1 = { translateY: tmp3Result.withSpring(num2, MODE_CHANGE_PHYSICS) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj3 = {
    calculateVoicePanelHeaderSpecs: gestureState(channelId[39]),
    safeArea,
    edgeGutter: token,
    withTiming: wrapperOffset(channelId[40]).withTiming,
    isHeaderHidden: derivedValue1,
    OPACITY_TIMING,
    withSpring: wrapperOffset(channelId[21]).withSpring,
    MODE_CHANGE_PHYSICS: DOWN,
  };
  Se.__closure = obj3;
  Se.__workletHash = 13148362186846;
  Se.__initData = __initData11;
  const animatedStyle1 = obj13.useAnimatedStyle(Se);
  let obj15 = wrapperOffset(channelId[20]);
  function fe() {
    let obj = derivedValue1;
    let str = "box-none";
    if (derivedValue1.get()) {
      str = "none";
    }
    obj = { pointerEvents: str, importantForAccessibility: null, accessibilityElementsHidden: null };
    let str2 = "auto";
    if (obj.get()) {
      str2 = "no-hide-descendants";
    }
    obj.importantForAccessibility = str2;
    obj.accessibilityElementsHidden = obj.get();
    return obj;
  }
  fe.__closure = { isHeaderHidden: derivedValue1 };
  fe.__workletHash = 4740985143159;
  fe.__initData = __initData12;
  const animatedProps = obj15.useAnimatedProps(fe);
  let obj16 = wrapperOffset(channelId[41]);
  let canInviteMembers = obj16.useCanInviteMembers(channelId);
  let obj17 = wrapperOffset(channelId[42]);
  const tmp11 = focused(controlsSpecs.useState(null), 2);
  const tmp23 = gestureState(channelId[43])();
  let obj18 = wrapperOffset(channelId[44]);
  obj18.useNavigatorBackPressHandler(tmp23);
  if (null != tmp12) {
    DOWN = constants.LEFT;
    let tmp25 = constants;
  } else {
    tmp25 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp25.LEFT) {
    let intl2 = tmp5(tmp3[30]).intl;
    let stringResult = intl2.string(tmp5(tmp3[30]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[30]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[30]).t;
    if (tmp38Result4) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  let tmp2Result = tmp2(tmp3[45]);
  const tmp2ResultResult = tmp2Result(AuthenticationStore.getId(), channelId, guildId);
  UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
  let tmp5Result = tmp5(tmp3[27]);
  const items3 = [handleFocusChange];
  const items4 = [tmp2ResultResult];
  const stateFromStores1 = tmp5Result.useStateFromStores(
    items3,
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
    items4,
  );
  const items5 = [DOWN];
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
  }, items5);
  tmp5Result = tmp5(tmp3[47]);
  const isSecureFramesUIEnabled = tmp5Result.useIsSecureFramesUIEnabled({ channelId });
  const inviteMembersCallback = obj17.useInviteMembersCallback(channelId);
  let tmp35 = null;
  if (tmp12 === ParticipantTypes.USER) {
    tmp35 = null;
    if (null != tmp10) {
      tmp35 = tmp10;
    }
  }
  const isUserSecureFramesVerified = wrapperOffset(channelId[48]).useIsUserSecureFramesVerified({
    userId: tmp35,
    channelId,
  });
  const tmp5Result1 = wrapperOffset(channelId[48]);
  let tmp37 = null;
  if (tmp12 === ParticipantTypes.STREAM) {
    tmp37 = null;
    if (null != tmp10) {
      tmp37 = tmp10;
    }
  }
  let flag = wrapperOffset(channelId[48]).useIsStreamSecureFramesVerified({ streamKey: tmp37, channelId });
  if (ParticipantTypes.STREAM !== tmp12) {
    flag = false;
    if (ParticipantTypes.USER === tmp12) {
      flag = isUserSecureFramesVerified;
    }
  }
  let MIDNIGHT;
  if (tmp38Result4) {
    MIDNIGHT = ThemeTypes.MIDNIGHT;
  }
  obj4 = { theme: MIDNIGHT, children: null };
  const obj5 = { style: null, pointerEvents: "box-none", layout, children: null };
  const items6 = [tmp.headerWrapper, animatedStyle];
  obj5.style = items6;
  tmp2Result = tmp2(tmp3[22]);
  const items7 = [closure_23(closure_32, { isHeaderHidden: derivedValue1, scrollPosition, focused }), ,];
  let tmp38Result = tmp38Result4;
  if (tmp38Result4) {
    obj6 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
    tmp38Result = closure_23(tmp2(tmp3[50]), obj6);
    const tmp2Result1 = tmp2(tmp3[50]);
  }
  items7[1] = tmp38Result;
  obj7 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: null };
  tmp38Result = null;
  const tmp5Result2 = wrapperOffset(channelId[48]);
  if (tmp12 === ParticipantTypes.USER) {
    const obj8 = { isHeaderHidden: derivedValue1 };
    tmp38Result = closure_23(tmp2(tmp3[51]), obj8);
  }
  const items8 = [tmp38Result];
  obj9 = { style: null, animatedProps, children: null };
  const items9 = [tmp.headerOuter, animatedStyle1];
  obj9.style = items9;
  const tmp2Result2 = gestureState(channelId[22]);
  const obj10 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: null };
  const tmp2Result3 = gestureState(channelId[22]);
  obj11 = { icon: null, accessibilityLabel: null, onPress: null, style: null };
  const tmp2Result4 = gestureState(channelId[24]);
  obj11.icon = gestureState(channelId[52]);
  obj11.accessibilityLabel = stringResult;
  obj11.onPress = tmp23;
  obj11.style = memo;
  const items10 = [closure_23(gestureState(channelId[29]), obj11)];
  const obj12 = { style: tmp.headerInner, children: null };
  const tmp2Result5 = gestureState(channelId[29]);
  const items11 = [closure_23(gestureState(channelId[53]), {})];
  let tmp38Result1 = null;
  if (isSecureFramesUIEnabled) {
    tmp38Result1 = null;
    if (flag) {
      obj13 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      tmp38Result1 = closure_23(tmp5(tmp3[54]).ShieldLockIcon, obj13);
    }
  }
  items11[1] = tmp38Result1;
  obj12.children = items11;
  items10[1] = closure_24(gestureState(channelId[22]), obj12);
  obj10.children = items10;
  const items12 = [closure_24(tmp2Result4, obj10)];
  const obj14 = { style: tmp.rightWrapper, layout, children: null };
  const tmp2Result6 = gestureState(channelId[22]);
  const items13 = [closure_23(closure_35, {}), , , , ,];
  let tmp38Result2 = channelType === tmp5(tmp3[55]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp38Result2) {
    obj15 = { channelId };
    tmp38Result2 = closure_23(MusicMuteButton, obj15);
  }
  items13[1] = tmp38Result2;
  items13[2] = closure_23(gestureState(channelId[56]), { isConnectedToVoiceChannel: tmp38Result4, channelId });
  if (canInviteMembers) {
    obj16 = { icon: tmp2(tmp3[57]), accessibilityLabel: null, onPress: null };
    let intl3 = tmp5(tmp3[30]).intl;
    obj17 = { channelName: stateFromStores };
    obj16.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp3[30]).t["dHHb/2"], obj17);
    obj16.onPress = inviteMembersCallback;
    canInviteMembers = closure_23(tmp2(tmp3[29]), obj16);
    const tmp2Result8 = tmp2(tmp3[29]);
  }
  items13[3] = canInviteMembers;
  let tmp38Result3 = null;
  if (null != stateFromStores1) {
    obj18 = { icon: tmp2(tmp3[58]), onPress: callback1, accessibilityLabel: stateFromStores1 };
    tmp38Result3 = closure_23(tmp2(tmp3[29]), obj18);
    const tmp2Result9 = tmp2(tmp3[29]);
  }
  items13[4] = tmp38Result3;
  if (tmp38Result4) {
    tmp38Result4 =
      obj2.useConfig({ location: "VoicePanelHeader" }).treatment ===
      tmp5(tmp3[36]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp38Result4) {
    const obj19 = { channelId };
    tmp38Result4 = closure_23(tmp2(tmp3[59]), obj19);
  }
  items13[5] = tmp38Result4;
  obj14.children = items13;
  items12[1] = closure_24(gestureState(channelId[22]), obj14);
  obj9.children = items12;
  items8[1] = closure_24(tmp2Result3, obj9);
  obj7.children = items8;
  items7[2] = closure_24(tmp2Result2, obj7);
  obj5.children = items7;
  obj4.children = closure_24(tmp2Result, obj5);
  return closure_23(wrapperOffset(channelId[49]).ThemeContextProvider, obj4);
});
