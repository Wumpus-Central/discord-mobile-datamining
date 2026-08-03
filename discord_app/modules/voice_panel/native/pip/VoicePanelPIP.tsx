// === Module 16008: VoicePanelPIP ===

// Module 16008 (VoicePanelPIP)
import wrapChildrenDefault from "wrapChildrenDefault";
import importAllResult from "triggerIOSHaptic";
import get_ActivityIndicator from "Directions";
import participantFromServer from "participantFromServer";
import map from "map";
import withEqualityFn from "withEqualityFn";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";

let SECONDARY_PIP_TOP_MARGIN;
let c10;
let closure_15;
let closure_16;
let unpackModuleId;
const require = arg1;
function VoicePanelPIP() {
  const tmp = callback1();
  let obj = safeArea;
  const context = safeArea.useContext(importDefault(10050));
  const setMode = context.setMode;
  let mode = setMode;
  let obj1 = mode(15940);
  const pIPState = obj1.usePIPState();
  importDefault = pIPState;
  mode = pIPState.mode;
  importDefault = undefined;
  let first;
  let dependencyMap;
  let stateFromStoresObject1;
  safeArea = undefined;
  let setFocused;
  let setMode2;
  let showControls;
  let windowDimensions;
  let wrapperDimensions;
  let wrapperOffset;
  let channelId;
  let pIPState1;
  let sharedValue;
  let sharedValue1;
  let callback;
  let currentEmbeddedActivityIsNotInCurrentChannel;
  let hasFrame;
  callback1 = undefined;
  const tmp7 = callback1();
  importDefault = tmp7;
  const context1 = safeArea.useContext(importDefault(10050));
  const controlsSpecs = context1.controlsSpecs;
  first = controlsSpecs;
  const hideControls = context1.hideControls;
  dependencyMap = hideControls;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  stateFromStoresObject1 = pipAvoidanceSpecs;
  safeArea = context1.safeArea;
  setFocused = context1.setFocused;
  setMode2 = context1.setMode;
  showControls = context1.showControls;
  windowDimensions = context1.windowDimensions;
  wrapperDimensions = context1.wrapperDimensions;
  wrapperOffset = context1.wrapperOffset;
  channelId = context1.channelId;
  let obj2 = mode(15940);
  pIPState1 = obj2.usePIPState();
  let obj3 = mode(4054);
  sharedValue = obj3.useSharedValue({ x: 0, y: 0, absoluteX: 0, absoluteY: 0, active: false, pressed: false });
  let obj4 = mode(4054);
  sharedValue1 = obj4.useSharedValue(0);
  let items = [sharedValue1];
  const effect = safeArea.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_15.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let obj5 = mode(4054);
  class U {
    constructor() {
      tmp = c13;
      width = c13.width;
      tmp2 = c13.showSecondaryPIP ? tmp.containerHeight : tmp.height;
      tmp3 = mode;
      tmp4 = useState;
      obj = mode(useState[16]);
      obj = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width, height: tmp2, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: useStateFromStoresObject.get().bottom, topAvoidanceRegion: useStateFromStoresObject.get().top, positionOffset: null };
      obj3 = c14;
      value = undefined;
      if (c14.get().active) {
        value = obj3.get();
      }
      obj[8] = value;
      clampedPIPPosition = obj.getClampedPIPPosition(obj);
      obj1 = { width, height: tmp2, opacity: c15.get(), transform: null, borderRadius: null };
      ({ x, y } = clampedPIPPosition);
      tmp3Result = tmp3(tmp4[11]);
      obj2 = { translateX: tmp3Result.withSpring(x, obj3.get().active ? wrapperDimensions : controlsSpecs) };
      items = [, ];
      items[0] = obj2;
      tmp3Result1 = tmp3(tmp4[11]);
      obj3 = { translateY: tmp3Result1.withSpring(y, obj3.get().active ? wrapperDimensions : controlsSpecs) };
      items[1] = obj3;
      obj1[3] = items;
      tmp3Result2 = tmp3(tmp4[16]);
      obj1[4] = tmp3Result2.getVoicePanelPIPBorderRadius(width, tmp2);
      return obj1;
    }
  }
  obj = { pipState: pIPState1, getClampedPIPPosition: mode(15935).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, initialGestureOffset: sharedValue, opacity: sharedValue1, withSpring: mode(4603).withSpring, DRAWER_SPRING_PHYSICS: wrapperDimensions, LAYOUT_PHYSICS: currentEmbeddedActivityIsNotInCurrentChannel, getVoicePanelPIPBorderRadius: mode(15935).getVoicePanelPIPBorderRadius };
  U.__closure = obj;
  U.__workletHash = 6729444248940;
  U.__initData = closure_20;
  const animatedStyle = obj5.useAnimatedStyle(U);
  let obj7 = mode(4054);
  let fn = function j() {
    let height;
    let width;
    ({ width, height } = pIPState1);
    const obj = { width, height, borderRadius: null };
    obj[2] = mode(15935).getVoicePanelPIPBorderRadius(width, height);
    return obj;
  };
  obj = { pipState: pIPState1, getVoicePanelPIPBorderRadius: mode(15935).getVoicePanelPIPBorderRadius };
  fn.__closure = obj;
  fn.__workletHash = 1914976453427;
  fn.__initData = closure_21;
  const items1 = [tmp7, , ];
  ({ width: arr2[1], height: arr2[2] } = pIPState1);
  const animatedStyle1 = obj7.useAnimatedStyle(fn);
  const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo = safeArea.useMemo(() => {
    const items = [_undefined.pipContentWrapper, , ];
    const obj = { width: pIPState1.width, height: pIPState1.height, borderRadius: null };
    obj[2] = mode(15935).getVoicePanelPIPBorderRadius(pIPState1.width, pIPState1.height);
    items[1] = obj;
    items[2] = _undefined.inAppElevationShadow;
    return items;
  }, items1);
  callback = safeArea.useCallback(() => {
    const Gesture = mode(5277).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(true);
    const manualActivationResult = Gesture.Pan().enabled(true).manualActivation(true);
    let result = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    const fn = function c(absoluteX) {
      const result = store.set({ x: 0, y: 0, absoluteX: absoluteX.absoluteX, absoluteY: absoluteX.absoluteY, active: false, pressed: true });
    };
    let obj = { initialGestureOffset: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 4684366251999;
    fn.__initData = outer1_28;
    const maxPointersResult = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1);
    const fn2 = function l() {
      outer1_1(outer1_3[18])(closure_14, { pressed: false });
    };
    obj = { updateSharedValueIfChanged: _undefined(10055), initialGestureOffset: sharedValue };
    fn2.__closure = obj;
    fn2.__workletHash = 17295075038028;
    fn2.__initData = outer1_27;
    const onBeginResult = result.onBegin(fn);
    const fn3 = function u(state, activate) {
      let absoluteX;
      let absoluteY;
      if (state.state === outer1_0(outer1_3[17]).State.BEGAN) {
        if (!store.get().active) {
          ({ absoluteY, absoluteX } = state.changedTouches[0]);
          const _Math = Math;
          let tmp4 = Math.abs(obj3.get().absoluteX - absoluteX) > 10;
          if (!tmp4) {
            const _Math2 = Math;
            tmp4 = Math.abs(obj3.get().absoluteY - absoluteY) > 10;
          }
          if (tmp4) {
            const obj = { x: 0, y: 0, absoluteX: null, absoluteY: null, pressed: true, active: true };
            obj[2] = absoluteX;
            obj[3] = absoluteY;
            const result = obj3.set(obj);
            outer1_1(tmp2[18])(closure_11, { gestureActive: true, x: 0, y: 0 });
            activate.activate();
            outer1_0(tmp2[15]).runOnJS(outer1_1(tmp2[19]))();
            const tmpResult = outer1_0(tmp2[15]);
          }
        }
      }
    };
    const onTouchesUpResult = result.onBegin(fn).onTouchesUp(fn2);
    fn3.__closure = { State: mode(5277).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: _undefined(10055), wrapperOffset, runOnJS: mode(4054).runOnJS, triggerIOSHaptic: _undefined(15942) };
    fn3.__workletHash = 16714994610987;
    fn3.__initData = outer1_26;
    const obj1 = { State: mode(5277).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: _undefined(10055), wrapperOffset, runOnJS: mode(4054).runOnJS, triggerIOSHaptic: _undefined(15942) };
    const fn4 = function o(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      const obj = { x: null, y: null };
      obj[0] = absoluteX - store.get().absoluteX;
      obj[1] = absoluteY - store.get().absoluteY;
      outer1_1(outer1_3[18])(store, obj);
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    fn4.__closure = { updateSharedValueIfChanged: _undefined(10055), initialGestureOffset: sharedValue };
    fn4.__workletHash = 7822444262980;
    fn4.__initData = outer1_25;
    const obj2 = { updateSharedValueIfChanged: _undefined(10055), initialGestureOffset: sharedValue };
    const fn5 = function s(arg0) {
      let absoluteX;
      let absoluteY;
      let pipX;
      let pipY;
      let velocityX;
      let velocityY;
      ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
      let obj = outer1_0(outer1_3[16]);
      obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: withEqualityFn.get(), safeArea: closure_5.get() };
      const result = obj.calculatePIPPositionFromVelocity(obj);
      ({ pipX, pipY } = result);
      outer1_1(outer1_3[18])(closure_10, { pipX, pipY });
      outer1_1(outer1_3[18])(closure_11, { gestureActive: false });
      outer1_1(outer1_3[18])(closure_14, { active: false, pressed: false });
      outer1_0(outer1_3[15]).runOnJS(outer1_1(outer1_3[20]).updateSourceTrackingView)();
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    fn5.__closure = { calculatePIPPositionFromVelocity: mode(15935).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: _undefined(10055), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: mode(4054).runOnJS, updateSourceTrackingView: _undefined(10272).updateSourceTrackingView };
    fn5.__workletHash = 1502716164658;
    fn5.__initData = outer1_24;
    const obj3 = { calculatePIPPositionFromVelocity: mode(15935).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: _undefined(10055), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: mode(4054).runOnJS, updateSourceTrackingView: _undefined(10272).updateSourceTrackingView };
    const fn6 = function n() {
      outer1_1(outer1_3[18])(closure_14, { active: false, pressed: false });
    };
    const onEndResult = onChangeResult.onEnd(fn5);
    fn6.__closure = { updateSharedValueIfChanged: _undefined(10055), initialGestureOffset: sharedValue };
    fn6.__workletHash = 4606005866023;
    fn6.__initData = outer1_23;
    const obj4 = { updateSharedValueIfChanged: _undefined(10055), initialGestureOffset: sharedValue };
    const fn7 = function t() {
      outer1_1(outer1_3[18])(closure_14, { active: false, pressed: false });
    };
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn6);
    fn7.__closure = { updateSharedValueIfChanged: _undefined(10055), initialGestureOffset: sharedValue };
    fn7.__workletHash = 5443656412422;
    fn7.__initData = outer1_22;
    return onTouchesCancelledResult.onFinalize(fn7);
  }, items2);
  const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode2, callback];
  const memo1 = safeArea.useMemo(() => {
    const Gesture = mode(5277).Gesture;
    const Gesture2 = mode(5277).Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP);
    const fn = function s() {
      outer1_0(outer1_3[15]).runOnJS(closure_6)(null);
    };
    let obj = { runOnJS: mode(4054).runOnJS, setFocused };
    fn.__closure = obj;
    fn.__workletHash = 10703348418884;
    fn.__initData = outer1_29;
    const maxDistanceResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30);
    const onStartResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30).onStart(fn);
    const Gesture3 = mode(5277).Gesture;
    const numberOfTapsResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30).onStart(fn).numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const fn2 = function n() {
      if (closure_0 === outer1_13.IN_APP) {
        outer1_0(outer1_3[15]).runOnJS(participantFromServer)(outer1_11.PANEL);
        const obj3 = outer1_0(outer1_3[15]);
      } else if (closure_2.get().mode === outer1_12.HIDDEN) {
        outer1_0(outer1_3[15]).runOnJS(map)();
        const obj2 = outer1_0(outer1_3[15]);
      } else {
        outer1_0(outer1_3[15]).runOnJS(closure_3)();
        const obj = outer1_0(outer1_3[15]);
      }
    };
    obj = { pipMode: mode, VoicePanelPIPModes: pIPState1, runOnJS: mode(4054).runOnJS, setMode: setMode2, VoicePanelModes: wrapperOffset, controlsSpecs: first, VoicePanelControlsModes: channelId, showControls, hideControls: dependencyMap };
    fn2.__closure = obj;
    fn2.__workletHash = 9532493963151;
    fn2.__initData = outer1_30;
    const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
    return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(fn2), callback());
  }, items3);
  let obj9 = mode(589);
  const items4 = [setMode2, showControls];
  const stateFromStoresObject = obj9.useStateFromStoresObject(items4, () => {
    const currentEmbeddedActivity = setMode2.getCurrentEmbeddedActivity();
    let obj = mode(3811);
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
    obj = { currentEmbeddedActivityIsNotInCurrentChannel: embeddedActivityLocationChannelId !== channelId, hasFrame: null != showControls.getConnectedFrame() };
    return obj;
  });
  currentEmbeddedActivityIsNotInCurrentChannel = stateFromStoresObject.currentEmbeddedActivityIsNotInCurrentChannel;
  hasFrame = stateFromStoresObject.hasFrame;
  const items5 = [currentEmbeddedActivityIsNotInCurrentChannel, hasFrame, setMode2, setFocused];
  callback1 = safeArea.useCallback(() => {
    if (currentEmbeddedActivityIsNotInCurrentChannel) {
      setMode2(wrapperOffset.PIP);
      setFocused(null);
    }
    if (hasFrame) {
      _undefined(5698).updateFramePanelMode(sharedValue.PANEL);
      const obj2 = _undefined(5698);
    } else {
      const result = first(5701).updateActivityPanelMode(sharedValue.PANEL);
      const obj = first(5701);
    }
  }, items5);
  const items6 = [callback, callback1];
  const memo2 = safeArea.useMemo(() => {
    const Gesture = mode(5277).Gesture;
    const Gesture2 = mode(5277).Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function t() {
      outer1_0(outer1_3[15]).runOnJS(closure_19)();
    };
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    fn.__closure = { runOnJS: mode(4054).runOnJS, handleSecondaryPIPTap: callback1 };
    fn.__workletHash = 8361527940381;
    fn.__initData = outer1_31;
    const obj = { runOnJS: mode(4054).runOnJS, handleSecondaryPIPTap: callback1 };
    return Gesture.Exclusive(maxDistanceResult.onStart(fn), callback());
  }, items6);
  let pushToTalk = importDefault(8122)(context.controlsSpecs).pushToTalk;
  const tmp22 = stateFromStoresObject1(safeArea.useState(null != pIPState.mode), 2);
  first = tmp22[0];
  dependencyMap = tmp22[1];
  const items7 = [pIPState.mode, first];
  const effect1 = safeArea.useEffect(() => {
    if (!tmp) {
      dependencyMap(true);
    }
  }, items7);
  let tmp33Result = null != pIPState.mode || first;
  let tmp5Result = tmp5(589);
  const items8 = [showControls];
  stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items8, () => null != showControls.getConnectedFrame());
  tmp5Result = tmp5(4054);
  class Z {
    constructor() {
      obj = { borderRadius: null };
      obj2 = mode(useState[16]);
      obj[0] = obj2.getVoicePanelPIPBorderRadius(c1.width, c1.height);
      return obj;
    }
  }
  obj1 = { getVoicePanelPIPBorderRadius: tmp5(15935).getVoicePanelPIPBorderRadius, pipState: pIPState };
  Z.__closure = obj1;
  Z.__workletHash = 9598016909682;
  Z.__initData = closure_32;
  const animatedStyle2 = tmp5Result.useAnimatedStyle(Z);
  const items9 = [setMode];
  const memo3 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
    const intl = mode(1236).intl;
    obj[1] = intl.string(mode(1236).t.oN8bqe);
    const items = [{ name: "activate" }];
    obj[3] = items;
    obj[4] = function onAccessibilityAction() {
      callback(outer1_11.PANEL);
    };
    return obj;
  }, items9);
  const items10 = [stateFromStoresObject1];
  const memo4 = obj.useMemo(() => {
    let obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = mode(1236).intl;
    obj[1] = intl.string(mode(1236).t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj[2] = items;
    obj[3] = function onAccessibilityAction() {
      if (wrapChildrenDefault) {
        outer1_1(outer1_3[23]).updateFramePanelMode(outer1_14.PANEL);
        const obj2 = outer1_1(outer1_3[23]);
      } else {
        const result = outer1_2(outer1_3[24]).updateActivityPanelMode(outer1_14.PANEL);
        const obj = outer1_2(outer1_3[24]);
      }
    };
    return obj;
  }, items10);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== pIPState1.IN_PANEL || tmp30;
    const tmp32 = pIPState.mode !== pIPState1.IN_PANEL || tmp30;
  }
  obj2 = { pointerEvents: "box-none", style: items11, layout: hasFrame, children: null };
  items11 = [tmp.multiPIPContainer, animatedStyle];
  let tmp2Result = tmp2(7684);
  if (tmp33Result) {
    obj3 = { style: null, pointerEvents: "box-none", layout: null };
    const items12 = [, , ];
    ({ pipContentWrapper: arr13[0], inAppElevationShadow: arr13[1] } = tmp);
    items12[2] = animatedStyle1;
    obj3[0] = items12;
    obj3[2] = tmp35;
    tmp2Result = tmp2(7684);
    const merged = Object.assign(memo3);
    obj4 = { gesture: null, children: null };
    obj4[0] = memo1;
    obj5 = { style: null, layout: null, children: null };
    const items13 = [tmp.pipMask, animatedStyle2];
    obj5[0] = items13;
    obj5[1] = tmp35;
    obj5[2] = sharedValue1(tmp2(16009), {});
    obj4[1] = sharedValue1(tmp2(7684), obj5);
    const items14 = [sharedValue1(tmp5(5277).GestureDetector, obj4), ];
    let tmp40Result = null;
    if (pushToTalk) {
      tmp40Result = tmp40(tmp2(16010), {});
    }
    items14[1] = tmp40Result;
    obj3.children = items14;
    tmp33Result = tmp33(tmp2Result, obj3);
    const tmp2Result1 = tmp2(7684);
    tmp40 = sharedValue1;
  }
  const items15 = [tmp33Result, ];
  let showSecondaryPIP = pIPState.showSecondaryPIP;
  if (showSecondaryPIP) {
    const obj6 = { style: null };
    obj6[0] = memo;
    const merged1 = Object.assign(memo4);
    obj7 = { style: null, children: null };
    const items16 = [tmp.pipMask, animatedStyle2];
    obj7[0] = items16;
    const tmp2Result2 = tmp2(5572);
    const obj8 = { gesture: null, children: null };
    obj8[0] = memo2;
    obj9 = { style: null, children: null };
    obj9[0] = setFocused.absoluteFill;
    const tmp2Result3 = tmp2(7684);
    obj9[1] = sharedValue1(tmp2(16012), {});
    obj8[1] = sharedValue1(tmp2(5572), obj9);
    obj7[1] = sharedValue1(tmp5(5277).GestureDetector, obj8);
    obj6.children = sharedValue1(tmp2Result3, obj7);
    showSecondaryPIP = sharedValue1(tmp2Result2, obj6);
    const tmp2Result4 = tmp2(5572);
  }
  items15[1] = showSecondaryPIP;
  obj2[3] = items15;
  return callback(tmp2Result, obj2);
}
function renderPIPWrapper(arg0, pipMode, transitionState, transitionCleanUp) {
  return callback(closure_36, { pipMode: pipMode.pipMode, transitionState, transitionCleanUp }, arg0);
}
let c5 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ DRAWER_SPRING_PHYSICS: c10, VoicePanelModes: unpackModuleId, SECONDARY_PIP_TOP_MARGIN } = VoicePanelModes);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = { mass: 0.3, damping: 80, stiffness: 150 };
function layoutTransition(originX) {
  let obj = { animations: null, initialValues: null };
  obj = { originX: null, originY: null, width: null, height: null };
  obj[0] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetOriginX, obj);
  const obj3 = require(4603) /* CONFIG_NEVER_ANIMATE */;
  obj[1] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetOriginY, obj);
  const obj4 = require(4603) /* CONFIG_NEVER_ANIMATE */;
  obj[2] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetWidth, obj);
  const obj5 = require(4603) /* CONFIG_NEVER_ANIMATE */;
  obj[3] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetHeight, obj);
  obj[0] = obj;
  obj[1] = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
obj = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, LAYOUT_PHYSICS: obj };
layoutTransition.__closure = obj;
layoutTransition.__workletHash = 9346092352642;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelPIPTsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS),width:withSpring(values.targetWidth,LAYOUT_PHYSICS),height:withSpring(values.targetHeight,LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj1 = { pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: null, multiPIPContainer: null };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.overflow = "hidden";
obj1[2] = obj2;
obj1[3] = { position: "absolute", zIndex: 10, flexDirection: "column", alignItems: "center", gap: SECONDARY_PIP_TOP_MARGIN };
let closure_19 = createCacheKey.createStyles(obj1);
let closure_20 = { code: "function VoicePanelPIPTsx2(){const{pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,initialGestureOffset,opacity,withSpring,DRAWER_SPRING_PHYSICS,LAYOUT_PHYSICS,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width;const height=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:initialGestureOffset.get().active?initialGestureOffset.get():undefined});return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)},{translateY:withSpring(y,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_21 = { code: "function VoicePanelPIPTsx3(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height}=pipState;return{width:width,height:height,borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_22 = { code: "function VoicePanelPIPTsx4(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_23 = { code: "function VoicePanelPIPTsx5(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_24 = { code: "function VoicePanelPIPTsx6({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}){const{calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,initialGestureOffset,runOnJS,updateSourceTrackingView}=this.__closure;const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});runOnJS(updateSourceTrackingView)();}" };
let closure_25 = { code: "function VoicePanelPIPTsx7({absoluteX:absoluteX,absoluteY:absoluteY}){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{x:absoluteX-initialGestureOffset.get().absoluteX,y:absoluteY-initialGestureOffset.get().absoluteY});}" };
let closure_26 = { code: "function VoicePanelPIPTsx8(event,manager){const{State,initialGestureOffset,MIN_GESTURE_START,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];if(Math.abs(initialGestureOffset.get().absoluteX-absoluteX)>MIN_GESTURE_START||Math.abs(initialGestureOffset.get().absoluteY-absoluteY)>MIN_GESTURE_START){initialGestureOffset.set({x:0,y:0,absoluteX:absoluteX,absoluteY:absoluteY,pressed:true,active:true});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
let closure_27 = { code: "function VoicePanelPIPTsx9(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{pressed:false});}" };
let closure_28 = { code: "function VoicePanelPIPTsx10({absoluteX:absoluteX,absoluteY:absoluteY}){const{initialGestureOffset}=this.__closure;initialGestureOffset.set({x:0,y:0,absoluteX:absoluteX,absoluteY:absoluteY,active:false,pressed:true});}" };
let closure_29 = { code: "function VoicePanelPIPTsx11(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
let closure_30 = { code: "function VoicePanelPIPTsx12(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
let closure_31 = { code: "function VoicePanelPIPTsx13(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
let closure_32 = { code: "function VoicePanelPIPTsx14(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_34 = { code: "function VoicePanelPIPTsx15(){const{transitionState,TransitionStates,panelCardStillInPIP}=this.__closure;return transitionState===TransitionStates.YEETED&&!panelCardStillInPIP.get();}" };
let closure_35 = { code: "function VoicePanelPIPTsx16(ready,prev){const{runOnJS,fireCleanup}=this.__closure;if(ready&&prev!==ready){runOnJS(fireCleanup)();}}" };
let closure_36 = importAllResult.memo((transitionState) => {
  let c2;
  let tmp5;
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  c2 = undefined;
  let dependencyMap;
  let callback;
  let panelCardStillInPIP;
  let obj = panelCardStillInPIP;
  let tmp = transitionState.pipMode === VoicePanelPIPModes.IN_PANEL;
  if (!tmp) {
    tmp = transitionState === transitionState(4538).TransitionStates.MOUNTED;
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
    if (transitionState === transitionState(ref[32]).TransitionStates.YEETED) {
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
  panelCardStillInPIP = obj.useContext(transitionCleanUp(10050)).panelCardStillInPIP;
  const tmp4 = callback(panelCardStillInPIP.useState(tmp), 2);
  class I {
    constructor() {
      tmp = transitionState === transitionState(useRef[32]).TransitionStates.YEETED;
      if (tmp) {
        tmp2 = panelCardStillInPIP;
        tmp = !panelCardStillInPIP.get();
      }
      return tmp;
    }
  }
  obj = { transitionState, TransitionStates: transitionState(4538).TransitionStates, panelCardStillInPIP };
  I.__closure = obj;
  I.__workletHash = 10653972388666;
  I.__initData = closure_34;
  const fn = function f(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg1 !== arg0;
    }
    if (tmp) {
      transitionState(ref[15]).runOnJS(callback)();
      const obj = transitionState(ref[15]);
    }
  };
  obj = { runOnJS: transitionState(4054).runOnJS, fireCleanup: callback };
  fn.__closure = obj;
  fn.__workletHash = 1599147342710;
  fn.__initData = closure_35;
  const animatedReaction = transitionState(4054).useAnimatedReaction(I, fn);
  let tmp10 = null;
  if (tmp5) {
    tmp10 = callback(VoicePanelPIP, {});
  }
  return tmp10;
});
const memoResult = importAllResult.memo(function VoicePanelPIPWrapper() {
  let mode;
  let showSecondaryPIP;
  let obj = require(15940) /* context */;
  const pIPState = obj.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  if (null != mode) {
    obj = { pipMode: null };
    obj[0] = mode;
    const tmp3 = obj;
  }
  obj = { item: tmp3, renderItem: renderPIPWrapper };
  return closure_15(require(4538) /* wrapChildrenDefault */.TransitionItem, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default memoResult;