// discord_app/modules/voice_panel/native/card/VoicePanelCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../../_runtime/05582_LinearGradient.js";
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
  const tmp = closure_31();
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
      obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
    }
  }, items1);
  obj = sharedCoords(isFocused[21]);
  const fn = function l() {
    let num = 16;
    if (isFocused) {
      num = 0;
    }
    obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: null };
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
  let mode;
  const context = mode.useContext(require("VoicePanelStateContext"));
  mode = context.mode;
  const focused = context.focused;
  const tmp2 = closure_31();
  const token = id(isSelf[43]).useToken(require("native").modules.mobile.VOICE_TILE_BORDER_RADIUS);
  obj = id(isSelf[43]);
  const token1 = id(isSelf[43]).useToken(require("native").colors.REDESIGN_INPUT_CONTROL_SELECTED);
  let obj2 = id(isSelf[43]);
  const items = [SoundboardStore];
  const stateFromStores = id(isSelf[21]).useStateFromStores(items, () =>
    SoundboardStore.isUserPlayingSounds(importDefault),
  );
  let obj3 = id(isSelf[21]);
  const fn = function h() {
    let tmp = mode.get() !== VoicePanelModes.PIP;
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
      const obj4 = { id, mode: mode.get(), focused: null, isSelf: null, defaultBorderRadius: null };
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
  let obj4 = id(isSelf[15]);
  fn.__closure = {
    mode,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(isSelf[38]).withSpring,
    computeCardBorderRadius: require("computeCardBorderRadius"),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
  };
  fn.__workletHash = 5111620492405;
  fn.__initData = __initData5;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = {
    mode,
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
      obj = mode;
      tmp = mode.get() === VoicePanelModes.PIP;
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
  const obj6 = id(isSelf[15]);
  S.__closure = {
    mode,
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
  S.__workletHash = 10350928516344;
  S.__initData = __initData6;
  const animatedStyle1 = obj6.useAnimatedStyle(S);
  const obj7 = {
    mode,
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
  const fn2 = function p() {
    let tmp = mode.get() === VoicePanelModes.PIP;
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
      const obj3 = { id, mode: mode.get(), focused: null, isSelf: null, defaultBorderRadius: null };
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
  const obj8 = id(isSelf[15]);
  fn2.__closure = {
    mode,
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
  fn2.__workletHash = 12326770343613;
  fn2.__initData = __initData7;
  const animatedStyle2 = obj8.useAnimatedStyle(fn2);
  const obj10 = { style: tmp2.speakingIndicatorWrapper, layout, pointerEvents: "none", children: null };
  const obj9 = {
    mode,
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
  const obj11 = { style: null, children: null };
  const items1 = [tmp2.speakingIndicatorClip, animatedStyle];
  obj11.style = items1;
  let tmp10 = require("ReanimatedNativeView");
  const obj12 = { style: null, layout };
  const items2 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  obj12.style = items2;
  const items3 = [closure_22(require("ReanimatedNativeView"), obj12)];
  const items4 = [tmp2.speakingIndicatorBar, ,];
  let tmp14 = null;
  const tmp12 = require("ReanimatedNativeView");
  if (stateFromStores) {
    const obj13 = { borderColor: token1 };
    tmp14 = obj13;
  }
  items4[1] = tmp14;
  items4[2] = animatedStyle2;
  items3[1] = closure_22(require("ReanimatedNativeView"), { style: items4, layout });
  obj11.children = items3;
  obj10.children = styles(tmp12, obj11);
  return closure_22(tmp10, obj10);
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
  mode = undefined;
  pipAvoidanceSpecs = undefined;
  EDGE_GUTTER = undefined;
  c19 = undefined;
  windowDimensions = undefined;
  let isSelf;
  let id2;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let sharedValue;
  closure_31 = undefined;
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
  ({ hideControls: c13, mode } = context);
  ({ mountedCards, pipAvoidanceSpecs } = context);
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  ({ setFocused: c18, showControls: c19, windowDimensions } = context);
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const pipHandoff = context.pipHandoff;
  let tmp3 = closure_31();
  const pIPState = cleanUp(id[49]).usePIPState();
  const tmp7 = coords(id[50])(id, channelId, context.guildId);
  let obj2 = cleanUp(id[49]);
  let tmp8 = tmp7;
  if (!obj3.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_49;
  }
  isSelf = tmp8.isSelf;
  id2 = tmp8.user.id;
  obj3 = cleanUp(id[50]);
  class P {
    constructor() {
      tmp = id === closure_24.id;
      if (tmp) {
        tmp2 = mode;
        tmp3 = VoicePanelModes;
        tmp = mode.get() === VoicePanelModes.PIP;
      }
      return tmp;
    }
  }
  P.__closure = { id, pipState: pIPState, mode, VoicePanelModes: focused };
  P.__workletHash = 4773864088866;
  P.__initData = __initData12;
  derivedValue = cleanUp(id[15]).useDerivedValue(P);
  const tmp5Result = cleanUp(id[15]);
  const tmp9 = focused;
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
        tmp3 = mode;
        tmp4 = VoicePanelModes;
        num = 0;
      }
      return num;
    }
  }
  I.__closure = { focused, id, mode, VoicePanelModes: focused, scrollPosition };
  I.__workletHash = 8770947887509;
  I.__initData = __initData13;
  derivedValue1 = cleanUp(id[15]).useDerivedValue(I);
  const tmp5Result13 = cleanUp(id[15]);
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
  C.__workletHash = 15078431132990;
  C.__initData = __initData14;
  derivedValue2 = cleanUp(id[15]).useDerivedValue(C);
  closure_129_0 = id;
  closure_129_1 = tmp7;
  closure_129_2 = transitionState;
  closure_129_3 = cleanUp;
  closure_129_4 = mode;
  closure_129_5 = focused;
  closure_129_6 = isScrollVisible;
  closure_129_7 = sharedVisible;
  closure_129_10 = undefined;
  let obj4 = { connected, EDGE_GUTTER, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  const tmp5Result14 = cleanUp(id[15]);
  sharedValue = cleanUp(id[15]).useSharedValue(transitionState);
  closure_129_8 = sharedValue;
  const tmp14 = isRTCConnected(isScrollVisible.useState(true), 2);
  closure_129_9 = tmp14[1];
  let type;
  if (tmp7 != null) {
    type = tmp7.type;
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
  closure_129_10 = callback;
  const tmp5Result15 = cleanUp(id[15]);
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
  P.__workletHash = 12145773243163;
  P.__initData = __initData8;
  let fn = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(contentDimensions)(arg0);
    }
  };
  const tmp5Result16 = cleanUp(id[15]);
  fn.__closure = { runOnJS: cleanUp(id[15]).runOnJS, handleFocusedParticipantChange: callback };
  fn.__workletHash = 9304160478829;
  fn.__initData = __initData9;
  const animatedReaction = tmp5Result16.useAnimatedReaction(P, fn);
  let obj5 = { runOnJS: cleanUp(id[15]).runOnJS, handleFocusedParticipantChange: callback };
  class C {
    constructor() {
      obj = { mode: isScrollVisible.get(), focused: layoutPhysics.get(), transitionState: channelId.get() };
      return obj;
    }
  }
  C.__closure = { mode, focused, sharedTransitionState: sharedValue };
  C.__workletHash = 13570020810295;
  C.__initData = __initData10;
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
  const tmp5Result17 = cleanUp(id[15]);
  I.__closure = {
    cheapWorkletShallowEqual: cleanUp(id[46]).cheapWorkletShallowEqual,
    VoicePanelModes: tmp9,
    TransitionStates: cleanUp(id[47]).TransitionStates,
    sharedVisible,
    isScrollVisible,
    runOnJS: cleanUp(id[15]).runOnJS,
    cleanUp,
    id,
  };
  I.__workletHash = 17099686269568;
  I.__initData = __initData11;
  const animatedReaction1 = tmp5Result17.useAnimatedReaction(C, I);
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = channelId.set(id);
  });
  closure_31 = tmp20;
  let obj6 = {
    cheapWorkletShallowEqual: cleanUp(id[46]).cheapWorkletShallowEqual,
    VoicePanelModes: tmp9,
    TransitionStates: cleanUp(id[47]).TransitionStates,
    sharedVisible,
    isScrollVisible,
    runOnJS: cleanUp(id[15]).runOnJS,
    cleanUp,
    id,
  };
  token = cleanUp(id[43]).useToken(tmp(tmp2[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp5Result18 = cleanUp(id[43]);
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
      if (closure_31) {
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
        tmp21 = closure_28;
        sum = closure_28.get() + point.y;
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
          tmp8 = closure_28;
          sum = closure_28.get();
          num2 = 1;
          num = 0;
        }
      } else {
        tmp40 = closure_29;
        sum1 = x + closure_29.get();
        tmp42 = closure_1;
        tmp43 = closure_2;
        obj20 = { contentHeight: null, windowHeight: null, safeArea: null };
        tmp45 = contentDimensions;
        tmp44 = closure_1(closure_2[52]);
        obj20.contentHeight = contentDimensions.get().height;
        tmp46 = windowDimensions;
        obj20.windowHeight = windowDimensions.get().height;
        tmp47 = safeArea;
        obj20.safeArea = safeArea.get();
        sum2 = y + tmp44(obj20);
        tmp49 = closure_30;
        tmp51 = closure_0;
        tmp52 = closure_2;
        value3 = closure_30.get();
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
      obj6 = closure_27;
      if (closure_27.get()) {
        num2 = 9001;
      }
      obj21 = { id: tmp4, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      tmp22 = closure_1(closure_2[44]);
      obj21.mode = mode.get();
      value4 = obj.get();
      id1 = undefined;
      if (value4 != null) {
        id1 = value4.id;
      }
      obj21.focused = id1;
      obj21.isSelf = isSelf;
      obj21.defaultBorderRadius = closure_32;
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
          obj = cleanUp(id[15]);
        }
      };
      obj22 = {
        sharedVisible: obj8,
        sharedTransitionState: closure_30,
        TransitionStates: closure_0(closure_2[47]).TransitionStates,
        runOnJS: closure_0(closure_2[15]).runOnJS,
        cleanUp,
      };
      fn.__closure = obj22;
      fn.__workletHash = 6571273005437;
      fn.__initData = closure_55;
      size1.opacity = obj12.withTiming(num3, tmp31, str, fn);
      size1.width = width2;
      size1.height = height2;
      withSpringResult = num;
      if (!gestureActive) {
        tmp33 = closure_0;
        tmp34 = closure_2;
        obj14 = closure_0(closure_2[38]);
        tmp35 = layoutPhysics;
        str2 = "respect-motion-settings";
        withSpringResult = obj14.withSpring(num, layoutPhysics, "respect-motion-settings");
      }
      items = [, ,];
      items[0] = { translateX: withSpringResult };
      withSpringResult1 = sum;
      if (!gestureActive) {
        tmp37 = closure_0;
        tmp38 = closure_2;
        obj15 = closure_0(closure_2[38]);
        tmp39 = layoutPhysics;
        str3 = "respect-motion-settings";
        withSpringResult1 = obj15.withSpring(sum, layoutPhysics, "respect-motion-settings");
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
  const tmp5Result19 = cleanUp(id[15]);
  E.__closure = {
    coords,
    focused,
    id,
    isPIP: pIPState.mode === scrollPosition.IN_APP,
    pipState: pIPState,
    getScaledPIPContainerHeight: cleanUp(id[51]).getScaledPIPContainerHeight,
    getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition,
    wrapperDimensions,
    windowDimensions,
    safeArea,
    pipAvoidanceSpecs,
    derivedScrollValue: derivedValue1,
    xOffset: derivedValue2,
    calculateContentCenterOffset: coords(id[52]),
    contentDimensions,
    sharedTransitionState: sharedValue,
    TransitionStates: cleanUp(id[47]).TransitionStates,
    zIndexOverride: derivedValue,
    computeCardBorderRadius: coords(id[44]),
    mode,
    isSelf,
    defaultBorderRadius: token,
    sharedVisible,
    isRTCConnected,
    CONNECTING_OPACITY: sharedValue,
    wrapperOffset,
    withDelay: cleanUp(id[15]).withDelay,
    withTiming: cleanUp(id[37]).withTiming,
    ZINDEX_TIMING: derivedValue2,
    OPACITY_TIMING: derivedValue1,
    isScrollVisible,
    runOnJS: cleanUp(id[15]).runOnJS,
    cleanUp,
    withSpring: cleanUp(id[38]).withSpring,
    layoutPhysics,
    CARD_SCALE_PHYSICS: derivedValue,
    SCALE_PHYSICS: wrapperDimensions,
  };
  E.__workletHash = 677671818518;
  E.__initData = __initData15;
  const animatedStyle = tmp5Result19.useAnimatedStyle(E);
  const obj8 = {
    gesturesEnabled: tmp14[0],
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
  let obj7 = {
    coords,
    focused,
    id,
    isPIP: pIPState.mode === scrollPosition.IN_APP,
    pipState: pIPState,
    getScaledPIPContainerHeight: cleanUp(id[51]).getScaledPIPContainerHeight,
    getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition,
    wrapperDimensions,
    windowDimensions,
    safeArea,
    pipAvoidanceSpecs,
    derivedScrollValue: derivedValue1,
    xOffset: derivedValue2,
    calculateContentCenterOffset: coords(id[52]),
    contentDimensions,
    sharedTransitionState: sharedValue,
    TransitionStates: cleanUp(id[47]).TransitionStates,
    zIndexOverride: derivedValue,
    computeCardBorderRadius: coords(id[44]),
    mode,
    isSelf,
    defaultBorderRadius: token,
    sharedVisible,
    isRTCConnected,
    CONNECTING_OPACITY: sharedValue,
    wrapperOffset,
    withDelay: cleanUp(id[15]).withDelay,
    withTiming: cleanUp(id[37]).withTiming,
    ZINDEX_TIMING: derivedValue2,
    OPACITY_TIMING: derivedValue1,
    isScrollVisible,
    runOnJS: cleanUp(id[15]).runOnJS,
    cleanUp,
    withSpring: cleanUp(id[38]).withSpring,
    layoutPhysics,
    CARD_SCALE_PHYSICS: derivedValue,
    SCALE_PHYSICS: wrapperDimensions,
  };
  let tmpResult = coords(id[53]);
  if (tmp5Result20.isStableActivityParticipant(tmp7)) {
    const fn2 = () => {
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
    const tmp5Result21 = tmp5(tmp2[50]);
  }
  obj8.onDoubleTap = fn2;
  let fn3;
  if (null != id2) {
    fn3 = () =>
      showUserProfileActionSheetDefault({
        userId: id2,
        channelId,
        isVoiceContext: true,
        sourceAnalyticsLocations: analyticsLocations,
      });
  }
  obj8.onLongPress = fn3;
  const items1 = [pipHandoff, id, pIPState.mode === scrollPosition.IN_APP];
  tmp5Result20 = cleanUp(id[50]);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_31);
  }, items1);
  const items2 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items2);
  const tmpResultResult = tmpResult(obj8);
  sharedValue1 = cleanUp(id[15]).useSharedValue(0);
  const items3 = [pipHandoff, id];
  callback1 = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items3);
  const items4 = [pIPState.mode === scrollPosition.IN_APP, layoutPhysics, sharedValue1, callback1];
  const effect1 = obj.useEffect(() => {
    if (closure_31) {
      const result = sharedValue1.set(0);
      obj = spring;
      const fn = function t(arg0) {
        if (true === arg0) {
          cleanUp(id[15]).runOnJS(callback1)();
          obj = cleanUp(id[15]);
        }
      };
      const obj2 = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival: callback1 };
      fn.__closure = obj2;
      fn.__workletHash = 6072722765065;
      fn.__initData = __initData2;
      const result1 = sharedValue1.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
      return () => cleanUp(id[15]).cancelAnimation(sharedValue1);
    }
  }, items4);
  const tmp5Result22 = cleanUp(id[15]);
  let scale = pIPState.scale;
  sharedValue2 = cleanUp(id[15]).useSharedValue(scale.get());
  class Re {
    constructor(arg0) {
      scale = closure_24.scale;
      value = scale.get();
      result = value / closure_35.get();
      size = {
        originX: cleanUp.currentOriginX,
        originY: cleanUp.currentOriginY,
        width: cleanUp.currentWidth * result,
        height: cleanUp.currentHeight * result,
      };
      obj1 = { animations: null, initialValues: null, callback: null };
      size1 = { originX: null, originY: null, width: null, height: null };
      obj4 = closure_0(closure_2[38]);
      size1.originX = obj4.withSpring(cleanUp.targetOriginX, layoutPhysics, "respect-motion-settings");
      obj5 = closure_0(closure_2[38]);
      size1.originY = obj5.withSpring(cleanUp.targetOriginY, layoutPhysics, "respect-motion-settings");
      obj6 = closure_0(closure_2[38]);
      size1.width = obj6.withSpring(cleanUp.targetWidth, layoutPhysics, "respect-motion-settings");
      obj7 = closure_0(closure_2[38]);
      size1.height = obj7.withSpring(cleanUp.targetHeight, layoutPhysics, "respect-motion-settings");
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
  const tmp5Result23 = cleanUp(id[15]);
  Re.__closure = {
    pipState: pIPState,
    lastPIPScale: sharedValue2,
    withSpring: cleanUp(id[38]).withSpring,
    layoutPhysics,
    wrapperOffset,
  };
  Re.__workletHash = 13826508432239;
  Re.__initData = __initData17;
  const items5 = [layoutPhysics, wrapperOffset, sharedValue2, pIPState.scale];
  const callback2 = obj.useCallback(Re, items5);
  let obj10 = { gesture: tmpResultResult, children: null };
  let obj11 = { nativeID: null, style: null, layout: null, children: null };
  let obj9 = {
    pipState: pIPState,
    lastPIPScale: sharedValue2,
    withSpring: cleanUp(id[38]).withSpring,
    layoutPhysics,
    wrapperOffset,
  };
  const tmpResult2 = coords(id[42]);
  obj11.nativeID = cleanUp(id[56]).getExternalPipTileNativeId("card", id);
  const items6 = [tmp3.positionWrapper, animatedStyle];
  obj11.style = items6;
  obj11.layout = callback2;
  obj11.children = cleanUp.children;
  obj10.children = wrapperOffset(tmpResult2, obj11);
  return wrapperOffset(cleanUp(id[55]).GestureDetector, obj10);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const Pressable = get_ActivityIndicator.Pressable;
const VoicePanelConstants = fn(11204);
({
  VoicePanelCTACard: closure_11,
  VoicePanelModes: closure_12,
  MODE_CHANGE_PHYSICS: map1,
  SPEAKING_PHYSICS: closure_14,
  VoicePanelCardItemType: closure_15,
} = VoicePanelConstants);
const VoicePanelControlsModes = fn(11202).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(19059).VoicePanelPIPModes;
let EDGE_GUTTER = fn(11207).EDGE_GUTTER;
const ApplicationStreamStates = fn(1072).ApplicationStreamStates;
const ParticipantTypes = fn(5676).ParticipantTypes;
const SCALE_PHYSICS = fn(11205).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_22, Fragment: closure_23, jsxs: closure_24 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_25 = ReanimatedRexport.createAnimatedComponent(fn(5619).Text);
let ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let tmp5 = fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.XXLARGE];
let obj = {};
let merged = Object.assign(SCALE_PHYSICS);
obj.stiffness = 150;
let closure_28 = { duration: 200 };
let closure_29 = { duration: 0 };
let c30 = 0.75;
const createStyles = fn(5009);
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
let closure_31 = createStyles.createStyles(obj2);
let __initData = {
  code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}",
};
__initData = {
  code: "function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}",
};
const __initData2 = {
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
  obj = id(streamGuildId[21]);
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
  C.__initData = __initData;
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
  I.__initData = __initData2;
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
const __initData3 = {
  code: "function VoicePanelCardTsx4(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}",
};
const __initData4 = {
  code: "function VoicePanelCardTsx5(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}",
};
let closure_39 = noop.memo(function AnimatedUserCardInner(isRinging) {
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  const userId = isRinging.userId;
  const guildId = isRinging.guildId;
  const channelId = isRinging.channelId;
  backgroundColor = undefined;
  const tmp = closure_31();
  const context = channelId.useContext(layoutPhysics(userId[27]));
  const mode = context.mode;
  const controlsSpecs = context.controlsSpecs;
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
  obj = channelId;
  const tmp5 = layoutPhysics(userId[35])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" });
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
  const tmp6Result = isRinging(userId[15]);
  P.__closure = { withTiming: isRinging(userId[37]).withTiming, isRinging, CONNECTING_OPACITY: v075, backgroundColor };
  P.__workletHash = 6200022645373;
  P.__initData = __initData3;
  const animatedStyle = tmp6Result.useAnimatedStyle(P);
  let obj2 = { withTiming: isRinging(userId[37]).withTiming, isRinging, CONNECTING_OPACITY: v075, backgroundColor };
  class I {
    constructor() {
      obj = closure_0(closure_2[38]);
      num = 1;
      if (mode.get() === VoicePanelModes.PIP) {
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
  const tmp6Result3 = isRinging(userId[15]);
  I.__closure = { withSpring: isRinging(userId[38]).withSpring, mode, VoicePanelModes, layoutPhysics };
  I.__workletHash = 5040632730576;
  I.__initData = __initData4;
  let cachedSourceFromURI;
  const animatedStyle1 = tmp6Result3.useAnimatedStyle(I);
  if (null != avatarURI) {
    cachedSourceFromURI = tmp6(tmp3[39]).getCachedSourceFromURI(avatarURI);
    const tmp6Result4 = tmp6(tmp3[39]);
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
    const obj4 = { source: cachedSourceFromURI, size: tmp6(tmp3[18]).AvatarSizes.XXLARGE, avatarDecoration };
    let tmp11Result = closure_22(tmp6(tmp3[18]).Avatar, obj4);
    let tmp15 = closure_22;
  } else {
    const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
    tmp11Result = closure_22(layoutPhysics(tmp3[41]), size);
    tmp15 = closure_22;
    const tmp2Result = layoutPhysics(tmp3[41]);
  }
  const obj5 = { style: tmp.userRoundedCard, layout, children: null };
  const obj3 = { withSpring: isRinging(userId[38]).withSpring, mode, VoicePanelModes, layoutPhysics };
  const obj6 = { style: null, children: null };
  const items1 = [tmp.userRoundedCardContent, animatedStyle];
  obj6.style = items1;
  let tmp15Result = null;
  const tmp2Result5 = layoutPhysics(userId[42]);
  if (null != gradientStops) {
    const obj7 = {
      colors: gradientStops,
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      style: mode.absoluteFill,
      layout,
      pointerEvents: "none",
    };
    tmp15Result = tmp15(LinearGradient, obj7);
  }
  const items2 = [tmp15Result];
  if (null == cachedSourceFromURI) {
    const obj8 = { style: tmp.avatarPlaceholder };
    let tmp15Result3 = tmp15(layoutPhysics(tmp3[24]), obj8);
  } else {
    const obj9 = { layout, children: null };
    let prop;
    const tmp2Result7 = layoutPhysics(tmp3[42]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj10 = { style: null, children: null };
    const items3 = [prop, animatedStyle1];
    obj10.style = items3;
    let tmp15Result4 = tmp11Result;
    if (MobileRequestToStreamExperiment.useConfig({ guildId: guildId2, location: "VoicePanelCard" }).enabled) {
      const obj11 = { onPress: callback, children: tmp11Result };
      tmp15Result4 = tmp15(controlsSpecs, obj11);
    }
    obj10.children = tmp15Result4;
    obj9.children = tmp15(layoutPhysics(tmp3[42]), obj10);
    tmp15Result3 = tmp15(tmp2Result7, obj9);
    const tmp2Result8 = layoutPhysics(tmp3[42]);
  }
  items2[1] = tmp15Result3;
  obj6.children = items2;
  obj5.children = styles(layoutPhysics(userId[42]), obj6);
  return tmp15(tmp2Result5, obj5);
});
const __initData5 = {
  code: "function VoicePanelCardTsx6(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
const __initData6 = {
  code: "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
const __initData7 = {
  code: "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
let closure_44 = noop.memo(function LazySpeakingIndicator(id) {
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
    obj = {};
    const merged = Object.assign(id);
    tmp4 = closure_22(SpeakingIndicator, obj);
  }
  return tmp4;
});
const __initData8 = {
  code: "function VoicePanelCardTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData9 = {
  code: "function VoicePanelCardTsx10(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}",
};
const __initData10 = {
  code: "function VoicePanelCardTsx11(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}",
};
const __initData11 = {
  code: "function VoicePanelCardTsx12(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}",
};
let closure_49 = { isSelf: false, hasVideo: false, user: { id: "getCurrentUser" } };
function layoutTransitionFunction(originX, SUBTLE_SPRING, scale, sharedValue2) {
  if (flag === undefined) {
    flag = false;
  }
  value = scale.get();
  let result = value / sharedValue2.get();
  let str = "respect-motion-settings";
  if (flag) {
    str = "animate-never";
  }
  obj = { animations: null, initialValues: null, callback: null };
  const size = {
    originX: spring.withSpring(originX.targetOriginX, SUBTLE_SPRING, str),
    originY: null,
    width: null,
    height: null,
  };
  size.originY = spring.withSpring(originX.targetOriginY, SUBTLE_SPRING, str);
  size.width = spring.withSpring(originX.targetWidth, SUBTLE_SPRING, str);
  size.height = spring.withSpring(originX.targetHeight, SUBTLE_SPRING, str);
  obj.animations = size;
  obj.initialValues = {
    originX: originX.currentOriginX,
    originY: originX.currentOriginY,
    width: originX.currentWidth * result,
    height: originX.currentHeight * result,
  };
  obj.callback = function callback() {
    const result = sharedValue2.set(scale.get());
  };
  return obj;
}
let obj6 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let obj7 = {};
layoutTransitionFunction.__closure = { withSpring: fn(5632).withSpring };
layoutTransitionFunction.__workletHash = 12732053059447;
layoutTransitionFunction.__initData = {
  code: "function layoutTransitionFunction_VoicePanelCardTsx13(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();const shouldAnimate=!disableAnimation?'respect-motion-settings':'animate-never';return{animations:{originX:withSpring(values.targetOriginX,physics,shouldAnimate),originY:withSpring(values.targetOriginY,physics,shouldAnimate),width:withSpring(values.targetWidth,physics,shouldAnimate),height:withSpring(values.targetHeight,physics,shouldAnimate)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}",
};
const __initData12 = {
  code: "function VoicePanelCardTsx14(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}",
};
const __initData13 = {
  code: "function VoicePanelCardTsx15(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}",
};
const __initData14 = {
  code: "function VoicePanelCardTsx16(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}",
};
const __initData15 = {
  code: "function VoicePanelCardTsx17(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'respect-motion-settings')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'respect-motion-settings')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}",
};
const __initData16 = {
  code: "function VoicePanelCardTsx18(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
let closure_56 = {
  code: "function VoicePanelCardTsx19(finished){const{runOnJS,reportPIPArrival}=this.__closure;if(finished===true){runOnJS(reportPIPArrival)();}}",
};
const __initData17 = {
  code: "function VoicePanelCardTsx20(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'respect-motion-settings'),originY:withSpring(values.targetOriginY,layoutPhysics,'respect-motion-settings'),width:withSpring(values.targetWidth,layoutPhysics,'respect-motion-settings'),height:withSpring(values.targetHeight,layoutPhysics,'respect-motion-settings')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}",
};
const __initData18 = {
  code: "function VoicePanelCardTsx21(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}",
};
let closure_60 = {
  code: "function layoutTransition_VoicePanelCardTsx22(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}",
};
let obj11 = { withSpring: fn(5632).withSpring };
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
  const id = item.id;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[27]));
  ({ channelId, guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  const tmp4 = windowDimensions(id2[50])(id, channelId, guildId);
  let tmp6 = tmp4;
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_49;
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
      isSpeakingResult = SoundboardStore.isUserPlayingSounds(id2);
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
          isSpeakingResult = SoundboardStore.isUserPlayingSounds(id2);
        }
        tmp3 = isSpeakingResult;
      }
      const result = sharedValue1.set(tmp3);
    }
    let tmp3 = null != id2;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(id2);
      if (!isSpeakingResult) {
        isSpeakingResult = SoundboardStore.isUserPlayingSounds(id2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = sharedValue1.set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = SoundboardStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result12 = scrollPosition(id2[15]);
  cardLayoutCoordsSubscription = scrollPosition(id2[58]).useCardLayoutCoordsSubscription(id, context.layoutManager);
  const tmp5Result13 = scrollPosition(id2[58]);
  const fn = function $() {
    const sum = EDGE_GUTTER + cardLayoutCoordsSubscription.get().y;
    value = scrollPosition.get();
    let tmp3 = sum > value - cardLayoutCoordsSubscription.get().height;
    if (tmp3) {
      value2 = scrollPosition.get();
      tmp3 = sum < value2 + windowDimensions.get().height;
    }
    return tmp3;
  };
  fn.__closure = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  fn.__workletHash = 11720551113486;
  fn.__initData = __initData18;
  const derivedValue = scrollPosition(id2[15]).useDerivedValue(fn);
  const obj3 = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  const tmp5Result14 = scrollPosition(id2[15]);
  pIPState = scrollPosition(id2[49]).usePIPState();
  const tmp5Result15 = scrollPosition(id2[49]);
  const scale = pIPState.scale;
  sharedValue2 = scrollPosition(id2[15]).useSharedValue(scale.get());
  const items2 = [pIPState.scale, sharedValue2];
  const memo = obj.useMemo(() => {
    const physics = {
      mass: closure_1_13.mass,
      damping: windowDimensions(id2[59])(closure_1_13.damping - 2, closure_1_13.damping + 2),
      stiffness: windowDimensions(id2[59])(closure_1_13.stiffness - 20, closure_1_13.stiffness + 20),
    };
    const obj2 = { physics, layoutTransition: null };
    function layoutTransition(originX) {
      if (flag === undefined) {
        flag = false;
      }
      return layoutTransitionFunction(originX, obj, pIPState.scale, sharedValue2, flag);
    }
    layoutTransition.__closure = { layoutTransitionFunction, physics, pipState: pIPState, lastPipScale: sharedValue2 };
    layoutTransition.__workletHash = 5837282634041;
    layoutTransition.__initData = __initData;
    obj2.layoutTransition = layoutTransition;
    return obj2;
  }, items2);
  ({ physics, layoutTransition } = memo);
  if (item.type === constants2.CTA) {
    const id3 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id3) {
      let tmp31Result = closure_22(tmp(tmp2[60]), {});
      let tmp29 = closure_22;
    } else if (tmp40.CALLER_DISCONNECTED === id3) {
      tmp31Result = closure_22(tmp(tmp2[61]), {});
      tmp29 = closure_22;
    }
    const obj4 = {
      cleanUp: cleanUp.cleanUp,
      coords: cardLayoutCoordsSubscription,
      id,
      isRTCConnected: stateFromStores,
      isScrollVisible: derivedValue,
      layoutPhysics: physics,
      transitionState,
      sharedVisible: sharedValue,
      children: null,
    };
    const items3 = [tmp31Result, ,];
    let tmp29Result = null != tmp4;
    if (tmp29Result) {
      const obj5 = { isRinging: tmp8, participant: tmp4, label: null, layout: null };
      const tmpResult3 = tmp(tmp2[64]);
      let userNick;
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      obj5.label = userNick;
      obj5.layout = layoutTransition;
      tmp29Result = tmp29(tmpResult3, obj5);
      tmp5Result17 = tmp5(tmp2[50]);
    }
    items3[1] = tmp29Result;
    let result = tmp5(tmp2[50]).isStableParticipantWithUser(tmp4);
    if (result) {
      const obj6 = {
        speakingOrPlayingSoundboard: sharedValue1,
        id,
        userId: tmp4.user.id,
        isSelf,
        layout: layoutTransition,
      };
      result = tmp29(closure_44, obj6);
    }
    items3[2] = result;
    obj4.children = items3;
    return styles(AnimatedWrapper, obj4);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          if (tmp4.canRenderVideo) {
            if (null == tmpResultResult) {
              let tmp33 = closure_22;
              const obj7 = {
                id: tmp30,
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
              obj7.streamId = streamId;
              obj7.isScrollVisible = derivedValue;
              const VideoSpinnerContext = tmp5(tmp2[34]).VideoSpinnerContext;
              obj7.videoSpinnerContext = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj7.sharedCoords = cardLayoutCoordsSubscription;
              if (isCall) {
                isCall = !isSelf;
              }
              obj7.focusOnReady = isCall;
              obj7.layout = layoutTransition;
              let tmp33Result = tmp33(tmp(tmp2[33]), obj7);
              const tmpResult4 = tmp(tmp2[33]);
            }
            const obj8 = { avError: tmpResultResult, userId: user.id, style: null };
            user = pIPState.absoluteFill;
            obj8.style = user;
            tmp33Result = closure_22(tmp(tmp2[62]), obj8);
            tmp33 = closure_22;
          }
        }
      }
      const obj9 = {
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
      obj9.avatarDecoration = userAvatarDecoration;
      obj9.layout = layoutTransition;
      obj9.layoutPhysics = physics;
      obj9.userId = user.id;
      obj9.guildId = guildId;
      obj9.channelId = channelId;
      tmp29 = closure_22;
      tmp31Result = closure_22(closure_39, obj9);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj10 = {
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
      ({ id: obj12.id, streamGuildId: obj12.streamGuildId, streamId: obj12.streamId, userNick: obj12.userNick } = tmp4);
      obj10.isSelf = isSelf;
      obj10.sharedCoords = cardLayoutCoordsSubscription;
      obj10.isScrollVisible = derivedValue;
      obj10.layout = layoutTransition;
      tmp31Result = closure_22(closure_36, obj10);
      tmp29 = closure_22;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj11 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: layoutTransition };
      tmp31Result = closure_22(tmp(tmp2[63]), obj11, tmp4.id);
      tmp29 = closure_22;
    }
  }
  const obj13 = {
    isRinging: tmp8,
    avatarURI: "a",
    avatarDecoration: "isArray",
    layout: layoutTransition,
    layoutPhysics: physics,
    channelId,
  };
  tmp31Result = closure_22(closure_39, obj13);
  tmp29 = closure_22;
  const tmp5Result16 = scrollPosition(id2[15]);
});
