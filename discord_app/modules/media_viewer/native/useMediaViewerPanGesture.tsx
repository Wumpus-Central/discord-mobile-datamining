// === Module 12981: useMediaViewerPanGesture ===

// Module 12981 (useMediaViewerPanGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8266 */;
import useVideoControls from "useVideoControls" /* 8270 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
let closure_5 = { code: "function useMediaViewerPanGestureTsx1(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}" };
let closure_6 = { code: "function useMediaViewerPanGestureTsx2(){const{isInteracting,velocity,swipeVelocityThreshold,runOnJS,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){runOnJS(dismiss)();}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}" };
let closure_7 = { code: "function useMediaViewerPanGestureTsx3(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}" };
let closure_8 = { code: "function useMediaViewerPanGestureTsx4({velocityY:velocityY,translationY:translationY}){const{translatePos,start,velocity}=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}" };
let closure_9 = { code: "function useMediaViewerPanGestureTsx5(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerPanGesture.tsx");

export const useMediaViewerPanGestureConfig = function useMediaViewerPanGestureConfig(arg0, swipeVelocityThreshold, onClose) {
  _require = arg0;
  dependencyMap = onClose;
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  let obj = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(false);
  const obj2 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
  const obj3 = require("ReanimatedRexport");
  const sharedValue3 = require("ReanimatedRexport").useSharedValue(0);
  const obj4 = require("ReanimatedRexport");
  const sharedValue4 = require("ReanimatedRexport").useSharedValue({ y: 0, x: 0 });
  const obj5 = require("ReanimatedRexport");
  const sharedValue5 = require("ReanimatedRexport").useSharedValue(true);
  const items = [onClose];
  const handleClose = sharedValue.useCallback(() => {
    useVideoControls.tryPauseCurrentVideo();
    if (onClose != null) {
      onClose();
    }
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    MediaViewerAnalytics.markSessionCompleted();
  }, items);
  const items1 = [arg0, handleClose, sharedValue, sharedValue2, sharedValue3];
  const callback1 = sharedValue.useCallback(() => {
    const result = sharedValue.set(true);
    let obj = sharedValue3;
    if (sharedValue3.get() < 0) {
      let tmp2 = -closure_0;
    } else {
      tmp2 = closure_0;
    }
    obj = { velocity: obj.get() };
    const merged = Object.assign(closure_4);
    const fn = function t() {
      closure_0(closure_2[1]).runOnJS(handleClose)();
    };
    obj = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
    fn.__closure = obj;
    fn.__workletHash = 7033730772994;
    fn.__initData = __initData;
    const result1 = sharedValue2.set(spring.withSpring(tmp2, obj, "respect-motion-settings", fn));
  }, items1);
  const items2 = [sharedValue3, sharedValue, sharedValue1, sharedValue2, swipeVelocityThreshold, callback1, sharedValue4, sharedValue5];
  return sharedValue.useMemo(() => ({ velocity: sharedValue3, isClosing: sharedValue, isInteracting: sharedValue1, overlayEnabled: sharedValue5, translatePos: sharedValue2, swipeVelocityThreshold, dismiss: callback1, start: sharedValue4 }), items2);
};
export const useMediaViewerPanGesture = function useMediaViewerPanGesture(panGestureConfig, derivedValue) {
  let swipeVelocityThreshold = panGestureConfig.swipeVelocityThreshold;
  const velocity = panGestureConfig.velocity;
  const isInteracting = panGestureConfig.isInteracting;
  const translatePos = panGestureConfig.translatePos;
  const start = panGestureConfig.start;
  const enabled = derivedValue;
  const tmp = velocity(isInteracting[5])(panGestureConfig.dismiss);
  closure_6 = tmp;
  const items = [tmp, derivedValue, isInteracting, start, swipeVelocityThreshold, translatePos, velocity];
  const callback = translatePos.useCallback(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]);
    class V {
      constructor() {
        point = { x: 0, y: closure_1_3.get() };
        result = closure_1_4.set(point);
        result1 = closure_1_2.set(true);
        return;
      }
    }
    let obj = { start, translatePos, isInteracting };
    V.__closure = obj;
    V.__workletHash = 12024094550213;
    V.__initData = __initData3;
    const failOffsetXResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]);
    class S {
      constructor(arg0) {
        ({ velocityY, translationY } = arg0);
        result = closure_1_3.set(translationY + closure_1_4.get().y);
        result1 = closure_1_1.set(velocityY);
        return;
      }
    }
    obj = { translatePos, start, velocity };
    S.__closure = obj;
    S.__workletHash = 9790035695747;
    S.__initData = __initData2;
    const onStartResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]).onStart(V);
    const fn = function w(arg0, fail) {
      if (!enabled.get()) {
        fail.fail();
      }
    };
    fn.__closure = { enabled };
    fn.__workletHash = 10675684732258;
    fn.__initData = __initData;
    const obj1 = { enabled };
    const onUpdateResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]).onStart(V).onUpdate(S);
    const fn2 = function t() {
      const result = closure_1_2.set(false);
      let obj = velocity;
      if (Math.abs(velocity.get()) > closure_1_0) {
        swipeVelocityThreshold(isInteracting[1]).runOnJS(closure_1_6)();
        const obj5 = swipeVelocityThreshold(isInteracting[1]);
      } else {
        if (0 !== translatePos.get()) {
          obj = { velocity: null };
          obj.velocity = obj.get();
          const merged = Object.assign(start);
          const result1 = obj2.set(swipeVelocityThreshold(isInteracting[4]).withSpring(0, obj));
          const obj3 = swipeVelocityThreshold(isInteracting[4]);
        }
        obj2 = translatePos;
      }
    };
    const onTouchesDownResult = Gesture.Pan().maxPointers(1).activeOffsetY([-10, 10]).failOffsetX([-10, 10]).onStart(V).onUpdate(S).onTouchesDown(fn);
    fn2.__closure = { isInteracting, velocity, swipeVelocityThreshold, runOnJS: ReanimatedRexport.runOnJS, dismiss: __initData, translatePos, withSpring: spring.withSpring, SPRING_CONFIG };
    fn2.__workletHash = 3185523772752;
    fn2.__initData = __initData;
    return onTouchesDownResult.onEnd(fn2);
  }, items);
  const items1 = [callback];
  return translatePos.useMemo(() => {
    const Gesture = swipeVelocityThreshold(isInteracting[6]).Gesture;
    const NativeResult = Gesture.Native();
    swipeVelocityThreshold = NativeResult;
    closure_1 = [];
    return {
      panGestureGenerator(index) {
        if (null != closure_1[index]) {
          return tmp[index];
        } else {
          tmp[index] = callback().blocksExternalGesture(NativeResult);
          return tmp[index];
        }
      },
      nativeGesture: NativeResult
    };
  }, items1);
};