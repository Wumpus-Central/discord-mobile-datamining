// discord_app/modules/voice_panel/native/pip/VoicePanelPIP.tsx
import VoicePanelSecondaryPIPContent from "VoicePanelSecondaryPIPContent";
import importAllResult from "u";
import get_ActivityIndicator from "PIPReferenceDimensions";
import participantFromServer from "participantFromServer";
import map from "map";
import withEqualityFn from "withEqualityFn";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { isLaunched } from "FrameLayoutModes";
import jsxProd from "NativeEventEmitter";
import createCacheKey from "createCacheKey";
import { CONFIG_NEVER_ANIMATE } from "../../../../design/animation/reanimated/spring/spring.tsx";
import { wrapChildrenDefault } from "../../../../design/components/TransitionGroup/TransitionGroup.tsx";
import { map } from "../../../reanimated/native/useStateFromSharedValue.tsx";
import { dismissPanel } from "../VoicePanelStateContext.tsx";
import { context } from "VoicePanelPIPStateContext.tsx";

let SECONDARY_PIP_TOP_MARGIN;
let c10;
let closure_16;
let closure_17;
let unpackModuleId;
const require = arg1;
function VoicePanelPIP() {
  const tmp = callback2();
  let obj = callback2;
  const context = callback2.useContext(dismissPanel);
  const setMode = context.setMode;
  let mode = setMode;
  let obj1 = mode(16243);
  const pIPState = obj1.usePIPState();
  importDefault = pIPState;
  mode = pIPState.mode;
  importDefault = undefined;
  let first;
  let dependencyMap;
  let stateFromStores2;
  callback2 = undefined;
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
  let stateFromStores;
  let stateFromStores1;
  let callback1;
  const tmp7 = callback2();
  importDefault = tmp7;
  const context1 = callback2.useContext(dismissPanel);
  const controlsSpecs = context1.controlsSpecs;
  first = controlsSpecs;
  const hideControls = context1.hideControls;
  dependencyMap = hideControls;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  stateFromStores2 = pipAvoidanceSpecs;
  const safeArea = context1.safeArea;
  callback2 = safeArea;
  setFocused = context1.setFocused;
  setMode2 = context1.setMode;
  showControls = context1.showControls;
  windowDimensions = context1.windowDimensions;
  wrapperDimensions = context1.wrapperDimensions;
  wrapperOffset = context1.wrapperOffset;
  channelId = context1.channelId;
  let obj2 = mode(16243);
  pIPState1 = obj2.usePIPState();
  let obj3 = mode(4083);
  sharedValue = obj3.useSharedValue({ x: 0, y: 0, absoluteX: 0, absoluteY: 0, active: false, pressed: false });
  let obj4 = mode(4083);
  sharedValue1 = obj4.useSharedValue(0);
  let items = [sharedValue1];
  const effect = callback2.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_15.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let obj5 = mode(4083);
  let fn = function j() {
    let x;
    let y;
    const width = pIPState1.width;
    const tmp2 = pIPState1.showSecondaryPIP ? pIPState1.containerHeight : pIPState1.height;
    let obj = mode(16238);
    obj = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width, height: tmp2, windowDimensions: windowDimensions.get(), safeArea: callback2.get(), bottomAvoidanceRegion: stateFromStores2.get().bottom, topAvoidanceRegion: stateFromStores2.get().top, positionOffset: null };
    let obj2 = sharedValue;
    let value;
    if (sharedValue.get().active) {
      value = obj2.get();
    }
    obj[8] = value;
    const clampedPIPPosition = obj.getClampedPIPPosition(obj);
    obj = { width, height: tmp2, opacity: sharedValue1.get(), transform: null, borderRadius: null };
    ({ x, y } = clampedPIPPosition);
    let tmp3Result = tmp3(4754);
    const items = [{ translateX: tmp3Result.withSpring(x, obj2.get().active ? wrapperDimensions : stateFromStores1) }, ];
    tmp3Result = tmp3(4754);
    obj2 = { translateY: tmp3Result.withSpring(y, obj2.get().active ? wrapperDimensions : stateFromStores1) };
    items[1] = obj2;
    obj[3] = items;
    const obj1 = { translateX: tmp3Result.withSpring(x, obj2.get().active ? wrapperDimensions : stateFromStores1) };
    obj[4] = mode(16238).getVoicePanelPIPBorderRadius(width, tmp2);
    return obj;
  };
  obj = { pipState: pIPState1, getClampedPIPPosition: mode(16238).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, initialGestureOffset: sharedValue, opacity: sharedValue1, withSpring: mode(4754).withSpring, DRAWER_SPRING_PHYSICS: wrapperDimensions, LAYOUT_PHYSICS: stateFromStores1, getVoicePanelPIPBorderRadius: mode(16238).getVoicePanelPIPBorderRadius };
  fn.__closure = obj;
  fn.__workletHash = 6729444248940;
  fn.__initData = closure_21;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj7 = mode(4083);
  let fn2 = function z() {
    let height;
    let width;
    ({ width, height } = pIPState1);
    const obj = { width, height, borderRadius: null };
    obj[2] = mode(16238).getVoicePanelPIPBorderRadius(width, height);
    return obj;
  };
  obj = { pipState: pIPState1, getVoicePanelPIPBorderRadius: mode(16238).getVoicePanelPIPBorderRadius };
  fn2.__closure = obj;
  fn2.__workletHash = 1914976453427;
  fn2.__initData = closure_22;
  const items1 = [tmp7, , ];
  ({ width: arr2[1], height: arr2[2] } = pIPState1);
  const animatedStyle1 = obj7.useAnimatedStyle(fn2);
  const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo = callback2.useMemo(() => {
    const items = [_undefined.pipContentWrapper, , ];
    const obj = { width: pIPState1.width, height: pIPState1.height, borderRadius: null };
    obj[2] = mode(16238).getVoicePanelPIPBorderRadius(pIPState1.width, pIPState1.height);
    items[1] = obj;
    items[2] = _undefined.inAppElevationShadow;
    return items;
  }, items1);
  callback = callback2.useCallback(() => {
    const Gesture = mode(5467).Gesture;
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
    fn.__initData = outer1_29;
    const maxPointersResult = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1);
    const fn2 = function l() {
      outer1_1(outer1_3[19])(closure_14, { pressed: false });
    };
    obj = { updateSharedValueIfChanged: _undefined(10289), initialGestureOffset: sharedValue };
    fn2.__closure = obj;
    fn2.__workletHash = 17295075038028;
    fn2.__initData = outer1_28;
    const onBeginResult = result.onBegin(fn);
    const fn3 = function u(state, activate) {
      let absoluteX;
      let absoluteY;
      if (state.state === outer1_0(outer1_3[18]).State.BEGAN) {
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
            outer1_1(tmp2[19])(closure_11, { gestureActive: true, x: 0, y: 0 });
            activate.activate();
            outer1_0(tmp2[16]).runOnJS(outer1_1(tmp2[20]))();
            const tmpResult = outer1_0(tmp2[16]);
          }
        }
      }
    };
    const onTouchesUpResult = result.onBegin(fn).onTouchesUp(fn2);
    fn3.__closure = { State: mode(5467).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: _undefined(10289), wrapperOffset, runOnJS: mode(4083).runOnJS, triggerIOSHaptic: _undefined(16245) };
    fn3.__workletHash = 16714994610987;
    fn3.__initData = outer1_27;
    const obj1 = { State: mode(5467).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: _undefined(10289), wrapperOffset, runOnJS: mode(4083).runOnJS, triggerIOSHaptic: _undefined(16245) };
    const fn4 = function o(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      const obj = { x: null, y: null };
      obj[0] = absoluteX - store.get().absoluteX;
      obj[1] = absoluteY - store.get().absoluteY;
      outer1_1(outer1_3[19])(store, obj);
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    fn4.__closure = { updateSharedValueIfChanged: _undefined(10289), initialGestureOffset: sharedValue };
    fn4.__workletHash = 7822444262980;
    fn4.__initData = outer1_26;
    const obj2 = { updateSharedValueIfChanged: _undefined(10289), initialGestureOffset: sharedValue };
    const fn5 = function s(arg0) {
      let absoluteX;
      let absoluteY;
      let pipX;
      let pipY;
      let velocityX;
      let velocityY;
      ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
      let obj = outer1_0(outer1_3[17]);
      obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: withEqualityFn.get(), safeArea: closure_5.get() };
      const result = obj.calculatePIPPositionFromVelocity(obj);
      ({ pipX, pipY } = result);
      outer1_1(outer1_3[19])(closure_10, { pipX, pipY });
      outer1_1(outer1_3[19])(closure_11, { gestureActive: false });
      outer1_1(outer1_3[19])(closure_14, { active: false, pressed: false });
      outer1_0(outer1_3[16]).runOnJS(outer1_1(outer1_3[21]).updateSourceTrackingView)();
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    fn5.__closure = { calculatePIPPositionFromVelocity: mode(16238).calculatePIPPositionFromVelocity, windowDimensions, safeArea: callback2, updateSharedValueIfChanged: _undefined(10289), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: mode(4083).runOnJS, updateSourceTrackingView: _undefined(9816).updateSourceTrackingView };
    fn5.__workletHash = 1502716164658;
    fn5.__initData = outer1_25;
    const obj3 = { calculatePIPPositionFromVelocity: mode(16238).calculatePIPPositionFromVelocity, windowDimensions, safeArea: callback2, updateSharedValueIfChanged: _undefined(10289), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: mode(4083).runOnJS, updateSourceTrackingView: _undefined(9816).updateSourceTrackingView };
    const fn6 = function n() {
      outer1_1(outer1_3[19])(closure_14, { active: false, pressed: false });
    };
    const onEndResult = onChangeResult.onEnd(fn5);
    fn6.__closure = { updateSharedValueIfChanged: _undefined(10289), initialGestureOffset: sharedValue };
    fn6.__workletHash = 4606005866023;
    fn6.__initData = outer1_24;
    const obj4 = { updateSharedValueIfChanged: _undefined(10289), initialGestureOffset: sharedValue };
    const fn7 = function t() {
      outer1_1(outer1_3[19])(closure_14, { active: false, pressed: false });
    };
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn6);
    fn7.__closure = { updateSharedValueIfChanged: _undefined(10289), initialGestureOffset: sharedValue };
    fn7.__workletHash = 5443656412422;
    fn7.__initData = outer1_23;
    return onTouchesCancelledResult.onFinalize(fn7);
  }, items2);
  const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode2, callback];
  const memo1 = callback2.useMemo(() => {
    const Gesture = mode(5467).Gesture;
    const Gesture2 = mode(5467).Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP);
    const fn = function s() {
      outer1_0(outer1_3[16]).runOnJS(closure_6)(null);
    };
    let obj = { runOnJS: mode(4083).runOnJS, setFocused };
    fn.__closure = obj;
    fn.__workletHash = 10703348418884;
    fn.__initData = outer1_30;
    const maxDistanceResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30);
    const onStartResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30).onStart(fn);
    const Gesture3 = mode(5467).Gesture;
    const numberOfTapsResult = Gesture2.Tap().enabled(mode !== pIPState1.IN_APP).maxDistance(30).onStart(fn).numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const fn2 = function n() {
      if (closure_0 === outer1_13.IN_APP) {
        outer1_0(outer1_3[16]).runOnJS(participantFromServer)(outer1_11.PANEL);
        const obj3 = outer1_0(outer1_3[16]);
      } else if (closure_2.get().mode === outer1_12.HIDDEN) {
        outer1_0(outer1_3[16]).runOnJS(map)();
        const obj2 = outer1_0(outer1_3[16]);
      } else {
        outer1_0(outer1_3[16]).runOnJS(closure_3)();
        const obj = outer1_0(outer1_3[16]);
      }
    };
    obj = { pipMode: mode, VoicePanelPIPModes: pIPState1, runOnJS: mode(4083).runOnJS, setMode: setMode2, VoicePanelModes: wrapperOffset, controlsSpecs: first, VoicePanelControlsModes: channelId, showControls, hideControls: dependencyMap };
    fn2.__closure = obj;
    fn2.__workletHash = 9532493963151;
    fn2.__initData = outer1_31;
    const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
    return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(fn2), callback());
  }, items3);
  let obj9 = mode(589);
  const items4 = [setMode2];
  stateFromStores = obj9.useStateFromStores(items4, () => {
    const currentEmbeddedActivity = setMode2.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return mode(3979).getEmbeddedActivityLocationChannelId(_location) !== channelId;
  });
  const items5 = [showControls];
  stateFromStores1 = mode(589).useStateFromStores(items5, () => {
    const mainFrame = showControls.getMainFrame();
    let id = null;
    if (sharedValue1(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items6 = [stateFromStores, stateFromStores1, setMode2, setFocused];
  callback1 = callback2.useCallback(() => {
    if (stateFromStores) {
      setMode2(wrapperOffset.PIP);
      setFocused(null);
    }
    if (null != stateFromStores1) {
      _undefined(10570).updateFramePanelMode(tmp7, sharedValue.PANEL);
      const obj2 = _undefined(10570);
    } else {
      const result = first(10588).updateActivityPanelMode(sharedValue.PANEL);
      const obj = first(10588);
    }
  }, items6);
  const items7 = [callback, callback1];
  const memo2 = callback2.useMemo(() => {
    const Gesture = mode(5467).Gesture;
    const Gesture2 = mode(5467).Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function t() {
      outer1_0(outer1_3[16]).runOnJS(closure_19)();
    };
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    fn.__closure = { runOnJS: mode(4083).runOnJS, handleSecondaryPIPTap: callback1 };
    fn.__workletHash = 8361527940381;
    fn.__initData = outer1_32;
    const obj = { runOnJS: mode(4083).runOnJS, handleSecondaryPIPTap: callback1 };
    return Gesture.Exclusive(maxDistanceResult.onStart(fn), callback());
  }, items7);
  let pushToTalk = map(context.controlsSpecs).pushToTalk;
  const tmp23 = stateFromStores2(callback2.useState(null != pIPState.mode), 2);
  first = tmp23[0];
  dependencyMap = tmp23[1];
  const items8 = [pIPState.mode, first];
  const effect1 = callback2.useEffect(() => {
    if (!tmp) {
      dependencyMap(true);
    }
  }, items8);
  let tmp35Result = null != pIPState.mode || first;
  let tmp5Result = tmp5(4083);
  let fn3 = function $() {
    const obj = { borderRadius: null };
    obj[0] = mode(16238).getVoicePanelPIPBorderRadius(_undefined.width, _undefined.height);
    return obj;
  };
  obj1 = { getVoicePanelPIPBorderRadius: tmp5(16238).getVoicePanelPIPBorderRadius, pipState: pIPState };
  fn3.__closure = obj1;
  fn3.__workletHash = 9598016909682;
  fn3.__initData = closure_33;
  const animatedStyle2 = tmp5Result.useAnimatedStyle(fn3);
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
  tmp5Result = tmp5(589);
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
  callback2 = obj.useCallback(() => {
    if (null != stateFromStores2) {
      _undefined(10570).updateFramePanelMode(tmp, sharedValue.PANEL);
      const obj2 = _undefined(10570);
    } else {
      const result = first(10588).updateActivityPanelMode(sharedValue.PANEL);
      const obj = first(10588);
    }
  }, items11);
  const items12 = [callback2];
  const memo4 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = mode(1236).intl;
    obj[1] = intl.string(mode(1236).t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj[2] = items;
    obj[3] = callback2;
    return obj;
  }, items12);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== pIPState1.IN_PANEL || tmp32;
    const tmp34 = pIPState.mode !== pIPState1.IN_PANEL || tmp32;
  }
  obj2 = { pointerEvents: "box-none", style: items13, layout: callback1, children: null };
  items13 = [tmp.multiPIPContainer, animatedStyle];
  let tmp2Result = tmp2(8054);
  if (tmp35Result) {
    obj3 = { style: null, pointerEvents: "box-none", layout: null };
    const items14 = [, , ];
    ({ pipContentWrapper: arr15[0], inAppElevationShadow: arr15[1] } = tmp);
    items14[2] = animatedStyle1;
    obj3[0] = items14;
    obj3[2] = tmp37;
    tmp2Result = tmp2(8054);
    const merged = Object.assign(memo3);
    obj4 = { gesture: null, children: null };
    obj4[0] = memo1;
    obj5 = { style: null, layout: null, children: null };
    const items15 = [tmp.pipMask, animatedStyle2];
    obj5[0] = items15;
    obj5[1] = tmp37;
    obj5[2] = callback(tmp2(16311), {});
    obj4[1] = callback(tmp2(8054), obj5);
    const items16 = [callback(tmp5(5467).GestureDetector, obj4), ];
    let tmp42Result = null;
    if (pushToTalk) {
      tmp42Result = tmp42(tmp2(16312), {});
    }
    items16[1] = tmp42Result;
    obj3.children = items16;
    tmp35Result = tmp35(tmp2Result, obj3);
    const tmp2Result1 = tmp2(8054);
    tmp42 = callback;
  }
  const items17 = [tmp35Result, ];
  let showSecondaryPIP = pIPState.showSecondaryPIP;
  if (showSecondaryPIP) {
    const obj6 = { style: null };
    obj6[0] = memo;
    const merged1 = Object.assign(memo4);
    obj7 = { style: null, children: null };
    const items18 = [tmp.pipMask, animatedStyle2];
    obj7[0] = items18;
    const tmp2Result2 = tmp2(5821);
    const obj8 = { gesture: null, children: null };
    obj8[0] = memo2;
    obj9 = { style: null, children: null };
    obj9[0] = setFocused.absoluteFill;
    const tmp2Result3 = tmp2(8054);
    obj9[1] = callback(tmp2(16314), {});
    obj8[1] = callback(tmp2(5821), obj9);
    obj7[1] = callback(tmp5(5467).GestureDetector, obj8);
    obj6.children = callback(tmp2Result3, obj7);
    showSecondaryPIP = callback(tmp2Result2, obj6);
    const tmp2Result4 = tmp2(5821);
  }
  items17[1] = showSecondaryPIP;
  obj2[3] = items17;
  return stateFromStores(tmp2Result, obj2);
}
function renderPIPWrapper(arg0, pipMode, transitionState, transitionCleanUp) {
  return callback(closure_37, { pipMode: pipMode.pipMode, transitionState, transitionCleanUp }, arg0);
}
let c5 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ DRAWER_SPRING_PHYSICS: c10, VoicePanelModes: unpackModuleId, SECONDARY_PIP_TOP_MARGIN } = VoicePanelModes);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let obj = { mass: 0.3, damping: 80, stiffness: 150 };
function layoutTransition(originX) {
  let obj = { animations: null, initialValues: null };
  obj = { originX: null, originY: null, width: null, height: null };
  obj[0] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetOriginX, obj);
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
let obj1 = { pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: null, multiPIPContainer: null };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.overflow = "hidden";
obj1[2] = obj2;
obj1[3] = { position: "absolute", zIndex: 10, flexDirection: "column", alignItems: "center", gap: SECONDARY_PIP_TOP_MARGIN };
let closure_20 = createCacheKey.createStyles(obj1);
let closure_21 = { code: "function VoicePanelPIPTsx2(){const{pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,initialGestureOffset,opacity,withSpring,DRAWER_SPRING_PHYSICS,LAYOUT_PHYSICS,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width;const height=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:initialGestureOffset.get().active?initialGestureOffset.get():undefined});return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)},{translateY:withSpring(y,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_22 = { code: "function VoicePanelPIPTsx3(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height}=pipState;return{width:width,height:height,borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_23 = { code: "function VoicePanelPIPTsx4(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_24 = { code: "function VoicePanelPIPTsx5(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_25 = { code: "function VoicePanelPIPTsx6({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}){const{calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,initialGestureOffset,runOnJS,updateSourceTrackingView}=this.__closure;const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});runOnJS(updateSourceTrackingView)();}" };
let closure_26 = { code: "function VoicePanelPIPTsx7({absoluteX:absoluteX,absoluteY:absoluteY}){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{x:absoluteX-initialGestureOffset.get().absoluteX,y:absoluteY-initialGestureOffset.get().absoluteY});}" };
let closure_27 = { code: "function VoicePanelPIPTsx8(event,manager){const{State,initialGestureOffset,MIN_GESTURE_START,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];if(Math.abs(initialGestureOffset.get().absoluteX-absoluteX)>MIN_GESTURE_START||Math.abs(initialGestureOffset.get().absoluteY-absoluteY)>MIN_GESTURE_START){initialGestureOffset.set({x:0,y:0,absoluteX:absoluteX,absoluteY:absoluteY,pressed:true,active:true});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
let closure_28 = { code: "function VoicePanelPIPTsx9(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{pressed:false});}" };
let closure_29 = { code: "function VoicePanelPIPTsx10({absoluteX:absoluteX,absoluteY:absoluteY}){const{initialGestureOffset}=this.__closure;initialGestureOffset.set({x:0,y:0,absoluteX:absoluteX,absoluteY:absoluteY,active:false,pressed:true});}" };
let closure_30 = { code: "function VoicePanelPIPTsx11(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
let closure_31 = { code: "function VoicePanelPIPTsx12(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
let closure_32 = { code: "function VoicePanelPIPTsx13(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
let closure_33 = { code: "function VoicePanelPIPTsx14(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_35 = { code: "function VoicePanelPIPTsx15(){const{transitionState,TransitionStates,panelCardStillInPIP}=this.__closure;return transitionState===TransitionStates.YEETED&&!panelCardStillInPIP.get();}" };
let closure_36 = { code: "function VoicePanelPIPTsx16(ready,prev){const{runOnJS,fireCleanup}=this.__closure;if(ready&&prev!==ready){runOnJS(fireCleanup)();}}" };
let closure_37 = importAllResult.memo((transitionState) => {
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
    tmp = transitionState === transitionState(4689).TransitionStates.MOUNTED;
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
  panelCardStillInPIP = obj.useContext(transitionCleanUp(11704)).panelCardStillInPIP;
  const tmp4 = callback(panelCardStillInPIP.useState(tmp), 2);
  class I {
    constructor() {
      tmp = transitionState === transitionState(useRef[33]).TransitionStates.YEETED;
      if (tmp) {
        tmp2 = panelCardStillInPIP;
        tmp = !panelCardStillInPIP.get();
      }
      return tmp;
    }
  }
  obj = { transitionState, TransitionStates: transitionState(4689).TransitionStates, panelCardStillInPIP };
  I.__closure = obj;
  I.__workletHash = 10653972388666;
  I.__initData = closure_35;
  const fn = function f(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg1 !== arg0;
    }
    if (tmp) {
      transitionState(ref[16]).runOnJS(callback)();
      const obj = transitionState(ref[16]);
    }
  };
  obj = { runOnJS: transitionState(4083).runOnJS, fireCleanup: callback };
  fn.__closure = obj;
  fn.__workletHash = 1599147342710;
  fn.__initData = closure_36;
  const animatedReaction = transitionState(4083).useAnimatedReaction(I, fn);
  let tmp10 = null;
  if (tmp5) {
    tmp10 = callback(VoicePanelPIP, {});
  }
  return tmp10;
});
const memoResult = importAllResult.memo(function VoicePanelPIPWrapper() {
  let mode;
  let showSecondaryPIP;
  let obj = context;
  const pIPState = obj.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  if (null != mode) {
    obj = { pipMode: null };
    obj[0] = mode;
    const tmp3 = obj;
  }
  obj = { item: tmp3, renderItem: renderPIPWrapper };
  return closure_16(wrapChildrenDefault.TransitionItem, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default memoResult;