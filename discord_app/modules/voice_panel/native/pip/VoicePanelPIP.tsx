// === Module 16658: VoicePanelPIP ===

// Module 16658 (VoicePanelPIP)
import ManaContext from "ManaContext" /* 4172 */;
import context2 from "context" /* 16586 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "participantFromServer" /* 1390 */;
import closure_8 from "map" /* 9385 */;
import closure_9 from "withEqualityFn" /* 4681 */;
import VoicePanelModes from "VoicePanelModes" /* 11757 */;
import { VoicePanelControlsModes } from "VoicePanelControlsModes" /* 11755 */;
import { VoicePanelPIPModes } from "VoicePanelPIPModes" /* 16582 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9387 */;
import { isLaunched } from "FrameLayoutModes" /* 9386 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function VoicePanelPIP() {
  const tmp = callback();
  let mode = tmp;
  let obj = stateFromStores2;
  const context = stateFromStores2.useContext(importDefault(first[13]));
  const setMode = context.setMode;
  importDefault = setMode;
  obj1 = mode(first[14]);
  const pIPState = obj1.usePIPState();
  let controlsSpecs = pIPState;
  mode = pIPState.mode;
  importDefault = undefined;
  controlsSpecs = undefined;
  first = undefined;
  callback = undefined;
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
  const tmp7 = callback();
  importDefault = tmp7;
  const context1 = stateFromStores2.useContext(importDefault(first[13]));
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
  let obj2 = mode(first[14]);
  pIPState1 = obj2.usePIPState();
  let obj3 = mode(first[15]);
  sharedValue = obj3.useSharedValue({ x: 0, y: 0, absoluteX: 0, absoluteY: 0, active: false, pressed: false });
  let obj4 = mode(first[15]);
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
  let obj5 = mode(first[15]);
  class U {
    constructor() {
      tmp = closure_13;
      width = closure_13.width;
      tmp2 = closure_13.showSecondaryPIP ? tmp.containerHeight : tmp.height;
      tmp3 = mode;
      tmp4 = closure_3;
      obj = mode(closure_3[16]);
      obj = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width, height: tmp2, windowDimensions: windowDimensions.get(), safeArea: closure_5.get(), bottomAvoidanceRegion: closure_4.get().bottom, topAvoidanceRegion: closure_4.get().top, positionOffset: null };
      obj3 = closure_14;
      value = undefined;
      if (closure_14.get().active) {
        value = obj3.get();
      }
      obj[8] = value;
      clampedPIPPosition = obj.getClampedPIPPosition(obj);
      obj1 = { width, height: tmp2, opacity: closure_15.get(), transform: null, borderRadius: null };
      ({ x, y } = clampedPIPPosition);
      tmp3Result = tmp3(tmp4[17]);
      if (obj3.get().active) {
        PIP_LAYOUT_PHYSICS = wrapperDimensions;
      } else {
        PIP_LAYOUT_PHYSICS = tmp3(tmp4[16]).PIP_LAYOUT_PHYSICS;
      }
      obj2 = { translateX: tmp3Result.withSpring(x, PIP_LAYOUT_PHYSICS) };
      items = [, ];
      items[0] = obj2;
      tmp3Result1 = tmp3(tmp4[17]);
      if (obj3.get().active) {
        PIP_LAYOUT_PHYSICS2 = wrapperDimensions;
      } else {
        PIP_LAYOUT_PHYSICS2 = tmp3(tmp4[16]).PIP_LAYOUT_PHYSICS;
      }
      obj3 = { translateY: tmp3Result1.withSpring(y, PIP_LAYOUT_PHYSICS2) };
      items[1] = obj3;
      obj1[3] = items;
      tmp3Result2 = tmp3(tmp4[16]);
      obj1[4] = tmp3Result2.getVoicePanelPIPBorderRadius(width, tmp2);
      return obj1;
    }
  }
  obj = { pipState: pIPState1, getClampedPIPPosition: mode(first[16]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, initialGestureOffset: sharedValue, opacity: sharedValue1, withSpring: mode(first[17]).withSpring, DRAWER_SPRING_PHYSICS: wrapperDimensions, PIP_LAYOUT_PHYSICS: mode(first[16]).PIP_LAYOUT_PHYSICS, getVoicePanelPIPBorderRadius: mode(first[16]).getVoicePanelPIPBorderRadius };
  U.__closure = obj;
  U.__workletHash = 5482189022714;
  U.__initData = closure_20;
  const animatedStyle = obj5.useAnimatedStyle(U);
  let obj7 = mode(first[15]);
  let fn = function j() {
    ({ width, height } = pIPState1);
    const obj = { width, height, borderRadius: mode(first[16]).getVoicePanelPIPBorderRadius(width, height) };
    return obj;
  };
  obj = { pipState: pIPState1, getVoicePanelPIPBorderRadius: mode(first[16]).getVoicePanelPIPBorderRadius };
  fn.__closure = obj;
  fn.__workletHash = 1914976453427;
  fn.__initData = closure_21;
  const items1 = [tmp7, , ];
  ({ width: arr2[1], height: arr2[2] } = pIPState1);
  const animatedStyle1 = obj7.useAnimatedStyle(fn);
  const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo = stateFromStores2.useMemo(() => {
    const items = [lib.pipContentWrapper, , ];
    const obj = { width: pIPState1.width, height: pIPState1.height, borderRadius: mode(first[16]).getVoicePanelPIPBorderRadius(pIPState1.width, pIPState1.height) };
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
      const point = closure_1_19(allTouches.allTouches);
      let obj = store;
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
    let obj = { getTouchesCentroid: closure_1_19, initialGestureOffset: sharedValue, updateSharedValueIfChanged: lib(first[19]) };
    fn.__closure = obj;
    fn.__workletHash = 7998022656808;
    fn.__initData = closure_1_27;
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
        const point = closure_1_19(found);
        const point2 = store.get();
        const obj = { absoluteX: null, absoluteY: null };
        obj[0] = point.x - point2.x;
        obj[1] = point.y - point2.y;
        closure_1_1(closure_1_3[19])(store, obj);
      } else {
        closure_1_1(closure_1_3[19])(store, { pressed: false });
      }
    };
    obj = { updateSharedValueIfChanged: lib(first[19]), initialGestureOffset: sharedValue, getTouchesCentroid: closure_1_19 };
    fn2.__closure = obj;
    fn2.__workletHash = 7791159270294;
    fn2.__initData = closure_1_26;
    const onTouchesDownResult = result.onTouchesDown(fn);
    const fn3 = function s(allTouches, activate) {
      const point = closure_1_19(allTouches.allTouches);
      let obj = store;
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
          tmp2(tmp3[15]).runOnJS(closure_1_1(tmp3[20]))();
          const tmp2Result = tmp2(tmp3[15]);
        }
        tmp2 = closure_1_0;
      }
    };
    const onTouchesUpResult = result.onTouchesDown(fn).onTouchesUp(fn2);
    fn3.__closure = { getTouchesCentroid: closure_1_19, initialGestureOffset: sharedValue, updateSharedValueIfChanged: lib(first[19]), State: mode(first[18]).State, MIN_GESTURE_START: 10, wrapperOffset, runOnJS: mode(first[15]).runOnJS, triggerIOSHaptic: lib(first[20]) };
    fn3.__workletHash = 3146633930679;
    fn3.__initData = closure_1_25;
    obj1 = { getTouchesCentroid: closure_1_19, initialGestureOffset: sharedValue, updateSharedValueIfChanged: lib(first[19]), State: mode(first[18]).State, MIN_GESTURE_START: 10, wrapperOffset, runOnJS: mode(first[15]).runOnJS, triggerIOSHaptic: lib(first[20]) };
    const fn4 = function o(arg0) {
      ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
      let obj = closure_1_0(closure_1_3[16]);
      obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: closure_9.get(), safeArea: closure_5.get() };
      const result = obj.calculatePIPPositionFromVelocity(obj);
      ({ pipX, pipY } = result);
      closure_1_1(closure_1_3[19])(closure_10, { pipX, pipY });
      closure_1_1(closure_1_3[19])(closure_11, { gestureActive: false });
      closure_1_1(closure_1_3[19])(closure_14, { active: false, pressed: false });
      closure_1_0(closure_1_3[15]).runOnJS(closure_1_1(closure_1_3[21]).updateSourceTrackingView)();
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    fn4.__closure = { calculatePIPPositionFromVelocity: mode(first[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea: stateFromStores2, updateSharedValueIfChanged: lib(first[19]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: mode(first[15]).runOnJS, updateSourceTrackingView: lib(first[21]).updateSourceTrackingView };
    fn4.__workletHash = 1502716164658;
    fn4.__initData = closure_1_24;
    const obj2 = { calculatePIPPositionFromVelocity: mode(first[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea: stateFromStores2, updateSharedValueIfChanged: lib(first[19]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: mode(first[15]).runOnJS, updateSourceTrackingView: lib(first[21]).updateSourceTrackingView };
    const fn5 = function n() {
      closure_1_1(closure_1_3[19])(closure_14, { active: false, pressed: false });
    };
    const onEndResult = onTouchesMoveResult.onEnd(fn4);
    fn5.__closure = { updateSharedValueIfChanged: lib(first[19]), initialGestureOffset: sharedValue };
    fn5.__workletHash = 4606005866023;
    fn5.__initData = closure_1_23;
    const obj3 = { updateSharedValueIfChanged: lib(first[19]), initialGestureOffset: sharedValue };
    const fn6 = function t() {
      closure_1_1(closure_1_3[19])(closure_14, { active: false, pressed: false });
    };
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    fn6.__closure = { updateSharedValueIfChanged: lib(first[19]), initialGestureOffset: sharedValue };
    fn6.__workletHash = 5443656412422;
    fn6.__initData = closure_1_22;
    return onTouchesCancelledResult.onFinalize(fn6);
  }, items2);
  const memo2 = stateFromStores2.useMemo(() => {
    const Gesture = mode(first[18]).Gesture;
    const Gesture2 = mode(first[18]).Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP);
    const fn = function o() {
      closure_1_0(closure_1_3[15]).runOnJS(closure_6)(null);
    };
    let obj = { runOnJS: mode(first[15]).runOnJS, setFocused: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 8701387318341;
    fn.__initData = closure_1_28;
    const maxDistanceResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30);
    const onStartResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30).onStart(fn);
    const Gesture3 = mode(first[18]).Gesture;
    const numberOfTapsResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30).onStart(fn).numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const fn2 = function n() {
      if (closure_0 === closure_1_13.IN_APP) {
        closure_1_0(closure_1_3[15]).runOnJS(closure_7)(closure_1_11.PANEL);
        const obj3 = closure_1_0(closure_1_3[15]);
      } else if (closure_2.get().mode === closure_1_12.HIDDEN) {
        closure_1_0(closure_1_3[15]).runOnJS(closure_8)();
        const obj2 = closure_1_0(closure_1_3[15]);
      } else {
        closure_1_0(closure_1_3[15]).runOnJS(closure_3)();
        const obj = closure_1_0(closure_1_3[15]);
      }
    };
    obj = { pipMode: mode, VoicePanelPIPModes: pIPState1, runOnJS: mode(first[15]).runOnJS, setMode: setMode2, VoicePanelModes: wrapperOffset, controlsSpecs, VoicePanelControlsModes: channelId, showControls, hideControls: first };
    fn2.__closure = obj;
    fn2.__workletHash = 7961153109772;
    fn2.__initData = closure_1_29;
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
      const obj = controlsSpecs(first[25]);
    }
  }, items6);
  const items7 = [callback];
  const memo3 = stateFromStores2.useMemo(() => {
    const Gesture = mode(first[18]).Gesture;
    const TapResult = Gesture.Tap();
    const fn = function t() {
      closure_1_0(closure_1_3[15]).runOnJS(closure_18)();
    };
    const maxDistanceResult = Gesture.Tap().maxDistance(30);
    fn.__closure = { runOnJS: mode(first[15]).runOnJS, handleSecondaryPIPTap: callback };
    fn.__workletHash = 13024299268124;
    fn.__initData = closure_1_30;
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
  let tmp5Result = tmp5(tmp3[15]);
  class Z {
    constructor() {
      obj = { borderRadius: null };
      obj2 = mode(closure_3[16]);
      obj[0] = obj2.getVoicePanelPIPBorderRadius(controlsSpecs.width, controlsSpecs.height);
      return obj;
    }
  }
  obj1 = { getVoicePanelPIPBorderRadius: tmp5(tmp3[16]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  Z.__closure = obj1;
  Z.__workletHash = 15386699413749;
  Z.__initData = closure_31;
  const animatedStyle2 = tmp5Result.useAnimatedStyle(Z);
  const items9 = [setMode];
  const memo4 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
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
      const obj = controlsSpecs(first[25]);
    }
  }, items11);
  const items12 = [callback1];
  const memo5 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
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
  obj2 = { pointerEvents: "box-none", style: items14, layout: null, children: null };
  items14 = [tmp.container, animatedStyle];
  let tmp2Result = tmp2(tmp3[28]);
  obj2[2] = mode(first[16]).layoutTransition;
  obj3 = { gesture: memo1, children: null };
  obj4 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: null, children: null };
  tmp2Result = tmp2(tmp3[28]);
  obj4[2] = mode(first[16]).layoutTransition;
  let tmp38Result = null;
  if (null != pIPState.mode || first) {
    obj5 = { style: null, pointerEvents: "box-none", layout: null };
    const items15 = [, , ];
    ({ pipContentWrapper: arr16[0], inAppElevationShadow: arr16[1] } = tmp);
    items15[2] = animatedStyle1;
    obj5[0] = items15;
    obj5[2] = tmp5(tmp3[16]).layoutTransition;
    const merged = Object.assign(memo4);
    const obj6 = { gesture: null, children: null };
    obj6[0] = memo2;
    obj7 = { style: null, layout: null, children: null };
    const items16 = [tmp.pipMask, animatedStyle2];
    obj7[0] = items16;
    const tmp2Result1 = tmp2(tmp3[28]);
    obj7[1] = tmp5(tmp3[16]).layoutTransition;
    obj7[2] = tmp38(tmp2(tmp3[29]), {});
    obj6[1] = tmp38(tmp2(tmp3[28]), obj7);
    obj5.children = tmp38(tmp5(tmp3[18]).GestureDetector, obj6);
    tmp38Result = tmp38(tmp2Result1, obj5);
    const tmp2Result2 = tmp2(tmp3[28]);
  }
  const items17 = [tmp38Result, ];
  tmp38Result = null;
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
    obj11[1] = tmp38(tmp2(tmp3[31]), {});
    obj10[1] = tmp38(tmp2(tmp3[30]), obj11);
    obj9[1] = tmp38(tmp5(tmp3[18]).GestureDetector, obj10);
    obj8.children = tmp38(tmp2Result4, obj9);
    tmp38Result = tmp38(tmp2Result3, obj8);
    const tmp2Result5 = tmp2(tmp3[30]);
  }
  items17[1] = tmp38Result;
  obj4[3] = items17;
  obj3[1] = stateFromStores1(tmp2Result, obj4);
  const items19 = [stateFromStores(mode(first[18]).GestureDetector, obj3), ];
  let tmp38Result1 = null;
  if (null != pIPState.mode || first) {
    tmp38Result1 = null;
    if (pushToTalk) {
      const obj12 = { pointerEvents: "box-none", style: null, layout: null, children: null };
      obj12[1] = memo6;
      obj12[2] = tmp5(tmp3[16]).layoutTransition;
      obj12[3] = tmp38(tmp2(tmp3[32]), {});
      tmp38Result1 = tmp38(tmp2(tmp3[28]), obj12);
      const tmp2Result6 = tmp2(tmp3[28]);
    }
  }
  items19[1] = tmp38Result1;
  obj2[3] = items19;
  return stateFromStores1(tmp2Result, obj2);
}
function renderPIPWrapper(arg0, pipMode, transitionState, transitionCleanUp) {
  return callback2(closure_35, { pipMode: pipMode.pipMode, transitionState, transitionCleanUp }, arg0);
}
let c5 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ DRAWER_SPRING_PHYSICS: c10, VoicePanelModes: unpackModuleId, SECONDARY_PIP_TOP_MARGIN } = VoicePanelModes);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let obj = { container: { position: "absolute", zIndex: 10 }, pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: null, multiPipContainer: null, pushToTalkContainer: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.overflow = "hidden";
obj[3] = obj;
createCacheKey = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.flexDirection = "column";
createCacheKey.alignItems = "center";
createCacheKey.gap = SECONDARY_PIP_TOP_MARGIN;
obj[4] = createCacheKey;
obj[5] = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_18 = createCacheKey.createStyles(obj);
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
getTouchesCentroid.__workletHash = 15663926518076;
getTouchesCentroid.__initData = { code: "function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};}" };
let closure_20 = { code: "function VoicePanelPIPTsx2(){const{pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,initialGestureOffset,opacity,withSpring,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width;const height=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:initialGestureOffset.get().active?initialGestureOffset.get():undefined});return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS)},{translateY:withSpring(y,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_21 = { code: "function VoicePanelPIPTsx3(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height}=pipState;return{width:width,height:height,borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_22 = { code: "function VoicePanelPIPTsx4(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_23 = { code: "function VoicePanelPIPTsx5(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_24 = { code: "function VoicePanelPIPTsx6({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}){const{calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,initialGestureOffset,runOnJS,updateSourceTrackingView}=this.__closure;const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});runOnJS(updateSourceTrackingView)();}" };
let closure_25 = { code: "function VoicePanelPIPTsx7(event,manager){const{getTouchesCentroid,initialGestureOffset,updateSharedValueIfChanged,State,MIN_GESTURE_START,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const offset=initialGestureOffset.get();if(offset.active){updateSharedValueIfChanged(initialGestureOffset,{x:centroid.x-offset.absoluteX,y:centroid.y-offset.absoluteY});return;}if(event.state!==State.BEGAN)return;if(Math.abs(offset.absoluteX-centroid.x)>MIN_GESTURE_START||Math.abs(offset.absoluteY-centroid.y)>MIN_GESTURE_START){initialGestureOffset.set({x:0,y:0,absoluteX:centroid.x,absoluteY:centroid.y,pressed:true,active:true});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
let closure_26 = { code: "function VoicePanelPIPTsx8(event){const{updateSharedValueIfChanged,initialGestureOffset,getTouchesCentroid}=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(initialGestureOffset,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);const offset=initialGestureOffset.get();updateSharedValueIfChanged(initialGestureOffset,{absoluteX:centroid.x-offset.x,absoluteY:centroid.y-offset.y});}" };
let closure_27 = { code: "function VoicePanelPIPTsx9(event){const{getTouchesCentroid,initialGestureOffset,updateSharedValueIfChanged}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const offset=initialGestureOffset.get();if(!offset.pressed){initialGestureOffset.set({x:0,y:0,absoluteX:centroid.x,absoluteY:centroid.y,active:false,pressed:true});return;}updateSharedValueIfChanged(initialGestureOffset,{absoluteX:centroid.x-offset.x,absoluteY:centroid.y-offset.y});}" };
let closure_28 = { code: "function VoicePanelPIPTsx10(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
let closure_29 = { code: "function VoicePanelPIPTsx11(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
let closure_30 = { code: "function VoicePanelPIPTsx12(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
let closure_31 = { code: "function VoicePanelPIPTsx13(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_33 = { code: "function VoicePanelPIPTsx14(){const{transitionState,TransitionStates,panelCardStillInPIP}=this.__closure;return transitionState===TransitionStates.YEETED&&!panelCardStillInPIP.get();}" };
let closure_34 = { code: "function VoicePanelPIPTsx15(ready,prev){const{runOnJS,fireCleanup}=this.__closure;if(ready&&prev!==ready){runOnJS(fireCleanup)();}}" };
let closure_35 = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  c2 = undefined;
  dependencyMap = undefined;
  let callback;
  let panelCardStillInPIP;
  let obj = panelCardStillInPIP;
  let tmp = transitionState.pipMode === VoicePanelPIPModes.IN_PANEL;
  if (!tmp) {
    tmp = transitionState === transitionState(4172).TransitionStates.MOUNTED;
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
  panelCardStillInPIP = obj.useContext(transitionCleanUp(11756)).panelCardStillInPIP;
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
  obj = { transitionState, TransitionStates: transitionState(4172).TransitionStates, panelCardStillInPIP };
  I.__closure = obj;
  I.__workletHash = 3025452431419;
  I.__initData = closure_33;
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
        obj = transitionState(closure_3[15]);
        tmp5 = closure_4;
        tmp6 = obj.runOnJS(closure_4)();
      }
      return;
    }
  }
  obj = { runOnJS: transitionState(4185).runOnJS, fireCleanup: callback };
  S.__closure = obj;
  S.__workletHash = 5494714290933;
  S.__initData = closure_34;
  const animatedReaction = transitionState(4185).useAnimatedReaction(I, S);
  let tmp10 = null;
  if (tmp5) {
    tmp10 = callback2(VoicePanelPIP, {});
  }
  return tmp10;
});
const memoResult = importAllResult.memo(function VoicePanelPIPWrapper() {
  let obj = context2;
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