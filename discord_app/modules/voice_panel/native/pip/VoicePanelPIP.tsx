// === Module 16475: VoicePanelPIP ===

// Module 16475 (VoicePanelPIP)
import ManaContext from "ManaContext" /* 4107 */;
import CONFIG_NEVER_ANIMATE from "CONFIG_NEVER_ANIMATE" /* 4749 */;
import context2 from "context" /* 16405 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "participantFromServer" /* 1390 */;
import closure_8 from "map" /* 8745 */;
import closure_9 from "withEqualityFn" /* 8701 */;
import VoicePanelModes from "VoicePanelModes" /* 11489 */;
import { VoicePanelControlsModes } from "VoicePanelControlsModes" /* 11487 */;
import { VoicePanelPIPModes } from "VoicePanelPIPModes" /* 16401 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8740 */;
import { isLaunched } from "FrameLayoutModes" /* 8746 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function VoicePanelPIP() {
  const tmp = callback3();
  let mode = tmp;
  obj = stateFromStores2;
  const context = stateFromStores2.useContext(importDefault(first[14]));
  const setMode = context.setMode;
  importDefault = setMode;
  obj1 = mode(first[15]);
  const pIPState = obj1.usePIPState();
  let controlsSpecs = pIPState;
  mode = pIPState.mode;
  importDefault = undefined;
  controlsSpecs = undefined;
  first = undefined;
  let callback;
  stateFromStores2 = undefined;
  let callback1;
  let setMode2;
  let showControls;
  let windowDimensions;
  let wrapperDimensions;
  let wrapperOffset;
  let channelId;
  let pIPState1;
  let sharedValue;
  let sharedValue1;
  let stateFromStores;
  let stateFromStores1;
  callback = undefined;
  const tmp7 = callback3();
  importDefault = tmp7;
  const context1 = stateFromStores2.useContext(importDefault(first[14]));
  controlsSpecs = context1.controlsSpecs;
  const hideControls = context1.hideControls;
  first = hideControls;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  callback = pipAvoidanceSpecs;
  const safeArea = context1.safeArea;
  stateFromStores2 = safeArea;
  const setFocused = context1.setFocused;
  callback1 = setFocused;
  setMode2 = context1.setMode;
  showControls = context1.showControls;
  windowDimensions = context1.windowDimensions;
  wrapperDimensions = context1.wrapperDimensions;
  wrapperOffset = context1.wrapperOffset;
  channelId = context1.channelId;
  let obj2 = mode(first[15]);
  pIPState1 = obj2.usePIPState();
  let obj3 = mode(first[16]);
  sharedValue = obj3.useSharedValue({ x: 0, y: 0, absoluteX: 0, absoluteY: 0, active: false, pressed: false });
  let obj4 = mode(first[16]);
  sharedValue1 = obj4.useSharedValue(0);
  let items = [sharedValue1];
  const effect = stateFromStores2.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_15.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let obj5 = mode(first[16]);
  let fn = function j() {
    const width = pIPState1.width;
    const tmp2 = pIPState1.showSecondaryPIP ? pIPState1.containerHeight : pIPState1.height;
    obj = mode(first[17]);
    obj = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width, height: tmp2, windowDimensions: windowDimensions.get(), safeArea: stateFromStores2.get(), bottomAvoidanceRegion: store.get().bottom, topAvoidanceRegion: store.get().top, positionOffset: null };
    let obj2 = sharedValue;
    let value;
    if (sharedValue.get().active) {
      value = obj2.get();
    }
    obj[8] = value;
    const clampedPIPPosition = obj.getClampedPIPPosition(obj);
    obj = { width, height: tmp2, opacity: sharedValue1.get(), transform: null, borderRadius: null };
    ({ x, y } = clampedPIPPosition);
    let tmp3Result = tmp3(tmp4[12]);
    const items = [{ translateX: tmp3Result.withSpring(x, obj2.get().active ? wrapperDimensions : callback) }, ];
    tmp3Result = tmp3(tmp4[12]);
    obj2 = { translateY: tmp3Result.withSpring(y, obj2.get().active ? wrapperDimensions : callback) };
    items[1] = obj2;
    obj[3] = items;
    obj1 = { translateX: tmp3Result.withSpring(x, obj2.get().active ? wrapperDimensions : callback) };
    obj[4] = mode(first[17]).getVoicePanelPIPBorderRadius(width, tmp2);
    return obj;
  };
  obj = { pipState: pIPState1, getClampedPIPPosition: mode(first[17]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, initialGestureOffset: sharedValue, opacity: sharedValue1, withSpring: mode(first[12]).withSpring, DRAWER_SPRING_PHYSICS: wrapperDimensions, LAYOUT_PHYSICS: callback, getVoicePanelPIPBorderRadius: mode(first[17]).getVoicePanelPIPBorderRadius };
  fn.__closure = obj;
  fn.__workletHash = 13878914347149;
  fn.__initData = closure_22;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj7 = mode(first[16]);
  let fn2 = function z() {
    ({ width, height } = pIPState1);
    obj = { width, height, borderRadius: mode(first[17]).getVoicePanelPIPBorderRadius(width, height) };
    return obj;
  };
  obj = { pipState: pIPState1, getVoicePanelPIPBorderRadius: mode(first[17]).getVoicePanelPIPBorderRadius };
  fn2.__closure = obj;
  fn2.__workletHash = 1384430134356;
  fn2.__initData = closure_23;
  const items1 = [tmp7, , ];
  ({ width: arr2[1], height: arr2[2] } = pIPState1);
  const animatedStyle1 = obj7.useAnimatedStyle(fn2);
  const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo = stateFromStores2.useMemo(() => {
    const items = [lib.pipContentWrapper, , ];
    obj = { width: pIPState1.width, height: pIPState1.height, borderRadius: mode(first[17]).getVoicePanelPIPBorderRadius(pIPState1.width, pIPState1.height) };
    items[1] = obj;
    items[2] = lib.inAppElevationShadow;
    return items;
  }, items1);
  const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode2];
  const memo1 = stateFromStores2.useMemo(() => {
    const Gesture = mode(first[18]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(true);
    let result = Gesture.Pan().enabled(true).manualActivation(true).shouldCancelWhenOutside(false);
    const fn = function l(allTouches) {
      const point = closure_1_21(allTouches.allTouches);
      obj = store;
      const point2 = store.get();
      if (point2.pressed) {
        obj = { absoluteX: null, absoluteY: null };
        obj[0] = point.x - point2.x;
        obj[1] = point.y - point2.y;
        closure_1_1(closure_1_3[19])(obj, obj);
      } else {
        obj = { x: 0, y: 0, absoluteX: null, absoluteY: null, active: false, pressed: true };
        ({ x: obj2[2], y: obj2[3] } = point);
        const result = obj.set(obj);
      }
    };
    obj = { getTouchesCentroid: closure_1_21, initialGestureOffset: sharedValue, updateSharedValueIfChanged: lib(first[19]) };
    fn.__closure = obj;
    fn.__workletHash = 15063786919088;
    fn.__initData = closure_1_29;
    const manualActivationResult = Gesture.Pan().enabled(true).manualActivation(true);
    const fn2 = function u(allTouches) {
      closure_0 = allTouches;
      allTouches = allTouches.allTouches;
      const found = allTouches.filter((arg0) => {
        allTouches = arg0;
        const changedTouches = allTouches.changedTouches;
        return !changedTouches.some((id) => id.id === id.id);
      });
      if (0 !== found.length) {
        const point = closure_1_21(found);
        const point2 = store.get();
        obj = { absoluteX: null, absoluteY: null };
        obj[0] = point.x - point2.x;
        obj[1] = point.y - point2.y;
        closure_1_1(closure_1_3[19])(store, obj);
      } else {
        closure_1_1(closure_1_3[19])(store, { pressed: false });
      }
    };
    obj = { updateSharedValueIfChanged: lib(first[19]), initialGestureOffset: sharedValue, getTouchesCentroid: closure_1_21 };
    fn2.__closure = obj;
    fn2.__workletHash = 8521982336183;
    fn2.__initData = closure_1_28;
    const onTouchesDownResult = result.onTouchesDown(fn);
    const fn3 = function s(allTouches, activate) {
      const point = closure_1_21(allTouches.allTouches);
      obj = store;
      const value = store.get();
      if (value.active) {
        obj = { x: null, y: null };
        obj[0] = point.x - value.absoluteX;
        obj[1] = point.y - value.absoluteY;
        closure_1_1(closure_1_3[19])(obj, obj);
      } else {
        let tmp4 = allTouches.state === closure_1_0(closure_1_3[18]).State.BEGAN;
        if (tmp4) {
          const _Math = Math;
          let tmp6 = Math.abs(value.absoluteX - point.x) > 10;
          if (!tmp6) {
            const _Math2 = Math;
            tmp6 = Math.abs(value.absoluteY - point.y) > 10;
          }
          tmp4 = tmp6;
        }
        if (tmp4) {
          obj = { x: 0, y: 0, absoluteX: null, absoluteY: null, pressed: true, active: true };
          ({ x: obj2[2], y: obj2[3] } = point);
          const result = obj.set(obj);
          closure_1_1(tmp3[19])(closure_11, { gestureActive: true, x: 0, y: 0 });
          activate.activate();
          tmp2(tmp3[16]).runOnJS(closure_1_1(tmp3[20]))();
          const tmp2Result = tmp2(tmp3[16]);
        }
        tmp2 = closure_1_0;
      }
    };
    const onTouchesUpResult = result.onTouchesDown(fn).onTouchesUp(fn2);
    fn3.__closure = { getTouchesCentroid: closure_1_21, initialGestureOffset: sharedValue, updateSharedValueIfChanged: lib(first[19]), State: mode(first[18]).State, MIN_GESTURE_START: 10, wrapperOffset, runOnJS: mode(first[16]).runOnJS, triggerIOSHaptic: lib(first[20]) };
    fn3.__workletHash = 12241575480024;
    fn3.__initData = closure_1_27;
    obj1 = { getTouchesCentroid: closure_1_21, initialGestureOffset: sharedValue, updateSharedValueIfChanged: lib(first[19]), State: mode(first[18]).State, MIN_GESTURE_START: 10, wrapperOffset, runOnJS: mode(first[16]).runOnJS, triggerIOSHaptic: lib(first[20]) };
    const fn4 = function o(arg0) {
      ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
      obj = closure_1_0(closure_1_3[17]);
      obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: closure_9.get(), safeArea: closure_5.get() };
      const result = obj.calculatePIPPositionFromVelocity(obj);
      ({ pipX, pipY } = result);
      closure_1_1(closure_1_3[19])(closure_10, { pipX, pipY });
      closure_1_1(closure_1_3[19])(closure_11, { gestureActive: false });
      closure_1_1(closure_1_3[19])(closure_14, { active: false, pressed: false });
      closure_1_0(closure_1_3[16]).runOnJS(closure_1_1(closure_1_3[21]).updateSourceTrackingView)();
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    fn4.__closure = { calculatePIPPositionFromVelocity: mode(first[17]).calculatePIPPositionFromVelocity, windowDimensions, safeArea: stateFromStores2, updateSharedValueIfChanged: lib(first[19]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: mode(first[16]).runOnJS, updateSourceTrackingView: lib(first[21]).updateSourceTrackingView };
    fn4.__workletHash = 7691164556371;
    fn4.__initData = closure_1_26;
    const obj2 = { calculatePIPPositionFromVelocity: mode(first[17]).calculatePIPPositionFromVelocity, windowDimensions, safeArea: stateFromStores2, updateSharedValueIfChanged: lib(first[19]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: mode(first[16]).runOnJS, updateSourceTrackingView: lib(first[21]).updateSourceTrackingView };
    const fn5 = function n() {
      closure_1_1(closure_1_3[19])(closure_14, { active: false, pressed: false });
    };
    const onEndResult = onTouchesMoveResult.onEnd(fn4);
    fn5.__closure = { updateSharedValueIfChanged: lib(first[19]), initialGestureOffset: sharedValue };
    fn5.__workletHash = 6531632664260;
    fn5.__initData = closure_1_25;
    const obj3 = { updateSharedValueIfChanged: lib(first[19]), initialGestureOffset: sharedValue };
    const fn6 = function t() {
      closure_1_1(closure_1_3[19])(closure_14, { active: false, pressed: false });
    };
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    fn6.__closure = { updateSharedValueIfChanged: lib(first[19]), initialGestureOffset: sharedValue };
    fn6.__workletHash = 4606005866023;
    fn6.__initData = closure_1_24;
    return onTouchesCancelledResult.onFinalize(fn6);
  }, items2);
  const memo2 = stateFromStores2.useMemo(() => {
    const Gesture = mode(first[18]).Gesture;
    const Gesture2 = mode(first[18]).Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP);
    const fn = function o() {
      closure_1_0(closure_1_3[16]).runOnJS(closure_6)(null);
    };
    obj = { runOnJS: mode(first[16]).runOnJS, setFocused: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 10703348418884;
    fn.__initData = closure_1_30;
    const maxDistanceResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30);
    const onStartResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30).onStart(fn);
    const Gesture3 = mode(first[18]).Gesture;
    const numberOfTapsResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30).onStart(fn).numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const fn2 = function n() {
      if (closure_0 === closure_1_13.IN_APP) {
        closure_1_0(closure_1_3[16]).runOnJS(closure_7)(closure_1_11.PANEL);
        const obj3 = closure_1_0(closure_1_3[16]);
      } else if (closure_2.get().mode === closure_1_12.HIDDEN) {
        closure_1_0(closure_1_3[16]).runOnJS(closure_8)();
        const obj2 = closure_1_0(closure_1_3[16]);
      } else {
        closure_1_0(closure_1_3[16]).runOnJS(closure_3)();
        obj = closure_1_0(closure_1_3[16]);
      }
    };
    obj = { pipMode: mode, VoicePanelPIPModes: pIPState1, runOnJS: mode(first[16]).runOnJS, setMode: setMode2, VoicePanelModes: wrapperOffset, controlsSpecs, VoicePanelControlsModes: channelId, showControls, hideControls: first };
    fn2.__closure = obj;
    fn2.__workletHash = 9532493963151;
    fn2.__initData = closure_1_31;
    return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(fn2));
  }, items3);
  let obj9 = mode(first[22]);
  const items4 = [setMode2];
  stateFromStores = obj9.useStateFromStores(items4, () => {
    const currentEmbeddedActivity = setMode2.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return mode(first[23]).getEmbeddedActivityLocationChannelId(_location) !== channelId;
  });
  let obj10 = mode(first[22]);
  const items5 = [showControls];
  stateFromStores1 = obj10.useStateFromStores(items5, () => {
    const mainFrame = showControls.getMainFrame();
    let id = null;
    if (sharedValue1(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items6 = [stateFromStores, stateFromStores1, setMode2, setFocused];
  callback = stateFromStores2.useCallback(() => {
    if (stateFromStores) {
      setMode2(wrapperOffset.PIP);
      callback1(null);
    }
    if (null != stateFromStores1) {
      lib(first[24]).updateFramePanelMode(tmp7, sharedValue.PANEL);
      const obj2 = lib(first[24]);
    } else {
      const result = controlsSpecs(first[25]).updateActivityPanelMode(sharedValue.PANEL);
      obj = controlsSpecs(first[25]);
    }
  }, items6);
  const items7 = [callback];
  const memo3 = stateFromStores2.useMemo(() => {
    const Gesture = mode(first[18]).Gesture;
    const TapResult = Gesture.Tap();
    const fn = function t() {
      closure_1_0(closure_1_3[16]).runOnJS(closure_18)();
    };
    const maxDistanceResult = Gesture.Tap().maxDistance(30);
    fn.__closure = { runOnJS: mode(first[16]).runOnJS, handleSecondaryPIPTap: callback };
    fn.__workletHash = 8361527940381;
    fn.__initData = closure_1_32;
    return maxDistanceResult.onStart(fn);
  }, items7);
  let pushToTalk = importDefault(first[26])(context.controlsSpecs).pushToTalk;
  const tmp23 = callback(stateFromStores2.useState(null != pIPState.mode), 2);
  first = tmp23[0];
  callback = tmp23[1];
  const items8 = [pIPState.mode, first];
  const effect1 = stateFromStores2.useEffect(() => {
    if (!tmp) {
      store(true);
    }
  }, items8);
  let tmp5Result = tmp5(tmp3[16]);
  function ee() {
    obj = { borderRadius: mode(first[17]).getVoicePanelPIPBorderRadius(controlsSpecs.width, controlsSpecs.height) };
    return obj;
  }
  obj1 = { getVoicePanelPIPBorderRadius: tmp5(tmp3[17]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  ee.__closure = obj1;
  ee.__workletHash = 9598016909682;
  ee.__initData = closure_33;
  const animatedStyle2 = tmp5Result.useAnimatedStyle(ee);
  const items9 = [setMode];
  const memo4 = obj.useMemo(() => {
    obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
    const intl = mode(first[27]).intl;
    obj[1] = intl.string(mode(first[27]).t.oN8bqe);
    const items = [{ name: "activate" }];
    obj[3] = items;
    obj[4] = function onAccessibilityAction() {
      callback(closure_1_11.PANEL);
    };
    return obj;
  }, items9);
  tmp5Result = tmp5(tmp3[22]);
  const items10 = [showControls];
  stateFromStores2 = tmp5Result.useStateFromStores(items10, () => {
    const mainFrame = showControls.getMainFrame();
    let id = null;
    if (sharedValue1(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items11 = [stateFromStores2];
  callback1 = obj.useCallback(() => {
    if (null != stateFromStores2) {
      lib(first[24]).updateFramePanelMode(tmp, sharedValue.PANEL);
      const obj2 = lib(first[24]);
    } else {
      const result = controlsSpecs(first[25]).updateActivityPanelMode(sharedValue.PANEL);
      obj = controlsSpecs(first[25]);
    }
  }, items11);
  const items12 = [callback1];
  const memo5 = obj.useMemo(() => {
    obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = mode(first[27]).intl;
    obj[1] = intl.string(mode(first[27]).t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj[2] = items;
    obj[3] = callback1;
    return obj;
  }, items12);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== pIPState1.IN_PANEL || tmp32;
    const tmp34 = pIPState.mode !== pIPState1.IN_PANEL || tmp32;
  }
  const items13 = [tmp, pIPState.height];
  const memo6 = obj.useMemo(() => {
    const items = [mode.pushToTalkContainer, { height: controlsSpecs.height }];
    return items;
  }, items13);
  obj2 = { pointerEvents: "box-none", style: items14, layout: layoutTransition, children: null };
  items14 = [tmp.container, animatedStyle];
  let tmp2Result = tmp2(tmp3[28]);
  obj3 = { gesture: memo1, children: null };
  obj4 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: layoutTransition, children: null };
  let tmp39Result = null;
  tmp2Result = tmp2(tmp3[28]);
  if (null != pIPState.mode || first) {
    obj5 = { style: null, pointerEvents: "box-none", layout: null };
    const items15 = [, , ];
    ({ pipContentWrapper: arr16[0], inAppElevationShadow: arr16[1] } = tmp);
    items15[2] = animatedStyle1;
    obj5[0] = items15;
    obj5[2] = tmp38;
    const merged = Object.assign(memo4);
    const obj6 = { gesture: null, children: null };
    obj6[0] = memo2;
    obj7 = { style: null, layout: null, children: null };
    const items16 = [tmp.pipMask, animatedStyle2];
    obj7[0] = items16;
    obj7[1] = tmp38;
    const tmp2Result1 = tmp2(tmp3[28]);
    obj7[2] = tmp39(tmp2(tmp3[29]), {});
    obj6[1] = tmp39(tmp2(tmp3[28]), obj7);
    obj5.children = tmp39(tmp5(tmp3[18]).GestureDetector, obj6);
    tmp39Result = tmp39(tmp2Result1, obj5);
    const tmp2Result2 = tmp2(tmp3[28]);
  }
  const items17 = [tmp39Result, ];
  tmp39Result = null;
  if (pIPState.showSecondaryPIP) {
    const obj8 = { style: null };
    obj8[0] = memo;
    const merged1 = Object.assign(memo5);
    obj9 = { style: null, children: null };
    const items18 = [tmp.pipMask, animatedStyle2];
    obj9[0] = items18;
    const tmp2Result3 = tmp2(tmp3[30]);
    obj10 = { gesture: null, children: null };
    obj10[0] = memo3;
    const obj11 = { style: null, children: null };
    obj11[0] = callback1.absoluteFill;
    const tmp2Result4 = tmp2(tmp3[28]);
    obj11[1] = tmp39(tmp2(tmp3[31]), {});
    obj10[1] = tmp39(tmp2(tmp3[30]), obj11);
    obj9[1] = tmp39(tmp5(tmp3[18]).GestureDetector, obj10);
    obj8.children = tmp39(tmp2Result4, obj9);
    tmp39Result = tmp39(tmp2Result3, obj8);
    const tmp2Result5 = tmp2(tmp3[30]);
  }
  items17[1] = tmp39Result;
  obj4[3] = items17;
  obj3[1] = stateFromStores1(tmp2Result, obj4);
  const items19 = [stateFromStores(mode(first[18]).GestureDetector, obj3), ];
  let tmp39Result1 = null;
  if (null != pIPState.mode || first) {
    tmp39Result1 = null;
    if (pushToTalk) {
      const obj12 = { pointerEvents: "box-none", style: null, layout: null, children: null };
      obj12[1] = memo6;
      obj12[2] = tmp38;
      obj12[3] = tmp39(tmp2(tmp3[32]), {});
      tmp39Result1 = tmp39(tmp2(tmp3[28]), obj12);
      const tmp2Result6 = tmp2(tmp3[28]);
    }
  }
  items19[1] = tmp39Result1;
  obj2[3] = items19;
  return stateFromStores1(tmp2Result, obj2);
}
function renderPIPWrapper(arg0, pipMode, transitionState, transitionCleanUp) {
  return callback2(closure_37, { pipMode: pipMode.pipMode, transitionState, transitionCleanUp }, arg0);
}
let c5 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ DRAWER_SPRING_PHYSICS: c10, VoicePanelModes: unpackModuleId, SECONDARY_PIP_TOP_MARGIN } = VoicePanelModes);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let obj = { mass: 0.3, damping: 80, stiffness: 150 };
function layoutTransition(originX) {
  obj = { animations: null, initialValues: null };
  obj = { originX: CONFIG_NEVER_ANIMATE.withSpring(originX.targetOriginX, obj), originY: null, width: null, height: null };
  const obj3 = CONFIG_NEVER_ANIMATE;
  obj[1] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetOriginY, obj);
  const obj4 = CONFIG_NEVER_ANIMATE;
  obj[2] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetWidth, obj);
  const obj5 = CONFIG_NEVER_ANIMATE;
  obj[3] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetHeight, obj);
  obj[0] = obj;
  obj[1] = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
obj = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, LAYOUT_PHYSICS: obj };
layoutTransition.__closure = obj;
layoutTransition.__workletHash = 9346092352642;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelPIPTsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS),width:withSpring(values.targetWidth,LAYOUT_PHYSICS),height:withSpring(values.targetHeight,LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj1 = { container: { position: "absolute", zIndex: 10 }, pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: null, multiPipContainer: null, pushToTalkContainer: null };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.overflow = "hidden";
obj1[3] = obj2;
createCacheKey = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.flexDirection = "column";
createCacheKey.alignItems = "center";
createCacheKey.gap = SECONDARY_PIP_TOP_MARGIN;
obj1[4] = createCacheKey;
obj1[5] = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_20 = createCacheKey.createStyles(obj1);
function getTouchesCentroid(arg0) {
  let num = 0;
  let num2 = 0;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = num;
    num = num + nextResult.absoluteX;
    let tmp3 = num2;
    num2 = num2 + nextResult.absoluteY;
    continue;
  }
  return { x: num / arg0.length, y: num2 / arg0.length };
}
getTouchesCentroid.__closure = {};
getTouchesCentroid.__workletHash = 4600348798143;
getTouchesCentroid.__initData = { code: "function getTouchesCentroid_VoicePanelPIPTsx2(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};}" };
let closure_22 = { code: "function VoicePanelPIPTsx3(){const{pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,initialGestureOffset,opacity,withSpring,DRAWER_SPRING_PHYSICS,LAYOUT_PHYSICS,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width;const height=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:initialGestureOffset.get().active?initialGestureOffset.get():undefined});return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)},{translateY:withSpring(y,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_23 = { code: "function VoicePanelPIPTsx4(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height}=pipState;return{width:width,height:height,borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_24 = { code: "function VoicePanelPIPTsx5(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_25 = { code: "function VoicePanelPIPTsx6(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_26 = { code: "function VoicePanelPIPTsx7({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}){const{calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,initialGestureOffset,runOnJS,updateSourceTrackingView}=this.__closure;const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});runOnJS(updateSourceTrackingView)();}" };
let closure_27 = { code: "function VoicePanelPIPTsx8(event,manager){const{getTouchesCentroid,initialGestureOffset,updateSharedValueIfChanged,State,MIN_GESTURE_START,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const offset=initialGestureOffset.get();if(offset.active){updateSharedValueIfChanged(initialGestureOffset,{x:centroid.x-offset.absoluteX,y:centroid.y-offset.absoluteY});return;}if(event.state!==State.BEGAN)return;if(Math.abs(offset.absoluteX-centroid.x)>MIN_GESTURE_START||Math.abs(offset.absoluteY-centroid.y)>MIN_GESTURE_START){initialGestureOffset.set({x:0,y:0,absoluteX:centroid.x,absoluteY:centroid.y,pressed:true,active:true});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
let closure_28 = { code: "function VoicePanelPIPTsx9(event){const{updateSharedValueIfChanged,initialGestureOffset,getTouchesCentroid}=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(initialGestureOffset,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);const offset=initialGestureOffset.get();updateSharedValueIfChanged(initialGestureOffset,{absoluteX:centroid.x-offset.x,absoluteY:centroid.y-offset.y});}" };
let closure_29 = { code: "function VoicePanelPIPTsx10(event){const{getTouchesCentroid,initialGestureOffset,updateSharedValueIfChanged}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const offset=initialGestureOffset.get();if(!offset.pressed){initialGestureOffset.set({x:0,y:0,absoluteX:centroid.x,absoluteY:centroid.y,active:false,pressed:true});return;}updateSharedValueIfChanged(initialGestureOffset,{absoluteX:centroid.x-offset.x,absoluteY:centroid.y-offset.y});}" };
let closure_30 = { code: "function VoicePanelPIPTsx11(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
let closure_31 = { code: "function VoicePanelPIPTsx12(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
let closure_32 = { code: "function VoicePanelPIPTsx13(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
let closure_33 = { code: "function VoicePanelPIPTsx14(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_35 = { code: "function VoicePanelPIPTsx15(){const{transitionState,TransitionStates,panelCardStillInPIP}=this.__closure;return transitionState===TransitionStates.YEETED&&!panelCardStillInPIP.get();}" };
let closure_36 = { code: "function VoicePanelPIPTsx16(ready,prev){const{runOnJS,fireCleanup}=this.__closure;if(ready&&prev!==ready){runOnJS(fireCleanup)();}}" };
let closure_37 = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  c2 = undefined;
  dependencyMap = undefined;
  let callback;
  let panelCardStillInPIP;
  obj = panelCardStillInPIP;
  let tmp = transitionState.pipMode === VoicePanelPIPModes.IN_PANEL;
  if (!tmp) {
    tmp = transitionState === transitionState(4107).TransitionStates.MOUNTED;
  }
  [tmp5, c2] = callback(panelCardStillInPIP.useState(tmp), 2);
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => callback(true), 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  dependencyMap = obj.useRef(null);
  const items = [transitionCleanUp];
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    transitionCleanUp();
  }, items);
  const items1 = [transitionState, callback];
  const effect1 = obj.useEffect(() => {
    if (transitionState === transitionState(ref[33]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(callback, 500);
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.current);
          tmp.current = null;
        }
      };
    }
  }, items1);
  panelCardStillInPIP = obj.useContext(transitionCleanUp(11488)).panelCardStillInPIP;
  const tmp4 = callback(panelCardStillInPIP.useState(tmp), 2);
  class I {
    constructor() {
      tmp = transitionState === transitionState(closure_3[33]).TransitionStates.YEETED;
      if (tmp) {
        tmp2 = panelCardStillInPIP;
        tmp = !panelCardStillInPIP.get();
      }
      return tmp;
    }
  }
  obj = { transitionState, TransitionStates: transitionState(4107).TransitionStates, panelCardStillInPIP };
  I.__closure = obj;
  I.__workletHash = 10653972388666;
  I.__initData = closure_35;
  class S {
    constructor(arg0, arg1) {
      tmp = transitionState;
      if (transitionState) {
        tmp2 = arg1;
        tmp = arg1 !== transitionState;
      }
      if (tmp) {
        tmp3 = transitionState;
        tmp4 = closure_3;
        obj = transitionState(closure_3[16]);
        tmp5 = closure_4;
        tmp6 = obj.runOnJS(closure_4)();
      }
      return;
    }
  }
  obj = { runOnJS: transitionState(4119).runOnJS, fireCleanup: callback };
  S.__closure = obj;
  S.__workletHash = 1599147342710;
  S.__initData = closure_36;
  const animatedReaction = transitionState(4119).useAnimatedReaction(I, S);
  let tmp10 = null;
  if (tmp5) {
    tmp10 = callback2(VoicePanelPIP, {});
  }
  return tmp10;
});
const memoResult = importAllResult.memo(function VoicePanelPIPWrapper() {
  obj = context2;
  const pIPState = obj.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  if (null != mode) {
    obj = { pipMode: null };
    obj[0] = mode;
    const tmp3 = obj;
  }
  obj = { item: tmp3, renderItem: renderPIPWrapper };
  return closure_16(ManaContext.TransitionItem, obj);
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default memoResult;