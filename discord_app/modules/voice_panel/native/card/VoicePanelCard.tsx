// discord_app/modules/voice_panel/native/card/VoicePanelCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
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

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function SelfStreamCard(sharedCoords) {
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = closure_29();
  const items = [stream];
  const callback = noop.useCallback(() => {
    if (null != stream) {
      const obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(tmp));
    }
  }, items);
  let obj = sharedCoords(isFocused[14]);
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
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: tmp.nonUserRoundedCard, children: null };
  let tmp9 = isFocused;
  if (isFocused) {
    obj = { style: tmp.blackBackground };
    tmp9 = closure_20(stream(tmp4[22]), obj);
  }
  const items1 = [tmp9, ,];
  const obj1 = { style: animatedStyle, variant: null, color: "text-overlay-light", children: null };
  let str = "text-sm/semibold";
  if (isFocused) {
    str = "text-lg/semibold";
  }
  obj1.variant = str;
  const intl = tmp3(tmp4[23]).intl;
  obj1.children = intl.string(sharedCoords(isFocused[23]).t.gMOwov);
  items1[1] = closure_20(closure_23, obj1);
  let tmp6Result = null;
  if (isFocused) {
    let obj2 = { children: null };
    const obj3 = {
      style: tmp.selfStreamFocusedSubtitle,
      variant: "text-sm/medium",
      color: "text-overlay-light",
      children: null,
    };
    const intl2 = tmp3(tmp4[23]).intl;
    obj3.children = intl2.string(tmp3(tmp4[23]).t.dKeLGt);
    const items2 = [closure_20(tmp3(tmp4[15]).Text, obj3)];
    const obj4 = { size: "lg", variant: "primary-overlay", onPress: callback, text: null };
    const intl3 = tmp3(tmp4[23]).intl;
    obj4.text = intl3.string(tmp3(tmp4[23]).t.CpkXwZ);
    items2[1] = closure_20(tmp3(tmp4[24]).Button, obj4);
    obj2.children = items2;
    tmp6Result = closure_22(closure_21, obj2);
  }
  items1[2] = tmp6Result;
  obj.children = items1;
  return closure_22(stream(isFocused[22]), obj);
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
  __closure = id(speaking[40]);
  const token = __closure.useToken(isSelf(speaking[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj1 = id(speaking[14]);
  const fn = function u() {
    let obj = mode;
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
    obj = { opacity: num, borderRadius: null };
    let num2 = 0;
    if (!tmp) {
      obj = { id, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      obj.mode = obj.get();
      value = focused.get();
      let id1;
      if (value != null) {
        id1 = value.id;
      }
      obj.focused = id1;
      obj.isSelf = isSelf;
      obj.defaultBorderRadius = token;
      num2 = computeCardBorderRadiusDefault(obj);
    }
    let str = "animate-always";
    if (tmp) {
      str = "animate-never";
    }
    obj.borderRadius = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj;
  };
  __closure = {
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
  fn.__closure = __closure;
  fn.__workletHash = 5111620492405;
  fn.__initData = __initData4;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = id(speaking[14]);
  const fn2 = function c() {
    let obj = mode;
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
      obj = { id, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      obj.mode = obj.get();
      value = focused.get();
      let id1;
      if (value != null) {
        id1 = value.id;
      }
      obj.focused = id1;
      obj.isSelf = isSelf;
      obj.defaultBorderRadius = token;
      num = computeCardBorderRadiusDefault(obj);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    obj = { borderRadius: spring.withSpring(num, SPEAKING_PHYSICS, str2), borderWidth: null };
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
    obj.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj;
  };
  __closure = {
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
  fn2.__closure = __closure;
  fn2.__workletHash = 13144186988728;
  fn2.__initData = __initData5;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  const fn3 = function h() {
    let obj = mode;
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
      obj = { id, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      obj.mode = obj.get();
      value = focused.get();
      let id1;
      if (value != null) {
        id1 = value.id;
      }
      obj.focused = id1;
      obj.isSelf = isSelf;
      obj.defaultBorderRadius = token;
      num = computeCardBorderRadiusDefault(obj);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    obj = { borderRadius: spring.withSpring(num, SPEAKING_PHYSICS, str2), borderWidth: null };
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
    obj.borderWidth = spring.withSpring(num2, SPEAKING_PHYSICS, str);
    return obj;
  };
  obj1 = {
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
  fn3.__closure = obj1;
  fn3.__workletHash = 2850608131549;
  fn3.__initData = __initData6;
  const animatedStyle2 = id(speaking[14]).useAnimatedStyle(fn3);
  let obj2 = { style: null, layout, pointerEvents: "none", children: null };
  const items = [tmp2.speakingIndicatorWrapper, animatedStyle];
  obj2.style = items;
  const obj6 = id(speaking[14]);
  obj3 = { style: null, layout };
  const items1 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  obj3.style = items1;
  const items2 = [closure_20(isSelf(speaking[38]), obj3)];
  const obj4 = { style: null, layout };
  const items3 = [tmp2.speakingIndicatorGreenBar, animatedStyle2];
  obj4.style = items3;
  items2[1] = closure_20(isSelf(speaking[38]), obj4);
  obj2.children = items2;
  return closure_22(isSelf(speaking[38]), obj2);
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
  const analyticsLocations = coords(id[45])().analyticsLocations;
  __closure = isScrollVisible;
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
  const panelCardStillInPIP = context.panelCardStillInPIP;
  let obj1 = cleanUp(id[46]);
  const pIPState = obj1.usePIPState();
  const tmp7 = coords(id[47])(id, channelId, context.guildId);
  let obj2 = cleanUp(id[47]);
  let tmp8 = tmp7;
  if (!obj2.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_47;
  }
  isSelf = tmp8.isSelf;
  id2 = tmp8.user.id;
  let tmp5Result = tmp5(tmp2[14]);
  class I {
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
  I.__closure = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  I.__workletHash = 4773864088866;
  I.__initData = __initData11;
  derivedValue = tmp5Result.useDerivedValue(I);
  tmp5Result = tmp5(tmp2[14]);
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
  derivedValue1 = tmp5Result.useDerivedValue(E);
  let tmp3 = derivedValue2();
  let tmp9 = contentDimensions;
  let fn = function b() {
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
  __closure = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  fn.__closure = __closure;
  fn.__workletHash = 15078431132990;
  fn.__initData = __initData13;
  derivedValue2 = cleanUp(id[14]).useDerivedValue(fn);
  closure_129_0 = id;
  closure_129_1 = tmp7;
  closure_129_2 = transitionState;
  closure_129_3 = cleanUp;
  closure_129_4 = mode;
  closure_129_5 = focused;
  closure_129_6 = isScrollVisible;
  closure_129_7 = sharedVisible;
  closure_129_10 = undefined;
  const tmp5Result1 = cleanUp(id[14]);
  sharedValue = cleanUp(id[14]).useSharedValue(transitionState);
  closure_129_8 = sharedValue;
  const tmp14 = isRTCConnected(__closure.useState(true), 2);
  closure_129_9 = tmp14[1];
  let type;
  if (tmp7 != null) {
    type = tmp7.type;
  }
  let items = [type, id];
  const callback = __closure.useCallback((arg0) => {
    let type;
    if (coords != null) {
      type = coords.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      connected(arg0 !== cleanUp);
    }
  }, items);
  closure_129_10 = callback;
  const tmp5Result2 = cleanUp(id[14]);
  const fn2 = function w() {
    value = layoutPhysics.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn2.__closure = { focused };
  fn2.__workletHash = 12145773243163;
  fn2.__initData = __initData7;
  const fn3 = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(contentDimensions)(arg0);
    }
  };
  __closure = { runOnJS: tmp5(tmp2[14]).runOnJS, handleFocusedParticipantChange: callback };
  fn3.__closure = __closure;
  fn3.__workletHash = 9304160478829;
  fn3.__initData = __initData8;
  const animatedReaction = cleanUp(id[14]).useAnimatedReaction(fn2, fn3);
  const tmp5Result3 = cleanUp(id[14]);
  const fn4 = function y() {
    return { mode: isScrollVisible.get(), focused: layoutPhysics.get(), transitionState: channelId.get() };
  };
  fn4.__closure = { mode, focused, sharedTransitionState: sharedValue };
  fn4.__workletHash = 13570020810295;
  fn4.__initData = __initData9;
  class P {
    constructor(arg0, arg1) {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[43]);
      tmp3 = arg1;
      if (!obj.cheapWorkletShallowEqual(children, tmp3)) {
        ({ focused, transitionState } = children);
        tmp4 = VoicePanelModes;
        if (focused != null) {
          id = focused.id;
        }
        if (null == arg1) {
          if (transitionState !== tmp(tmp2[44]).TransitionStates.YEETED) {
            tmp19 = analyticsLocations;
            num7 = 1;
            result = analyticsLocations.set(1);
          }
        }
        if (transitionState === tmp(tmp2[44]).TransitionStates.YEETED) {
          obj2 = analyticsLocations;
          num5 = 1;
          if (1 === analyticsLocations.get()) {
            tmp15 = sharedVisible;
            if (sharedVisible.get()) {
              num6 = 0;
              result1 = obj2.set(0);
            }
          }
          tmpResult = tmp(tmp2[14]);
          tmp16 = isRTCConnected;
          tmp17 = tmpResult.runOnJS(isRTCConnected)();
        } else {
          transitionState = undefined;
          if (arg1 != null) {
            transitionState = arg1.transitionState;
          }
          if (transitionState === tmp(tmp2[44]).TransitionStates.YEETED) {
            tmp13 = analyticsLocations;
            num4 = 1;
            result2 = analyticsLocations.set(1);
          } else if (children.mode !== VoicePanelModes.PIP) {
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
  obj1 = {
    cheapWorkletShallowEqual: tmp5(tmp2[43]).cheapWorkletShallowEqual,
    VoicePanelModes: tmp9,
    TransitionStates: tmp5(tmp2[44]).TransitionStates,
    sharedVisible,
    isScrollVisible,
    runOnJS: tmp5(tmp2[14]).runOnJS,
    cleanUp,
    id,
  };
  P.__closure = obj1;
  P.__workletHash = 17099686269568;
  P.__initData = __initData10;
  const animatedReaction1 = cleanUp(id[14]).useAnimatedReaction(fn4, P);
  const layoutEffect = __closure.useLayoutEffect(() => {
    const result = channelId.set(id);
  });
  closure_31 = tmp20;
  const tmp5Result4 = cleanUp(id[14]);
  token = cleanUp(id[40]).useToken(tmp(tmp2[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp5Result5 = cleanUp(id[40]);
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
        size = closure_24;
        width3 = closure_24.width;
        tmp10 = closure_0;
        tmp11 = closure_2;
        tmp9 = closure_24.showSecondaryPIP ? size.containerHeight : size.height;
        obj3 = closure_0(closure_2[48]);
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
        tmp12 = wrapperDimensions;
        size.pipX = wrapperDimensions.get().pipX;
        size.pipY = wrapperDimensions.get().pipY;
        size.width = width3;
        size.height = tmp9;
        tmp13 = windowDimensions;
        size.windowDimensions = windowDimensions.get();
        tmp14 = safeArea;
        size.safeArea = safeArea.get();
        tmp15 = pipAvoidanceSpecs;
        size.bottomAvoidanceRegion = pipAvoidanceSpecs.get().bottom;
        size.topAvoidanceRegion = pipAvoidanceSpecs.get().top;
        point = obj3.getClampedPIPPosition(size);
        x2 = point.x;
        tmp16 = closure_28;
        sum = closure_28.get() + point.y;
        height3 = closure_24.height;
        tmp18 = width3;
        tmp19 = zIndex;
      } else {
        if (null != obj.get()) {
          value2 = y;
          num = x;
          height2 = height;
          width2 = width;
          num2 = 0;
          if (tmp5) {
            tmp7 = windowDimensions;
            width2 = windowDimensions.get().width;
            height2 = windowDimensions.get().height;
            tmp8 = closure_28;
            value2 = closure_28.get();
            num2 = 1;
            num = 0;
          }
        } else {
          tmp70 = closure_29;
          sum1 = x + closure_29.get();
          tmp72 = closure_1;
          tmp73 = closure_2;
          obj = { contentHeight: null, windowHeight: null, safeArea: null };
          tmp75 = contentDimensions;
          tmp74 = closure_1(closure_2[49]);
          obj.contentHeight = contentDimensions.get().height;
          tmp76 = windowDimensions;
          obj.windowHeight = windowDimensions.get().height;
          tmp77 = safeArea;
          obj.safeArea = safeArea.get();
          sum2 = y + tmp74(obj);
          tmp79 = closure_30;
          tmp81 = closure_0;
          tmp82 = closure_2;
          value3 = closure_30.get();
          value2 = sum2;
          num = sum1;
          height2 = height;
          width2 = width;
          num2 = zIndex;
          if (value3 === closure_0(closure_2[44]).TransitionStates.YEETED) {
            num11 = 4;
            value2 = sum2 + height / 4;
            num = sum1;
            height2 = height;
            width2 = width;
            num2 = zIndex;
          }
        }
        obj4 = closure_27;
        if (closure_27.get()) {
          num2 = 9001;
        }
        tmp20 = closure_1;
        tmp21 = closure_2;
        obj1 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
        obj1.id = tmp4;
        tmp23 = mode;
        tmp22 = closure_1(closure_2[41]);
        obj1.mode = mode.get();
        value4 = obj.get();
        id1 = undefined;
        if (value4 != null) {
          id1 = value4.id;
        }
        obj1.focused = id1;
        tmp26 = isSelf;
        obj1.isSelf = isSelf;
        tmp27 = closure_32;
        obj1.defaultBorderRadius = closure_32;
        obj6 = sharedVisible;
        tmp22Result = tmp22(obj1);
        num3 = 0;
        if (0 !== sharedVisible.get()) {
          num5 = 1;
          num6 = 1;
          if (!tmp5) {
            tmp31 = isRTCConnected;
            num6 = 1;
            if (!isRTCConnected) {
              num6 = c28;
            }
          }
          num4 = num6;
        } else {
          value5 = obj.get();
          id2 = undefined;
          if (value5 != null) {
            id2 = value5.id;
          }
          num4 = 0;
        }
        tmp32 = wrapperOffset;
        gestureActive = wrapperOffset.get().gestureActive;
        num7 = 1;
        if (1 === obj6.get()) {
          num8 = 1;
        } else {
          value6 = obj.get();
          id3 = undefined;
          if (value6 != null) {
            id3 = value6.id;
          }
          num8 = 0.8;
        }
        tmp35 = closure_0;
        tmp36 = closure_2;
        obj7 = closure_0(closure_2[14]);
        num9 = 100;
        if (obj4.get()) {
          num9 = 0;
        }
        size1 = { zIndex: null, opacity: null, width: null, height: null, transform: null, borderRadius: null };
        tmp37 = closure_0;
        tmp38 = closure_2;
        obj9 = closure_0(closure_2[36]);
        tmp39 = closure_27;
        size1.zIndex = obj7.withDelay(num9, obj9.withTiming(num2, closure_27));
        tmp40 = closure_0;
        tmp41 = closure_2;
        obj10 = closure_0(closure_2[36]);
        tmp42 = closure_26;
        tmp43 = isScrollVisible;
        str = "animate-never";
        if (isScrollVisible.get()) {
          str = "animate-always";
        }
        fn = function v(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = 0 === sharedVisible.get();
          }
          if (tmp) {
            value = sharedValue.get();
            tmp = value === cleanUp(id[44]).TransitionStates.YEETED;
          }
          if (tmp) {
            cleanUp(id[14]).runOnJS(closure_1_0)();
            const obj = cleanUp(id[14]);
          }
        };
        obj2 = {
          sharedVisible: null,
          sharedTransitionState: null,
          TransitionStates: null,
          runOnJS: null,
          cleanUp: null,
        };
        obj2.sharedVisible = obj6;
        tmp44 = closure_30;
        obj2.sharedTransitionState = closure_30;
        tmp45 = closure_0;
        tmp46 = closure_2;
        obj2.TransitionStates = closure_0(closure_2[44]).TransitionStates;
        tmp47 = closure_0;
        tmp48 = closure_2;
        obj2.runOnJS = closure_0(closure_2[14]).runOnJS;
        tmp49 = cleanUp;
        obj2.cleanUp = cleanUp;
        fn.__closure = obj2;
        num10 = 6571273005437;
        fn.__workletHash = 6571273005437;
        tmp50 = closure_53;
        fn.__initData = closure_53;
        tmp51 = obj10;
        tmp52 = num4;
        tmp53 = tmp42;
        tmp54 = str;
        tmp55 = fn;
        size1.opacity = obj10.withTiming(num4, tmp42, str, fn);
        size1.width = width2;
        size1.height = height2;
        withSpringResult = num;
        if (!gestureActive) {
          tmp57 = closure_0;
          tmp58 = closure_2;
          obj12 = closure_0(closure_2[37]);
          tmp59 = layoutPhysics;
          str2 = "animate-always";
          withSpringResult = obj12.withSpring(num, layoutPhysics, "animate-always");
        }
        obj3 = { translateX: null };
        obj3.translateX = withSpringResult;
        items = [, ,];
        items[0] = obj3;
        withSpringResult1 = value2;
        if (!gestureActive) {
          tmp61 = closure_0;
          tmp62 = closure_2;
          obj14 = closure_0(closure_2[37]);
          tmp63 = layoutPhysics;
          str3 = "animate-always";
          withSpringResult1 = obj14.withSpring(value2, layoutPhysics, "animate-always");
        }
        obj4 = { translateY: null };
        obj4.translateY = withSpringResult1;
        items[1] = obj4;
        obj5 = { scale: null };
        tmp64 = closure_0;
        tmp65 = closure_2;
        obj17 = closure_0(closure_2[37]);
        tmp66 = closure_25;
        obj5.scale = obj17.withSpring(num8, closure_25);
        items[2] = obj5;
        size1.transform = items;
        tmp67 = closure_0;
        tmp68 = closure_2;
        obj18 = closure_0(closure_2[37]);
        tmp69 = SCALE_PHYSICS;
        size1.borderRadius = obj18.withSpring(tmp22Result, SCALE_PHYSICS);
        return size1;
      }
      return;
    }
  }
  obj2 = {
    coords,
    focused,
    id,
    isPIP: tmp20,
    pipState: pIPState,
    getClampedPIPPosition: tmp5(tmp2[48]).getClampedPIPPosition,
    wrapperDimensions,
    windowDimensions,
    safeArea,
    pipAvoidanceSpecs,
    derivedScrollValue: derivedValue1,
    xOffset: derivedValue2,
    calculateContentCenterOffset: tmp(tmp2[49]),
    contentDimensions,
    sharedTransitionState: sharedValue,
    TransitionStates: tmp5(tmp2[44]).TransitionStates,
    zIndexOverride: derivedValue,
    computeCardBorderRadius: tmp(tmp2[41]),
    mode,
    isSelf,
    defaultBorderRadius: token,
    sharedVisible,
    isRTCConnected,
    CONNECTING_OPACITY: derivedValue1,
    wrapperOffset,
    withDelay: tmp5(tmp2[14]).withDelay,
    withTiming: tmp5(tmp2[36]).withTiming,
    ZINDEX_TIMING: derivedValue,
    OPACITY_TIMING: id2,
    isScrollVisible,
    runOnJS: tmp5(tmp2[14]).runOnJS,
    cleanUp,
    withSpring: tmp5(tmp2[37]).withSpring,
    layoutPhysics,
    CARD_SCALE_PHYSICS: isSelf,
    SCALE_PHYSICS,
  };
  A.__closure = obj2;
  A.__workletHash = 9934021851336;
  A.__initData = __initData14;
  const animatedStyle = cleanUp(id[14]).useAnimatedStyle(A);
  let obj3 = {
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
  const tmp5Result6 = cleanUp(id[14]);
  let tmpResult = coords(id[50]);
  if (tmp5Result7.isStableActivityParticipant(tmp7)) {
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
    const tmp5Result8 = tmp5(tmp2[47]);
  }
  obj3.onDoubleTap = fn5;
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
  obj3.onLongPress = fn6;
  const items1 = [pIPState.mode === pipAvoidanceSpecs.IN_APP, panelCardStillInPIP];
  tmp5Result7 = cleanUp(id[47]);
  const layoutEffect1 = __closure.useLayoutEffect(() => {
    const result = panelCardStillInPIP.set(closure_31);
  }, items1);
  function be(currentOriginX) {
    const size = {
      originX: currentOriginX.currentOriginX,
      originY: currentOriginX.currentOriginY,
      width: currentOriginX.currentWidth,
      height: currentOriginX.currentHeight,
    };
    const obj = { animations: null, initialValues: null, callback: null };
    const size1 = {
      originX: spring.withSpring(currentOriginX.targetOriginX, layoutPhysics, "animate-always"),
      originY: null,
      width: null,
      height: null,
    };
    size1.originY = spring.withSpring(currentOriginX.targetOriginY, layoutPhysics, "animate-always");
    size1.width = spring.withSpring(currentOriginX.targetWidth, layoutPhysics, "animate-always");
    size1.height = spring.withSpring(currentOriginX.targetHeight, layoutPhysics, "animate-always");
    obj.animations = size1;
    obj.initialValues = size;
    obj.callback = function callback() {
      value = wrapperOffset.get();
      let gestureActive = value.gestureActive;
      if (!gestureActive) {
        gestureActive = 0 === value.y;
      }
      if (!gestureActive) {
        const result = wrapperOffset.set({ gestureActive: false, x: 0, y: 0 });
      }
    };
    return obj;
  }
  const tmpResultResult = tmpResult(obj3);
  be.__closure = { withSpring: cleanUp(id[37]).withSpring, layoutPhysics, wrapperOffset };
  be.__workletHash = 2693592883668;
  be.__initData = __initData16;
  const items2 = [layoutPhysics, wrapperOffset];
  const callback1 = __closure.useCallback(be, items2);
  let obj5 = { gesture: tmpResultResult, children: null };
  let obj6 = { style: null, layout: callback1, children: children.children };
  const items3 = [tmp3.positionWrapper, animatedStyle];
  obj6.style = items3;
  obj5.children = windowDimensions(coords(id[38]), obj6);
  return windowDimensions(cleanUp(id[52]).GestureDetector, obj5);
}
const StyleSheet = fn(17).StyleSheet;
const VoicePanelConstants = fn(12273);
({
  VoicePanelCTACard: closure_9,
  VoicePanelModes: c10,
  MODE_CHANGE_PHYSICS: closure_11,
  SPEAKING_PHYSICS: closure_12,
  VoicePanelCardItemType: map1,
} = VoicePanelConstants);
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17088).VoicePanelPIPModes;
const EDGE_GUTTER = fn(12276).EDGE_GUTTER;
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const ParticipantTypes = fn(4581).ParticipantTypes;
let SCALE_PHYSICS = fn(12274).SCALE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = ReanimatedRexport.createAnimatedComponent(fn(4556).Text);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let tmp4 = fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.XXLARGE];
let __closure = {};
let merged = Object.assign(SCALE_PHYSICS);
__closure.stiffness = 150;
let closure_26 = { duration: 200 };
let closure_27 = { duration: 0 };
let c28 = 0.75;
fn(4560);
__closure = {
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
__closure.positionWrapper = rect;
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
__closure.userRoundedCard = rect1;
let size = {
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
};
__closure.nonUserRoundedCard = size;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.backgroundColor = "black";
__closure.blackBackground = obj1;
__closure.selfStreamFocusedSubtitle = { textAlign: "center", marginTop: 4, marginBottom: 40 };
__closure.avatarImageMaskStyles = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let size1 = { width: tmp4, height: tmp4, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
__closure.avatarPlaceholder = size1;
__closure.image = { maxWidth: 80, maxHeight: 80 };
let obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
__closure.speakingIndicatorWrapper = obj3;
const createStyles = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.borderColor = nativeDefault.colors.BLACK;
__closure.speakingIndicatorUnderlay = createStyles;
let obj5 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj5.borderColor = nativeDefault.unsafe_rawColors.GREEN_360;
__closure.speakingIndicatorGreenBar = obj5;
let closure_29 = createStyles.createStyles(__closure);
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
  __closure = id(streamGuildId[26]);
  const items = [c6];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = __closure.useStateFromStoresObject(
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
  [tmp8, tmp9] = focused(setFocused.useState(false), 2);
  c6 = tmp9;
  let obj1 = id(streamGuildId[14]);
  const fn = function y() {
    value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    return id === id;
  };
  fn.__closure = { focused, id };
  fn.__workletHash = 13061544667904;
  fn.__initData = __initData;
  class P {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(id);
      }
      return;
    }
  }
  __closure = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 };
  P.__closure = __closure;
  P.__workletHash = 8824446489251;
  P.__initData = __initData;
  const animatedReaction = obj1.useAnimatedReaction(fn, P);
  const tmp7 = focused(setFocused.useState(false), 2);
  const tmp11Result = userId(streamGuildId[27])(id(streamGuildId[28]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    __closure = { sharedCoords, stream, isFocused: tmp8 };
    return closure_20(SelfStreamCard, __closure);
  } else if (null == activeStream) {
    obj1 = { mode: context.mode, stream, onPress: callback, disabled: false, layout };
    return closure_20(tmp4(streamGuildId[29]).VoicePanelStreamPreview, obj1);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          let obj2 = { stream: activeStream, removeSplashImage: !tmp8, type: null, style: null };
          let tmpResult = tmp(streamGuildId[30]);
          obj2.type = tmp4(streamGuildId[30]).VideoEmptyTypes.STREAM_ENDED;
          obj2.style = stream.absoluteFill;
          return closure_20(tmpResult, obj2);
        } else {
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj3 = { title: null };
            const intl = tmp4(streamGuildId[23]).intl;
            obj3.title = intl.string(tmp4(streamGuildId[23]).t["pdFFK+"]);
            let tmp15 = closure_20(tmp4(streamGuildId[31]).StreamTextOverlay, obj3);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj4 = { title: null, subtext: null };
              const intl2 = tmp4(streamGuildId[23]).intl;
              obj4.title = intl2.string(tmp4(streamGuildId[23]).t["5q17w5"]);
              const intl3 = tmp4(streamGuildId[23]).intl;
              const obj5 = { username: userNick };
              obj4.subtext = intl3.formatToPlainString(tmp4(streamGuildId[23]).t.meVVlb, obj5);
              tmp15 = closure_20(tmp4(streamGuildId[31]).StreamTextOverlay, obj4);
            }
          }
          const obj6 = {
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
          tmpResult = tmp(streamGuildId[32]);
          if (streamId == null) {
            streamId = null;
          }
          const obj7 = { children: null };
          obj6.streamId = streamId;
          obj6.userId = userId;
          obj6.streamKey = tmp4(streamGuildId[21]).encodeStreamKey(activeStream);
          obj6.isScrollVisible = isScrollVisible;
          obj6.videoSpinnerContext = tmp4(streamGuildId[33]).VideoSpinnerContext.REMOTE_STREAM;
          obj6.sharedCoords = sharedCoords;
          obj6.paused = activeStream.state === ApplicationStreamStates.PAUSED;
          const items3 = [closure_20(tmpResult, obj6), tmp15];
          obj7.children = items3;
          return closure_22(closure_21, obj7);
        }
      }
    }
    const obj8 = {
      avError: tmp11Result,
      stream: activeStream,
      removeSplashImage: !tmp8,
      type: tmp4(streamGuildId[30]).VideoEmptyTypes.STREAM_FAILED,
      style: stream.absoluteFill,
    };
    return closure_20(tmp(streamGuildId[30]), obj8);
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
  __closure = isRinging(mode[34]);
  const dominantColorFromImage = __closure.useDominantColorFromImage(avatarURI);
  const tmp6 = layoutPhysics(mode[35])({ userId, guildId, location: "VoicePanelCard-native" });
  let str = "transparent";
  if (null == tmp6) {
    str = dominantColorFromImage;
  }
  let tmp4Result = tmp4(tmp3[14]);
  const fn = function f() {
    let obj = timing;
    let num = 1;
    if (isRinging) {
      num = c28;
    }
    obj = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: str };
    return obj;
  };
  __closure = { withTiming: tmp4(tmp3[36]).withTiming, isRinging, CONNECTING_OPACITY, solidBackgroundColor: str };
  fn.__closure = __closure;
  fn.__workletHash = 15279139669693;
  fn.__initData = __initData2;
  const animatedStyle = tmp4Result.useAnimatedStyle(fn);
  tmp4Result = tmp4(tmp3[14]);
  const fn2 = function _() {
    let obj = spring;
    let num = 1;
    if (mode.get() === VoicePanelModes.PIP) {
      num = 0.8;
    }
    obj = { transform: null };
    obj = { scale: obj.withSpring(num, layoutPhysics) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  __closure = { withSpring: tmp4(tmp3[37]).withSpring, mode, VoicePanelModes, layoutPhysics };
  fn2.__closure = __closure;
  fn2.__workletHash = 5040632730576;
  fn2.__initData = __initData3;
  let cachedSourceFromURI;
  const animatedStyle1 = tmp4Result.useAnimatedStyle(fn2);
  if (null != avatarURI) {
    cachedSourceFromURI = tmp4(tmp3[34]).getCachedSourceFromURI(avatarURI);
    const tmp4Result1 = tmp4(tmp3[34]);
  }
  const obj1 = { style: null, layout, children: null };
  let items = [tmp.userRoundedCard, animatedStyle];
  obj1.style = items;
  let tmp12 = null;
  let tmp2Result = layoutPhysics(tmp3[38]);
  if (null != tmp6) {
    const obj2 = {
      colors: tmp6,
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      style: StyleSheet.absoluteFill,
      layout,
      pointerEvents: "none",
    };
    tmp12 = closure_20(LinearGradient, obj2);
  }
  const items1 = [tmp12];
  if (null == cachedSourceFromURI) {
    const obj3 = { style: tmp.avatarPlaceholder };
    let tmp21Result = closure_20(layoutPhysics(tmp3[22]), obj3);
  } else {
    let prop;
    tmp2Result = layoutPhysics(tmp3[38]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj4 = { style: null, layout: null, children: null };
    const items2 = [prop, animatedStyle1];
    obj4.style = items2;
    obj4.layout = layout;
    if (null != avatarDecoration) {
      const obj5 = { source: cachedSourceFromURI, size: tmp4(tmp3[17]).AvatarSizes.XXLARGE, avatarDecoration };
      tmp21Result = closure_20(tmp4(tmp3[17]).Avatar, obj5);
    } else {
      const size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
      tmp21Result = closure_20(layoutPhysics(tmp3[39]), size);
    }
    obj4.children = tmp21Result;
    tmp21Result = closure_20(tmp2Result, obj4);
  }
  items1[1] = tmp21Result;
  obj1.children = items1;
  return closure_22(tmp2Result, obj1);
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
    const obj = {};
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
let closure_47 = { isSelf: false, hasVideo: false, user: { id: "Array" } };
function layoutTransitionFunction(originX, SUBTLE_SPRING) {
  if (flag === undefined) {
    flag = false;
  }
  let obj = spring;
  let str = "animate-always";
  let str2 = "animate-always";
  if (flag) {
    str2 = "animate-never";
  }
  const size = {
    originX: obj.withSpring(originX.targetOriginX, SUBTLE_SPRING, str2),
    originY: null,
    width: null,
    height: null,
  };
  let tmpResult = spring;
  let str3 = str;
  if (flag) {
    str3 = "animate-never";
  }
  size.originY = tmpResult.withSpring(originX.targetOriginY, SUBTLE_SPRING, str3);
  tmpResult = spring;
  let str4 = str;
  if (flag) {
    str4 = "animate-never";
  }
  size.width = tmpResult.withSpring(originX.targetWidth, SUBTLE_SPRING, str4);
  if (flag) {
    str = "animate-never";
  }
  obj = { animations: null, initialValues: null };
  size.height = spring.withSpring(originX.targetHeight, SUBTLE_SPRING, str);
  obj.animations = size;
  obj.initialValues = {
    originX: originX.currentOriginX,
    originY: originX.currentOriginY,
    width: originX.currentWidth,
    height: originX.currentHeight,
  };
  return obj;
}
let obj2 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
layoutTransitionFunction.__closure = { withSpring: fn(4974).withSpring };
layoutTransitionFunction.__workletHash = 4871152530917;
layoutTransitionFunction.__initData = {
  code: "function layoutTransitionFunction_VoicePanelCardTsx13(values,physics,disableAnimation=false){const{withSpring}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,physics,!disableAnimation?'animate-always':'animate-never'),originY:withSpring(values.targetOriginY,physics,!disableAnimation?'animate-always':'animate-never'),width:withSpring(values.targetWidth,physics,!disableAnimation?'animate-always':'animate-never'),height:withSpring(values.targetHeight,physics,!disableAnimation?'animate-always':'animate-never')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}",
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
  code: "function VoicePanelCardTsx17(){const{coords,focused,id,isPIP,pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){width=pipState.width;height=pipState.height;const pipHeight=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'animate-always')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'animate-always')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}",
};
const __initData15 = {
  code: "function VoicePanelCardTsx18(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const __initData16 = {
  code: "function VoicePanelCardTsx19(values){const{withSpring,layoutPhysics,wrapperOffset}=this.__closure;const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'animate-always'),originY:withSpring(values.targetOriginY,layoutPhysics,'animate-always'),width:withSpring(values.targetWidth,layoutPhysics,'animate-always'),height:withSpring(values.targetHeight,layoutPhysics,'animate-always')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}}};}",
};
const __initData17 = {
  code: "function VoicePanelCardTsx20(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}",
};
let closure_57 = {
  code: "function layoutTransition_VoicePanelCardTsx21(values,disableAnimation=false){const{layoutTransitionFunction,physics}=this.__closure;return layoutTransitionFunction(values,physics,disableAnimation);}",
};
let obj6 = { withSpring: fn(4974).withSpring };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default noop.memo(function VoicePanelCard(cleanUp) {
  ({ item, transitionState } = cleanUp);
  scrollPosition = undefined;
  let windowDimensions;
  let id2;
  let sharedValue1;
  let cardLayoutCoordsSubscription;
  const id = item.id;
  __closure = cardLayoutCoordsSubscription;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[25]));
  ({ focused, guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp4 = windowDimensions(id2[47])(id, channelId, guildId);
  let obj1 = scrollPosition(id2[47]);
  let tmp6 = tmp4;
  if (!obj1.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_47;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  let tmp5Result = tmp5(tmp2[26]);
  const items = [RTCConnectionStore];
  const stateFromStores = tmp5Result.useStateFromStores(items, () => connected.isConnected());
  tmp5Result = tmp5(tmp2[47]);
  const tmp8 = tmp5Result.isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type;
  let tmpResult = tmp(tmp2[27]);
  if (tmp4 != null) {
    type = tmp4.type;
  }
  if (type === ParticipantTypes.STREAM) {
    let DEFAULT = tmp5(tmp2[28]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[28]).MediaEngineContextTypes.DEFAULT;
  }
  let tmpResultResult = tmpResult(DEFAULT, str);
  windowDimensions(id2[53])(str);
  if (transitionState === scrollPosition(id2[44]).TransitionStates.MOUNTED) {
    let num = 1;
  } else {
    num = 0;
  }
  const sharedValue = scrollPosition(id2[14]).useSharedValue(num);
  const tmp5Result1 = scrollPosition(id2[14]);
  let isSpeakingResult = null != id2;
  if (isSpeakingResult) {
    isSpeakingResult = SpeakingStore.isSpeaking(id2);
  }
  sharedValue1 = scrollPosition(id2[14]).useSharedValue(isSpeakingResult);
  const items1 = [id2, sharedValue1];
  const layoutEffect = __closure.useLayoutEffect(() => {
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
  const tmp5Result2 = scrollPosition(id2[14]);
  cardLayoutCoordsSubscription = scrollPosition(id2[54]).useCardLayoutCoordsSubscription(id, layoutManager);
  const tmp5Result3 = scrollPosition(id2[54]);
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
  __closure = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  L.__closure = __closure;
  L.__workletHash = 16772493240559;
  L.__initData = __initData17;
  const derivedValue = scrollPosition(id2[14]).useDerivedValue(L);
  const memo = __closure.useMemo(() => {
    __closure = {
      mass: closure_11.mass,
      damping: windowDimensions(id2[55])(closure_11.damping - 2, closure_11.damping + 2),
      stiffness: windowDimensions(id2[55])(closure_11.stiffness - 20, closure_11.stiffness + 20),
    };
    __closure = { physics: __closure, layoutTransition: null };
    function layoutTransition(originX) {
      if (flag === undefined) {
        flag = false;
      }
      return layoutTransitionFunction(originX, obj, flag);
    }
    __closure = { layoutTransitionFunction, physics: __closure };
    layoutTransition.__closure = __closure;
    layoutTransition.__workletHash = 12472306522220;
    layoutTransition.__initData = __initData;
    __closure.layoutTransition = layoutTransition;
    return __closure;
  }, []);
  ({ physics, layoutTransition } = memo);
  if (item.type === constants2.CTA) {
    const id4 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id4) {
      let tmp26Result = closure_20(tmp(tmp2[56]), {});
      let tmp25 = closure_20;
    } else if (tmp36.CALLER_DISCONNECTED === id4) {
      tmp26Result = closure_20(tmp(tmp2[57]), {});
      tmp25 = closure_20;
    }
    __closure = {
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
    const items2 = [tmp26Result, ,];
    let tmp25Result = null != tmp4;
    if (tmp25Result) {
      obj1 = { isRinging: tmp8, participant: tmp4, label: null, layout: null, speaking: null };
      tmpResult = tmp(tmp2[60]);
      let userNick;
      if (tmp5Result5.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      obj1.label = userNick;
      obj1.layout = layoutTransition;
      obj1.speaking = sharedValue1;
      tmp25Result = tmp25(tmpResult, obj1);
      tmp5Result5 = tmp5(tmp2[47]);
    }
    items2[1] = tmp25Result;
    let result = tmp5(tmp2[47]).isStableParticipantWithUser(tmp4);
    if (result) {
      const obj2 = { speaking: sharedValue1, id, isSelf, layout: layoutTransition };
      result = tmp25(closure_42, obj2);
    }
    items2[2] = result;
    __closure.children = items2;
    return closure_22(AnimatedWrapper, __closure);
  } else if (null != tmp4) {
    type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      ({ id: id3, streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          if (tmp4.canRenderVideo) {
            if (null == tmpResultResult) {
              let tmp28 = closure_20;
              const obj3 = {
                id: id3,
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
              obj3.streamId = streamId;
              obj3.isScrollVisible = derivedValue;
              const VideoSpinnerContext = tmp5(tmp2[33]).VideoSpinnerContext;
              obj3.videoSpinnerContext = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj3.sharedCoords = cardLayoutCoordsSubscription;
              if (isCall) {
                isCall = !isSelf;
              }
              obj3.focusOnReady = isCall;
              obj3.layout = layoutTransition;
              let tmp31Result = tmp28(tmp(tmp2[32]), obj3);
              const tmpResult1 = tmp(tmp2[32]);
            }
            const obj4 = { avError: tmpResultResult, removeSplashImage: null, userId: null, style: null };
            focused = focused.get();
            tmpResultResult = undefined;
            if (focused != null) {
              tmpResultResult = focused.id;
            }
            obj4.removeSplashImage = tmpResultResult !== id3;
            obj4.userId = user.id;
            user = StyleSheet.absoluteFill;
            obj4.style = user;
            tmp31Result = closure_20(tmp(tmp2[58]), obj4);
            tmp28 = closure_20;
            const tmpResult2 = tmp(tmp2[58]);
          }
        }
      }
      const obj5 = {
        isRinging: tmp8,
        avatarURI: user.getAvatarURL(guildId, 80, false),
        avatarDecoration: null,
        layout: null,
        layoutPhysics: null,
        userId: null,
        guildId: null,
      };
      const userAvatarDecoration = tmp4.userAvatarDecoration;
      obj5.avatarDecoration = userAvatarDecoration;
      obj5.layout = layoutTransition;
      obj5.layoutPhysics = physics;
      obj5.userId = user.id;
      obj5.guildId = guildId;
      tmp25 = closure_20;
      tmp26Result = closure_20(closure_37, obj5);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj6 = {
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
      ({ id: obj10.id, streamGuildId: obj10.streamGuildId, streamId: obj10.streamId, userNick: obj10.userNick } = tmp4);
      obj6.isSelf = isSelf;
      obj6.sharedCoords = cardLayoutCoordsSubscription;
      obj6.isScrollVisible = derivedValue;
      obj6.layout = layoutTransition;
      tmp26Result = closure_20(closure_34, obj6);
      tmp25 = closure_20;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj7 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: layoutTransition };
      tmp26Result = closure_20(tmp(tmp2[59]), obj7, tmp4.id);
      tmp25 = closure_20;
    }
  }
  const obj8 = {
    isRinging: tmp8,
    avatarURI: "r",
    avatarDecoration: "isArray",
    layout: layoutTransition,
    layoutPhysics: physics,
  };
  tmp26Result = closure_20(closure_37, obj8);
  tmp25 = closure_20;
  const tmp5Result4 = scrollPosition(id2[14]);
});
