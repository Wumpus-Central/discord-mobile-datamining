// === Module 15980: SelfStreamCard ===

// Module 15980 (SelfStreamCard)
import map from "map";
import importAllResult from "watchStream";
import { StyleSheet } from "createCacheKey";
import reset from "reset";
import createRTCConnection from "createRTCConnection";
import anyoneHasFlagInContext from "anyoneHasFlagInContext";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { EDGE_GUTTER } from "CARD_SIZE";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { SCALE_PHYSICS } from "MIN_PAN_GESTURE_MOVE";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4054";

let c10;
let c9;
let closure_12;
let closure_17;
let closure_18;
let closure_21;
let closure_22;
let closure_23;
let map1;
let unpackModuleId;
const require = arg1;
function SelfStreamCard(sharedCoords) {
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = callback3();
  const items = [stream];
  const callback = importAllResult.useCallback(() => {
    if (null != stream) {
      const obj = sharedCoords(isFocused[19]);
      obj.stopStream(sharedCoords(isFocused[20]).encodeStreamKey(tmp));
      const obj2 = sharedCoords(isFocused[20]);
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
    obj[3] = str;
    return obj;
  };
  fn.__closure = { isFocused, sharedCoords };
  fn.__workletHash = 4561576173627;
  fn.__initData = closure_30;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: tmp.nonUserRoundedCard, children: null };
  let tmp9 = isFocused;
  if (isFocused) {
    obj = { style: null };
    obj[0] = tmp.blackBackground;
    tmp9 = callback(stream(tmp4[21]), obj);
  }
  const items1 = [tmp9, , ];
  const obj1 = { style: animatedStyle, variant: null, color: "text-overlay-light", children: null };
  let str = "text-sm/semibold";
  if (isFocused) {
    str = "text-lg/semibold";
  }
  obj1[1] = str;
  const intl = tmp3(tmp4[22]).intl;
  obj1[3] = intl.string(sharedCoords(isFocused[22]).t.gMOwov);
  items1[1] = callback(closure_24, obj1);
  let tmp6Result = null;
  if (isFocused) {
    let obj2 = { children: null };
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
    obj3[0] = tmp.selfStreamFocusedSubtitle;
    const intl2 = tmp3(tmp4[22]).intl;
    obj3[3] = intl2.string(tmp3(tmp4[22]).t.dKeLGt);
    const items2 = [tmp11(tmp3(tmp4[15]).Text, obj3), ];
    const obj4 = { size: "lg", variant: "primary-overlay", onPress: null, text: null };
    obj4[2] = callback;
    const intl3 = tmp3(tmp4[22]).intl;
    obj4[3] = intl3.string(tmp3(tmp4[22]).t.CpkXwZ);
    items2[1] = tmp11(tmp3(tmp4[23]).Button, obj4);
    obj2[0] = items2;
    tmp6Result = tmp6(closure_22, obj2);
  }
  items1[2] = tmp6Result;
  obj[1] = items1;
  return closure_23(stream(isFocused[21]), obj);
}
function SpeakingIndicator(id) {
  id = id.id;
  const isSelf = id.isSelf;
  const speaking = id.speaking;
  const layout = id.layout;
  let mode;
  let focused;
  let token;
  const context = focused.useContext(isSelf(speaking[24]));
  mode = context.mode;
  focused = context.focused;
  const tmp2 = callback3();
  let obj = id(speaking[43]);
  token = obj.useToken(isSelf(speaking[18]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj1 = id(speaking[14]);
  const fn = function u() {
    let obj = mode;
    let tmp = mode.get() !== outer1_10.PIP;
    if (tmp) {
      let value = focused.get();
      let id;
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
      obj = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      obj[0] = id;
      obj[1] = obj.get();
      value = focused.get();
      let id1;
      if (value != null) {
        id1 = value.id;
      }
      obj[2] = id1;
      obj[3] = isSelf;
      obj[4] = token;
      num2 = isSelf(speaking[44])(obj);
      const tmp9 = isSelf(speaking[44]);
    }
    let str = "animate-always";
    if (tmp) {
      str = "animate-never";
    }
    obj[1] = id(speaking[39]).withSpring(num2, outer1_12, str);
    return obj;
  };
  obj = { mode, VoicePanelModes: closure_10, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 5111620492405;
  fn.__initData = closure_38;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const fn2 = function c() {
    let obj = mode;
    let tmp = mode.get() === outer1_10.PIP;
    if (!tmp) {
      let value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    if (!tmp) {
      obj = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      obj[0] = id;
      obj[1] = obj.get();
      value = focused.get();
      let id1;
      if (value != null) {
        id1 = value.id;
      }
      obj[2] = id1;
      obj[3] = isSelf;
      obj[4] = token;
      num = isSelf(tmp8[44])(obj);
      const tmp10 = isSelf(tmp8[44]);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    obj = { borderRadius: id(speaking[39]).withSpring(num, tmp18, str2), borderWidth: null };
    const obj2 = id(speaking[39]);
    const tmp7 = id;
    let num2 = 0;
    if (!tmp) {
      num2 = 0;
      if (speaking.get()) {
        num2 = isSelf(tmp8[45])(5);
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj[1] = id(speaking[39]).withSpring(num2, outer1_12, str);
    return obj;
  };
  obj = { mode, VoicePanelModes: closure_10, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS: closure_12, speaking, roundToNearestPixel: isSelf(speaking[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  fn2.__closure = obj;
  fn2.__workletHash = 13144186988728;
  fn2.__initData = closure_39;
  const animatedStyle1 = id(speaking[14]).useAnimatedStyle(fn2);
  const obj4 = id(speaking[14]);
  const fn3 = function h() {
    let obj = mode;
    let tmp = mode.get() === outer1_10.PIP;
    if (!tmp) {
      let value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    if (!tmp) {
      obj = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      obj[0] = id;
      obj[1] = obj.get();
      value = focused.get();
      let id1;
      if (value != null) {
        id1 = value.id;
      }
      obj[2] = id1;
      obj[3] = isSelf;
      obj[4] = token;
      num = isSelf(tmp8[44])(obj);
      const tmp10 = isSelf(tmp8[44]);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    obj = { borderRadius: id(speaking[39]).withSpring(num, tmp18, str2), borderWidth: null };
    const obj2 = id(speaking[39]);
    const tmp7 = id;
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
    obj[1] = id(speaking[39]).withSpring(num2, outer1_12, str);
    return obj;
  };
  obj1 = { mode, VoicePanelModes: closure_10, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS: closure_12, speaking, SPEAKING_BORDER_SIZE: 3 };
  fn3.__closure = obj1;
  fn3.__workletHash = 2850608131549;
  fn3.__initData = closure_40;
  const animatedStyle2 = id(speaking[14]).useAnimatedStyle(fn3);
  let obj2 = { style: items, layout, pointerEvents: "none", children: null };
  items = [tmp2.speakingIndicatorWrapper, animatedStyle];
  const obj6 = id(speaking[14]);
  const items1 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  const items2 = [callback(isSelf(speaking[40]), { style: items1, layout }), ];
  const items3 = [tmp2.speakingIndicatorGreenBar, animatedStyle2];
  items2[1] = callback(isSelf(speaking[40]), { style: items3, layout });
  obj2[3] = items2;
  return callback2(isSelf(speaking[40]), obj2);
}
function AnimatedWrapper(children) {
  let c11;
  let c13;
  let c18;
  let c19;
  let focused;
  let mode;
  let mountedCards;
  let pipAvoidanceSpecs;
  let sharedVisible;
  let transitionState;
  let windowDimensions;
  let cleanUp = children.cleanUp;
  let id = cleanUp;
  let coords = children.coords;
  id = children.id;
  transitionState = id;
  const isRTCConnected = children.isRTCConnected;
  cleanUp = isRTCConnected;
  let isScrollVisible = children.isScrollVisible;
  mode = isScrollVisible;
  const layoutPhysics = children.layoutPhysics;
  focused = layoutPhysics;
  ({ transitionState, sharedVisible } = children);
  isScrollVisible = sharedVisible;
  sharedVisible = undefined;
  let sharedValue;
  let closure_9;
  let callback;
  c11 = undefined;
  focused = undefined;
  c13 = undefined;
  mode = undefined;
  pipAvoidanceSpecs = undefined;
  let safeArea;
  let scrollPosition;
  c18 = undefined;
  c19 = undefined;
  windowDimensions = undefined;
  let wrapperDimensions;
  let wrapperOffset;
  let panelCardStillInPIP;
  let pIPState;
  let isSelf;
  let id2;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  sharedValue = undefined;
  let c31;
  let token;
  sharedVisible = coords(transitionState[48])().analyticsLocations;
  let obj = mode;
  const context = mode.useContext(coords(transitionState[24]));
  const channelId = context.channelId;
  sharedValue = channelId;
  const connected = context.connected;
  closure_9 = connected;
  const contentDimensions = context.contentDimensions;
  callback = contentDimensions;
  ({ controlsSpecs: c11, focused } = context);
  ({ hideControls: c13, mode } = context);
  ({ mountedCards, pipAvoidanceSpecs } = context);
  safeArea = context.safeArea;
  scrollPosition = context.scrollPosition;
  ({ setFocused: c18, showControls: c19, windowDimensions } = context);
  wrapperDimensions = context.wrapperDimensions;
  wrapperOffset = context.wrapperOffset;
  panelCardStillInPIP = context.panelCardStillInPIP;
  let obj1 = id(transitionState[49]);
  pIPState = obj1.usePIPState();
  const tmp7 = coords(transitionState[50])(id, channelId, context.guildId);
  let obj2 = id(transitionState[50]);
  let tmp8 = tmp7;
  if (!obj2.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_47;
  }
  isSelf = tmp8.isSelf;
  id2 = tmp8.user.id;
  let tmp5Result = tmp5(tmp2[14]);
  const fn = function y() {
    let tmp = transitionState === pIPState.id;
    if (tmp) {
      tmp = mode.get() === callback.PIP;
    }
    return tmp;
  };
  fn.__closure = { id, pipState: pIPState, mode, VoicePanelModes: callback };
  fn.__workletHash = 4773864088866;
  fn.__initData = closure_49;
  derivedValue = tmp5Result.useDerivedValue(fn);
  tmp5Result = tmp5(tmp2[14]);
  class I {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === transitionState) {
        tmp5 = scrollPosition;
        num = scrollPosition.get();
      } else {
        tmp3 = mode;
        tmp4 = c10;
        num = 0;
      }
      return num;
    }
  }
  I.__closure = { focused, id, mode, VoicePanelModes: callback, scrollPosition };
  I.__workletHash = 8770947887509;
  I.__initData = closure_50;
  derivedValue1 = tmp5Result.useDerivedValue(I);
  const tmp3 = derivedValue2();
  let tmp9 = callback;
  class C {
    constructor() {
      if (useState.get()) {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = safeArea;
        tmp5 = safeArea;
        tmp6 = windowDimensions;
        tmp7 = c10;
        num2 = 2;
        bound = Math.max(safeArea, safeArea.get().left, (windowDimensions.get().width - c10.get().width) / 2);
      } else {
        tmp = wrapperDimensions;
        num = 2;
        bound = wrapperDimensions.get().drawerWidth / 2;
      }
      return bound;
    }
  }
  obj = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  C.__closure = obj;
  C.__workletHash = 15078431132990;
  C.__initData = closure_51;
  derivedValue2 = id(transitionState[14]).useDerivedValue(C);
  coords = tmp7;
  sharedValue = undefined;
  closure_9 = undefined;
  callback = undefined;
  const tmp5Result1 = id(transitionState[14]);
  sharedValue = id(transitionState[14]).useSharedValue(transitionState);
  const tmp14 = cleanUp(obj.useState(true), 2);
  closure_9 = tmp14[1];
  let type;
  if (tmp7 != null) {
    type = tmp7.type;
  }
  let items = [type, id];
  callback = obj.useCallback((arg0) => {
    let type;
    if (coords != null) {
      type = coords.type;
    }
    if (type === _undefined4.ACTIVITY) {
      lib(arg0 !== id);
    }
  }, items);
  const tmp5Result2 = id(transitionState[14]);
  const fn2 = function w() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn2.__closure = { focused };
  fn2.__workletHash = 12145773243163;
  fn2.__initData = closure_43;
  const fn3 = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      id(transitionState[14]).runOnJS(callback)(arg0);
      const obj = id(transitionState[14]);
    }
  };
  obj = { runOnJS: tmp5(tmp2[14]).runOnJS, handleFocusedParticipantChange: callback };
  fn3.__closure = obj;
  fn3.__workletHash = 9304160478829;
  fn3.__initData = closure_44;
  const animatedReaction = id(transitionState[14]).useAnimatedReaction(fn2, fn3);
  const tmp5Result3 = id(transitionState[14]);
  const fn4 = function v() {
    return { mode: mode.get(), focused: focused.get(), transitionState: sharedValue.get() };
  };
  fn4.__closure = { mode, focused, sharedTransitionState: sharedValue };
  fn4.__workletHash = 13570020810295;
  fn4.__initData = closure_45;
  class P {
    constructor(arg0, arg1) {
      tmp = id;
      tmp2 = transitionState;
      obj = id(transitionState[46]);
      tmp3 = arg1;
      if (!obj.cheapWorkletShallowEqual(children, tmp3)) {
        ({ focused, transitionState } = children);
        tmp4 = c10;
        if (focused != null) {
          id = focused.id;
        }
        if (null == arg1) {
          if (transitionState !== tmp(tmp2[47]).TransitionStates.YEETED) {
            tmp19 = sharedVisible;
            num7 = 1;
            result = sharedVisible.set(1);
          }
        }
        if (transitionState === tmp(tmp2[47]).TransitionStates.YEETED) {
          obj2 = sharedVisible;
          num5 = 1;
          if (1 === sharedVisible.get()) {
            tmp15 = isScrollVisible;
            if (isScrollVisible.get()) {
              num6 = 0;
              result1 = obj2.set(0);
            }
          }
          tmpResult = tmp(tmp2[14]);
          tmp16 = cleanUp;
          tmp17 = tmpResult.runOnJS(cleanUp)();
        } else {
          transitionState = undefined;
          if (arg1 != null) {
            transitionState = arg1.transitionState;
          }
          if (transitionState === tmp(tmp2[47]).TransitionStates.YEETED) {
            tmp13 = sharedVisible;
            num4 = 1;
            result2 = sharedVisible.set(1);
          } else if (children.mode !== c10.PIP) {
            if (null == id) {
              tmp11 = sharedVisible;
              num3 = 1;
              result3 = sharedVisible.set(1);
            } else {
              tmp6 = id;
              if (id !== id) {
                tmp9 = sharedVisible;
                num2 = 0;
                result4 = sharedVisible.set(0);
              } else {
                tmp7 = sharedVisible;
                num = 1;
                result5 = sharedVisible.set(1);
              }
            }
          }
        }
      }
      return;
    }
  }
  obj1 = { cheapWorkletShallowEqual: tmp5(tmp2[46]).cheapWorkletShallowEqual, VoicePanelModes: tmp9, TransitionStates: tmp5(tmp2[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: tmp5(tmp2[14]).runOnJS, cleanUp, id };
  P.__closure = obj1;
  P.__workletHash = 17099686269568;
  P.__initData = closure_46;
  const animatedReaction1 = id(transitionState[14]).useAnimatedReaction(fn4, P);
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = sharedValue.set(transitionState);
  });
  c31 = tmp20;
  const tmp5Result4 = id(transitionState[14]);
  token = id(transitionState[43]).useToken(tmp(tmp2[18]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp5Result5 = id(transitionState[43]);
  const fn5 = function b() {
    let height;
    let width;
    let x;
    let y;
    let zIndex;
    let value = coords.get();
    ({ zIndex, width, height, x, y } = value);
    let obj = focused;
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    if (c31) {
      obj = pIPState;
      const width3 = pIPState.width;
      let obj2 = id(transitionState[51]);
      obj = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
      obj[0] = wrapperDimensions.get().pipX;
      obj[1] = wrapperDimensions.get().pipY;
      obj[2] = width3;
      obj[3] = pIPState.showSecondaryPIP ? obj.containerHeight : obj.height;
      obj[4] = windowDimensions.get();
      obj[5] = safeArea.get();
      obj[6] = pipAvoidanceSpecs.get().bottom;
      obj[7] = pipAvoidanceSpecs.get().top;
      const point = obj2.getClampedPIPPosition(obj);
      const x2 = point.x;
      const sum = derivedValue1.get() + point.y;
      const height3 = pIPState.height;
      const tmp9 = pIPState.showSecondaryPIP ? obj.containerHeight : obj.height;
    } else {
      if (null != obj.get()) {
        let value1 = y;
        let num = x;
        let height2 = height;
        let width2 = width;
        let num2 = 0;
        if (tmp5) {
          width2 = windowDimensions.get().width;
          height2 = windowDimensions.get().height;
          value1 = derivedValue1.get();
          num2 = 1;
          num = 0;
        }
      } else {
        const sum1 = x + derivedValue2.get();
        obj = { contentHeight: null, windowHeight: null, safeArea: null };
        obj[0] = callback.get().height;
        obj[1] = windowDimensions.get().height;
        obj[2] = safeArea.get();
        const sum2 = y + coords(transitionState[52])(obj);
        const value2 = sharedValue.get();
        value1 = sum2;
        num = sum1;
        height2 = height;
        width2 = width;
        num2 = zIndex;
        if (value2 === id(transitionState[47]).TransitionStates.YEETED) {
          value1 = sum2 + height / 4;
          num = sum1;
          height2 = height;
          width2 = width;
          num2 = zIndex;
        }
        const tmp74 = coords(transitionState[52]);
      }
      let obj3 = derivedValue;
      if (derivedValue.get()) {
        num2 = 9001;
      }
      const obj1 = { id: null, mode: null, focused: null, isSelf: null, defaultBorderRadius: null };
      obj1[0] = tmp4;
      obj1[1] = mode.get();
      const value3 = obj.get();
      let id1;
      if (value3 != null) {
        id1 = value3.id;
      }
      obj1[2] = id1;
      obj1[3] = isSelf;
      obj1[4] = token;
      let obj5 = isScrollVisible;
      const tmp22 = coords(transitionState[44]);
      if (0 !== isScrollVisible.get()) {
        let num6 = 1;
        if (!tmp5) {
          num6 = 1;
          if (!cleanUp) {
            num6 = derivedValue1;
          }
        }
        let num4 = num6;
      } else {
        const value4 = obj.get();
        let id2;
        if (value4 != null) {
          id2 = value4.id;
        }
        num4 = 0;
      }
      const gestureActive = wrapperOffset.get().gestureActive;
      if (1 === obj5.get()) {
        let num8 = 1;
      } else {
        const value5 = obj.get();
        let id3;
        if (value5 != null) {
          id3 = value5.id;
        }
        num8 = 0.8;
      }
      let obj6 = id(transitionState[14]);
      let num9 = 100;
      if (obj3.get()) {
        num9 = 0;
      }
      obj2 = { zIndex: null, opacity: null, width: null, height: null, transform: null, borderRadius: null };
      const tmp22Result = coords(transitionState[44])(obj1);
      obj2[0] = obj6.withDelay(num9, id(transitionState[38]).withTiming(num2, derivedValue));
      const obj10 = id(transitionState[38]);
      let str = "animate-never";
      if (mode.get()) {
        str = "animate-always";
      }
      class I {
        constructor(arg0) {
          tmp = arg0;
          if (arg0) {
            tmp2 = reset;
            num = 0;
            tmp = 0 === reset.get();
          }
          if (tmp) {
            tmp3 = closure_30;
            tmp5 = outer1_0;
            tmp6 = outer1_2;
            value = closure_30.get();
            tmp = value === outer1_0(outer1_2[47]).TransitionStates.YEETED;
          }
          if (tmp) {
            tmp7 = outer1_0;
            tmp8 = outer1_2;
            obj = outer1_0(outer1_2[14]);
            tmp9 = closure_0;
            tmp10 = obj.runOnJS(closure_0)();
          }
          return;
        }
      }
      obj3 = { sharedVisible: null, sharedTransitionState: null, TransitionStates: null, runOnJS: null, cleanUp: null };
      obj3[0] = obj5;
      obj3[1] = sharedValue;
      obj3[2] = id(transitionState[47]).TransitionStates;
      obj3[3] = id(transitionState[14]).runOnJS;
      obj3[4] = id;
      I.__closure = obj3;
      I.__workletHash = 6571273005437;
      I.__initData = outer1_53;
      obj2[1] = obj10.withTiming(num4, id2, str, I);
      obj2[2] = width2;
      obj2[3] = height2;
      let withSpringResult = num;
      if (!gestureActive) {
        withSpringResult = id(transitionState[39]).withSpring(num, focused, "animate-always");
        const obj12 = id(transitionState[39]);
      }
      const obj4 = { translateX: null };
      obj4[0] = withSpringResult;
      const items = [obj4, , ];
      let withSpringResult1 = value1;
      if (!gestureActive) {
        withSpringResult1 = id(transitionState[39]).withSpring(value1, focused, "animate-always");
        const obj14 = id(transitionState[39]);
      }
      obj5 = { translateY: null };
      obj5[0] = withSpringResult1;
      items[1] = obj5;
      obj6 = { scale: null };
      const obj9 = id(transitionState[38]);
      obj6[0] = id(transitionState[39]).withSpring(num8, isSelf);
      items[2] = obj6;
      obj2[4] = items;
      const obj17 = id(transitionState[39]);
      obj2[5] = id(transitionState[39]).withSpring(tmp22Result, windowDimensions);
      return obj2;
    }
  };
  obj2 = { coords, focused, id, isPIP: tmp20, pipState: pIPState, getClampedPIPPosition: tmp5(tmp2[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: tmp(tmp2[52]), contentDimensions, sharedTransitionState: sharedValue, TransitionStates: tmp5(tmp2[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: tmp(tmp2[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue1, wrapperOffset, withDelay: tmp5(tmp2[14]).withDelay, withTiming: tmp5(tmp2[38]).withTiming, ZINDEX_TIMING: derivedValue, OPACITY_TIMING: id2, isScrollVisible, runOnJS: tmp5(tmp2[14]).runOnJS, cleanUp, withSpring: tmp5(tmp2[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: isSelf, SCALE_PHYSICS: windowDimensions };
  fn5.__closure = obj2;
  fn5.__workletHash = 9934021851336;
  fn5.__initData = closure_52;
  const animatedStyle = id(transitionState[14]).useAnimatedStyle(fn5);
  let obj3 = {
    gesturesEnabled: tmp14[0],
    onSingleTap() {
      if (_undefined.get().mode === mode.HIDDEN) {
        _undefined4({ debounce: true });
      } else {
        _undefined2({ debounce: true });
      }
    },
    onDoubleTap: null,
    onLongPress: null
  };
  const tmp5Result6 = id(transitionState[14]);
  let tmpResult = coords(transitionState[53]);
  if (tmp5Result7.isStableActivityParticipant(tmp7)) {
    const fn6 = () => {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      if (id !== transitionState) {
        _undefined3(tmp3);
      } else {
        _undefined3(null);
      }
    };
  } else if (isSelf) {
    const tmp5Result8 = tmp5(tmp2[50]);
  }
  obj3[2] = fn6;
  let fn7;
  if (null != id2) {
    fn7 = () => coords(transitionState[54])({ userId: id2, channelId: sharedValue, isVoiceContext: true, sourceAnalyticsLocations: sharedVisible });
  }
  obj3[3] = fn7;
  const items1 = [pIPState.mode === pipAvoidanceSpecs.IN_APP, panelCardStillInPIP];
  tmp5Result7 = id(transitionState[50]);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    const result = panelCardStillInPIP.set(c31);
  }, items1);
  function be(currentOriginX) {
    let obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
    obj = { animations: null, initialValues: null, callback: null };
    obj = { originX: null, originY: null, width: null, height: null };
    obj[0] = id(transitionState[39]).withSpring(currentOriginX.targetOriginX, focused, "animate-always");
    const obj4 = id(transitionState[39]);
    obj[1] = id(transitionState[39]).withSpring(currentOriginX.targetOriginY, focused, "animate-always");
    const obj5 = id(transitionState[39]);
    obj[2] = id(transitionState[39]).withSpring(currentOriginX.targetWidth, focused, "animate-always");
    const obj6 = id(transitionState[39]);
    obj[3] = id(transitionState[39]).withSpring(currentOriginX.targetHeight, focused, "animate-always");
    obj[0] = obj;
    obj[1] = obj;
    obj[2] = function callback() {
      const value = closure_22.get();
      let gestureActive = value.gestureActive;
      if (!gestureActive) {
        gestureActive = 0 === value.y;
      }
      if (!gestureActive) {
        const result = closure_22.set({ gestureActive: false, x: 0, y: 0 });
      }
    };
    return obj;
  }
  const tmpResultResult = tmpResult(obj3);
  be.__closure = { withSpring: id(transitionState[39]).withSpring, layoutPhysics, wrapperOffset };
  be.__workletHash = 2693592883668;
  be.__initData = closure_54;
  const items2 = [layoutPhysics, wrapperOffset];
  const callback1 = obj.useCallback(be, items2);
  let obj5 = { gesture: tmpResultResult, children: null };
  const items3 = [tmp3.positionWrapper, animatedStyle];
  obj5[1] = wrapperDimensions(coords(transitionState[40]), { style: items3, layout: callback1, children: children.children });
  return wrapperDimensions(id(transitionState[55]).GestureDetector, obj5);
}
let c4 = importAllResult;
({ VoicePanelCTACard: c9, VoicePanelModes: c10, MODE_CHANGE_PHYSICS: unpackModuleId, SPEAKING_PHYSICS: closure_12, VoicePanelCardItemType: map1 } = VoicePanelModes);
({ ApplicationStreamStates: closure_17, EMPTY_STRING_SNOWFLAKE_ID: closure_18 } = ME);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let closure_24 = require("module_4054").createAnimatedComponent(require("Text").Text);
const tmp5 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XXLARGE];
let obj = {};
let merged = Object.assign(SCALE_PHYSICS);
obj.stiffness = 150;
let closure_26 = { duration: 200 };
let closure_27 = { duration: 0 };
let c28 = 0.75;
obj = { positionWrapper: null, userRoundedCard: null, nonUserRoundedCard: null, blackBackground: null, selfStreamFocusedSubtitle: null, avatarImageMaskStyles: null, avatarPlaceholder: null, image: null, speakingIndicatorWrapper: null, speakingIndicatorUnderlay: null, speakingIndicatorGreenBar: null };
obj[0] = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: require("Themes").colors.BLACK };
let obj1 = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: require("Themes").colors.BLACK };
obj[1] = { position: "absolute", top: -4, left: -4, bottom: -4, right: -4, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_800 };
createCacheKey = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: require("Themes").colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj[2] = createCacheKey;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = "black";
obj[3] = obj4;
obj[4] = { textAlign: "center", marginTop: 4, marginBottom: 40 };
let obj2 = { position: "absolute", top: -4, left: -4, bottom: -4, right: -4, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_800 };
obj[5] = { position: "relative", borderRadius: require("Themes").radii.round, overflow: "hidden" };
let obj5 = { position: "relative", borderRadius: require("Themes").radii.round, overflow: "hidden" };
obj[6] = { width: tmp5, height: tmp5, borderRadius: require("Themes").radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj[7] = { maxWidth: 80, maxHeight: 80 };
let obj7 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj7.overflow = "hidden";
obj[8] = obj7;
let obj8 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj8.borderColor = require("Themes").colors.BLACK;
obj[9] = obj8;
let obj9 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj9.borderColor = require("Themes").unsafe_rawColors.GREEN_360;
obj[10] = obj9;
let closure_29 = createCacheKey.createStyles(obj);
let closure_30 = { code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}" };
let closure_32 = { code: "function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
let closure_33 = { code: "function VoicePanelCardTsx3(isFocused,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused!==lastIsFocused){runOnJS(setIsFocused)(isFocused);}}" };
let closure_34 = importAllResult.memo((id) => {
  let isScrollVisible;
  let isSelf;
  let layout;
  let sharedCoords;
  let streamGuildId;
  let streamId;
  let tmp8;
  let tmp9;
  let userNick;
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ sharedCoords, layout } = id);
  let focused;
  let setFocused;
  let stream;
  let c6;
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[24]));
  focused = context.focused;
  setFocused = context.setFocused;
  let obj = id(streamGuildId[25]);
  const items = [c6];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ stream: _undefined.getStreamForUser(userId, streamGuildId), activeStream: _undefined.getActiveStreamForUser(userId, streamGuildId) }), items1);
  stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = setFocused.useCallback(() => {
    if (null != stream) {
      id(streamGuildId[19]).watchStream(tmp, { forceMultiple: true });
      const obj = id(streamGuildId[19]);
      setFocused(id(streamGuildId[20]).encodeStreamKey(tmp));
      const obj2 = id(streamGuildId[20]);
    }
  }, items2);
  [tmp8, tmp9] = focused(setFocused.useState(false), 2);
  c6 = tmp9;
  let obj1 = id(streamGuildId[14]);
  const fn = function v() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id === id;
  };
  fn.__closure = { focused, id };
  fn.__workletHash = 13061544667904;
  fn.__initData = closure_32;
  class P {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = id;
        tmp2 = streamGuildId;
        obj = id(streamGuildId[14]);
        tmp3 = c6;
        tmp4 = obj.runOnJS(c6)(id);
      }
      return;
    }
  }
  obj = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 };
  P.__closure = obj;
  P.__workletHash = 8824446489251;
  P.__initData = closure_33;
  const animatedReaction = obj1.useAnimatedReaction(fn, P);
  const tmp7 = focused(setFocused.useState(false), 2);
  const tmp11Result = userId(streamGuildId[26])(id(streamGuildId[27]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    obj = { sharedCoords: null, stream: null, isFocused: null };
    obj[0] = sharedCoords;
    obj[1] = stream;
    obj[2] = tmp8;
    return callback(SelfStreamCard, obj);
  } else if (null == activeStream) {
    obj1 = { mode: null, stream: null, onPress: null, disabled: false, layout: null };
    obj1[0] = context.mode;
    obj1[1] = stream;
    obj1[2] = callback;
    obj1[4] = layout;
    return callback(tmp4(tmp2[28]).VoicePanelStreamPreview, obj1);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== constants3.FAILED) {
        if (activeStream.state === tmp29.ENDED) {
          let obj2 = { stream: null, removeSplashImage: null, type: null, style: null };
          obj2[0] = activeStream;
          obj2[1] = !tmp8;
          let tmpResult = tmp(tmp2[29]);
          obj2[2] = tmp4(tmp2[29]).VideoEmptyTypes.STREAM_ENDED;
          obj2[3] = stream.absoluteFill;
          return callback(tmpResult, obj2);
        } else {
          if (activeStream.state === tmp29.RECONNECTING) {
            const obj3 = { title: null };
            const intl = tmp4(tmp2[22]).intl;
            obj3[0] = intl.string(tmp4(tmp2[22]).t["pdFFK+"]);
            let tmp15 = callback(tmp4(tmp2[30]).StreamTextOverlay, obj3);
          } else {
            tmp15 = null;
            if (activeStream.state === tmp29.PAUSED) {
              const obj4 = { title: null, subtext: null };
              const intl2 = tmp4(tmp2[22]).intl;
              obj4[0] = intl2.string(tmp4(tmp2[22]).t["5q17w5"]);
              const intl3 = tmp4(tmp2[22]).intl;
              const obj5 = { username: null };
              obj5[0] = userNick;
              obj4[1] = intl3.formatToPlainString(tmp4(tmp2[22]).t.meVVlb, obj5);
              tmp15 = callback(tmp4(tmp2[30]).StreamTextOverlay, obj4);
            }
          }
          const obj6 = { layout: null, id: null, streamId: null, userId: null, streamKey: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: false, paused: null };
          obj6[0] = layout;
          obj6[1] = id;
          tmpResult = tmp(tmp2[31]);
          if (streamId == null) {
            streamId = null;
          }
          const obj7 = { children: null };
          obj6[2] = streamId;
          obj6[3] = userId;
          obj6[4] = tmp4(tmp2[20]).encodeStreamKey(activeStream);
          obj6[5] = isScrollVisible;
          obj6[6] = tmp4(tmp2[32]).VideoSpinnerContext.REMOTE_STREAM;
          obj6[7] = sharedCoords;
          obj6[9] = activeStream.state === tmp29.PAUSED;
          const items3 = [callback(tmpResult, obj6), tmp15];
          obj7[0] = items3;
          return closure_23(closure_22, obj7);
        }
      }
    }
    const obj8 = { avError: null, stream: null, removeSplashImage: null, type: null, style: null };
    obj8[0] = tmp11Result;
    obj8[1] = activeStream;
    obj8[2] = !tmp8;
    obj8[3] = tmp4(tmp2[29]).VideoEmptyTypes.STREAM_FAILED;
    obj8[4] = stream.absoluteFill;
    return callback(tmp(tmp2[29]), obj8);
  }
  const tmp11 = userId(streamGuildId[26]);
});
let closure_35 = { code: "function VoicePanelCardTsx4(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}" };
let closure_36 = { code: "function VoicePanelCardTsx5(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}" };
let closure_37 = importAllResult.memo(function AnimatedUserCardInner(isRinging) {
  let avatarDecoration;
  let avatarURI;
  let guildId;
  let layout;
  let layoutPhysics;
  let userId;
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  ({ userId, guildId } = isRinging);
  let mode;
  let dominantColorFromImage;
  let importAllResult;
  userId = undefined;
  guildId = undefined;
  const tmp = callback3();
  let obj = importAllResult;
  mode = importAllResult.useContext(layoutPhysics(mode[24])).mode;
  let obj1 = isRinging(mode[33]);
  dominantColorFromImage = obj1.useDominantColorFromImage(avatarURI);
  const tmp6 = layoutPhysics(mode[34])("VoicePanelCard-native");
  importAllResult = tmp6;
  if (userId == null) {
    userId = closure_18;
  }
  const tmp7 = layoutPhysics(mode[35])(userId, guildId);
  let first;
  if (tmp7 != null) {
    const themeColors = tmp7.themeColors;
    if (themeColors != null) {
      first = themeColors[0];
    }
  }
  if (first == null) {
    first = null;
  }
  let tmp9;
  if (tmp7 != null) {
    const themeColors2 = tmp7.themeColors;
    if (themeColors2 != null) {
      tmp9 = themeColors2[1];
    }
  }
  if (tmp9 == null) {
    tmp9 = null;
  }
  let tmp10 = tmp6;
  if (tmp6) {
    tmp10 = null != first;
  }
  if (tmp10) {
    tmp10 = null != tmp9;
  }
  let tmp4Result = tmp4(tmp3[36]);
  let tmp11 = null;
  if (tmp10) {
    tmp11 = first;
  }
  let tmp12 = null;
  if (tmp10) {
    tmp12 = tmp9;
  }
  const videoTileGradientColors = tmp4Result.useVideoTileGradientColors(tmp11, tmp12);
  let items = [tmp6, userId, guildId];
  const effect = obj.useEffect(() => {
    let tmp2 = userId !== outer1_18;
    if (tmp2) {
      tmp2 = c4;
    }
    if (tmp2) {
      const obj = { guildId: null, dispatchWait: true };
      obj[0] = guildId;
      layoutPhysics(mode[37])(userId, undefined, obj);
    }
  }, items);
  tmp4Result = tmp4(tmp3[14]);
  class R {
    constructor() {
      obj = isRinging(mode[38]);
      num = 1;
      if (isRinging) {
        num = outer1_28;
      }
      obj = { opacity: obj.withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: c3 };
      return obj;
    }
  }
  obj = { withTiming: tmp4(tmp3[38]).withTiming, isRinging, CONNECTING_OPACITY: c28, backgroundColor: dominantColorFromImage };
  R.__closure = obj;
  R.__workletHash = 6200022645373;
  R.__initData = closure_35;
  const animatedStyle = tmp4Result.useAnimatedStyle(R);
  class O {
    constructor() {
      obj = isRinging(mode[39]);
      num = 1;
      if (mode.get() === outer1_10.PIP) {
        num = 0.8;
      }
      obj = { transform: null };
      obj1 = { scale: obj.withSpring(num, layoutPhysics) };
      items = [];
      items[0] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  obj = { withSpring: tmp4(tmp3[39]).withSpring, mode, VoicePanelModes: closure_10, layoutPhysics };
  O.__closure = obj;
  O.__workletHash = 5040632730576;
  O.__initData = closure_36;
  let cachedSourceFromURI;
  const animatedStyle1 = isRinging(mode[14]).useAnimatedStyle(O);
  if (null != avatarURI) {
    cachedSourceFromURI = tmp4(tmp3[33]).getCachedSourceFromURI(avatarURI);
    const tmp4Result2 = tmp4(tmp3[33]);
  }
  obj1 = { style: items1, layout, children: null };
  items1 = [tmp.userRoundedCard, animatedStyle];
  let tmp20 = null;
  let tmp2Result = tmp2(tmp3[40]);
  if (null != videoTileGradientColors) {
    const obj2 = { colors: null, start: null, end: null, style: null, pointerEvents: "none" };
    obj2[0] = videoTileGradientColors;
    obj2[1] = { x: 0, y: 0 };
    obj2[2] = { x: 0, y: 1 };
    obj2[3] = userId.absoluteFill;
    tmp20 = callback(tmp2(tmp3[41]), obj2);
  }
  const items2 = [tmp20, ];
  if (null == cachedSourceFromURI) {
    const obj3 = { style: null };
    obj3[0] = tmp.avatarPlaceholder;
    let tmp28Result = callback(tmp2(tmp3[21]), obj3);
  } else {
    let prop;
    tmp2Result = tmp2(tmp3[40]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj4 = { style: null, layout: null, children: null };
    const items3 = [prop, animatedStyle1];
    obj4[0] = items3;
    obj4[1] = layout;
    if (null != avatarDecoration) {
      const obj5 = { source: null, size: null, avatarDecoration: null };
      obj5[0] = cachedSourceFromURI;
      obj5[1] = tmp4(tmp3[16]).AvatarSizes.XXLARGE;
      obj5[2] = avatarDecoration;
      tmp28Result = tmp28(tmp4(tmp3[16]).Avatar, obj5);
    } else {
      const obj6 = { source: null, resizeMode: "stretch", width: 80, height: 80, style: null };
      obj6[0] = cachedSourceFromURI;
      obj6[4] = tmp.image;
      tmp28Result = tmp28(tmp2(tmp3[42]), obj6);
    }
    obj4[2] = tmp28Result;
    tmp28Result = tmp28(tmp2Result, obj4);
  }
  items2[1] = tmp28Result;
  obj1[2] = items2;
  return closure_23(tmp2Result, obj1);
});
let closure_38 = { code: "function VoicePanelCardTsx6(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
let closure_39 = { code: "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
let closure_40 = { code: "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
let closure_42 = importAllResult.memo((id) => {
  let closure_0 = id;
  const tmp = id(importAllResult.useState(() => outer1_8.isSpeaking(id.id)), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  id = id.id;
  const items = [first, id];
  const effect = importAllResult.useEffect(() => {
    if (!first) {
      const result = outer1_8.addConditionalChangeListener(() => {
        const isSpeakingResult = outer1_8.isSpeaking(map);
        let flag = !isSpeakingResult;
        if (isSpeakingResult) {
          callback(true);
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
    tmp4 = callback(SpeakingIndicator, obj);
  }
  return tmp4;
});
let closure_43 = { code: "function VoicePanelCardTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_44 = { code: "function VoicePanelCardTsx10(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}" };
let closure_45 = { code: "function VoicePanelCardTsx11(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}" };
let closure_46 = { code: "function VoicePanelCardTsx12(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}" };
let closure_47 = { isSelf: false, hasVideo: false, user: { id: "r" } };
function layoutTransitionFunction(originX, SUBTLE_SPRING) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj = require(4603) /* CONFIG_NEVER_ANIMATE */;
  let str = "animate-always";
  let str2 = "animate-always";
  if (flag) {
    str2 = "animate-never";
  }
  obj = { originX: obj.withSpring(originX.targetOriginX, SUBTLE_SPRING, str2), originY: null, width: null, height: null };
  let tmpResult = tmp(4603);
  let str3 = str;
  if (flag) {
    str3 = "animate-never";
  }
  obj[1] = tmpResult.withSpring(originX.targetOriginY, SUBTLE_SPRING, str3);
  tmpResult = tmp(4603);
  let str4 = str;
  if (flag) {
    str4 = "animate-never";
  }
  obj[2] = tmpResult.withSpring(originX.targetWidth, SUBTLE_SPRING, str4);
  if (flag) {
    str = "animate-never";
  }
  obj = { animations: null, initialValues: null };
  obj[3] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetHeight, SUBTLE_SPRING, str);
  obj[0] = obj;
  obj[1] = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
let obj6 = { width: tmp5, height: tmp5, borderRadius: require("Themes").radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
layoutTransitionFunction.__closure = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring };
layoutTransitionFunction.__workletHash = 4871152530917;
layoutTransitionFunction.__initData = { code: "function layoutTransitionFunction_VoicePanelCardTsx13(values,physics,disableAnimation=false){const{withSpring}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,physics,!disableAnimation?'animate-always':'animate-never'),originY:withSpring(values.targetOriginY,physics,!disableAnimation?'animate-always':'animate-never'),width:withSpring(values.targetWidth,physics,!disableAnimation?'animate-always':'animate-never'),height:withSpring(values.targetHeight,physics,!disableAnimation?'animate-always':'animate-never')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let closure_49 = { code: "function VoicePanelCardTsx14(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
let closure_50 = { code: "function VoicePanelCardTsx15(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
let closure_51 = { code: "function VoicePanelCardTsx16(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
let closure_52 = { code: "function VoicePanelCardTsx17(){const{coords,focused,id,isPIP,pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){width=pipState.width;height=pipState.height;const pipHeight=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'animate-always')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'animate-always')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
let closure_53 = { code: "function VoicePanelCardTsx18(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_54 = { code: "function VoicePanelCardTsx19(values){const{withSpring,layoutPhysics,wrapperOffset}=this.__closure;const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'animate-always'),originY:withSpring(values.targetOriginY,layoutPhysics,'animate-always'),width:withSpring(values.targetWidth,layoutPhysics,'animate-always'),height:withSpring(values.targetHeight,layoutPhysics,'animate-always')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}}};}" };
let closure_56 = { code: "function VoicePanelCardTsx20(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
let closure_57 = { code: "function layoutTransition_VoicePanelCardTsx21(values,disableAnimation=false){const{layoutTransitionFunction,physics}=this.__closure;return layoutTransitionFunction(values,physics,disableAnimation);}" };
let obj10 = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring };
const memoResult = importAllResult.memo(function VoicePanelCard(cleanUp) {
  let channelId;
  let focused;
  let guildId;
  let id3;
  let isCall;
  let item;
  let layoutManager;
  let layoutTransition;
  let mountedCards;
  let physics;
  let scrollPosition;
  let streamId;
  let transitionState;
  let user;
  ({ item, transitionState } = cleanUp);
  scrollPosition = undefined;
  let windowDimensions;
  let id2;
  let sharedValue1;
  let cardLayoutCoordsSubscription;
  const id = item.id;
  let obj = cardLayoutCoordsSubscription;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[24]));
  ({ focused, guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp4 = windowDimensions(id2[50])(id, channelId, guildId);
  let obj1 = scrollPosition(id2[50]);
  let tmp6 = tmp4;
  if (!obj1.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_47;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  let tmp5Result = tmp5(tmp2[25]);
  const items = [createRTCConnection];
  const stateFromStores = tmp5Result.useStateFromStores(items, () => connected.isConnected());
  tmp5Result = tmp5(tmp2[50]);
  const tmp8 = tmp5Result.isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type;
  let tmpResult = tmp(tmp2[26]);
  if (tmp4 != null) {
    type = tmp4.type;
  }
  if (type === ParticipantTypes.STREAM) {
    let DEFAULT = tmp5(tmp2[27]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[27]).MediaEngineContextTypes.DEFAULT;
  }
  let tmpResultResult = tmpResult(DEFAULT, str);
  const tmp13 = windowDimensions(id2[56])(str);
  if (transitionState === scrollPosition(id2[47]).TransitionStates.MOUNTED) {
    let num = 1;
  } else {
    num = 0;
  }
  const sharedValue = scrollPosition(id2[14]).useSharedValue(num);
  const tmp5Result1 = scrollPosition(id2[14]);
  let isSpeakingResult = null != id2;
  if (isSpeakingResult) {
    isSpeakingResult = speaking.isSpeaking(id2);
  }
  sharedValue1 = scrollPosition(id2[14]).useSharedValue(isSpeakingResult);
  const items1 = [id2, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      let isSpeakingResult = null != closure_2;
      if (isSpeakingResult) {
        isSpeakingResult = outer1_8.isSpeaking(tmp2);
      }
      const result = map.set(isSpeakingResult);
    }
    let isSpeakingResult = null != id2;
    if (isSpeakingResult) {
      isSpeakingResult = outer1_8.isSpeaking(tmp2);
    }
    let result = sharedValue1.set(isSpeakingResult);
    const result1 = outer1_8.addReactChangeListener(handleChange);
    return () => {
      const result = outer2_8.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result2 = scrollPosition(id2[14]);
  cardLayoutCoordsSubscription = scrollPosition(id2[57]).useCardLayoutCoordsSubscription(id, layoutManager);
  const tmp5Result3 = scrollPosition(id2[57]);
  class U {
    constructor() {
      sum = outer1_16 + useLayoutEffect.get().y;
      obj = scrollPosition;
      value = scrollPosition.get();
      tmp3 = sum > value - useLayoutEffect.get().height;
      if (tmp3) {
        tmp5 = windowDimensions;
        value1 = obj.get();
        tmp3 = sum < value1 + windowDimensions.get().height;
      }
      return tmp3;
    }
  }
  obj = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  U.__closure = obj;
  U.__workletHash = 16772493240559;
  U.__initData = closure_56;
  const derivedValue = scrollPosition(id2[14]).useDerivedValue(U);
  const memo = obj.useMemo(() => {
    const physics = { mass: closure_11.mass, damping: windowDimensions(id2[58])(closure_11.damping - 2, closure_11.damping + 2), stiffness: windowDimensions(id2[58])(closure_11.stiffness - 20, closure_11.stiffness + 20) };
    function layoutTransition(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      return outer1_48(arg0, physics, flag);
    }
    layoutTransition.__closure = { layoutTransitionFunction: closure_48, physics };
    layoutTransition.__workletHash = 12472306522220;
    layoutTransition.__initData = closure_57;
    return { physics, layoutTransition };
  }, []);
  ({ physics, layoutTransition } = memo);
  if (item.type === constants2.CTA) {
    const id4 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id4) {
      let tmp26Result = callback(tmp(tmp2[59]), {});
      let tmp25 = callback;
    } else if (tmp36.CALLER_DISCONNECTED === id4) {
      tmp26Result = callback(tmp(tmp2[60]), {});
      tmp25 = callback;
    }
    obj = { cleanUp: null, coords: null, id: null, isRTCConnected: null, isScrollVisible: null, layoutPhysics: null, transitionState: null, sharedVisible: null, children: null };
    obj[0] = cleanUp.cleanUp;
    obj[1] = cardLayoutCoordsSubscription;
    obj[2] = id;
    obj[3] = stateFromStores;
    obj[4] = derivedValue;
    obj[5] = physics;
    obj[6] = transitionState;
    obj[7] = sharedValue;
    const items2 = [tmp26Result, , ];
    let tmp25Result = null != tmp4;
    if (tmp25Result) {
      obj1 = { isRinging: null, participant: null, label: null, layout: null, speaking: null };
      obj1[0] = tmp8;
      obj1[1] = tmp4;
      tmpResult = tmp(tmp2[63]);
      let userNick;
      if (tmp5Result5.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      obj1[2] = userNick;
      obj1[3] = layoutTransition;
      obj1[4] = sharedValue1;
      tmp25Result = tmp25(tmpResult, obj1);
      tmp5Result5 = tmp5(tmp2[50]);
    }
    items2[1] = tmp25Result;
    let result = tmp5(tmp2[50]).isStableParticipantWithUser(tmp4);
    if (result) {
      const obj2 = { speaking: null, id: null, isSelf: null, layout: null };
      obj2[0] = sharedValue1;
      obj2[1] = id;
      obj2[2] = isSelf;
      obj2[3] = layoutTransition;
      result = tmp25(closure_42, obj2);
    }
    items2[2] = result;
    obj[8] = items2;
    return closure_23(AnimatedWrapper, obj);
  } else if (null != tmp4) {
    type = item.type;
    const type2 = tmp4.type;
    if (tmp11.USER === type2) {
      ({ id: id3, streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          if (tmp4.canRenderVideo) {
            if (null == tmpResultResult) {
              let tmp28 = callback;
              const obj3 = { id: null, userId: null, streamId: null, isScrollVisible: null, videoSpinnerContext: null, sharedCoords: null, isCamera: true, focusOnReady: null, layout: null };
              obj3[0] = id3;
              obj3[1] = user.id;
              if (streamId == null) {
                streamId = null;
              }
              obj3[2] = streamId;
              obj3[3] = derivedValue;
              const VideoSpinnerContext = tmp5(tmp2[32]).VideoSpinnerContext;
              obj3[4] = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj3[5] = cardLayoutCoordsSubscription;
              if (isCall) {
                isCall = !isSelf;
              }
              obj3[7] = isCall;
              obj3[8] = layoutTransition;
              let tmp31Result = tmp28(tmp(tmp2[31]), obj3);
              const tmpResult1 = tmp(tmp2[31]);
            }
            const obj4 = { avError: null, removeSplashImage: null, userId: null, style: null };
            obj4[0] = tmpResultResult;
            focused = focused.get();
            tmpResultResult = undefined;
            if (focused != null) {
              tmpResultResult = focused.id;
            }
            obj4[1] = tmpResultResult !== id3;
            obj4[2] = user.id;
            user = StyleSheet.absoluteFill;
            obj4[3] = user;
            tmp31Result = tmp31(tmp(tmp2[61]), obj4);
            tmp28 = tmp31;
            const tmpResult2 = tmp(tmp2[61]);
          }
        }
      }
      const obj5 = { isRinging: null, avatarURI: null, avatarDecoration: null, layout: null, layoutPhysics: null, userId: null, guildId: null };
      obj5[0] = tmp8;
      obj5[1] = user.getAvatarURL(guildId, 80, false);
      const userAvatarDecoration = tmp4.userAvatarDecoration;
      obj5[2] = userAvatarDecoration;
      obj5[3] = layoutTransition;
      obj5[4] = physics;
      obj5[5] = user.id;
      obj5[6] = guildId;
      tmp25 = tmp26;
      tmp26Result = tmp26(closure_37, obj5);
      const tmp27 = closure_37;
    } else if (tmp11.STREAM === type2) {
      const obj6 = { userId: null, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf: null, sharedCoords: null, isScrollVisible: null, layout: null };
      obj6[0] = tmp4.user.id;
      ({ id: obj10[1], streamGuildId: obj10[2], streamId: obj10[3], userNick: obj10[4] } = tmp4);
      obj6[5] = isSelf;
      obj6[6] = cardLayoutCoordsSubscription;
      obj6[7] = derivedValue;
      obj6[8] = layoutTransition;
      tmp26Result = callback(closure_34, obj6);
      tmp25 = callback;
    } else if (tmp11.ACTIVITY === type2) {
      const obj7 = { sharedVisible: null, applicationId: null, layout: null };
      obj7[0] = sharedValue;
      obj7[1] = tmp4.applicationId;
      obj7[2] = layoutTransition;
      tmp26Result = callback(tmp(tmp2[62]), obj7, tmp4.id);
      tmp25 = callback;
    }
  }
  const obj8 = { isRinging: tmp8, avatarURI: "r", avatarDecoration: "borderRadius", layout: "isArrayBuffer", layoutPhysics: "ZodDate" };
  obj8[3] = layoutTransition;
  obj8[4] = physics;
  tmp26Result = callback(closure_37, obj8);
  tmp25 = callback;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default memoResult;