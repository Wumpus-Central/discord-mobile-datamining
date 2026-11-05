// === Module 13410: useModalPanGesture ===

// Module 13410 (useModalPanGesture)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5430 */;
import spring_spring from "spring/spring" /* 5773 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

let closure_3 = { code: "(function useModalPanGestureTsx1(){let[onStart,scheduleOnRN,start,translateY]=this.__closure;if(onStart!=null){scheduleOnRN(onStart);}start.set({y:translateY.get()});})" };
let closure_4 = { code: "(function useModalPanGestureTsx2({translationY:translationY}){let[translateY,interpolate,start,maxTranslate,Extrapolate]=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));})" };
let closure_5 = { code: "(function useModalPanGestureTsx3(){let[scheduleOnRN,ModalActionCreators]=this.__closure;scheduleOnRN(ModalActionCreators.pop);})" };
let closure_6 = { code: "(function useModalPanGestureTsx4({velocityY:velocityY}){let[translateY,thresholdTranslate,thresholdVelocity,withSpring,height,_worklet_7373190729132_init_data,scheduleOnRN,ModalActionCreators,onClose,onEnd]=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function useModalPanGestureTsx3Factory([_worklet_7373190729132_init_data,scheduleOnRN,ModalActionCreators]){const useModalPanGestureTsx3=function(){scheduleOnRN(ModalActionCreators.pop);};useModalPanGestureTsx3.__closure=[scheduleOnRN,ModalActionCreators];useModalPanGestureTsx3.__workletHash=7373190729132;useModalPanGestureTsx3.__initData=_worklet_7373190729132_init_data;return useModalPanGestureTsx3;}([_worklet_7373190729132_init_data,scheduleOnRN,ModalActionCreators])));if(onClose!=null){scheduleOnRN(onClose);}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){scheduleOnRN(onEnd);}})" };
let result = size.fileFinishedImporting("modules/video_calls/native/components/useModalPanGesture.tsx");

export default function useModalPanGesture(thresholdVelocity) {
  let num = thresholdVelocity.thresholdVelocity;
  if (num === undefined) {
    num = 500;
  }
  const translateY = thresholdVelocity.translateY;
  ({ gestureEnabled, maxTranslate, thresholdTranslate, height, onStart, onEnd, onClose } = thresholdVelocity);
  const sharedValue = _mod1652.useSharedValue({ y: 0 });
  const Gesture = LegacyBaseButton.Gesture;
  const PanResult = Gesture.Pan();
  items = [_undefined4, onStart, _mod1705.scheduleOnRN, sharedValue, translateY];
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  function useModalPanGestureTsx1() {
    if (null != c0) {
      _undefined2(tmp);
    }
    const result = _undefined3.set({ y: _undefined4.get() });
    const obj = { y: _undefined4.get() };
  }
  let items1 = [tmp5, tmp6, tmp7, tmp8];
  useModalPanGestureTsx1.__closure = items1;
  useModalPanGestureTsx1.__workletHash = 8962705443819;
  useModalPanGestureTsx1.__initData = tmp4;
  const enabledResult = Gesture.Pan().enabled(gestureEnabled);
  const items2 = [_undefined5, translateY, _mod1652.interpolate, sharedValue, maxTranslate, _mod1652.Extrapolate];
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  function useModalPanGestureTsx2(translationY) {
    items = [0, c3];
    const items1 = [0, c3];
    const result = _undefined.set(_undefined2(_undefined3.get().y + translationY.translationY, items, items1, _undefined5.CLAMP));
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  useModalPanGestureTsx2.__closure = items3;
  useModalPanGestureTsx2.__workletHash = 6248783476229;
  useModalPanGestureTsx2.__initData = tmp9;
  const onStartResult = Gesture.Pan().enabled(gestureEnabled).onStart(useModalPanGestureTsx1);
  const items4 = [_undefined6, translateY, thresholdTranslate, num, spring_spring.withSpring, height, closure_5, _mod1705.scheduleOnRN, ModalActionCreatorsDefault, onClose, onEnd];
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
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
  function useModalPanGestureTsx4(velocityY) {
    velocityY = velocityY.velocityY;
    const obj = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true, velocity: velocityY };
    if (_undefined.get() < c1) {
      if (velocityY < c2) {
        const result = obj2.set(_undefined4(0, obj));
      }
      if (null != c9) {
        _undefined6(tmp11);
      }
    }
    items = [c5, _undefined6, c7];
    _undefined = undefined;
    c1 = undefined;
    [tmp6, tmp7, tmp8] = items;
    function useModalPanGestureTsx3() {
      _undefined(_undefined2.pop);
    }
    const items1 = [tmp7, tmp8];
    useModalPanGestureTsx3.__closure = items1;
    useModalPanGestureTsx3.__workletHash = 7373190729132;
    useModalPanGestureTsx3.__initData = tmp6;
    const result1 = obj2.set(_undefined4(c4, obj, "respect-motion-settings", useModalPanGestureTsx3));
    if (null != c8) {
      _undefined6(c8);
    }
  }
  const items5 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  useModalPanGestureTsx4.__closure = items5;
  useModalPanGestureTsx4.__workletHash = 15324722005675;
  useModalPanGestureTsx4.__initData = tmp15;
  const onUpdateResult = Gesture.Pan().enabled(gestureEnabled).onStart(useModalPanGestureTsx1).onUpdate(useModalPanGestureTsx2);
  const onEndResult = Gesture.Pan().enabled(gestureEnabled).onStart(useModalPanGestureTsx1).onUpdate(useModalPanGestureTsx2).onEnd(useModalPanGestureTsx4);
  return Gesture.Pan().enabled(gestureEnabled).onStart(useModalPanGestureTsx1).onUpdate(useModalPanGestureTsx2).onEnd(useModalPanGestureTsx4).failOffsetY(-0.01).activeOffsetY([-5, 15]);
};