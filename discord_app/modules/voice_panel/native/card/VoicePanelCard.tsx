// discord_app/modules/voice_panel/native/card/VoicePanelCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../../_runtime/05587_LinearGradient.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import VoicePanelPIPUtils from "../pip/VoicePanelPIPUtils.tsx";
import VoicePanelUserActionCreators from "../VoicePanelUserActionCreators.tsx";
import computeCardBorderRadiusDefault from "../utils/computeCardBorderRadius.tsx";
import calculateContentCenterOffsetDefault from "../utils/calculateContentCenterOffset.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SoundboardStore from "../../../soundboard/SoundboardStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
function SelfStreamCard(sharedCoords) {
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = sharedTransitionState();
  let stringResult = isFocused;
  const items = [ApplicationStreamingStore];
  const stateFromStores = sharedCoords(isFocused[21]).useStateFromStores(items, () => {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let state;
    if (currentUserActiveStream != null) {
      state = currentUserActiveStream.state;
    }
    return state === constants.PAUSED;
  });
  const items1 = [stream];
  let string = noop.useCallback(() => {
    if (null != stream) {
      const obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
    }
  }, items1);
  let obj = sharedCoords(isFocused[21]);
  const fn = function l() {
    let num = 16;
    if (isFocused) {
      num = 0;
    }
    const obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: null };
    let str = "auto";
    if (!isFocused) {
      str = sharedCoords.get().width;
    }
    obj.width = str;
    return obj;
  };
  fn.__closure = { isFocused, sharedCoords };
  fn.__workletHash = 4561576173627;
  fn.__initData = __initData;
  const animatedStyle = sharedCoords(isFocused[15]).useAnimatedStyle(fn);
  const obj3 = { style: tmp.nonUserRoundedCard, children: null };
  let tmp9 = isFocused;
  let obj2 = sharedCoords(isFocused[15]);
  const tmp7 = stream;
  if (isFocused) {
    const obj4 = { style: tmp.blackBackground };
    tmp9 = closure_22(tmp7(stringResult[24]), obj4);
  }
  const items2 = [tmp9, ,];
  const obj5 = { style: animatedStyle, variant: null, color: "text-overlay-light", children: null };
  let str = "text-sm/semibold";
  if (isFocused) {
    str = "text-lg/semibold";
  }
  obj5.variant = str;
  const intl = tmp2(stringResult[25]).intl;
  const string2 = intl.string;
  const t = tmp2(stringResult[25]).t;
  if (stateFromStores) {
    let string2Result = string2(t["5q17w5"]);
  } else {
    string2Result = string2(t.gMOwov);
  }
  obj5.children = string2Result;
  items2[1] = closure_22(closure_25, obj5);
  if (!isFocused) {
    items2[2] = null;
    obj3.children = items2;
    return styles(tmp8, obj3);
  } else {
    let Text = tmp2(stringResult[16]).Text;
    let obj6 = {
      style: tmp.selfStreamFocusedSubtitle,
      variant: "text-sm/medium",
      color: "text-overlay-light",
      children: null,
    };
    const intl2 = tmp2(stringResult[25]).intl;
    let intl3 = intl2.string;
    let t1 = tmp2(stringResult[25]).t;
    if (stateFromStores) {
      let intl3Result = intl3(t1.LV1NSN);
    } else {
      intl3Result = intl3(t1.dKeLGt);
    }
    t1 = { children: null };
    obj6.children = intl3Result;
    obj6 = [,];
    obj6[0] = closure_22(Text, obj6);
    const obj7 = { size: "lg", variant: "primary-overlay", onPress: string, text: null };
    intl3 = tmp2(stringResult[25]).intl;
    string = intl3.string;
    stringResult = string(tmp2(stringResult[25]).t.CpkXwZ);
    obj7.text = stringResult;
    Text = closure_22(tmp2(stringResult[26]).Button, obj7);
    obj6[1] = Text;
    t1.children = obj6;
    styles(closure_23, t1);
    const tmp11Result = closure_22(Text, obj6);
  }
  tmp8 = stream(isFocused[24]);
}
function SpeakingIndicator(id) {
  id = id.id;
  ({ userId: importDefault, isSelf } = id);
  const speakingOrPlayingSoundboard = id.speakingOrPlayingSoundboard;
  const layout = id.layout;
  let focused;
  focused = focused.useContext(require("VoicePanelStateContext")).focused;
  const context = focused.useContext(require("VoicePanelStateContext"));
  const mode = context.mode;
  closure_129_0 = mode;
  const isDockEnabled = context.isDockEnabled;
  closure_129_1 = isDockEnabled;
  const fn = function t() {
    if (layoutPhysics) {
      if (isRinging.get() === VoicePanelModes.PIP) {
        let PANEL = VoicePanelModes.PANEL;
      }
      return PANEL;
    }
    PANEL = isRinging.get();
  };
  fn.__closure = { isDockEnabled, mode, VoicePanelModes };
  fn.__workletHash = 7246583843780;
  fn.__initData = __initData4;
  const derivedValue = id(isSelf[15]).useDerivedValue(fn);
  const tmp3 = sharedTransitionState();
  const obj = id(isSelf[15]);
  let obj2 = { isDockEnabled, mode, VoicePanelModes };
  const token = id(isSelf[43]).useToken(require("native").modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj3 = id(isSelf[43]);
  const token1 = id(isSelf[43]).useToken(require("native").colors.REDESIGN_INPUT_CONTROL_SELECTED);
  let obj4 = id(isSelf[43]);
  const items = [SoundboardStore];
  const stateFromStores = id(isSelf[21]).useStateFromStores(items, () =>
    SoundboardStore.isUserPlayingSounds(importDefault),
  );
  const obj5 = id(isSelf[21]);
  const fn2 = function h() {
    let tmp = derivedValue.get() !== VoicePanelModes.PIP;
    if (tmp) {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 1;
    if (tmp) {
      num = 0;
    }
    const obj2 = { opacity: num, borderRadius: null };
    let num2 = 0;
    if (!tmp) {
      const obj4 = { id, mode: derivedValue.get(), focused: null, isSelf: null, defaultBorderRadius: null };
      value2 = focused.get();
      let id1;
      if (value2 != null) {
        id1 = value2.id;
      }
      obj4.focused = id1;
      obj4.isSelf = isSelf;
      obj4.defaultBorderRadius = token;
      num2 = computeCardBorderRadiusDefault(obj4);
    }
    let str = "animate-always";
    if (tmp) {
      str = "animate-never";
    }
    obj2.borderRadius = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj2;
  };
  const obj6 = id(isSelf[15]);
  fn2.__closure = {
    mode: derivedValue,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(isSelf[38]).withSpring,
    computeCardBorderRadius: require("computeCardBorderRadius"),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
  };
  fn2.__workletHash = 9045688677044;
  fn2.__initData = __initData7;
  const animatedStyle = obj6.useAnimatedStyle(fn2);
  const obj7 = {
    mode: derivedValue,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(isSelf[38]).withSpring,
    computeCardBorderRadius: require("computeCardBorderRadius"),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
  };
  class S {
    constructor() {
      obj = closure_5;
      tmp = closure_5.get() === VoicePanelModes.PIP;
      if (!tmp) {
        tmp2 = focused;
        value = focused.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp6 = id;
        tmp = id === id;
      }
      tmp8 = closure_2;
      tmp7 = closure_0;
      obj2 = closure_0(closure_2[38]);
      num = 0;
      if (!tmp) {
        tmp9 = closure_1;
        obj1 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        tmp11 = id;
        obj1.id = id;
        tmp10 = closure_1(tmp8[44]);
        obj1.mode = obj.get();
        tmp12 = focused;
        value1 = focused.get();
        tmp14 = null;
        id1 = undefined;
        if (value1 != null) {
          id1 = value1.id;
        }
        obj1.focused = id1;
        tmp16 = isSelf;
        obj1.isSelf = isSelf;
        tmp17 = closure_6;
        obj1.defaultBorderRadius = closure_6;
        num = tmp10(obj1);
      }
      tmp18 = SPEAKING_PHYSICS;
      str = "animate-always";
      str2 = "animate-always";
      if (tmp) {
        str2 = "animate-never";
      }
      obj6 = { borderRadius: obj2.withSpring(num, tmp18, str2), borderWidth: null };
      tmp7Result = tmp7(tmp8[38]);
      num2 = 0;
      if (!tmp) {
        tmp19 = closure_3;
        num2 = 0;
        if (closure_3.get()) {
          tmp20 = closure_1;
          num3 = 5;
          num2 = closure_1(tmp8[45])(5);
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      obj6.borderWidth = tmp7Result.withSpring(num2, tmp18, str);
      return obj6;
    }
  }
  const obj8 = id(isSelf[15]);
  S.__closure = {
    mode: derivedValue,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(isSelf[38]).withSpring,
    computeCardBorderRadius: require("computeCardBorderRadius"),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
    speakingOrPlayingSoundboard,
    roundToNearestPixel: require("roundToNearestPixel"),
    SPEAKING_BORDER_SIZE: 3,
    SPEAKING_INSET: 2,
  };
  S.__workletHash = 3931881669175;
  S.__initData = __initData8;
  const animatedStyle1 = obj8.useAnimatedStyle(S);
  const obj9 = {
    mode: derivedValue,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(isSelf[38]).withSpring,
    computeCardBorderRadius: require("computeCardBorderRadius"),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
    speakingOrPlayingSoundboard,
    roundToNearestPixel: require("roundToNearestPixel"),
    SPEAKING_BORDER_SIZE: 3,
    SPEAKING_INSET: 2,
  };
  const fn3 = function p() {
    let tmp = derivedValue.get() === VoicePanelModes.PIP;
    if (!tmp) {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    if (!tmp) {
      const obj3 = { id, mode: derivedValue.get(), focused: null, isSelf: null, defaultBorderRadius: null };
      value2 = focused.get();
      let id1;
      if (value2 != null) {
        id1 = value2.id;
      }
      obj3.focused = id1;
      obj3.isSelf = isSelf;
      obj3.defaultBorderRadius = token;
      num = computeCardBorderRadiusDefault(obj3);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    const obj4 = { borderRadius: spring.withSpring(num, SPEAKING_PHYSICS, str2), borderWidth: null };
    let num2 = 0;
    if (!tmp) {
      num2 = 0;
      if (speakingOrPlayingSoundboard.get()) {
        num2 = 3;
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj4.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj4;
  };
  const obj10 = id(isSelf[15]);
  fn3.__closure = {
    mode: derivedValue,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(isSelf[38]).withSpring,
    computeCardBorderRadius: require("computeCardBorderRadius"),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
    speakingOrPlayingSoundboard,
    SPEAKING_BORDER_SIZE: 3,
  };
  fn3.__workletHash = 3815529402364;
  fn3.__initData = __initData9;
  const animatedStyle2 = obj10.useAnimatedStyle(fn3);
  const obj12 = { style: tmp3.speakingIndicatorWrapper, layout, pointerEvents: "none", children: null };
  const obj11 = {
    mode: derivedValue,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(isSelf[38]).withSpring,
    computeCardBorderRadius: require("computeCardBorderRadius"),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
    speakingOrPlayingSoundboard,
    SPEAKING_BORDER_SIZE: 3,
  };
  const obj13 = { style: null, children: null };
  const items1 = [tmp3.speakingIndicatorClip, animatedStyle];
  obj13.style = items1;
  const tmp11 = require("ReanimatedNativeView");
  const obj14 = { style: null, layout };
  const items2 = [tmp3.speakingIndicatorUnderlay, animatedStyle1];
  obj14.style = items2;
  const items3 = [closure_22(require("ReanimatedNativeView"), obj14)];
  const items4 = [tmp3.speakingIndicatorBar, ,];
  let tmp15 = null;
  const tmp13 = require("ReanimatedNativeView");
  if (stateFromStores) {
    const obj15 = { borderColor: token1 };
    tmp15 = obj15;
  }
  items4[1] = tmp15;
  items4[2] = animatedStyle2;
  items3[1] = closure_22(require("ReanimatedNativeView"), { style: items4, layout });
  obj13.children = items3;
  obj12.children = styles(tmp13, obj13);
  return closure_22(tmp11, obj12);
}
function AnimatedWrapper(cleanUp) {
  cleanUp = cleanUp.cleanUp;
  const coords = cleanUp.coords;
  let id = cleanUp.id;
  const isRTCConnected = cleanUp.isRTCConnected;
  const isScrollVisible = cleanUp.isScrollVisible;
  const layoutPhysics = cleanUp.layoutPhysics;
  ({ transitionState, sharedVisible } = cleanUp);
  c11 = undefined;
  focused = undefined;
  c13 = undefined;
  pipAvoidanceSpecs = undefined;
  VoicePanelPIPModes = undefined;
  EDGE_GUTTER = undefined;
  windowDimensions = undefined;
  let isSelf;
  let id2;
  CARD_SCALE_PHYSICS = undefined;
  let derivedValue1;
  let derivedValue2;
  let derivedValue3;
  let sharedValue;
  closure_32 = undefined;
  let token;
  let sharedValue1;
  let callback1;
  let sharedValue2;
  const analyticsLocations = coords(id[48])().analyticsLocations;
  const context = isScrollVisible.useContext(coords(id[27]));
  const channelId = context.channelId;
  const connected = context.connected;
  const contentDimensions = context.contentDimensions;
  ({ controlsSpecs: c11, focused } = context);
  ({ hideControls: c13, isDockEnabled, mountedCards, pipAvoidanceSpecs } = context);
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  ({ setFocused: c17, showControls: c18, windowDimensions } = context);
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const pipHandoff = context.pipHandoff;
  const context1 = isScrollVisible.useContext(coords(id[27]));
  const mode = context1.mode;
  closure_129_0 = mode;
  const isDockEnabled2 = context1.isDockEnabled;
  closure_129_1 = isDockEnabled2;
  let tmp3 = sharedValue();
  let fn = function t() {
    if (layoutPhysics) {
      if (isRinging.get() === VoicePanelModes.PIP) {
        let PANEL = VoicePanelModes.PANEL;
      }
      return PANEL;
    }
    PANEL = isRinging.get();
  };
  fn.__closure = { isDockEnabled: isDockEnabled2, mode, VoicePanelModes: focused };
  fn.__workletHash = 7246583843780;
  fn.__initData = __initData4;
  const derivedValue = cleanUp(id[15]).useDerivedValue(fn);
  let obj2 = cleanUp(id[15]);
  const obj3 = { isDockEnabled: isDockEnabled2, mode, VoicePanelModes: focused };
  const pIPState = cleanUp(id[49]).usePIPState();
  const tmp10 = coords(id[50])(id, channelId, context.guildId);
  let obj4 = cleanUp(id[49]);
  let tmp11 = tmp10;
  if (!obj5.isStableParticipantWithUser(tmp10)) {
    tmp11 = closure_50;
  }
  isSelf = tmp11.isSelf;
  id2 = tmp11.user.id;
  let tmp12 = isDockEnabled;
  if (isDockEnabled) {
    tmp12 = !isRTCConnected;
  }
  CARD_SCALE_PHYSICS = tmp12;
  obj5 = cleanUp(id[50]);
  class P {
    constructor() {
      tmp = id === closure_24.id;
      if (tmp) {
        tmp2 = closure_23;
        tmp3 = VoicePanelModes;
        tmp = closure_23.get() === VoicePanelModes.PIP;
      }
      return tmp;
    }
  }
  P.__closure = { id, pipState: pIPState, mode: derivedValue, VoicePanelModes: focused };
  P.__workletHash = 11414437284931;
  P.__initData = __initData14;
  derivedValue1 = cleanUp(id[15]).useDerivedValue(P);
  const tmp6Result = cleanUp(id[15]);
  class I {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === id) {
        tmp5 = scrollPosition;
        num = scrollPosition.get();
      } else {
        tmp3 = closure_23;
        tmp4 = VoicePanelModes;
        num = 0;
      }
      return num;
    }
  }
  I.__closure = { focused, id, mode: derivedValue, VoicePanelModes: focused, scrollPosition };
  I.__workletHash = 14557336011446;
  I.__initData = __initData15;
  derivedValue2 = cleanUp(id[15]).useDerivedValue(I);
  const tmp6Result13 = cleanUp(id[15]);
  class C {
    constructor() {
      if (connected.get()) {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = EDGE_GUTTER;
        tmp5 = safeArea;
        tmp6 = windowDimensions;
        tmp7 = contentDimensions;
        num2 = 2;
        bound = Math.max(
          EDGE_GUTTER,
          safeArea.get().left,
          (windowDimensions.get().width - contentDimensions.get().width) / 2,
        );
      } else {
        tmp = wrapperDimensions;
        num = 2;
        bound = wrapperDimensions.get().drawerWidth / 2;
      }
      return bound;
    }
  }
  C.__closure = { connected, EDGE_GUTTER, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  C.__workletHash = 3478345331807;
  C.__initData = __initData16;
  derivedValue3 = cleanUp(id[15]).useDerivedValue(C);
  closure_130_0 = id;
  closure_130_1 = tmp10;
  closure_130_2 = transitionState;
  closure_130_3 = cleanUp;
  closure_130_4 = derivedValue;
  closure_130_5 = focused;
  closure_130_6 = isScrollVisible;
  closure_130_7 = sharedVisible;
  closure_130_10 = undefined;
  let obj6 = { connected, EDGE_GUTTER, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  const tmp6Result14 = cleanUp(id[15]);
  sharedValue = cleanUp(id[15]).useSharedValue(transitionState);
  closure_130_8 = sharedValue;
  const tmp17 = isRTCConnected(isScrollVisible.useState(true), 2);
  closure_130_9 = tmp17[1];
  let type;
  if (tmp10 != null) {
    type = tmp10.type;
  }
  let items = [type, id];
  const callback = obj.useCallback((arg0) => {
    let type;
    if (coords != null) {
      type = coords.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      connected(arg0 !== cleanUp);
    }
  }, items);
  closure_130_10 = callback;
  const tmp6Result15 = cleanUp(id[15]);
  class P {
    constructor() {
      value = layoutPhysics.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  P.__closure = { focused };
  P.__workletHash = 8287576325827;
  P.__initData = __initData10;
  const fn2 = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(contentDimensions)(arg0);
    }
  };
  const tmp6Result16 = cleanUp(id[15]);
  fn2.__closure = { runOnJS: cleanUp(id[15]).runOnJS, handleFocusedParticipantChange: callback };
  fn2.__workletHash = 8776674066892;
  fn2.__initData = __initData11;
  const animatedReaction = tmp6Result16.useAnimatedReaction(P, fn2);
  let obj7 = { runOnJS: cleanUp(id[15]).runOnJS, handleFocusedParticipantChange: callback };
  class C {
    constructor() {
      obj = { mode: isScrollVisible.get(), focused: layoutPhysics.get(), transitionState: channelId.get() };
      return obj;
    }
  }
  C.__closure = { mode: derivedValue, focused, sharedTransitionState: sharedValue };
  C.__workletHash = 14556077326932;
  C.__initData = __initData12;
  class I {
    constructor(arg0, arg1) {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[46]);
      tmp3 = arg1;
      if (!obj.cheapWorkletShallowEqual(cleanUp, tmp3)) {
        ({ focused, transitionState } = cleanUp);
        tmp4 = VoicePanelModes;
        if (focused != null) {
          id = focused.id;
        }
        if (null == arg1) {
          if (transitionState !== tmp(tmp2[47]).TransitionStates.YEETED) {
            tmp19 = analyticsLocations;
            num7 = 1;
            result = analyticsLocations.set(1);
          }
        }
        if (transitionState === tmp(tmp2[47]).TransitionStates.YEETED) {
          obj2 = analyticsLocations;
          num5 = 1;
          if (1 === analyticsLocations.get()) {
            tmp15 = sharedVisible;
            if (sharedVisible.get()) {
              num6 = 0;
              result1 = obj2.set(0);
            }
          }
          tmpResult = tmp(tmp2[15]);
          tmp16 = isRTCConnected;
          tmp17 = tmpResult.runOnJS(isRTCConnected)();
        } else {
          transitionState1 = undefined;
          if (arg1 != null) {
            transitionState1 = arg1.transitionState;
          }
          if (transitionState1 === tmp(tmp2[47]).TransitionStates.YEETED) {
            tmp13 = analyticsLocations;
            num4 = 1;
            result2 = analyticsLocations.set(1);
          } else if (cleanUp.mode !== VoicePanelModes.PIP) {
            if (null == id) {
              tmp11 = analyticsLocations;
              num3 = 1;
              result3 = analyticsLocations.set(1);
            } else {
              tmp6 = cleanUp;
              if (id !== cleanUp) {
                tmp9 = analyticsLocations;
                num2 = 0;
                result4 = analyticsLocations.set(0);
              } else {
                tmp7 = analyticsLocations;
                num = 1;
                result5 = analyticsLocations.set(1);
              }
            }
          }
        }
      }
      return;
    }
  }
  const tmp6Result17 = cleanUp(id[15]);
  I.__closure = {
    cheapWorkletShallowEqual: cleanUp(id[46]).cheapWorkletShallowEqual,
    VoicePanelModes: focused,
    TransitionStates: cleanUp(id[47]).TransitionStates,
    sharedVisible,
    isScrollVisible,
    runOnJS: cleanUp(id[15]).runOnJS,
    cleanUp,
    id,
  };
  I.__workletHash = 35144955681;
  I.__initData = __initData13;
  const animatedReaction1 = tmp6Result17.useAnimatedReaction(C, I);
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = channelId.set(id);
  });
  let tmp23 = !isDockEnabled;
  if (!isDockEnabled) {
    tmp23 = pIPState.mode === VoicePanelPIPModes.IN_APP;
  }
  closure_32 = tmp23;
  const obj8 = {
    cheapWorkletShallowEqual: cleanUp(id[46]).cheapWorkletShallowEqual,
    VoicePanelModes: focused,
    TransitionStates: cleanUp(id[47]).TransitionStates,
    sharedVisible,
    isScrollVisible,
    runOnJS: cleanUp(id[15]).runOnJS,
    cleanUp,
    id,
  };
  token = cleanUp(id[43]).useToken(tmp(tmp2[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp6Result18 = cleanUp(id[43]);
  class E {
    constructor() {
      value = coords.get();
      ({ zIndex, width, height, x, y } = value);
      obj = focused;
      value1 = focused.get();
      id = undefined;
      if (value1 != null) {
        id = value1.id;
      }
      tmp4 = id;
      tmp5 = id === id;
      if (closure_32) {
        tmp9 = closure_24;
        scale = closure_24.scale;
        value2 = scale.get();
        result = closure_24.width * value2;
        height2 = closure_24.height * value2;
        tmp12 = closure_0;
        tmp13 = closure_2;
        obj2 = closure_0(closure_2[51]);
        obj1 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
        ({
          height: obj3.height,
          containerHeight: obj3.containerHeight,
          showSecondaryPIP: obj3.showSecondaryPIP,
        } = closure_24);
        obj1.scale = value2;
        tmp15 = closure_0;
        tmp16 = closure_2;
        scaledPIPContainerHeight = obj2.getScaledPIPContainerHeight(obj1);
        obj4 = closure_0(closure_2[51]);
        size = {
          pipX: null,
          pipY: null,
          width: null,
          height: null,
          windowDimensions: null,
          safeArea: null,
          bottomAvoidanceRegion: null,
          topAvoidanceRegion: null,
        };
        tmp17 = wrapperDimensions;
        size.pipX = wrapperDimensions.get().pipX;
        size.pipY = wrapperDimensions.get().pipY;
        size.width = result;
        size.height = scaledPIPContainerHeight;
        tmp18 = windowDimensions;
        size.windowDimensions = windowDimensions.get();
        tmp19 = safeArea;
        size.safeArea = safeArea.get();
        tmp20 = pipAvoidanceSpecs;
        size.bottomAvoidanceRegion = pipAvoidanceSpecs.get().bottom;
        size.topAvoidanceRegion = pipAvoidanceSpecs.get().top;
        point = obj4.getClampedPIPPosition(size);
        num = point.x;
        tmp21 = closure_29;
        sum = closure_29.get() + point.y;
        width2 = result;
        num2 = zIndex;
      } else if (null != obj.get()) {
        sum = y;
        num = x;
        height2 = height;
        width2 = width;
        num2 = 0;
        if (tmp5) {
          tmp7 = windowDimensions;
          width2 = windowDimensions.get().width;
          height2 = windowDimensions.get().height;
          tmp8 = closure_29;
          sum = closure_29.get();
          num2 = 1;
          num = 0;
        }
      } else {
        tmp42 = closure_30;
        sum1 = x + closure_30.get();
        tmp44 = closure_1;
        tmp45 = closure_2;
        obj20 = { contentHeight: null, windowHeight: null, safeArea: null };
        tmp47 = contentDimensions;
        tmp46 = closure_1(closure_2[52]);
        obj20.contentHeight = contentDimensions.get().height;
        tmp48 = windowDimensions;
        obj20.windowHeight = windowDimensions.get().height;
        tmp49 = safeArea;
        obj20.safeArea = safeArea.get();
        sum2 = y + tmp46(obj20);
        tmp51 = closure_31;
        tmp53 = closure_0;
        tmp54 = closure_2;
        value3 = closure_31.get();
        sum = sum2;
        num = sum1;
        height2 = height;
        width2 = width;
        num2 = zIndex;
        if (value3 === closure_0(closure_2[47]).TransitionStates.YEETED) {
          num8 = 4;
          sum = sum2 + height / 4;
          num = sum1;
          height2 = height;
          width2 = width;
          num2 = zIndex;
        }
      }
      obj6 = closure_28;
      if (closure_28.get()) {
        num2 = 9001;
      }
      obj21 = { id: tmp4, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      tmp22 = closure_1(closure_2[44]);
      obj21.mode = closure_23.get();
      value4 = obj.get();
      id1 = undefined;
      if (value4 != null) {
        id1 = value4.id;
      }
      obj21.focused = id1;
      obj21.isSelf = isSelf;
      obj21.defaultBorderRadius = closure_33;
      obj8 = sharedVisible;
      tmp22Result = tmp22(obj21);
      if (0 !== sharedVisible.get()) {
        num4 = 1;
        num5 = 1;
        if (!tmp5) {
          tmp28 = isRTCConnected;
          num5 = 1;
          if (!isRTCConnected) {
            num5 = c30;
          }
        }
        num3 = num5;
      } else {
        value5 = obj.get();
        id2 = undefined;
        if (value5 != null) {
          id2 = value5.id;
        }
        num3 = 0;
      }
      gestureActive = wrapperOffset.get().gestureActive;
      if (1 === obj8.get()) {
        num6 = 1;
      } else {
        value6 = obj.get();
        id3 = undefined;
        if (value6 != null) {
          id3 = value6.id;
        }
        num6 = 0.8;
      }
      obj9 = closure_0(closure_2[15]);
      num7 = 100;
      if (obj6.get()) {
        num7 = 0;
      }
      size1 = { zIndex: null, opacity: null, width: null, height: null, transform: null, borderRadius: null };
      obj11 = closure_0(closure_2[37]);
      size1.zIndex = obj9.withDelay(num7, obj11.withTiming(num2, closure_29));
      obj12 = closure_0(closure_2[37]);
      tmp31 = closure_28;
      str = "animate-never";
      if (isScrollVisible.get()) {
        str = "animate-always";
      }
      fn = function y(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = 0 === sharedVisible.get();
        }
        if (tmp) {
          value = sharedValue.get();
          tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
        }
        if (tmp) {
          cleanUp(id[15]).runOnJS(closure_1_0)();
          const obj = cleanUp(id[15]);
        }
      };
      obj22 = {
        sharedVisible: obj8,
        sharedTransitionState: closure_31,
        TransitionStates: closure_0(closure_2[47]).TransitionStates,
        runOnJS: closure_0(closure_2[15]).runOnJS,
        cleanUp,
      };
      fn.__closure = obj22;
      fn.__workletHash = 10367413568732;
      fn.__initData = closure_56;
      size1.opacity = obj12.withTiming(num3, tmp31, str, fn);
      size1.width = width2;
      size1.height = height2;
      withSpringResult = num;
      if (!gestureActive) {
        tmp33 = closure_27;
        withSpringResult = num;
        if (!closure_27) {
          tmp34 = closure_0;
          tmp35 = closure_2;
          obj14 = closure_0(closure_2[38]);
          tmp36 = layoutPhysics;
          str2 = "respect-motion-settings";
          withSpringResult = obj14.withSpring(num, layoutPhysics, "respect-motion-settings");
        }
      }
      items = [, ,];
      items[0] = { translateX: withSpringResult };
      withSpringResult1 = sum;
      if (!gestureActive) {
        tmp38 = closure_27;
        withSpringResult1 = sum;
        if (!closure_27) {
          tmp39 = closure_0;
          tmp40 = closure_2;
          obj15 = closure_0(closure_2[38]);
          tmp41 = layoutPhysics;
          str3 = "respect-motion-settings";
          withSpringResult1 = obj15.withSpring(sum, layoutPhysics, "respect-motion-settings");
        }
      }
      items[1] = { translateY: withSpringResult1 };
      obj23 = { scale: null };
      obj17 = closure_0(closure_2[38]);
      obj23.scale = obj17.withSpring(num6, closure_27);
      items[2] = obj23;
      size1.transform = items;
      obj18 = closure_0(closure_2[38]);
      size1.borderRadius = obj18.withSpring(tmp22Result, SCALE_PHYSICS);
      return size1;
    }
  }
  const tmp6Result19 = cleanUp(id[15]);
  E.__closure = {
    coords,
    focused,
    id,
    isPIP: tmp23,
    pipState: pIPState,
    getScaledPIPContainerHeight: cleanUp(id[51]).getScaledPIPContainerHeight,
    getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition,
    wrapperDimensions,
    windowDimensions,
    safeArea,
    pipAvoidanceSpecs,
    derivedScrollValue: derivedValue2,
    xOffset: derivedValue3,
    calculateContentCenterOffset: coords(id[52]),
    contentDimensions,
    sharedTransitionState: sharedValue,
    TransitionStates: cleanUp(id[47]).TransitionStates,
    zIndexOverride: derivedValue1,
    computeCardBorderRadius: coords(id[44]),
    mode: derivedValue,
    isSelf,
    defaultBorderRadius: token,
    sharedVisible,
    isRTCConnected,
    CONNECTING_OPACITY: derivedValue3,
    wrapperOffset,
    withDelay: cleanUp(id[15]).withDelay,
    withTiming: cleanUp(id[37]).withTiming,
    ZINDEX_TIMING: derivedValue2,
    OPACITY_TIMING: derivedValue1,
    isScrollVisible,
    runOnJS: cleanUp(id[15]).runOnJS,
    cleanUp,
    holdPosition: tmp12,
    withSpring: cleanUp(id[38]).withSpring,
    layoutPhysics,
    CARD_SCALE_PHYSICS,
    SCALE_PHYSICS: wrapperOffset,
  };
  E.__workletHash = 2158171222755;
  E.__initData = __initData17;
  const animatedStyle = tmp6Result19.useAnimatedStyle(E);
  let obj10 = {
    gesturesEnabled: tmp17[0],
    onSingleTap() {
      if (_undefined.get().mode === VoicePanelControlsModes.HIDDEN) {
        _undefined4({ debounce: true });
      } else {
        _undefined2({ debounce: true });
      }
    },
    onDoubleTap: null,
    onLongPress: null,
  };
  let obj9 = {
    coords,
    focused,
    id,
    isPIP: tmp23,
    pipState: pIPState,
    getScaledPIPContainerHeight: cleanUp(id[51]).getScaledPIPContainerHeight,
    getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition,
    wrapperDimensions,
    windowDimensions,
    safeArea,
    pipAvoidanceSpecs,
    derivedScrollValue: derivedValue2,
    xOffset: derivedValue3,
    calculateContentCenterOffset: coords(id[52]),
    contentDimensions,
    sharedTransitionState: sharedValue,
    TransitionStates: cleanUp(id[47]).TransitionStates,
    zIndexOverride: derivedValue1,
    computeCardBorderRadius: coords(id[44]),
    mode: derivedValue,
    isSelf,
    defaultBorderRadius: token,
    sharedVisible,
    isRTCConnected,
    CONNECTING_OPACITY: derivedValue3,
    wrapperOffset,
    withDelay: cleanUp(id[15]).withDelay,
    withTiming: cleanUp(id[37]).withTiming,
    ZINDEX_TIMING: derivedValue2,
    OPACITY_TIMING: derivedValue1,
    isScrollVisible,
    runOnJS: cleanUp(id[15]).runOnJS,
    cleanUp,
    holdPosition: tmp12,
    withSpring: cleanUp(id[38]).withSpring,
    layoutPhysics,
    CARD_SCALE_PHYSICS,
    SCALE_PHYSICS: wrapperOffset,
  };
  let tmpResult = coords(id[53]);
  if (tmp6Result20.isStableActivityParticipant(tmp10)) {
    const fn3 = () => {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id !== id) {
        _undefined3(tmp3);
      } else {
        _undefined3(null);
      }
    };
  } else if (isSelf) {
    const tmp6Result21 = tmp6(tmp2[50]);
  }
  obj10.onDoubleTap = fn3;
  let fn4;
  if (null != id2) {
    fn4 = () =>
      showUserProfileActionSheetDefault({
        userId: id2,
        channelId,
        isVoiceContext: true,
        sourceAnalyticsLocations: analyticsLocations,
      });
  }
  obj10.onLongPress = fn4;
  const items1 = [pipHandoff, id, tmp23];
  tmp6Result20 = cleanUp(id[50]);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_32);
  }, items1);
  const items2 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items2);
  const tmpResultResult = tmpResult(obj10);
  sharedValue1 = cleanUp(id[15]).useSharedValue(0);
  const items3 = [pipHandoff, id];
  callback1 = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items3);
  const items4 = [tmp23, layoutPhysics, sharedValue1, callback1];
  const effect1 = obj.useEffect(() => {
    if (closure_32) {
      const result = sharedValue1.set(0);
      let obj = spring;
      const fn = function t(arg0) {
        if (true === arg0) {
          cleanUp(id[15]).runOnJS(callback1)();
          const obj = cleanUp(id[15]);
        }
      };
      const obj2 = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival: callback1 };
      fn.__closure = obj2;
      fn.__workletHash = 11713677248803;
      fn.__initData = __initData2;
      const result1 = sharedValue1.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
      return () => cleanUp(id[15]).cancelAnimation(sharedValue1);
    }
  }, items4);
  const tmp6Result22 = cleanUp(id[15]);
  let scale = pIPState.scale;
  sharedValue2 = cleanUp(id[15]).useSharedValue(scale.get());
  class Oe {
    constructor(arg0) {
      scale = closure_24.scale;
      value = scale.get();
      result = value / closure_36.get();
      size = {
        originX: cleanUp.currentOriginX,
        originY: cleanUp.currentOriginY,
        width: cleanUp.currentWidth * result,
        height: cleanUp.currentHeight * result,
      };
      str = "respect-motion-settings";
      if (closure_27) {
        str = "animate-never";
      }
      obj1 = { animations: null, initialValues: null, callback: null };
      size1 = { originX: null, originY: null, width: null, height: null };
      obj4 = closure_0(closure_2[38]);
      size1.originX = obj4.withSpring(cleanUp.targetOriginX, layoutPhysics, str);
      obj5 = closure_0(closure_2[38]);
      size1.originY = obj5.withSpring(cleanUp.targetOriginY, layoutPhysics, str);
      obj6 = closure_0(closure_2[38]);
      size1.width = obj6.withSpring(cleanUp.targetWidth, layoutPhysics, str);
      obj7 = closure_0(closure_2[38]);
      size1.height = obj7.withSpring(cleanUp.targetHeight, layoutPhysics, str);
      obj1.animations = size1;
      obj1.initialValues = size;
      obj1.callback = function callback() {
        value = wrapperOffset.get();
        let gestureActive = value.gestureActive;
        if (!gestureActive) {
          gestureActive = 0 === value.y;
        }
        if (!gestureActive) {
          const result = wrapperOffset.set({ gestureActive: false, x: 0, y: 0 });
        }
        scale = scale.scale;
        const result1 = sharedValue2.set(scale.get());
      };
      return obj1;
    }
  }
  const tmp6Result23 = cleanUp(id[15]);
  Oe.__closure = {
    pipState: pIPState,
    lastPIPScale: sharedValue2,
    holdPosition: tmp12,
    withSpring: cleanUp(id[38]).withSpring,
    layoutPhysics,
    wrapperOffset,
  };
  Oe.__workletHash = 10427322198811;
  Oe.__initData = __initData19;
  const items5 = [tmp12, layoutPhysics, wrapperOffset, sharedValue2, pIPState.scale];
  const callback2 = obj.useCallback(Oe, items5);
  let obj12 = { gesture: tmpResultResult, children: null };
  let obj13 = { nativeID: null, style: null, layout: null, children: null };
  let obj11 = {
    pipState: pIPState,
    lastPIPScale: sharedValue2,
    holdPosition: tmp12,
    withSpring: cleanUp(id[38]).withSpring,
    layoutPhysics,
    wrapperOffset,
  };
  const tmpResult2 = coords(id[42]);
  obj13.nativeID = cleanUp(id[56]).getExternalPipTileNativeId("card", id);
  const items6 = [tmp3.positionWrapper, animatedStyle];
  obj13.style = items6;
  obj13.layout = callback2;
  obj13.children = cleanUp.children;
  obj12.children = pipHandoff(tmpResult2, obj13);
  return pipHandoff(cleanUp(id[55]).GestureDetector, obj12);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const Pressable = get_ActivityIndicator.Pressable;
const VoicePanelConstants = fn(11223);
({
  VoicePanelCTACard: closure_11,
  VoicePanelModes: closure_12,
  MODE_CHANGE_PHYSICS: map1,
  SPEAKING_PHYSICS: closure_14,
  VoicePanelCardItemType: closure_15,
} = VoicePanelConstants);
const VoicePanelControlsModes = fn(11221).VoicePanelControlsModes;
let VoicePanelPIPModes = fn(19108).VoicePanelPIPModes;
let EDGE_GUTTER = fn(11226).EDGE_GUTTER;
const ApplicationStreamStates = fn(1072).ApplicationStreamStates;
const ParticipantTypes = fn(5681).ParticipantTypes;
const SCALE_PHYSICS = fn(11224).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_22, Fragment: closure_23, jsxs: closure_24 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_25 = ReanimatedRexport.createAnimatedComponent(fn(5624).Text);
let ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const tmp5 = fn(1187).AVATAR_SIZE_MAP[fn(undefined, 1187).AvatarSizes.XXLARGE];
let obj = {};
let merged = Object.assign(SCALE_PHYSICS);
obj.stiffness = 150;
let closure_28 = { duration: 200 };
let closure_29 = { duration: 0 };
let c30 = 0.75;
const createStyles = fn(5014);
let obj2 = {
  positionWrapper: null,
  userRoundedCard: null,
  userRoundedCardContent: null,
  nonUserRoundedCard: null,
  blackBackground: null,
  selfStreamFocusedSubtitle: null,
  avatarImageMaskStyles: null,
  avatarPlaceholder: null,
  image: null,
  speakingIndicatorWrapper: null,
  speakingIndicatorClip: null,
  speakingIndicatorUnderlay: null,
  speakingIndicatorBar: null,
};
const rect = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj2.positionWrapper = rect;
obj2.userRoundedCard = { position: "absolute", top: -4, left: -4, bottom: -4, right: -4 };
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.backgroundColor = nativeDefault.unsafe_rawColors.PRIMARY_800;
obj2.userRoundedCardContent = obj3;
let size = {
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
};
obj2.nonUserRoundedCard = size;
let obj4 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = "black";
obj2.blackBackground = obj4;
obj2.selfStreamFocusedSubtitle = { textAlign: "center", marginTop: 4, marginBottom: 40 };
obj2.avatarImageMaskStyles = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let size1 = { width: tmp5, height: tmp5, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj2.avatarPlaceholder = size1;
obj2.image = { maxWidth: 80, maxHeight: 80 };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2.speakingIndicatorWrapper = {};
let obj8 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj8.overflow = "hidden";
obj2.speakingIndicatorClip = obj8;
let obj9 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9.borderColor = nativeDefault.colors.BLACK;
obj2.speakingIndicatorUnderlay = obj9;
let obj10 = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
obj10.borderColor = nativeDefault.colors.STATUS_SPEAKING;
obj2.speakingIndicatorBar = obj10;
const sharedTransitionState = createStyles.createStyles(obj2);
const __initData = {
  code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}",
};
const __initData2 = {
  code: "function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}",
};
const __initData3 = {
  code: "function VoicePanelCardTsx3(isFocused,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused!==lastIsFocused){runOnJS(setIsFocused)(isFocused);}}",
};
let closure_36 = noop.memo(function AnimatedStreamCard(id) {
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ sharedCoords, layout } = id);
  let setFocused;
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[27]));
  const focused = context.focused;
  setFocused = context.setFocused;
  const items = [ApplicationStreamingStore];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = id(streamGuildId[21]).useStateFromStoresObject(
    items,
    () => ({
      stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId),
      activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId),
    }),
    items1,
  );
  const stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = setFocused.useCallback(() => {
    if (null != stream) {
      StreamActionCreators.watchStream(stream, { forceMultiple: true });
      setFocused(StreamKeyUtils.encodeStreamKey(stream));
    }
  }, items2);
  let obj = id(streamGuildId[21]);
  [tmp8, tmp9] = focused(setFocused.useState(false), 2);
  c6 = tmp9;
  const tmp7 = focused(setFocused.useState(false), 2);
  class C {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  C.__closure = { focused, id };
  C.__workletHash = 13061544667904;
  C.__initData = __initData2;
  class I {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(id);
      }
      return;
    }
  }
  let obj2 = id(streamGuildId[15]);
  I.__closure = { runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp9 };
  I.__workletHash = 8824446489251;
  I.__initData = __initData3;
  const animatedReaction = obj2.useAnimatedReaction(C, I);
  const obj3 = { runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp9 };
  const tmp11Result = userId(streamGuildId[28])(id(streamGuildId[29]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj4 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_22(SelfStreamCard, obj4);
  } else if (null == activeStream) {
    const obj5 = { mode: context.mode, stream, onPress: callback, disabled: false, layout };
    return closure_22(tmp4(streamGuildId[30]).VoicePanelStreamPreview, obj5);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj6 = {
            stream: activeStream,
            removeSplashImage: !tmp8,
            type: tmp4(streamGuildId[31]).VideoEmptyTypes.STREAM_ENDED,
            style: stream.absoluteFill,
          };
          return closure_22(tmp(streamGuildId[31]), obj6);
        } else {
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj7 = { title: null };
            const intl = tmp4(streamGuildId[25]).intl;
            obj7.title = intl.string(tmp4(streamGuildId[25]).t["pdFFK+"]);
            let tmp15 = closure_22(tmp4(streamGuildId[32]).StreamTextOverlay, obj7);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj8 = { title: null, subtext: null };
              const intl2 = tmp4(streamGuildId[25]).intl;
              obj8.title = intl2.string(tmp4(streamGuildId[25]).t["5q17w5"]);
              const intl3 = tmp4(streamGuildId[25]).intl;
              const obj9 = { username: userNick };
              obj8.subtext = intl3.formatToPlainString(tmp4(streamGuildId[25]).t.meVVlb, obj9);
              tmp15 = closure_22(tmp4(streamGuildId[32]).StreamTextOverlay, obj8);
            }
          }
          const obj10 = {
            layout,
            id,
            streamId: null,
            userId: null,
            streamKey: null,
            isScrollVisible: null,
            videoSpinnerContext: null,
            sharedCoords: null,
            isCamera: false,
            paused: null,
          };
          if (streamId == null) {
            streamId = null;
          }
          const obj11 = { children: null };
          obj10.streamId = streamId;
          obj10.userId = userId;
          const tmpResult3 = tmp(streamGuildId[33]);
          obj10.streamKey = tmp4(streamGuildId[23]).encodeStreamKey(activeStream);
          obj10.isScrollVisible = isScrollVisible;
          obj10.videoSpinnerContext = tmp4(streamGuildId[34]).VideoSpinnerContext.REMOTE_STREAM;
          obj10.sharedCoords = sharedCoords;
          obj10.paused = activeStream.state === ApplicationStreamStates.PAUSED;
          const items3 = [closure_22(tmpResult3, obj10), tmp15];
          obj11.children = items3;
          return styles(closure_23, obj11);
        }
      }
    }
    const obj12 = {
      avError: tmp11Result,
      stream: activeStream,
      removeSplashImage: !tmp8,
      type: tmp4(streamGuildId[31]).VideoEmptyTypes.STREAM_FAILED,
      style: stream.absoluteFill,
    };
    return closure_22(tmp(streamGuildId[31]), obj12);
  }
  const tmp11 = userId(streamGuildId[28]);
});
const __initData4 = {
  code: "function VoicePanelCardTsx4(){const{isDockEnabled,mode,VoicePanelModes}=this.__closure;return isDockEnabled&&mode.get()===VoicePanelModes.PIP?VoicePanelModes.PANEL:mode.get();}",
};
const __initData5 = {
  code: "function VoicePanelCardTsx5(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}",
};
const __initData6 = {
  code: "function VoicePanelCardTsx6(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}",
};
let closure_40 = noop.memo(function AnimatedUserCardInner(isRinging) {
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  const userId = isRinging.userId;
  const guildId = isRinging.guildId;
  const channelId = isRinging.channelId;
  backgroundColor = undefined;
  const tmp = sharedTransitionState();
  const controlsSpecs = channelId.useContext(layoutPhysics(userId[27])).controlsSpecs;
  const context = channelId.useContext(layoutPhysics(userId[27]));
  const mode = context.mode;
  closure_129_0 = mode;
  const isDockEnabled = context.isDockEnabled;
  closure_129_1 = isDockEnabled;
  const fn = function t() {
    if (layoutPhysics) {
      if (isRinging.get() === VoicePanelModes.PIP) {
        let PANEL = VoicePanelModes.PANEL;
      }
      return PANEL;
    }
    PANEL = isRinging.get();
  };
  fn.__closure = { isDockEnabled, mode, VoicePanelModes };
  fn.__workletHash = 7246583843780;
  fn.__initData = __initData4;
  const derivedValue = isRinging(userId[15]).useDerivedValue(fn);
  let obj = channelId;
  let obj2 = isRinging(userId[15]);
  ({ gradientStops, backgroundColor } = layoutPhysics(userId[35])({
    userId,
    guildId,
    avatarURI,
    location: "VoicePanelCard-native",
  }));
  const MobileRequestToStreamExperiment = isRinging(userId[36]).MobileRequestToStreamExperiment;
  let guildId2 = guildId;
  if (guildId == null) {
    guildId2 = "";
  }
  const tmp8 = layoutPhysics(userId[35])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" });
  class P {
    constructor() {
      obj = closure_0(closure_2[37]);
      num = 1;
      if (isRinging) {
        num = c30;
      }
      obj1 = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor };
      return obj1;
    }
  }
  const tmp5Result = isRinging(userId[15]);
  P.__closure = { withTiming: isRinging(userId[37]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor };
  P.__workletHash = 10129795862716;
  P.__initData = __initData5;
  const animatedStyle = tmp5Result.useAnimatedStyle(P);
  const obj3 = { withTiming: isRinging(userId[37]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor };
  class I {
    constructor() {
      obj = closure_0(closure_2[38]);
      num = 1;
      if (closure_6.get() === VoicePanelModes.PIP) {
        num = 0.8;
      }
      obj1 = { transform: null };
      obj4 = { scale: obj.withSpring(num, layoutPhysics) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const tmp5Result3 = isRinging(userId[15]);
  I.__closure = { withSpring: isRinging(userId[38]).withSpring, mode: derivedValue, VoicePanelModes, layoutPhysics };
  I.__workletHash = 5893936613267;
  I.__initData = __initData6;
  let cachedSourceFromURI;
  const animatedStyle1 = tmp5Result3.useAnimatedStyle(I);
  if (null != avatarURI) {
    cachedSourceFromURI = tmp5(tmp3[39]).getCachedSourceFromURI(avatarURI);
    const tmp5Result4 = tmp5(tmp3[39]);
  }
  let items = [guildId, channelId, userId, controlsSpecs];
  const callback = obj.useCallback(() => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = null != channelId;
    }
    if (tmp2) {
      tmp2 = null != userId;
    }
    if (tmp2) {
      tmp2 = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
    }
    if (tmp2) {
      const result = VoicePanelUserActionCreators.openVoicePanelUserActionSheet(guildId, channelId, userId);
    }
  }, items);
  if (null != avatarDecoration) {
    const obj5 = { source: cachedSourceFromURI, size: tmp5(tmp3[18]).AvatarSizes.XXLARGE, avatarDecoration };
    let tmp13Result = closure_22(tmp5(tmp3[18]).Avatar, obj5);
    let tmp17 = closure_22;
  } else {
    const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
    tmp13Result = closure_22(layoutPhysics(tmp3[41]), size);
    tmp17 = closure_22;
    const tmp2Result = layoutPhysics(tmp3[41]);
  }
  const obj6 = { style: tmp.userRoundedCard, layout, children: null };
  const obj4 = { withSpring: isRinging(userId[38]).withSpring, mode: derivedValue, VoicePanelModes, layoutPhysics };
  const obj7 = { style: null, children: null };
  const items1 = [tmp.userRoundedCardContent, animatedStyle];
  obj7.style = items1;
  let tmp17Result = null;
  const tmp2Result5 = layoutPhysics(userId[42]);
  if (null != gradientStops) {
    const obj8 = {
      colors: gradientStops,
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      style: controlsSpecs.absoluteFill,
      layout,
      pointerEvents: "none",
    };
    tmp17Result = tmp17(LinearGradient, obj8);
  }
  const items2 = [tmp17Result];
  if (null == cachedSourceFromURI) {
    const obj9 = { style: tmp.avatarPlaceholder };
    let tmp17Result3 = tmp17(layoutPhysics(tmp3[24]), obj9);
  } else {
    const obj10 = { layout, children: null };
    let prop;
    const tmp2Result7 = layoutPhysics(tmp3[42]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj11 = { style: null, children: null };
    const items3 = [prop, animatedStyle1];
    obj11.style = items3;
    let tmp17Result4 = tmp13Result;
    if (MobileRequestToStreamExperiment.useConfig({ guildId: guildId2, location: "VoicePanelCard" }).enabled) {
      const obj12 = { onPress: callback, children: tmp13Result };
      tmp17Result4 = tmp17(derivedValue, obj12);
    }
    obj11.children = tmp17Result4;
    obj10.children = tmp17(layoutPhysics(tmp3[42]), obj11);
    tmp17Result3 = tmp17(tmp2Result7, obj10);
    const tmp2Result8 = layoutPhysics(tmp3[42]);
  }
  items2[1] = tmp17Result3;
  obj7.children = items2;
  obj6.children = styles(layoutPhysics(userId[42]), obj7);
  return tmp17(tmp2Result5, obj6);
});
const __initData7 = {
  code: "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
const __initData8 = {
  code: "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
const __initData9 = {
  code: "function VoicePanelCardTsx9(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
let closure_45 = noop.memo(function LazySpeakingIndicator(id) {
  const tmp = id(
    noop.useState(() => {
      let isSpeakingResult = SpeakingStore.isSpeaking(id.id);
      if (!isSpeakingResult) {
        isSpeakingResult = SoundboardStore.isUserPlayingSounds(id.id);
      }
      return isSpeakingResult;
    }),
    2,
  );
  const first = tmp[0];
  closure_2 = tmp[1];
  id = id.id;
  const items = [first, id];
  const effect = noop.useEffect(() => {
    if (!first) {
      const result = SpeakingStore.addConditionalChangeListener(() => {
        const isSpeakingResult = speaking.isSpeaking(id);
        let flag = !isSpeakingResult;
        if (isSpeakingResult) {
          closure_1_2(true);
          flag = false;
        }
        return flag;
      }, false);
      const result1 = SoundboardStore.addConditionalChangeListener(() => {
        const isUserPlayingSoundsResult = userPlayingSounds.isUserPlayingSounds(id);
        let flag = !isUserPlayingSoundsResult;
        if (isUserPlayingSoundsResult) {
          closure_1_2(true);
          flag = false;
        }
        return flag;
      }, false);
    }
  }, items);
  let tmp4 = null;
  if (first) {
    const obj = {};
    const merged = Object.assign(id);
    tmp4 = closure_22(SpeakingIndicator, obj);
  }
  return tmp4;
});
const __initData10 = {
  code: "function VoicePanelCardTsx10(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData11 = {
  code: "function VoicePanelCardTsx11(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}",
};
const __initData12 = {
  code: "function VoicePanelCardTsx12(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}",
};
const __initData13 = {
  code: "function VoicePanelCardTsx13(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}",
};
let closure_50 = { isSelf: false, hasVideo: false, user: { id: "Array" } };
function layoutTransitionFunction(originX, memo, get, get2) {
  if (flag === undefined) {
    flag = false;
  }
  value = get.get();
  let result = value / get2.get();
  let str = "respect-motion-settings";
  if (flag) {
    str = "animate-never";
  }
  const obj = { animations: null, initialValues: null, callback: null };
  const size = {
    originX: spring.withSpring(originX.targetOriginX, memo, str),
    originY: null,
    width: null,
    height: null,
  };
  size.originY = spring.withSpring(originX.targetOriginY, memo, str);
  size.width = spring.withSpring(originX.targetWidth, memo, str);
  size.height = spring.withSpring(originX.targetHeight, memo, str);
  obj.animations = size;
  obj.initialValues = {
    originX: originX.currentOriginX,
    originY: originX.currentOriginY,
    width: originX.currentWidth * result,
    height: originX.currentHeight * result,
  };
  obj.callback = function callback() {
    const result = get2.set(get.get());
  };
  return obj;
}
let obj6 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let obj7 = {};
layoutTransitionFunction.__closure = { withSpring: fn(5637).withSpring };
layoutTransitionFunction.__workletHash = 12759305802032;
layoutTransitionFunction.__initData = {
  code: "function layoutTransitionFunction_VoicePanelCardTsx14(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();const shouldAnimate=!disableAnimation?'respect-motion-settings':'animate-never';return{animations:{originX:withSpring(values.targetOriginX,physics,shouldAnimate),originY:withSpring(values.targetOriginY,physics,shouldAnimate),width:withSpring(values.targetWidth,physics,shouldAnimate),height:withSpring(values.targetHeight,physics,shouldAnimate)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}",
};
const __initData14 = {
  code: "function VoicePanelCardTsx15(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}",
};
const __initData15 = {
  code: "function VoicePanelCardTsx16(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}",
};
const __initData16 = {
  code: "function VoicePanelCardTsx17(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}",
};
const __initData17 = {
  code: "function VoicePanelCardTsx18(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,holdPosition,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive||holdPosition?x:withSpring(x,layoutPhysics,'respect-motion-settings')},{translateY:gestureActive||holdPosition?y:withSpring(y,layoutPhysics,'respect-motion-settings')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}",
};
const __initData18 = {
  code: "function VoicePanelCardTsx19(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
let closure_57 = {
  code: "function VoicePanelCardTsx20(finished){const{runOnJS,reportPIPArrival}=this.__closure;if(finished===true){runOnJS(reportPIPArrival)();}}",
};
const __initData19 = {
  code: "function VoicePanelCardTsx21(values){const{pipState,lastPIPScale,holdPosition,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};const motion=holdPosition?'animate-never':'respect-motion-settings';return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,motion),originY:withSpring(values.targetOriginY,layoutPhysics,motion),width:withSpring(values.targetWidth,layoutPhysics,motion),height:withSpring(values.targetHeight,layoutPhysics,motion)},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}",
};
const __initData20 = {
  code: "function VoicePanelCardTsx22(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}",
};
const __initData21 = {
  code: "function VoicePanelCardTsx23(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale,holdPosition}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation||holdPosition);}",
};
let obj11 = { withSpring: fn(5637).withSpring };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default noop.memo(function VoicePanelCard(cleanUp) {
  ({ item, transitionState } = cleanUp);
  scrollPosition = undefined;
  let windowDimensions;
  let id2;
  let sharedValue1;
  let cardLayoutCoordsSubscription;
  let pIPState;
  let sharedValue2;
  isDockEnabled = undefined;
  let memo;
  const id = item.id;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[27]));
  ({ channelId, guildId, isCall, isDockEnabled, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  const tmp4 = windowDimensions(id2[50])(id, channelId, guildId);
  let tmp6 = tmp4;
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_50;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  obj2 = scrollPosition(id2[50]);
  const items = [RTCConnectionStore];
  const stateFromStores = scrollPosition(id2[21]).useStateFromStores(items, () => connected.isConnected());
  const tmp5Result = scrollPosition(id2[21]);
  const tmp8 = scrollPosition(id2[50]).isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type1;
  const tmp5Result10 = scrollPosition(id2[50]);
  if (tmp4 != null) {
    type1 = tmp4.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    let DEFAULT = tmp5(tmp2[29]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[29]).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = windowDimensions(id2[28])(DEFAULT, str);
  windowDimensions(id2[57])(str);
  const tmpResult = windowDimensions(id2[28]);
  if (transitionState === scrollPosition(id2[47]).TransitionStates.MOUNTED) {
    let num = 1;
  } else {
    num = 0;
  }
  const sharedValue = scrollPosition(id2[15]).useSharedValue(num);
  const tmp5Result11 = scrollPosition(id2[15]);
  let tmp15 = null != id2;
  if (tmp15) {
    let isSpeakingResult = SpeakingStore.isSpeaking(id2);
    if (!isSpeakingResult) {
      isSpeakingResult = isDockEnabled.isUserPlayingSounds(id2);
    }
    tmp15 = isSpeakingResult;
  }
  sharedValue1 = scrollPosition(id2[15]).useSharedValue(tmp15);
  const items1 = [id2, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      let tmp3 = null != id2;
      if (tmp3) {
        let isSpeakingResult = SpeakingStore.isSpeaking(id2);
        if (!isSpeakingResult) {
          isSpeakingResult = isDockEnabled.isUserPlayingSounds(id2);
        }
        tmp3 = isSpeakingResult;
      }
      const result = sharedValue1.set(tmp3);
    }
    let tmp3 = null != id2;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(id2);
      if (!isSpeakingResult) {
        isSpeakingResult = isDockEnabled.isUserPlayingSounds(id2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = sharedValue1.set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = isDockEnabled.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result12 = scrollPosition(id2[15]);
  cardLayoutCoordsSubscription = scrollPosition(id2[58]).useCardLayoutCoordsSubscription(id, context.layoutManager);
  const tmp5Result13 = scrollPosition(id2[58]);
  class L {
    constructor() {
      sum = EDGE_GUTTER + closure_4.get().y;
      obj = scrollPosition;
      value = scrollPosition.get();
      tmp3 = sum > value - closure_4.get().height;
      if (tmp3) {
        tmp5 = windowDimensions;
        value1 = obj.get();
        tmp3 = sum < value1 + windowDimensions.get().height;
      }
      return tmp3;
    }
  }
  L.__closure = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  L.__workletHash = 5334204469805;
  L.__initData = __initData20;
  const derivedValue = scrollPosition(id2[15]).useDerivedValue(L);
  const obj3 = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  const tmp5Result14 = scrollPosition(id2[15]);
  pIPState = scrollPosition(id2[49]).usePIPState();
  const tmp5Result15 = scrollPosition(id2[49]);
  const scale = pIPState.scale;
  sharedValue2 = scrollPosition(id2[15]).useSharedValue(scale.get());
  if (isDockEnabled) {
    isDockEnabled = !stateFromStores;
  }
  memo = obj.useMemo(
    () => ({
      mass: closure_1_13.mass,
      damping: windowDimensions(id2[59])(closure_1_13.damping - 2, closure_1_13.damping + 2),
      stiffness: windowDimensions(id2[59])(closure_1_13.stiffness - 20, closure_1_13.stiffness + 20),
    }),
    [],
  );
  class K {
    constructor(arg0) {
      flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      tmp2 = closure_8;
      tmp3 = closure_6;
      tmp = layoutTransitionFunction;
      if (!flag) {
        flag = closure_7;
      }
      return tmp(cleanUp, tmp2, closure_5.scale, tmp3, flag);
    }
  }
  K.__closure = {
    layoutTransitionFunction,
    physics: memo,
    pipState: pIPState,
    lastPipScale: sharedValue2,
    holdPosition: isDockEnabled,
  };
  K.__workletHash = 3609659598750;
  K.__initData = __initData21;
  const items2 = [isDockEnabled, memo, pIPState.scale, sharedValue2];
  const callback = obj.useCallback(K, items2);
  if (item.type === constants2.CTA) {
    const id3 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id3) {
      let tmp32Result = closure_22(tmp(tmp2[60]), {});
      let tmp30 = closure_22;
    } else if (tmp41.CALLER_DISCONNECTED === id3) {
      tmp32Result = closure_22(tmp(tmp2[61]), {});
      tmp30 = closure_22;
    }
    const obj5 = {
      cleanUp: cleanUp.cleanUp,
      coords: cardLayoutCoordsSubscription,
      id,
      isRTCConnected: stateFromStores,
      isScrollVisible: derivedValue,
      layoutPhysics: memo,
      transitionState,
      sharedVisible: sharedValue,
      children: null,
    };
    const items3 = [tmp32Result, ,];
    let tmp30Result = null != tmp4;
    if (tmp30Result) {
      const obj6 = { isRinging: tmp8, participant: tmp4, label: null, layout: null };
      const tmpResult3 = tmp(tmp2[64]);
      let userNick;
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      obj6.label = userNick;
      obj6.layout = callback;
      tmp30Result = tmp30(tmpResult3, obj6);
      tmp5Result17 = tmp5(tmp2[50]);
    }
    items3[1] = tmp30Result;
    let result = tmp5(tmp2[50]).isStableParticipantWithUser(tmp4);
    if (result) {
      const obj7 = { speakingOrPlayingSoundboard: sharedValue1, id, userId: tmp4.user.id, isSelf, layout: callback };
      result = tmp30(closure_45, obj7);
    }
    items3[2] = result;
    obj5.children = items3;
    return styles(AnimatedWrapper, obj5);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          if (tmp4.canRenderVideo) {
            if (null == tmpResultResult) {
              let tmp34 = closure_22;
              const obj8 = {
                id: tmp31,
                userId: user.id,
                streamId: null,
                isScrollVisible: null,
                videoSpinnerContext: null,
                sharedCoords: null,
                isCamera: true,
                focusOnReady: null,
                layout: null,
              };
              if (streamId == null) {
                streamId = null;
              }
              obj8.streamId = streamId;
              obj8.isScrollVisible = derivedValue;
              const VideoSpinnerContext = tmp5(tmp2[34]).VideoSpinnerContext;
              obj8.videoSpinnerContext = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj8.sharedCoords = cardLayoutCoordsSubscription;
              if (isCall) {
                isCall = !isSelf;
              }
              obj8.focusOnReady = isCall;
              obj8.layout = callback;
              let tmp34Result = tmp34(tmp(tmp2[33]), obj8);
              const tmpResult4 = tmp(tmp2[33]);
            }
            const obj9 = { avError: tmpResultResult, userId: user.id, style: null };
            user = pIPState.absoluteFill;
            obj9.style = user;
            tmp34Result = closure_22(tmp(tmp2[62]), obj9);
            tmp34 = closure_22;
          }
        }
      }
      const obj10 = {
        isRinging: tmp8,
        avatarURI: user.getAvatarURL(guildId, 80, false),
        avatarDecoration: null,
        layout: null,
        layoutPhysics: null,
        userId: null,
        guildId: null,
        channelId: null,
      };
      const userAvatarDecoration = tmp4.userAvatarDecoration;
      obj10.avatarDecoration = userAvatarDecoration;
      obj10.layout = callback;
      obj10.layoutPhysics = memo;
      obj10.userId = user.id;
      obj10.guildId = guildId;
      obj10.channelId = channelId;
      tmp30 = closure_22;
      tmp32Result = closure_22(closure_40, obj10);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj11 = {
        userId: tmp4.user.id,
        id: null,
        streamGuildId: null,
        streamId: null,
        userNick: null,
        isSelf: null,
        sharedCoords: null,
        isScrollVisible: null,
        layout: null,
      };
      ({ id: obj13.id, streamGuildId: obj13.streamGuildId, streamId: obj13.streamId, userNick: obj13.userNick } = tmp4);
      obj11.isSelf = isSelf;
      obj11.sharedCoords = cardLayoutCoordsSubscription;
      obj11.isScrollVisible = derivedValue;
      obj11.layout = callback;
      tmp32Result = closure_22(closure_36, obj11);
      tmp30 = closure_22;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj12 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: callback };
      tmp32Result = closure_22(tmp(tmp2[63]), obj12, tmp4.id);
      tmp30 = closure_22;
    }
  }
  const obj14 = {
    isRinging: tmp8,
    avatarURI: "a",
    avatarDecoration: "isArray",
    layout: callback,
    layoutPhysics: memo,
    channelId,
  };
  tmp32Result = closure_22(closure_40, obj14);
  tmp30 = closure_22;
  const obj4 = {
    layoutTransitionFunction,
    physics: memo,
    pipState: pIPState,
    lastPipScale: sharedValue2,
    holdPosition: isDockEnabled,
  };
  const tmp5Result16 = scrollPosition(id2[15]);
});
