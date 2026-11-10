// === Module 15061: useMediaViewerPanGesture ===

// Module 15061 (useMediaViewerPanGesture)
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;
import spring_spring from "spring/spring" /* 5763 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8915 */;
import useVideoControls from "useVideoControls" /* 8916 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true };
let closure_5 = { code: "(function useMediaViewerPanGestureTsx1(){let[scheduleOnRN,handleClose]=this.__closure;scheduleOnRN(handleClose);})" };
let closure_6 = { code: "(function useMediaViewerPanGestureTsx2(){let[start,translatePos,isInteracting]=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);})" };
let closure_7 = { code: "(function useMediaViewerPanGestureTsx3({velocityY:velocityY,translationY:translationY}){let[translatePos,start,velocity]=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);})" };
let closure_8 = { code: "(function useMediaViewerPanGestureTsx4(_,manager){let[enabled]=this.__closure;if(!enabled.get()){manager.fail();}})" };
let closure_9 = { code: "(function useMediaViewerPanGestureTsx5(){let[isInteracting,velocity,swipeVelocityThreshold,scheduleOnRN,dismiss,translatePos,withSpring,SPRING_CONFIG]=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){scheduleOnRN(dismiss);}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerPanGesture.tsx");

export function useMediaViewerPanGestureConfig(arg0, swipeVelocityThreshold, onClose) {
  _require = arg0;
  dependencyMap = onClose;
  const sharedValue = require("module_1652").useSharedValue(false);
  let obj = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(false);
  let obj2 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  let obj3 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(0);
  const obj4 = require("module_1652");
  const sharedValue4 = require("module_1652").useSharedValue({ y: 0, x: 0 });
  const obj5 = require("module_1652");
  const sharedValue5 = require("module_1652").useSharedValue(true);
  items = [onClose];
  const callback = sharedValue.useCallback(() => {
    useVideoControls.tryPauseCurrentVideo();
    if (onClose != null) {
      onClose();
    }
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    MediaViewerAnalytics.markSessionCompleted();
  }, items);
  let items1 = [arg0, callback, sharedValue, sharedValue2, sharedValue3];
  const callback1 = sharedValue.useCallback(() => {
    const result = sharedValue.set(true);
    if (sharedValue3.get() < 0) {
      let tmp2 = -_undefined;
    } else {
      tmp2 = _undefined;
    }
    const obj2 = spring_spring;
    const merged = Object.assign(closure_4);
    items = [closure_5, _mod1705.scheduleOnRN, callback];
    c0 = undefined;
    c1 = undefined;
    [tmp6, tmp7, tmp8] = items;
    function useMediaViewerPanGestureTsx1() {
      _undefined(c1);
    }
    const items1 = [tmp7, tmp8];
    useMediaViewerPanGestureTsx1.__closure = items1;
    useMediaViewerPanGestureTsx1.__workletHash = 743701601018;
    useMediaViewerPanGestureTsx1.__initData = tmp6;
    const result1 = sharedValue2.set(obj2.withSpring(tmp2, { velocity: sharedValue3.get() }, "respect-motion-settings", useMediaViewerPanGestureTsx1));
    const obj3 = { velocity: sharedValue3.get() };
  }, items1);
  const items2 = [sharedValue3, sharedValue, sharedValue1, sharedValue2, swipeVelocityThreshold, callback1, sharedValue4, sharedValue5];
  return sharedValue.useMemo(() => ({ velocity: sharedValue3, isClosing: sharedValue, isInteracting: sharedValue1, overlayEnabled: sharedValue5, translatePos: sharedValue2, swipeVelocityThreshold, dismiss: callback1, start: sharedValue4 }), items2);
}
export function useMediaViewerPanGesture(panGestureConfig, derivedValue) {
  let swipeVelocityThreshold = panGestureConfig.swipeVelocityThreshold;
  const velocity = panGestureConfig.velocity;
  const isInteracting = panGestureConfig.isInteracting;
  const translatePos = panGestureConfig.translatePos;
  const start = panGestureConfig.start;
  closure_5 = derivedValue;
  const tmp = velocity(isInteracting[6])(panGestureConfig.dismiss);
  closure_6 = tmp;
  items = [tmp, derivedValue, isInteracting, start, swipeVelocityThreshold, translatePos, velocity];
  const callback = translatePos.useCallback(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]);
    items = [_undefined6, start, translatePos, isInteracting];
    [tmp6, tmp7, tmp8, tmp9] = items;
    function useMediaViewerPanGestureTsx2() {
      const point = { x: 0, y: _undefined2.get() };
      const result = _undefined.set(point);
      const result1 = _undefined3.set(true);
    }
    const items1 = [tmp7, tmp8, tmp9];
    useMediaViewerPanGestureTsx2.__closure = items1;
    useMediaViewerPanGestureTsx2.__workletHash = 8573219711611;
    useMediaViewerPanGestureTsx2.__initData = tmp6;
    const failOffsetXResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]);
    const items2 = [closure_7, translatePos, start, velocity];
    [tmp11, tmp12, tmp13, tmp14] = items2;
    function useMediaViewerPanGestureTsx3(arg0) {
      ({ velocityY, translationY } = arg0);
      const result = _undefined.set(translationY + _undefined2.get().y);
      const result1 = _undefined3.set(velocityY);
    }
    const items3 = [tmp12, tmp13, tmp14];
    useMediaViewerPanGestureTsx3.__closure = items3;
    useMediaViewerPanGestureTsx3.__workletHash = 9325111251933;
    useMediaViewerPanGestureTsx3.__initData = tmp11;
    const onStartResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]).onStart(useMediaViewerPanGestureTsx2);
    const items4 = [closure_8, _undefined5];
    [tmp15, tmp16] = items4;
    function useMediaViewerPanGestureTsx4(arg0, fail) {
      if (!_undefined.get()) {
        fail.fail();
      }
    }
    const items5 = [tmp16];
    useMediaViewerPanGestureTsx4.__closure = items5;
    useMediaViewerPanGestureTsx4.__workletHash = 9267057305244;
    useMediaViewerPanGestureTsx4.__initData = tmp15;
    const onUpdateResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]).onStart(useMediaViewerPanGestureTsx2).onUpdate(useMediaViewerPanGestureTsx3);
    const items6 = [closure_9, isInteracting, velocity, swipeVelocityThreshold, _mod1705.scheduleOnRN, _undefined6, translatePos, spring_spring.withSpring, closure_4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items6;
    function useMediaViewerPanGestureTsx5() {
      const result = _undefined.set(false);
      if (Math.abs(_undefined2.get()) > c2) {
        _undefined4(c4);
      } else if (0 !== _undefined5.get()) {
        const obj3 = { velocity: _undefined2.get() };
        const merged = Object.assign(c7);
        const result1 = _undefined5.set(_undefined6(0, obj3));
      }
    }
    const items7 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
    useMediaViewerPanGestureTsx5.__closure = items7;
    useMediaViewerPanGestureTsx5.__workletHash = 14827979759343;
    useMediaViewerPanGestureTsx5.__initData = tmp17;
    return Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]).onStart(useMediaViewerPanGestureTsx2).onUpdate(useMediaViewerPanGestureTsx3).onTouchesDown(useMediaViewerPanGestureTsx4).onEnd(useMediaViewerPanGestureTsx5);
  }, items);
  let items1 = [callback];
  return translatePos.useMemo(() => {
    const Gesture = swipeVelocityThreshold(isInteracting[7]).Gesture;
    const NativeResult = Gesture.Native();
    swipeVelocityThreshold = NativeResult;
    dependencyMap = [];
    return {
      panGestureGenerator(index) {
        if (null != dependencyMap[index]) {
          return dependencyMap[index];
        } else {
          dependencyMap[index] = callback().blocksExternalGesture(NativeResult);
          return dependencyMap[index];
        }
      },
      nativeGesture: NativeResult
    };
  }, items1);
}