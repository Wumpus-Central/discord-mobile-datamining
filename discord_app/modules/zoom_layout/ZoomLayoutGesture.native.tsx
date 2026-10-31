// === Module 14805: ZoomLayoutGesture ===

// Module 14805 (ZoomLayoutGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import spring from "spring" /* 5637 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let SPRING_CONFIG = { damping: 20, stiffness: 250, overshootClamping: true };
let c7 = 0.3;
function resistTranslation(arg0, arg1) {
  const bound = Math.max(-arg1, Math.min(arg1, arg0));
  return bound + (arg0 - bound) * c7;
}
resistTranslation.__closure = { PAN_EDGE_RESISTANCE: 0.3 };
resistTranslation.__workletHash = 4111916050524;
resistTranslation.__initData = { code: "function resistTranslation_ZoomLayoutGestureNativeTsx1(position,bound){const{PAN_EDGE_RESISTANCE}=this.__closure;const clamped=Math.max(-bound,Math.min(bound,position));return clamped+(position-clamped)*PAN_EDGE_RESISTANCE;}" };
const __initData = { code: "function ZoomLayoutGestureNativeTsx3(finished){const{bound,translation,withSpring,SPRING_CONFIG}=this.__closure;if(!finished)return;const restingPosition=Math.max(-bound,Math.min(bound,translation.get()));if(restingPosition!==translation.get())translation.set(withSpring(restingPosition,SPRING_CONFIG));}" };
function releaseTranslation(get, bound, arg2) {
  _require = get;
  closure_1 = bound;
  value = get.get();
  bound = Math.max(-bound, Math.min(bound, value));
  const bound1 = Math.max(-4000, Math.min(4000, arg2));
  const accessibilityPreferencesSharedValue = require("reanimated/AccessibilityPreferencesSharedValue").accessibilityPreferencesSharedValue;
  if (accessibilityPreferencesSharedValue.get().reduceMotion) {
    let result = get.set(bound);
  } else {
    if (value === bound) {
      if (0 !== bound) {
        let _Math = Math;
        let _Math2 = Math;
        const bound2 = Math.min(48, 0.02 * Math.abs(bound1));
        const SPRING_CONFIG = { velocity: bound1, deceleration: 0.998, clamp: null };
        const items = [-bound - bound2, bound + bound2];
        SPRING_CONFIG.clamp = items;
        const fn = function c(arg0) {
          if (arg0) {
            const _Math = Math;
            const _Math2 = Math;
            bound = Math.max(-closure_1, Math.min(closure_1, get.get()));
            if (bound !== get.get()) {
              const result = get.set(spring.withSpring(bound, get));
            }
            const tmp3 = -closure_1;
          }
        };
        let obj2 = { bound, translation: get, withSpring: tmp5(5637).withSpring, SPRING_CONFIG };
        fn.__closure = obj2;
        fn.__workletHash = 7034972790996;
        fn.__initData = __initData;
        const result1 = get.set(tmp5(5095).withDecay(SPRING_CONFIG, fn));
        const tmp5Result = tmp5(5095);
      }
    }
    const result2 = get.set(tmp5(5637).withSpring(bound, SPRING_CONFIG));
    const tmp5Result2 = tmp5(5637);
  }
  const tmp2 = -bound;
}
releaseTranslation.__closure = { MAX_PAN_VELOCITY: 4000, accessibilityPreferencesSharedValue: fn(5256).accessibilityPreferencesSharedValue, withSpring: fn(5637).withSpring, SPRING_CONFIG, MAX_FLING_OVERSHOOT: 48, withDecay: fn(5095).withDecay, PAN_DECELERATION: 0.998 };
releaseTranslation.__workletHash = 13339877968106;
releaseTranslation.__initData = { code: "function releaseTranslation_ZoomLayoutGestureNativeTsx2(translation,bound,velocity){const{MAX_PAN_VELOCITY,accessibilityPreferencesSharedValue,withSpring,SPRING_CONFIG,MAX_FLING_OVERSHOOT,withDecay,PAN_DECELERATION}=this.__closure;const position=translation.get();const clamped=Math.max(-bound,Math.min(bound,position));const releaseVelocity=Math.max(-MAX_PAN_VELOCITY,Math.min(MAX_PAN_VELOCITY,velocity));if(accessibilityPreferencesSharedValue.get().reduceMotion){translation.set(clamped);}else if(position!==clamped||bound===0){translation.set(withSpring(clamped,SPRING_CONFIG));}else{const overshoot=Math.min(MAX_FLING_OVERSHOOT,Math.abs(releaseVelocity)*0.02);translation.set(withDecay({velocity:releaseVelocity,deceleration:PAN_DECELERATION,clamp:[-bound-overshoot,bound+overshoot]},function(finished){if(!finished)return;const restingPosition=Math.max(-bound,Math.min(bound,translation.get()));if(restingPosition!==translation.get())translation.set(withSpring(restingPosition,SPRING_CONFIG));}));}}" };
const createStyles = fn(5014);
let closure_11 = createStyles.createStyles({ container: { flex: 1, overflow: "hidden" }, content: { flex: 1 } });
let closure_12 = { code: "function ZoomLayoutGestureNativeTsx4(){const{cancelAnimation,scale,translateX,translateY}=this.__closure;cancelAnimation(scale);cancelAnimation(translateX);cancelAnimation(translateY);}" };
let closure_13 = { code: "function ZoomLayoutGestureNativeTsx5(zoom){const{contentWidth,containerWidth,contentHeight,containerHeight}=this.__closure;return{x:Math.max(0,(contentWidth*zoom-containerWidth.get())/2),y:Math.max(0,(contentHeight*zoom-containerHeight.get())/2)};}" };
let closure_14 = { code: "function ZoomLayoutGestureNativeTsx6(x,y,zoom){const{getTranslationBounds}=this.__closure;const bounds=getTranslationBounds(zoom);return{x:Math.max(-bounds.x,Math.min(bounds.x,x)),y:Math.max(-bounds.y,Math.min(bounds.y,y))};}" };
let closure_15 = { code: "function ZoomLayoutGestureNativeTsx7(){const{clampTranslation,translateX,translateY,scale,withSpring,SPRING_CONFIG}=this.__closure;const position=clampTranslation(translateX.get(),translateY.get(),scale.get());if(position.x!==translateX.get())translateX.set(withSpring(position.x,SPRING_CONFIG));if(position.y!==translateY.get())translateY.set(withSpring(position.y,SPRING_CONFIG));}" };
let closure_16 = { code: "function ZoomLayoutGestureNativeTsx8(){const{pinching,returnToBounds}=this.__closure;if(!pinching.get())return;pinching.set(false);returnToBounds();}" };
let closure_17 = { code: "function ZoomLayoutGestureNativeTsx9(event){const{containerWidth,containerHeight,pinchStart,scale,translateX,translateY,minimumZoomScale,maximumZoomScale,clampTranslation,panPosition}=this.__closure;if(event.numberOfPointers<2)return;const focalX=event.focalX-containerWidth.get()/2;const focalY=event.focalY-containerHeight.get()/2;const start=pinchStart.get();if(event.numberOfPointers!==start.pointers){pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:focalX,focalY:focalY,gestureScale:event.scale,pointers:event.numberOfPointers});return;}const nextScale=Math.max(minimumZoomScale,Math.min(maximumZoomScale,start.scale*event.scale/start.gestureScale));const ratio=nextScale/start.scale;const position=clampTranslation(focalX+(start.x-start.focalX)*ratio,focalY+(start.y-start.focalY)*ratio,nextScale);scale.set(nextScale);translateX.set(position.x);translateY.set(position.y);panPosition.set(position);}" };
let closure_18 = { code: "function ZoomLayoutGestureNativeTsx10(event){const{stopAnimation,pinching,canFling,pinchStart,scale,translateX,translateY,containerWidth,containerHeight}=this.__closure;stopAnimation();pinching.set(true);canFling.set(false);pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:event.focalX-containerWidth.get()/2,focalY:event.focalY-containerHeight.get()/2,gestureScale:event.scale,pointers:event.numberOfPointers});}" };
let closure_19 = { code: "function ZoomLayoutGestureNativeTsx11(_,success){const{touchStoppedAnimation,pinching,returnToBounds}=this.__closure;const shouldReturn=touchStoppedAnimation.get();touchStoppedAnimation.set(false);if(!success&&shouldReturn&&!pinching.get())returnToBounds();}" };
let closure_20 = { code: "function ZoomLayoutGestureNativeTsx12(event,success){const{panInterrupted,pinching,canFling,returnToBounds,getTranslationBounds,scale,releaseTranslation,translateX,translateY}=this.__closure;if(panInterrupted.get())return;if(!success||pinching.get()||event.numberOfPointers>1)return;if(!canFling.get()){returnToBounds();return;}const bounds=getTranslationBounds(scale.get());releaseTranslation(translateX,bounds.x,event.velocityX);releaseTranslation(translateY,bounds.y,event.velocityY);}" };
let closure_21 = { code: "function ZoomLayoutGestureNativeTsx13(event){const{panInterrupted,scale,minimumZoomScale,panPosition,getTranslationBounds,translateX,resistTranslation,translateY}=this.__closure;if(panInterrupted.get()||event.numberOfPointers!==1||scale.get()<=minimumZoomScale)return;const previous=panPosition.get();const position={x:previous.x+event.changeX,y:previous.y+event.changeY};panPosition.set(position);const bounds=getTranslationBounds(scale.get());translateX.set(resistTranslation(position.x,bounds.x));translateY.set(resistTranslation(position.y,bounds.y));}" };
let closure_22 = { code: "function ZoomLayoutGestureNativeTsx14(){const{panInterrupted,stopAnimation,translateX,translateY,clampTranslation,scale,panPosition,PAN_EDGE_RESISTANCE}=this.__closure;if(panInterrupted.get())return;stopAnimation();const x=translateX.get();const y=translateY.get();const clamped=clampTranslation(x,y,scale.get());panPosition.set({x:clamped.x+(x-clamped.x)/PAN_EDGE_RESISTANCE,y:clamped.y+(y-clamped.y)/PAN_EDGE_RESISTANCE});}" };
let closure_23 = { code: "function ZoomLayoutGestureNativeTsx15(event,manager){const{panInterrupted,scale,minimumZoomScale,canFling}=this.__closure;if(panInterrupted.get())return;if(event.numberOfTouches===1&&scale.get()>minimumZoomScale){canFling.set(true);manager.activate();}}" };
let closure_24 = { code: "function ZoomLayoutGestureNativeTsx16(){const{panInterrupted,canFling,scale,minimumZoomScale,stopAnimation,touchStoppedAnimation}=this.__closure;panInterrupted.set(false);canFling.set(false);if(scale.get()<=minimumZoomScale)return;stopAnimation();touchStoppedAnimation.set(true);}" };
const __initData2 = { code: "function ZoomLayoutGestureNativeTsx17(){const{translateX,translateY,scale}=this.__closure;return{transform:[{translateX:translateX.get()},{translateY:translateY.get()},{scale:scale.get()}]};}" };
let closure_26 = { code: "function ZoomLayoutGestureNativeTsx18(){const{stopAnimation,touchStoppedAnimation,panInterrupted,minimumZoomScale,maximumZoomScale,requestedScale,scale,x,containerWidth,y,containerHeight,clampTranslation,translateX,translateY,animated,withSpring,SPRING_CONFIG}=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);const nextScale=Math.max(minimumZoomScale,Math.min(maximumZoomScale,requestedScale));const ratio=nextScale/scale.get();const focalX=x-containerWidth.get()/2;const focalY=y-containerHeight.get()/2;const position=clampTranslation(focalX+(translateX.get()-focalX)*ratio,focalY+(translateY.get()-focalY)*ratio,nextScale);scale.set(animated?withSpring(nextScale,SPRING_CONFIG):nextScale);translateX.set(animated?withSpring(position.x,SPRING_CONFIG):position.x);translateY.set(animated?withSpring(position.y,SPRING_CONFIG):position.y);}" };
let closure_27 = { code: "function ZoomLayoutGestureNativeTsx19(){const{stopAnimation,touchStoppedAnimation,panInterrupted,scale,animated,withSpring,minimumZoomScale,SPRING_CONFIG,translateX,translateY}=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);scale.set(animated?withSpring(minimumZoomScale,SPRING_CONFIG):minimumZoomScale);translateX.set(animated?withSpring(0,SPRING_CONFIG):0);translateY.set(animated?withSpring(0,SPRING_CONFIG):0);}" };
let obj2 = { MAX_PAN_VELOCITY: 4000, accessibilityPreferencesSharedValue: fn(5256).accessibilityPreferencesSharedValue, withSpring: fn(5637).withSpring, SPRING_CONFIG, MAX_FLING_OVERSHOOT: 48, withDecay: fn(5095).withDecay, PAN_DECELERATION: 0.998 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayoutGesture.native.tsx");

export default noop.memo(function ZoomLayoutGesture(onCreateGesture) {
  onCreateGesture = onCreateGesture.onCreateGesture;
  const onLayout = onCreateGesture.onLayout;
  let flag = onCreateGesture.gestureEnabled;
  ({ ref, children, style } = onCreateGesture);
  if (flag === undefined) {
    flag = true;
  }
  let num = onCreateGesture.minimumZoomScale;
  if (num === undefined) {
    num = 1;
  }
  let num2 = onCreateGesture.maximumZoomScale;
  if (num2 === undefined) {
    num2 = 4;
  }
  const contentWidth = onCreateGesture.contentWidth;
  const contentHeight = onCreateGesture.contentHeight;
  const zoomScale = onCreateGesture.zoomScale;
  let sharedValue3;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let memo;
  let memo1;
  const tmp = sharedValue3();
  const sharedValue = onCreateGesture(flag[5]).useSharedValue(0);
  obj = onCreateGesture(flag[5]);
  const sharedValue1 = onCreateGesture(flag[5]).useSharedValue(0);
  let obj2 = onCreateGesture(flag[5]);
  const sharedValue2 = onCreateGesture(flag[5]).useSharedValue(0);
  let obj3 = onCreateGesture(flag[5]);
  sharedValue3 = onCreateGesture(flag[5]).useSharedValue(0);
  let obj4 = onCreateGesture(flag[5]);
  const sharedValue4 = onCreateGesture(flag[5]).useSharedValue({ x: 0, y: 0 });
  let obj5 = onCreateGesture(flag[5]);
  const sharedValue5 = onCreateGesture(flag[5]).useSharedValue(false);
  const obj6 = onCreateGesture(flag[5]);
  const sharedValue6 = onCreateGesture(flag[5]).useSharedValue(false);
  const obj7 = onCreateGesture(flag[5]);
  const sharedValue7 = onCreateGesture(flag[5]).useSharedValue(false);
  const obj8 = onCreateGesture(flag[5]);
  const sharedValue8 = onCreateGesture(flag[5]).useSharedValue(false);
  const obj9 = onCreateGesture(flag[5]);
  const sharedValue9 = onCreateGesture(flag[5]).useSharedValue({ scale: 1, x: 0, y: 0, focalX: 0, focalY: 0, gestureScale: 1, pointers: 0 });
  class V {
    constructor() {
      obj = closure_0(closure_2[5]);
      cancelAnimationResult = obj.cancelAnimation(zoomScale);
      obj2 = closure_0(closure_2[5]);
      cancelAnimationResult1 = obj2.cancelAnimation(closure_10);
      obj3 = closure_0(closure_2[5]);
      cancelAnimationResult2 = obj3.cancelAnimation(closure_11);
      return;
    }
  }
  const obj10 = onCreateGesture(flag[5]);
  V.__closure = { cancelAnimation: onCreateGesture(flag[5]).cancelAnimation, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3 };
  V.__workletHash = 10792934756616;
  V.__initData = sharedValue4;
  let items = [zoomScale, sharedValue2, sharedValue3];
  callback = num.useCallback(V, items);
  let fn = function k(arg0) {
    const point = { x: null, y: null };
    const result = contentWidth * arg0;
    point.x = Math.max(0, (result - sharedValue.get()) / 2);
    const result1 = contentHeight * arg0;
    point.y = Math.max(0, (result1 - sharedValue1.get()) / 2);
    return point;
  };
  fn.__closure = { contentWidth, containerWidth: sharedValue, contentHeight, containerHeight: sharedValue1 };
  fn.__workletHash = 11198863760158;
  fn.__initData = sharedValue5;
  const items1 = [contentWidth, contentHeight, sharedValue, sharedValue1];
  callback1 = num.useCallback(fn, items1);
  class B {
    constructor(arg0, arg1, arg2) {
      point = closure_19(arg2);
      point1 = { x: null, y: null };
      tmp = -point.x;
      point1.x = Math.max(tmp, Math.min(point.x, onCreateGesture));
      tmp2 = -point.y;
      point1.y = Math.max(tmp2, Math.min(point.y, arg1));
      return point1;
    }
  }
  B.__closure = { getTranslationBounds: callback1 };
  B.__workletHash = 5164146873509;
  B.__initData = sharedValue6;
  const items2 = [callback1];
  callback2 = num.useCallback(B, items2);
  class W {
    constructor() {
      obj = closure_10;
      obj2 = closure_11;
      value = closure_10.get();
      value1 = closure_11.get();
      point = closure_20(value, value1, zoomScale.get());
      if (point.x !== closure_10.get()) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj3 = closure_0(closure_2[4]);
        tmp5 = closure_6;
        result = obj.set(obj3.withSpring(point.x, closure_6));
      }
      if (point.y !== obj2.get()) {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj4 = closure_0(closure_2[4]);
        tmp9 = closure_6;
        result1 = obj2.set(obj4.withSpring(point.y, closure_6));
      }
      return;
    }
  }
  const obj11 = { cancelAnimation: onCreateGesture(flag[5]).cancelAnimation, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3 };
  W.__closure = { clampTranslation: callback2, translateX: sharedValue2, translateY: sharedValue3, scale: zoomScale, withSpring: onCreateGesture(flag[4]).withSpring, SPRING_CONFIG: contentHeight };
  W.__workletHash = 4090733756772;
  W.__initData = sharedValue7;
  const items3 = [callback2, zoomScale, sharedValue2, sharedValue3];
  callback3 = num.useCallback(W, items3);
  const items4 = [flag, callback, sharedValue5, sharedValue6, sharedValue9, zoomScale, sharedValue2, sharedValue3, sharedValue4, sharedValue, sharedValue1, num, num2, callback2, callback3];
  memo = num.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PinchResult = Gesture.Pinch();
    const fn = function o(focalX) {
      __initData3();
      const result = sharedValue5.set(true);
      const result1 = sharedValue6.set(false);
      const point = { scale: PAN_EDGE_RESISTANCE.get(), x: sharedValue2.get(), y: sharedValue3.get(), focalX: focalX.focalX - sharedValue.get() / 2, focalY: focalX.focalY - sharedValue1.get() / 2, gestureScale: focalX.scale, pointers: focalX.numberOfPointers };
      const result2 = __initData2.set(point);
    };
    const __closure = { stopAnimation: callback, pinching: sharedValue5, canFling: sharedValue6, pinchStart: sharedValue9, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3, containerWidth: sharedValue, containerHeight: sharedValue1 };
    fn.__closure = __closure;
    fn.__workletHash = 8997643613873;
    fn.__initData = __initData3;
    const enabledResult = Gesture.Pinch().enabled(flag);
    const fn2 = function n(numberOfPointers) {
      if (numberOfPointers.numberOfPointers >= 2) {
        const diff = numberOfPointers.focalX - sharedValue.get() / 2;
        const diff1 = numberOfPointers.focalY - sharedValue1.get() / 2;
        const point2 = __initData2.get();
        if (numberOfPointers.numberOfPointers === point2.pointers) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(num, Math.min(num2, point2.scale * numberOfPointers.scale / point2.gestureScale));
          const result = bound / point2.scale;
          const point = __initData5(diff + (point2.x - point2.focalX) * result, diff1 + (point2.y - point2.focalY) * result, bound);
          const result1 = PAN_EDGE_RESISTANCE.set(bound);
          const result2 = sharedValue2.set(point.x);
          const result3 = sharedValue3.set(point.y);
          const result4 = sharedValue4.set(point);
        } else {
          const point1 = { scale: PAN_EDGE_RESISTANCE.get(), x: sharedValue2.get(), y: sharedValue3.get(), focalX: diff, focalY: diff1, gestureScale: null, pointers: null };
          ({ scale: obj.gestureScale, numberOfPointers: obj.pointers } = numberOfPointers);
          const result5 = __initData2.set(point1);
        }
      }
    };
    fn2.__closure = { containerWidth: sharedValue, containerHeight: sharedValue1, pinchStart: sharedValue9, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3, minimumZoomScale: num, maximumZoomScale: num2, clampTranslation: callback2, panPosition: sharedValue4 };
    fn2.__workletHash = 13379918034392;
    fn2.__initData = __initData2;
    const obj2 = { containerWidth: sharedValue, containerHeight: sharedValue1, pinchStart: sharedValue9, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3, minimumZoomScale: num, maximumZoomScale: num2, clampTranslation: callback2, panPosition: sharedValue4 };
    const onStartResult = Gesture.Pinch().enabled(flag).onStart(fn);
    const fn3 = function t() {
      if (sharedValue5.get()) {
        const result = sharedValue5.set(false);
        __initData6();
      }
    };
    fn3.__closure = { pinching: sharedValue5, returnToBounds: callback3 };
    fn3.__workletHash = 9220271155892;
    fn3.__initData = __initData;
    return Gesture.Pinch().enabled(flag).onStart(fn).onUpdate(fn2).onFinalize(fn3);
  }, items4);
  const items5 = [flag, zoomScale, num, callback, callback2, callback1, sharedValue2, sharedValue3, sharedValue4, sharedValue5, sharedValue6, sharedValue7, sharedValue8, callback3];
  memo1 = num.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(flag);
    const fn = function h() {
      const result = sharedValue7.set(false);
      const result1 = sharedValue6.set(false);
      if (PAN_EDGE_RESISTANCE.get() > num) {
        __initData3();
        const result2 = __initData.set(true);
      }
    };
    const __closure = { panInterrupted: sharedValue7, canFling: sharedValue6, scale: zoomScale, minimumZoomScale: num, stopAnimation: callback, touchStoppedAnimation: sharedValue8 };
    fn.__closure = __closure;
    fn.__workletHash = 4375649241436;
    fn.__initData = __initData9;
    const manualActivationResult = Gesture.Pan().enabled(flag).manualActivation(true);
    const fn2 = function l(numberOfTouches, activate) {
      if (!sharedValue7.get()) {
        let tmp2 = 1 === numberOfTouches.numberOfTouches;
        if (tmp2) {
          tmp2 = PAN_EDGE_RESISTANCE.get() > num;
        }
        if (tmp2) {
          const result = sharedValue6.set(true);
          activate.activate();
        }
      }
    };
    fn2.__closure = { panInterrupted: sharedValue7, scale: zoomScale, minimumZoomScale: num, canFling: sharedValue6 };
    fn2.__workletHash = 2439526361553;
    fn2.__initData = __initData8;
    const onTouchesDownResult = Gesture.Pan().enabled(flag).manualActivation(true).onTouchesDown(fn);
    const fn3 = function s() {
      if (!sharedValue7.get()) {
        __initData3();
        value = sharedValue2.get();
        value2 = sharedValue3.get();
        const point = __initData5(value, value2, PAN_EDGE_RESISTANCE.get());
        const point1 = { x: point.x + (value - point.x) / zoomScale, y: point.y + (value2 - point.y) / zoomScale };
        const result = sharedValue4.set(point1);
      }
    };
    fn3.__closure = { panInterrupted: sharedValue7, stopAnimation: callback, translateX: sharedValue2, translateY: sharedValue3, clampTranslation: callback2, scale: zoomScale, panPosition: sharedValue4, PAN_EDGE_RESISTANCE };
    fn3.__workletHash = 3013657921781;
    fn3.__initData = __initData7;
    const obj2 = { panInterrupted: sharedValue7, stopAnimation: callback, translateX: sharedValue2, translateY: sharedValue3, clampTranslation: callback2, scale: zoomScale, panPosition: sharedValue4, PAN_EDGE_RESISTANCE };
    const onTouchesMoveResult = Gesture.Pan().enabled(flag).manualActivation(true).onTouchesDown(fn).onTouchesMove(fn2);
    const fn4 = function o(numberOfPointers) {
      if (!sharedValue7.get()) {
        if (1 === numberOfPointers.numberOfPointers) {
          if (PAN_EDGE_RESISTANCE.get() > num) {
            const point = sharedValue4.get();
            const point2 = { x: point.x + numberOfPointers.changeX, y: point.y + numberOfPointers.changeY };
            const result = sharedValue4.set(point2);
            const point3 = __initData4(PAN_EDGE_RESISTANCE.get());
            const x = point2.x;
            const x2 = point3.x;
            if (typeof sharedValue === "function") {
              const _Math = Math;
              const _Math2 = Math;
              const bound = Math.max(-x2, Math.min(x2, x));
              tmp17(bound + (x - bound) * zoomScale);
              const y = point2.y;
              const y2 = point3.y;
              if (typeof tmp18 === "function") {
                const _Math3 = Math;
                const _Math4 = Math;
                const bound1 = Math.max(-y2, Math.min(y2, y));
                tmp8(bound1 + (y - bound1) * zoomScale);
                const tmp9 = -y2;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              const tmp3 = -x2;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
    };
    fn4.__closure = { panInterrupted: sharedValue7, scale: zoomScale, minimumZoomScale: num, panPosition: sharedValue4, getTranslationBounds: callback1, translateX: sharedValue2, resistTranslation, translateY: sharedValue3 };
    fn4.__workletHash = 3388464897302;
    fn4.__initData = __initData6;
    const obj3 = { panInterrupted: sharedValue7, scale: zoomScale, minimumZoomScale: num, panPosition: sharedValue4, getTranslationBounds: callback1, translateX: sharedValue2, resistTranslation, translateY: sharedValue3 };
    const onStartResult = Gesture.Pan().enabled(flag).manualActivation(true).onTouchesDown(fn).onTouchesMove(fn2).onStart(fn3);
    const fn5 = function n(numberOfPointers, arg1) {
      if (!sharedValue7.get()) {
        if (arg1) {
          if (!sharedValue5.get()) {
            if (numberOfPointers.numberOfPointers <= 1) {
              if (sharedValue6.get()) {
                const point = __initData4(PAN_EDGE_RESISTANCE.get());
                sharedValue2(closure_1_10, point.x, numberOfPointers.velocityX);
                sharedValue2(sharedValue3, point.y, numberOfPointers.velocityY);
              } else {
                __initData6();
              }
            }
          }
        }
      }
    };
    fn5.__closure = { panInterrupted: sharedValue7, pinching: sharedValue5, canFling: sharedValue6, returnToBounds: callback3, getTranslationBounds: callback1, scale: zoomScale, releaseTranslation, translateX: sharedValue2, translateY: sharedValue3 };
    fn5.__workletHash = 9027145473156;
    fn5.__initData = __initData5;
    const obj4 = { panInterrupted: sharedValue7, pinching: sharedValue5, canFling: sharedValue6, returnToBounds: callback3, getTranslationBounds: callback1, scale: zoomScale, releaseTranslation, translateX: sharedValue2, translateY: sharedValue3 };
    const onChangeResult = Gesture.Pan().enabled(flag).manualActivation(true).onTouchesDown(fn).onTouchesMove(fn2).onStart(fn3).onChange(fn4);
    const fn6 = function t(arg0, arg1) {
      value2 = arg1;
      value = __initData.get();
      const result = __initData.set(false);
      if (!arg1) {
        value2 = !value;
      }
      if (!value2) {
        value2 = sharedValue5.get();
      }
      if (!value2) {
        __initData6();
      }
    };
    fn6.__closure = { touchStoppedAnimation: sharedValue8, pinching: sharedValue5, returnToBounds: callback3 };
    fn6.__workletHash = 1016723650015;
    fn6.__initData = __initData4;
    return Gesture.Pan().enabled(flag).manualActivation(true).onTouchesDown(fn).onTouchesMove(fn2).onStart(fn3).onChange(fn4).onEnd(fn5).onFinalize(fn6);
  }, items5);
  const items6 = [onCreateGesture, memo, memo1];
  const memo2 = num.useMemo(() => {
    let SimultaneousResult;
    if (onCreateGesture != null) {
      SimultaneousResult = tmp(memo, memo1);
    }
    if (SimultaneousResult == null) {
      const Gesture = LegacyBaseButton.Gesture;
      SimultaneousResult = Gesture.Simultaneous(memo, memo1);
    }
    return SimultaneousResult;
  }, items6);
  const obj12 = { clampTranslation: callback2, translateX: sharedValue2, translateY: sharedValue3, scale: zoomScale, withSpring: onCreateGesture(flag[4]).withSpring, SPRING_CONFIG: contentHeight };
  let fn2 = function z() {
    obj = { transform: null };
    const items = [{ translateX: sharedValue2.get() }, , ];
    const obj2 = { translateX: sharedValue2.get() };
    items[1] = { translateY: sharedValue3.get() };
    const obj3 = { translateY: sharedValue3.get() };
    items[2] = { scale: zoomScale.get() };
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { translateX: sharedValue2, translateY: sharedValue3, scale: zoomScale };
  fn2.__workletHash = 13565307855671;
  fn2.__initData = __initData2;
  const items7 = [sharedValue, sharedValue1, onLayout];
  const animatedStyle = onCreateGesture(flag[5]).useAnimatedStyle(fn2);
  const callback4 = num.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    const result1 = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
    if (onLayout != null) {
      tmp3(nativeEvent);
    }
  }, items7);
  const imperativeHandle = num.useImperativeHandle(ref, () => ({
    zoomTo(arg0) {
      let x = arg0.x;
      closure_0 = x;
      let y = arg0.y;
      closure_1 = y;
      num = arg0.scale;
      if (num === undefined) {
        num = 2;
      }
      flag = arg0.animated;
      if (flag === undefined) {
        flag = true;
      }
      const fn = function l() {
        stopAnimation();
        const result = touchStoppedAnimation.set(false);
        const result1 = panInterrupted.set(true);
        const bound = Math.max(minimumZoomScale, Math.min(maximumZoomScale, num));
        const result2 = bound / scale.get();
        const diff = closure_0 - containerWidth.get() / 2;
        const diff1 = closure_1 - containerHeight.get() / 2;
        const result3 = (translateX.get() - diff) * result2;
        const point = clampTranslation(diff + result3, diff1 + (translateY.get() - diff1) * result2, bound);
        let withSpringResult = bound;
        if (flag) {
          withSpringResult = onCreateGesture(flag[4]).withSpring(bound, contentHeight);
          const obj3 = onCreateGesture(flag[4]);
        }
        const result4 = scale.set(withSpringResult);
        if (flag) {
          let x = onCreateGesture(flag[4]).withSpring(point.x, contentHeight);
          const obj4 = onCreateGesture(flag[4]);
        } else {
          x = point.x;
        }
        const result5 = translateX.set(x);
        if (flag) {
          let y = onCreateGesture(flag[4]).withSpring(point.y, contentHeight);
          const obj5 = onCreateGesture(flag[4]);
        } else {
          y = point.y;
        }
        const result6 = translateY.set(y);
      };
      let point = { stopAnimation, touchStoppedAnimation, panInterrupted, minimumZoomScale: flag, maximumZoomScale, requestedScale: num, scale, x, containerWidth, y, containerHeight, clampTranslation, translateX, translateY, animated: flag, withSpring: onCreateGesture(5637).withSpring, SPRING_CONFIG };
      fn.__closure = point;
      fn.__workletHash = 7362250952825;
      fn.__initData = __initData;
      onCreateGesture(5095).runOnUI(fn)();
    },
    unzoom() {
      obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      flag = obj.animated;
      if (flag === undefined) {
        flag = true;
      }
      const fn = function n() {
        stopAnimation();
        const result = touchStoppedAnimation.set(false);
        const result1 = panInterrupted.set(true);
        if (flag) {
          let withSpringResult = onCreateGesture(flag[4]).withSpring(minimumZoomScale, contentHeight);
          obj = onCreateGesture(flag[4]);
        } else {
          withSpringResult = minimumZoomScale;
        }
        const result2 = scale.set(withSpringResult);
        num = 0;
        if (flag) {
          num = onCreateGesture(flag[4]).withSpring(0, contentHeight);
          const obj2 = onCreateGesture(flag[4]);
        }
        const result3 = translateX.set(num);
        num2 = 0;
        if (flag) {
          num2 = onCreateGesture(flag[4]).withSpring(0, contentHeight);
          const obj3 = onCreateGesture(flag[4]);
        }
        const result4 = translateY.set(num2);
      };
      let obj2 = onCreateGesture(5095);
      fn.__closure = { stopAnimation, touchStoppedAnimation, panInterrupted, scale, animated: flag, withSpring: onCreateGesture(5637).withSpring, minimumZoomScale, SPRING_CONFIG, translateX, translateY };
      fn.__workletHash = 1391177767992;
      fn.__initData = __initData2;
      obj2.runOnUI(fn)();
    }
  }));
  const obj14 = { gesture: memo2, children: null };
  const obj15 = { collapsable: false, style: null, onLayout: callback4, children: null };
  const items8 = [tmp.container, style];
  obj15.style = items8;
  const obj16 = { style: null, children };
  const items9 = [tmp.content, animatedStyle];
  obj16.style = items9;
  obj15.children = contentWidth(onLayout(flag[5]).View, obj16);
  obj14.children = contentWidth(num2, obj15);
  return contentWidth(onCreateGesture(flag[7]).GestureDetector, obj14);
});