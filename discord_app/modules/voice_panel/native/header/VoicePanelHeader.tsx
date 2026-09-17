// === Module 17346: VoicePanelHeader ===

// Module 17346 (VoicePanelHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import timing from "timing" /* 4641 */;
import useChannelName from "useChannelName" /* 4793 */;
import spring from "spring" /* 5061 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 10064 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 10183 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 12428 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17280 */;
import useStableParticipant from "useStableParticipant" /* 17350 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4656 */;
import ExperimentStore from "ExperimentStore" /* 4555 */;
import StageMusicStore from "StageMusicStore" /* 10050 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import SpeakingStore from "SpeakingStore" /* 5507 */;
import UserStore from "UserStore" /* 1372 */;

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
      const intl = tmp4(1115).intl;
      const string = intl.string;
      const t = tmp4(1115).t;
      if (stateFromStores) {
        let stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 10061 : 10063),
        onPress() {
              return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
            }
      };
      closure_23(VoicePanelIconButtonDefault, obj3);
      const tmpResult = VoicePanelIconButtonDefault;
    }
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(12424);
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = VoicePanelConstants);
const EDGE_GUTTER = fn(12427).EDGE_GUTTER;
const VoicePanelControlsModes = fn(12422).VoicePanelControlsModes;
const ParticipantTypes = fn(4661).ParticipantTypes;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
const OPACITY_TIMING = { duration: 300 };
const createStyles = fn(4640);
let obj = { headerWrapper: { zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%", paddingBottom: EDGE_GUTTER, overflow: "hidden" }, blurStyles: null, leftWrapper: null, rightWrapper: null, headerOuter: null, headerInner: null, headerContentWrapper: null, stroke: null, strokeAlt: null, strokeContainer: null, focusedSpeakingDotWrapper: null, focusedSpeakingDot: null, shieldIconMargin: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.opacity = 0.7;
obj.blurStyles = obj3;
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
let closure_26 = createStyles.createStyles(obj);
const constants = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj4 = {};
const merged1 = Object.assign(MODE_CHANGE_PHYSICS);
obj4.overshootClamping = true;
const __initData = { code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
const __initData2 = { code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
const __initData3 = { code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
let closure_32 = noop.memo((isHeaderHidden) => {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = closure_26();
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
  const derivedValue = isHeaderHidden(focused[20]).useDerivedValue(fn);
  let obj = isHeaderHidden(focused[20]);
  const fn2 = function c() {
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
  obj4 = isHeaderHidden(focused[20]);
  const fn3 = function u() {
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, obj4) };
  };
  const obj3 = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue };
  fn3.__closure = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  const animatedStyle = obj4.useAnimatedStyle(fn3);
  const obj6 = { style: null, pointerEvents: "none", children: null };
  const items = [StyleSheet.absoluteFill, animatedStyle];
  obj6.style = items;
  const obj5 = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  const items1 = [closure_23(scrollPosition(focused[23]), { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps }), ];
  const obj8 = { style: tmp.strokeContainer, children: null };
  const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  let tmp5 = scrollPosition(focused[22]);
  const items2 = [closure_23(scrollPosition(focused[24]), { style: tmp.stroke }), closure_23(scrollPosition(focused[24]), { style: tmp.strokeAlt })];
  obj8.children = items2;
  items1[1] = closure_24(scrollPosition(focused[24]), obj8);
  obj6.children = items1;
  return closure_24(tmp5, obj6);
});
const __initData4 = { code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
const __initData5 = { code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
let closure_35 = noop.memo(() => {
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
  const obj5 = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  obj5.style = items1;
  obj4 = id(controlsSpecs[20]);
  obj5.children = closure_23(focused(controlsSpecs[22]), { style: tmp5.focusedSpeakingDot });
  return closure_23(focused(controlsSpecs[22]), obj5);
});
const __initData6 = { code: "function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData7 = { code: "function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData8 = { code: "function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
const __initData9 = { code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData10 = { code: "function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData11 = { code: "function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData12 = { code: "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
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
  let tmp38Result10 = gestureState(channelId[35])(channelId);
  let obj2 = wrapperOffset(channelId[34]);
  let obj3 = gestureState(channelId[36]);
  let items = [derivedValue1, token, c10, connected];
  const items1 = [channelId];
  const stateFromStores = wrapperOffset(channelId[27]).useStateFromStores(items, () => {
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
  }, items1);
  obj4 = wrapperOffset(channelId[27]);
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
  const tmp11 = focused(controlsSpecs.useState(null), 2);
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
  let obj5 = wrapperOffset(channelId[20]);
  fn.__closure = { runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange };
  fn.__workletHash = 13084116412140;
  fn.__initData = __initData7;
  const animatedReaction = obj5.useAnimatedReaction(I, fn);
  const obj6 = { runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange };
  token = wrapperOffset(channelId[38]).useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj7 = wrapperOffset(channelId[38]);
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
  const obj8 = wrapperOffset(channelId[20]);
  he.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  he.__workletHash = 13290333964417;
  he.__initData = __initData8;
  derivedValue = obj8.useDerivedValue(he);
  const obj9 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  function _e() {
    const tmp2Result = calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token);
    value = mode.get();
    const height = tmp2Result.height;
    if (connected.get()) {
      let sum = height;
    } else {
      sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
    }
    const obj3 = {};
    const merged = Object.assign(tmp2Result);
    obj3.paddingTop = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
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
    obj3.height = sum;
    const tmp8 = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
    if (value === VoicePanelModes.PIP) {
      let num3 = 0;
    } else {
      num3 = 1;
    }
    obj3.opacity = timing.withTiming(num3, closure_25);
    value2 = derivedValue.get();
    if (!connected.get()) {
      if (wrapperOffset.get().gestureActive) {
        let tmp13 = DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
      }
      const obj5 = { translateY: tmp10Result.withSpring(value2, tmp13) };
      const items = [obj5];
      obj3.transform = items;
      return obj3;
    }
    tmp13 = UI_SHOW_HIDE_PHYSICS;
    tmp10Result = spring;
  }
  const obj10 = wrapperOffset(channelId[20]);
  _e.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[40]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  _e.__workletHash = 11065699618122;
  _e.__initData = __initData9;
  const animatedStyle = obj10.useAnimatedStyle(_e);
  const obj11 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[40]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  function pe() {
    let tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    if (tmp) {
      tmp = !isScreenReaderEnabled;
    }
    return tmp;
  }
  pe.__closure = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  pe.__workletHash = 16725581527938;
  pe.__initData = __initData10;
  derivedValue1 = wrapperOffset(channelId[20]).useDerivedValue(pe);
  const obj12 = wrapperOffset(channelId[20]);
  const obj13 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
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
  const obj14 = wrapperOffset(channelId[20]);
  Se.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[40]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  Se.__workletHash = 13148362186846;
  Se.__initData = __initData11;
  const animatedStyle1 = obj14.useAnimatedStyle(Se);
  const obj15 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[40]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  function fe() {
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
  fe.__closure = { isHeaderHidden: derivedValue1 };
  fe.__workletHash = 4740985143159;
  fe.__initData = __initData12;
  const animatedProps = wrapperOffset(channelId[20]).useAnimatedProps(fe);
  const obj16 = wrapperOffset(channelId[20]);
  let canInviteMembers = wrapperOffset(channelId[41]).useCanInviteMembers(channelId);
  const obj17 = wrapperOffset(channelId[41]);
  const obj18 = wrapperOffset(channelId[42]);
  const tmp23 = gestureState(channelId[43])();
  const inviteMembersCallback = wrapperOffset(channelId[42]).useInviteMembersCallback(channelId);
  wrapperOffset(channelId[44]).useNavigatorBackPressHandler(tmp23);
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
    if (tmp38Result10) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  const obj19 = wrapperOffset(channelId[44]);
  const tmp2ResultResult = gestureState(channelId[45])(AuthenticationStore.getId(), channelId, guildId);
  UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
  let tmp2Result = gestureState(channelId[45]);
  const items3 = [handleFocusChange];
  const items4 = [tmp2ResultResult];
  const stateFromStores1 = wrapperOffset(channelId[27]).useStateFromStores(items3, () => {
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
  }, items4);
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
  const tmp5Result = wrapperOffset(channelId[27]);
  const isSecureFramesUIEnabled = wrapperOffset(channelId[47]).useIsSecureFramesUIEnabled({ channelId });
  const tmp5Result4 = wrapperOffset(channelId[47]);
  let tmp35 = null;
  if (tmp12 === ParticipantTypes.USER) {
    tmp35 = null;
    if (null != tmp10) {
      tmp35 = tmp10;
    }
  }
  const isUserSecureFramesVerified = wrapperOffset(channelId[48]).useIsUserSecureFramesVerified({ userId: tmp35, channelId });
  const tmp5Result5 = wrapperOffset(channelId[48]);
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
  let ONYX;
  if (tmp38Result10) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj20 = { theme: ONYX, children: null };
  const obj21 = { style: null, pointerEvents: "box-none", layout, children: null };
  const items6 = [tmp.headerWrapper, animatedStyle];
  obj21.style = items6;
  const tmp5Result6 = wrapperOffset(channelId[48]);
  const items7 = [closure_23(closure_32, { isHeaderHidden: derivedValue1, scrollPosition, focused }), , ];
  let tmp38Result = tmp38Result10;
  if (tmp38Result10) {
    const obj22 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
    tmp38Result = closure_23(tmp2(tmp3[50]), obj22);
    const tmp2Result12 = tmp2(tmp3[50]);
  }
  items7[1] = tmp38Result;
  const obj23 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: null };
  let tmp38Result6 = null;
  const tmp2Result11 = gestureState(channelId[22]);
  if (tmp12 === ParticipantTypes.USER) {
    const obj24 = { isHeaderHidden: derivedValue1 };
    tmp38Result6 = closure_23(tmp2(tmp3[51]), obj24);
  }
  const items8 = [tmp38Result6, ];
  const obj25 = { style: null, animatedProps, children: null };
  const items9 = [tmp.headerOuter, animatedStyle1];
  obj25.style = items9;
  const tmp2Result13 = gestureState(channelId[22]);
  const obj26 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: null };
  const tmp2Result14 = gestureState(channelId[22]);
  const obj27 = { icon: null, accessibilityLabel: null, onPress: null, style: null };
  const tmp2Result15 = gestureState(channelId[24]);
  obj27.icon = gestureState(channelId[52]);
  obj27.accessibilityLabel = stringResult;
  obj27.onPress = tmp23;
  obj27.style = memo;
  const items10 = [closure_23(gestureState(channelId[29]), obj27), ];
  const obj28 = { style: tmp.headerInner, children: null };
  const tmp2Result16 = gestureState(channelId[29]);
  const items11 = [closure_23(gestureState(channelId[53]), {}), ];
  let tmp38Result7 = null;
  if (isSecureFramesUIEnabled) {
    tmp38Result7 = null;
    if (flag) {
      const obj29 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      tmp38Result7 = closure_23(tmp5(tmp3[54]).ShieldLockIcon, obj29);
    }
  }
  items11[1] = tmp38Result7;
  obj28.children = items11;
  items10[1] = closure_24(gestureState(channelId[22]), obj28);
  obj26.children = items10;
  const items12 = [closure_24(tmp2Result15, obj26), ];
  const obj30 = { style: tmp.rightWrapper, layout, children: null };
  const tmp2Result17 = gestureState(channelId[22]);
  const items13 = [closure_23(closure_35, {}), , , , , ];
  let tmp38Result8 = channelType === tmp5(tmp3[55]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp38Result8) {
    const obj31 = { channelId };
    tmp38Result8 = closure_23(MusicMuteButton, obj31);
  }
  items13[1] = tmp38Result8;
  items13[2] = closure_23(gestureState(channelId[56]), { isConnectedToVoiceChannel: tmp38Result10, channelId });
  if (canInviteMembers) {
    const obj32 = { icon: tmp2(tmp3[57]), accessibilityLabel: null, onPress: null };
    let intl3 = tmp5(tmp3[30]).intl;
    const obj33 = { channelName: stateFromStores };
    obj32.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp3[30]).t["dHHb/2"], obj33);
    obj32.onPress = inviteMembersCallback;
    canInviteMembers = closure_23(tmp2(tmp3[29]), obj32);
    const tmp2Result19 = tmp2(tmp3[29]);
  }
  items13[3] = canInviteMembers;
  let tmp38Result9 = null;
  if (null != stateFromStores1) {
    const obj34 = { icon: tmp2(tmp3[58]), onPress: callback1, accessibilityLabel: stateFromStores1 };
    tmp38Result9 = closure_23(tmp2(tmp3[29]), obj34);
    const tmp2Result20 = tmp2(tmp3[29]);
  }
  items13[4] = tmp38Result9;
  if (tmp38Result10) {
    tmp38Result10 = obj3.useConfig({ location: "VoicePanelHeader" }).treatment === tmp5(tmp3[36]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp38Result10) {
    const obj35 = { channelId };
    tmp38Result10 = closure_23(tmp2(tmp3[59]), obj35);
  }
  items13[5] = tmp38Result10;
  obj30.children = items13;
  items12[1] = closure_24(gestureState(channelId[22]), obj30);
  obj25.children = items12;
  items8[1] = closure_24(tmp2Result14, obj25);
  obj23.children = items8;
  items7[2] = closure_24(tmp2Result13, obj23);
  obj21.children = items7;
  obj20.children = closure_24(tmp2Result11, obj21);
  return closure_23(wrapperOffset(channelId[49]).ThemeContextProvider, obj20);
});