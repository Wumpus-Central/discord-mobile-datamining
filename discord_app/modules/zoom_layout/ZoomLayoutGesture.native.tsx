// === Module 15011: ZoomLayoutGesture ===

// Module 15011 (ZoomLayoutGesture)
import _modDef1652 from "module_1652" /* 1652 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5450 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let jsx = fn(21).jsx;
let deceleration = { damping: 20, stiffness: 250, overshootClamping: true };
let items = [{ code: "(function resistTranslation_ZoomLayoutGestureNativeTsx1(position,bound){let[PAN_EDGE_RESISTANCE]=this.__closure;const clamped=Math.max(-bound,Math.min(bound,position));return clamped+(position-clamped)*PAN_EDGE_RESISTANCE;})" }, 0.3];
let closure_129_0;
[tmp2, tmp3] = items;
function resistTranslation(arg0, arg1) {
  const bound = Math.max(-arg1, Math.min(arg1, arg0));
  return bound + (arg0 - bound) * require;
}
let items1 = [tmp3];
resistTranslation.__closure = items1;
resistTranslation.__workletHash = 234320700197;
resistTranslation.__initData = tmp2;
let items2 = [{ code: "(function releaseTranslation_ZoomLayoutGestureNativeTsx3(translation,bound,velocity){let[MAX_PAN_VELOCITY,accessibilityPreferencesSharedValue,withSpring,SPRING_CONFIG,MAX_FLING_OVERSHOOT,withDecay,PAN_DECELERATION,_worklet_10161841114284_init_data]=this.__closure;const position=translation.get();const clamped=Math.max(-bound,Math.min(bound,position));const releaseVelocity=Math.max(-MAX_PAN_VELOCITY,Math.min(MAX_PAN_VELOCITY,velocity));if(accessibilityPreferencesSharedValue.get().reduceMotion){translation.set(clamped);}else if(position!==clamped||bound===0){translation.set(withSpring(clamped,SPRING_CONFIG));}else{const overshoot=Math.min(MAX_FLING_OVERSHOOT,Math.abs(releaseVelocity)*0.02);translation.set(withDecay({velocity:releaseVelocity,deceleration:PAN_DECELERATION,clamp:[-bound-overshoot,bound+overshoot]},function releaseTranslation_ZoomLayoutGestureNativeTsx3([_worklet_10161841114284_init_data,bound,translation,withSpring,SPRING_CONFIG]){const ZoomLayoutGestureNativeTsx2=function(finished){if(!finished)return;const restingPosition=Math.max(-bound,Math.min(bound,translation.get()));if(restingPosition!==translation.get())translation.set(withSpring(restingPosition,SPRING_CONFIG));};ZoomLayoutGestureNativeTsx2.__closure=[bound,translation,withSpring,SPRING_CONFIG];ZoomLayoutGestureNativeTsx2.__workletHash=10161841114284;ZoomLayoutGestureNativeTsx2.__initData=_worklet_10161841114284_init_data;return ZoomLayoutGestureNativeTsx2;}([_worklet_10161841114284_init_data,bound,translation,withSpring,SPRING_CONFIG])));}})" }, 4000, fn(5402).accessibilityPreferencesSharedValue, fn(5791).withSpring, deceleration, 48, fn(1652).withDecay, 0.998, { code: "(function ZoomLayoutGestureNativeTsx2(finished){let[bound,translation,withSpring,SPRING_CONFIG]=this.__closure;if(!finished)return;const restingPosition=Math.max(-bound,Math.min(bound,translation.get()));if(restingPosition!==translation.get())translation.set(withSpring(restingPosition,SPRING_CONFIG));})" }];
let closure_130_0;
let closure_130_1;
let closure_130_2;
let closure_130_3;
let closure_130_4;
let closure_130_5;
let closure_130_6;
let closure_130_7;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
function releaseTranslation(get, arg1, arg2) {
  value = get.get();
  let bound = Math.max(-arg1, Math.min(arg1, value));
  const bound1 = Math.max(-require, Math.min(require, arg2));
  if (importDefault.get().reduceMotion) {
    let result = get.set(bound);
  } else {
    if (value === bound) {
      if (0 !== arg1) {
        let _Math = Math;
        let _Math2 = Math;
        const bound2 = Math.min(View, 0.02 * Math.abs(bound1));
        deceleration = { velocity: bound1, deceleration: null, clamp: null };
        deceleration.deceleration = deceleration;
        items = [-arg1 - bound2, arg1 + bound2];
        deceleration.clamp = items;
        const items1 = [resistTranslation, arg1, get, dependencyMap, noop];
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        [tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
        class ZoomLayoutGestureNativeTsx2 {
          constructor(arg0) {
            if (get) {
              tmp = globalThis;
              _Math = Math;
              tmp2 = closure_0;
              _Math2 = Math;
              obj = closure_1;
              tmp3 = -closure_0;
              bound = Math.max(tmp3, Math.min(closure_0, closure_1.get()));
              if (bound !== closure_1.get()) {
                tmp5 = closure_2;
                tmp6 = closure_3;
                result = obj.set(closure_2(bound, closure_3));
              }
            }
            return;
          }
        }
        const items2 = [tmp7, tmp8, tmp9, tmp10];
        ZoomLayoutGestureNativeTsx2.__closure = items2;
        ZoomLayoutGestureNativeTsx2.__workletHash = 10161841114284;
        ZoomLayoutGestureNativeTsx2.__initData = tmp6;
        const result1 = get.set(<deceleration {...ZoomLayoutGestureNativeTsx2} />);
      }
    }
    const result2 = get.set(dependencyMap(bound, noop));
  }
  const tmp2 = -arg1;
  const tmp4 = -require;
}
let items3 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
releaseTranslation.__closure = items3;
releaseTranslation.__workletHash = 13668627211373;
releaseTranslation.__initData = tmp4;
const createStyles = fn(5170);
let closure_9 = createStyles.createStyles({ container: { flex: 1, overflow: "hidden" }, content: { flex: 1 } });
let closure_10 = { code: "(function ZoomLayoutGestureNativeTsx4(){let[cancelAnimation,scale,translateX,translateY]=this.__closure;cancelAnimation(scale);cancelAnimation(translateX);cancelAnimation(translateY);})" };
let closure_11 = { code: "(function ZoomLayoutGestureNativeTsx5(zoom){let[contentWidth,containerWidth,contentHeight,containerHeight]=this.__closure;return{x:Math.max(0,(contentWidth*zoom-containerWidth.get())/2),y:Math.max(0,(contentHeight*zoom-containerHeight.get())/2)};})" };
let closure_12 = { code: "(function ZoomLayoutGestureNativeTsx6(x,y,zoom){let[getTranslationBounds]=this.__closure;const bounds=getTranslationBounds(zoom);return{x:Math.max(-bounds.x,Math.min(bounds.x,x)),y:Math.max(-bounds.y,Math.min(bounds.y,y))};})" };
let closure_13 = { code: "(function ZoomLayoutGestureNativeTsx7(){let[clampTranslation,translateX,translateY,scale,withSpring,SPRING_CONFIG]=this.__closure;const position=clampTranslation(translateX.get(),translateY.get(),scale.get());if(position.x!==translateX.get())translateX.set(withSpring(position.x,SPRING_CONFIG));if(position.y!==translateY.get())translateY.set(withSpring(position.y,SPRING_CONFIG));})" };
let closure_14 = { code: "(function ZoomLayoutGestureNativeTsx8(event){let[stopAnimation,pinching,canFling,pinchStart,scale,translateX,translateY,containerWidth,containerHeight]=this.__closure;stopAnimation();pinching.set(true);canFling.set(false);pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:event.focalX-containerWidth.get()/2,focalY:event.focalY-containerHeight.get()/2,gestureScale:event.scale,pointers:event.numberOfPointers});})" };
let closure_15 = { code: "(function ZoomLayoutGestureNativeTsx9(event){let[containerWidth,containerHeight,pinchStart,scale,translateX,translateY,minimumZoomScale,maximumZoomScale,clampTranslation,panPosition]=this.__closure;if(event.numberOfPointers<2)return;const focalX=event.focalX-containerWidth.get()/2;const focalY=event.focalY-containerHeight.get()/2;const start=pinchStart.get();if(event.numberOfPointers!==start.pointers){pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:focalX,focalY:focalY,gestureScale:event.scale,pointers:event.numberOfPointers});return;}const nextScale=Math.max(minimumZoomScale,Math.min(maximumZoomScale,start.scale*event.scale/start.gestureScale));const ratio=nextScale/start.scale;const position=clampTranslation(focalX+(start.x-start.focalX)*ratio,focalY+(start.y-start.focalY)*ratio,nextScale);scale.set(nextScale);translateX.set(position.x);translateY.set(position.y);panPosition.set(position);})" };
let closure_16 = { code: "(function ZoomLayoutGestureNativeTsx10(){let[pinching,returnToBounds]=this.__closure;if(!pinching.get())return;pinching.set(false);returnToBounds();})" };
let closure_17 = { code: "(function ZoomLayoutGestureNativeTsx11(){let[panInterrupted,canFling,scale,minimumZoomScale,stopAnimation,touchStoppedAnimation]=this.__closure;panInterrupted.set(false);canFling.set(false);if(scale.get()<=minimumZoomScale)return;stopAnimation();touchStoppedAnimation.set(true);})" };
let closure_18 = { code: "(function ZoomLayoutGestureNativeTsx12(event,manager){let[panInterrupted,scale,minimumZoomScale,canFling]=this.__closure;if(panInterrupted.get())return;if(event.numberOfTouches===1&&scale.get()>minimumZoomScale){canFling.set(true);manager.activate();}})" };
let closure_19 = { code: "(function ZoomLayoutGestureNativeTsx13(){let[panInterrupted,stopAnimation,translateX,translateY,clampTranslation,scale,panPosition,PAN_EDGE_RESISTANCE]=this.__closure;if(panInterrupted.get())return;stopAnimation();const x=translateX.get();const y=translateY.get();const clamped=clampTranslation(x,y,scale.get());panPosition.set({x:clamped.x+(x-clamped.x)/PAN_EDGE_RESISTANCE,y:clamped.y+(y-clamped.y)/PAN_EDGE_RESISTANCE});})" };
let closure_20 = { code: "(function ZoomLayoutGestureNativeTsx14(event){let[panInterrupted,scale,minimumZoomScale,panPosition,getTranslationBounds,translateX,resistTranslation,translateY]=this.__closure;if(panInterrupted.get()||event.numberOfPointers!==1||scale.get()<=minimumZoomScale)return;const previous=panPosition.get();const position={x:previous.x+event.changeX,y:previous.y+event.changeY};panPosition.set(position);const bounds=getTranslationBounds(scale.get());translateX.set(resistTranslation(position.x,bounds.x));translateY.set(resistTranslation(position.y,bounds.y));})" };
let closure_21 = { code: "(function ZoomLayoutGestureNativeTsx15(event,success){let[panInterrupted,pinching,canFling,returnToBounds,getTranslationBounds,scale,releaseTranslation,translateX,translateY]=this.__closure;if(panInterrupted.get())return;if(!success||pinching.get()||event.numberOfPointers>1)return;if(!canFling.get()){returnToBounds();return;}const bounds=getTranslationBounds(scale.get());releaseTranslation(translateX,bounds.x,event.velocityX);releaseTranslation(translateY,bounds.y,event.velocityY);})" };
let closure_22 = { code: "(function ZoomLayoutGestureNativeTsx16(_,success){let[touchStoppedAnimation,pinching,returnToBounds]=this.__closure;const shouldReturn=touchStoppedAnimation.get();touchStoppedAnimation.set(false);if(!success&&shouldReturn&&!pinching.get())returnToBounds();})" };
let closure_23 = { code: "(function ZoomLayoutGestureNativeTsx17(){let[translateX,translateY,scale]=this.__closure;return{transform:[{translateX:translateX.get()},{translateY:translateY.get()},{scale:scale.get()}]};})" };
let closure_24 = { code: "(function ZoomLayoutGestureNativeTsx18(){let[stopAnimation,touchStoppedAnimation,panInterrupted,minimumZoomScale,maximumZoomScale,requestedScale,scale,x,containerWidth,y,containerHeight,clampTranslation,translateX,translateY,animated,withSpring,SPRING_CONFIG]=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);const nextScale=Math.max(minimumZoomScale,Math.min(maximumZoomScale,requestedScale));const ratio=nextScale/scale.get();const focalX=x-containerWidth.get()/2;const focalY=y-containerHeight.get()/2;const position=clampTranslation(focalX+(translateX.get()-focalX)*ratio,focalY+(translateY.get()-focalY)*ratio,nextScale);scale.set(animated?withSpring(nextScale,SPRING_CONFIG):nextScale);translateX.set(animated?withSpring(position.x,SPRING_CONFIG):position.x);translateY.set(animated?withSpring(position.y,SPRING_CONFIG):position.y);})" };
let closure_25 = { code: "(function ZoomLayoutGestureNativeTsx19(){let[stopAnimation,touchStoppedAnimation,panInterrupted,scale,animated,withSpring,minimumZoomScale,SPRING_CONFIG,translateX,translateY]=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);scale.set(animated?withSpring(minimumZoomScale,SPRING_CONFIG):minimumZoomScale);translateX.set(animated?withSpring(0,SPRING_CONFIG):0);translateY.set(animated?withSpring(0,SPRING_CONFIG):0);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayoutGesture.native.tsx");

export default noop.memo(function ZoomLayoutGesture(onCreateGesture) {
  onCreateGesture = onCreateGesture.onCreateGesture;
  _require = onCreateGesture;
  const onLayout = onCreateGesture.onLayout;
  importDefault = onLayout;
  let flag = onCreateGesture.gestureEnabled;
  ({ ref, children, style } = onCreateGesture);
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = flag;
  let num = onCreateGesture.minimumZoomScale;
  if (num === undefined) {
    num = 1;
  }
  noop = num;
  let num2 = onCreateGesture.maximumZoomScale;
  if (num2 === undefined) {
    num2 = 4;
  }
  c4 = num2;
  ({ contentWidth, contentHeight, zoomScale } = onCreateGesture);
  jsx = zoomScale;
  let sharedValue3;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let memo;
  let memo1;
  const tmp = sharedValue3();
  const sharedValue = require("module_1652").useSharedValue(0);
  let obj = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  let obj2 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  let obj3 = require("module_1652");
  sharedValue3 = require("module_1652").useSharedValue(0);
  const obj4 = require("module_1652");
  const sharedValue4 = require("module_1652").useSharedValue({ x: 0, y: 0 });
  const obj5 = require("module_1652");
  const sharedValue5 = require("module_1652").useSharedValue(false);
  const obj6 = require("module_1652");
  const sharedValue6 = require("module_1652").useSharedValue(false);
  const obj7 = require("module_1652");
  const sharedValue7 = require("module_1652").useSharedValue(false);
  const obj8 = require("module_1652");
  const sharedValue8 = require("module_1652").useSharedValue(false);
  const obj9 = require("module_1652");
  const sharedValue9 = require("module_1652").useSharedValue({ scale: 1, x: 0, y: 0, focalX: 0, focalY: 0, gestureScale: 1, pointers: 0 });
  items = [sharedValue4, require("module_1652").cancelAnimation, zoomScale, sharedValue2, sharedValue3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  class ZoomLayoutGestureNativeTsx4 {
    constructor() {
      tmp = closure_0(closure_1);
      tmp2 = closure_0(closure_2);
      tmp3 = closure_0(closure_3);
      return;
    }
  }
  let items1 = [tmp15, tmp16, tmp17, tmp18];
  ZoomLayoutGestureNativeTsx4.__closure = items1;
  ZoomLayoutGestureNativeTsx4.__workletHash = 12077393304849;
  ZoomLayoutGestureNativeTsx4.__initData = tmp14;
  let items2 = [zoomScale, sharedValue2, sharedValue3];
  callback = noop.useCallback(ZoomLayoutGestureNativeTsx4, items2);
  let items3 = [sharedValue5, contentWidth, sharedValue, contentHeight, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24] = items3;
  class ZoomLayoutGestureNativeTsx5 {
    constructor(arg0) {
      point = { x: null, y: null };
      result = closure_0 * onCreateGesture;
      point.x = Math.max(0, (result - closure_1.get()) / 2);
      result1 = closure_2 * onCreateGesture;
      point.y = Math.max(0, (result1 - closure_3.get()) / 2);
      return point;
    }
  }
  let items4 = [tmp21, tmp22, tmp23, tmp24];
  ZoomLayoutGestureNativeTsx5.__closure = items4;
  ZoomLayoutGestureNativeTsx5.__workletHash = 4656744008551;
  ZoomLayoutGestureNativeTsx5.__initData = tmp20;
  let items5 = [contentWidth, contentHeight, sharedValue, sharedValue1];
  callback1 = obj11.useCallback(ZoomLayoutGestureNativeTsx5, items5);
  let items6 = [sharedValue6, callback1];
  _require = undefined;
  [tmp26, tmp27] = items6;
  class ZoomLayoutGestureNativeTsx6 {
    constructor(arg0, arg1, arg2) {
      point = closure_0(arg2);
      point1 = { x: null, y: null };
      tmp = -point.x;
      point1.x = Math.max(tmp, Math.min(point.x, onCreateGesture));
      tmp2 = -point.y;
      point1.y = Math.max(tmp2, Math.min(point.y, arg1));
      return point1;
    }
  }
  let items7 = [tmp27];
  ZoomLayoutGestureNativeTsx6.__closure = items7;
  ZoomLayoutGestureNativeTsx6.__workletHash = 9317273254044;
  ZoomLayoutGestureNativeTsx6.__initData = tmp26;
  let items8 = [callback1];
  callback2 = obj11.useCallback(ZoomLayoutGestureNativeTsx6, items8);
  let items9 = [sharedValue7, callback2, sharedValue2, sharedValue3, zoomScale, require("spring/spring").withSpring, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  jsx = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items9;
  class ZoomLayoutGestureNativeTsx7 {
    constructor() {
      obj = closure_1;
      obj2 = closure_2;
      value = closure_1.get();
      value1 = closure_2.get();
      point = closure_0(value, value1, closure_3.get());
      if (point.x !== closure_1.get()) {
        tmp3 = closure_4;
        tmp4 = closure_5;
        result = obj.set(closure_4(point.x, closure_5));
      }
      if (point.y !== obj2.get()) {
        tmp6 = closure_4;
        tmp7 = closure_5;
        result1 = obj2.set(closure_4(point.y, closure_5));
      }
      return;
    }
  }
  let items10 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  ZoomLayoutGestureNativeTsx7.__closure = items10;
  ZoomLayoutGestureNativeTsx7.__workletHash = 13954530779581;
  ZoomLayoutGestureNativeTsx7.__initData = tmp29;
  let items11 = [callback2, zoomScale, sharedValue2, sharedValue3];
  callback3 = obj11.useCallback(ZoomLayoutGestureNativeTsx7, items11);
  const items12 = [flag, callback, sharedValue5, sharedValue6, sharedValue9, zoomScale, sharedValue2, sharedValue3, sharedValue4, sharedValue, sharedValue1, num, num2, callback2, callback3];
  memo = obj11.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PinchResult = Gesture.Pinch();
    items = [closure_14, callback, sharedValue5, sharedValue6, sharedValue9, c5, sharedValue2, sharedValue3, sharedValue, sharedValue1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
    class ZoomLayoutGestureNativeTsx8 {
      constructor(arg0) {
        tmp = closure_0();
        result = closure_1.set(true);
        result1 = closure_2.set(false);
        point = { scale: closure_4.get(), x: closure_5.get(), y: closure_6.get(), focalX: arg0.focalX - closure_7.get() / 2, focalY: arg0.focalY - closure_8.get() / 2, gestureScale: arg0.scale, pointers: arg0.numberOfPointers };
        result2 = closure_3.set(point);
        return;
      }
    }
    const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    ZoomLayoutGestureNativeTsx8.__closure = items1;
    ZoomLayoutGestureNativeTsx8.__workletHash = 6554303942353;
    ZoomLayoutGestureNativeTsx8.__initData = tmp8;
    const enabledResult = Gesture.Pinch().enabled(c2);
    const tmp3 = c5;
    const items2 = [closure_15, sharedValue, sharedValue1, sharedValue9, tmp3, sharedValue2, sharedValue3, c3, c4, callback2, sharedValue4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
    class ZoomLayoutGestureNativeTsx9 {
      constructor(arg0) {
        if (arg0.numberOfPointers >= 2) {
          tmp19 = closure_0;
          diff = arg0.focalX - closure_0.get() / 2;
          tmp21 = closure_1;
          diff1 = arg0.focalY - closure_1.get() / 2;
          obj2 = closure_2;
          point2 = closure_2.get();
          if (arg0.numberOfPointers === point2.pointers) {
            tmp5 = globalThis;
            _Math = Math;
            tmp6 = closure_6;
            _Math2 = Math;
            tmp7 = closure_7;
            bound = Math.max(closure_6, Math.min(closure_7, point2.scale * arg0.scale / point2.gestureScale));
            result = bound / point2.scale;
            tmp10 = closure_8;
            point = closure_8(diff + (point2.x - point2.focalX) * result, diff1 + (point2.y - point2.focalY) * result, bound);
            tmp11 = closure_3;
            result1 = closure_3.set(bound);
            tmp13 = closure_4;
            result2 = closure_4.set(point.x);
            tmp15 = closure_5;
            result3 = closure_5.set(point.y);
            tmp17 = closure_9;
            result4 = closure_9.set(point);
          } else {
            point1 = { scale: null, x: null, y: null, focalX: null, focalY: null, gestureScale: null, pointers: null };
            tmp = closure_3;
            point1.scale = closure_3.get();
            tmp2 = closure_4;
            point1.x = closure_4.get();
            tmp3 = closure_5;
            point1.y = closure_5.get();
            point1.focalX = diff;
            point1.focalY = diff1;
            ({ scale: obj.gestureScale, numberOfPointers: obj.pointers } = arg0);
            result5 = obj2.set(point1);
          }
        }
        return;
      }
    }
    const items3 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
    ZoomLayoutGestureNativeTsx9.__closure = items3;
    ZoomLayoutGestureNativeTsx9.__workletHash = 10018523503809;
    ZoomLayoutGestureNativeTsx9.__initData = tmp18;
    const onStartResult = Gesture.Pinch().enabled(c2).onStart(ZoomLayoutGestureNativeTsx8);
    const items4 = [closure_16, sharedValue5, callback3];
    c0 = undefined;
    c1 = undefined;
    [tmp29, tmp30, tmp31] = items4;
    class ZoomLayoutGestureNativeTsx10 {
      constructor() {
        obj = closure_0;
        if (closure_0.get()) {
          flag = false;
          result = obj.set(false);
          tmp2 = closure_1;
          tmp3 = closure_1();
        }
        return;
      }
    }
    const items5 = [tmp30, tmp31];
    ZoomLayoutGestureNativeTsx10.__closure = items5;
    ZoomLayoutGestureNativeTsx10.__workletHash = 7035520443764;
    ZoomLayoutGestureNativeTsx10.__initData = tmp29;
    return Gesture.Pinch().enabled(c2).onStart(ZoomLayoutGestureNativeTsx8).onUpdate(ZoomLayoutGestureNativeTsx9).onFinalize(ZoomLayoutGestureNativeTsx10);
  }, items12);
  const items13 = [flag, zoomScale, num, callback, callback2, callback1, sharedValue2, sharedValue3, sharedValue4, sharedValue5, sharedValue6, sharedValue7, sharedValue8, callback3];
  memo1 = obj11.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(c2);
    items = [closure_17, sharedValue7, sharedValue6, c5, c3, callback, sharedValue8];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
    class ZoomLayoutGestureNativeTsx11 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        if (closure_2.get() > closure_3) {
          tmp3 = closure_4;
          tmp4 = closure_4();
          tmp5 = closure_5;
          flag = true;
          result2 = closure_5.set(true);
        }
        return;
      }
    }
    const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
    ZoomLayoutGestureNativeTsx11.__closure = items1;
    ZoomLayoutGestureNativeTsx11.__workletHash = 6030949190530;
    ZoomLayoutGestureNativeTsx11.__initData = tmp7;
    const manualActivationResult = Gesture.Pan().enabled(c2).manualActivation(true);
    const items2 = [closure_18, sharedValue7, c5, c3, sharedValue6];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
    class ZoomLayoutGestureNativeTsx12 {
      constructor(arg0, arg1) {
        if (!closure_0.get()) {
          tmp = arg0;
          num = 1;
          tmp2 = 1 === arg0.numberOfTouches;
          if (tmp2) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp2 = closure_1.get() > closure_2;
          }
          if (tmp2) {
            tmp5 = arg1;
            tmp6 = closure_3;
            flag = true;
            result = closure_3.set(true);
            activateResult = arg1.activate();
          }
        }
        return;
      }
    }
    const items3 = [tmp15, tmp16, tmp17, tmp18];
    ZoomLayoutGestureNativeTsx12.__closure = items3;
    ZoomLayoutGestureNativeTsx12.__workletHash = 1838143506383;
    ZoomLayoutGestureNativeTsx12.__initData = tmp14;
    const onTouchesDownResult = Gesture.Pan().enabled(c2).manualActivation(true).onTouchesDown(ZoomLayoutGestureNativeTsx11);
    const items4 = [closure_19, sharedValue7, callback, sharedValue2, sharedValue3, callback2, c5, sharedValue4, 0.3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items4;
    class ZoomLayoutGestureNativeTsx13 {
      constructor() {
        if (!closure_0.get()) {
          tmp = closure_1;
          tmp2 = closure_1();
          tmp3 = closure_2;
          value = closure_2.get();
          tmp5 = closure_3;
          value1 = closure_3.get();
          tmp7 = closure_4;
          tmp8 = closure_5;
          point = closure_4(value, value1, closure_5.get());
          tmp9 = closure_6;
          point1 = { x: null, y: null };
          tmp10 = closure_7;
          point1.x = point.x + (value - point.x) / closure_7;
          point1.y = point.y + (value1 - point.y) / closure_7;
          result = closure_6.set(point1);
        }
        return;
      }
    }
    const items5 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
    ZoomLayoutGestureNativeTsx13.__closure = items5;
    ZoomLayoutGestureNativeTsx13.__workletHash = 7963059043371;
    ZoomLayoutGestureNativeTsx13.__initData = tmp22;
    const onTouchesMoveResult = Gesture.Pan().enabled(c2).manualActivation(true).onTouchesDown(ZoomLayoutGestureNativeTsx11).onTouchesMove(ZoomLayoutGestureNativeTsx12);
    const items6 = [closure_20, sharedValue7, c5, c3, sharedValue4, callback1, sharedValue2, resistTranslation, sharedValue3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items6;
    class ZoomLayoutGestureNativeTsx14 {
      constructor(arg0) {
        if (!closure_0.get()) {
          tmp = arg0;
          num = 1;
          if (1 === arg0.numberOfPointers) {
            obj = closure_1;
            tmp2 = closure_2;
            if (closure_1.get() > closure_2) {
              tmp3 = closure_3;
              point = closure_3.get();
              point2 = { x: null, y: null };
              point2.x = point.x + arg0.changeX;
              point2.y = point.y + arg0.changeY;
              result = closure_3.set(point2);
              tmp5 = closure_4;
              point3 = closure_4(obj.get());
              tmp6 = closure_5;
              tmp7 = closure_6;
              result1 = closure_5.set(closure_6(point2.x, point3.x));
              tmp9 = closure_7;
              result2 = closure_7.set(closure_6(point2.y, point3.y));
            }
          }
        }
        return;
      }
    }
    const items7 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40];
    ZoomLayoutGestureNativeTsx14.__closure = items7;
    ZoomLayoutGestureNativeTsx14.__workletHash = 2662631838600;
    ZoomLayoutGestureNativeTsx14.__initData = tmp32;
    const onStartResult = Gesture.Pan().enabled(c2).manualActivation(true).onTouchesDown(ZoomLayoutGestureNativeTsx11).onTouchesMove(ZoomLayoutGestureNativeTsx12).onStart(ZoomLayoutGestureNativeTsx13);
    const items8 = [closure_21, sharedValue7, sharedValue5, sharedValue6, callback3, callback1, c5, releaseTranslation, sharedValue2, sharedValue3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items8;
    class ZoomLayoutGestureNativeTsx15 {
      constructor(arg0, arg1) {
        if (!closure_0.get()) {
          tmp = arg1;
          if (arg1) {
            tmp2 = closure_1;
            if (!closure_1.get()) {
              tmp3 = arg0;
              num = 1;
              if (arg0.numberOfPointers <= 1) {
                tmp4 = closure_2;
                if (closure_2.get()) {
                  tmp7 = closure_4;
                  tmp8 = closure_5;
                  point = closure_4(closure_5.get());
                  tmp9 = closure_6;
                  tmp10 = closure_7;
                  tmp11 = closure_6(closure_7, point.x, arg0.velocityX);
                  tmp12 = closure_8;
                  tmp13 = closure_6(closure_8, point.y, arg0.velocityY);
                } else {
                  tmp5 = closure_3;
                  tmp6 = closure_3();
                }
              }
            }
          }
        }
        return;
      }
    }
    const items9 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52];
    ZoomLayoutGestureNativeTsx15.__closure = items9;
    ZoomLayoutGestureNativeTsx15.__workletHash = 929238165786;
    ZoomLayoutGestureNativeTsx15.__initData = tmp43;
    const onChangeResult = Gesture.Pan().enabled(c2).manualActivation(true).onTouchesDown(ZoomLayoutGestureNativeTsx11).onTouchesMove(ZoomLayoutGestureNativeTsx12).onStart(ZoomLayoutGestureNativeTsx13).onChange(ZoomLayoutGestureNativeTsx14);
    const items10 = [closure_22, sharedValue8, sharedValue5, callback3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp53, tmp54, tmp55, tmp56] = items10;
    class ZoomLayoutGestureNativeTsx16 {
      constructor(arg0, arg1) {
        value1 = arg1;
        value = closure_0.get();
        result = closure_0.set(false);
        if (!arg1) {
          value1 = !value;
        }
        if (!value1) {
          tmp4 = closure_1;
          value1 = closure_1.get();
        }
        if (!value1) {
          tmp5 = closure_2;
          tmp6 = closure_2();
        }
        return;
      }
    }
    const items11 = [tmp54, tmp55, tmp56];
    ZoomLayoutGestureNativeTsx16.__closure = items11;
    ZoomLayoutGestureNativeTsx16.__workletHash = 14950204314849;
    ZoomLayoutGestureNativeTsx16.__initData = tmp53;
    return Gesture.Pan().enabled(c2).manualActivation(true).onTouchesDown(ZoomLayoutGestureNativeTsx11).onTouchesMove(ZoomLayoutGestureNativeTsx12).onStart(ZoomLayoutGestureNativeTsx13).onChange(ZoomLayoutGestureNativeTsx14).onEnd(ZoomLayoutGestureNativeTsx15).onFinalize(ZoomLayoutGestureNativeTsx16);
  }, items13);
  const items14 = [onCreateGesture, memo, memo1];
  const memo2 = obj11.useMemo(() => {
    let SimultaneousResult;
    if (c0 != null) {
      SimultaneousResult = tmp(memo, memo1);
    }
    if (SimultaneousResult == null) {
      const Gesture = LegacyBaseButton.Gesture;
      SimultaneousResult = Gesture.Simultaneous(memo, memo1);
    }
    return SimultaneousResult;
  }, items14);
  const obj10 = require("module_1652");
  const items15 = [closure_23, sharedValue2, sharedValue3, zoomScale];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp40, tmp41, tmp42, tmp43] = items15;
  class ZoomLayoutGestureNativeTsx17 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: closure_0.get() };
      items = [, , ];
      items[0] = obj1;
      obj5 = { translateY: closure_1.get() };
      items[1] = obj5;
      obj6 = { scale: closure_2.get() };
      items[2] = obj6;
      obj.transform = items;
      return obj;
    }
  }
  const items16 = [tmp41, tmp42, tmp43];
  ZoomLayoutGestureNativeTsx17.__closure = items16;
  ZoomLayoutGestureNativeTsx17.__workletHash = 12652072835214;
  ZoomLayoutGestureNativeTsx17.__initData = tmp40;
  const items17 = [sharedValue, sharedValue1, onLayout];
  const animatedStyle = require("module_1652").useAnimatedStyle(ZoomLayoutGestureNativeTsx17);
  const callback4 = obj11.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    const result1 = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
    if (c1 != null) {
      tmp3(nativeEvent);
    }
  }, items17);
  const imperativeHandle = obj11.useImperativeHandle(ref, () => ({
    zoomTo(scale) {
      let num = scale.scale;
      ({ x, y } = scale);
      if (num === undefined) {
        num = 2;
      }
      let flag = scale.animated;
      if (flag === undefined) {
        flag = true;
      }
      items = [closure_2_24, callback, sharedValue8, sharedValue7, _undefined4, _undefined5, num, _undefined6, x, closure_1_6, y, sharedValue1, callback2, sharedValue2, sharedValue3, flag, c0(c2[4]).withSpring, sharedValue];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      c10 = undefined;
      c11 = undefined;
      c12 = undefined;
      c13 = undefined;
      c14 = undefined;
      c15 = undefined;
      c16 = undefined;
      [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
      class ZoomLayoutGestureNativeTsx18 {
        constructor() {
          tmp = closure_0();
          result = closure_1.set(false);
          result1 = closure_2.set(true);
          bound = Math.max(closure_3, Math.min(closure_4, closure_5));
          tmp5 = closure_6;
          result2 = bound / closure_6.get();
          diff = closure_7 - closure_8.get() / 2;
          diff1 = closure_9 - closure_10.get() / 2;
          obj = closure_12;
          obj2 = closure_13;
          result3 = (closure_12.get() - diff) * result2;
          point = closure_11(diff + result3, diff1 + (closure_13.get() - diff1) * result2, bound);
          tmp10 = closure_14;
          tmp11 = bound;
          if (closure_14) {
            tmp12 = closure_15;
            tmp13 = closure_16;
            tmp11 = closure_15(bound, closure_16);
          }
          result4 = closure_6.set(tmp11);
          if (tmp10) {
            tmp15 = closure_15;
            tmp16 = closure_16;
            x = closure_15(point.x, closure_16);
          } else {
            x = point.x;
          }
          result5 = obj.set(x);
          if (tmp10) {
            tmp18 = closure_15;
            tmp19 = closure_16;
            y = closure_15(point.y, closure_16);
          } else {
            y = point.y;
          }
          result6 = obj2.set(y);
          return;
        }
      }
      const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
      ZoomLayoutGestureNativeTsx18.__closure = items1;
      ZoomLayoutGestureNativeTsx18.__workletHash = 12917402826720;
      ZoomLayoutGestureNativeTsx18.__initData = tmp;
      c0(c2[8]).scheduleOnUI(ZoomLayoutGestureNativeTsx18);
    },
    unzoom() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.animated;
      if (flag === undefined) {
        flag = true;
      }
      items = [closure_2_25, callback, sharedValue8, sharedValue7, _undefined6, flag, c0(c2[4]).withSpring, _undefined4, sharedValue, sharedValue2, sharedValue3];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      class ZoomLayoutGestureNativeTsx19 {
        constructor() {
          tmp = closure_0();
          result = closure_1.set(false);
          result1 = closure_2.set(true);
          tmp5 = closure_4;
          tmp4 = closure_3;
          if (closure_4) {
            tmp7 = closure_5;
            tmp8 = closure_6;
            tmp9 = closure_7;
            tmp6 = closure_5(closure_6, closure_7);
          } else {
            tmp6 = closure_6;
          }
          result2 = closure_3.set(tmp6);
          num = 0;
          tmp11 = closure_8;
          if (tmp5) {
            tmp12 = closure_5;
            tmp13 = closure_7;
            num = closure_5(0, closure_7);
          }
          result3 = closure_8.set(num);
          num2 = 0;
          tmp15 = closure_9;
          if (tmp5) {
            tmp16 = closure_5;
            tmp17 = closure_7;
            num2 = closure_5(0, closure_7);
          }
          result4 = closure_9.set(num2);
          return;
        }
      }
      const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
      ZoomLayoutGestureNativeTsx19.__closure = items1;
      ZoomLayoutGestureNativeTsx19.__workletHash = 16104393212129;
      ZoomLayoutGestureNativeTsx19.__initData = tmp;
      c0(c2[8]).scheduleOnUI(ZoomLayoutGestureNativeTsx19);
    }
  }));
  const obj12 = { gesture: memo2, children: null };
  const obj13 = { collapsable: false, style: null, onLayout: callback4, children: null };
  const items18 = [tmp.container, style];
  obj13.style = items18;
  const obj14 = { style: null, children };
  const items19 = [tmp.content, animatedStyle];
  obj14.style = items19;
  obj13.children = jsx(_modDef1652.View, { style: null, children });
  obj12.children = <c4 collapsable={false} style={null} onLayout={callback4}>{null}</c4>;
  return jsx(require("LegacyBaseButton").GestureDetector, { gesture: memo2, children: null });
});