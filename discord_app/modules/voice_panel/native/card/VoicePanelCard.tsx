// discord_app/modules/voice_panel/native/card/VoicePanelCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../../_runtime/05199_LinearGradient.js";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import VoicePanelPIPUtils from "../pip/VoicePanelPIPUtils.tsx";
import computeCardBorderRadiusDefault from "../utils/computeCardBorderRadius.tsx";
import calculateContentCenterOffsetDefault from "../utils/calculateContentCenterOffset.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
function SelfStreamCard(sharedCoords) {
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = closure_29();
  const items = [stream];
  const callback = noop.useCallback(() => {
    if (null != stream) {
      obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
    }
  }, items);
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
  const animatedStyle = sharedCoords(isFocused[14]).useAnimatedStyle(fn);
  let obj2 = { style: tmp.nonUserRoundedCard, children: null };
  let tmp9 = isFocused;
  obj = sharedCoords(isFocused[14]);
  const tmp7 = stream;
  if (isFocused) {
    const obj3 = { style: tmp.blackBackground };
    tmp9 = closure_20(tmp7(tmp4[22]), obj3);
  }
  const items1 = [tmp9, ,];
  const obj4 = { style: animatedStyle, variant: null, color: "text-overlay-light", children: null };
  let str = "text-sm/semibold";
  if (isFocused) {
    str = "text-lg/semibold";
  }
  obj4.variant = str;
  const intl = tmp3(tmp4[23]).intl;
  obj4.children = intl.string(sharedCoords(isFocused[23]).t.gMOwov);
  items1[1] = closure_20(closure_23, obj4);
  let tmp6Result = null;
  if (isFocused) {
    const obj5 = { children: null };
    const obj6 = {
      style: tmp.selfStreamFocusedSubtitle,
      variant: "text-sm/medium",
      color: "text-overlay-light",
      children: null,
    };
    const intl2 = tmp3(tmp4[23]).intl;
    obj6.children = intl2.string(tmp3(tmp4[23]).t.dKeLGt);
    const items2 = [closure_20(tmp3(tmp4[15]).Text, obj6)];
    const obj7 = { size: "lg", variant: "primary-overlay", onPress: callback, text: null };
    const intl3 = tmp3(tmp4[23]).intl;
    obj7.text = intl3.string(tmp3(tmp4[23]).t.CpkXwZ);
    items2[1] = closure_20(tmp3(tmp4[24]).Button, obj7);
    obj5.children = items2;
    tmp6Result = closure_22(closure_21, obj5);
  }
  items1[2] = tmp6Result;
  obj2.children = items1;
  return closure_22(stream(isFocused[22]), obj2);
}
function SpeakingIndicator(id) {
  id = id.id;
  const isSelf = id.isSelf;
  const speaking = id.speaking;
  const layout = id.layout;
  let focused;
  const context = focused.useContext(isSelf(speaking[25]));
  const mode = context.mode;
  focused = context.focused;
  const tmp2 = closure_29();
  const token = id(speaking[40]).useToken(isSelf(speaking[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  obj = id(speaking[40]);
  const fn = function u() {
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
  let obj2 = id(speaking[14]);
  fn.__closure = {
    mode,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(speaking[37]).withSpring,
    computeCardBorderRadius: isSelf(speaking[41]),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
  };
  fn.__workletHash = 5111620492405;
  fn.__initData = __initData4;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = {
    mode,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(speaking[37]).withSpring,
    computeCardBorderRadius: isSelf(speaking[41]),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
  };
  const fn2 = function c() {
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
      if (speaking.get()) {
        num2 = roundToNearestPixelDefault(5);
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj4.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj4;
  };
  let obj4 = id(speaking[14]);
  fn2.__closure = {
    mode,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(speaking[37]).withSpring,
    computeCardBorderRadius: isSelf(speaking[41]),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
    speaking,
    roundToNearestPixel: isSelf(speaking[42]),
    SPEAKING_BORDER_SIZE: 3,
    SPEAKING_INSET: 2,
  };
  fn2.__workletHash = 13144186988728;
  fn2.__initData = __initData5;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  const obj5 = {
    mode,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(speaking[37]).withSpring,
    computeCardBorderRadius: isSelf(speaking[41]),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
    speaking,
    roundToNearestPixel: isSelf(speaking[42]),
    SPEAKING_BORDER_SIZE: 3,
    SPEAKING_INSET: 2,
  };
  const fn3 = function h() {
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
      if (speaking.get()) {
        num2 = 3;
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj4.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj4;
  };
  const obj6 = id(speaking[14]);
  fn3.__closure = {
    mode,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(speaking[37]).withSpring,
    computeCardBorderRadius: isSelf(speaking[41]),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
    speaking,
    SPEAKING_BORDER_SIZE: 3,
  };
  fn3.__workletHash = 2850608131549;
  fn3.__initData = __initData6;
  const animatedStyle2 = obj6.useAnimatedStyle(fn3);
  const obj8 = { style: null, layout, pointerEvents: "none", children: null };
  const items = [tmp2.speakingIndicatorWrapper, animatedStyle];
  obj8.style = items;
  const obj7 = {
    mode,
    VoicePanelModes,
    focused,
    id,
    withSpring: id(speaking[37]).withSpring,
    computeCardBorderRadius: isSelf(speaking[41]),
    isSelf,
    defaultBorderRadius: token,
    SPEAKING_PHYSICS,
    speaking,
    SPEAKING_BORDER_SIZE: 3,
  };
  const obj9 = { style: null, layout };
  const items1 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  obj9.style = items1;
  const items2 = [closure_20(isSelf(speaking[38]), obj9)];
  const obj10 = { style: null, layout };
  const items3 = [tmp2.speakingIndicatorGreenBar, animatedStyle2];
  obj10.style = items3;
  items2[1] = closure_20(isSelf(speaking[38]), obj10);
  obj8.children = items2;
  return closure_22(isSelf(speaking[38]), obj8);
}
function AnimatedWrapper(children) {
  const cleanUp = children.cleanUp;
  const coords = children.coords;
  let id = children.id;
  const isRTCConnected = children.isRTCConnected;
  const isScrollVisible = children.isScrollVisible;
  const layoutPhysics = children.layoutPhysics;
  ({ transitionState, sharedVisible } = children);
  c11 = undefined;
  focused = undefined;
  c13 = undefined;
  mode = undefined;
  pipAvoidanceSpecs = undefined;
  c18 = undefined;
  SCALE_PHYSICS = undefined;
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
  const analyticsLocations = coords(id[45])().analyticsLocations;
  const context = isScrollVisible.useContext(coords(id[25]));
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
  let tmp3 = derivedValue2();
  const pIPState = cleanUp(id[46]).usePIPState();
  const tmp7 = coords(id[47])(id, channelId, context.guildId);
  let obj2 = cleanUp(id[46]);
  let tmp8 = tmp7;
  if (!obj3.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_47;
  }
  isSelf = tmp8.isSelf;
  id2 = tmp8.user.id;
  obj3 = cleanUp(id[47]);
  let fn = function v() {
    let tmp = id === pIPState.id;
    if (tmp) {
      tmp = mode.get() === VoicePanelModes.PIP;
    }
    return tmp;
  };
  fn.__closure = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  fn.__workletHash = 4773864088866;
  fn.__initData = __initData11;
  derivedValue = cleanUp(id[14]).useDerivedValue(fn);
  const tmp5Result = cleanUp(id[14]);
  const tmp9 = contentDimensions;
  class E {
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
  E.__closure = { focused, id, mode, VoicePanelModes: contentDimensions, scrollPosition };
  E.__workletHash = 8770947887509;
  E.__initData = __initData12;
  derivedValue1 = cleanUp(id[14]).useDerivedValue(E);
  const tmp5Result12 = cleanUp(id[14]);
  const fn2 = function b() {
    if (connected.get()) {
      const _Math = Math;
      let bound = Math.max(
        EDGE_GUTTER,
        safeArea.get().left,
        (windowDimensions.get().width - contentDimensions.get().width) / 2,
      );
    } else {
      bound = wrapperDimensions.get().drawerWidth / 2;
    }
    return bound;
  };
  fn2.__closure = {
    connected,
    EDGE_GUTTER: safeArea,
    safeArea,
    windowDimensions,
    contentDimensions,
    wrapperDimensions,
  };
  fn2.__workletHash = 15078431132990;
  fn2.__initData = __initData13;
  derivedValue2 = cleanUp(id[14]).useDerivedValue(fn2);
  closure_129_0 = id;
  closure_129_1 = tmp7;
  closure_129_2 = transitionState;
  closure_129_3 = cleanUp;
  closure_129_4 = mode;
  closure_129_5 = focused;
  closure_129_6 = isScrollVisible;
  closure_129_7 = sharedVisible;
  closure_129_10 = undefined;
  let obj4 = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  const tmp5Result13 = cleanUp(id[14]);
  sharedValue = cleanUp(id[14]).useSharedValue(transitionState);
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
  const tmp5Result14 = cleanUp(id[14]);
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
  P.__initData = __initData7;
  const fn3 = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(contentDimensions)(arg0);
    }
  };
  const tmp5Result15 = cleanUp(id[14]);
  fn3.__closure = { runOnJS: cleanUp(id[14]).runOnJS, handleFocusedParticipantChange: callback };
  fn3.__workletHash = 9304160478829;
  fn3.__initData = __initData8;
  const animatedReaction = tmp5Result15.useAnimatedReaction(P, fn3);
  let obj5 = { runOnJS: cleanUp(id[14]).runOnJS, handleFocusedParticipantChange: callback };
  class I {
    constructor() {
      obj = { mode: isScrollVisible.get(), focused: layoutPhysics.get(), transitionState: channelId.get() };
      return obj;
    }
  }
  I.__closure = { mode, focused, sharedTransitionState: sharedValue };
  I.__workletHash = 13570020810295;
  I.__initData = __initData9;
  const fn4 = function w(mode, transitionState) {
    if (!obj.cheapWorkletShallowEqual(mode, tmp3)) {
      ({ focused, transitionState } = mode);
      if (focused != null) {
        id = focused.id;
      }
      if (null == transitionState) {
        if (transitionState !== native.TransitionStates.YEETED) {
          const result = analyticsLocations.set(1);
        }
      }
      if (transitionState === native.TransitionStates.YEETED) {
        if (1 === analyticsLocations.get()) {
          if (sharedVisible.get()) {
            const result1 = analyticsLocations.set(0);
          }
        }
        ReanimatedRexport2.runOnJS(isRTCConnected)();
        const tmpResult = ReanimatedRexport2;
      } else {
        let transitionState1;
        if (transitionState != null) {
          transitionState1 = transitionState.transitionState;
        }
        if (transitionState1 === native.TransitionStates.YEETED) {
          const result2 = analyticsLocations.set(1);
        } else if (mode.mode !== VoicePanelModes.PIP) {
          if (null == id) {
            const result3 = analyticsLocations.set(1);
          } else if (id !== cleanUp) {
            const result4 = analyticsLocations.set(0);
          } else {
            const result5 = analyticsLocations.set(1);
          }
        }
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = transitionState;
  };
  const tmp5Result16 = cleanUp(id[14]);
  fn4.__closure = {
    cheapWorkletShallowEqual: cleanUp(id[43]).cheapWorkletShallowEqual,
    VoicePanelModes: tmp9,
    TransitionStates: cleanUp(id[44]).TransitionStates,
    sharedVisible,
    isScrollVisible,
    runOnJS: cleanUp(id[14]).runOnJS,
    cleanUp,
    id,
  };
  fn4.__workletHash = 17099686269568;
  fn4.__initData = __initData10;
  const animatedReaction1 = tmp5Result16.useAnimatedReaction(I, fn4);
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = channelId.set(id);
  });
  closure_31 = tmp20;
  let obj6 = {
    cheapWorkletShallowEqual: cleanUp(id[43]).cheapWorkletShallowEqual,
    VoicePanelModes: tmp9,
    TransitionStates: cleanUp(id[44]).TransitionStates,
    sharedVisible,
    isScrollVisible,
    runOnJS: cleanUp(id[14]).runOnJS,
    cleanUp,
    id,
  };
  token = cleanUp(id[40]).useToken(tmp(tmp2[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp5Result17 = cleanUp(id[40]);
  class A {
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
        obj2 = closure_0(closure_2[48]);
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
        obj4 = closure_0(closure_2[48]);
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
        tmp44 = closure_1(closure_2[49]);
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
        if (value3 === closure_0(closure_2[44]).TransitionStates.YEETED) {
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
      tmp22 = closure_1(closure_2[41]);
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
            num5 = c28;
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
      obj9 = closure_0(closure_2[14]);
      num7 = 100;
      if (obj6.get()) {
        num7 = 0;
      }
      size1 = { zIndex: null, opacity: null, width: null, height: null, transform: null, borderRadius: null };
      obj11 = closure_0(closure_2[36]);
      size1.zIndex = obj9.withDelay(num7, obj11.withTiming(num2, closure_27));
      obj12 = closure_0(closure_2[36]);
      tmp31 = closure_26;
      str = "animate-never";
      if (isScrollVisible.get()) {
        str = "animate-always";
      }
      class E {
        constructor(arg0) {
          tmp = children;
          if (children) {
            tmp2 = closure_1_6;
            num = 0;
            tmp = 0 === closure_1_6.get();
          }
          if (tmp) {
            tmp3 = closure_1_30;
            tmp5 = cleanUp;
            tmp6 = id;
            value = closure_1_30.get();
            tmp = value === cleanUp(id[44]).TransitionStates.YEETED;
          }
          if (tmp) {
            tmp7 = cleanUp;
            tmp8 = id;
            obj = cleanUp(id[14]);
            tmp9 = closure_1_0;
            tmp10 = obj.runOnJS(closure_1_0)();
          }
          return;
        }
      }
      obj22 = {
        sharedVisible: obj8,
        sharedTransitionState: closure_30,
        TransitionStates: closure_0(closure_2[44]).TransitionStates,
        runOnJS: closure_0(closure_2[14]).runOnJS,
        cleanUp,
      };
      E.__closure = obj22;
      E.__workletHash = 6571273005437;
      E.__initData = closure_53;
      size1.opacity = obj12.withTiming(num3, tmp31, str, E);
      size1.width = width2;
      size1.height = height2;
      withSpringResult = num;
      if (!gestureActive) {
        tmp33 = closure_0;
        tmp34 = closure_2;
        obj14 = closure_0(closure_2[37]);
        tmp35 = layoutPhysics;
        str2 = "animate-always";
        withSpringResult = obj14.withSpring(num, layoutPhysics, "animate-always");
      }
      items = [, ,];
      items[0] = { translateX: withSpringResult };
      withSpringResult1 = sum;
      if (!gestureActive) {
        tmp37 = closure_0;
        tmp38 = closure_2;
        obj15 = closure_0(closure_2[37]);
        tmp39 = layoutPhysics;
        str3 = "animate-always";
        withSpringResult1 = obj15.withSpring(sum, layoutPhysics, "animate-always");
      }
      items[1] = { translateY: withSpringResult1 };
      obj23 = { scale: null };
      obj17 = closure_0(closure_2[37]);
      obj23.scale = obj17.withSpring(num6, closure_25);
      items[2] = obj23;
      size1.transform = items;
      obj18 = closure_0(closure_2[37]);
      size1.borderRadius = obj18.withSpring(tmp22Result, SCALE_PHYSICS);
      return size1;
    }
  }
  const tmp5Result18 = cleanUp(id[14]);
  A.__closure = {
    coords,
    focused,
    id,
    isPIP: pIPState.mode === pipAvoidanceSpecs.IN_APP,
    pipState: pIPState,
    getScaledPIPContainerHeight: cleanUp(id[48]).getScaledPIPContainerHeight,
    getClampedPIPPosition: cleanUp(id[48]).getClampedPIPPosition,
    wrapperDimensions,
    windowDimensions,
    safeArea,
    pipAvoidanceSpecs,
    derivedScrollValue: derivedValue1,
    xOffset: derivedValue2,
    calculateContentCenterOffset: coords(id[49]),
    contentDimensions,
    sharedTransitionState: sharedValue,
    TransitionStates: cleanUp(id[44]).TransitionStates,
    zIndexOverride: derivedValue,
    computeCardBorderRadius: coords(id[41]),
    mode,
    isSelf,
    defaultBorderRadius: token,
    sharedVisible,
    isRTCConnected,
    CONNECTING_OPACITY: derivedValue1,
    wrapperOffset,
    withDelay: cleanUp(id[14]).withDelay,
    withTiming: cleanUp(id[36]).withTiming,
    ZINDEX_TIMING: derivedValue,
    OPACITY_TIMING: id2,
    isScrollVisible,
    runOnJS: cleanUp(id[14]).runOnJS,
    cleanUp,
    withSpring: cleanUp(id[37]).withSpring,
    layoutPhysics,
    CARD_SCALE_PHYSICS: isSelf,
    SCALE_PHYSICS,
  };
  A.__workletHash = 17181555398390;
  A.__initData = __initData14;
  const animatedStyle = tmp5Result18.useAnimatedStyle(A);
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
    isPIP: pIPState.mode === pipAvoidanceSpecs.IN_APP,
    pipState: pIPState,
    getScaledPIPContainerHeight: cleanUp(id[48]).getScaledPIPContainerHeight,
    getClampedPIPPosition: cleanUp(id[48]).getClampedPIPPosition,
    wrapperDimensions,
    windowDimensions,
    safeArea,
    pipAvoidanceSpecs,
    derivedScrollValue: derivedValue1,
    xOffset: derivedValue2,
    calculateContentCenterOffset: coords(id[49]),
    contentDimensions,
    sharedTransitionState: sharedValue,
    TransitionStates: cleanUp(id[44]).TransitionStates,
    zIndexOverride: derivedValue,
    computeCardBorderRadius: coords(id[41]),
    mode,
    isSelf,
    defaultBorderRadius: token,
    sharedVisible,
    isRTCConnected,
    CONNECTING_OPACITY: derivedValue1,
    wrapperOffset,
    withDelay: cleanUp(id[14]).withDelay,
    withTiming: cleanUp(id[36]).withTiming,
    ZINDEX_TIMING: derivedValue,
    OPACITY_TIMING: id2,
    isScrollVisible,
    runOnJS: cleanUp(id[14]).runOnJS,
    cleanUp,
    withSpring: cleanUp(id[37]).withSpring,
    layoutPhysics,
    CARD_SCALE_PHYSICS: isSelf,
    SCALE_PHYSICS,
  };
  let tmpResult = coords(id[50]);
  if (tmp5Result19.isStableActivityParticipant(tmp7)) {
    const fn5 = () => {
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
    const tmp5Result20 = tmp5(tmp2[47]);
  }
  obj8.onDoubleTap = fn5;
  let fn6;
  if (null != id2) {
    fn6 = () =>
      showUserProfileActionSheetDefault({
        userId: id2,
        channelId,
        isVoiceContext: true,
        sourceAnalyticsLocations: analyticsLocations,
      });
  }
  obj8.onLongPress = fn6;
  const items1 = [pipHandoff, id, pIPState.mode === pipAvoidanceSpecs.IN_APP];
  tmp5Result19 = cleanUp(id[47]);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_31);
  }, items1);
  const items2 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items2);
  const tmpResultResult = tmpResult(obj8);
  sharedValue1 = cleanUp(id[14]).useSharedValue(0);
  const items3 = [pipHandoff, id];
  callback1 = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items3);
  const items4 = [pIPState.mode === pipAvoidanceSpecs.IN_APP, layoutPhysics, sharedValue1, callback1];
  const effect1 = obj.useEffect(() => {
    if (closure_31) {
      const result = sharedValue1.set(0);
      obj = spring;
      const fn = function t(arg0) {
        if (true === arg0) {
          cleanUp(id[14]).runOnJS(callback1)();
          obj = cleanUp(id[14]);
        }
      };
      const obj2 = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival: callback1 };
      fn.__closure = obj2;
      fn.__workletHash = 6072722765065;
      fn.__initData = __initData2;
      const result1 = sharedValue1.set(obj.withSpring(1, layoutPhysics, "animate-always", fn));
      return () => cleanUp(id[14]).cancelAnimation(sharedValue1);
    }
  }, items4);
  const tmp5Result21 = cleanUp(id[14]);
  let scale = pIPState.scale;
  sharedValue2 = cleanUp(id[14]).useSharedValue(scale.get());
  class De {
    constructor(arg0) {
      scale = closure_24.scale;
      value = scale.get();
      result = value / closure_35.get();
      size = {
        originX: children.currentOriginX,
        originY: children.currentOriginY,
        width: children.currentWidth * result,
        height: children.currentHeight * result,
      };
      obj1 = { animations: null, initialValues: null, callback: null };
      size1 = { originX: null, originY: null, width: null, height: null };
      obj4 = closure_0(closure_2[37]);
      size1.originX = obj4.withSpring(children.targetOriginX, layoutPhysics, "animate-always");
      obj5 = closure_0(closure_2[37]);
      size1.originY = obj5.withSpring(children.targetOriginY, layoutPhysics, "animate-always");
      obj6 = closure_0(closure_2[37]);
      size1.width = obj6.withSpring(children.targetWidth, layoutPhysics, "animate-always");
      obj7 = closure_0(closure_2[37]);
      size1.height = obj7.withSpring(children.targetHeight, layoutPhysics, "animate-always");
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
  const tmp5Result22 = cleanUp(id[14]);
  De.__closure = {
    pipState: pIPState,
    lastPIPScale: sharedValue2,
    withSpring: cleanUp(id[37]).withSpring,
    layoutPhysics,
    wrapperOffset,
  };
  De.__workletHash = 956032729711;
  De.__initData = __initData16;
  const items5 = [layoutPhysics, wrapperOffset, sharedValue2, pIPState.scale];
  const callback2 = obj.useCallback(De, items5);
  let obj10 = { gesture: tmpResultResult, children: null };
  let obj11 = { style: null, layout: callback2, children: children.children };
  const items6 = [tmp3.positionWrapper, animatedStyle];
  obj11.style = items6;
  obj10.children = windowDimensions(coords(id[38]), obj11);
  return windowDimensions(cleanUp(id[52]).GestureDetector, obj10);
}
const StyleSheet = fn(17).StyleSheet;
const VoicePanelConstants = fn(12530);
({
  VoicePanelCTACard: closure_9,
  VoicePanelModes: c10,
  MODE_CHANGE_PHYSICS: closure_11,
  SPEAKING_PHYSICS: closure_12,
  VoicePanelCardItemType: map1,
} = VoicePanelConstants);
const VoicePanelControlsModes = fn(12528).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17565).VoicePanelPIPModes;
const EDGE_GUTTER = fn(12533).EDGE_GUTTER;
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const ParticipantTypes = fn(4778).ParticipantTypes;
let SCALE_PHYSICS = fn(12531).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_23 = ReanimatedRexport.createAnimatedComponent(fn(4753).Text);
let ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let tmp4 = fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.XXLARGE];
let obj = {};
let merged = Object.assign(SCALE_PHYSICS);
obj.stiffness = 150;
let closure_26 = { duration: 200 };
let closure_27 = { duration: 0 };
let c28 = 0.75;
const createStyles = fn(4757);
let obj2 = {
  positionWrapper: null,
  userRoundedCard: null,
  nonUserRoundedCard: null,
  blackBackground: null,
  selfStreamFocusedSubtitle: null,
  avatarImageMaskStyles: null,
  avatarPlaceholder: null,
  image: null,
  speakingIndicatorWrapper: null,
  speakingIndicatorUnderlay: null,
  speakingIndicatorGreenBar: null,
};
const rect = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
obj2.positionWrapper = rect;
const rect1 = {
  position: "absolute",
  top: -4,
  left: -4,
  bottom: -4,
  right: -4,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
};
obj2.userRoundedCard = rect1;
let size = {
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
};
obj2.nonUserRoundedCard = size;
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = "black";
obj2.blackBackground = obj3;
obj2.selfStreamFocusedSubtitle = { textAlign: "center", marginTop: 4, marginBottom: 40 };
obj2.avatarImageMaskStyles = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let size1 = { width: tmp4, height: tmp4, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj2.avatarPlaceholder = size1;
obj2.image = { maxWidth: 80, maxHeight: 80 };
let obj6 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6.overflow = "hidden";
obj2.speakingIndicatorWrapper = obj6;
let obj7 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7.borderColor = nativeDefault.colors.BLACK;
obj2.speakingIndicatorUnderlay = obj7;
let obj8 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj8.borderColor = nativeDefault.unsafe_rawColors.GREEN_360;
obj2.speakingIndicatorGreenBar = obj8;
let closure_29 = createStyles.createStyles(obj2);
let __initData = {
  code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}",
};
__initData = {
  code: "function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}",
};
__initData = {
  code: "function VoicePanelCardTsx3(isFocused,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused!==lastIsFocused){runOnJS(setIsFocused)(isFocused);}}",
};
let closure_34 = noop.memo((id) => {
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ sharedCoords, layout } = id);
  let setFocused;
  c6 = undefined;
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[25]));
  const focused = context.focused;
  setFocused = context.setFocused;
  const items = [c6];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = id(streamGuildId[26]).useStateFromStoresObject(
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
  obj = id(streamGuildId[26]);
  [tmp8, tmp9] = focused(setFocused.useState(false), 2);
  c6 = tmp9;
  const tmp7 = focused(setFocused.useState(false), 2);
  class I {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  I.__closure = { focused, id };
  I.__workletHash = 13061544667904;
  I.__initData = __initData;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(c6)(arg0);
    }
  };
  let obj2 = id(streamGuildId[14]);
  fn.__closure = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 };
  fn.__workletHash = 8824446489251;
  fn.__initData = __initData;
  const animatedReaction = obj2.useAnimatedReaction(I, fn);
  const obj3 = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 };
  const tmp11Result = userId(streamGuildId[27])(id(streamGuildId[28]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj4 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_20(SelfStreamCard, obj4);
  } else if (null == activeStream) {
    const obj5 = { mode: context.mode, stream, onPress: callback, disabled: false, layout };
    return closure_20(tmp4(streamGuildId[29]).VoicePanelStreamPreview, obj5);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj6 = {
            stream: activeStream,
            removeSplashImage: !tmp8,
            type: tmp4(streamGuildId[30]).VideoEmptyTypes.STREAM_ENDED,
            style: stream.absoluteFill,
          };
          return closure_20(tmp(streamGuildId[30]), obj6);
        } else {
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj7 = { title: null };
            const intl = tmp4(streamGuildId[23]).intl;
            obj7.title = intl.string(tmp4(streamGuildId[23]).t["pdFFK+"]);
            let tmp15 = closure_20(tmp4(streamGuildId[31]).StreamTextOverlay, obj7);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj8 = { title: null, subtext: null };
              const intl2 = tmp4(streamGuildId[23]).intl;
              obj8.title = intl2.string(tmp4(streamGuildId[23]).t["5q17w5"]);
              const intl3 = tmp4(streamGuildId[23]).intl;
              const obj9 = { username: userNick };
              obj8.subtext = intl3.formatToPlainString(tmp4(streamGuildId[23]).t.meVVlb, obj9);
              tmp15 = closure_20(tmp4(streamGuildId[31]).StreamTextOverlay, obj8);
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
          const tmpResult3 = tmp(streamGuildId[32]);
          obj10.streamKey = tmp4(streamGuildId[21]).encodeStreamKey(activeStream);
          obj10.isScrollVisible = isScrollVisible;
          obj10.videoSpinnerContext = tmp4(streamGuildId[33]).VideoSpinnerContext.REMOTE_STREAM;
          obj10.sharedCoords = sharedCoords;
          obj10.paused = activeStream.state === ApplicationStreamStates.PAUSED;
          const items3 = [closure_20(tmpResult3, obj10), tmp15];
          obj11.children = items3;
          return closure_22(closure_21, obj11);
        }
      }
    }
    const obj12 = {
      avError: tmp11Result,
      stream: activeStream,
      removeSplashImage: !tmp8,
      type: tmp4(streamGuildId[30]).VideoEmptyTypes.STREAM_FAILED,
      style: stream.absoluteFill,
    };
    return closure_20(tmp(streamGuildId[30]), obj12);
  }
  const tmp11 = userId(streamGuildId[27]);
});
const __initData2 = {
  code: "function VoicePanelCardTsx4(){const{withTiming,isRinging,CONNECTING_OPACITY,solidBackgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:solidBackgroundColor};}",
};
const __initData3 = {
  code: "function VoicePanelCardTsx5(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}",
};
let closure_37 = noop.memo(function AnimatedUserCardInner(isRinging) {
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  let mode;
  ({ userId, guildId } = isRinging);
  const tmp = closure_29();
  mode = noop.useContext(layoutPhysics(mode[25])).mode;
  const dominantColorFromImage = isRinging(mode[34]).useDominantColorFromImage(avatarURI);
  const tmp6 = layoutPhysics(mode[35])({ userId, guildId, location: "VoicePanelCard-native" });
  let str = "transparent";
  if (null == tmp6) {
    str = dominantColorFromImage;
  }
  obj = isRinging(mode[34]);
  const fn = function f() {
    let num = 1;
    if (isRinging) {
      num = c28;
    }
    return { opacity: timing.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: str };
  };
  const tmp4Result = isRinging(mode[14]);
  fn.__closure = {
    withTiming: isRinging(mode[36]).withTiming,
    isRinging,
    CONNECTING_OPACITY,
    solidBackgroundColor: str,
  };
  fn.__workletHash = 15279139669693;
  fn.__initData = __initData2;
  const animatedStyle = tmp4Result.useAnimatedStyle(fn);
  let obj2 = { withTiming: isRinging(mode[36]).withTiming, isRinging, CONNECTING_OPACITY, solidBackgroundColor: str };
  const fn2 = function _() {
    let num = 1;
    if (mode.get() === VoicePanelModes.PIP) {
      num = 0.8;
    }
    const obj2 = { transform: null };
    const items = [{ scale: spring.withSpring(num, layoutPhysics) }];
    obj2.transform = items;
    return obj2;
  };
  const tmp4Result3 = isRinging(mode[14]);
  fn2.__closure = { withSpring: isRinging(mode[37]).withSpring, mode, VoicePanelModes, layoutPhysics };
  fn2.__workletHash = 5040632730576;
  fn2.__initData = __initData3;
  let cachedSourceFromURI;
  const animatedStyle1 = tmp4Result3.useAnimatedStyle(fn2);
  if (null != avatarURI) {
    cachedSourceFromURI = tmp4(tmp3[34]).getCachedSourceFromURI(avatarURI);
    const tmp4Result4 = tmp4(tmp3[34]);
  }
  const obj4 = { style: null, layout, children: null };
  let items = [tmp.userRoundedCard, animatedStyle];
  obj4.style = items;
  let tmp12 = null;
  const obj3 = { withSpring: isRinging(mode[37]).withSpring, mode, VoicePanelModes, layoutPhysics };
  if (null != tmp6) {
    const obj5 = {
      colors: tmp6,
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      style: StyleSheet.absoluteFill,
      layout,
      pointerEvents: "none",
    };
    tmp12 = closure_20(LinearGradient, obj5);
  }
  const items1 = [tmp12];
  if (null == cachedSourceFromURI) {
    const obj6 = { style: tmp.avatarPlaceholder };
    let tmp21Result2 = closure_20(layoutPhysics(tmp3[22]), obj6);
  } else {
    let prop;
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj7 = { style: null, layout: null, children: null };
    const items2 = [prop, animatedStyle1];
    obj7.style = items2;
    obj7.layout = layout;
    if (null != avatarDecoration) {
      const obj8 = { source: cachedSourceFromURI, size: tmp4(tmp3[17]).AvatarSizes.XXLARGE, avatarDecoration };
      let tmp21Result = closure_20(tmp4(tmp3[17]).Avatar, obj8);
    } else {
      const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
      tmp21Result = closure_20(layoutPhysics(tmp3[39]), size);
    }
    obj7.children = tmp21Result;
    tmp21Result2 = closure_20(layoutPhysics(tmp3[38]), obj7);
    const tmp2Result2 = layoutPhysics(tmp3[38]);
  }
  items1[1] = tmp21Result2;
  obj4.children = items1;
  return closure_22(layoutPhysics(mode[38]), obj4);
});
const __initData4 = {
  code: "function VoicePanelCardTsx6(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
const __initData5 = {
  code: "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
const __initData6 = {
  code: "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}",
};
let closure_42 = noop.memo((id) => {
  const tmp = id(
    noop.useState(() => SpeakingStore.isSpeaking(id.id)),
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
    }
  }, items);
  let tmp4 = null;
  if (first) {
    obj = {};
    const merged = Object.assign(id);
    tmp4 = closure_20(SpeakingIndicator, obj);
  }
  return tmp4;
});
const __initData7 = {
  code: "function VoicePanelCardTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData8 = {
  code: "function VoicePanelCardTsx10(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}",
};
const __initData9 = {
  code: "function VoicePanelCardTsx11(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}",
};
const __initData10 = {
  code: "function VoicePanelCardTsx12(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}",
};
let closure_47 = { isSelf: false, hasVideo: false, user: { id: "max" } };
function layoutTransitionFunction(originX, SUBTLE_SPRING, scale, sharedValue2) {
  if (flag === undefined) {
    flag = false;
  }
  value = scale.get();
  let result = value / sharedValue2.get();
  let str = "animate-always";
  let str2 = "animate-always";
  if (flag) {
    str2 = "animate-never";
  }
  const size = {
    originX: spring.withSpring(originX.targetOriginX, SUBTLE_SPRING, str2),
    originY: null,
    width: null,
    height: null,
  };
  let str3 = str;
  if (flag) {
    str3 = "animate-never";
  }
  size.originY = spring.withSpring(originX.targetOriginY, SUBTLE_SPRING, str3);
  const tmp3Result = spring;
  let str4 = str;
  if (flag) {
    str4 = "animate-never";
  }
  size.width = spring.withSpring(originX.targetWidth, SUBTLE_SPRING, str4);
  const tmp3Result3 = spring;
  if (flag) {
    str = "animate-never";
  }
  const obj2 = { animations: null, initialValues: null, callback: null };
  size.height = spring.withSpring(originX.targetHeight, SUBTLE_SPRING, str);
  obj2.animations = size;
  obj2.initialValues = {
    originX: originX.currentOriginX,
    originY: originX.currentOriginY,
    width: originX.currentWidth * result,
    height: originX.currentHeight * result,
  };
  obj2.callback = function callback() {
    const result = sharedValue2.set(scale.get());
  };
  return obj2;
}
let obj4 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
layoutTransitionFunction.__closure = { withSpring: fn(5186).withSpring };
layoutTransitionFunction.__workletHash = 7623737347361;
layoutTransitionFunction.__initData = {
  code: "function layoutTransitionFunction_VoicePanelCardTsx13(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();return{animations:{originX:withSpring(values.targetOriginX,physics,!disableAnimation?'animate-always':'animate-never'),originY:withSpring(values.targetOriginY,physics,!disableAnimation?'animate-always':'animate-never'),width:withSpring(values.targetWidth,physics,!disableAnimation?'animate-always':'animate-never'),height:withSpring(values.targetHeight,physics,!disableAnimation?'animate-always':'animate-never')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}",
};
const __initData11 = {
  code: "function VoicePanelCardTsx14(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}",
};
const __initData12 = {
  code: "function VoicePanelCardTsx15(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}",
};
const __initData13 = {
  code: "function VoicePanelCardTsx16(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}",
};
const __initData14 = {
  code: "function VoicePanelCardTsx17(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'animate-always')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'animate-always')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}",
};
const __initData15 = {
  code: "function VoicePanelCardTsx18(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
let closure_54 = {
  code: "function VoicePanelCardTsx19(finished){const{runOnJS,reportPIPArrival}=this.__closure;if(finished===true){runOnJS(reportPIPArrival)();}}",
};
const __initData16 = {
  code: "function VoicePanelCardTsx20(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'animate-always'),originY:withSpring(values.targetOriginY,layoutPhysics,'animate-always'),width:withSpring(values.targetWidth,layoutPhysics,'animate-always'),height:withSpring(values.targetHeight,layoutPhysics,'animate-always')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}",
};
const __initData17 = {
  code: "function VoicePanelCardTsx21(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}",
};
let closure_58 = {
  code: "function layoutTransition_VoicePanelCardTsx22(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}",
};
let obj9 = { withSpring: fn(5186).withSpring };
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
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[25]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp4 = windowDimensions(id2[47])(id, channelId, guildId);
  let tmp6 = tmp4;
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_47;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  obj2 = scrollPosition(id2[47]);
  const items = [RTCConnectionStore];
  const stateFromStores = scrollPosition(id2[26]).useStateFromStores(items, () => connected.isConnected());
  const tmp5Result = scrollPosition(id2[26]);
  const tmp8 = scrollPosition(id2[47]).isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type1;
  const tmp5Result10 = scrollPosition(id2[47]);
  if (tmp4 != null) {
    type1 = tmp4.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    let DEFAULT = tmp5(tmp2[28]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[28]).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = windowDimensions(id2[27])(DEFAULT, str);
  windowDimensions(id2[53])(str);
  const tmpResult = windowDimensions(id2[27]);
  if (transitionState === scrollPosition(id2[44]).TransitionStates.MOUNTED) {
    let num = 1;
  } else {
    num = 0;
  }
  const sharedValue = scrollPosition(id2[14]).useSharedValue(num);
  const tmp5Result11 = scrollPosition(id2[14]);
  let isSpeakingResult = null != id2;
  if (isSpeakingResult) {
    isSpeakingResult = SpeakingStore.isSpeaking(id2);
  }
  sharedValue1 = scrollPosition(id2[14]).useSharedValue(isSpeakingResult);
  const items1 = [id2, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      let isSpeakingResult = null != id2;
      if (isSpeakingResult) {
        isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
      }
      const result = sharedValue1.set(isSpeakingResult);
    }
    let isSpeakingResult = null != id2;
    if (isSpeakingResult) {
      isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
    }
    let result = sharedValue1.set(isSpeakingResult);
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result12 = scrollPosition(id2[14]);
  cardLayoutCoordsSubscription = scrollPosition(id2[54]).useCardLayoutCoordsSubscription(id, layoutManager);
  const tmp5Result13 = scrollPosition(id2[54]);
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
  fn.__initData = __initData17;
  const derivedValue = scrollPosition(id2[14]).useDerivedValue(fn);
  const obj3 = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  const tmp5Result14 = scrollPosition(id2[14]);
  pIPState = scrollPosition(id2[46]).usePIPState();
  const tmp5Result15 = scrollPosition(id2[46]);
  const scale = pIPState.scale;
  sharedValue2 = scrollPosition(id2[14]).useSharedValue(scale.get());
  const items2 = [pIPState.scale, sharedValue2];
  const memo = obj.useMemo(() => {
    const physics = {
      mass: closure_1_11.mass,
      damping: windowDimensions(id2[55])(closure_1_11.damping - 2, closure_1_11.damping + 2),
      stiffness: windowDimensions(id2[55])(closure_1_11.stiffness - 20, closure_1_11.stiffness + 20),
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
      let tmp29Result = closure_20(tmp(tmp2[56]), {});
      let tmp27 = closure_20;
    } else if (tmp38.CALLER_DISCONNECTED === id3) {
      tmp29Result = closure_20(tmp(tmp2[57]), {});
      tmp27 = closure_20;
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
    const items3 = [tmp29Result, ,];
    let tmp27Result = null != tmp4;
    if (tmp27Result) {
      const obj5 = { isRinging: tmp8, participant: tmp4, label: null, layout: null, speaking: null };
      const tmpResult3 = tmp(tmp2[60]);
      let userNick;
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      obj5.label = userNick;
      obj5.layout = layoutTransition;
      obj5.speaking = sharedValue1;
      tmp27Result = tmp27(tmpResult3, obj5);
      tmp5Result17 = tmp5(tmp2[47]);
    }
    items3[1] = tmp27Result;
    let result = tmp5(tmp2[47]).isStableParticipantWithUser(tmp4);
    if (result) {
      const obj6 = { speaking: sharedValue1, id, isSelf, layout: layoutTransition };
      result = tmp27(closure_42, obj6);
    }
    items3[2] = result;
    obj4.children = items3;
    return closure_22(AnimatedWrapper, obj4);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          if (tmp4.canRenderVideo) {
            if (null == tmpResultResult) {
              let tmp31 = closure_20;
              const obj7 = {
                id: tmp28,
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
              const VideoSpinnerContext = tmp5(tmp2[33]).VideoSpinnerContext;
              obj7.videoSpinnerContext = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj7.sharedCoords = cardLayoutCoordsSubscription;
              if (isCall) {
                isCall = !isSelf;
              }
              obj7.focusOnReady = isCall;
              obj7.layout = layoutTransition;
              let tmp31Result = tmp31(tmp(tmp2[32]), obj7);
              const tmpResult4 = tmp(tmp2[32]);
            }
            const obj8 = { avError: tmpResultResult, userId: user.id, style: null };
            user = pIPState.absoluteFill;
            obj8.style = user;
            tmp31Result = closure_20(tmp(tmp2[58]), obj8);
            tmp31 = closure_20;
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
      };
      const userAvatarDecoration = tmp4.userAvatarDecoration;
      obj9.avatarDecoration = userAvatarDecoration;
      obj9.layout = layoutTransition;
      obj9.layoutPhysics = physics;
      obj9.userId = user.id;
      obj9.guildId = guildId;
      tmp27 = closure_20;
      tmp29Result = closure_20(closure_37, obj9);
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
      tmp29Result = closure_20(closure_34, obj10);
      tmp27 = closure_20;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj11 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: layoutTransition };
      tmp29Result = closure_20(tmp(tmp2[59]), obj11, tmp4.id);
      tmp27 = closure_20;
    }
  }
  const obj13 = {
    isRinging: tmp8,
    avatarURI: "r",
    avatarDecoration: "ip",
    layout: layoutTransition,
    layoutPhysics: physics,
  };
  tmp29Result = closure_20(closure_37, obj13);
  tmp27 = closure_20;
  const tmp5Result16 = scrollPosition(id2[14]);
});
