// discord_app/modules/voice_panel/native/pip/VoicePanelPIP.tsx
import util from "../../../../intl/index.native.tsx";
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import EmbeddedActivitiesActionCreatorsAll from "../../../activities/EmbeddedActivitiesActionCreators.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext.tsx";
import utils_triggerIOSHapticDefault from "../utils/triggerIOSHaptic.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import VoicePanelStore from "../../VoicePanelStore.tsx";

require = fn;
function VoicePanelPIP() {
  const tmp = handleSecondaryPIPTap();
  _require = tmp;
  let obj = stateFromStores2;
  const context = stateFromStores2.useContext(setMode(hideControls[13]));
  setMode = context.setMode;
  let obj1 = require("VoicePanelPIPStateContext");
  const pIPState = obj1.usePIPState();
  const mode = pIPState.mode;
  closure_129_0 = mode;
  closure_129_16 = undefined;
  closure_129_17 = undefined;
  closure_129_18 = undefined;
  const tmp7 = handleSecondaryPIPTap();
  closure_129_1 = tmp7;
  const context1 = stateFromStores2.useContext(setMode(hideControls[13]));
  const controlsSpecs = context1.controlsSpecs;
  closure_129_2 = controlsSpecs;
  hideControls = context1.hideControls;
  closure_129_3 = hideControls;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  closure_129_4 = pipAvoidanceSpecs;
  const safeArea = context1.safeArea;
  closure_129_5 = safeArea;
  const setFocused = context1.setFocused;
  closure_129_6 = setFocused;
  const setMode2 = context1.setMode;
  closure_129_7 = setMode2;
  const showControls = context1.showControls;
  closure_129_8 = showControls;
  const windowDimensions = context1.windowDimensions;
  closure_129_9 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_10 = wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  closure_129_11 = wrapperOffset;
  const channelId = context1.channelId;
  let obj2 = require("VoicePanelPIPStateContext");
  const pIPState1 = obj2.usePIPState();
  closure_129_13 = pIPState1;
  let obj3 = require("ReanimatedRexport");
  const sharedValue = obj3.useSharedValue({ x: 0, y: 0, absoluteX: 0, absoluteY: 0, active: false, pressed: false });
  closure_129_14 = sharedValue;
  let obj4 = require("ReanimatedRexport");
  const sharedValue1 = obj4.useSharedValue(0);
  closure_129_15 = sharedValue1;
  let items = [sharedValue1];
  const effect = stateFromStores2.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_1_15.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let obj5 = require("ReanimatedRexport");
  class U {
    constructor() {
      tmp = closure_1_13;
      width = closure_1_13.width;
      tmp2 = closure_1_13.showSecondaryPIP ? tmp.containerHeight : tmp.height;
      tmp3 = closure_0;
      tmp4 = closure_3;
      obj = closure_0(closure_3[16]);
      size = {
        pipX: closure_1_10.get().pipX,
        pipY: closure_1_10.get().pipY,
        width,
        height: tmp2,
        windowDimensions: closure_1_9.get(),
        safeArea: closure_5.get(),
        bottomAvoidanceRegion: closure_4.get().bottom,
        topAvoidanceRegion: closure_4.get().top,
        positionOffset: null,
      };
      obj3 = closure_1_14;
      value = undefined;
      if (closure_1_14.get().active) {
        value = obj3.get();
      }
      size.positionOffset = value;
      clampedPIPPosition = obj.getClampedPIPPosition(size);
      size1 = { width, height: tmp2, opacity: closure_1_15.get(), transform: null, borderRadius: null };
      ({ x, y } = clampedPIPPosition);
      tmp3Result = tmp3(tmp4[17]);
      if (obj3.get().active) {
        PIP_LAYOUT_PHYSICS = DRAWER_SPRING_PHYSICS;
      } else {
        PIP_LAYOUT_PHYSICS = tmp3(tmp4[16]).PIP_LAYOUT_PHYSICS;
      }
      obj = { translateX: tmp3Result.withSpring(x, PIP_LAYOUT_PHYSICS) };
      items = [,];
      items[0] = obj;
      tmp3Result1 = tmp3(tmp4[17]);
      if (obj3.get().active) {
        PIP_LAYOUT_PHYSICS2 = DRAWER_SPRING_PHYSICS;
      } else {
        PIP_LAYOUT_PHYSICS2 = tmp3(tmp4[16]).PIP_LAYOUT_PHYSICS;
      }
      obj1 = { translateY: tmp3Result1.withSpring(y, PIP_LAYOUT_PHYSICS2) };
      items[1] = obj1;
      size1.transform = items;
      tmp3Result2 = tmp3(tmp4[16]);
      size1.borderRadius = tmp3Result2.getVoicePanelPIPBorderRadius(width, tmp2);
      return size1;
    }
  }
  obj = {
    pipState: pIPState1,
    getClampedPIPPosition: require("VoicePanelPIPUtils").getClampedPIPPosition,
    wrapperDimensions,
    windowDimensions,
    safeArea,
    pipAvoidanceSpecs,
    initialGestureOffset: sharedValue,
    opacity: sharedValue1,
    withSpring: require("spring").withSpring,
    DRAWER_SPRING_PHYSICS,
    PIP_LAYOUT_PHYSICS: require("VoicePanelPIPUtils").PIP_LAYOUT_PHYSICS,
    getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius,
  };
  U.__closure = obj;
  U.__workletHash = 5482189022714;
  U.__initData = __initData;
  const animatedStyle = obj5.useAnimatedStyle(U);
  let obj7 = require("ReanimatedRexport");
  let fn = function j() {
    ({ width, height } = styles);
    const size = { width, height, borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) };
    return size;
  };
  obj = {
    pipState: pIPState1,
    getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius,
  };
  fn.__closure = obj;
  fn.__workletHash = 1914976453427;
  fn.__initData = __initData2;
  const items1 = [tmp7, ,];
  ({ width: arr2[1], height: arr2[2] } = pIPState1);
  const animatedStyle1 = obj7.useAnimatedStyle(fn);
  const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo = stateFromStores2.useMemo(() => {
    const items = [setMode.pipContentWrapper, ,];
    const size = {
      width: styles.width,
      height: styles.height,
      borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(styles.width, styles.height),
    };
    items[1] = size;
    items[2] = setMode.inAppElevationShadow;
    return items;
  }, items1);
  const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode2];
  const memo1 = stateFromStores2.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(true);
    let result = Gesture.Pan().enabled(true).manualActivation(true).shouldCancelWhenOutside(false);
    const fn = function l(allTouches) {
      let point = getTouchesCentroid(allTouches.allTouches);
      let obj = initialGestureOffset;
      const point2 = initialGestureOffset.get();
      if (point2.pressed) {
        obj = { absoluteX: point.x - point2.x, absoluteY: point.y - point2.y };
        setMode(first[19])(obj, obj);
      } else {
        point = { x: 0, y: 0, absoluteX: null, absoluteY: null, active: false, pressed: true };
        ({ x: obj2.absoluteX, y: obj2.absoluteY } = point);
        const result = obj.set(point);
      }
    };
    let obj = {
      getTouchesCentroid,
      initialGestureOffset,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
    };
    fn.__closure = obj;
    fn.__workletHash = 7998022656808;
    fn.__initData = __initData6;
    const manualActivationResult = Gesture.Pan().enabled(true).manualActivation(true);
    const fn2 = function u(allTouches) {
      allTouches = allTouches.allTouches;
      const found = allTouches.filter((item) => {
        allTouches = item;
        const changedTouches = allTouches.changedTouches;
        return !changedTouches.some((id) => id.id === item.id);
      });
      if (0 !== found.length) {
        const point = getTouchesCentroid(found);
        const point2 = initialGestureOffset.get();
        const obj = { absoluteX: point.x - point2.x, absoluteY: point.y - point2.y };
        setMode(first[19])(initialGestureOffset, obj);
      } else {
        setMode(first[19])(initialGestureOffset, { pressed: false });
      }
    };
    obj = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset, getTouchesCentroid };
    fn2.__closure = obj;
    fn2.__workletHash = 7791159270294;
    fn2.__initData = __initData5;
    const onTouchesDownResult = result.onTouchesDown(fn);
    const fn3 = function s(allTouches, activate) {
      let point = getTouchesCentroid(allTouches.allTouches);
      value = initialGestureOffset.get();
      if (value.active) {
        point = { x: null, y: null };
        point.x = point.x - value.absoluteX;
        point.y = point.y - value.absoluteY;
        setMode(first[19])(obj, point);
      } else {
        let tmp4 = allTouches.state === closure_0(first[18]).State.BEGAN;
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
          const point1 = { x: 0, y: 0, absoluteX: null, absoluteY: null, pressed: true, active: true };
          ({ x: obj2.absoluteX, y: obj2.absoluteY } = point);
          const result = obj.set(point1);
          setMode(tmp3[19])(wrapperOffset, { gestureActive: true, x: 0, y: 0 });
          activate.activate();
          tmp2(tmp3[15]).runOnJS(setMode(tmp3[20]))();
          const tmp2Result = tmp2(tmp3[15]);
        }
        tmp2 = closure_0;
      }
    };
    const onTouchesUpResult = result.onTouchesDown(fn).onTouchesUp(fn2);
    fn3.__closure = {
      getTouchesCentroid,
      initialGestureOffset,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      State: LegacyBaseButton.State,
      MIN_GESTURE_START: 10,
      wrapperOffset,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerIOSHaptic: utils_triggerIOSHapticDefault,
    };
    fn3.__workletHash = 3146633930679;
    fn3.__initData = __initData4;
    const obj1 = {
      getTouchesCentroid,
      initialGestureOffset,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      State: LegacyBaseButton.State,
      MIN_GESTURE_START: 10,
      wrapperOffset,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerIOSHaptic: utils_triggerIOSHapticDefault,
    };
    const fn4 = function o(arg0) {
      ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
      closure_0(first[16]);
      const obj = {
        velocityX,
        velocityY,
        absoluteX,
        absoluteY,
        windowDimensions: windowDimensions.get(),
        safeArea: stateFromStores2.get(),
      };
      const result = obj.calculatePIPPositionFromVelocity(obj);
      ({ pipX, pipY } = result);
      setMode(first[19])(wrapperDimensions, { pipX, pipY });
      setMode(first[19])(wrapperOffset, { gestureActive: false });
      setMode(first[19])(initialGestureOffset, { active: false, pressed: false });
      closure_0(first[15]).runOnJS(setMode(first[21]).updateSourceTrackingView)();
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    fn4.__closure = {
      calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity,
      windowDimensions,
      safeArea: stateFromStores2,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      wrapperDimensions,
      wrapperOffset,
      initialGestureOffset,
      runOnJS: ReanimatedRexport.runOnJS,
      updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView,
    };
    fn4.__workletHash = 1502716164658;
    fn4.__initData = __initData3;
    const obj2 = {
      calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity,
      windowDimensions,
      safeArea: stateFromStores2,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      wrapperDimensions,
      wrapperOffset,
      initialGestureOffset,
      runOnJS: ReanimatedRexport.runOnJS,
      updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView,
    };
    const fn5 = function n() {
      setMode(first[19])(initialGestureOffset, { active: false, pressed: false });
    };
    const onEndResult = onTouchesMoveResult.onEnd(fn4);
    fn5.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset };
    fn5.__workletHash = 4606005866023;
    fn5.__initData = __initData2;
    const obj3 = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset };
    const fn6 = function t() {
      setMode(first[19])(initialGestureOffset, { active: false, pressed: false });
    };
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    fn6.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset };
    fn6.__workletHash = 5443656412422;
    fn6.__initData = __initData;
    return onTouchesCancelledResult.onFinalize(fn6);
  }, items2);
  const memo2 = stateFromStores2.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(pipMode !== VoicePanelPIPModes.IN_APP);
    const fn = function o() {
      closure_0(first[15]).runOnJS(callback1)(null);
    };
    let obj = { runOnJS: ReanimatedRexport.runOnJS, setFocused: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 8701387318341;
    fn.__initData = __initData7;
    const maxDistanceResult = Gesture2.Tap()
      .enabled(pipMode !== VoicePanelPIPModes.IN_APP)
      .maxDistance(30);
    const onStartResult = Gesture2.Tap()
      .enabled(pipMode !== VoicePanelPIPModes.IN_APP)
      .maxDistance(30)
      .onStart(fn);
    const Gesture3 = LegacyBaseButton.Gesture;
    const numberOfTapsResult = Gesture2.Tap()
      .enabled(pipMode !== VoicePanelPIPModes.IN_APP)
      .maxDistance(30)
      .onStart(fn)
      .numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const fn2 = function n() {
      if (pipMode === styles.IN_APP) {
        closure_0(first[15]).runOnJS(setMode)(wrapperOffset.PANEL);
        const obj3 = closure_0(first[15]);
      } else if (pIPState.get().mode === constants.HIDDEN) {
        closure_0(first[15]).runOnJS(showControls)();
        const obj2 = closure_0(first[15]);
      } else {
        closure_0(first[15]).runOnJS(hideControls)();
        const obj = closure_0(first[15]);
      }
    };
    obj = {
      pipMode,
      VoicePanelPIPModes,
      runOnJS: ReanimatedRexport.runOnJS,
      setMode,
      VoicePanelModes,
      controlsSpecs: pIPState,
      VoicePanelControlsModes,
      showControls,
      hideControls,
    };
    fn2.__closure = obj;
    fn2.__workletHash = 7961153109772;
    fn2.__initData = __initData8;
    return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(fn2));
  }, items3);
  let obj9 = require("initialize");
  const items4 = [EmbeddedActivitiesStore];
  const stateFromStores = obj9.useStateFromStores(items4, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location) !== constants;
  });
  closure_129_16 = stateFromStores;
  let obj10 = require("initialize");
  const items5 = [FramesStore];
  const stateFromStores1 = obj10.useStateFromStores(items5, () => {
    const mainFrame = showControls.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  closure_129_17 = stateFromStores1;
  const items6 = [stateFromStores, stateFromStores1, setMode2, setFocused];
  const callback = stateFromStores2.useCallback(() => {
    if (closure_1_16) {
      setMode(VoicePanelModes.PIP);
      callback1(null);
    }
    if (null != closure_1_17) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp7, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items6);
  closure_129_18 = callback;
  const items7 = [callback];
  const memo3 = stateFromStores2.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const TapResult = Gesture.Tap();
    const fn = function t() {
      closure_0(first[15]).runOnJS(handleSecondaryPIPTap)();
    };
    const maxDistanceResult = Gesture.Tap().maxDistance(30);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleSecondaryPIPTap };
    fn.__workletHash = 13024299268124;
    fn.__initData = __initData9;
    return maxDistanceResult.onStart(fn);
  }, items7);
  let pushToTalk = setMode(hideControls[26])(context.controlsSpecs).pushToTalk;
  const tmp23 = closure_4(stateFromStores2.useState(null != pIPState.mode), 2);
  hideControls = tmp23[0];
  closure_4 = tmp23[1];
  const items8 = [pIPState.mode, hideControls];
  const effect1 = stateFromStores2.useEffect(() => {
    if (!tmp) {
      closure_4(true);
    }
  }, items8);
  let tmp5Result = tmp5(tmp3[15]);
  class Z {
    constructor() {
      obj = { borderRadius: null };
      obj2 = closure_0(closure_3[16]);
      obj.borderRadius = obj2.getVoicePanelPIPBorderRadius(closure_2.width, closure_2.height);
      return obj;
    }
  }
  obj1 = { getVoicePanelPIPBorderRadius: tmp5(tmp3[16]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  Z.__closure = obj1;
  Z.__workletHash = 15386699413749;
  Z.__initData = __initData3;
  const animatedStyle2 = tmp5Result.useAnimatedStyle(Z);
  const items9 = [setMode];
  const memo4 = obj.useMemo(() => {
    const obj = {
      accessible: true,
      accessibilityLabel: null,
      accessibilityRole: "button",
      accessibilityActions: null,
      onAccessibilityAction: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.oN8bqe);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      setMode(wrapperOffset.PANEL);
    };
    return obj;
  }, items9);
  tmp5Result = tmp5(tmp3[22]);
  const items10 = [FramesStore];
  stateFromStores2 = tmp5Result.useStateFromStores(items10, () => {
    const mainFrame = showControls.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items11 = [stateFromStores2];
  const callback1 = obj.useCallback(() => {
    if (null != stateFromStores2) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items11);
  const items12 = [callback1];
  const memo5 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = callback1;
    return obj;
  }, items12);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp32;
    const tmp34 = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp32;
  }
  const items13 = [tmp, pIPState.height];
  const memo6 = obj.useMemo(() => {
    const items = [pipMode.pushToTalkContainer, { height: pIPState.height }];
    return items;
  }, items13);
  obj2 = { pointerEvents: "box-none", style: null, layout: null, children: null };
  const items14 = [tmp.container, animatedStyle];
  obj2.style = items14;
  tmp2(tmp3[28]);
  obj2.layout = require("VoicePanelPIPUtils").layoutTransition;
  obj3 = { gesture: memo1, children: null };
  obj4 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: null, children: null };
  let tmp2Result = tmp2(tmp3[28]);
  obj4.layout = require("VoicePanelPIPUtils").layoutTransition;
  let tmp38Result = null;
  if (null != pIPState.mode || hideControls) {
    obj5 = { style: null, pointerEvents: "box-none", layout: null };
    const items15 = [, ,];
    ({ pipContentWrapper: arr16[0], inAppElevationShadow: arr16[1] } = tmp);
    items15[2] = animatedStyle1;
    obj5.style = items15;
    obj5.layout = tmp5(tmp3[16]).layoutTransition;
    const merged = Object.assign(memo4);
    const obj6 = { gesture: memo2, children: null };
    obj7 = { style: null, layout: null, children: null };
    const items16 = [tmp.pipMask, animatedStyle2];
    obj7.style = items16;
    const tmp2Result1 = tmp2(tmp3[28]);
    obj7.layout = tmp5(tmp3[16]).layoutTransition;
    obj7.children = tmp38(tmp2(tmp3[29]), {});
    obj6.children = tmp38(tmp2(tmp3[28]), obj7);
    obj5.children = tmp38(tmp5(tmp3[18]).GestureDetector, obj6);
    tmp38Result = tmp38(tmp2Result1, obj5);
    const tmp2Result2 = tmp2(tmp3[28]);
  }
  const items17 = [tmp38Result];
  tmp38Result = null;
  if (pIPState.showSecondaryPIP) {
    const obj8 = { style: memo };
    const merged1 = Object.assign(memo5);
    obj9 = { style: null, children: null };
    const items18 = [tmp.pipMask, animatedStyle2];
    obj9.style = items18;
    const tmp2Result3 = tmp2(tmp3[30]);
    obj10 = { gesture: memo3, children: null };
    const obj11 = { style: callback1.absoluteFill, children: null };
    const tmp2Result4 = tmp2(tmp3[28]);
    obj11.children = tmp38(tmp2(tmp3[31]), {});
    obj10.children = tmp38(tmp2(tmp3[30]), obj11);
    obj9.children = tmp38(tmp5(tmp3[18]).GestureDetector, obj10);
    obj8.children = tmp38(tmp2Result4, obj9);
    tmp38Result = tmp38(tmp2Result3, obj8);
    const tmp2Result5 = tmp2(tmp3[30]);
  }
  items17[1] = tmp38Result;
  obj4.children = items17;
  obj3.children = closure_17(tmp2Result, obj4);
  const items19 = [closure_16(require("LegacyBaseButton").GestureDetector, obj3)];
  let tmp38Result1 = null;
  if (null != pIPState.mode || hideControls) {
    tmp38Result1 = null;
    if (pushToTalk) {
      const obj12 = {
        pointerEvents: "box-none",
        style: memo6,
        layout: tmp5(tmp3[16]).layoutTransition,
        children: tmp38(tmp2(tmp3[32]), {}),
      };
      tmp38Result1 = tmp38(tmp2(tmp3[28]), obj12);
      const tmp2Result6 = tmp2(tmp3[28]);
    }
  }
  items19[1] = tmp38Result1;
  obj2.children = items19;
  return closure_17(tmp2Result, obj2);
}
function renderPIPWrapper(arg0, pipMode, transitionState, transitionCleanUp) {
  return value2(closure_35, { pipMode: pipMode.pipMode, transitionState, transitionCleanUp }, arg0);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(12273);
({ DRAWER_SPRING_PHYSICS: c10, VoicePanelModes: closure_11, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17088).VoicePanelPIPModes;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const isLaunched = fn(9511).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let obj = {
  container: { position: "absolute", zIndex: 10 },
  pipContentWrapper: { backgroundColor: "black" },
  inAppElevationShadow: {},
  pipMask: null,
  multiPipContainer: null,
  pushToTalkContainer: null,
};
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.overflow = "hidden";
obj.pipMask = obj;
const createStyles = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.flexDirection = "column";
createStyles.alignItems = "center";
createStyles.gap = SECONDARY_PIP_TOP_MARGIN;
obj.multiPipContainer = createStyles;
obj.pushToTalkContainer = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_18 = createStyles.createStyles(obj);
function getTouchesCentroid(arg0) {
  let num = 0;
  let num2 = 0;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    num = num + nextResult.absoluteX;
    num2 = num2 + nextResult.absoluteY;
    continue;
  }
  const point = { x: num / arg0.length, y: num2 / arg0.length };
  return point;
}
getTouchesCentroid.__closure = {};
getTouchesCentroid.__workletHash = 15663926518076;
getTouchesCentroid.__initData = {
  code: "function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};}",
};
const __initData = {
  code: "function VoicePanelPIPTsx2(){const{pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,initialGestureOffset,opacity,withSpring,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width;const height=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:initialGestureOffset.get().active?initialGestureOffset.get():undefined});return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS)},{translateY:withSpring(y,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}",
};
const __initData2 = {
  code: "function VoicePanelPIPTsx3(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height}=pipState;return{width:width,height:height,borderRadius:getVoicePanelPIPBorderRadius(width,height)};}",
};
let closure_22 = {
  code: "function VoicePanelPIPTsx4(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}",
};
let closure_23 = {
  code: "function VoicePanelPIPTsx5(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}",
};
let closure_24 = {
  code: "function VoicePanelPIPTsx6({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}){const{calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,initialGestureOffset,runOnJS,updateSourceTrackingView}=this.__closure;const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});runOnJS(updateSourceTrackingView)();}",
};
let closure_25 = {
  code: "function VoicePanelPIPTsx7(event,manager){const{getTouchesCentroid,initialGestureOffset,updateSharedValueIfChanged,State,MIN_GESTURE_START,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const offset=initialGestureOffset.get();if(offset.active){updateSharedValueIfChanged(initialGestureOffset,{x:centroid.x-offset.absoluteX,y:centroid.y-offset.absoluteY});return;}if(event.state!==State.BEGAN)return;if(Math.abs(offset.absoluteX-centroid.x)>MIN_GESTURE_START||Math.abs(offset.absoluteY-centroid.y)>MIN_GESTURE_START){initialGestureOffset.set({x:0,y:0,absoluteX:centroid.x,absoluteY:centroid.y,pressed:true,active:true});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}",
};
let closure_26 = {
  code: "function VoicePanelPIPTsx8(event){const{updateSharedValueIfChanged,initialGestureOffset,getTouchesCentroid}=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(initialGestureOffset,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);const offset=initialGestureOffset.get();updateSharedValueIfChanged(initialGestureOffset,{absoluteX:centroid.x-offset.x,absoluteY:centroid.y-offset.y});}",
};
let closure_27 = {
  code: "function VoicePanelPIPTsx9(event){const{getTouchesCentroid,initialGestureOffset,updateSharedValueIfChanged}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const offset=initialGestureOffset.get();if(!offset.pressed){initialGestureOffset.set({x:0,y:0,absoluteX:centroid.x,absoluteY:centroid.y,active:false,pressed:true});return;}updateSharedValueIfChanged(initialGestureOffset,{absoluteX:centroid.x-offset.x,absoluteY:centroid.y-offset.y});}",
};
let closure_28 = {
  code: "function VoicePanelPIPTsx10(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}",
};
let closure_29 = {
  code: "function VoicePanelPIPTsx11(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}",
};
let closure_30 = {
  code: "function VoicePanelPIPTsx12(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}",
};
const __initData3 = {
  code: "function VoicePanelPIPTsx13(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}",
};
const __initData4 = {
  code: "function VoicePanelPIPTsx14(){const{transitionState,TransitionStates,panelCardStillInPIP}=this.__closure;return transitionState===TransitionStates.YEETED&&!panelCardStillInPIP.get();}",
};
const __initData5 = {
  code: "function VoicePanelPIPTsx15(ready,prev){const{runOnJS,fireCleanup}=this.__closure;if(ready&&prev!==ready){runOnJS(fireCleanup)();}}",
};
let closure_35 = noop.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  c2 = undefined;
  dependencyMap = undefined;
  let fireCleanup;
  let panelCardStillInPIP;
  let obj = panelCardStillInPIP;
  let tmp = transitionState.pipMode === VoicePanelPIPModes.IN_PANEL;
  if (!tmp) {
    tmp = transitionState === transitionState(4271).TransitionStates.MOUNTED;
  }
  [tmp5, c2] = fireCleanup(panelCardStillInPIP.useState(tmp), 2);
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => closure_1_2(true), 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  dependencyMap = obj.useRef(null);
  const items = [transitionCleanUp];
  fireCleanup = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    transitionCleanUp();
  }, items);
  const items1 = [transitionState, fireCleanup];
  const effect1 = obj.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
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
  panelCardStillInPIP = obj.useContext(transitionCleanUp(12272)).panelCardStillInPIP;
  const tmp4 = fireCleanup(panelCardStillInPIP.useState(tmp), 2);
  class I {
    constructor() {
      tmp = transitionState === closure_0(closure_3[33]).TransitionStates.YEETED;
      if (tmp) {
        tmp2 = panelCardStillInPIP;
        tmp = !panelCardStillInPIP.get();
      }
      return tmp;
    }
  }
  obj = { transitionState, TransitionStates: transitionState(4271).TransitionStates, panelCardStillInPIP };
  I.__closure = obj;
  I.__workletHash = 3025452431419;
  I.__initData = __initData4;
  class S {
    constructor(arg0, arg1) {
      tmp = transitionState;
      if (transitionState) {
        tmp2 = arg1;
        tmp = arg1 !== transitionState;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_3;
        obj = closure_0(closure_3[15]);
        tmp5 = closure_4;
        tmp6 = obj.runOnJS(closure_4)();
      }
      return;
    }
  }
  obj = { runOnJS: transitionState(4296).runOnJS, fireCleanup };
  S.__closure = obj;
  S.__workletHash = 5494714290933;
  S.__initData = __initData5;
  const animatedReaction = transitionState(4296).useAnimatedReaction(I, S);
  let tmp10 = null;
  if (tmp5) {
    tmp10 = closure_16(VoicePanelPIP, {});
  }
  return tmp10;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default noop.memo(function VoicePanelPIPWrapper() {
  let obj = VoicePanelPIPStateContext;
  const pIPState = obj.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  if (null != mode) {
    obj = { pipMode: mode };
    const tmp3 = obj;
  }
  obj = { item: tmp3, renderItem: renderPIPWrapper };
  return value2(native.TransitionItem, obj);
});
