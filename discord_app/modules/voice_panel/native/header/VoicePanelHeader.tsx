// discord_app/modules/voice_panel/native/header/VoicePanelHeader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useMyCurrentStageChannelRoleDefault from "../../../stage_channels/useMyCurrentStageChannelRole.tsx";
import _modDef16254 from "../shared/VoicePanelIconButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import getParticipants from "../../../calls/ChannelRTCStore.tsx";
import getHash from "../../../experiments/ExperimentStore.tsx";
import initialize from "../../../stage_channels/StageMusicStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import anyoneHasFlagInContext from "../../../../stores/SpeakingStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import VoicePanelModes from "../../VoicePanelConstants.tsx";
import { EDGE_GUTTER } from "../card/VoicePanelCardConstants.tsx";
import { VoicePanelControlsModes } from "../controls/VoicePanelControlsConstants.tsx";
import { ParticipantTypes } from "../../../calls/CallConstants.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function MusicMuteButton(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  const tmp3 = useMyCurrentStageChannelRoleDefault(channelId);
  if (tmp3 != null) {
    const speaker = tmp3.speaker;
  }
  let obj = stateFromStores(589);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  let tmp6 = null;
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    tmp6 = null;
    if (speaker) {
      const intl = tmp4(1236).intl;
      const string = intl.string;
      const t = tmp4(1236).t;
      if (stateFromStores) {
        let stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      obj = { accessibilityLabel: null, icon: null, onPress: null };
      obj[0] = stringResult;
      obj[1] = importDefault(stateFromStores ? 12512 : 9905);
      obj[2] = function onPress() {
        return stateFromStores(dependencyMap[33]).updateStageMusicMuted(!stateFromStores);
      };
      callback(_modDef16254, obj);
      const tmpResult = _modDef16254;
    }
  }
  return tmp6;
}
let c4 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const MODE_CHANGE_PHYSICS = VoicePanelModes.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = VoicePanelModes);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
let closure_25 = { duration: 300 };
let obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.opacity = 0.7;
obj[1] = obj;
obj[2] = { position: "relative", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: 12 };
obj[3] = { flexDirection: "row", alignItems: "center", gap: 12, paddingLeft: 12 };
obj[4] = { flexDirection: "row", alignItems: "center" };
obj[5] = { flexDirection: "row", alignItems: "center", flexShrink: 1, flexGrow: 1 };
obj[6] = { position: "relative" };
obj[7] = { height: StyleSheet.hairlineWidth, opacity: 0.2 };
obj[8] = { height: StyleSheet.hairlineWidth, opacity: 0.8 };
obj[9] = { position: "absolute", left: 0, right: 0, bottom: 0, height: StyleSheet.hairlineWidth };
const createCacheKey = { width: 12, height: 12, borderRadius: ThemesDefault.radii.round, padding: 2 };
obj[10] = createCacheKey;
obj[11] = { width: 8, height: 8, borderRadius: ThemesDefault.radii.round };
obj[12] = { marginLeft: -8 };
let closure_26 = createCacheKey.createStyles(obj);
let closure_27 = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj3 = {};
const merged1 = Object.assign(MODE_CHANGE_PHYSICS);
obj3.overshootClamping = true;
let closure_29 = { code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
let closure_30 = { code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
let closure_31 = { code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
let closure_32 = importAllResult.memo((isHeaderHidden) => {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = callback3();
  let obj = isHeaderHidden(focused[20]);
  const fn = function l() {
    const value = isHeaderHidden.get();
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
  fn.__initData = closure_29;
  const derivedValue = obj.useDerivedValue(fn);
  obj1 = isHeaderHidden(focused[20]);
  const fn2 = function c() {
    let obj = isHeaderHidden(focused[21]);
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
  fn2.__initData = closure_30;
  const animatedProps = obj1.useAnimatedProps(fn2);
  obj3 = isHeaderHidden(focused[20]);
  const fn3 = function u() {
    let obj = isHeaderHidden(focused[21]);
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, obj3) };
    return obj;
  };
  obj = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj3 };
  fn3.__closure = obj;
  fn3.__workletHash = 2825977044105;
  fn3.__initData = closure_31;
  const animatedStyle = obj3.useAnimatedStyle(fn3);
  obj1 = { style: items, pointerEvents: "none", children: null };
  items = [StyleSheet.absoluteFill, animatedStyle];
  const items1 = [callback(scrollPosition(focused[23]), { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps }), ];
  obj3 = { style: tmp.strokeContainer, children: null };
  let tmp5 = scrollPosition(focused[22]);
  const items2 = [callback(scrollPosition(focused[24]), { style: tmp.stroke }), callback(scrollPosition(focused[24]), { style: tmp.strokeAlt })];
  obj3[1] = items2;
  items1[1] = callback2(scrollPosition(focused[24]), obj3);
  obj1[2] = items1;
  return callback2(tmp5, obj1);
});
let closure_33 = { code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
let closure_34 = { code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
let closure_35 = importAllResult.memo(() => {
  const id = store.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[25]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  let obj = id(controlsSpecs[20]);
  const sharedValue = obj.useSharedValue(speaking.isSpeaking(id));
  const items = [id, sharedValue];
  const layoutEffect = derivedValue.useLayoutEffect(() => {
    function handleChange() {
      const result = closure_3.set(closure_1_13.isSpeaking(handleChange));
    }
    let result = sharedValue.set(closure_1_13.isSpeaking(handleChange));
    const result1 = closure_1_13.addReactChangeListener(handleChange);
    return () => {
      const result = closure_2_13.removeReactChangeListener(handleChange);
    };
  }, items);
  const tmp5 = callback3();
  obj1 = id(controlsSpecs[20]);
  const fn = function u() {
    let value = null != focused.get();
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
  fn.__initData = closure_33;
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
  fn2.__initData = closure_34;
  const animatedStyle = id(controlsSpecs[20]).useAnimatedStyle(fn2);
  obj = { style: items1, pointerEvents: "none", children: null };
  items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  const obj4 = id(controlsSpecs[20]);
  obj1 = { style: tmp5.focusedSpeakingDot };
  obj[2] = callback(focused(controlsSpecs[22]), obj1);
  return callback(focused(controlsSpecs[22]), obj);
});
let closure_37 = { code: "function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_38 = { code: "function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_39 = { code: "function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
let closure_40 = { code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_41 = { code: "function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
let closure_42 = { code: "function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
let closure_43 = { code: "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
const memoResult = importAllResult.memo(function VoicePanelHeader(wrapperOffset) {
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const layout = wrapperOffset.layout;
  let channelId;
  let controlsSpecs;
  let store;
  c10 = undefined;
  let token;
  let derivedValue;
  let derivedValue1;
  let DOWN;
  closure_16 = undefined;
  let tmp = callback3();
  let obj = controlsSpecs;
  const context = controlsSpecs.useContext(gestureState(channelId[25]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  ({ guildId, channelType, scrollPosition } = context);
  obj1 = wrapperOffset(channelId[34]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const tmp7 = gestureState(channelId[35])(channelId);
  let obj2 = wrapperOffset(channelId[27]);
  let items = [derivedValue1, token, c10, connected];
  const items1 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const channel = _undefined2.getChannel(channelId);
    let channelName;
    if (null != channel) {
      channelName = wrapperOffset(channelId[36]).computeChannelName(channel, derivedValue1, token);
      const obj = wrapperOffset(channelId[36]);
    }
    if (channelName == null) {
      const intl = wrapperOffset(channelId[30]).intl;
      channelName = intl.string(wrapperOffset(channelId[30]).t.zLZPmk);
    }
    return channelName;
  }, items1);
  [tmp10, c9] = focused(controlsSpecs.useState(undefined), 2);
  const tmp9 = focused(controlsSpecs.useState(undefined), 2);
  [tmp12, c10] = focused(controlsSpecs.useState(null), 2);
  const items2 = [channelId];
  const callback = controlsSpecs.useCallback((arg0) => {
    let tmp3 = null;
    if (null != arg0) {
      const participant = safeArea.getParticipant(tmp2, arg0);
      let type = null;
      if (null != participant) {
        type = participant.type;
      }
      tmp3 = type;
    }
    _undefined(tmp3);
    _undefined(arg0);
  }, items2);
  obj3 = wrapperOffset(channelId[20]);
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
  I.__initData = closure_37;
  const fn = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      wrapperOffset(channelId[20]).runOnJS(callback)(arg0);
      const obj = wrapperOffset(channelId[20]);
    }
  };
  obj = { runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange: callback };
  fn.__closure = obj;
  fn.__workletHash = 13084116412140;
  fn.__initData = closure_38;
  const animatedReaction = obj3.useAnimatedReaction(I, fn);
  let obj5 = wrapperOffset(channelId[37]);
  token = obj5.useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  let obj6 = wrapperOffset(channelId[20]);
  function ge() {
    const tmp = gestureState(channelId[38]);
    if (mode.get() === closure_1_17.PIP) {
      let num = -tmpResult.height + EDGE_GUTTER;
    } else {
      num = 0;
      if (mode.get() === tmp3.DISMISSED) {
        num = 0;
      }
    }
    return num;
  }
  obj = { calculateVoicePanelHeaderSpecs: gestureState(channelId[38]), safeArea, edgeGutter: token, mode, VoicePanelModes: closure_17, gestureState, connected, EDGE_GUTTER };
  ge.__closure = obj;
  ge.__workletHash = 13290333964417;
  ge.__initData = closure_39;
  derivedValue = obj6.useDerivedValue(ge);
  let obj8 = wrapperOffset(channelId[20]);
  function he() {
    const tmp2Result = gestureState(channelId[38])(safeArea.get(), token);
    let obj = mode;
    let value = mode.get();
    const height = tmp2Result.height;
    if (connected.get()) {
      let sum = height;
    } else {
      sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
    }
    obj = {};
    const tmp2 = gestureState(channelId[38]);
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
    if (value === closure_1_17.PIP) {
      let num3 = 0;
    } else {
      num3 = 1;
    }
    obj.opacity = wrapperOffset(channelId[39]).withTiming(num3, closure_1_25);
    const obj4 = wrapperOffset(channelId[39]);
    value = derivedValue.get();
    if (!connected.get()) {
      if (wrapperOffset.get().gestureActive) {
        let tmp13 = closure_1_18;
      }
      obj = { translateY: null };
      obj[0] = tmp10Result.withSpring(value, tmp13);
      const items = [obj];
      obj.transform = items;
      return obj;
    }
    tmp13 = closure_16;
    tmp10Result = wrapperOffset(channelId[21]);
  }
  obj1 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[38]), safeArea, edgeGutter: token, mode, VoicePanelModes: closure_17, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[39]).withTiming, OPACITY_TIMING: closure_25, withSpring: wrapperOffset(channelId[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18, UI_SHOW_HIDE_PHYSICS: closure_16 };
  he.__closure = obj1;
  he.__workletHash = 11065699618122;
  he.__initData = closure_40;
  const animatedStyle = obj8.useAnimatedStyle(he);
  let obj10 = wrapperOffset(channelId[20]);
  function _e() {
    let tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    if (tmp) {
      tmp = !isScreenReaderEnabled;
    }
    return tmp;
  }
  obj2 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  _e.__closure = obj2;
  _e.__workletHash = 16725581527938;
  _e.__initData = closure_41;
  derivedValue1 = obj10.useDerivedValue(_e);
  let obj12 = wrapperOffset(channelId[20]);
  function pe() {
    let obj = wrapperOffset(channelId[39]);
    let num = 1;
    if (derivedValue1.get()) {
      num = 0;
    }
    obj = { opacity: obj.withTiming(num, closure_1_25), transform: null };
    const tmp2 = gestureState(channelId[38]);
    let num2 = 0;
    if (derivedValue1.get()) {
      num2 = -tmp2(safeArea.get(), token).height;
    }
    obj = { translateY: wrapperOffset(channelId[21]).withSpring(num2, DOWN) };
    const items = [obj];
    obj[1] = items;
    return obj;
  }
  obj3 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[38]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[39]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING: closure_25, withSpring: wrapperOffset(channelId[21]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  pe.__closure = obj3;
  pe.__workletHash = 13148362186846;
  pe.__initData = closure_42;
  const animatedStyle1 = obj12.useAnimatedStyle(pe);
  let obj14 = wrapperOffset(channelId[20]);
  class Se {
    constructor() {
      obj = closure_14;
      str = "box-none";
      if (closure_14.get()) {
        str = "none";
      }
      obj = { pointerEvents: str, importantForAccessibility: null, accessibilityElementsHidden: null };
      str2 = "auto";
      if (obj.get()) {
        str2 = "no-hide-descendants";
      }
      obj[1] = str2;
      obj[2] = obj.get();
      return obj;
    }
  }
  Se.__closure = { isHeaderHidden: derivedValue1 };
  Se.__workletHash = 4740985143159;
  Se.__initData = closure_43;
  const animatedProps = obj14.useAnimatedProps(Se);
  let obj15 = wrapperOffset(channelId[40]);
  let canInviteMembers = obj15.useCanInviteMembers(channelId);
  let obj16 = wrapperOffset(channelId[41]);
  const tmp11 = focused(controlsSpecs.useState(null), 2);
  const tmp23 = gestureState(channelId[42])();
  let obj17 = wrapperOffset(channelId[43]);
  obj17.useNavigatorBackPressHandler(tmp23);
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
    if (tmp7) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  let tmp2Result = tmp2(tmp3[44]);
  const tmp2ResultResult = tmp2Result(store.getId(), channelId, guildId);
  closure_16 = tmp2ResultResult;
  let tmp5Result = tmp5(tmp3[27]);
  const items3 = [callback];
  const items4 = [tmp2ResultResult];
  const stateFromStores1 = tmp5Result.useStateFromStores(items3, () => {
    if (null != closure_16) {
      if (obj3.isStableUserParticipant(closure_16)) {
        if (tmp10Result.stableParticipantHasVideo(closure_16)) {
          const videoDevices = callback.getVideoDevices();
          const _Object = Object;
          const keys = Object.keys(videoDevices);
          if (keys.length >= 2) {
            const videoDeviceId = callback.getVideoDeviceId();
            let facing;
            if (videoDevices[videoDeviceId] != null) {
              facing = tmp13.facing;
            }
            const found = keys.find((item, index) => item !== videoDeviceId);
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
                    const intl3 = wrapperOffset(channelId[30]).intl;
                    let stringResult = intl3.string(wrapperOffset(channelId[30]).t["/R1SBx"]);
                  }
                }
                if ("front" === facing) {
                  if ("back" === tmp6) {
                    const intl2 = wrapperOffset(channelId[30]).intl;
                    stringResult = intl2.string(wrapperOffset(channelId[30]).t["7YZ/Si"]);
                  }
                }
                const intl = wrapperOffset(channelId[30]).intl;
                stringResult = intl.string(wrapperOffset(channelId[30]).t["t9eQ/g"]);
              }
              return stringResult;
            }
            const intl4 = wrapperOffset(channelId[30]).intl;
            stringResult = intl4.string(wrapperOffset(channelId[30]).t["t9eQ/g"]);
          }
        }
        tmp10Result = wrapperOffset(channelId[44]);
      }
      obj3 = wrapperOffset(channelId[44]);
    }
  }, items4);
  const items5 = [DOWN];
  const callback1 = obj.useCallback(() => {
    const videoDeviceId = callback.getVideoDeviceId();
    const keys = Object.keys(callback.getVideoDevices());
    const found = keys.find((item, index) => item !== closure_0);
    if (null != found) {
      gestureState(channelId[45]).setVideoDevice(found);
      const obj = gestureState(channelId[45]);
    }
  }, []);
  const memo = obj.useMemo(() => {
    let str = "0deg";
    if (DOWN === closure_1_27.LEFT) {
      str = "90deg";
    }
    const transform = [{ rotateZ: str }];
    return { transform };
  }, items5);
  tmp5Result = tmp5(tmp3[46]);
  const isSecureFramesUIEnabled = tmp5Result.useIsSecureFramesUIEnabled({ channelId });
  const inviteMembersCallback = obj16.useInviteMembersCallback(channelId);
  let tmp35 = null;
  if (tmp12 === ParticipantTypes.USER) {
    tmp35 = null;
    if (null != tmp10) {
      tmp35 = tmp10;
    }
  }
  const isUserSecureFramesVerified = wrapperOffset(channelId[47]).useIsUserSecureFramesVerified({ userId: tmp35, channelId });
  const tmp5Result1 = wrapperOffset(channelId[47]);
  let tmp37 = null;
  if (tmp12 === ParticipantTypes.STREAM) {
    tmp37 = null;
    if (null != tmp10) {
      tmp37 = tmp10;
    }
  }
  let flag = wrapperOffset(channelId[47]).useIsStreamSecureFramesVerified({ streamKey: tmp37, channelId });
  if (ParticipantTypes.STREAM !== tmp12) {
    flag = false;
    if (ParticipantTypes.USER === tmp12) {
      flag = isUserSecureFramesVerified;
    }
  }
  let MIDNIGHT;
  if (tmp7) {
    MIDNIGHT = ThemeTypes.MIDNIGHT;
  }
  let obj4 = { theme: MIDNIGHT, children: null };
  obj5 = { style: items6, pointerEvents: "box-none", layout, children: null };
  items6 = [tmp.headerWrapper, animatedStyle];
  tmp2Result = tmp2(tmp3[22]);
  const items7 = [callback(closure_32, { isHeaderHidden: derivedValue1, scrollPosition, focused }), , ];
  let tmp38Result = tmp7;
  if (tmp7) {
    obj6 = { baseColor: null, minHeight: 0 };
    obj6[0] = tmp2(tmp3[19]).colors.BLACK;
    tmp38Result = callback(tmp2(tmp3[49]), obj6);
    const tmp2Result1 = tmp2(tmp3[49]);
  }
  items7[1] = tmp38Result;
  const obj7 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: null };
  tmp38Result = null;
  const tmp5Result2 = wrapperOffset(channelId[47]);
  if (tmp12 === ParticipantTypes.USER) {
    obj8 = { isHeaderHidden: null };
    obj8[0] = derivedValue1;
    tmp38Result = callback(tmp2(tmp3[50]), obj8);
  }
  const items8 = [tmp38Result, ];
  const obj9 = { style: items9, animatedProps, children: null };
  items9 = [tmp.headerOuter, animatedStyle1];
  const tmp2Result2 = gestureState(channelId[22]);
  obj10 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: null };
  const tmp2Result3 = gestureState(channelId[22]);
  const obj11 = { icon: null, accessibilityLabel: null, onPress: null, style: null };
  const tmp2Result4 = gestureState(channelId[24]);
  obj11[0] = gestureState(channelId[51]);
  obj11[1] = stringResult;
  obj11[2] = tmp23;
  obj11[3] = memo;
  const items10 = [callback(gestureState(channelId[29]), obj11), ];
  obj12 = { style: tmp.headerInner, children: null };
  const tmp2Result5 = gestureState(channelId[29]);
  const items11 = [callback(gestureState(channelId[52]), {}), ];
  let tmp38Result1 = null;
  if (isSecureFramesUIEnabled) {
    tmp38Result1 = null;
    if (flag) {
      const obj13 = { size: "xs", color: null, style: null };
      obj13[1] = tmp2(tmp3[19]).colors.TEXT_SUBTLE;
      obj13[2] = tmp.shieldIconMargin;
      tmp38Result1 = callback(tmp5(tmp3[53]).ShieldLockIcon, obj13);
    }
  }
  items11[1] = tmp38Result1;
  obj12[1] = items11;
  items10[1] = callback2(gestureState(channelId[22]), obj12);
  obj10[2] = items10;
  const items12 = [callback2(tmp2Result4, obj10), ];
  obj14 = { style: tmp.rightWrapper, layout, children: null };
  const tmp2Result6 = gestureState(channelId[22]);
  const items13 = [callback(closure_35, {}), , , , ];
  let tmp38Result2 = channelType === tmp5(tmp3[54]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp38Result2) {
    obj15 = { channelId: null };
    obj15[0] = channelId;
    tmp38Result2 = callback(MusicMuteButton, obj15);
  }
  items13[1] = tmp38Result2;
  items13[2] = callback(gestureState(channelId[55]), { isConnectedToVoiceChannel: tmp7, channelId });
  if (canInviteMembers) {
    obj16 = { icon: null, accessibilityLabel: null, onPress: null };
    obj16[0] = tmp2(tmp3[56]);
    let intl3 = tmp5(tmp3[30]).intl;
    obj17 = { channelName: null };
    obj17[0] = stateFromStores;
    obj16[1] = intl3.formatToPlainString(tmp5(tmp3[30]).t["dHHb/2"], obj17);
    obj16[2] = inviteMembersCallback;
    canInviteMembers = callback(tmp2(tmp3[29]), obj16);
    const tmp2Result8 = tmp2(tmp3[29]);
  }
  items13[3] = canInviteMembers;
  let tmp38Result3 = null;
  if (null != stateFromStores1) {
    const obj18 = { icon: null, onPress: null, accessibilityLabel: null };
    obj18[0] = tmp2(tmp3[57]);
    obj18[1] = callback1;
    obj18[2] = stateFromStores1;
    tmp38Result3 = callback(tmp2(tmp3[29]), obj18);
    const tmp2Result9 = tmp2(tmp3[29]);
  }
  items13[4] = tmp38Result3;
  obj14[2] = items13;
  items12[1] = callback2(gestureState(channelId[22]), obj14);
  obj9[2] = items12;
  items8[1] = callback2(tmp2Result3, obj9);
  obj7[3] = items8;
  items7[2] = callback2(tmp2Result2, obj7);
  obj5[3] = items7;
  obj4[1] = callback2(tmp2Result, obj5);
  return callback(wrapperOffset(channelId[48]).ThemeContextProvider, obj4);
});
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;