// discord_app/modules/video_calls/native/components/useModalPanGesture.tsx
import set from "../../../../../_runtime/00002_set.js";

let closure_3 = { code: "function useModalPanGestureTsx1({velocityY:velocityY}){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,onClose,onEnd}=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function(){runOnJS(ModalActionCreators.pop)();}));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}}" };
let closure_4 = { code: "function useModalPanGestureTsx2({translationY:translationY}){const{translateY,interpolate,start,maxTranslate,Extrapolate}=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));}" };
let closure_5 = { code: "function useModalPanGestureTsx3(){const{onStart,runOnJS,start,translateY}=this.__closure;if(onStart!=null){runOnJS(onStart)();}start.set({y:translateY.get()});}" };
let closure_6 = { code: "function useModalPanGestureTsx4(){const{runOnJS,ModalActionCreators}=this.__closure;runOnJS(ModalActionCreators.pop)();}" };
let result = set.fileFinishedImporting("modules/video_calls/native/components/useModalPanGesture.tsx");

export default function useModalPanGesture(thresholdVelocity) {
  let num = thresholdVelocity.thresholdVelocity;
  if (num === undefined) {
    num = 500;
  }
  const maxTranslate = thresholdVelocity.maxTranslate;
  const thresholdTranslate = thresholdVelocity.thresholdTranslate;
  const height = thresholdVelocity.height;
  const translateY = thresholdVelocity.translateY;
  const onStart = thresholdVelocity.onStart;
  const onEnd = thresholdVelocity.onEnd;
  const onClose = thresholdVelocity.onClose;
  let sharedValue;
  let obj = num(thresholdTranslate[0]);
  sharedValue = obj.useSharedValue({ y: 0 });
  const Gesture = num(thresholdTranslate[1]).Gesture;
  const PanResult = Gesture.Pan();
  class J {
    constructor() {
      if (null != onStart) {
        tmp2 = c0;
        tmp3 = thresholdTranslate;
        obj = c0(thresholdTranslate[0]);
        tmp4 = obj.runOnJS(tmp)();
      }
      obj = { y: translateY.get() };
      result = closure_8.set(obj);
      return;
    }
  }
  obj = { onStart, runOnJS: num(thresholdTranslate[0]).runOnJS, start: sharedValue, translateY };
  J.__closure = obj;
  J.__workletHash = 15847989720945;
  J.__initData = onStart;
  const enabledResult = Gesture.Pan().enabled(thresholdVelocity.gestureEnabled);
  let fn = function x(translationY) {
    const sum = sharedValue.get().y + translationY.translationY;
    const items = [0, maxTranslate];
    const items1 = [0, maxTranslate];
    const result = translateY.set(num(thresholdTranslate[0]).interpolate(sum, items, items1, num(thresholdTranslate[0]).Extrapolate.CLAMP));
  };
  obj = { translateY, interpolate: num(thresholdTranslate[0]).interpolate, start: sharedValue, maxTranslate, Extrapolate: num(thresholdTranslate[0]).Extrapolate };
  fn.__closure = obj;
  fn.__workletHash = 6809176231356;
  fn.__initData = translateY;
  const onStartResult = Gesture.Pan().enabled(thresholdVelocity.gestureEnabled).onStart(J);
  class O {
    constructor(arg0) {
      velocityY = thresholdVelocity.velocityY;
      obj = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001, velocity: velocityY };
      obj2 = translateY;
      if (translateY.get() < thresholdTranslate) {
        tmp = c0;
        if (velocityY < c0) {
          tmp2 = c0;
          tmp3 = thresholdTranslate;
          obj3 = c0(thresholdTranslate[2]);
          num = 0;
          result = obj2.set(obj3.withSpring(0, obj));
        }
        tmp11 = null;
        if (null != onEnd) {
          tmp12 = c0;
          tmp13 = thresholdTranslate;
          obj7 = c0(thresholdTranslate[0]);
          tmp14 = obj7.runOnJS(tmp10)();
        }
        return;
      }
      obj4 = c0(thresholdTranslate[2]);
      fn = function n() {
        callback(4185).runOnJS(callback2(4676).pop)();
      };
      obj = { runOnJS: c0(thresholdTranslate[0]).runOnJS, ModalActionCreators: maxTranslate(thresholdTranslate[3]) };
      fn.__closure = obj;
      fn.__workletHash = 14223008059411;
      fn.__initData = onEnd;
      result1 = obj2.set(obj4.withSpring(height, obj, "respect-motion-settings", fn));
      if (null != onClose) {
        tmp7 = c0;
        tmp8 = thresholdTranslate;
        obj6 = c0(thresholdTranslate[0]);
        tmp9 = obj6.runOnJS(tmp6)();
      }
      return;
    }
  }
  const onUpdateResult = Gesture.Pan().enabled(thresholdVelocity.gestureEnabled).onStart(J).onUpdate(fn);
  O.__closure = { translateY, thresholdTranslate, thresholdVelocity: num, withSpring: num(thresholdTranslate[2]).withSpring, height, runOnJS: num(thresholdTranslate[0]).runOnJS, ModalActionCreators: maxTranslate(thresholdTranslate[3]), onClose, onEnd };
  O.__workletHash = 16881029664873;
  O.__initData = height;
  obj1 = { translateY, thresholdTranslate, thresholdVelocity: num, withSpring: num(thresholdTranslate[2]).withSpring, height, runOnJS: num(thresholdTranslate[0]).runOnJS, ModalActionCreators: maxTranslate(thresholdTranslate[3]), onClose, onEnd };
  const onEndResult = onUpdateResult.onEnd(O);
  return onUpdateResult.onEnd(O).failOffsetY(-0.01).activeOffsetY([-5, 15]);
};