// === Module 17617: VoicePanelPIP ===

// Module 17617 (VoicePanelPIP)
import util from "util" /* 1115 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4385 */;
import native from "native" /* 4466 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import spring from "spring" /* 5185 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6892 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9570 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 9592 */;
import ExternalPipDefault from "ExternalPip" /* 9696 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11615 */;
import VoicePanelPIPScaleCache from "VoicePanelPIPScaleCache" /* 17538 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17541 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 17545 */;
import utils_triggerIOSHapticDefault from "utils/triggerIOSHaptic" /* 17547 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import FramesStore from "FramesStore" /* 9312 */;
import VoicePanelStore from "VoicePanelStore" /* 4964 */;

require = fn;
function VoicePanelPIP() {
  let tmp = settlePIPPosition();
  const context = callback2.useContext(pIPState(stateFromStores2[12]));
  const setMode = context.setMode;
  pIPState = setMode(stateFromStores2[13]).usePIPState();
  const pipHandoff = callback2.useContext(pIPState(stateFromStores2[12])).pipHandoff;
  let obj2 = setMode(stateFromStores2[13]);
  const mode = setMode(stateFromStores2[13]).usePIPState().mode;
  let obj3 = setMode(stateFromStores2[13]);
  const pIPCardsSettled = setMode(stateFromStores2[14]).usePIPCardsSettled(pipHandoff);
  let obj4 = setMode(stateFromStores2[14]);
  let tmp11 = mode !== VoicePanelPIPModes.IN_APP;
  const pIPPanelLayoutCommitted = setMode(stateFromStores2[14]).usePIPPanelLayoutCommitted(pipHandoff);
  if (!tmp11) {
    tmp11 = pIPCardsSettled;
  }
  let tmp12 = tmp9;
  if (null == mode) {
    tmp12 = !pIPPanelLayoutCommitted;
  }
  let tmp13 = tmp12;
  if (tmp12) {
    let tmp14 = !tmp9;
    if (tmp9) {
      tmp14 = tmp11;
    }
    tmp13 = tmp14;
  }
  const mode2 = pIPState.mode;
  closure_129_0 = mode2;
  closure_129_1 = tmp12;
  closure_129_2 = tmp13;
  closure_129_18 = undefined;
  closure_129_19 = undefined;
  closure_129_20 = undefined;
  const context1 = obj.useContext(tmp2(tmp3[12]));
  const controlsSpecs = context1.controlsSpecs;
  closure_129_3 = controlsSpecs;
  const hideControls = context1.hideControls;
  closure_129_4 = hideControls;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  closure_129_5 = pipAvoidanceSpecs;
  const safeArea = context1.safeArea;
  closure_129_6 = safeArea;
  const setFocused = context1.setFocused;
  closure_129_7 = setFocused;
  const setMode2 = context1.setMode;
  closure_129_8 = setMode2;
  const showControls = context1.showControls;
  closure_129_9 = showControls;
  const windowDimensions = context1.windowDimensions;
  closure_129_10 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_11 = wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  closure_129_12 = wrapperOffset;
  const channelId = context1.channelId;
  let obj5 = setMode(stateFromStores2[14]);
  const pIPState1 = setMode(stateFromStores2[13]).usePIPState();
  closure_129_14 = pIPState1;
  const tmp5Result = setMode(stateFromStores2[13]);
  const sharedValue = setMode(stateFromStores2[15]).useSharedValue(closure_20);
  closure_129_15 = sharedValue;
  const tmp5Result11 = setMode(stateFromStores2[15]);
  const sharedValue1 = setMode(stateFromStores2[15]).useSharedValue(0);
  closure_129_16 = sharedValue1;
  let items = [sharedValue1];
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_1_16.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let fn = function z(baseX, velocityX, velocityY) {
    const scale = pipState.scale;
    value = scale.get();
    const result = pipState.width * value;
    const scaledPIPContainerHeight = VoicePanelPIPUtils.getScaledPIPContainerHeight({ height: pipState.height, containerHeight: pipState.containerHeight, showSecondaryPIP: pipState.showSecondaryPIP, scale: value });
    const obj2 = { height: pipState.height, containerHeight: pipState.containerHeight, showSecondaryPIP: pipState.showSecondaryPIP, scale: value };
    const obj3 = VoicePanelPIPUtils;
    const result1 = obj3.calculatePIPPositionFromVelocity({ velocityX, velocityY, absoluteX: baseX.baseX + baseX.offsetX + result / 2, absoluteY: baseX.baseY + baseX.offsetY + scaledPIPContainerHeight / 2, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() });
    ({ pipX, pipY } = result1);
    updateSharedValueIfChangedDefault(wrapperDimensions, { pipX, pipY });
  };
  const tmp5Result12 = setMode(stateFromStores2[15]);
  fn.__closure = { pipState: pIPState1, getScaledPIPContainerHeight: setMode(stateFromStores2[16]).getScaledPIPContainerHeight, calculatePIPPositionFromVelocity: setMode(stateFromStores2[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: pIPState(stateFromStores2[17]), wrapperDimensions };
  fn.__workletHash = 3320226117584;
  fn.__initData = __initData;
  const items1 = [, , , , , , , ];
  ({ containerHeight: arr2[0], height: arr2[1], scale: arr2[2], showSecondaryPIP: arr2[3], width: arr2[4] } = pIPState1);
  items1[5] = safeArea;
  items1[6] = windowDimensions;
  items1[7] = wrapperDimensions;
  const callback = obj.useCallback(fn, items1);
  closure_129_17 = callback;
  let obj6 = { pipState: pIPState1, getScaledPIPContainerHeight: setMode(stateFromStores2[16]).getScaledPIPContainerHeight, calculatePIPPositionFromVelocity: setMode(stateFromStores2[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: pIPState(stateFromStores2[17]), wrapperDimensions };
  class K {
    constructor() {
      scale = closure_1_14.scale;
      tmp = closure_1_14;
      result = closure_1_14.width * scale.get();
      tmp3 = closure_0;
      tmp4 = closure_3;
      obj = closure_0(closure_3[16]);
      obj1 = { height: closure_1_14.height, containerHeight: closure_1_14.containerHeight, showSecondaryPIP: null, scale: null };
      showSecondaryPIP = closure_1_14.showSecondaryPIP;
      if (showSecondaryPIP) {
        showSecondaryPIP = closure_1;
      }
      obj1.showSecondaryPIP = showSecondaryPIP;
      scale2 = tmp.scale;
      obj1.scale = scale2.get();
      scaledPIPContainerHeight = obj.getScaledPIPContainerHeight(obj1);
      value = closure_1_15.get();
      if (value.active) {
        x = value.baseX + value.offsetX;
        y = value.baseY + value.offsetY;
      } else {
        tmp3Result = tmp3(tmp4[16]);
        size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
        tmp7 = closure_1_11;
        size.pipX = closure_1_11.get().pipX;
        size.pipY = closure_1_11.get().pipY;
        size.width = result;
        size.height = scaledPIPContainerHeight;
        tmp8 = closure_1_10;
        size.windowDimensions = closure_1_10.get();
        tmp9 = closure_1_6;
        size.safeArea = closure_1_6.get();
        tmp10 = closure_1_5;
        size.bottomAvoidanceRegion = closure_1_5.get().bottom;
        size.topAvoidanceRegion = closure_1_5.get().top;
        clampedPIPPosition = tmp3Result.getClampedPIPPosition(size);
        ({ x, y } = clampedPIPPosition);
      }
      if (value.active) {
        PIP_LAYOUT_PHYSICS = DRAWER_SPRING_PHYSICS;
      } else {
        PIP_LAYOUT_PHYSICS = tmp3(tmp4[16]).PIP_LAYOUT_PHYSICS;
      }
      size1 = { width: result, height: scaledPIPContainerHeight, opacity: closure_1_16.get(), transform: null, borderRadius: null };
      obj11 = { translateX: null };
      tmp3Result1 = tmp3(tmp4[18]);
      obj11.translateX = tmp3Result1.withSpring(x, PIP_LAYOUT_PHYSICS);
      items = [, ];
      items[0] = obj11;
      obj12 = { translateY: null };
      tmp3Result2 = tmp3(tmp4[18]);
      obj12.translateY = tmp3Result2.withSpring(y, PIP_LAYOUT_PHYSICS);
      items[1] = obj12;
      size1.transform = items;
      tmp3Result3 = tmp3(tmp4[16]);
      size1.borderRadius = tmp3Result3.getVoicePanelPIPBorderRadius(result, scaledPIPContainerHeight);
      return size1;
    }
  }
  const tmp5Result13 = setMode(stateFromStores2[15]);
  K.__closure = { pipState: pIPState1, getScaledPIPContainerHeight: setMode(stateFromStores2[16]).getScaledPIPContainerHeight, mainTileInLayout: tmp12, gestureState: sharedValue, getClampedPIPPosition: setMode(stateFromStores2[16]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, DRAWER_SPRING_PHYSICS, PIP_LAYOUT_PHYSICS: setMode(stateFromStores2[16]).PIP_LAYOUT_PHYSICS, opacity: sharedValue1, withSpring: setMode(stateFromStores2[18]).withSpring, getVoicePanelPIPBorderRadius: setMode(stateFromStores2[16]).getVoicePanelPIPBorderRadius };
  K.__workletHash = 8053970012929;
  K.__initData = __initData2;
  const animatedStyle = tmp5Result13.useAnimatedStyle(K);
  let obj7 = { pipState: pIPState1, getScaledPIPContainerHeight: setMode(stateFromStores2[16]).getScaledPIPContainerHeight, mainTileInLayout: tmp12, gestureState: sharedValue, getClampedPIPPosition: setMode(stateFromStores2[16]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, DRAWER_SPRING_PHYSICS, PIP_LAYOUT_PHYSICS: setMode(stateFromStores2[16]).PIP_LAYOUT_PHYSICS, opacity: sharedValue1, withSpring: setMode(stateFromStores2[18]).withSpring, getVoicePanelPIPBorderRadius: setMode(stateFromStores2[16]).getVoicePanelPIPBorderRadius };
  class Q {
    constructor() {
      ({ width, height, scale } = closure_1_14);
      size = { width: width * scale.get(), height: height * scale.get(), borderRadius: null };
      obj2 = closure_0(closure_3[16]);
      size.borderRadius = obj2.getVoicePanelPIPBorderRadius(width, height);
      return size;
    }
  }
  const tmp5Result14 = setMode(stateFromStores2[15]);
  Q.__closure = { pipState: pIPState1, getVoicePanelPIPBorderRadius: setMode(stateFromStores2[16]).getVoicePanelPIPBorderRadius };
  Q.__workletHash = 16127624969315;
  Q.__initData = __initData3;
  const animatedStyle1 = tmp5Result14.useAnimatedStyle(Q);
  const obj8 = { pipState: pIPState1, getVoicePanelPIPBorderRadius: setMode(stateFromStores2[16]).getVoicePanelPIPBorderRadius };
  class Z {
    constructor() {
      opacity = 0;
      if (closure_2) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  Z.__closure = { mainTileVisible: tmp13 };
  Z.__workletHash = 10222959683662;
  Z.__initData = __initData4;
  const items2 = [sharedValue, pipAvoidanceSpecs, , , , , , , , , , ];
  ({ containerHeight: arr3[2], height: arr3[3], scale: arr3[4], showSecondaryPIP: arr3[5], width: arr3[6] } = pIPState1);
  items2[7] = safeArea;
  items2[8] = callback;
  items2[9] = windowDimensions;
  items2[10] = wrapperDimensions;
  items2[11] = wrapperOffset;
  const animatedStyle2 = setMode(stateFromStores2[15]).useAnimatedStyle(Z);
  const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode2, setMode2];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = Gesture.Pan().manualActivation(true).shouldCancelWhenOutside(false);
    const fn = function c(allTouches) {
      const tmp = getTouchesCentroid(allTouches.allTouches);
      const tmp2 = getTouchesSpread(allTouches.allTouches, tmp);
      if (gestureState.get().pressed) {
        const obj5 = { originX: null, originY: null, spread: null };
        ({ x: obj3.originX, y: obj3.originY } = tmp);
        obj5.spread = tmp2;
        pIPState(stateFromStores2[17])(gestureState, obj5);
      } else {
        const obj6 = {};
        const merged = Object.assign(closure_2_20);
        obj6.pressed = true;
        ({ x: obj2.originX, y: obj2.originY } = tmp);
        obj6.spread = tmp2;
        const result = gestureState.set(obj6);
      }
    };
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    fn.__closure = { getTouchesCentroid, getTouchesSpread, gestureState, INACTIVE_GESTURE_STATE, updateSharedValueIfChanged: updateSharedValueIfChangedDefault };
    fn.__workletHash = 8382885098999;
    fn.__initData = __initData5;
    let obj = { getTouchesCentroid, getTouchesSpread, gestureState, INACTIVE_GESTURE_STATE, updateSharedValueIfChanged: updateSharedValueIfChangedDefault };
    const fn2 = function s(allTouches) {
      allTouches = allTouches.allTouches;
      const found = allTouches.filter((item) => {
        allTouches = item;
        const changedTouches = allTouches.changedTouches;
        return !changedTouches.some((id) => id.id === item.id);
      });
      if (0 !== found.length) {
        const tmp6 = getTouchesCentroid(found);
        const obj = { originX: null, originY: null, spread: null };
        ({ x: obj.originX, y: obj.originY } = tmp6);
        obj.spread = getTouchesSpread(found, tmp6);
        pIPState(stateFromStores2[17])(gestureState, obj);
        const tmp9 = pIPState(stateFromStores2[17]);
      } else {
        pIPState(stateFromStores2[17])(gestureState, { pressed: false });
      }
    };
    const onTouchesDownResult = result.onTouchesDown(fn);
    fn2.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState, getTouchesCentroid, getTouchesSpread };
    fn2.__workletHash = 2310608882572;
    fn2.__initData = __initData4;
    let obj2 = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState, getTouchesCentroid, getTouchesSpread };
    const fn3 = function o(allTouches, activate) {
      const point = getTouchesCentroid(allTouches.allTouches);
      const tmp = getTouchesSpread(allTouches.allTouches, point);
      value = gestureState.get();
      if (value.active) {
        const diff = value.offsetX + point.x - value.originX;
        const diff1 = value.offsetY + point.y - value.originY;
        let sum1 = diff1;
        let sum = diff;
        if (value.spread > 8) {
          sum1 = diff1;
          sum = diff;
          if (8 < tmp) {
            const scale3 = styles.scale;
            const value3 = scale3.get();
            const obj2 = { scale: value3 * (tmp / value.spread), width: null, containerHeight: null, showSecondaryPIP: null, windowDimensions: null, safeArea: null, pipAvoidanceSpecs: null };
            ({ width: obj10.width, containerHeight: obj10.containerHeight, showSecondaryPIP: obj10.showSecondaryPIP } = styles);
            obj2.windowDimensions = windowDimensions.get();
            obj2.safeArea = safeArea.get();
            obj2.pipAvoidanceSpecs = pipAvoidanceSpecs.get();
            const clampPIPScaleResult = setMode(stateFromStores2[16]).clampPIPScale(obj2);
            sum1 = diff1;
            sum = diff;
            if (clampPIPScaleResult !== value3) {
              const scale2 = styles.scale;
              const result = scale2.set(clampPIPScaleResult);
              const result1 = clampPIPScaleResult / value3;
              sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
              sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
            }
            const obj9 = setMode(stateFromStores2[16]);
          }
        }
        const obj3 = { pressed: null, active: true, baseX: null, baseY: null, offsetX: null, offsetY: null, originX: null, originY: null, spread: null };
        ({ pressed: obj8.pressed, baseX: obj8.baseX, baseY: obj8.baseY } = value);
        obj3.offsetX = sum;
        obj3.offsetY = sum1;
        ({ x: obj8.originX, y: obj8.originY } = point);
        obj3.spread = tmp;
        const result2 = gestureState.set(obj3);
      } else if (allTouches.state === setMode(stateFromStores2[19]).State.BEGAN) {
        const _Math3 = Math;
        if (Math.abs(value.originX - point.x) <= 10) {
          const _Math = Math;
          if (Math.abs(value.originY - point.y) <= 10) {
            const _Math2 = Math;
          }
        }
        const scale = styles.scale;
        const value4 = scale.get();
        const size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: styles.width * value4, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
        const tmp3Result = setMode(stateFromStores2[16]);
        const obj4 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
        ({ height: obj5.height, containerHeight: obj5.containerHeight, showSecondaryPIP: obj5.showSecondaryPIP } = styles);
        obj4.scale = value4;
        size.height = setMode(stateFromStores2[16]).getScaledPIPContainerHeight(obj4);
        size.windowDimensions = windowDimensions.get();
        size.safeArea = safeArea.get();
        size.bottomAvoidanceRegion = pipAvoidanceSpecs.get().bottom;
        size.topAvoidanceRegion = pipAvoidanceSpecs.get().top;
        const clampedPIPPosition = tmp3Result.getClampedPIPPosition(size);
        const obj7 = { pressed: true, active: true, baseX: null, baseY: null, offsetX: 0, offsetY: 0, originX: null, originY: null, spread: null };
        ({ x: obj6.baseX, y: obj6.baseY } = clampedPIPPosition);
        ({ x: obj6.originX, y: obj6.originY } = point);
        obj7.spread = tmp;
        const result3 = gestureState.set(obj7);
        pIPState(stateFromStores2[17])(wrapperOffset, { gestureActive: true, x: 0, y: 0 });
        activate.activate();
        const tmp3Result3 = setMode(stateFromStores2[16]);
        setMode(stateFromStores2[15]).runOnJS(pIPState(stateFromStores2[20]))();
        const tmp3Result4 = setMode(stateFromStores2[15]);
      }
    };
    const onTouchesUpResult = onTouchesDownResult.onTouchesUp(fn2);
    fn3.__closure = { getTouchesCentroid, getTouchesSpread, gestureState, MIN_PINCH_SPAN: 8, pipState, clampPIPScale: VoicePanelPIPUtils.clampPIPScale, windowDimensions, safeArea, pipAvoidanceSpecs, State: LegacyBaseButton.State, MIN_GESTURE_START: 10, getClampedPIPPosition: VoicePanelPIPUtils.getClampedPIPPosition, wrapperDimensions, getScaledPIPContainerHeight: VoicePanelPIPUtils.getScaledPIPContainerHeight, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, runOnJS: ReanimatedRexport.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault };
    fn3.__workletHash = 15442672049098;
    fn3.__initData = __initData3;
    let obj3 = { getTouchesCentroid, getTouchesSpread, gestureState, MIN_PINCH_SPAN: 8, pipState, clampPIPScale: VoicePanelPIPUtils.clampPIPScale, windowDimensions, safeArea, pipAvoidanceSpecs, State: LegacyBaseButton.State, MIN_GESTURE_START: 10, getClampedPIPPosition: VoicePanelPIPUtils.getClampedPIPPosition, wrapperDimensions, getScaledPIPContainerHeight: VoicePanelPIPUtils.getScaledPIPContainerHeight, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, runOnJS: ReanimatedRexport.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault };
    const fn4 = function n(arg0) {
      ({ velocityX, velocityY } = arg0);
      settlePIPPosition(gestureState.get(), velocityX, velocityY);
      pIPState(stateFromStores2[17])(wrapperOffset, { gestureActive: false });
      const result = gestureState.set(closure_2_20);
      setMode(stateFromStores2[15]).runOnJS(pIPState(stateFromStores2[21]).updateSourceTrackingView)();
      const obj = setMode(stateFromStores2[15]);
      const scale = styles.scale;
      const obj2 = setMode(stateFromStores2[15]);
      setMode(stateFromStores2[15]).runOnJS(setMode(stateFromStores2[22]).setVoicePanelPIPScaleCached)(scale.get());
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    fn4.__closure = { gestureState, settlePIPPosition, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, INACTIVE_GESTURE_STATE, runOnJS: ReanimatedRexport.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView, setVoicePanelPIPScaleCached: VoicePanelPIPScaleCache.setVoicePanelPIPScaleCached, pipState };
    fn4.__workletHash = 6370347653119;
    fn4.__initData = __initData2;
    let obj4 = { gestureState, settlePIPPosition, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, INACTIVE_GESTURE_STATE, runOnJS: ReanimatedRexport.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView, setVoicePanelPIPScaleCached: VoicePanelPIPScaleCache.setVoicePanelPIPScaleCached, pipState };
    const fn5 = function t() {
      pIPState(stateFromStores2[17])(wrapperOffset, { gestureActive: false });
      const result = gestureState.set(closure_2_20);
    };
    const onEndResult = onTouchesMoveResult.onEnd(fn4);
    fn5.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, gestureState, INACTIVE_GESTURE_STATE };
    fn5.__workletHash = 2172979585945;
    fn5.__initData = __initData;
    return onEndResult.onFinalize(fn5);
  }, items2);
  const memo1 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(setMode !== VoicePanelPIPModes.IN_APP);
    const fn = function o() {
      setMode(stateFromStores2[15]).runOnJS(setFocused)(null);
    };
    const maxDistanceResult = Gesture2.Tap().enabled(setMode !== VoicePanelPIPModes.IN_APP).maxDistance(30);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setFocused };
    fn.__workletHash = 12274741816775;
    fn.__initData = __initData6;
    let obj = { runOnJS: ReanimatedRexport.runOnJS, setFocused };
    const onStartResult = maxDistanceResult.onStart(fn);
    const Gesture3 = LegacyBaseButton.Gesture;
    const numberOfTapsResult = maxDistanceResult.onStart(fn).numberOfTaps(2);
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(true);
    const fn2 = function t() {
      if (closure_1_0 === wrapperOffset.IN_APP) {
        setMode(stateFromStores2[15]).runOnJS(closure_1_8)(windowDimensions.PANEL);
        const obj3 = setMode(stateFromStores2[15]);
      } else if (closure_1_3.get().mode === wrapperDimensions.HIDDEN) {
        setMode(stateFromStores2[15]).runOnJS(showControls)();
        const obj2 = setMode(stateFromStores2[15]);
      } else {
        setMode(stateFromStores2[15]).runOnJS(callback2)();
        const obj = setMode(stateFromStores2[15]);
      }
    };
    const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
    fn2.__closure = { pipMode: setMode, VoicePanelPIPModes, runOnJS: ReanimatedRexport.runOnJS, setMode, VoicePanelModes, controlsSpecs: stateFromStores2, VoicePanelControlsModes, showControls, hideControls: callback2 };
    fn2.__workletHash = 2882749351054;
    fn2.__initData = __initData7;
    return Gesture.Exclusive(numberOfTapsResult, maxDistanceResult1.onStart(fn2));
  }, items3);
  const tmp5Result15 = setMode(stateFromStores2[15]);
  const items4 = [EmbeddedActivitiesStore];
  const stateFromStores = setMode(stateFromStores2[23]).useStateFromStores(items4, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location) !== ActivityPanelModes;
  });
  closure_129_18 = stateFromStores;
  const tmp5Result16 = setMode(stateFromStores2[23]);
  const items5 = [FramesStore];
  const stateFromStores1 = setMode(stateFromStores2[23]).useStateFromStores(items5, () => {
    const mainFrame = setFocused.getMainFrame();
    let id = null;
    if (pipState(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  closure_129_19 = stateFromStores1;
  const items6 = [stateFromStores, stateFromStores1, setMode2, setFocused];
  const callback1 = obj.useCallback(() => {
    if (getTouchesCentroid) {
      setMode(VoicePanelModes.PIP);
      setFocused(null);
    }
    if (null != getTouchesSpread) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp7, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items6);
  closure_129_20 = callback1;
  const items7 = [callback1];
  const memo2 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const TapResult = Gesture.Tap();
    const fn = function t() {
      setMode(stateFromStores2[15]).runOnJS(closure_1_20)();
    };
    const maxDistanceResult = Gesture.Tap().maxDistance(30);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleSecondaryPIPTap };
    fn.__workletHash = 16816842509722;
    fn.__initData = __initData8;
    return maxDistanceResult.onStart(fn);
  }, items7);
  let pushToTalk = tmp2(tmp3[27])(context.controlsSpecs).pushToTalk;
  const tmp5Result17 = setMode(stateFromStores2[23]);
  let fn2 = function n() {
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
    return obj;
  };
  const tmp5Result18 = setMode(stateFromStores2[15]);
  fn2.__closure = { getVoicePanelPIPBorderRadius: setMode(stateFromStores2[16]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  fn2.__workletHash = 8247781658227;
  fn2.__initData = __initData5;
  const animatedStyle3 = tmp5Result18.useAnimatedStyle(fn2);
  const items8 = [setMode];
  const memo3 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.oN8bqe);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      setMode(windowDimensions.PANEL);
    };
    return obj;
  }, items8);
  let obj9 = { getVoicePanelPIPBorderRadius: setMode(stateFromStores2[16]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  const items9 = [FramesStore];
  stateFromStores2 = setMode(stateFromStores2[23]).useStateFromStores(items9, () => {
    const mainFrame = setFocused.getMainFrame();
    let id = null;
    if (pipState(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items10 = [stateFromStores2];
  callback2 = obj.useCallback(() => {
    if (null != stateFromStores2) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items10);
  const items11 = [callback2];
  const memo4 = obj.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = callback2;
    return obj;
  }, items11);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp35;
    const tmp36 = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp35;
  }
  const tmp5Result19 = setMode(stateFromStores2[23]);
  let fn3 = function u() {
    ({ scale, height } = pIPState);
    return { height: height * scale.get() };
  };
  fn3.__closure = { pipState: pIPState };
  fn3.__workletHash = 10050652227575;
  fn3.__initData = __initData6;
  let fn4 = function h(originX) {
    const active = sharedValue.get().active;
    const size = { originX: spring.withSpring(originX.targetOriginX, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS), originY: null, width: null, height: null };
    size.originY = spring.withSpring(originX.targetOriginY, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
    if (active) {
      let targetWidth = originX.targetWidth;
    } else {
      targetWidth = spring.withSpring(originX.targetWidth, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
      const tmpResult = spring;
    }
    size.width = targetWidth;
    if (active) {
      let targetHeight = originX.targetHeight;
    } else {
      targetHeight = spring.withSpring(originX.targetHeight, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS);
      const tmpResult2 = spring;
    }
    size.height = targetHeight;
    return { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  };
  const obj10 = { gestureState: sharedValue, withSpring: null, PIP_LAYOUT_PHYSICS: null };
  const animatedStyle4 = setMode(stateFromStores2[15]).useAnimatedStyle(fn3);
  obj10.withSpring = setMode(stateFromStores2[18]).withSpring;
  obj10.PIP_LAYOUT_PHYSICS = setMode(stateFromStores2[16]).PIP_LAYOUT_PHYSICS;
  fn4.__closure = obj10;
  fn4.__workletHash = 3242653617608;
  fn4.__initData = __initData7;
  const items12 = [sharedValue];
  const callback3 = obj.useCallback(fn4, items12);
  const obj11 = { pointerEvents: "box-none", style: null, layout: callback3, children: null };
  const items13 = [tmp.container, animatedStyle];
  obj11.style = items13;
  const tmp5Result20 = setMode(stateFromStores2[15]);
  const obj12 = { gesture: memo, children: null };
  const obj13 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: callback3, children: null };
  let tmp41Result = null;
  const tmp2Result = pIPState(stateFromStores2[29]);
  if (tmp12) {
    const obj14 = { style: null, pointerEvents: "box-none", layout: null };
    const items14 = [, , , ];
    ({ pipContentWrapper: arr15[0], inAppElevationShadow: arr15[1] } = tmp);
    items14[2] = animatedStyle1;
    items14[3] = animatedStyle2;
    obj14.style = items14;
    obj14.layout = callback3;
    let merged = Object.assign(memo3);
    const obj15 = { gesture: memo1, children: null };
    const obj16 = { style: null, layout: null, children: null };
    const items15 = [tmp.pipMask, animatedStyle3];
    obj16.style = items15;
    obj16.layout = callback3;
    const tmp2Result9 = tmp2(tmp3[29]);
    const obj17 = { layoutTransition: callback3 };
    obj16.children = gestureState(tmp2(tmp3[30]), obj17);
    obj15.children = gestureState(tmp2(tmp3[29]), obj16);
    obj14.children = gestureState(tmp5(tmp3[19]).GestureDetector, obj15);
    tmp41Result = gestureState(tmp2Result9, obj14);
    const tmp2Result10 = tmp2(tmp3[29]);
  }
  const items16 = [tmp41Result, ];
  let tmp41Result3 = null;
  if (pIPState.showSecondaryPIP) {
    const obj18 = { style: null };
    const items17 = [, , ];
    ({ pipContentWrapper: arr18[0], inAppElevationShadow: arr18[1] } = tmp);
    items17[2] = animatedStyle1;
    obj18.style = items17;
    const merged1 = Object.assign(memo4);
    const obj19 = { style: null, children: null };
    const items18 = [tmp.pipMask, animatedStyle3];
    obj19.style = items18;
    const tmp2Result11 = tmp2(tmp3[29]);
    const obj20 = { gesture: memo2, children: null };
    const obj21 = { style: StyleSheet.absoluteFill, children: null };
    const tmp2Result12 = tmp2(tmp3[29]);
    obj21.children = gestureState(tmp2(tmp3[32]), {});
    obj20.children = gestureState(tmp2(tmp3[31]), obj21);
    obj19.children = gestureState(tmp5(tmp3[19]).GestureDetector, obj20);
    obj18.children = gestureState(tmp2Result12, obj19);
    tmp41Result3 = gestureState(tmp2Result11, obj18);
    const tmp2Result13 = tmp2(tmp3[31]);
  }
  items16[1] = tmp41Result3;
  obj13.children = items16;
  obj12.children = closure_16(pIPState(stateFromStores2[29]), obj13);
  const items19 = [gestureState(setMode(stateFromStores2[19]).GestureDetector, obj12), ];
  let tmp41Result4 = null;
  if (tmp13) {
    tmp41Result4 = null;
    if (pushToTalk) {
      const obj22 = { pointerEvents: "box-none", style: null, layout: null, children: null };
      const items20 = [tmp.pushToTalkContainer, animatedStyle4];
      obj22.style = items20;
      obj22.layout = callback3;
      obj22.children = gestureState(tmp2(tmp3[33]), {});
      tmp41Result4 = gestureState(tmp2(tmp3[29]), obj22);
      const tmp2Result14 = tmp2(tmp3[29]);
    }
  }
  items19[1] = tmp41Result4;
  obj11.children = items19;
  return closure_16(tmp2Result, obj11);
}
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  return __initData(closure_37, { transitionState, transitionCleanUp }, arg0);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(12524);
({ DRAWER_SPRING_PHYSICS: closure_9, VoicePanelModes: c10, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = fn(12522).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17542).VoicePanelPIPModes;
const ActivityPanelModes = fn(9314).ActivityPanelModes;
const isLaunched = fn(9313).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4756);
let obj = { container: { position: "absolute", zIndex: 10 }, pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: null, multiPipContainer: null, pushToTalkContainer: null };
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
getTouchesCentroid.__initData = { code: "function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};}" };
function getTouchesSpread(allTouches, touchesCentroid) {
  if (allTouches.length < 2) {
    return 0;
  } else {
    let num = 0;
    const iter = allTouches[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let diff = nextResult.absoluteX - touchesCentroid.x;
      let diff1 = nextResult.absoluteY - touchesCentroid.y;
      let _Math = Math;
      num = num + Math.sqrt(diff * diff + diff1 * diff1);
      continue;
    }
    return num / allTouches.length;
  }
}
getTouchesSpread.__closure = {};
getTouchesSpread.__workletHash = 14242071118706;
getTouchesSpread.__initData = { code: "function getTouchesSpread_VoicePanelPIPTsx2(touches,centroid){if(touches.length<2)return 0;let total=0;for(const touch of touches){const dx=touch.absoluteX-centroid.x;const dy=touch.absoluteY-centroid.y;total+=Math.sqrt(dx*dx+dy*dy);}return total/touches.length;}" };
let closure_20 = { pressed: false, active: false, baseX: 0, baseY: 0, offsetX: 0, offsetY: 0, originX: 0, originY: 0, spread: 0 };
const __initData = { code: "function VoicePanelPIPTsx3(state,velocityX,velocityY){const{pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});}" };
const __initData2 = { code: "function VoicePanelPIPTsx4(){const{pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,withSpring,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width*pipState.scale.get();const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state=gestureState.get();let x;let y;if(state.active){x=state.baseX+state.offsetX;y=state.baseY+state.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
const __initData3 = { code: "function VoicePanelPIPTsx5(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height,scale:scale}=pipState;return{width:width*scale.get(),height:height*scale.get(),borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
const __initData4 = { code: "function VoicePanelPIPTsx6(){const{mainTileVisible}=this.__closure;return{opacity:mainTileVisible?1:0};}" };
let closure_25 = { code: "function VoicePanelPIPTsx7(){const{updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);}" };
let closure_26 = { code: "function VoicePanelPIPTsx8({velocityX:velocityX,velocityY:velocityY}){const{gestureState,settlePIPPosition,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,runOnJS,updateSourceTrackingView,setVoicePanelPIPScaleCached,pipState}=this.__closure;const state=gestureState.get();settlePIPPosition(state,velocityX,velocityY);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);runOnJS(updateSourceTrackingView)();runOnJS(setVoicePanelPIPScaleCached)(pipState.scale.get());}" };
let closure_27 = { code: "function VoicePanelPIPTsx9(event,manager){const{getTouchesCentroid,getTouchesSpread,gestureState,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(state.active){let offsetX=state.offsetX+centroid.x-state.originX;let offsetY=state.offsetY+centroid.y-state.originY;if(state.spread>MIN_PINCH_SPAN&&spread>MIN_PINCH_SPAN){const previousScale=pipState.scale.get();const scale=clampPIPScale({scale:previousScale*(spread/state.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale!==previousScale){pipState.scale.set(scale);const scaleChange=scale/previousScale;offsetX+=(centroid.x-(state.baseX+offsetX))*(1-scaleChange);offsetY+=(centroid.y-(state.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state.pressed,active:true,baseX:state.baseX,baseY:state.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid.x,originY:centroid.y,spread:spread});return;}if(event.state!==State.BEGAN)return;if(Math.abs(state.originX-centroid.x)>MIN_GESTURE_START||Math.abs(state.originY-centroid.y)>MIN_GESTURE_START||Math.abs(state.spread-spread)>MIN_GESTURE_START){const scale=pipState.scale.get();const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});gestureState.set({pressed:true,active:true,baseX:x,baseY:y,offsetX:0,offsetY:0,originX:centroid.x,originY:centroid.y,spread:spread});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
let closure_28 = { code: "function VoicePanelPIPTsx10(event){const{updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread}=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:getTouchesSpread(remainingTouches,centroid)});}" };
let closure_29 = { code: "function VoicePanelPIPTsx11(event){const{getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(!state.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});}" };
let closure_30 = { code: "function VoicePanelPIPTsx12(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
let closure_31 = { code: "function VoicePanelPIPTsx13(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
let closure_32 = { code: "function VoicePanelPIPTsx14(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
const __initData5 = { code: "function VoicePanelPIPTsx15(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
const __initData6 = { code: "function VoicePanelPIPTsx16(){const{pipState}=this.__closure;return{height:pipState.height*pipState.scale.get()};}" };
const __initData7 = { code: "function VoicePanelPIPTsx17(values){const{gestureState,withSpring,PIP_LAYOUT_PHYSICS}=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let closure_37 = noop.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const pipHandoff = noop.useContext(transitionCleanUp(12523)).pipHandoff;
  const mode = transitionState(17545).usePIPState().mode;
  const obj = transitionState(17545);
  const pIPCardsSettled = transitionState(12530).usePIPCardsSettled(pipHandoff);
  const obj2 = transitionState(12530);
  const pIPPanelLayoutCommitted = transitionState(12530).usePIPPanelLayoutCommitted(pipHandoff);
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