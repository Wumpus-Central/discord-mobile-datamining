// discord_app/modules/voice_panel/native/pip/VoicePanelPIP.tsx
import util from "../../../../intl/index.native.tsx";
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06763_LegacyBaseButton.js";
import EmbeddedActivitiesActionCreatorsAll from "../../../activities/EmbeddedActivitiesActionCreators.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext.tsx";
import utils_triggerIOSHapticDefault from "../utils/triggerIOSHaptic.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import VoicePanelStore from "../../VoicePanelStore.tsx";

require = fn;
function VoicePanelPIP() {
  const tmp2 = closure_17();
  _require = tmp2;
  const context = callback1.useContext(setMode(stateFromStores2[12]));
  setMode = context.setMode;
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  const pipHandoff = callback1.useContext(setMode(stateFromStores2[12])).pipHandoff;
  let obj2 = require("VoicePanelPIPStateContext");
  const mode = require("VoicePanelPIPStateContext").usePIPState().mode;
  let obj3 = require("VoicePanelPIPStateContext");
  const pIPCardsSettled = require("VoicePanelPIPHandoff").usePIPCardsSettled(pipHandoff);
  let obj4 = require("VoicePanelPIPHandoff");
  let tmp12 = mode !== VoicePanelPIPModes.IN_APP;
  const pIPPanelLayoutCommitted = require("VoicePanelPIPHandoff").usePIPPanelLayoutCommitted(pipHandoff);
  if (!tmp12) {
    tmp12 = pIPCardsSettled;
  }
  let tmp13 = tmp10;
  if (null == mode) {
    tmp13 = !pIPPanelLayoutCommitted;
  }
  let tmp14 = tmp13;
  if (tmp13) {
    let tmp15 = !tmp10;
    if (tmp10) {
      tmp15 = tmp12;
    }
    tmp14 = tmp15;
  }
  const mode2 = pIPState.mode;
  closure_129_0 = mode2;
  closure_129_1 = tmp13;
  closure_129_2 = tmp14;
  const tmpResult = closure_17();
  closure_129_3 = tmpResult;
  const context1 = obj.useContext(tmp3(tmp4[12]));
  const controlsSpecs = context1.controlsSpecs;
  closure_129_4 = controlsSpecs;
  const hideControls = context1.hideControls;
  closure_129_5 = hideControls;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  closure_129_6 = pipAvoidanceSpecs;
  const safeArea = context1.safeArea;
  closure_129_7 = safeArea;
  const setFocused = context1.setFocused;
  closure_129_8 = setFocused;
  const setMode2 = context1.setMode;
  closure_129_9 = setMode2;
  const showControls = context1.showControls;
  closure_129_10 = showControls;
  const windowDimensions = context1.windowDimensions;
  closure_129_11 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_12 = wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  closure_129_13 = wrapperOffset;
  const channelId = context1.channelId;
  let obj5 = require("VoicePanelPIPHandoff");
  const pIPState1 = require("VoicePanelPIPStateContext").usePIPState();
  closure_129_15 = pIPState1;
  const tmp6Result = require("VoicePanelPIPStateContext");
  const sharedValue = require("ReanimatedRexport").useSharedValue({
    x: 0,
    y: 0,
    absoluteX: 0,
    absoluteY: 0,
    active: false,
    pressed: false,
  });
  closure_129_16 = sharedValue;
  const tmp6Result9 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  closure_129_17 = sharedValue1;
  let items = [sharedValue1];
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_1_17.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  const tmp6Result10 = require("ReanimatedRexport");
  let fn = function z() {
    const width = styles.width;
    if (styles.showSecondaryPIP) {
      if (setMode) {
        let height = styles.containerHeight;
      }
      const size = {
        pipX: wrapperDimensions.get().pipX,
        pipY: wrapperDimensions.get().pipY,
        width,
        height,
        windowDimensions: windowDimensions.get(),
        safeArea: safeArea.get(),
        bottomAvoidanceRegion: EmbeddedActivitiesStore.get().bottom,
        topAvoidanceRegion: EmbeddedActivitiesStore.get().top,
        positionOffset: null,
      };
      value = undefined;
      if (initialGestureOffset.get().active) {
        value = initialGestureOffset.get();
      }
      size.positionOffset = value;
      const clampedPIPPosition = VoicePanelPIPUtils.getClampedPIPPosition(size);
      const size1 = { width, height, opacity: null, transform: null, borderRadius: null };
      ({ x, y } = clampedPIPPosition);
      size1.opacity = closure_1_17.get();
      if (initialGestureOffset.get().active) {
        let PIP_LAYOUT_PHYSICS = DRAWER_SPRING_PHYSICS;
      } else {
        PIP_LAYOUT_PHYSICS = VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS;
      }
      const obj2 = { translateX: spring.withSpring(x, PIP_LAYOUT_PHYSICS) };
      const items = [obj2];
      const tmp3Result = spring;
      if (initialGestureOffset.get().active) {
        let PIP_LAYOUT_PHYSICS2 = DRAWER_SPRING_PHYSICS;
      } else {
        PIP_LAYOUT_PHYSICS2 = VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS;
      }
      const obj4 = { translateY: spring.withSpring(y, PIP_LAYOUT_PHYSICS2) };
      items[1] = obj4;
      size1.transform = items;
      const tmp3Result3 = spring;
      size1.borderRadius = VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height);
      return size1;
    }
    height = styles.height;
  };
  const tmp6Result11 = require("ReanimatedRexport");
  fn.__closure = {
    pipState: pIPState1,
    mainTileInLayout: tmp13,
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
  fn.__workletHash = 5907103626391;
  fn.__initData = __initData;
  const animatedStyle = tmp6Result11.useAnimatedStyle(fn);
  const obj6 = {
    pipState: pIPState1,
    mainTileInLayout: tmp13,
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
  let fn2 = function q() {
    ({ width, height } = styles);
    const size = { width, height, opacity: null, borderRadius: null };
    let num = 0;
    if (pIPState) {
      num = 1;
    }
    size.opacity = num;
    size.borderRadius = VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height);
    return size;
  };
  const tmp6Result12 = require("ReanimatedRexport");
  fn2.__closure = {
    pipState: pIPState1,
    mainTileVisible: tmp14,
    getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius,
  };
  fn2.__workletHash = 12003036326068;
  fn2.__initData = __initData2;
  const items1 = [tmpResult, ,];
  ({ width: arr2[1], height: arr2[2] } = pIPState1);
  const animatedStyle1 = tmp6Result12.useAnimatedStyle(fn2);
  const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo = obj.useMemo(() => {
    const items = [stateFromStores2.pipContentWrapper, ,];
    const size = {
      width: styles.width,
      height: styles.height,
      borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(styles.width, styles.height),
    };
    items[1] = size;
    items[2] = stateFromStores2.inAppElevationShadow;
    return items;
  }, items1);
  const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode2, setMode2];
  const memo1 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(true);
    let result = Gesture.Pan().enabled(true).manualActivation(true).shouldCancelWhenOutside(false);
    const fn = function l(allTouches) {
      const point = getTouchesCentroid(allTouches.allTouches);
      const point2 = initialGestureOffset.get();
      if (point2.pressed) {
        const obj3 = { absoluteX: point.x - point2.x, absoluteY: point.y - point2.y };
        setMode(stateFromStores2[19])(initialGestureOffset, obj3);
      } else {
        const point1 = { x: 0, y: 0, absoluteX: null, absoluteY: null, active: false, pressed: true };
        ({ x: obj2.absoluteX, y: obj2.absoluteY } = point);
        const result = initialGestureOffset.set(point1);
      }
    };
    const manualActivationResult = Gesture.Pan().enabled(true).manualActivation(true);
    fn.__closure = {
      getTouchesCentroid,
      initialGestureOffset,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
    };
    fn.__workletHash = 7998022656808;
    fn.__initData = __initData6;
    let obj = {
      getTouchesCentroid,
      initialGestureOffset,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
    };
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
        setMode(stateFromStores2[19])(initialGestureOffset, obj);
      } else {
        setMode(stateFromStores2[19])(initialGestureOffset, { pressed: false });
      }
    };
    const onTouchesDownResult = result.onTouchesDown(fn);
    fn2.__closure = {
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      initialGestureOffset,
      getTouchesCentroid,
    };
    fn2.__workletHash = 7791159270294;
    fn2.__initData = __initData5;
    let obj2 = {
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      initialGestureOffset,
      getTouchesCentroid,
    };
    const fn3 = function s(allTouches, activate) {
      const point = getTouchesCentroid(allTouches.allTouches);
      value = initialGestureOffset.get();
      if (value.active) {
        const point1 = { x: point.x - value.absoluteX, y: point.y - value.absoluteY };
        setMode(stateFromStores2[19])(initialGestureOffset, point1);
      } else {
        let tmp4 = allTouches.state === closure_0(stateFromStores2[18]).State.BEGAN;
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
          const point2 = { x: 0, y: 0, absoluteX: null, absoluteY: null, pressed: true, active: true };
          ({ x: obj2.absoluteX, y: obj2.absoluteY } = point);
          const result = initialGestureOffset.set(point2);
          setMode(stateFromStores2[19])(wrapperOffset, { gestureActive: true, x: 0, y: 0 });
          activate.activate();
          closure_0(stateFromStores2[15]).runOnJS(setMode(stateFromStores2[20]))();
          const tmp2Result = closure_0(stateFromStores2[15]);
        }
      }
    };
    const onTouchesUpResult = onTouchesDownResult.onTouchesUp(fn2);
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
    let obj3 = {
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
      const obj = closure_0(stateFromStores2[16]);
      const result = obj.calculatePIPPositionFromVelocity({
        velocityX,
        velocityY,
        absoluteX,
        absoluteY,
        windowDimensions: windowDimensions.get(),
        safeArea: safeArea.get(),
      });
      ({ pipX, pipY } = result);
      setMode(stateFromStores2[19])(wrapperDimensions, { pipX, pipY });
      setMode(stateFromStores2[19])(wrapperOffset, { gestureActive: false });
      setMode(stateFromStores2[19])(initialGestureOffset, { active: false, pressed: false });
      const obj2 = {
        velocityX,
        velocityY,
        absoluteX,
        absoluteY,
        windowDimensions: windowDimensions.get(),
        safeArea: safeArea.get(),
      };
      closure_0(stateFromStores2[15]).runOnJS(setMode(stateFromStores2[21]).updateSourceTrackingView)();
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    fn4.__closure = {
      calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity,
      windowDimensions,
      safeArea,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      wrapperDimensions,
      wrapperOffset,
      initialGestureOffset,
      runOnJS: ReanimatedRexport.runOnJS,
      updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView,
    };
    fn4.__workletHash = 1502716164658;
    fn4.__initData = __initData3;
    const obj4 = {
      calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity,
      windowDimensions,
      safeArea,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      wrapperDimensions,
      wrapperOffset,
      initialGestureOffset,
      runOnJS: ReanimatedRexport.runOnJS,
      updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView,
    };
    const fn5 = function n() {
      setMode(stateFromStores2[19])(initialGestureOffset, { active: false, pressed: false });
    };
    const onEndResult = onTouchesMoveResult.onEnd(fn4);
    fn5.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset };
    fn5.__workletHash = 4606005866023;
    fn5.__initData = __initData2;
    const obj5 = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset };
    const fn6 = function t() {
      setMode(stateFromStores2[19])(initialGestureOffset, { active: false, pressed: false });
    };
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    fn6.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset };
    fn6.__workletHash = 5443656412422;
    fn6.__initData = __initData;
    return onTouchesCancelledResult.onFinalize(fn6);
  }, items2);
  const memo2 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(pipMode !== VoicePanelPIPModes.IN_APP);
    const fn = function o() {
      closure_0(stateFromStores2[15]).runOnJS(setFocused)(null);
    };
    const maxDistanceResult = Gesture2.Tap()
      .enabled(pipMode !== VoicePanelPIPModes.IN_APP)
      .maxDistance(30);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setFocused };
    fn.__workletHash = 8701387318341;
    fn.__initData = __initData7;
    let obj = { runOnJS: ReanimatedRexport.runOnJS, setFocused };
    const onStartResult = maxDistanceResult.onStart(fn);
    const Gesture3 = LegacyBaseButton.Gesture;
    const numberOfTapsResult = maxDistanceResult.onStart(fn).numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const fn2 = function t() {
      if (pipMode === wrapperDimensions.IN_APP) {
        closure_0(stateFromStores2[15]).runOnJS(setMode)(showControls.PANEL);
        const obj3 = closure_0(stateFromStores2[15]);
      } else if (callback1.get().mode === windowDimensions.HIDDEN) {
        closure_0(stateFromStores2[15]).runOnJS(closure_1_10)();
        const obj2 = closure_0(stateFromStores2[15]);
      } else {
        closure_0(stateFromStores2[15]).runOnJS(hideControls)();
        const obj = closure_0(stateFromStores2[15]);
      }
    };
    const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
    fn2.__closure = {
      pipMode,
      VoicePanelPIPModes,
      runOnJS: ReanimatedRexport.runOnJS,
      setMode,
      VoicePanelModes,
      controlsSpecs: callback1,
      VoicePanelControlsModes,
      showControls,
      hideControls,
    };
    fn2.__workletHash = 7961153109772;
    fn2.__initData = __initData8;
    return Gesture.Exclusive(numberOfTapsResult, maxDistanceResult1.onStart(fn2));
  }, items3);
  const obj7 = {
    pipState: pIPState1,
    mainTileVisible: tmp14,
    getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius,
  };
  const items4 = [EmbeddedActivitiesStore];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location) !== isLaunched;
  });
  closure_129_18 = stateFromStores;
  const tmp6Result13 = require("initialize");
  const items5 = [FramesStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items5, () => {
    const mainFrame = safeArea.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  closure_129_19 = stateFromStores1;
  const items6 = [stateFromStores, stateFromStores1, setMode2, setFocused];
  const callback = obj.useCallback(() => {
    if (getTouchesCentroid) {
      setMode(VoicePanelModes.PIP);
      setFocused(null);
    }
    if (null != __initData) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp7, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items6);
  closure_129_20 = callback;
  const items7 = [callback];
  const memo3 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const TapResult = Gesture.Tap();
    const fn = function t() {
      closure_0(stateFromStores2[15]).runOnJS(handleSecondaryPIPTap)();
    };
    const maxDistanceResult = Gesture.Tap().maxDistance(30);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleSecondaryPIPTap };
    fn.__workletHash = 13024299268124;
    fn.__initData = __initData9;
    return maxDistanceResult.onStart(fn);
  }, items7);
  let pushToTalk = tmp3(tmp4[26])(context.controlsSpecs).pushToTalk;
  const tmp6Result14 = require("initialize");
  let fn3 = function n() {
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
    return obj;
  };
  const tmp6Result15 = require("ReanimatedRexport");
  fn3.__closure = {
    getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius,
    pipState: pIPState,
  };
  fn3.__workletHash = 15386699413749;
  fn3.__initData = __initData3;
  const animatedStyle2 = tmp6Result15.useAnimatedStyle(fn3);
  const items8 = [setMode];
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
      setMode(showControls.PANEL);
    };
    return obj;
  }, items8);
  const obj8 = {
    getVoicePanelPIPBorderRadius: require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius,
    pipState: pIPState,
  };
  const items9 = [FramesStore];
  stateFromStores2 = require("initialize").useStateFromStores(items9, () => {
    const mainFrame = safeArea.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items10 = [stateFromStores2];
  callback1 = obj.useCallback(() => {
    if (null != stateFromStores2) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items10);
  const items11 = [callback1];
  const memo5 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = callback1;
    return obj;
  }, items11);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp36;
    const tmp37 = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp36;
  }
  const items12 = [tmp2, pIPState.height];
  const memo6 = obj.useMemo(() => {
    const items = [pipMode.pushToTalkContainer, { height: pIPState.height }];
    return items;
  }, items12);
  const obj9 = { pointerEvents: "box-none", style: null, layout: null, children: null };
  const items13 = [tmp2.container, animatedStyle];
  obj9.style = items13;
  const tmp6Result16 = require("initialize");
  obj9.layout = require("VoicePanelPIPUtils").layoutTransition;
  const obj10 = { gesture: memo1, children: null };
  const obj11 = { pointerEvents: "box-none", style: tmp2.multiPipContainer, layout: null, children: null };
  let tmp3Result = setMode(stateFromStores2[28]);
  obj11.layout = require("VoicePanelPIPUtils").layoutTransition;
  let tmp41Result = null;
  if (tmp13) {
    const obj12 = { style: null, pointerEvents: "box-none", layout: null };
    const items14 = [, ,];
    ({ pipContentWrapper: arr15[0], inAppElevationShadow: arr15[1] } = tmp2);
    items14[2] = animatedStyle1;
    obj12.style = items14;
    obj12.layout = tmp6(tmp4[16]).layoutTransition;
    const merged = Object.assign(memo4);
    const obj13 = { gesture: memo2, children: null };
    const obj14 = { style: null, layout: null, children: null };
    const items15 = [tmp2.pipMask, animatedStyle2];
    obj14.style = items15;
    const tmp3Result9 = tmp3(tmp4[28]);
    obj14.layout = tmp6(tmp4[16]).layoutTransition;
    obj14.children = styles(tmp3(tmp4[29]), {});
    obj13.children = styles(tmp3(tmp4[28]), obj14);
    obj12.children = styles(tmp6(tmp4[18]).GestureDetector, obj13);
    tmp41Result = styles(tmp3Result9, obj12);
    const tmp3Result10 = tmp3(tmp4[28]);
  }
  const items16 = [tmp41Result];
  let tmp41Result3 = null;
  if (pIPState.showSecondaryPIP) {
    const obj15 = { style: memo };
    const merged1 = Object.assign(memo5);
    const obj16 = { style: null, children: null };
    const items17 = [tmp2.pipMask, animatedStyle2];
    obj16.style = items17;
    const tmp3Result11 = tmp3(tmp4[30]);
    const obj17 = { gesture: memo3, children: null };
    const obj18 = { style: StyleSheet.absoluteFill, children: null };
    const tmp3Result12 = tmp3(tmp4[28]);
    obj18.children = styles(tmp3(tmp4[31]), {});
    obj17.children = styles(tmp3(tmp4[30]), obj18);
    obj16.children = styles(tmp6(tmp4[18]).GestureDetector, obj17);
    obj15.children = styles(tmp3Result12, obj16);
    tmp41Result3 = styles(tmp3Result11, obj15);
    const tmp3Result13 = tmp3(tmp4[30]);
  }
  items16[1] = tmp41Result3;
  obj11.children = items16;
  obj10.children = initialGestureOffset(setMode(stateFromStores2[28]), obj11);
  const items18 = [styles(require("LegacyBaseButton").GestureDetector, obj10)];
  let tmp41Result4 = null;
  if (tmp14) {
    tmp41Result4 = null;
    if (pushToTalk) {
      const obj19 = {
        pointerEvents: "box-none",
        style: memo6,
        layout: tmp6(tmp4[16]).layoutTransition,
        children: styles(tmp3(tmp4[32]), {}),
      };
      tmp41Result4 = styles(tmp3(tmp4[28]), obj19);
      const tmp3Result14 = tmp3(tmp4[28]);
    }
  }
  items18[1] = tmp41Result4;
  obj9.children = items18;
  return initialGestureOffset(tmp3Result, obj9);
}
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  return __initData(closure_32, { transitionState, transitionCleanUp }, arg0);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(12415);
({ DRAWER_SPRING_PHYSICS: closure_9, VoicePanelModes: c10, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = fn(12413).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17293).VoicePanelPIPModes;
const ActivityPanelModes = fn(9648).ActivityPanelModes;
const isLaunched = fn(9654).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4638);
let obj = {
  container: { position: "absolute", zIndex: 10 },
  pipContentWrapper: { backgroundColor: "black" },
  inAppElevationShadow: {},
  pipMask: null,
  multiPipContainer: null,
  pushToTalkContainer: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj.pipMask = obj3;
let obj4 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.flexDirection = "column";
obj4.alignItems = "center";
obj4.gap = SECONDARY_PIP_TOP_MARGIN;
obj.multiPipContainer = obj4;
obj.pushToTalkContainer = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_17 = createStyles.createStyles(obj);
function getTouchesCentroid(allTouches) {
  let num = 0;
  let num2 = 0;
  const iter = allTouches[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    num = num + nextResult.absoluteX;
    num2 = num2 + nextResult.absoluteY;
    continue;
  }
  const point = { x: num / allTouches.length, y: num2 / allTouches.length };
  return point;
}
getTouchesCentroid.__closure = {};
getTouchesCentroid.__workletHash = 15663926518076;
getTouchesCentroid.__initData = {
  code: "function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};}",
};
const __initData = {
  code: "function VoicePanelPIPTsx2(){const{pipState,mainTileInLayout,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,initialGestureOffset,opacity,withSpring,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width;const height=pipState.showSecondaryPIP&&mainTileInLayout?pipState.containerHeight:pipState.height;const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:initialGestureOffset.get().active?initialGestureOffset.get():undefined});return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS)},{translateY:withSpring(y,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}",
};
const __initData2 = {
  code: "function VoicePanelPIPTsx3(){const{pipState,mainTileVisible,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height}=pipState;return{width:width,height:height,opacity:mainTileVisible?1:0,borderRadius:getVoicePanelPIPBorderRadius(width,height)};}",
};
let closure_21 = {
  code: "function VoicePanelPIPTsx4(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}",
};
let closure_22 = {
  code: "function VoicePanelPIPTsx5(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}",
};
let closure_23 = {
  code: "function VoicePanelPIPTsx6({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}){const{calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,initialGestureOffset,runOnJS,updateSourceTrackingView}=this.__closure;const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});runOnJS(updateSourceTrackingView)();}",
};
let closure_24 = {
  code: "function VoicePanelPIPTsx7(event,manager){const{getTouchesCentroid,initialGestureOffset,updateSharedValueIfChanged,State,MIN_GESTURE_START,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const offset=initialGestureOffset.get();if(offset.active){updateSharedValueIfChanged(initialGestureOffset,{x:centroid.x-offset.absoluteX,y:centroid.y-offset.absoluteY});return;}if(event.state!==State.BEGAN)return;if(Math.abs(offset.absoluteX-centroid.x)>MIN_GESTURE_START||Math.abs(offset.absoluteY-centroid.y)>MIN_GESTURE_START){initialGestureOffset.set({x:0,y:0,absoluteX:centroid.x,absoluteY:centroid.y,pressed:true,active:true});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}",
};
let closure_25 = {
  code: "function VoicePanelPIPTsx8(event){const{updateSharedValueIfChanged,initialGestureOffset,getTouchesCentroid}=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(initialGestureOffset,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);const offset=initialGestureOffset.get();updateSharedValueIfChanged(initialGestureOffset,{absoluteX:centroid.x-offset.x,absoluteY:centroid.y-offset.y});}",
};
let closure_26 = {
  code: "function VoicePanelPIPTsx9(event){const{getTouchesCentroid,initialGestureOffset,updateSharedValueIfChanged}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const offset=initialGestureOffset.get();if(!offset.pressed){initialGestureOffset.set({x:0,y:0,absoluteX:centroid.x,absoluteY:centroid.y,active:false,pressed:true});return;}updateSharedValueIfChanged(initialGestureOffset,{absoluteX:centroid.x-offset.x,absoluteY:centroid.y-offset.y});}",
};
let closure_27 = {
  code: "function VoicePanelPIPTsx10(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}",
};
let closure_28 = {
  code: "function VoicePanelPIPTsx11(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}",
};
let closure_29 = {
  code: "function VoicePanelPIPTsx12(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}",
};
const __initData3 = {
  code: "function VoicePanelPIPTsx13(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}",
};
let closure_32 = noop.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const pipHandoff = noop.useContext(transitionCleanUp(12414)).pipHandoff;
  const mode = transitionState(17297).usePIPState().mode;
  const obj = transitionState(17297);
  const pIPCardsSettled = transitionState(12421).usePIPCardsSettled(pipHandoff);
  const obj2 = transitionState(12421);
  const pIPPanelLayoutCommitted = transitionState(12421).usePIPPanelLayoutCommitted(pipHandoff);
  const items = [transitionState, pIPPanelLayoutCommitted, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (tmp) {
      transitionCleanUp();
    }
    tmp = transitionState === native.TransitionStates.YEETED && pIPPanelLayoutCommitted;
  }, items);
  return closure_15(VoicePanelPIP, {});
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default noop.memo(function VoicePanelPIPWrapper() {
  const pIPState = VoicePanelPIPStateContext.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  if (null != mode) {
    const obj2 = { pipMode: mode };
    const tmp3 = obj2;
  }
  return __initData(native.TransitionItem, { item: tmp3, renderItem: renderPIPWrapper });
});
